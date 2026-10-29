---
title: Four datasets with the same statistics and four different stories
author: kit-presentaciones · sober example
date: 2026
profile: sobrio
lang: en
audience: A lab that reports model metrics (accuracy, R², correlation) in its meetings.
message: Before reporting a number, plot the data and the residuals.
---

<!-- Sober-register example: light background, static figures, no animation. Public-domain data
     (Anscombe 1973); every number is computed in figuras/hacer_figuras.py. -->

## Four datasets with the same statistics and four different stories
@type cover
@subtitle Why you should plot before you summarize: Anscombe's quartet (1973)
> A ten-minute talk for any meeting where metrics get reported.
@why The title is already the conclusion of the talk; the subtitle says where it comes from. No filler image.

## All four sets share the same mean, variance, correlation and regression line
@number r = 0.816
In all four: mean of x **9**, variance of x **11**, mean of y **7.50**, variance of y **4.12** and fitted line **y = 3.00 + 0.500 x**.
If we only looked at this table, we would call them the same phenomenon.
@source Anscombe, F. J. (1973), The American Statistician 27(1), 17–21. Own computation in figuras/hacer_figuras.py.
> Let the room guess for a second what these data look like before moving on.
@why One big number as the evidence and the rest of the signature in one line. It sets up the expectation that the next slide breaks (F32: predict before you show).

## Plotted, they are four different stories
@figure figuras/cuatro.svg
@source Anscombe (1973). The four panels share axes; the grey line is the same fit in all of them.
> I is what we expect. II is a curve. III is a line with one point off. IV has no relation at all: a single point creates it.
@why Small multiples on shared axes (G11): the eye makes the comparison, not memory. The same grey line in all four shows that the summary is identical.

## In II the data are a curve: the straight line is the wrong model
@figure figuras/panel_II.svg
A parabola describes them almost exactly.
A correlation of 0.816 measures how well a line fits, not whether a line is the right model.
@source Anscombe (1973); own quadratic fit.
> The question is not "how high is r?" but "what shape do the data have?".
@why One idea per slide (principle 5). The right fit in the accent color and the misleading summary in grey (signaling, F25).

## In III a single point bends the line: without it, the data are perfectly aligned
@figure figuras/panel_III.svg
Without the highlighted point, the correlation is **1.000** and the line becomes y = 4.01 + 0.345 x.
One outlier is enough to change the slope we report.
@source Anscombe (1973); fit without the outlier, own computation.
> Before deleting an outlier, understand it: it may be an error or the most interesting data point.
@why The point that matters is marked with the second accent, reserved for warnings. The number that proves it sits next to the figure (spatial contiguity, F25).

## In IV there is no relation: a single point manufactures the whole correlation
@figure figuras/panel_IV.svg
Ten of the eleven points share the same x. The only different one decides the whole line.
@source Anscombe (1973).
> Remove that point and the line cannot even be computed: all x values are equal.
@why It states the limit of the number: a high correlation does not prove a relation (G15, G7).

## Before reporting a metric, plot the data and the residuals
@steps
- **Plot the distribution,** not only the mean: points or boxes per group (Tukey).
- **Plot the residuals** of every fit: that is where II's curve and III's outlier show up.
- **Look at every point that dominates** the result before you trust the number.
@source Anscombe (1973); Wickham & Stryjewski, "40 years of boxplots" (2011).
> This is the slide people take home. Close by asking which metric we report without plotting.
@why A closing slide that asks for something concrete; the three actions are revealed one at a time (segmentation, F25).

## Sources
@appendix
- Anscombe, F. J. (1973). Graphs in Statistical Analysis. The American Statistician 27(1), 17–21. DOI 10.1080/00031305.1973.10478966.
- Wickham, H. & Stryjewski, L. (2011). 40 years of boxplots. https://vita.had.co.nz/papers/boxplots.pdf
- Data and computations: figuras/hacer_figuras.py (checks the statistics before plotting).
@why The appendix gathers the sources and says where each number was computed.
