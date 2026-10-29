English · [Español](PRINCIPLES.es.md)

# Principles of the kit

A synthesis of `docs/charts.md` (G entries) and `docs/presentations.md` (F entries), with sources checked in
October 2026. Each principle says which entries it comes from and how strong the evidence is: **experiment** (there is
a controlled study), **replication** (there is a study and it was repeated), **craft** (experience of recognized
authors, no experiment). They are a reading of the sources, not laws.

## Before opening a slide

1. **One sentence the audience will remember in a week.** Everything that does not support it goes out or into the
   appendix. F34 Bourne, F27 Doumont. *Craft.*
2. **This audience, not a generic one.** What they already know, what they don't, what they decide. A committee wants
   rigor and limits; a team wants intuition and what changes for their work. F27, F34, F12. *Craft.*
3. **Script first, design later.** The list of titles, read in a row, must tell the story on its own. F26 Alley,
   F08 Duarte. *Craft*, supported by the experiment in F26.

## Each slide

4. **The title is the conclusion; the body is the evidence.** A full sentence on top ("The atmosphere is a prism"),
   a figure that proves it below. No bullet lists as the body. F26 (randomized experiment, Garner & Alley 2013: better
   comprehension, fewer misconceptions), F06 Tufte, F25 Mayer. *Experiment.*
5. **One idea per slide.** If the figure needs two titles, it is two slides. There is no magic number of bullets:
   "7 ± 2" does not follow from Miller. F28 Sweller, F30, F25 (segmentation). *Experiment (learning).*
6. **Real data before the model.** Show the spectrum, the image, the real time series at full size; the explanation
   comes after. The concrete example before the general rule. F23 Rubin, F22 EHT, F11, F12, F16, G25. *Craft.*
7. **Guide the eye and do not read the slide.** Highlight with an arrow, color or box what you are talking about; the
   voice explains, the screen does not repeat what you say. Words and figure together, not in separate areas. F25
   (signaling, redundancy, spatial contiguity), F29. *Experiment (learning).*
8. **Every number with its source, on the same slide.** A discreet line at the bottom: author and year, or "own
   computation". State the limits: what was not measured, what is model and what is data. F20 Bergstrom & West, F05,
   F16, G12. *Craft.*

## Each figure

9. **Plot before summarizing into a number.** The distribution, not only the mean; the residuals, not only the R².
   G7 Anscombe, G14 Tukey. *Craft*, well established.
10. **The question chooses the axes.** Time since an event, not calendar date; log-log for a power law; warn when a log
    scale may hide something. G8 H-R, G10 FT, G19. *Craft.*
11. **Position on common axes before area or color.** Dots and aligned bars before pies or bubbles. G20 Cleveland &
    McGill (*replication*: Heer & Bostock 2010 keep the overall order; angle did not come out worse than length).
12. **Color is data.** Perceptually uniform scales (viridis, cividis, Crameri's); never a rainbow for a continuous
    quantity; never red-green as the only contrast. The legend says what color means. G22 Crameri, G13 Bertin,
    G24 Gaia. *Measured* (gradients of the scales) and *craft*.
13. **Compare side by side, on the same axes.** Small multiples before one figure with ten lines. G11 Tufte, G9 NYT.
    *Craft.*
14. **Adapt the figure to the medium.** The figure in the report is not the figure on the slide: on screen, larger
    type, fewer panels, one message. G21 Rougier, G25. *Craft.*
15. **Warn how to read what invites misreading.** A t-SNE does not prove that two groups differ; a correlation on a map
    is not a cause. G18, G1. *Craft*, with demonstrations.

## When to animate (explicit rule)

The evidence does not say "never animate": it says animation helps when what is taught **is a change**, and almost
always ties with a good static figure otherwise (F29: Tversky et al. 2002; Höffler & Leutner 2007, d = 0.37;
Ploetzner et al. 2020 and 2021). *Experiment and meta-analysis.*

Animate only if all four hold:

- (a) what is shown **is** a transformation: something rotates, moves, grows, changes scale or shape;
- (b) two or three static figures with arrows do not say the same;
- (c) it is slow, schematic and moves one thing at a time, with a mark that guides the eye;
- (d) you narrate it and can stop it (it advances on a key press, not by itself).

Never: decorative transitions between slides, text appearing letter by letter, results being compared (the eye needs
to see both values at once), things that do not change. Every animation has a **static final state** that goes into
the PDF.

Revealing a figure step by step on key presses is not animating: it is segmenting (F25) and it works for any dense
slide.

## Two registers, same rule

The kit has two registers and both follow the rule above; what changes is how much of the content is a change and how
much effort goes into showing it.

- **Sober** (`examples/anscombe`): light background, static figures, no animation. For committees, work meetings and
  when preparation time is short.
- **Expressive** (`examples/exoplanets`): dark background with depth, full-bleed figures and an animation on almost
  every slide, **because in that topic almost everything is a change** (a planet crossing, an orbit, shifting lines,
  noise going down, a scale being travelled).

In both: no animation without the four conditions; a short fade between slides is the only transition; and after a
run of moving slides, a still one signals that what follows is for discussion.

## Review checklist (before delivering)

- [ ] Read in a row, the titles tell the whole story.
- [ ] Each title is a sentence with a verb, not a label ("Results", "Methods").
- [ ] Every number has its source on the same slide; what is a model says it is a model.
- [ ] No figure uses a rainbow for a continuous quantity; axes have names and units.
- [ ] Figure text is readable from the back of the room (at 1920×1080, nothing below ~22 px).
- [ ] Each animation meets the four conditions and has a final state for the PDF.
- [ ] Nothing decorative competes with the evidence: no icons, cards or effects. In the expressive register, a
      background with depth is fine if it does not lower the contrast of text and figures.
- [ ] There is a closing slide with what you ask for or what remains open, not a lone "Thank you!".
- [ ] Dense material that does not fit is in the appendix, not squeezed into a slide.
- [ ] It was rehearsed out loud with a clock.
