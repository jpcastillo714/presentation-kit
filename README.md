English · [Español](README.es.md)

# presentation-kit

A kit for scientific and lab presentations built from **real examples and the context they are for**, not from a
catalog of templates. You write a plain-text script where every slide title is a conclusion; the look comes from a
**profile** (which can be extracted from a reference deck from your lab, faculty or conference); and the same script
produces an **HTML deck** (animations, presenter view, offline single file, PDF) and an **editable .pptx**.

It ships with an AI-agent **skill** (Claude Code format, readable by any agent) so you can ask an assistant to build
decks with it (it starts by asking what you want to get), and with worked examples you can hand to a model as
reference.

| Sober register | Expressive register |
|---|---|
| [`examples/anscombe`](examples/anscombe): light background, static figures, one idea per slide. Anscombe's quartet (1973). | [`examples/exoplanets`](examples/exoplanets): night-sky profile, full-bleed figures, five animated scenes. How planets you cannot see are found. |

A third example, [`examples/software-demo`](examples/software-demo), shows a dashboard in a talk: the video on its
slide is recorded from the running app, with zoom and a cursor where the clicks happen.

Each example folder has the deck as a single `.html` file, plus its `.pdf` and `.pptx`. Open the `.html` in a browser
and use the arrow keys.

## What is in the box

```
presentation-kit/
├─ PRINCIPLES.md            15 principles with their evidence, the rule for when to animate, a review checklist
├─ docs/                    the sources: 26 well-known charts, 34 talks and 20 software demos, with links and
│                           verification status
├─ examples/                worked decks with a "why it works" note on every slide (press E)
│  ├─ anscombe/             sober register
│  ├─ exoplanets/           expressive register (animated scenes)
│  └─ software-demo/        a talk that shows an interface: a real app and its recorded demo video
├─ profiles/                the look: colors, fonts, logo, background, optional .pptx template
│  ├─ sober/                default: light paper, one accent
│  └─ night/                dark night sky, amber accent
├─ engine/                  the engine (no design of its own)
│  ├─ kit.py                every command
│  ├─ deck.css, deck.js     1920×1080 stage, steps, notes, presenter view, print/PDF
│  ├─ anim.js               animation library: scenes with one state per step
│  ├─ demo.py               records demo videos from a running web app
│  └─ figures.py            matplotlib with the profile's style
└─ skill/presentation-kit/  the agent skill
```

## Install

Python 3.10+ and a Chromium-based browser (Chrome, Edge or Chromium) for PDFs and screenshots.

```bash
git clone https://github.com/jpcastillo714/presentation-kit.git
```

```bash
pip install -r presentation-kit/requirements.txt
```

Optional:

