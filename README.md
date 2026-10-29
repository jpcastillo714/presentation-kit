English · [Español](README.es.md)

# kit-presentaciones

A kit for scientific and lab presentations that are built from **real examples and the context they are for**, not
from a catalog of templates. You write a plain-text script where every slide title is a conclusion; the look comes
from a **profile** (which can be extracted from a reference deck from your lab, faculty or conference); and the same
script produces an **HTML deck** (with animations, presenter view, offline single file and PDF) and an **editable
.pptx**.

It ships with an AI-agent **skill** (Claude Code format, readable by any agent) so you can ask an assistant to build
decks with it, and with two worked examples you can hand to a model as reference.

| Sober register | Expressive register |
|---|---|
| `ejemplos/anscombe`: light background, static figures, one idea per slide. Anscombe's quartet (1973). | `ejemplos/exoplanetas`: night-sky profile, full-bleed figures, five animated scenes. How exoplanets are found. |

Both examples exist in English and Spanish (`deck.en.html` / `deck.html`, and ready-made `.pdf`, `.pptx` and
single-file `.html`).

## What is in the box

```
kit-presentaciones/
├─ PRINCIPLES.md / PRINCIPIOS.md   15 principles with their evidence, the rule for when to animate, a review checklist
├─ docs/en, docs/es                the sources: 26 well-known charts and 34 talks, each with links and verification status
├─ ejemplos/                       worked examples with a "why it works" note on every slide (press E)
│  ├─ anscombe/                    sober register
│  └─ exoplanetas/                 expressive register (motor/anim.js scenes)
├─ perfiles/                       profiles: colors, fonts, logo, background, optional .pptx template
│  ├─ sobrio/                      default: light paper, one accent
│  └─ noche/                       dark night sky, amber accent
├─ motor/                          the engine (no design of its own)
│  ├─ kit.py                       every command
│  ├─ deck.css, deck.js            1920×1080 stage, steps, notes, presenter view, print/PDF
│  ├─ anim.js                      animation library: scenes with one state per step
│  └─ figuras.py                   matplotlib with the profile's style
└─ skill/kit-presentaciones/       the agent skill
```

Folder and command names are in Spanish (the kit was born in Spanish); every command, option and script key also has
an English alias.

## Install

Python 3.10+ and a Chromium-based browser (Chrome, Edge or Chromium) for PDFs and screenshots.

```bash
git clone https://github.com/jpcastillo714/kit-presentaciones.git
```

```bash
pip install -r kit-presentaciones/requirements.txt
```

Optional: PowerPoint on Windows, only for `render` (exporting the `.pptx` to images to check it).

## Quick start

```bash
python motor/kit.py new my_talk --profile sobrio --title "My talk"
```

Write `my_talk/guion.md` (one slide per `## Conclusion as a sentence`; keys are documented inside the file), make your
figures with `motor/figuras.py`, then:

```bash
python motor/kit.py build my_talk
```

```bash
python motor/kit.py review my_talk/deck.html
```

```bash
python motor/kit.py pdf my_talk/deck.html
```

| Command (alias) | What it does |
|---|---|
| `new` (`nueva`) | Scaffolds a deck folder with the engine, a profile and a starter script |
| `build` (`construir`) | Script → `deck.html` + `<name>.pptx`. `--script guion.en.md` → `deck.en.html`, `<name>.en.pptx` |
| `review` (`revisar`) | Mechanical review: label-titles, figures without source, too much text, missing images or animations |
| `shots` (`capturas`) | One PNG per slide (final state), to review by eye or let a model review |
| `statics` (`estaticos`) | Final frame of each animation, used by the `.pptx` |
| `package` (`empaquetar`) | Single self-contained HTML that works offline |
| `pdf` | PDF via Chrome/Edge, one slide per page, animations in their final state |
| `profile --from ref.pptx --name lab` (`perfil`) | Profile from a reference deck: theme and actually-used colors, fonts, logos, background, template |
| `profile --regenerate <dir>` | Rewrites `perfil.css` and `figuras.mplstyle` after editing `perfil.yml` |
| `render` (`renderizar`) | `.pptx` → PNG with PowerPoint (Windows only) |

### The script format (`guion.md`)

```markdown
---
title: What the audience should remember
profile: sobrio
lang: en
transition: fade        # optional: the only transition allowed
---

## A single outlier changes the slope we report
@figure figuras/panel_III.svg
@source Anscombe 1973
> Speaker notes go here.
@why Design note shown in study mode (E).
```

Keys: `@type cover|section|figure|two|number|text`, `@figure`, `@source`, `@number`, `@anim`, `@steps N`,
`@static`, `@subtitle`, `@kicker`, `@class full`, `@appendix`, `@why`. Lines starting with `- ` are bullets, with `> `
speaker notes; the rest are paragraphs. Spanish keys work too (`@figura`, `@fuente`, …).

### In the HTML deck

→ / space / click: next (steps first) · ←: back · **N** notes · **P** presenter view (notes, next slide, clock) ·
**B** black screen · **F** full screen · **E** study mode ("why it works") · **M** animations on/off · **?** help.

Animations play even if the operating system asks to reduce motion: that preference belongs to the presenter's
computer, not to the room. Add `motion: respect` to the script to honor it.

## Using it with an AI agent

The skill in `skill/kit-presentaciones/SKILL.md` tells an agent how to work with the kit (script first, profile from
context, figures, animations only under the four conditions, review by eye). For Claude Code, link it into your skills
folder so it stays in sync with the repo:

```bash
ln -s "$(pwd)/kit-presentaciones/skill/kit-presentaciones" ~/.claude/skills/kit-presentaciones
```

On Windows (PowerShell), use a junction instead:

```powershell
New-Item -ItemType Junction -Path "$HOME\.claude\skills\kit-presentaciones" -Target "$PWD\kit-presentaciones\skill\kit-presentaciones"
```

Other agents (Codex, Gemini, Cursor…) can simply be told to read `skill/kit-presentaciones/SKILL.md` and
`ejemplos/README.md`. The method that inspired the kit is exactly that: give the model real decks as reference.

## Adapting it to your lab

- **You have a .pptx from your lab or faculty:** `python motor/kit.py profile --from lab.pptx --name lab`. It reads
  the theme, the colors actually used on the slides (generated decks often keep Office's default theme), logos and
  background images, and keeps the file as the `.pptx` template. Read the warnings it prints.
- **The reference is a PDF, an image or a web page:** copy `perfiles/sobrio`, edit `perfil.yml` while looking at the
  reference, and run `profile --regenerate`.
- **Custom fonts:** put `Family-Weight.woff2` files in `perfiles/<name>/fuentes/`; the packaged HTML embeds them.
- **A deck that went well** is the best contribution: add it to `ejemplos/` with an `@why` on every slide.

## Licenses

- Code (`motor/`, `skill/`, scripts in `ejemplos/*/figuras/` and `animaciones.js`): [MIT](LICENSE).
- Texts, catalogs, principles and example decks: [CC BY 4.0](LICENSE-docs.md).

The catalogs describe and link third-party works; they do not reproduce them. Quotes are under 15 words.

Author: Juan Pablo Castillo Zepeda.
