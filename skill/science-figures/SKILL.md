---
name: science-figures
description: Make one scientific figure well, on its own, for a thesis, a paper, a report or a poster, with presentation-kit's figure method (matplotlib in the style of a profile, sized in cm for the page, saved as PDF/SVG/PNG). It starts from the message the figure must carry and checks it against 26 recognized charts and their principles. Use it whenever the user asks for a plot, a graph, a chart or a figure for a document (thesis chapter, paper, LaTeX or Word, report, poster), wants an existing figure improved, or asks how to show a result, even if they do not say "figure". Not for dashboards or web apps (that is dataviz or interface work) and not for a whole slide deck (that is presentation-kit, which uses this method for its figures).
---

# science-figures

**Where the kit is.** This skill lives in `<kit>/skill/science-figures/`; the kit root (`<kit>`) is two folders up
(follow the link if it was installed as a symlink or junction). If you cannot find it, ask where the repository was
cloned. Answer in the user's language.

A figure is an argument: it exists to make one comparison obvious. Everything below serves that.

## Ask first (one short message, only what you cannot find yourself)

Look at the user's files first, so you can propose instead of asking in the abstract. Then confirm:

1. **The message:** the one comparison the reader should see ("sensor B drifts twice as fast"). Offer one drafted from
   the data. If the user does not have one yet, the figure is exploratory: say so, and make small multiples to find it.
2. **Where it will be read:** thesis or report (`thesis`, 15 cm wide), journal column (`paper`, 8.8 cm; 18 cm for
   two columns), poster, or a slide (`slide`). The medium sets the size and the type; never make one figure and
   scale it.
3. **Language and number format** (Spanish → decimal comma, `decimal_comma(ax)`), and the document's style if there
   is one (a lab or journal template, the colors of other figures in the thesis).

## The method

1. **Check the data before plotting.** Units, missing values, outliers, the number of points per group. Print a
   short summary; it is the figure's foundation and catches errors that a pretty plot hides.
2. **Plot before reducing to a number** (principle 9): the distribution, the residuals, every point when there are
   few. A mean or an R² can hide very different shapes (charts catalog, entries 7 and 14).
3. **Choose the encoding the eye reads best** (principle 11): position on common axes first; length; color and area
   last. Several cases → small multiples on shared axes (principle 13), not ten lines in one panel.
4. **Let the question choose the axes** (principle 10): log-log for a power law, time since an event, the same y
   range across panels you compare. Say which scale you use.
5. **Color is data** (principle 12): accent for what matters, grey for context; `cividis`/`viridis` for continuous
   values, never a rainbow; never red-green as the only contrast.
6. **Annotate on the figure** what the reader must see (the `annotate` helper), instead of a distant legend; axes
   with name and unit always.
7. **Warn how to read** what invites misreading (principle 15): an embedding plot, a correlation, a truncated axis.

```python
import sys; sys.path.insert(0, r"<kit>/engine")
import matplotlib.pyplot as plt
from figures import use_profile, save, annotate, decimal_comma

col = use_profile(r"<kit>/profiles/sober", medium="thesis")   # or "paper"; width_cm= for another text width
fig, ax = plt.subplots()
ax.plot(x, y, color=col["ink_soft"]); ax.plot(x, y2, color=col["accent"])
ax.set_xlabel("temperature (°C)"); ax.set_ylabel("drift (mV)")
annotate(ax, "sensor B: twice the slope", xy=(..), xytext=(..), color=col["accent"])
save(fig, "figures/drift")        # drift.pdf (LaTeX/Word), drift.svg, drift.png, at the exact size set
```

Write the code to a script next to the figures (`make_figures.py`) so the figure can be regenerated when the data
change. A lab profile (`kit.py profile --from lab.pptx`) gives the figures the lab's colors.

## Deliver and check

- **Open the PNG and look at it** at the size it will be printed: overlapping labels, unreadable ticks, a legend over
  data, colors that collapse in grey.
- Report the numbers the figure shows (slopes, n per group) so the user can check them against the text; nothing is
  invented, and every number comes from their data.
- **Check the user's message against the data.** If it holds only approximately ("twice", with ratios of 2.05 and
  1.91), say so and word the annotation and caption to match ("about twice", or both numbers).
- Suggest the caption: what is shown, then the conclusion, then the source of the data.

Reference material: `<kit>/PRINCIPLES.md` (section "Each figure", principles 9–15) and `<kit>/docs/charts.md`
(26 recognized charts with what each does well, its counterpoint and its verification status; the synthesis at the
end). Example code: `<kit>/examples/anscombe/figures/make_figures.py`.
