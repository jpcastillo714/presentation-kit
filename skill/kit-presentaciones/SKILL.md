---
name: kit-presentaciones
description: Build scientific and lab presentations with kit-presentaciones. Start from a script where every title states the conclusion. The look comes from a profile taken from the context (a reference deck from the lab, faculty or conference), matplotlib figures share that style, and the same script produces an animated HTML deck and an editable .pptx. Use it when the user asks for a presentation, slides, a talk, a thesis defense, a seminar, a lab meeting, a class, to improve a deck, or to adapt a deck to the style of another. No catalog styles, no decoration; animation only when the content is a change. / Arma presentaciones científicas y de laboratorio con kit-presentaciones: guion con títulos-conclusión, perfil sacado del contexto, HTML animado y .pptx desde el mismo guion. Úsala cuando pidan una presentación, diapositivas, una charla, una defensa, un seminario o mejorar o adaptar una presentación.
---

# kit-presentaciones

**Where the kit is.** This skill lives in `<kit>/skill/kit-presentaciones/`. The kit root (`<kit>`) is two folders up
from this file: follow the link if the skill was installed as a symlink or junction. If you cannot find it, ask the
user where they cloned the repository. Read `<kit>/README.md` the first time.

**Language.** Answer in the user's language. Slides follow the script's language (`lang: en` or `idioma: es`).
*ES: responde en el idioma de quien pide; las diapositivas siguen el idioma del guion.*

What makes this kit different: **the design comes from context and real examples, not from a style catalog**, and
content leads decoration.

## Before writing a slide

1. **Read the examples.** `<kit>/ejemplos/README.md` and the script of the closest example (`anscombe` for a sober
   deck, `exoplanetas` for an expressive one). Every slide has an `@why` / `@porque` note: that is the reference for
   level and tone. Read `<kit>/PRINCIPLES.md` (short) as well.
2. **Ask only what you cannot find out**, one question at a time:
   - who the audience is and what they know;
   - the one sentence they should remember in a week;
   - how long the talk is;
   - HTML, .pptx or both;
   - whether there is a reference deck for the style;
   - which register fits, sober or expressive.
   Look in the user's project first.
3. **The content belongs to the user.** No number, result or figure is invented: it comes from their files, with its
   source on the same slide. If a number is missing, ask.

## The method

1. **Script first.** `python <kit>/motor/kit.py new <folder> --profile <profile>` creates the folder. Then write
   `guion.md` (or `guion.en.md`): one slide per `## Title`, and every title is a conclusion with a verb, never
   "Results". **Show the user the list of titles before building**: read in a row, they must tell the story. The keys
   are documented in the starter script and in the README.
2. **Profile from context.**
   - **With a reference .pptx:** run `kit.py profile --from ref.pptx --name <name>` and read the warnings. The theme may
     be Office's default while the deck uses another palette; in that case set the colors from `colores_usados` and
     run `--regenerate`.
   - **With a PDF, image or web page as reference:** copy `perfiles/sobrio`, edit `perfil.yml` while looking at it, and
     regenerate.
   - **With no reference:** use `sobrio`, or `noche` for the expressive register.
3. **Figures with that deck's profile.** Write `figuras/hacer_figuras.py` in the folder, using
   `from figuras import usar_perfil, guardar, coma_decimal`. Each figure is saved as .svg (for the HTML) and .png (for
   the .pptx).
   - Axes with names and units; `cividis` or `viridis`, never `jet`.
   - What matters in the accent color, the rest in grey.
   - Check the data before plotting (see `ejemplos/anscombe/figuras/hacer_figuras.py`).
   - Regenerate the figures if you change profile.
4. **Animation only if the four conditions in `PRINCIPLES.md` hold:**
   - it is a transformation;
   - static figures cannot say it;
   - it is slow and moves one thing at a time;
   - it advances on a key press.

   How to write one:
   - Animations go in the folder's `animaciones.js`, built with the engine's library (`motor/anim.js`, `window.K`):
     `window.animaciones.<name> = K.escena({montar, estados, dibujar, duracion, bucle})`, with one state per step.
   - The library interpolates forward, jumps backwards, draws the last state when printing, and switches language
     with `K.t(es, en)` and `K.coma(value)`. Use `setTimeout`, not `requestAnimationFrame`.
   - Reference: `ejemplos/exoplanetas/animaciones.js` (five scenes).
   - Script keys: `@anim name`, `@steps N`, `@class full` (full-bleed figure, title on top), `@kicker`. In the front
     matter, `transition: fade` is the only transition allowed.
   - `kit.py statics <folder>` photographs each animation's final frame for the .pptx; the PDF prints the final SVG
     state by itself. Radial-gradient backgrounds leave stripes in Chromium PDFs: disable them in `@media print`.
5. **Build and review by eye.**
   - `kit.py build <folder>` (add `--script guion.en.md` for the English version) produces the HTML and the .pptx.
   - `kit.py review <folder>/deck.html` checks titles, sources and text load.
   - `kit.py shots <folder>/deck.html <png_dir>` saves one image per slide. **Look at all of them**: overlapping
     text, odd numbers, tiny figures.
   - On Windows with PowerPoint, `kit.py render` does the same for the .pptx.
   - Walk through every slide and step looking for JavaScript errors.
   - Finally, go through the checklist in `PRINCIPLES.md`.
6. **Deliver.** `kit.py package` creates a single offline HTML file and `kit.py pdf` creates the PDF. Tell the user
   where each file is, and the keys: N notes, P presenter view, E "why it works", M animations on/off.

`deck.html` is regenerated from the script every time. Customizations live in the folder's `estilos.css` and
`animaciones.js`, which are linked automatically.

## Rules

- **No decoration that competes with the evidence.** No icons, cards or effects; no slide flies, spins or bounces.
  Impact comes from the figure, purposeful motion and the title. In the expressive register, a background with depth is
  fine if it does not lower contrast.
- **Do not publish or share** decks online on the user's behalf; they decide after seeing the file.
- **Do not overwrite** an existing PDF or deck without asking (`--overwrite` only with their yes).
- **Third-party works** are linked and described, not copied; quotes under 15 words.
- **When a deck goes well,** suggest adding it to `<kit>/ejemplos/` with an `@why` on every slide. That is how the
  example library grows.

## Commands (`python <kit>/motor/kit.py …`; Spanish names also work)

| Command | Purpose |
|---|---|
| `new <folder> [--profile p] [--title t]` | Folder with engine, profile and starter script |
| `build <folder> [--html] [--pptx] [--script guion.en.md]` | Script → `deck.html` and `<name>.pptx` |
| `review <deck.html>` | Mechanical review against the principles |
| `shots <deck.html> <png_dir> [--only 3,5]` | One image per slide, to look at |
| `statics <folder> [--script guion.en.md]` | Final frame of each animation, for the .pptx |
| `render <file.pptx> <png_dir>` | Same for the .pptx, with PowerPoint (Windows) |
| `package <deck.html> [out.html]` | Single offline HTML file |
| `pdf <file.html> [out.pdf]` | PDF via Chrome/Edge, one slide per page |
| `profile --from ref.pptx --name n` / `profile --regenerate <dir>` | Create or update a profile |