- PowerPoint on Windows, only for `render` (exporting the `.pptx` to images to check it).
- For demo videos (`demo`): [ffmpeg](https://ffmpeg.org) on the PATH (or in `KIT_FFMPEG`). Playwright is in
  `requirements.txt` and uses the browser you already have, so `playwright install` is not needed.

## Quick start

```bash
python engine/kit.py new my_talk --profile sober --title "My talk"
```

Write `my_talk/script.md` (one slide per `## Conclusion as a sentence`; keys are documented inside the file), make
your figures with `engine/figures.py`, then:

```bash
python engine/kit.py build my_talk
```

```bash
python engine/kit.py review my_talk/deck.html
```

```bash
python engine/kit.py pdf my_talk/deck.html
```

For a Spanish deck, write `script.es.md` (or start with `--lang es`) and build it with `--script script.es.md`: you
get `deck.es.html` and `my_talk.es.pptx`.

| Command | What it does |
|---|---|
| `new` | Scaffolds a deck folder with the engine, a profile and a starter script |
| `build` | Script → `deck.html` + `<name>.pptx`. `--script script.es.md` → `deck.es.html`, `<name>.es.pptx` |
| `review` | Mechanical review: label-titles, figures without source, too much text, missing images or animations |
| `shots` | One PNG per slide (final state), to review by eye or let a model review |
| `statics` | Final frame of each animation, used by the `.pptx` |
| `package` | Single self-contained HTML that works offline |
| `pdf` | PDF via Chrome/Edge, one slide per page, animations in their final state |
| `profile --from ref.pptx --name lab` | Profile from a reference deck: theme and actually-used colors, fonts, logos, background, template |
| `profile --regenerate <dir>` | Rewrites `profile.css` and `figures.mplstyle` after editing `profile.yml` |
| `render` | `.pptx` → PNG with PowerPoint (Windows only) |
| `demo <folder>/demo.yml` | Demo video (MP4 + poster) recorded from the real running app |

Every command and option also has a Spanish alias (`construir`, `revisar`, `--perfil`…).

### The script format (`script.md`)

```markdown
---
title: What the audience should remember
profile: sober
lang: en
transition: fade        # optional: the only transition allowed
---

## A single outlier changes the slope we report
@figure figures/panel_III.svg
@source Anscombe 1973
> Speaker notes go here.
@why Design note shown in study mode (E).
```

Keys: `@type cover|section|figure|two|number|text`, `@figure`, `@source`, `@number`, `@anim`, `@steps N`,
`@static`, `@subtitle`, `@kicker`, `@class full`, `@video`, `@appendix`, `@why`. Lines starting with `- ` are bullets, with `> `
speaker notes; the rest are paragraphs.

### Animations

Animations live in the deck's `animations.js`, built with the engine's library:

```js
window.animations.orbit = K.scene({
  mount(svg) { /* create the SVG elements once, return them */ },
  states: [{ curve: 0 }, { curve: 1 }],      // one state per step (@steps 1)
  draw(g, state, level, t) { /* draw one state */ },
  duration: 1200, loop: false,
});
```

The library interpolates when moving forward, jumps when going back, draws the final state in the PDF, and switches
language with `K.t("english", "español")`. See [`examples/exoplanets/animations.js`](examples/exoplanets/animations.js).
Animate only when the content **is** a change (PRINCIPLES.md, "When to animate").

### Demo videos of software

When a talk shows an interface (a dashboard, a notebook, a chat with a language model), `demo` records the task
from the **real running app**: you list the steps in a `demo.yml` (open, choose, click, type, wait), Playwright
performs them in your browser, and the video is composed from those screenshots, with the camera moving to where
the action is, a visible cursor, a box on the element in use and a caption band.

```yaml
title: Fitting a line hides what the residuals show
url: app/index.html          # or http://localhost:8000/ (with start: to launch it)
output: figures/demo_residuals
steps:
  - click: "#fit"
    caption: Fit a line to dataset I
  - zoom: "#stats"
    caption: "r = 0.816"
  - view: full
```

```bash
python engine/kit.py demo examples/software-demo/demo.yml
```

Then `@video figures/demo_residuals.mp4` on a slide: it plays when the slide opens. A demo of something not built
yet carries `mockup: true`, which stamps it on every frame; waits longer than 1.5 s are cut and the caption says
so. The rules, and the evidence behind each, are in [`docs/software-demos.md`](docs/software-demos.md).

### In the HTML deck

→ / space / click: next (steps first) · ←: back · **N** notes · **P** presenter view (notes, next slide, clock) ·
**B** black screen · **F** full screen · **E** study mode ("why it works") · **M** animations on/off ·
**V** play/pause a demo video · **?** help.

Animations play even if the operating system asks to reduce motion: that preference belongs to the presenter's
computer, not to the room. Add `motion: respect` to the script to honor it.

## Using it with an AI agent

The skill in [`skill/presentation-kit/SKILL.md`](skill/presentation-kit/SKILL.md) tells an agent how to work with
the kit. It starts by asking what you want to get (the talk itself, the content, the deck, a demo; HTML or .pptx)
and writes the answers to the deck's `brief.md`; then script first, profile from context, figures, animations only
under the four conditions, review by eye. For
Claude Code, link it into your skills folder so it stays in sync with the repository:

```bash
ln -s "$(pwd)/presentation-kit/skill/presentation-kit" ~/.claude/skills/presentation-kit
```

On Windows (PowerShell), use a junction instead:

```powershell
New-Item -ItemType Junction -Path "$HOME\.claude\skills\presentation-kit" -Target "$PWD\presentation-kit\skill\presentation-kit"
```

Other agents (Codex, Gemini, Cursor…) can simply be told to read `skill/presentation-kit/SKILL.md` and
`examples/README.md`. The method behind the kit is exactly that: give the model real decks as reference.

## Adapting it to your lab

- **You have a .pptx from your lab or faculty:** `python engine/kit.py profile --from lab.pptx --name lab`. It reads
  the theme, the colors actually used on the slides (decks generated by code often keep Office's default theme), logos
  and background images, and keeps the file as the `.pptx` template. Read the warnings it prints.
- **The reference is a PDF, an image or a web page:** copy `profiles/sober`, edit `profile.yml` while looking at the
  reference, and run `profile --regenerate`.
- **Custom fonts:** put `Family-Weight.woff2` files in `profiles/<name>/fonts/`; the packaged HTML embeds them.
- **A deck that went well** is the best contribution: add it to `examples/` with an `@why` on every slide.

## Licenses

- Code (`engine/`, `skill/`, `examples/*/figures/*.py`, `examples/*/animations.js`): [MIT](LICENSE).
- Texts, catalogs, principles and example decks: [CC BY 4.0](LICENSE-docs.md).

The catalogs describe and link third-party works; they do not reproduce them. Quotes are under 15 words.

Author: Juan Pablo Castillo Zepeda.
