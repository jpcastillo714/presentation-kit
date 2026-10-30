---
title: Two clicks show what a correlation hides
author: presentation-kit · software demo example
date: 2026
profile: sober
lang: en
audience: A lab or team that builds dashboards and wants to show one working in a talk.
message: A demo is a task done in the real product, filmed where the action happens; it never replaces it with a drawing.
---

<!-- Software-demo example. The app in app/index.html is real code; the video is recorded from it with
     «python engine/kit.py demo demo.yml» (demo.es.yml for the Spanish version). -->

## Two clicks show what a correlation hides
@type cover
@subtitle A demo recorded from the real dashboard, not drawn
> One task, shown in the product itself: fit a line to two datasets and look at the residuals.
@why The title is the conclusion of the demo, not the name of the product (principle 4). The subtitle states the evidence: the video comes from running code (S-entries, "show the real product").

## The dashboard gives the same r for two very different datasets; the residuals tell them apart
@video figures/demo_residuals.mp4
@source Recorded with «kit.py demo» from app/index.html (demo.yml). Data: Anscombe (1973), The American Statistician 27(1), 17–21.
> Let the video run; it zooms where each click happens. Press V to pause on the residuals.
@why One task per clip, scripted before recording, with the camera on the control in use and a visible cursor (signaling, F25; the software-demo catalog). The label in the video says where it was recorded from.

## The video comes from running the code, step by step
@steps
- **demo.yml lists the task:** open, choose a dataset, click, zoom, wait.
- **kit.py demo performs it in a real browser** and takes a screenshot at every step.
- **Zoom, cursor and captions are added afterwards,** from the positions of the real elements.
- **If there is no code yet,** `mockup: true` stamps «Mock-up» on every frame.
@source presentation-kit: engine/demo.py.
> This is the slide for whoever will record their own demo.
@why Says how the evidence was produced (principle 8) and separates a real demo from a mock-up, which a viewer cannot tell apart on screen.

## Sources
@appendix
- Anscombe, F. J. (1973). Graphs in Statistical Analysis. The American Statistician 27(1), 17–21. DOI 10.1080/00031305.1973.10478966.
- How to show software: docs/software-demos.md (catalog of recognized demos and of the evidence on screencasts).
- The app: app/index.html (plain HTML and JavaScript). The recording: demo.yml and engine/demo.py.
@why The appendix says where each piece lives so anyone can re-record the demo.
