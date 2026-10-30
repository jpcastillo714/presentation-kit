"""Records a demo video of a web interface from the REAL running product.

    python engine/kit.py demo <folder>/demo.yml

The demo is a list of steps (open, click, type, zoom, wait…) that Playwright performs on the actual app, using the
Chrome or Edge already installed. At every step it takes a high-resolution screenshot and the position of the element
being used. The video is then composed from those screenshots: the camera zooms to where the action happens, a visible
cursor moves slowly to the target, a ripple marks each click, a caption explains the step, and a small label states
where it was recorded from. ffmpeg encodes it as MP4 (H.264), plus a PNG poster for the PDF and the .pptx.

Because the frames come from running the code, the video shows what the product really does. A demo of something
that does not exist yet must say so: `mockup: true` stamps «Mock-up: not the real product» on every frame.

demo.yml:

    title: Fitting a line hides what the residuals show
    url: app/index.html            # a file next to demo.yml, or http://localhost:8000/ for a running app
    start: python -m http.server 8000   # optional: command that starts the app (run in `cwd`), stopped at the end
    cwd: app                       # optional, relative to demo.yml
    viewport: [1600, 900]          # CSS pixels; 16:9 fits the slide without bars
    output: figures/demo_fit       # → figures/demo_fit.mp4 and figures/demo_fit.png
    label: Recorded from app/index.html   # optional; default «Recorded from <url> · <date>»
    mockup: false                  # true stamps «Mock-up: not the real product» on every frame
    lang: en                       # es: Spanish label («Grabado desde…», «Maqueta…»)
    steps:
      - caption: The dashboard opens on dataset I
        hold: 1500
      - select: {selector: "#dataset", value: "II"}
        caption: Choose dataset II
      - click: "#fit"
        caption: Fit a line
      - zoom: "#stats"
        caption: r = 0.816, the same as dataset I
        hold: 2500
      - view: full                   # zoom back out
      - type: {selector: "#question", text: "Which month failed most?"}
      - press: Enter
      - wait_for: "#answer:not(:empty)"
      - scroll: "#chart"
      - wait: 800

Every step accepts `caption`, `hold` (ms the result stays on screen) and `zoom: false` (stay on the full view).
A `wait_for` that takes longer than 1.5 s is skipped in the video and its caption says how many seconds were cut.

How to write a good demo (evidence and sources in docs/software-demos.md): one task per clip, under 5 minutes; a
first caption with the goal and a last one with the result; zoom only where small text must be read, otherwise
`zoom: false`; a clean starting state; and say on screen anything mocked, sped up or cut.
"""
from __future__ import annotations

import datetime
import math
import os
import shutil
import subprocess
import sys
import time
import urllib.request
from io import BytesIO
from pathlib import Path

import yaml
from PIL import Image, ImageDraw, ImageFont

OUT_W, OUT_H, FPS, SCALE = 1920, 1080, 30, 2
# The page is drawn in a 16:9 window above a caption band, so captions never cover the interface.
CW, CH, CX, CY = 1728, 972, 96, 8
BAND_Y = CY + CH
ACCENT = (245, 166, 35)          # amber: visible on light and dark interfaces


# ---------------------------------------------------------------- helpers
def _font(size: int):
    for path in ("C:/Windows/Fonts/segoeui.ttf", "C:/Windows/Fonts/arial.ttf",
                 "/System/Library/Fonts/Supplemental/Arial.ttf", "/Library/Fonts/Arial.ttf",
                 "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"):
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default(size)


def _ffmpeg() -> str:
    exe = os.environ.get("KIT_FFMPEG") or shutil.which("ffmpeg")
    if not exe:
        sys.exit("[ERROR] ffmpeg not found. Install it (https://ffmpeg.org) or set KIT_FFMPEG.")
    return exe


def _ease(t: float) -> float:
    return 0.5 - 0.5 * math.cos(math.pi * max(0.0, min(1.0, t)))


