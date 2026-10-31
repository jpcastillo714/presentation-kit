---
name: software-demo-video
description: Record a demo video of a web interface (a dashboard, a notebook app, a chat with a language model, any web app) from the REAL running product, with presentation-kit's recorder: zoom where the action is, a visible cursor, a box on the element in use, captions, and an on-screen label of where it was recorded; mock-ups are stamped as such. Use it whenever the user wants to show how an app or interface is used, a screencast, a walkthrough, a video for a talk, a README or a tutorial, or a backup clip for a live demo. It does not design or build the interface itself (that is frontend or interface work).
---

# software-demo-video

**Where the kit is.** This skill lives in `<kit>/skill/software-demo-video/`; the kit root (`<kit>`) is two folders
up (follow the link if it was installed as a symlink or junction). If you cannot find it, ask where the repository
was cloned. Answer in the user's language.

The video is evidence that the product does something. It is only evidence if it comes from the product.

## Ask first

- **What exactly to demonstrate:** one task, in order, with its inputs (the filter applied, the question typed into
  the model) and the result the audience should see at the end.
- **Is there code that runs?** If yes, the video is recorded from it, never drawn. If not, it can only be a mock-up,
  and `mockup: true` stamps that on every frame.
- **How to start it** (a file, a URL, a command) and whether it needs data or credentials: use test data and test
  accounts only, never the user's real ones.
- **Where the video goes** (a slide, a README, a tutorial) and its language.

## Rules (evidence in `<kit>/docs/software-demos.md`, which grades how strong each one is)

- Record the real app in a real browser; anything mocked, sped up or cut is said on screen.
- Write the task before recording and start from a clean state (fresh session, no filters, fixed data).
- One task per clip, well under 5 minutes; the first caption says the goal, the last one the result.
- The amber box marks the element in use; zoom only where small text must be read (`zoom: false` otherwise).
- For LLM demos, waits are cut and the caption says how long (automatic for `wait_for`); tell the audience how many
  of your test runs worked.
- For a live demo, keep this recording ready as the backup.

## How

Write `demo.yml` next to the app (format and every step type: the docstring at the top of `<kit>/engine/demo.py`):

```yaml
title: Fitting a line hides what the residuals show
url: app/index.html          # or http://localhost:8000/ with start: "command that launches it"
viewport: [1600, 900]        # 16:9 fills a slide without bars
output: figures/demo_residuals
lang: en                     # es: Spanish label and cut notes
steps:
  - caption: The goal, in one sentence
    hold: 1600
  - click: "#fit"
    caption: Fit a line to dataset I
  - zoom: "#stats"
    caption: "r = 0.816"
  - type: {selector: "#question", text: "Which month failed most?"}
  - press: Enter
  - wait_for: "#answer:not(:empty)"
  - view: full
    caption: The result, in one sentence
```

```bash
python <kit>/engine/kit.py demo <folder>/demo.yml
```

It writes the MP4 (H.264) and a PNG poster. Needs ffmpeg on the PATH and the `playwright` Python package (it uses the
installed Chrome or Edge). Selectors come from the real page: open it and read its HTML instead of guessing.

**Check before delivering:** watch the video, or extract frames (ffmpeg) at each step and look at them: the box on the
right element, captions readable, nothing cut off, the label present. Then tell the user where the files are.

To put it on a slide, a presentation-kit script takes `@video figures/demo_residuals.mp4` (plays when the slide opens;
the PDF and the .pptx get the poster). Reference: `<kit>/examples/software-demo` (app, demo.yml, video and deck).
