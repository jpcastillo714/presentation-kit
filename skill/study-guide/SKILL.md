---
name: study-guide
description: Build an interactive study guide to understand a topic in depth, with presentation-kit's guide builder - self-contained HTML pages (double click, no server, no internet) with the answer first, simulators the reader can move, "predict, then look" questions, an exercise mode and check-yourself questions. Use it whenever the user wants to study or learn a topic, prepare for an exam, a thesis defense or a meeting by understanding something, asks for study material, a tutorial, an explorable explanation or an interactive explainer, or wants to understand an instrument, a method or a paper, even if they do not say "guide". Not for a talk to an audience (that is presentation-kit) and not for a static document (that is a doc or a PDF).
---

# study-guide

**Where the kit is.** This skill lives in `<kit>/skill/study-guide/`; the kit root (`<kit>`) is two folders up
(follow the link if it was installed as a symlink or junction). If you cannot find it, ask where the repository was
cloned. Answer in the user's language.

A guide is for someone who comes back, gets things wrong and tries again, alone. It is not a talk: no audience to
hold, all the time the reader wants, and the reader's hands on the controls.

## Ask first

1. **What should the reader be able to do after the guide?** (explain X to their professor, predict what happens when
   Y changes, solve a kind of exercise). That sentence decides the pages.
2. **What do they already know, and what confuses them?** The guide starts from there.
3. **The sources:** their papers, notes, manual, data. Every number on a page comes from a source or from a simulator
   whose assumptions are stated on the page; nothing is invented.
4. **Language and how long** (2–3 pages for one idea; one page per question for a whole topic).

Propose the map (one line per page: the question it answers and the answer) and wait for the OK before writing.

## How a page works (the reference is `<kit>/examples/study-guide`)

- **The answer first** (`<p class="answer">`), the detail after: the reader knows where the page is going.
- **One question per page**, with a title that states what the page shows.
- **Predict, then look:** before each simulator, a `.predict` question with options and the explanation of the right
  answer; the simulator after it carries `data-gate`. In exercise mode (button in the top bar) it stays locked until
  the reader commits to an answer.
- **Simulators the reader moves:** sliders bound with `G.bind`, plots with `G.plot` (axes with name and unit, log axes,
  bands, marks), repeatable random numbers with `G.rng(seed)`. Move one thing at a time and show the consequence next
  to the control (a readout with the value).
- **Check yourself** (`<details class="check">`) at the end: questions whose answer opens on click.
- **Say the limits** on the page: what the simulator assumes, which numbers were read off a figure, what was not
  verified (`<p class="limits">`, or `limits:` in guide.yml for the map).

Why this shape: explorable explanations that let the reader manipulate the model (presentations catalog F12, F13, F31,
F33), segmenting into short parts and signaling what matters (software-demos catalog S15, S16), and stating the goal
before and the result after (S13). The Distill entry (F13) is also the warning: this format is expensive, so keep
each simulator small and about one idea.

## Build

```bash
python <kit>/engine/kit.py guide new <folder> --title "..." --lang es
```

Edit `guide.yml` (title, subtitle, the answer, limits, profile for the accent color) and write the pages in
`pages/01_*.html` (fragments that start with `<!--META {"title": ..., "what": ...} META-->`; scripts inline, using
`window.G`). A `data.json` in the folder reaches every page as `G.data`. Then:

```bash
python <kit>/engine/kit.py guide <folder>
```

It writes `index.html` (the map) and one self-contained HTML per page. Static figures can be made with the
`science-figures` method and referenced as `figures/*.svg` (they are embedded). `anim: true` in guide.yml also loads
the kit's animation library (`K.scene`) for animated SVG figures.

**Check before delivering:** open every page, answer each prediction, move every control from end to end, and read the
browser console for errors. Look at it in light and dark mode. Recompute one simulator result by hand or in Python
and compare.
