[Español](../es/graficos.md)

# A catalog of well-known charts and what they teach

Sources were checked in October 2026, and each entry states its verification status. No images or copyrighted text: only links and descriptions in our own words.

## How to read the verification status

- **VERIFIED**: the cited source was opened and the key facts in the entry come from it.
- **PARTIAL**: at least one source was opened, but some key fact comes from a search summary or a secondary source. The entry says which.
- **NOT VERIFIED**: the source could not be opened (403 block, certificate error, site down) or the fact only appears in search results. The link is kept so readers can check it themselves.

A source that failed to open does not prove the fact is wrong. Wikipedia was not used as a source.

## Index and status

| # | Entry | Status |
|---|---|---|
| 1 | [Minard, the Russian campaign (1869)](#f01) | PARTIAL |
| 2 | [Nightingale, polar area diagram (1858)](#f02) | PARTIAL |
| 3 | [Snow, the cholera map (1854)](#f03) | VERIFIED |
| 4 | [Playfair, time series and bars (1786)](#f04) | PARTIAL |
| 5 | [Rosling / Gapminder, animated bubbles (2006)](#f05) | PARTIAL |
| 6 | [Du Bois, data portraits (1900)](#f06) | PARTIAL |
| 7 | [Anscombe, the quartet (1973)](#f07) | PARTIAL |
| 8 | [The Hertzsprung-Russell diagram (1911-1914)](#f08) | VERIFIED |
| 9 | [NYT, "Four Ways to Slice" Obama's budget (2012)](#f09) | VERIFIED |
| 10 | [FT / Burn-Murdoch, COVID trajectory curves (2020)](#f10) | PARTIAL |
| 11 | [Tufte, small multiples and sparklines](#f11) | PARTIAL |
| 12 | [Few, the bullet graph (2006)](#f12) | VERIFIED |
| 13 | [Bertin, visual variables (1967)](#f13) | VERIFIED |
| 14 | [Tukey, the box plot (1970/1977)](#f14) | VERIFIED |
| 15 | [Warming stripes, Hawkins (2018)](#f15) | VERIFIED |
| 16 | [The Keeling Curve (1958 onward)](#f16) | PARTIAL |
| 17 | [Fisher / Anderson, the Iris data (1935-1936)](#f17) | PARTIAL |
| 18 | [t-SNE (2008) and how to read it](#f18) | VERIFIED |
| 19 | [Scaling curves, Kaplan et al. (2020)](#f19) | VERIFIED |
| 20 | [Cleveland and McGill, the perception hierarchy (1984)](#f20) | PARTIAL |
| 21 | [Rougier et al., ten rules for better figures (2014)](#f21) | VERIFIED |
| 22 | [Crameri et al., the misuse of colour (2020)](#f22) | VERIFIED |
| 23 | [Wilke, *Fundamentals of Data Visualization* (2019)](#f23) | VERIFIED |
| 24 | [Gaia's H-R diagram (2018)](#f24) | VERIFIED |
| 25 | [Pepe et al., the ESPRESSO figures (2021)](#f25) | VERIFIED |
| 26 | [Cairo, *The Truthful Art* and *How Charts Lie*](#cairo) | VERIFIED (metadata) |

---

<a id="f01"></a>
## 1. Minard: the French army's losses in Russia

- **Author and year:** Charles Joseph Minard, 1869 (published in Paris; the original French title refers to the "successive losses in men" of the French army in the Russian campaign of 1812-1813).
- **Status:** PARTIAL.
- **Sources:**
  - [Science Norway, explanation of the variables, sources and caveats](https://www.sciencenorway.no/blog-blog-from-numbers-to-graphics-statistics/charles-joseph-minards-map-of-napoleons-flawed-russian-campaign-an-ever-current-classic/1618695): opened and read.
  - [École des Ponts (ENPC), digital heritage](https://heritage.ecoledesponts.fr/enpc/): the direct link to the document redirected to this portal, which was not opened. Search results indicate the original is held there (shelfmark ENPC01_Fol_10975): NOT VERIFIED.
  - [Friendly (2002), "Visions and Re-visions of Charles Joseph Minard"](https://www.datavis.ca/papers/vita/Friendly02Minard.html): the server refused the connection; only the search summary was seen. NOT VERIFIED.
- **What problem it solves:** It tells in a single image how an army of several hundred thousand men shrank to a fraction of that. It combines the size of the army (band width), the route on the map, the direction of advance and retreat, time and, on the retreat, temperature.
- **Design principle:** Many variables on one canvas without losing legibility, and data that tell the story without decoration. According to Science Norway, citing *Beautiful Evidence* (2006), Tufte has called it "probably the best graphic that has ever been made". Friendly attributes an equivalent remark to Tufte (1983).
- **Use in science and ML:** A flow diagram of samples through a pipeline (how many go in, how many are lost at each filter, and why). Useful for describing data loss, participant attrition, or step-by-step cuts to an astronomical catalog.
- **Controversies and caveats:**
  - Science Norway warns that the map shows temperature and deaths moving together but does not prove causation; it also cites a 2017 review arguing that hunger and skirmishes mattered as much as the cold.
  - The "anti-war" reading is Tufte's, not a claim made by the map itself.
  - According to Friendly (search summary, not opened), Minard did not invent flow maps: the precursor would be Henry Drury Harness. NOT VERIFIED.
  - The date of the "1869 map" and the date of the campaign (1812) are different things; one of Friendly's pages says 1815 in one sentence, which looks like an error on that page.

<a id="f02"></a>
## 2. Nightingale: the polar area diagram ("rose")

- **Author and year:** Florence Nightingale, 1858 (in *Notes on Matters Affecting the Health, Efficiency and Hospital Administration of the British Army*); a version appeared in 1859 in Harriet Martineau's book *England and Her Soldiers*.
- **Status:** PARTIAL. No primary or institutional source could be opened; everything comes from search results.
- **Sources (links, not opened):**
  - [David Rumsey Collection, "Diagram of the Causes of Mortality"](https://luna.lunacommons.org/luna/servlet/detail/RUMSEY~8~1~327826~90096398:Diagram-of-the-Causes-of-Mortality-): returned an access-check screen.
  - [Florence Nightingale Museum](https://www.florence-nightingale.co.uk/?p=9610): returned 404.
  - [Friendly and Wall, "Nightingale radiant"](https://datavis.ca/papers/Nightingale-radiant.pdf): connection refused.
- **What problem it solves:** Showing a non-technical audience (politicians, officers) that most soldiers' deaths in Crimea came from preventable disease rather than battle wounds, and how they fell as sanitary conditions improved. Each wedge is a month and the area of each colour is a cause of death.
- **Design principle:** A chart as a persuasive argument. Note: in these diagrams *area* encodes the value, not the radius; getting this wrong exaggerates differences. On perception of area, see [entry 20](#f20).
- **Use in science and ML:** Series with a seasonal cycle (for example, instrument failures per month). Today a line or bar chart by month is usually better, because comparing areas is less precise.
- **Controversies and caveats:**
  - Search summaries say she herself never called it a "coxcomb" or a "rose", and that historians prefer "polar area diagram".
  - Whether she was first is debated: according to those summaries, she had seen a polar diagram in an 1852 report by William Farr, and Farr and his team helped her with the data. NOT VERIFIED against an opened source.
  - For how credit is shared (Nightingale, Farr, others), read Friendly and Wall before claiming "first" or "inventor".

<a id="f03"></a>
## 3. Snow: the map of the Soho cholera outbreak

- **Author and year:** John Snow, 1854 (published in the second edition of *On the Mode of Communication of Cholera*, 1855).
- **Status:** VERIFIED.
- **Sources (opened):**
  - [University of California, Los Angeles (UCLA), John Snow site: the Broad Street outbreak](https://epi-snow.ph.ucla.edu/Stream2_BSPoutbreak_e.html)
  - [London Museum, "John Snow: Cholera & the Broad Street pump"](https://www.londonmuseum.org.uk/collections/london-stories/john-snow-cholera-broad-street-pump/)
- **What problem it solves:** Answering where the risk lives. With each death marked at its address, the cases cluster around the Broad Street water pump.
- **Design principle:** A map works as evidence when it shows at a glance a pattern a table would hide; the location of the points, not their decoration, is the message.
- **Use in science and ML:** Error maps: where a model fails (by class, by sky region, by object type). Same method: place the failures on the space that matters and look for clusters.
- **Controversies and caveats:**
  - The outbreak was already declining before the pump handle was removed (7-8 Sept.); the UCLA site shows that Whitehead documented this and concluded that removing the handle did not end the outbreak, though it may have prevented a new one.
  - Snow's explanation was rejected by the medical committee of the time, which favoured miasma theory; acceptance came years later (the London Museum gives 1866).
  - The Reverend Henry Whitehead started as a sceptic and contributed key evidence (including the likely first case).
  - Death counts vary by source (roughly ~400 to ~700 in search results); don't quote a figure without saying where it comes from.
  - The map was not the only evidence: Snow also compared water companies. This is not in the two pages opened: NOT VERIFIED here.

<a id="f04"></a>
## 4. Playfair: lines and bars for economic data

- **Author and year:** William Playfair, 1786, *The Commercial and Political Atlas* (the pie chart appears in his *Statistical Breviary* of 1801).
- **Status:** PARTIAL.
- **Sources:**
  - [Princeton University Library, thematic maps](https://static-prod.lib.princeton.edu/visual_materials/maps/websites/thematic-maps/quantitative/sociology-economics/sociology-economics.html): appeared in search; opening it gave a certificate error. NOT VERIFIED directly.
  - [Tufte, *The Visual Display of Quantitative Information*](https://www.edwardtufte.com/book/the-visual-display-of-quantitative-information/): opened; confirms that the second edition includes colour reproductions of Playfair.
  - [American Scientist, "A visionary and a scoundrel"](https://www.americanscientist.org/article/a-visionary-and-a-scoundrel): returned 503.
- **What problem it solves:** Replacing tables of figures with a shape that shows trend and difference at a glance. According to search summaries, the *Atlas* contained about 43 time-series charts and one bar chart (Scotland's trade).
- **Design principle:** Time goes on the horizontal axis and value on the vertical; two series are compared by the gap between the lines. This is the basis of almost everything we now call a training curve.
- **Use in science and ML:** Training and validation loss curves, per-epoch metrics, comparing two models over time. The gap between two lines (training vs. validation) communicates overfitting.
- **Controversies and caveats:** "Inventor" of the line and bar chart is the usual attribution, but others had plotted series earlier; precursors could not be verified with an opened source. Avoid writing "the first" without that check.

<a id="f05"></a>
## 5. Rosling / Gapminder: the animated bubble chart

- **Authors and year:** Hans Rosling, Ola Rosling and Anna Rosling Rönnlund; Gapminder was founded in Stockholm in 2005; the TED talk "The best stats you've ever seen" dates from 2006.
- **Status:** PARTIAL. The history is confirmed; which variable goes on each axis could not be confirmed with an opened source (the usual setup is income vs. life expectancy, with size by population, but this is NOT VERIFIED here).
- **Sources (opened):**
  - [Gapminder, history](https://www.gapminder.org/about/about-gapminder/history/): founding, founders, Trendalyzer and its purchase by Google in 2007.
  - [TED2006, Hans Rosling](https://www.ted.com/talks/hans_rosling_the_best_stats_you_ve_ever_seen): confirms the TED2006 talk.
- **What problem it solves:** Dismantling misconceptions about the world by showing, year by year, how many countries move at once.
- **Design principle:** Animation with a purpose: time becomes motion, and the eye follows the trajectory. Also the use of many dimensions (position on two axes, size, colour) in a single view.
- **Use in science and ML:** Tracking many experiments or models over training (loss vs. time, point size by parameter count). In a printed report animation is useless: use still frames (see [entry 11](#f11)).
- **Controversies and caveats:** Animation is powerful in a talk and poor for reading exact values; bubble charts force the reader to compare areas (see [entry 20](#f20)).

<a id="f06"></a>
## 6. Du Bois: data portraits of Georgia and of African Americans

- **Author and year:** W. E. B. Du Bois and his team at Atlanta University, for the 1900 Paris Exposition.
- **Status:** PARTIAL. The Library of Congress still would not open (it asks for human verification), but its blog and a scholarly review confirm the main facts: there are **63** data portraits, 36 in the series «The Georgia Negro: A Social Study» and 27 in the national series, held in the collection «African American Photographs Assembled for 1900 Paris Exposition». Sources: https://blogs.loc.gov/picturethis/2020/04/african-americans-at-the-turn-of-the-20th-century-a-graphic-visualization/ and Friedly's review in *Cartographic Perspectives* 93, DOI 10.14714/CP93.1555. The medals in Paris remain unverified.
- **Sources (not opened):**
  - [Library of Congress, Du Bois charts collection](https://www.loc.gov/pictures/collection/anedub/background.html): 403.
  - [Library of Congress, "Du Bois data portraits" exhibition](https://www.loc.gov/exhibits/du-bois-data-portraits/): 404.
  - Search results (WBUR, WABE, Hyperallergic, Project MUSE on the book by Battle-Baptiste and Rusert) agree that about 60 plates were made and that they won medals in Paris. Not opened.
- **What problem it solves:** Showing with the community's own data (occupations, land, education) the lives of Black Americans against the stereotypes of the time.
- **Design principle:** Design in the service of an argument and a specific audience, with colour and form outside convention.
- **Use in science and ML:** Data of your own to contradict a belief: in model results, show the subgroup where the model fails next to the average figure that usually gets quoted.
- **Controversies and caveats:** Still to confirm with the source how many plates survive and which belong to the Georgia series vs. the national one (a note written before the 36/27 split given under Status).

<a id="f07"></a>
## 7. Anscombe: the quartet

- **Author and year:** Francis J. Anscombe, 1973, "Graphs in Statistical Analysis", *The American Statistician* 27(1), 17-21.
- **Status:** PARTIAL. Metadata VERIFIED via Crossref (*The American Statistician* 27(1), 17–21, February 1973); the content has still not been read in the original, which is paywalled.
- **Sources:**
  - [Eagereyes, "Anscombe's Quartet"](https://eagereyes.org/criticism/anscombes-quartet): opened and read; describes the quartet and its purpose.
  - Article reference: DOI 10.1080/00031305.1973.10478966 (not opened).
- **What problem it solves:** Four datasets with nearly the same means, variances, correlation and regression line that look very different when plotted (one linear, one curved, one with an outlier, one where a single point creates the correlation).
- **Design principle:** Numerical summaries can hide structure; plot before you conclude. Eagereyes quotes his view that a computer should make "both calculations and graphs".
- **Use in science and ML:** Before reporting an aggregate metric (R², accuracy), show the spread of residuals or of predictions against ground truth. For an astronomical fit, always plot the residuals.
- **Controversies and caveats:** The paper is opinionated, with strong claims left unsupported (according to Eagereyes). How Anscombe built the data is unknown (EPFL search summary). There is a modern version, the "Datasaurus Dozen" (2017), which was not opened.

<a id="f08"></a>
## 8. The Hertzsprung-Russell diagram (astronomy)

- **Authors and year:** Ejnar Hertzsprung (colour-magnitude diagrams, 1911; the Pleiades, 1913) and Henry Norris Russell (graphical version presented on 30 Dec. 1913, published in *Nature* in May 1914).
- **Status:** VERIFIED.
- **Source (opened):** [Linda Hall Library, "Ejnar Hertzsprung"](https://www.lindahall.org/about/news/scientist-of-the-day/ejnar-hertzsprung/).
- **What problem it solves:** Sorting the stars: with luminosity on the vertical axis and spectral type (colour) on the horizontal, stars do not scatter randomly but fall into bands (main sequence, giants, white dwarfs).
- **Design principle:** Choosing the right two axes brings out structure no table can show. A good chart is a visible hypothesis.
- **Use in science and ML:** It is the template for the "colour-magnitude diagram" every astronomer uses for clusters and catalogs (for example with Gaia). In ML, the analogue is plotting two features and checking whether the classes separate before training.
- **Controversies and caveats:** Linda Hall contradicts itself: the caption says the 1914 *Nature* version is the first in print; the text says Hertzsprung's 1913 version is "really" the first. Search results mention work from 1908 and give differing dates for Russell's presentation to the Royal Astronomical Society: NOT VERIFIED. The original axes are spectral type and luminosity; modern versions use colour and absolute magnitude, and the temperature axis is usually reversed by convention.

<a id="f09"></a>
## 9. The New York Times: "Four Ways to Slice Obama's 2013 Budget Proposal"

- **Authors and year:** Shan Carter, *The New York Times*, February 2012 (the page says «Updated February 12, 2012»; the budget is for fiscal year 2013).
- **Status:** VERIFIED at https://archive.nytimes.com/www.nytimes.com/interactive/2012/02/13/us/politics/2013-budget-proposal-graphic.html. The four views are tabs: all spending, types of spending (mandatory vs. discretionary), changes from 2012, and totals by department. Each budget item is a circle whose area is proportional to spending, coloured by the change. The design shows well how data can be regrouped around a question and, at the same time, the limitation of encoding with area ([entry 20](#f20)). The fields below marked "before verification" were written without having seen the chart and are kept as a record.
- **Sources:**
  - [The graphic on nytimes.com](https://www.nytimes.com/interactive/2012/02/13/us/politics/2013-budget-proposal-graphic.html): the reading tool cannot access that site (hence the check on the archive.nytimes.com copy). The link came from a Santa Clara University blog post that was not opened.
  - [FlowingData](https://flowingdata.com): according to search, it has a review dated 15 Feb. 2012; not opened.
- **What problem it solves (before verification, from search results):** Showing the same budget from four different angles.
- **Design principle:** The same dataset regrouped in several ways answers different questions. It is a use of coordinated views.
- **Use in science and ML:** Presenting the same model result sliced by class, by sample size, by time and by region.
- **Controversies and caveats:** See the design comment under Status.

<a id="f10"></a>
## 10. Financial Times / Burn-Murdoch: COVID-19 trajectory curves

- **Author and year:** John Burn-Murdoch and the FT data team, from March 2020.
- **Status:** PARTIAL.
- **Sources:**
  - [Stamen, "Visualizing the pulse of a pandemic: a year of COVID line charts"](https://stamen.com/visualizing-the-pulse-of-a-pandemic-a-year-of-covid-line-charts-52368b4a22b0/): opened and read.
  - [World Economic Forum, interview on coronavirus charts](https://www.weforum.org/stories/health-and-healthcare-systems/data-visualization-5-questions-coronavirus/): 403; only the search summary was seen.
- **What problem it solves:** Comparing countries at different stages of the epidemic: aligning each country from a common starting point (according to search summaries, the day it passed a given number of cases) and using a log scale to show the rate of growth.
- **Design principle:** Choosing the right axis (time since an event, not calendar date) makes things comparable that otherwise are not. Stamen notes that the default view shifted from cumulative totals to new weekly cases: "As the story shifts, the charts shift."
- **Use in science and ML:** Learning and scaling curves on log-log axes (see [entry 19](#f19)); aligning training runs by step or by compute rather than by date.
- **Controversies and caveats:** Stamen reports a heated debate over whether the general public understands log scales, and notes that an exponential axis can hide how serious a new surge is. That is a direct warning for anyone using log scales in a presentation.

<a id="f11"></a>
## 11. Tufte: small multiples and sparklines

- **Author and year:** Edward Tufte; *The Visual Display of Quantitative Information* (1983, 2nd ed. 2001), *Envisioning Information* (1990) for small multiples, and *Beautiful Evidence* (2006) for sparklines.
- **Status:** PARTIAL.
- **Sources:**
  - [Tufte, book page](https://www.edwardtufte.com/book/the-visual-display-of-quantitative-information/): opened; lists small-multiple design, the data-ink ratio and "detecting graphical deception".
  - [Tufte, "Sparkline theory and practice"](https://www.edwardtufte.com/notebook/sparkline-theory-and-practice-edward-tufte/): opened and read; defines the sparkline as "a small intense, simple, word-sized graphic with typographic resolution".
  - For small multiples there are only secondary search sources citing Tufte (1990, p. 67): NOT VERIFIED against the book.
- **What problem they solve:** Comparing many things without clutter: the same chart repeated in small panels (small multiples), or word-sized charts inside text or a table (sparklines).
- **Design principle:** Maximise data and minimise design; compare by placing things side by side rather than one after another. The sparklines page sums up his motto as maximum data, minimum design.
- **Use in science and ML:** A grid of small learning curves (one per seed, one per model) on shared axes; sparklines of a metric per epoch inside a results table.
- **Controversies and caveats:** The "data-ink ratio" idea is sometimes pushed to the point of illegible charts; the sparklines page itself recommends an aspect that is neither flat nor spiky and making use of print resolution, which screens do not match.

<a id="f12"></a>
## 12. Few: the bullet graph

- **Author and year:** Stephen Few, 2006 (specification revised on 10 Oct. 2013).
- **Status:** VERIFIED.
- **Source (opened and read in full):** [Perceptual Edge, "Bullet Graph Design Specification"](https://www.perceptualedge.com/articles/misc/Bullet_Graph_Design_Spec.pdf).
- **What problem it solves:** It replaces the dials and gauges of dashboards with a linear bar showing one main measure, one or two comparisons (target, previous year) and qualitative ranges (good, fair, poor).
- **Design principle:** A linear design takes less space and reads more efficiently than a radial one. Ranges are encoded with intensities of a single hue (for readers with colour-vision deficiency) and limited to five at most, ideally three.
- **Use in science and ML:** Showing a model metric against its baseline and against an acceptance threshold set in advance; ideal for monitoring dashboards.
- **Controversies and caveats:** It is the author's own design guide, not an experimental result. Nothing in the document proves, with data of its own, that it beats a gauge; the claim rests on Few's argument and on perception research (see [entry 20](#f20)).

<a id="f13"></a>
## 13. Bertin: the visual variables

- **Author and year:** Jacques Bertin, *Sémiologie graphique*, 1967 (English edition by Esri Press, 2010).
- **Status:** VERIFIED (publisher's description).
- **Source (opened):** [Esri Press, *Semiology of Graphics*](https://www.esri.com/en-us/esri-press/browse/semiology-of-graphics-diagrams-networks-maps).
- **What problem it solves:** It provides a vocabulary for deciding how to represent each piece of data: which visual property (the page lists shape, orientation, colour, texture, volume and size) conveys which kind of information.
- **Design principle:** Visual properties are not interchangeable: each suits some relationships and not others. The page does not use the term "visual variables" or spell out which suits what; that content is in the book.
- **Use in science and ML:** Before colouring a chart, decide whether the variable is categorical (hue) or ordered (intensity). This avoids, for example, using a rainbow for a continuous quantity.
- **Controversies and caveats:** It is a theoretical framework drawn from a cartographer's experience; experimental evidence on which channel is most accurate came later (see [entry 20](#f20)).

<a id="f14"></a>
## 14. Tukey: the box plot

- **Author and year:** John W. Tukey; preliminary version in 1970 and the book *Exploratory Data Analysis*, 1977.
- **Status:** VERIFIED.
- **Source (opened and read):** [Wickham and Stryjewski, "40 years of boxplots"](https://vita.had.co.nz/papers/boxplots.pdf) (2011).
- **What problem it solves:** Summarising and comparing the distributions of many groups in little space, with robust statistics (median, quartiles, adjacent values at 1.5 times the interquartile range, and outliers).
- **Design principle:** Show the distribution, not just the mean. A compact summary with no tuning parameters.
- **Use in science and ML:** Comparing a model's accuracy across seeds or cross-validation folds, or the distribution of a residual by class.
- **Controversies and caveats:** According to Wickham, the basic form (the range bar) already existed in the 1950s (Spear, 1952); Tukey's contribution was the choice of statistics. The box hides the shape of the distribution (hence variants such as the violin plot); with few observations per group, it is better to show the points.

<a id="f15"></a>
## 15. Warming stripes

- **Author and year:** Ed Hawkins, University of Reading, 2018.
- **Status:** VERIFIED.
- **Sources (opened):**
  - [University of Reading, "What are the stripes?"](https://www.reading.ac.uk/en/planet/climate-resources/climate-stripes)
  - [World Meteorological Organization, "Warming Stripes"](https://public.wmo.int/node/25831)
- **What problem it solves:** Communicating rising temperatures to people who do not read axes or numbers. Each stripe is a year, blue if it was cooler and red if it was warmer than the 1961-2010 average.
- **Design principle:** Strip it down: no text, no numbers, no axes. The Reading page sums it up as "No words. No numbers. No graphs."
- **Use in science and ML:** For a general audience, not for peer-to-peer science. A reminder that removing elements is sometimes the right move. In a technical report, it does not replace a chart with axes.
- **Controversies and caveats:** It is an impact graphic, not one for quantitative reading. Search results say the colours are an aesthetic choice by Hawkins and that the scale is adjusted by region; those were not opened. NOT VERIFIED: the claim that the idea came from a knitted blanket.

<a id="f16"></a>
## 16. The Keeling Curve

- **Author and year:** Charles David Keeling, CO₂ measurements at Mauna Loa since 1958.
- **Status:** PARTIAL.
- **Source (opened):** [Scripps Institution of Oceanography, Keeling Curve](https://keelingcurve.ucsd.edu/): confirms it is a daily record of atmospheric CO₂, with Mauna Loa as the measurement site and data since 1958; it offers views from one week to 70 million years. The page does not explain the seasonal pattern: that well-known fact is NOT VERIFIED here. There is also the [NOAA trends page](https://gml.noaa.gov/ccgg/trends/history.html), which was downloaded but not read.
- **What problem it solves:** It shows two scales at once: a long-term rising trend with an annual up-and-down cycle on top.
- **Design principle:** A long, clean series drawn as a single line can be more persuasive than any decoration. It also teaches choosing the time range to fit the question (the page offers several).
- **Use in science and ML:** Time series from an instrument or a monitoring metric: separate trend from cycle, and show the full range so what matters is visible.
- **Controversies and caveats:** A single line does not prove cause; the measurement comes from one site (though the global network corroborates it, a claim that was not verified).

<a id="f17"></a>
## 17. Fisher and Anderson: the Iris data

- **Authors and year:** Edgar Anderson (1935, measurements) and Ronald A. Fisher (1936, analysis), "The use of multiple measurements in taxonomic problems", *Annals of Eugenics* 7(2), 179-188.
- **Status:** PARTIAL.
- **Sources (opened):**
  - [Rothamsted Repository, article record (open access, CC BY 4.0)](https://repository.rothamsted.ac.uk/item/9914w/the-use-of-multiple-measurements-in-taxonomic-problems)
  - [R documentation, the iris dataset](https://search.r-project.org/CRAN/refmans/datasets/html/iris.html): 150 flowers, three species, four measurements in cm; Anderson (1935) collected the data.
- **What problem it solves:** Separating species using several measurements at once. The scatterplot matrix (every pair of variables) is the classic chart for this data.
- **Design principle:** Seeing every pair of variables together reveals which ones separate the classes and which are redundant.
- **Use in science and ML:** A first look at a dataset with few variables before training; in ML with many variables it gives way to dimensionality reduction (see [entry 18](#f18)).
- **Controversies and caveats:**
  - Attributing the *scatterplot matrix* to Fisher or to Anderson is NOT VERIFIED: the opened sources only establish where the data came from, not the chart. One lead (Kleinman, 2002, on Anderson's graphics) was not opened.
  - Fisher was a central figure in eugenics, and the journal he published in was called *Annals of Eugenics*. This is an honest part of the dataset's history; don't leave it out if you present it in a talk on the history of statistics.
  - The data are too easy for evaluating a method (the classes nearly separate on their own).

<a id="f18"></a>
## 18. t-SNE (and UMAP) in embedding plots

- **Authors and year:** Laurens van der Maaten and Geoffrey Hinton, 2008, *Journal of Machine Learning Research* 9, 2579-2605. Reading guide: Wattenberg, Viégas and Johnson, Distill, 2016.
- **Status:** VERIFIED.
- **Sources (opened):**
  - [JMLR, "Visualizing Data using t-SNE"](https://www.jmlr.org/papers/v9/vandermaaten08a.html)
  - [Distill, "How to Use t-SNE Effectively"](https://distill.pub/2016/misread-tsne/)
  - [arXiv, UMAP (McInnes et al.)](https://arxiv.org/abs/1802.03426): opened, but only the title and metadata were seen; not read.
- **What problem it solves:** Drawing high-dimensional data (for example, a model's vectors) in 2D or 3D so that nearby things stay nearby.
- **Design principle:** The visualization should come with a reading warning. Distill shows that "Cluster sizes in a t-SNE plot mean nothing", that distances between clusters may mean nothing, and that random noise can look like structure; it recommends trying several perplexities.
- **Use in science and ML:** Useful for exploring embeddings (of galaxies, of texts, of a network's layers). Never present a t-SNE as proof that two groups are different: it is a lead to be checked against a quantitative metric.
- **Controversies and caveats:** The "perplexity" parameter changes the picture a lot; the original paper says the method is fairly robust between 5 and 50, and Distill adds that the story is more complicated. For UMAP, the criticisms of its global distances could not be checked: NOT VERIFIED.

<a id="f19"></a>
## 19. Scaling and learning curves (ML)

- **Authors and year:** Jared Kaplan and nine co-authors, 2020, "Scaling Laws for Neural Language Models", arXiv 2001.08361 (submitted 23 Jan. 2020).
- **Status:** VERIFIED (abstract and metadata).
- **Source (opened):** [arXiv:2001.08361](https://arxiv.org/abs/2001.08361)
- **What problem it solves:** Showing how loss falls as a power law in model size, dataset size and compute, with trends spanning more than seven orders of magnitude, according to the abstract. On log-log axes this appears as a straight line.
- **Design principle:** Choose scales (log-log) that turn a power law into a straight line; a straight line makes extrapolation and comparison easy at a glance.
- **Use in science and ML:** For planning how long to train and how much data to collect. Every learning curve should show training and validation, and the scale should be stated explicitly (see the warning about log scales in [entry 10](#f10)).
- **Controversies and caveats:** Only the abstract was read. Whether the laws hold beyond the range studied is not assessed here; the abstract itself limits the scope to language models with cross-entropy loss.

<a id="f20"></a>
## 20. Cleveland and McGill: how well we read each encoding

- **Authors and year:** William S. Cleveland and Robert McGill, 1984, "Graphical Perception: Theory, Experimentation, and Application to the Development of Graphical Methods", *Journal of the American Statistical Association* 79(387). DOI 10.1080/01621459.1984.10478080.
- **Status:** PARTIAL. Metadata and abstract VERIFIED (*JASA* 79(387), **531–554**, September 1984; Crossref and OpenAlex): the paper ranks perceptual tasks by accuracy and proposes using the highest-ranked ones, with dot charts instead of pie charts. The detailed ranking comes from Cornell course slides, not from the paper. The replication by Heer and Bostock (CHI 2010, pp. 203–212, DOI 10.1145/1753326.1753357; authors' PDF: https://idl.cs.washington.edu/files/2010-MTurk-CHI.pdf) keeps the overall order and the advantage of position over length, but in their data **angle was not worse than length**, and circle area was worse than angle.
- **Sources (not opened):**
  - [DOI / Taylor & Francis](https://www.tandfonline.com/doi/abs/10.1080/01621459.1984.10478080): 403.
  - Supporting search summary: [Cornell slides](https://info3312.infosci.cornell.edu/slides/04-graphical-perception.html), not opened.
- **What problem it solves:** Ranking perceptual tasks (position, length, angle, area, colour, etc.) by how accurately people read quantities from them.
- **Design principle:** According to the summaries: ten elementary tasks; position on a common scale is the most accurate and shading or colour saturation the least; use the tasks highest in the hierarchy.
- **Use in science and ML:** This is the strongest reason to prefer dots or aligned bars over circles, bubbles or pie charts when values need to be compared.
- **Controversies and caveats:** Search summaries indicate there were online replications (Heer and Bostock, 2010) with similar results, and that a 2023 tactile replication did not uphold the ranking. NOT VERIFIED against the source.

<a id="f21"></a>
## 21. Rougier, Droettboom and Bourne: ten rules for better figures (2014)

- **Authors and year:** Nicolas P. Rougier, Michael Droettboom and Philip E. Bourne, «Ten Simple Rules for Better Figures», *PLOS Computational Biology* 10(9), e1003833, 11 Sept. 2014. DOI 10.1371/journal.pcbi.1003833. Licence CC0.
- **Status:** VERIFIED.
- **Sources (opened):** [PLOS](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003833); the code for its figures is at https://github.com/rougier/ten-rules
- **What problem it solves:** scientific figures that come out with the software's defaults and say nothing.
- **Design principle:** know your audience, have a message, adapt the figure to the medium (paper, poster or slide), don't trust the defaults, use colour deliberately, don't mislead, avoid chartjunk.
- **Use in science and ML:** the most direct reference for figures made with matplotlib; two of its authors come from that community. "Adapt to the medium" means the figure in the report is not the figure on the slide: on the slide, larger type and fewer panels.
- **Controversies and caveats:** these are rules of experience, not experiments.

<a id="f22"></a>
## 22. Crameri, Shephard and Heron: the misuse of colour in science (2020)

- **Authors and year:** Fabio Crameri, Grace E. Shephard and Philip J. Heron, «The misuse of colour in science communication», *Nature Communications* 11, 5444, 28 Oct. 2020. DOI 10.1038/s41467-020-19160-7. Licence CC BY.
- **Status:** VERIFIED (via Crossref and Europe PMC, PMC7595127).
- **What problem it solves:** rainbow and red-green colour maps distort data (their gradients are uneven, so they invent edges) and are unreadable for people with colour-vision deficiency.
- **Design principle:** use perceptually uniform, accessible colour maps; choose sequential, diverging or categorical according to the data.
- **Use in science and ML:** spectra, sky maps, confusion matrices, time-series heatmaps. In matplotlib: `viridis`, `cividis` or Crameri's colour maps (the `cmcrameri` package), never `jet`.
- **Controversies and caveats:** some communities keep the rainbow out of habit and because it lets readers pick out values with a discrete legend; the paper argues that the cost in distortion and accessibility is higher.

<a id="f23"></a>
## 23. Wilke: *Fundamentals of Data Visualization* (2019)

- **Author and year:** Claus O. Wilke, O'Reilly Media, 2019. Free version of the manuscript at https://clauswilke.com/dataviz/ (CC BY-NC-ND 4.0).
- **Status:** VERIFIED.
- **What problem it solves:** deciding which chart to use for a given question (amounts, distributions, proportions, relationships, uncertainty).
- **Design principle:** form follows the question; dedicated chapters on colour scales, proportional ink, overlapping points, multi-panel figures and how to show uncertainty.
- **Use in science and ML:** the quick reference when you are unsure which chart fits; free and organised by chapter.
- **Controversies and caveats:** it is aimed at static figures (written with R and ggplot2); the principles carry over to matplotlib without trouble.

<a id="f24"></a>
## 24. Gaia's Hertzsprung-Russell diagram (2018)

- **Authors and year:** Gaia Collaboration, Babusiaux et al., «Gaia Data Release 2: Observational Hertzsprung-Russell diagrams», *A&A* 616, A10, 2018. DOI 10.1051/0004-6361/201832843.
- **Status:** VERIFIED (Crossref). Image released by ESA on 25 Apr. 2018 under a CC BY-SA 3.0 IGO licence: https://www.esa.int/ESA_Multimedia/Images/2018/04/Gaia_s_Hertzsprung-Russell_diagram
- **What problem it solves:** the same diagram as [entry 8](#f08), now with more than four million stars within 5,000 light-years: with that many points, the scatterplot becomes a density map.
- **Design principle:** with a lot of data, show density rather than points; and the legend matters: colour in the image indicates star density, not the stars' actual colour.
- **Use in science and ML:** any scatterplot with millions of points (telemetry, embeddings): a 2D histogram or density plot instead of points that hide each other.
- **Controversies and caveats:** chosen for its institutional reach, not because a source calls it «the best».

<a id="f25"></a>
## 25. The figures of an astronomical instrumentation paper: Pepe et al. 2021 (ESPRESSO)

- **Authors and year:** F. Pepe and 99 co-authors, «ESPRESSO at VLT: On-sky performance and first results», *A&A* 645, A96, January 2021. DOI 10.1051/0004-6361/202038306; arXiv 2010.00316.
- **Status:** VERIFIED (figure captions read on arXiv).
- **What problem it solves:** showing in a single paper how a new instrument performs on sky. According to its abstract, precision better than 25 cm/s within a night and 50 cm/s over several months.
- **Design principle:** each type of figure answers a different question about the instrument: a schematic of the light path, the format of the spectrum on the detector, resolution maps, a full spectrum with two zoom-ins, efficiency against seeing and wavelength, velocity time series before and after an upgrade, and phase-folded velocities compared with HARPS.
- **Use in science and ML:** a typical repertoire of figures for an instrumentation paper. Useful for choosing the form of each result about an instrument, or one of its subsystems, in the visual language its community already reads.
- **Controversies and caveats:** these are figures meant to be read in a paper; on a slide they need simplifying ([entry 21](#f21): adapt to the medium).

<a id="cairo"></a>
## 26. Cairo: *The Truthful Art* (2016) and *How Charts Lie* (2019)

- **Author and year:** Alberto Cairo. *The Truthful Art: Data, Charts, and Maps for Communication*, New Riders, 2016, ISBN 978-0-321-93407-9. *How Charts Lie: Getting Smarter about Visual Information*, W. W. Norton, 2019, ISBN 978-1-324-00156-0. In Spanish: *El arte funcional* (Alamut, ISBN 978-84-9889-067-9; year of the first Spanish edition unconfirmed).
- **Status:** VERIFIED for metadata only (Open Library, the author's site https://www.albertocairo.com/ and the publisher). The books were not opened: no quotes or specific principles are attributed to them.
- **What it covers, broadly:** representing data honestly and reading charts with suspicion (scales, bad data, too little data, suggested patterns that are not there).
- **Use:** the strongest Spanish-language reference found. No Spanish-language guide to designing scientific talks was found that meets this catalog's standard.

---

## Synthesis: how to present results

Each principle rests on the entries listed. The strength of the evidence varies: principles that depend only on PARTIAL or NOT VERIFIED entries are flagged.

1. **Plot before you reduce it to a number.** A mean, a correlation or an accuracy score can hide very different structures. See [7 Anscombe](#f07), [14 Tukey](#f14).
2. **Choose the axes that bring out the structure.** The question decides the axis (luminosity vs. colour, time since an event, training steps). See [8 Hertzsprung-Russell](#f08), [10 FT](#f10), [3 Snow](#f03).
3. **Prefer the encoding people read most accurately.** Position on common axes first; area and colour last. (The 2010 replication does not support angle being worse than length.) See [20 Cleveland and McGill](#f20) (detailed ranking PARTIAL), [13 Bertin](#f13), [2 Nightingale](#f02), [9 NYT](#f09).
   - 3b. **Colour is data: use uniform, accessible colour maps, never a rainbow for a continuous quantity.** See [22 Crameri](#f22), [13 Bertin](#f13), [24 Gaia](#f24) (the legend says what colour means).
   - 3c. **Adapt the figure to the medium.** The figure in the report is not the figure on the slide. See [21 Rougier](#f21), [25 instrumentation paper](#f25).
4. **Show the distribution, not just the mean.** Boxes or points per group, per seed and per fold. See [14 Tukey](#f14), [17 Iris](#f17).
5. **Compare by putting things side by side, on the same axes.** Grids of small charts instead of a stack of unrelated figures. See [11 Tufte](#f11) (PARTIAL), [12 Few](#f12).
6. **Remove what adds nothing, but not what the reader needs to interpret.** Minimal decoration, yes; no axes, only for a general audience. See [11 Tufte](#f11), [15 Warming stripes](#f15), [12 Few](#f12).
7. **One image can carry several variables if each has its own channel.** But every added variable needs a reason. See [1 Minard](#f01), [5 Gapminder](#f05).
8. **Be explicit about scales and warn about what they can hide.** A log scale shows the rate of growth and can hide how serious a surge is; always say which scale you use. See [10 FT](#f10), [19 Scaling](#f19), [16 Keeling](#f16).
9. **Warn readers how to read a chart that invites misreading.** A t-SNE does not prove two groups are different; sizes and distances may mean nothing. See [18 t-SNE](#f18), [1 Minard](#f01) (correlation is not causation).
10. **Place the cases where the model fails on the space that matters.** Error maps, residuals and subgroups, not just the average. See [3 Snow](#f03), [6 Du Bois](#f06) (PARTIAL), [7 Anscombe](#f07).
11. **Match complexity to the audience.** For a general audience, a minimal design (stripes); for peers, axes, uncertainty and a comparison with a baseline. See [15 Warming stripes](#f15), [12 Few](#f12), [16 Keeling](#f16).
12. **Be honest about each chart's history and limits.** Avoid "the first" without checking, acknowledge priority disputes, and flag readings that are interpretations. See [2 Nightingale](#f02), [3 Snow](#f03), [1 Minard](#f01), [17 Iris](#f17), [8 Hertzsprung-Russell](#f08).

## What is still missing

- Read the full text of Cleveland and McGill (the ranking table) and of Anscombe; both are paywalled.
- Library of Congress (Du Bois): it asks for human verification; the medals remain unconfirmed.
- Read Friendly (Minard and Nightingale) once the datavis.ca server responds again, including Harness's flow map as a precursor to Minard ([entry 1](#f01)).
- Confirm with Gapminder the axes and the bubble encoding.
- The FT interview at the World Economic Forum.