def _camera_for(box, vw, vh, zoom=True):
    """Region of the viewport (CSS px) to show: the whole page, or a 16:9 window around the target."""
    if not box or not zoom:
        return (0.0, 0.0, float(vw), float(vh))
    x, y, w, h = box
    cw = max(w * 2.4, vw * 0.42, h * 2.4 * 16 / 9)
    cw = min(cw, vw)
    ch = cw * 9 / 16
    if ch > vh:
        ch, cw = vh, vh * 16 / 9
    cx, cy = x + w / 2, y + h / 2
    left = min(max(cx - cw / 2, 0), vw - cw)
    top = min(max(cy - ch / 2, 0), vh - ch)
    return (left, top, cw, ch)


def _lerp(a, b, t):
    return tuple(x + (y - x) * t for x, y in zip(a, b))


# ---------------------------------------------------------------- recording
def record(spec_path: Path) -> list[dict]:
    """Runs the steps on the real app and returns the beats: screenshots plus where the action is."""
    from playwright.sync_api import sync_playwright
    sys.path.insert(0, str(Path(__file__).parent))
    from kit import browser

    spec = yaml.safe_load(spec_path.read_text(encoding="utf-8"))
    base = spec_path.parent
    vw, vh = spec.get("viewport", [1600, 900])
    url = spec["url"]
    if not url.startswith(("http://", "https://", "file:")):
        target, _, query = url.partition("?")
        url = (base / target).resolve().as_uri() + (f"?{query}" if query else "")
    server = None
    if spec.get("start"):
        server = subprocess.Popen(spec["start"], shell=True, cwd=str(base / spec.get("cwd", ".")),
                                  stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        for _ in range(60):                       # wait until the app answers (max 30 s)
            try:
                urllib.request.urlopen(url, timeout=1)
                break
            except Exception:
                time.sleep(0.5)
    beats: list[dict] = []
    try:
        with sync_playwright() as p:
            b = p.chromium.launch(executable_path=browser(), headless=True)
            page = b.new_context(viewport={"width": vw, "height": vh}, device_scale_factor=SCALE).new_page()
            page.goto(url, wait_until="load")
            page.wait_for_timeout(400)
            shot = lambda: Image.open(BytesIO(page.screenshot())).convert("RGB")
            cursor = (vw * 0.5, vh * 0.55)
            camera = _camera_for(None, vw, vh)

            def beat(img, box=None, cam=None, caption="", move=700, hold=900, click=False, cur=None):
                nonlocal cursor, camera
                cursor = cur or cursor
                camera = cam or camera
                beats.append({"img": img, "box": box, "camera": camera, "cursor": cursor, "caption": caption,
                              "move": move, "hold": hold, "click": click})

            def box_of(selector):
                nonlocal current
                loc = page.locator(selector).first
                before = page.evaluate("[scrollX, scrollY]")
                loc.scroll_into_view_if_needed()
                if page.evaluate("[scrollX, scrollY]") != before:   # the page moved: show it moving
                    page.wait_for_timeout(250)
                    current = shot()
                    beat(current, None, _camera_for(None, vw, vh), "", move=500, hold=200)
                bb = loc.bounding_box()
                if not bb:
                    sys.exit(f"[ERROR] element not found or not visible: {selector}")
                return (bb["x"], bb["y"], bb["width"], bb["height"])

            current = shot()
            for step in spec.get("steps", []):
                cap = step.get("caption", "")
                hold = int(step.get("hold", 1100))
                zoom = step.get("zoom", True) is not False
                if "click" in step or "select" in step or "type" in step:
                    sel = step.get("click") or (step.get("select") or step.get("type"))["selector"]
                    bx = box_of(sel)
                    center = (bx[0] + bx[2] / 2, bx[1] + bx[3] / 2)
                    cam = _camera_for(bx, vw, vh, zoom)
                    beat(current, bx, cam, cap, move=900, hold=250, click=True, cur=center)
                    if "click" in step:
                        page.click(sel)
                        page.wait_for_timeout(int(step.get("wait", 500)))
                        current = shot()
                        beat(current, bx, cam, cap, move=0, hold=hold)
                    elif "select" in step:
                        page.select_option(sel, step["select"]["value"])
                        page.wait_for_timeout(int(step.get("wait", 400)))
                        current = shot()
                        beat(current, bx, cam, cap, move=0, hold=hold)
                    else:
                        page.click(sel)
                        text = str(step["type"]["text"])
                        for i in range(0, len(text), 3):  # show the text being typed, a few letters per frame
                            page.keyboard.type(text[i:i + 3])
                            current = shot()
                            beat(current, bx, cam, cap, move=0, hold=110)
                        beats[-1]["hold"] = hold
                elif "press" in step:
                    page.keyboard.press(step["press"])
                    page.wait_for_timeout(int(step.get("wait", 600)))
                    current = shot()
                    beat(current, None, None, cap, move=0, hold=hold)
                elif "zoom" in step and isinstance(step["zoom"], str):
                    bx = box_of(step["zoom"])
                    beat(current, bx, _camera_for(bx, vw, vh), cap, move=900, hold=hold)
                elif step.get("view") == "full":
                    beat(current, None, _camera_for(None, vw, vh), cap, move=800, hold=hold)
                elif "scroll" in step:
                    page.locator(step["scroll"]).first.scroll_into_view_if_needed()
                    page.wait_for_timeout(300)
                    current = shot()
                    beat(current, None, _camera_for(None, vw, vh), cap, move=600, hold=hold)
                elif "wait_for" in step:
                    t0 = time.monotonic()
                    page.wait_for_selector(step["wait_for"], timeout=int(step.get("timeout", 15000)))
                    waited = time.monotonic() - t0
                    if waited > 1.5:                      # the video skips the wait, so it says so (software-demos.md)
                        cut = f"{waited:.0f} s " + ("cortados" if spec.get("lang") == "es" else "cut")
                        cap = f"{cap} · {cut}" if cap else cut
                    current = shot()
                    beat(current, None, None, cap, move=0, hold=hold)
                elif "goto" in step:
                    page.goto(step["goto"], wait_until="load")
                    current = shot()
                    beat(current, None, _camera_for(None, vw, vh), cap, move=0, hold=hold)
                else:                                     # wait / caption only
                    page.wait_for_timeout(int(step.get("wait", 0)))
                    current = shot()
                    beat(current, None, None, cap, move=0, hold=hold)
            b.close()
    finally:
        if server:
            server.terminate()
    return beats, spec, url


# ---------------------------------------------------------------- rendering
def _draw_cursor(d: ImageDraw.ImageDraw, x: float, y: float, s: float = 1.0):
    pts = [(0, 0), (0, 34), (9, 26), (15, 40), (21, 37), (15, 24), (27, 24)]
    poly = [(x + px * s, y + py * s) for px, py in pts]
    d.polygon(poly, fill=(255, 255, 255), outline=(20, 20, 20), width=2)


def render(beats: list[dict], spec: dict, url: str, out: Path) -> None:
    vw, vh = spec.get("viewport", [1600, 900])
    font, small = _font(34), _font(20)
    es = spec.get("lang") == "es" or "lang=es" in str(spec.get("url", ""))
    today = datetime.date.today().isoformat()
    label = spec.get("label") or (f"Grabado desde {spec.get('url')} · {today}" if es else f"Recorded from {spec.get('url')} · {today}")
    if spec.get("mockup"):
        label = "Maqueta: no es el producto real" if es else "Mock-up: not the real product"
    out.parent.mkdir(parents=True, exist_ok=True)
    mp4 = out.parent / (out.name + ".mp4")         # not with_suffix: «demo.es» must keep its «.es»
    png = out.parent / (out.name + ".png")
    proc = subprocess.Popen([_ffmpeg(), "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24",
                             "-s", f"{OUT_W}x{OUT_H}", "-r", str(FPS), "-i", "-", "-c:v", "libx264", "-pix_fmt",
                             "yuv420p", "-crf", "20", "-movflags", "+faststart", str(mp4)], stdin=subprocess.PIPE)
    prev_cam, prev_cur = beats[0]["camera"], beats[0]["cursor"]
    last = None
    for bt in beats:
        n_move = int(bt["move"] / 1000 * FPS)
        n_hold = max(1, int(bt["hold"] / 1000 * FPS))
        for k in range(n_move + n_hold):
            t = _ease(k / n_move) if n_move and k < n_move else 1.0
            cam = _lerp(prev_cam, bt["camera"], t)
            cur = _lerp(prev_cur, bt["cursor"], t)
            frame = _frame(bt, cam, cur, k - n_move if bt["click"] else -1, font, small, label, vw, vh)
            proc.stdin.write(frame.tobytes())
            last = frame
        prev_cam, prev_cur = bt["camera"], bt["cursor"]
    for _ in range(int(0.6 * FPS)):                       # short rest on the final frame
        proc.stdin.write(last.tobytes())
    proc.stdin.close()
    proc.wait()
    last.save(png)
    seconds = sum(b["move"] + b["hold"] for b in beats) / 1000 + 0.6
    print(f"[OK] {mp4}  ({seconds:.1f} s, {len(beats)} beats) and poster {png.name}")


def _frame(bt, cam, cur, since_click, font, small, label, vw, vh) -> Image.Image:
    left, top, cw, ch = cam
    img = bt["img"]
    crop = img.crop((int(left * SCALE), int(top * SCALE), int((left + cw) * SCALE), int((top + ch) * SCALE)))
    frame = Image.new("RGBA", (OUT_W, OUT_H), (17, 20, 25, 255))
    frame.paste(crop.resize((CW, CH), Image.BILINEAR), (CX, CY))
    k = CW / cw                                           # CSS px → output px
    ov = Image.new("RGBA", (OUT_W, OUT_H), (0, 0, 0, 0))
    d = ImageDraw.Draw(ov)
    if bt["box"]:                                         # highlight the element being used
        x, y, w, h = bt["box"]
        rect = (CX + (x - left) * k - 8, CY + (y - top) * k - 8, CX + (x + w - left) * k + 8, CY + (y + h - top) * k + 8)
        d.rounded_rectangle(rect, radius=12, outline=ACCENT + (255,), width=5)
    cx, cy = CX + (cur[0] - left) * k, CY + (cur[1] - top) * k
    if 0 <= since_click < int(0.5 * FPS):                 # click ripple
        r = 18 + since_click * 3.2
        alpha = int(220 * (1 - since_click / (0.5 * FPS)))
        d.ellipse((cx - r, cy - r, cx + r, cy + r), outline=ACCENT + (alpha,), width=6)
    clip = Image.new("L", (OUT_W, OUT_H), 0)           # marks stay inside the page window, never over the band
    ImageDraw.Draw(clip).rectangle((CX, CY, CX + CW, CY + CH), fill=255)
    ov.putalpha(Image.composite(ov.getchannel("A"), Image.new("L", (OUT_W, OUT_H), 0), clip))
    frame = Image.alpha_composite(frame, ov)
    d = ImageDraw.Draw(frame)
    if bt["caption"]:                                     # caption in the band below the page
        tw = d.textlength(bt["caption"], font=font)
        d.text(((OUT_W - tw) / 2, BAND_Y + 26), bt["caption"], font=font, fill=(255, 255, 255, 255))
    d.text((CX, BAND_Y + 36), label, font=small, fill=(150, 158, 168, 255))
    if CY <= cy <= BAND_Y:
        _draw_cursor(ImageDraw.Draw(frame), cx, cy, 1.25)
    return frame.convert("RGB")


def main(argv: list[str]) -> None:
    if not argv:
        sys.exit(__doc__)
    spec_path = Path(argv[0]).resolve()
    beats, spec, url = record(spec_path)
    out = spec_path.parent / spec.get("output", "figures/demo")
    render(beats, spec, url, out)


if __name__ == "__main__":
    main(sys.argv[1:])
