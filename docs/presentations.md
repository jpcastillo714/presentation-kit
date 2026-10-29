[Español](presentations.es.md)

# Catalog of reference presentations and talks (with and without animation)

Written for thesis defenses, lab talks, seminars and work presentations, for example ones built on astronomical data or a machine learning model. A common rule of thumb is to keep animation to a minimum because "less is more". This catalog tests that rule against the evidence instead of just repeating it.

> **A note on sources.** The sources were checked in October 2026. Each entry states its verification status.

## How to read this document

- **Verification.** Each entry states the status of its data:
  - **VERIFIED**: the source (web page, DOI/Crossref record or PDF) was opened during verification and the data matches.
  - **PARTIAL**: a source was opened, but it does not confirm everything in the entry; whatever is unconfirmed is flagged.
  - **NOT VERIFIED**: the source could not be opened, or the data comes from recollection only. Check it before citing it in academic work.
- **Animation.** Scale: none / minimal / central. Each entry then says whether it helps or distracts.
- No slides or texts are reproduced. Quotations are few and short.
- Limits of the verification: the reading tool returned summaries rather than full text, and several pages (YouTube, Vimeo, PubMed, Stanford News) would not load. This is noted case by case.

## Quick overview (table)

| Id | Entry | Animation | Status |
|---|---|---|---|
| F01 | Rosling, TED 2006 | central | PARTIAL |
| F02 | Rosling, BBC "200 Countries" 2010 | central | PARTIAL |
| F03 | Jobs, iPhone 2007 | minimal (slides) / live demo | PARTIAL |
| F04 | Jobs, Stanford 2005 | none | NOT VERIFIED |
| F05 | Gore, *An Inconvenient Truth* 2006 | minimal to moderate | VERIFIED (Wikipedia) |
| F06 | Tufte, *The Cognitive Style of PowerPoint* 2003 | none (critique) | VERIFIED |
| F07 | Reynolds, *Presentation Zen* | none / minimal | PARTIAL |
| F08 | Duarte, *Resonate* 2010 | minimal | PARTIAL |
| F09 | The Lessig method and the Takahashi method | none | PARTIAL |
| F10 | PechaKucha 20x20 (2003) | none (timed format) | VERIFIED |
| F11 | 3Blue1Brown and manim | central | VERIFIED |
| F12 | Bret Victor: "Inventing on Principle" and "Ladder of Abstraction" | central (interactive) | PARTIAL |
| F13 | Distill.pub and interactive explanations | central (interactive) | VERIFIED |
| F14 | Shneiderman, "The Eyes Have It" 1996 | none (interaction principle) | VERIFIED (abstract) |
| F15 | Amazon: the six-page memo (2004) | none (no slides) | PARTIAL |
| F16 | Anthropic: interpretability pages and public talks | minimal on the pages | PARTIAL |
| F17 | Feynman, Messenger Lectures 1964 | none | PARTIAL |
| F18 | Sagan, *Cosmos* 1980 | visual effects (central to the medium) | PARTIAL |
| F19 | Gates, TED 2009 | none | PARTIAL |
| F20 | Bergstrom and West, *Calling Bullshit* | none / minimal | PARTIAL |
| F21 | Kurzgesagt | central | VERIFIED (Wikipedia) |
| F22 | Event Horizon Telescope, 2019 announcement | minimal (a single image) | PARTIAL |
| F23 | Vera Rubin Observatory, "First Look" 2025 | images and videos | PARTIAL |
| F24 | Karpathy, *Zero to Hero* | none (live coding) | VERIFIED |
| F25 | Mayer, multimedia learning | evidence on animation | VERIFIED (abstracts) |
| F26 | Alley, *The Craft of Scientific Presentations* and "assertion-evidence" | none | VERIFIED |
| F27 | Doumont, *Trees, Maps, and Theorems* 2009 | none | PARTIAL |
| F28 | Sweller, cognitive load 1988 | theoretical basis | VERIFIED |
| F29 | Tversky, Morrison and Bétrancourt 2002 + Höffler and Leutner meta-analysis 2007 | direct evidence on animation | VERIFIED |
| F30 | Questionable rules: 10/20/30 and "7±2" (Miller 1956 vs. Cowan 2001) | n/a | VERIFIED |
| F31 | Ciechanowski, interactive essays 2020–2022 | central (interactive) | VERIFIED |
| F32 | Hohman et al., "Communicating with Interactive Articles" 2020 | interactive (review) | VERIFIED |
| F33 | Victor, "Explorable Explanations" 2011, and explorabl.es | interactive | VERIFIED |
| F34 | Bourne, "Ten Simple Rules for Making Good Oral Presentations" 2007 | none | VERIFIED |

---

## Part A. Talks with animation or dynamic visualization

### F01. Hans Rosling, "The best stats you've ever seen" (TED 2006)
- **Author and year:** Hans Rosling, TED2006 (February 2006).
- **Source:** https://www.ted.com/talks/hans_rosling_the_best_stats_you_ve_ever_seen (opened; confirms title, author and year; the official description says he presents data with the energy of a sports commentator and debunks myths about the "developing world"). Software background: https://en.wikipedia.org/wiki/Gapminder_Foundation (opened; Gapminder was founded in 2005, and Trendalyzer produces the animated bubble chart). **Correction:** Google bought Trendalyzer in **2007**, not in 2006 as Wikipedia stated; source: https://www.gapminder.org/about/about-gapminder/history/
- **What it does well:** One clear question per chart, and real data that contradicts something the audience believes. The presenter also narrates the chart live, like a sports commentator.
- **Role of animation:** central. **It helps**, because what is shown is precisely a change over time (each country moves along income and health axes). It meets the F29 rule: the animation represents a real change, it is not decoration.
- **Design principle:** the shape of the chart should match the shape of the idea (congruence principle, Tversky et al. 2002, F29).
- **For a thesis defense:** if there is a change over time (for example, how an embedding space evolves while a machine learning model trains), a short narrated animation may be the best figure you have. If nothing changes over time, a static chart is enough.
- **Counterpoint:** Rosling's animation also works because of his narration and because he controls it (he can pause and point). An auto-playing video without a narrator loses much of that. This is an inference from the F29 evidence, not something measured in this talk.
- **Status:** PARTIAL. The transcript and video could not be opened; the TED page does not describe the animated chart. NOT VERIFIED: exact length of the talk.

### F02. Hans Rosling, "200 Countries, 200 Years, 4 Minutes" (BBC, *The Joy of Stats*, 2010)
- **Author and year:** Hans Rosling; BBC Four, broadcast 7 Dec 2010 according to the Wellcome Collection record cited in search results.
- **Source:** https://www.youtube.com/watch?v=jbkSRLYSojo (opened; confirms the title "Hans Rosling's 200 Countries, 200 Years, 4 Minutes - The Joy of Stats - BBC"; date and channel NOT read from the page). Background data (200 countries, about 120,000 data points, animated scatter plot): search results for https://www.statschat.org.nz/2011/06/22/the-joy-of-stats-bbc-four-200-countries-200-years-4-minutes-hans-rosling/ (not opened in detail).
- **What it does well:** compresses 200 years into four minutes with a single thread and a single message (the gap between worlds is closing).
- **Role of animation:** central, and **it helps**. It is the studio version of F01: change over time is the content.
- **Principle:** animation is justified when the data is a trajectory. The narrator also directs attention (signaling, Mayer, F25).
- **Application:** a model for a single 30-to-60-second clip in a thesis defense, not for the whole presentation.
- **Counterpoint:** this is one chart, four minutes long, made with television production values. Replicating it with home-made tools is expensive and tempting to overdo.
- **Status:** PARTIAL (title checked; length and figures come from search results; openculture.com returned a 504 error).

### F11. 3Blue1Brown and manim (Grant Sanderson)
- **Author and year:** Grant Sanderson; the manim library, repository https://github.com/3b1b/manim. NOT VERIFIED: year the channel started.
- **Source:** https://www.3blue1brown.com/faq and https://github.com/3b1b/manim (both opened). The repository describes manim as an engine for programmatic animations in math videos, MIT-licensed, with a community fork (ManimCommunity) since 2020. In the FAQ, Sanderson explains that almost all his animations use manim and lays out his philosophy.
- **What it does well:** every movement has a purpose, the concrete example comes before the abstract framework, and the visuals reinforce the narration instead of competing with it.
- **Role of animation:** central and, when done this way, **it helps**. The author's own rule makes a useful short quote: "Every movement on the screen should be deliberate, with an identifiable purpose."
- **Principle:** purposeful movement + coherence between voice and image (coherence and signaling, F25).
- **Application:** this is the closest reference for judging an animated presentation (for example, axes that turn into a sphere) by the author's own standard: does each transformation teach something the static version doesn't? In a thesis defense, manim is good for short, precise clips (for example, an embedding projection), not for animating every slide.
- **Counterpoint:** these are edited, narrated videos, not live presentations. Carrying that over to a 20-minute talk without rehearsing the timing is risky. The author himself describes manim as a personal playground rather than a polished tool.
- **Status:** VERIFIED (channel start year NOT VERIFIED).

### F12. Bret Victor: "Inventing on Principle" and "Up and Down the Ladder of Abstraction"
- **Author and year:** Bret Victor. "Ladder of Abstraction": October 2011 (page opened). "Inventing on Principle": year NOT VERIFIED (recalled as 2012, not checked).
- **Source:** https://worrydream.com/LadderOfAbstraction/ (opened; describes an interactive essay: a car simulation, sliders for time and turning rate, overlaid trajectories, a heat map, and the technique of moving up and down between levels of abstraction). The video talk: https://worrydream.com/InventingOnPrinciple/ redirects to https://vimeo.com/906418692, but Vimeo showed an anti-bot check and neither the description nor the date could be read.
- **What it does well:** the viewer controls the parameter and sees the consequence immediately. It alternates between the concrete case and the big picture.
- **Role of animation:** central, but it is **interaction**, not passive animation. **It helps** because the learner is in control (this matches the final recommendation of F29).
- **Principle:** move "up and down" between a concrete example and the general pattern; direct manipulation of parameters.
- **Application:** in a thesis seminar, a notebook or web page with a slider (for example, the number of neighbors in UMAP/t-SNE, or a classifier's threshold) can be the best demonstration during Q&A, prepared as backup rather than as the backbone of the talk.
- **Counterpoint:** it requires a live demo that can fail. Prepare a static fallback.
- **Status:** PARTIAL.

### F13. Distill.pub and interactive explanations
- **Author and year:** Distill (journal); example: Gabriel Goh, "Why Momentum Really Works", 4 Apr 2017.
- **Source:** https://distill.pub/2017/momentum/ (opened; interactive figures with controls for the step size α and momentum β, phase diagrams, convergence plots). https://distill.pub/2021/distill-hiatus/ (opened; 2 Jul 2021: the editors put the journal on hiatus, citing structural friction and volunteer burnout, and say the bottleneck is the effort and the mix of scientific and design expertise required).
- **What it does well:** the reader controls the parameters and sees the dynamics; the mathematical model is shown alongside the visual.
- **Role of animation/interactivity:** central. **It helps**, but at a high production cost, as the editors themselves acknowledged.
- **Principle:** interactivity makes up for the problems of passive animation (Tversky et al. 2002, F29).
- **Application:** an interactive figure in a paper or in a thesis appendix (in HTML), not in the oral defense.
- **Honest counterpoint:** the fact that Distill went on hiatus shows this format is expensive and hard to sustain. It is not a realistic standard for a thesis.
- **Status:** VERIFIED.

### F21. Kurzgesagt – In a Nutshell
- **Author and year:** Philipp Dettmer (Munich-based studio); channel created 10 Jul 2013.
- **Source:** https://en.wikipedia.org/wiki/Kurzgesagt (opened; flat minimalist graphics, sometimes 3D; in-house research; cites sources; since 2019 has asked experts to review its work; took down two 2015 videos for not having gone through that process; remade a 2024 video after criticism).
- **What it does well:** a consistent visual style, one topic per video, and declared sources.
- **Role of animation:** central, and **it helps** in the video medium. But it is a team of about seventy people.
- **Principle:** visual consistency (colors, shapes) lowers the load of processing each scene (related to F25 and F28). Its history of corrections shows that good animation does not guarantee rigor.
- **Application:** copy its stylistic discipline (fixed palette, simple shapes), not its production.
- **Counterpoint:** they took videos down because of errors: visual polish can create a false sense of rigor. In a defense, animation is no substitute for supporting data.
- **Status:** VERIFIED (via Wikipedia only, which is a secondary source).

### F23. Vera C. Rubin Observatory, "First Look" (23 Jun 2025)
- **Author and year:** NSF–DOE Rubin Observatory team, 2025.
- **Source:** https://www.aura-astronomy.org/blog/2025/06/13/mark-your-calendars-nsf-doe-vera-c-rubin-observatory-will-unveil-first-look-images-on-23-june-2025/ (opened; live stream on YouTube, in English and Spanish, on 23 Jun 2025 at 11:00 EDT, with watch parties). Search results indicate that high-resolution images and videos were shown (the Virgo cluster, asteroids, RR Lyrae stars). NOT VERIFIED: length of the event (one source says 90 min), who presented, and the exact content, because the recording was not watched.
- **What it does well (as far as could be checked):** the visual content (real images from the instrument) is the star, and the broadcast was made accessible in two languages.
- **Role of animation:** the zoom videos are a legitimate use: a zoom changes scale, which is a real transformation.
- **Principle:** when the data is a spectacular image, the best visualization is the image itself, shown large.
- **Application:** with astronomical data, show a real image or spectrum full-screen before the model, to anchor the audience in the data.
- **Status:** PARTIAL.

### F14. Ben Shneiderman, "The Eyes Have It" (1996)
- **Author and year:** Ben Shneiderman, "The eyes have it: a task by data type taxonomy for information visualizations", *Proceedings 1996 IEEE Symposium on Visual Languages*, pp. 336–343. DOI 10.1109/VL.1996.545307.
- **Source:** Crossref (https://api.crossref.org/works/10.1109/VL.1996.545307) and the abstract on OpenAlex, opened on 29 Oct 2026.
- **What it does well:** proposes the "mantra" of visual information seeking: overview first, then zoom and filter, and details only on demand. It comes with a taxonomy of seven data types and seven tasks.
- **Role of animation:** none; it is a principle of interaction and ordering.
- **Principle:** go from the general to the detail, and keep the detail from competing with the overview.
- **Application:** in a talk, a map slide (the whole instrument, the whole series) before zooming in on one piece; dense detail goes to an appendix or a backup slide.
- **Counterpoint:** it was designed for interfaces that users explore, not for a talk that moves at the speaker's pace; the transfer is an analogy.
- **Status:** VERIFIED (metadata and abstract; the full paper was not read).

### F31. Bartosz Ciechanowski, interactive essays ("Cameras and Lenses", 2020; "Mechanical Watch", 2022)
- **Source:** https://ciechanow.ski/archives/ (opened on 29 Oct 2026); https://ciechanow.ski/cameras-and-lenses/ (Dec 2020), https://ciechanow.ski/mechanical-watch/ (May 2022).
- **What it does well:** builds up a physical phenomenon piece by piece; each 3D figure sits next to the paragraph that explains it, and the reader changes one variable at a time.
- **Role of animation:** central and interactive. **It helps** because the reader sets the pace and each figure adds a single idea.
- **Principle:** change one variable at a time; keep figure and text together (spatial contiguity, F25).
- **Application:** the closest model for explaining an optical instrument such as a spectrograph: light, prism, fiber, detector, each in its own step. In a talk, borrow the progression, not the format.
- **Counterpoint:** these are long-form reading essays, made by one person with a lot of time; they cannot be presented in 20 minutes.
- **Status:** VERIFIED.

### F32. Hohman, Conlen, Heer and Chau, "Communicating with Interactive Articles" (Distill, 2020)
- **Source:** https://distill.pub/2020/communicating-with-interactive-articles/ , *Distill* 5(9), 11 Sep 2020, DOI 10.23915/distill.00028 (opened on 29 Oct 2026).
- **What it does well:** organizes the evidence from education, journalism and visualization on what interaction adds (getting closer to the data, playing with a model, asking for a prediction before showing) and what it costs.
- **Principle:** ask for a prediction before showing the result; use interaction only where it helps. The authors warn that "not everything needs to be interactive".
- **Application:** in a talk, asking the room "what do you think happens if…?" before showing the figure does the same job without any code.
- **Counterpoint:** the authors themselves acknowledge there is little direct empirical evidence and a high production cost.
- **Status:** VERIFIED.

### F33. Bret Victor, "Explorable Explanations" (2011), and the explorabl.es site (Nicky Case)
- **Source:** https://worrydream.com/ExplorableExplanations/ (March 2011, with a postscript from February 2024) and https://explorabl.es/ (designed by Nicky Case according to the repository README, CC0). Opened on 29 Oct 2026.
- **What it does well:** proposes "reactive" documents: the reader changes one of the author's assumptions and instantly sees how the conclusion changes.
- **Principle:** let the audience move the assumption that matters.
- **Application:** study material or an interactive thesis appendix, not the talk itself.
- **Status:** VERIFIED. This is where the term used in F12 and F13 comes from.

---

## Part B. Talks with little or no animation

### F03. Steve Jobs, iPhone launch (Macworld, 9 Jan 2007)
- **Author and year:** Steve Jobs, 9 Jan 2007.
- **Source:** https://allaboutstevejobs.com/videos/keynotes/macworld_2007 (opened; date 9 Jan 2007, Moscone West, about 1 h 45 min according to the timestamps; introduces the iPhone, Apple TV and the name change to Apple Inc.). A search indicates the demo was risky because the software was unfinished; secondary sources.
- **What it does well:** one idea per slide, a clear promise (three products in one), and a live demo as the climax.
- **Role of animation:** minimal on the slides. The real product demo is what **helps**.
- **Principle:** narrative structure (problem, solution, demonstration) with slides that support the speaker instead of competing with him (related to F07 and F08).
- **Application:** a real demo of a machine learning model (for example, a live classification case) is more powerful than any animation, provided there is a recorded plan B.
- **Counterpoint:** the search could **not** confirm that the slides were "minimalist", as is often repeated; that claim remains NOT VERIFIED. Jobs also rehearsed the demo for weeks (NOT VERIFIED) and had a production team. It is a marketing case, not scientific work.
- **Status:** PARTIAL.

### F04. Steve Jobs, Stanford commencement speech (2005)
- **Author and year:** Steve Jobs, June 2005 (year recalled, no source opened).
- **Source:** tried https://news.stanford.edu/stories/2005/06/youve-got-find-love-jobs-says and https://news.stanford.edu/2005/06/14/jobs-061505/; both returned a 403 error. **NOT VERIFIED** during verification: title, date and structure.
- **Why it is on the list:** as a contrast. It is a talk without slides, built on three personal stories and a clear structure, as recalled (NOT VERIFIED).
- **Role of animation:** none.
- **Application:** an example of narrative structure carrying a talk with no visual support; a model for the opening and closing of a thesis defense.
- **Status:** NOT VERIFIED. Open an official transcript before citing it.

### F05. Al Gore, *An Inconvenient Truth* (2006)
- **Author and year:** Al Gore, directed by Davis Guggenheim, 2006.
- **Source:** https://en.wikipedia.org/wiki/An_Inconvenient_Truth (opened, first part only). It says: the presentation was made in Keynote; Gore gave it more than a thousand times; in 2004 he hired Duarte Design to update it with video and animation; the film won two Oscars; in the *Dimmock* case (2007) a UK court found nine scientific errors while also saying the overall account was broadly accurate.
- **What it does well:** a single thesis, data in large charts (for example, long CO2 and temperature series) and a personal narrative thread.
- **Role of animation:** moderate. Animations are used to show physical processes (change over time), which is consistent with F29. Overall, **it helps**.
- **Principle:** a data presentation can be emotional and still grounded in numbers if the speaker drives the narrative (F08).
- **Application:** long time-series charts, with an annotation that guides the eye to the relevant part.
- **Counterpoint:** the Dimmock case shows that a persuasive presentation can sacrifice nuance; in a defense, errors are costly. The unread part of the Wikipedia article (144 thousand characters remaining) may contain more criticism.
- **Status:** VERIFIED (secondary).

### F06. Edward Tufte, *The Cognitive Style of PowerPoint* (2003)
- **Author and year:** Edward Tufte, 2003 (Graphics Press); revised in 2006 according to Wikipedia.
- **Source:** https://www.edwardtufte.com/?p=460 (opened; the "ET on Columbia Evidence" thread, 5 Feb 2003; Tufte analyzed Boeing's presentations on the damage to the space shuttle Columbia's wing from a piece of foam, and says the slides were confusing and did not make the severity clear). https://en.wikipedia.org/wiki/Death_by_PowerPoint (opened; the accident investigation board cited his analysis, and the article summarizes both his criticisms and the defenses).
- **What it does well (the critique):** shows with a real case that a hierarchy of bullet points can bury what matters.
- **Role of animation:** none; it is a critique of the format. Tufte prefers a written document handed out before the meeting (see F15).
- **Principle:** density of evidence matters more than format; bullet points fragment reasoning.
- **Application:** in a technical seminar, keep one data-rich figure with a clear annotation, instead of splitting a result across three slides.
- **Honest counterpoint (important):**
  - Tufte's empirical evidence is anecdotal: Wikipedia reports that a 2013 paper described it as not rigorous from a research standpoint.
  - Tufte himself corrected a detail in 2004: he was not the one who filed the information request for the reports (it was probably a news outlet).
  - There are serious defenses: Steven Pinker argues that, used well, PowerPoint mirrors how we think; Stephen Kosslyn, that the problem is how it is used, not the tool.
  - The Columbia accident was not caused by a slide; it was a combination of failures. Blaming the format is an oversimplification.
- **Status:** VERIFIED.

### F07. Garr Reynolds, *Presentation Zen*
- **Author and year:** Garr Reynolds; blog since 2005; the book's year is NOT VERIFIED (recalled as 2008).
- **Source:** https://www.presentationzen.com/ (opened; confirms the author, that the blog started in 2005 and that the book exists). His tips page could not be opened (https://www.garrreynolds.com/presentation-zen-tips returned 404).
- **What it does well (by reputation, NOT VERIFIED):** simplicity, large images, and keeping the reading document separate from the supporting slides.
- **Role of animation:** none to minimal (NOT VERIFIED).
- **Principle:** a slide should be a visual aid to the voice, not a script.
- **Application:** a slide with a single large figure and a title that states the conclusion.
- **Counterpoint:** the "big image, little text" style works for public talks; in a defense, the committee may want to read the slides without the speaker. Prepare a separate document or an appendix.
- **Status:** PARTIAL.

### F08. Nancy Duarte, *Resonate* (2010)
- **Author and year:** Nancy Duarte, 2010 (year taken from Wikipedia).
- **Source:** https://www.duarte.com/resources/books/resonate/ (opened; presents it as a book about narrative structure in which the audience is the hero and the speaker the mentor) and https://en.wikipedia.org/wiki/Nancy_Duarte (opened; *Slide:ology* 2008, *Resonate* 2010; she worked with Gore on the F05 presentation). NOT VERIFIED: the term "sparkline" for alternating between "what is" and "what could be" (Wikipedia describes the idea without that name).
- **What it does well:** gives a talk a structure (current situation, what could be, and the contrast between them).
- **Role of animation:** minimal; it is not central to her method.
- **Principle:** the audience needs a reason to change its mind; contrast the current state with the possible one.
- **Application:** a structure for a thesis introduction: "today X is done (limitation), I propose Y, this changes Z".
- **Counterpoint:** it is a corporate persuasion method; in science, the "story" must be subordinate to the results and their limits.
- **Status:** PARTIAL.

### F09. The Lessig method and the Takahashi method
- **Author and year:** Takahashi Masayoshi (RubyConf; the page gives no date, a link suggests 2005); the Lessig method, after Lawrence Lessig.
- **Source:** https://en.wikipedia.org/wiki/Takahashi_method (opened; one or two giant words per slide, no images or charts, a very large number of short slides). The article on the Lessig method (https://en.wikipedia.org/wiki/Lessig_method) returned 404, and the article on Lawrence Lessig does not describe his style. **NOT VERIFIED**: origin and description of the Lessig method (it is only mentioned that Takahashi's is "similar").
- **Role of animation:** none; the rhythm comes from switching slides quickly.
- **Principle:** what is said and what is shown reinforce each other without fully repeating each other.
- **Application:** useful for framing key ideas in 2 or 3 slides (for example, the research question). Not suitable for results.
- **Counterpoint:** there is no experimental evidence on these methods (NOT VERIFIED; no studies were found). They do not work with quantitative charts, since they rule out figures.
- **Status:** PARTIAL.

### F10. PechaKucha 20x20
- **Author and year:** Klein-Dytham Architecture, Tokyo, February 2003.
- **Source:** https://en.wikipedia.org/wiki/PechaKucha (opened; 20 slides of 20 seconds each, 6 min 40 s in total; official site pechakucha.org).
- **What it does well:** enforces brevity and pace.
- **Role of animation:** none; timing is automatic, which forces a new image every 20 s.
- **Principle:** a time constraint keeps the speaker from rambling.
- **Application:** a good rehearsal exercise: summarizing a thesis in 20×20 forces you to decide what counts. For the actual defense, auto-advance is risky because you cannot stop on a dense figure.
- **Counterpoint:** fixed timing does not suit technical figures that need more than 20 s.
- **Status:** VERIFIED.

### F15. Amazon: the six-page memo (2004)
- **Author and year:** Jeff Bezos, email from June 2004 (according to secondary sources).
- **Source:** https://www.aboutamazon.com/news/workplace/an-insider-look-at-amazons-culture-and-processes (opened; describes the PR/FAQ, a narrative document read in silence at the start of the meeting, with feedback after reading; it says nothing about PowerPoint or "six pages" for that format). The "six pages", the "PowerPoint ban" and the date of the email (9 Jun 2004) come only from search results citing blogs (office-watch.com, anecdote.com), not from a primary document. The Amazon shareholder letter that was checked says nothing about any of this.
- **Role of animation:** none (no slides).
- **Principle:** for complex decisions, a narrative text forces thinking in complete sentences and causes; reading beforehand puts everyone on the same footing (consistent with F06).
- **Application:** for a work meeting (for example, with a thesis advisor or supervisor), send a short one- or two-page document beforehand and use the meeting for discussion.
- **Counterpoint:** the format is costly to write and favors good writers; no study compares it with slides (NOT VERIFIED).
- **Status:** PARTIAL (the date, the six pages and the "ban" are NOT confirmed by a primary source).

### F17. Richard Feynman, *The Character of Physical Law* (Messenger Lectures, Cornell, 1964)
- **Author and year:** Richard Feynman, 1964.
- **Source:** https://en.wikipedia.org/wiki/The_Character_of_Physical_Law (opened; seven lectures at Cornell, recorded by the BBC, published as a book in 1965; Cornell put them online in 2015).
- **What it does well:** explains difficult ideas with concrete examples and a conversational tone (the article says little about his style; the rest is this catalog's reading, NOT VERIFIED).
- **Role of animation:** none.
- **Principle:** clarity through analogy and example; the speaker is the main resource (Doumont, F27).
- **Application:** to convey the intuition behind a method (for example, what an embedding space is) with an analogy before a figure.
- **Counterpoint:** an exceptional speaker cannot be copied; this is not a recipe.
- **Status:** PARTIAL.

### F18. Carl Sagan, *Cosmos: A Personal Voyage* (1980)
- **Author and year:** Carl Sagan (with Ann Druyan and Steven Soter), PBS, 28 Sep to 21 Dec 1980.
- **Source:** https://en.wikipedia.org/wiki/Cosmos:_A_Personal_Voyage (opened; 13 episodes of about 60 min; the "Cosmic Calendar" and the "Ship of the Imagination"; more than 500 million viewers).
- **What it does well:** scale metaphors (one year for the whole history of the universe) that make the immense understandable.
- **Role of animation:** visual effects as part of the medium; the metaphor (the calendar) is what **helps**, because it compresses a scale, not because of the effect.
- **Principle:** translate a magnitude into a human scale.
- **Application:** if a thesis deals with huge distances or quantities (astronomical data), a human-scale comparison helps more than another animation.
- **Counterpoint:** it is big-budget television, not a talk.
- **Status:** PARTIAL.

### F19. Bill Gates, "Mosquitos, malaria and education" (TED 2009)
- **Author and year:** Bill Gates, TED2009 (February 2009), 18 minutes.
- **Source:** https://www.ted.com/talks/bill_gates_mosquitos_malaria_and_education (opened; confirms title, year and length; does not say he released mosquitoes).
- **What it does well:** a memorable live physical gesture (as recalled, he released mosquitoes into the room; NOT VERIFIED).
- **Role of animation:** none.
- **Principle:** a physical demonstration can be worth more than a slide.
- **Application:** an object or real case shown in a defense (for example, a printed real spectrum) can anchor attention.
- **Counterpoint:** it is a showman's device; in a defense it can feel out of place if it does not serve the argument.
- **Status:** PARTIAL.

### F20. Carl Bergstrom and Jevin West, *Calling Bullshit*
- **Author and year:** Bergstrom and West; site copyright 2017–2019; book later.
- **Source:** https://callingbullshit.org/ (opened; a course on critical thinking about data and models; a video section; the book *Calling Bullshit: The Art of Skepticism in a Data-Driven World*). NOT VERIFIED: the year the course and the book started; the content of each video.
- **What it does well:** teaches how to spot misleading charts and numbers.
- **Role of animation:** none to minimal (NOT VERIFIED).
- **Principle:** an honest visualization avoids distortion (axes, scales, correlation vs. causation).
- **Application:** a checklist for your figures before presenting: does the axis start where it should? Are the error bars shown? Is there a separate test set?
- **Counterpoint:** it is course material, not a model for oral presentations.
- **Status:** PARTIAL.

### F22. Event Horizon Telescope: the 10 Apr 2019 announcement
- **Author and year:** EHT Collaboration and NSF, 10 Apr 2019.
- **Source:** https://www.nsf.gov/news/astronomers-capture-first-image-black-hole (opened; title, date, M87, coordinated press conferences around the world). Number of simultaneous press conferences NOT VERIFIED.
- **What it does well (what could be checked):** a single image as the message, announced in a coordinated way.
- **Role of animation:** minimal: an image is the centerpiece.
- **Principle:** one well-chosen image can be the entire message.
- **Application:** if there is one central result, make it a large, clean figure and explain everything else around it.
- **Counterpoint:** the structure of the announcement talks was not reviewed, only the press release.
- **Status:** PARTIAL.

### F24. Andrej Karpathy, *Neural Networks: Zero to Hero*
- **Author and year:** Andrej Karpathy; year NOT VERIFIED.
- **Source:** https://karpathy.ai/zero-to-hero.html (opened; video lessons with live coding, one to two hours each, from backpropagation to GPT-style models).
- **What it does well:** builds everything from scratch and explains each step in code.
- **Role of animation:** none; code written live does the job of "watching it being built".
- **Principle:** show the process step by step, instead of an animated transformation.
- **Application:** for a technical session with a team or supervisor, walk through a notebook in order, with short cells.
- **Counterpoint:** at one to two hours, it needs a willing audience; it does not fit in a defense.
- **Status:** VERIFIED.

---

### F34. Philip E. Bourne, "Ten Simple Rules for Making Good Oral Presentations" (2007)
- **Source:** *PLOS Computational Biology* 3(4), e77, 27 Apr 2007, DOI 10.1371/journal.pcbi.0030077, CC BY license: https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.0030077 (opened on 29 Oct 2026).
- **What it does well:** practical rules written from within science: speak to this audience, present only what is worth it, leave a message people will remember a week later, rehearse, use few but good images.
- **Role of animation:** none.
- **Principle:** the message the audience takes away decides what goes in and what stays out.
- **Application:** before building a presentation, write in one sentence what the team should remember a week later.
- **Counterpoint:** it is the experience of an editor and speaker, not an experiment.
- **Status:** VERIFIED.

---

## Part C. Anthropic: what exists publicly, and what kind

### F16. Anthropic: interpretability research pages and public talks
- **Context:** Anthropic's public materials are sometimes used as examples of presentations. What could be found publicly falls into two types: research pages (text + figures) and developer events. No record of "Anthropic slides" as such was found.
- **Sources and findings:**
  - "Tracing the thoughts of a large language model" (27 Mar 2025): https://www.anthropic.com/research/tracing-thoughts-language-model (opened). A long article with annotated static figures (circuit diagrams or attribution graphs), an embedded video, a table of contents and links to two full papers; each finding starts from a concrete example (a rhyme, a two-digit addition, a question about a capital). **It has no clear interactive widgets**, based on the reading.
  - "Scaling Monosemanticity": https://transformer-circuits.pub/2024/scaling-monosemanticity/ . Search results confirm the page and its content (sparse autoencoders on Claude 3 Sonnet, with up to about 34 million features; limitations stated by the authors). Reading it directly failed because of the page's size, so **how its interactive visualizations look could not be confirmed** (NOT VERIFIED). Note: an arXiv number that was tried (2405.06061) belongs to a different paper (GPTCoach); do not use it. An arXiv listing (2605.29358) appeared in a search, but it is treated as a mirror and was not verified.
  - "Golden Gate Claude" (23 May 2024): https://www.anthropic.com/news/golden-gate-claude (opened). A **public interactive demo** showing that an internal feature can be amplified, available for 24 hours. A case where the form of the message is the interaction.
  - Code with Claude: https://claude.com/code-with-claude (opened; in 2026, San Francisco 6 May, London 19 May, Tokyo 10 Jun; there is a link to recordings but it did not list sessions). A search shows, for 2026, a conversation between Dario and Daniela Amodei moderated by Ami Vora; the recording was not watched (content NOT VERIFIED). The 2025 event: speakers NOT VERIFIED in the source that was opened.
- **What it does well:** anchors every claim in a concrete example and states the method's limitations (in the "Tracing" article, the authors note that the method captures only a fraction of the computation; according to the search summary).
- **Role of animation:** minimal on the pages; annotated static figures. Interactivity shows up in occasional demos.
- **Principle:** concrete example first, abstraction afterwards (F11, F12); state the limits (F20).
- **Application:** if these pages are taken as "presentations", it is worth knowing that their main resources are **text + annotated static diagrams**, not animation. That supports the "less is more" rule.
- **Counterpoint:** internal presentations and research talks on video were not reviewed; there may be others with more movement.
- **Status:** PARTIAL.

---

## Part D. The literature that justifies (or limits) these choices

### F25. Richard E. Mayer, multimedia learning
- **Author and year:** Richard E. Mayer, *Multimedia Learning* (several editions); chapter "Introduction to Multimedia Learning", 2005 and 2014.
- **Source:** Mayer's own chapters, verified through Crossref with abstracts on OpenAlex (October 2026): extraneous processing, *Cambridge Handbook of Multimedia Learning* (2005), pp. 183–200, DOI 10.1017/CBO9780511816819.013; essential processing, pp. 169–182, DOI 10.1017/CBO9780511816819.012; Mayer and Moreno (2003), "Nine Ways to Reduce Cognitive Load in Multimedia Learning", *Educational Psychologist* 38(1), 43–52, DOI 10.1207/S15326985EP3801_6.
- **The idea (2005 abstracts, paraphrased):** coherence, leave out the extraneous (10 of 11 tests; median effect size 1.32); signaling, mark how the essential material is organized (3 of 3; 0.60); redundancy, graphic + narration beats graphic + narration + the same text on screen (10 of 10; 0.69); **spatial** contiguity, words and images that correspond go together (8 of 8; 1.11), and **temporal** contiguity, narration runs at the same time as the animation; segmenting, parts at the learner's own pace (3 of 3; 0.98). Redundancy does not forbid text: it advises against reading aloud what is already written when there is a graphic.
- **Role of animation:** Mayer treats animation as a medium that can help if the load is kept under control.
- **Application:** don't read out what is written on the slide; use an arrow to highlight the relevant part of the figure.
- **Counterpoint:** the results come from few tests per principle (3 to 11), with students, and largely from the author's own lab, not from scientific defenses before experts; applying them to a defense is an inference.
- **Status:** VERIFIED (chapter abstracts; the full text was not read).

### F26. Michael Alley, *The Craft of Scientific Presentations* and the assertion-evidence approach
- **Author and year:** Michael Alley, 2013 (2nd edition), Springer, DOI 10.1007/978-1-4419-8279-7 (confirmed via Crossref).
- **Source:** https://www.assertion-evidence.com/ (opened; site of the Leonhard Center, Penn State; each slide's headline is a full-sentence assertion and the visual evidence supports it, instead of bullet points). Studies: Garner, Alley, Wolfe, Zappe and Sawarynski, "Assertion-Evidence Slides Appear to Lead to Better Comprehension and Recall of More Complex Concepts" (ASEE 2011), DOI 10.18260/1-2--17510 (verified via Crossref; the year is inferred from the conference name, the database does not give it).
- **Role of animation:** none.
- **Principle:** the slide title should be the conclusion, and the figure the proof.
- **Application:** for each result in a thesis: title = what it shows ("The model separates classes X and Y with an accuracy of Z"); body = one figure.
- **Stronger evidence:** Garner and Alley (2013), "How the design of presentation slides affects audience comprehension: A case for the assertion–evidence approach", *International Journal of Engineering Education* 29(6), 1564–1579 (no DOI; PDF at https://www.writing.engr.psu.edu/ae_comprehension.pdf). A randomized experiment with 110 engineering students (59 with assertion-evidence slides, 51 with typical slides) on how magnetic resonance imaging works: the first group wrote better explanations, had fewer misconceptions (d = 0.47) and reported less mental effort.
- **Counterpoint:** it is still a single experiment, with students and on a single topic: good evidence, not conclusive.
- **Status:** VERIFIED.

### F27. Jean-luc Doumont, *Trees, Maps, and Theorems* (2009)
- **Author and year:** Jean-luc Doumont, 2009, Principiae (Belgium).
- **Source:** search results with reviews (https://www.tug.org/books/reviews/tb103reviews-doumont.html, could not be opened: 403 error; https://andrewpwheeler.com/2016/12/05/review-of-trees-maps-and-theorems-effective-communication-for-rational-minds-by-jean-luc-doumont/, not opened). The reviews agree on: adapt to the audience, maximize the signal-to-noise ratio, and (according to one reader review) use effective redundancy.
- **Role of animation:** none.
- **Principle:** adapting to the audience is the first law.
- **Application:** tell apart what the committee needs (rigor and limits) from what a peer needs (intuition).
- **Counterpoint:** the book was not opened; the information comes from reviews. One review disputes a point about charts (axes with three tick marks).
- **Status:** PARTIAL.

### F28. John Sweller, "Cognitive Load During Problem Solving" (1988)
- **Author and year:** John Sweller, *Cognitive Science* 12(2), 257–285, April 1988.
- **Source:** DOI 10.1207/s15516709cog1202_4, verified via Crossref (https://api.crossref.org/works/10.1207/s15516709cog1202_4). The abstract: conventional problem solving uses up so much processing capacity that little is left for acquiring schemas.
- **The idea, applied:** working memory is limited; anything that does not serve the goal takes up space.
- **Role of animation:** theoretical basis. The extra load of a complex animation can do harm.
- **Application:** one figure per idea. Present the familiar first and then the new.
- **Counterpoint:** it is a paper on problem solving, not on presentations; extending it to slides is a later inference in the literature (Mayer, F25).
- **Status:** VERIFIED (abstract only; the full text was not read).

### F29. Direct evidence on animation: Tversky et al. (2002) and Höffler and Leutner (2007)
- **Sources:**
  - Tversky, Morrison and Bétrancourt, "Animation: can it facilitate?", *Int. J. Human-Computer Studies* 57, 247–262 (2002). The full PDF was read (University of Washington copy: https://faculty.washington.edu/aragon/classes/hcde411/w13/readings/Tversky_AnimationFacilitate_IJHCS02.pdf). **Corrected DOI:** 10.1006/ijhc.2002.1017, volume 57, issue 4 (Crossref).
  - Höffler and Leutner, "Instructional animation versus static pictures: A meta-analysis", *Learning and Instruction* 17(6), 722–738 (2007). Opened: https://www.leibniz-ipn.de/en/research/publications/instructional-animation-versus-static-pictures-a-meta-analysis
- **Findings (paraphrased):**
  - Tversky et al.: the research comparing animated with static graphics is discouraging. When animation came out ahead, the graphics being compared were not equivalent (the animation carried more information or interactivity). They propose two principles: **congruence** (the form of the graphic should correspond to the form of the concept) and **apprehension** (it must be perceivable accurately: not too fast or too complex). They recommend slow, schematic animations with annotations (arrows, highlighting), and giving the viewer control. They add that a good static figure with arrows can be just as effective.
  - Höffler and Leutner: 26 studies, 76 comparisons, overall effect d = 0.37 (95% CI: 0.25 to 0.49) in favor of animation; "representational" animations d = 0.40; highly realistic videos d = 0.76; procedural-motor knowledge d = 1.06. Confidence intervals: representational 0.26–0.53; realistic 0.39–1.13; procedural-motor 0.72–1.40 (abstract verified on 29 Oct 2026). Later reviews: Ploetzner, Berney and Bétrancourt (2020), *J. Computer Assisted Learning* 36(6), 838–860, DOI 10.1111/jcal.12476, conclude that animation outperforms still images when what is being learned is the characteristics of a change; the same authors (2021), *Instructional Science* 49(4), DOI 10.1007/s11251-021-09541-w, found animation better for identifying movements and still images better for spatial arrangements (abstracts on OpenAlex).
- **How they fit together:** animation can help, especially for procedures and movements, but its advantages are confounded with other factors (more information, interactivity). For abstract concepts and complex systems, the evidence is weak.
- **Honest counterpoint to the "less is more" rule:** it is not a law. The meta-analysis finds a real advantage for animation under certain conditions. The right rule is "animate when the content is a change, and keep the animation slow, simple and guided", not "avoid animation".
- **Application:** to evaluate a specific animation, apply both principles (see "Synthesis", rule 4, and "How to evaluate an animated presentation").
- **Limitation:** almost all of the studies are about student learning; a defense is a different setting (there is NO direct evidence).
- **Status:** VERIFIED.

### F30. Questionable rules: 10/20/30 (Kawasaki) and "7 ± 2" (Miller) versus Cowan
- **10/20/30:** ten slides, twenty minutes, 30-point font, proposed by Guy Kawasaki.
  - Source: https://www.cbsnews.com/news/improve-your-powerpoint-presentations-with-guy-kawasakis-10-20-30-rule/ (opened; CBS MoneyWatch, updated 3 May 2010; the article **cites no study**, and the justifications are opinions: an audience can only take in about ten concepts, 20 minutes leaves time for questions, and a large font keeps you from reading a script). Kawasaki's original page returned 403. One search result suggests he meant it as a guideline, not a strict rule (NOT VERIFIED).
  - Verdict: useful as a heuristic for an investor pitch, not as a scientific rule. For a defense, the time limit is set by the department or university.
- **"7 ± 2":**
  - Miller (1956), *Psychological Review* 63(2), 81–97: verified via Crossref (DOI 10.1037/h0043158).
  - Cowan (2001), *Behavioral and Brain Sciences* 24(1), 87–114: https://www.cambridge.org/core/journals/behavioral-and-brain-sciences/article/magical-number-4-in-shortterm-memory-a-reconsideration-of-mental-storage-capacity/44023F1147D4A1D44BDC0AD226838496 (opened; abstract: the real limit is around four chunks, and Miller offered seven as a rough estimate and a rhetorical device).
  - Verdict: there is no "magical seven". The number depends on how a "chunk" is counted. What is useful is the general principle (working memory is short), not the figure. "At most 7 bullet points" does not follow from Miller.
- **Other numbers without clear support:** Kosslyn and others (2012) report that many presentations violate psychological principles, with more than four bullets per list and text under 20 points (according to Wikipedia, https://en.wikipedia.org/wiki/Death_by_PowerPoint, which is not the original source; NOT VERIFIED against the paper).
- **Status:** VERIFIED (with the caveats noted).

---

## Synthesis: how to structure and deliver

Twelve principles for a thesis defense, a lab talk, a seminar or a work presentation. Each one points to the entries that support it. Where the evidence is only speakers' experience, that is said.

1. **Start with the question and why it matters; the method comes later.** Contrast the current state with what you propose to change. Entries: F08 (Duarte), F03 (Jobs), F04 (NOT VERIFIED), F27 (adapt to the audience). This is a narrative convention; no study measures its effect in defenses.
2. **Every slide asserts a conclusion and the figure proves it.** The title is the full sentence; the body is a figure. Entries: F26 (Alley; one randomized experiment in a journal, 2013, plus conference papers), F06 (Tufte; density of evidence), F22 (a single image as the message), F34 (Bourne).
3. **One idea per slide and one figure per idea.** Limit what working memory has to hold; don't count bullet points as a rule. Entries: F28, F25, F30 ("7 ± 2" and 10/20/30 are not evidence-backed rules).
4. **When TO animate** (explicit rule). Animate only if **all four** conditions hold: (a) what you want to show **is** a change of state or a transformation in time or space (an embedding going from 2D to a higher-dimensional space, training that converges, a zoom across scales); (b) a set of static figures with arrows does not convey the same thing (Tversky et al. say it often does); (c) the animation is **slow, simple and schematic**, with only one thing moving at a time and an annotation guiding the eye; (d) the presenter narrates it and can pause it. Entries: F29 (congruence and apprehension; a real advantage for procedures), F01, F02 (Rosling), F11 (purposeful movement), F12 and F13 (the viewer is in control).
5. **When NOT to animate.** Don't animate: decorative transitions between slides; text that appears letter by letter; results being compared (a static bar chart lets you look at two values at once, an animation forces you to remember the previous one); and anything that does not change over time. Nor should you animate something you cannot explain in the time it runs. Entries: F29 (animation can be too fast or too complex and does not beat static), F06 and F07 (distraction and filler), F25 (coherence: remove the extraneous).
6. **If you animate, have a static backup.** A live demo can fail (Jobs's was risky, according to secondary sources); bring the final frame and one intermediate frame as images. Entries: F03, F12, F29.
7. **Show the real data before abstracting.** Start from a real image or spectrum (for example, from astronomical data) shown large, then explain the model; likewise, a concrete case before the formula. Entries: F23 (Rubin), F22 (EHT), F11 (example before framework), F16 (each finding starts from an example), F12 (moving up and down the ladder of abstraction).
8. **Don't read what is written, and guide the eye.** Avoid reading the slide text aloud; highlight with an arrow or a box what you are talking about. Entries: F25 (redundancy and signaling), F29 (annotations), F02.
9. **State your limits and checks.** A persuasive presentation should not hide the nuances: say how you evaluated, on what data, and where it fails. Entries: F05 (the Dimmock case), F20 (Bergstrom and West), F16 (Anthropic states limitations), F21 (Kurzgesagt's takedowns and corrections).
10. **Separate what is presented from what is read.** For a work meeting, send a short text beforehand and use the meeting for discussion; for a defense, bring an appendix with the detailed figures. Entries: F15 (Amazon memo; anecdotal evidence only), F06 (Tufte), F07 (Reynolds).
11. **A time constraint helps you choose.** Rehearse a 20-slide × 20-second summary to decide what matters, then build the real version for the time you have. Entries: F10 (PechaKucha), F09 (Takahashi, only for key ideas and not for results), F30 (10/20/30 has no empirical support).
12. **Adapt to the audience and rehearse out loud.** The committee assesses rigor, a peer looks for intuition; the speaker is the main resource. Entries: F27 (Doumont), F17 (Feynman), F18 (Sagan; human scale), F19 (Gates; a physical gesture, with reservations), F24 (Karpathy; step by step).

### How to evaluate an animated presentation
- **What can justify it:** if it shows a transformation (for example, going from axes to a sphere in an embedding space), it meets rule 4a. If it is also slow, schematic and narrated, it meets the congruence and apprehension principles of F29.
- **What to check:** does every movement have a purpose? (F11) Is there a static version that says the same thing? Can viewers actually perceive what is changing? (F29). If the animation is inspired by Anthropic's public materials, remember that those sources are mostly text and annotated static figures (F16): the animated style does not come from there.
- **The "less is more" rule:** it is supported by F25, F26 and F29 in most cases, but it is not universal. The F29 meta-analysis shows an advantage for animation under certain conditions. The more accurate phrasing is: **"animate when the content is a change, and even then keep it simple"**.

## Limits of this catalog
- Much of the background information (for example, F02, F05, F15, F22, F23) comes from a reading tool's summaries or from search engines, not from the full source.
- Several video talks (TED, BBC, Jobs, Rubin, EHT, Code with Claude) were not watched; what is said about their visual style is what could be confirmed, or it is flagged as NOT VERIFIED.
- The Mayer, Doumont and Alley works were not read in full. For academic work, cite only what is marked VERIFIED (Sweller 1988, Miller 1956, Cowan 2001, Tversky et al. 2002, Höffler and Leutner 2007) and check the rest against the original text.
- A search turned up an arXiv identifier (2605.29358) for "Scaling Monosemanticity", dated 2026; it is treated as a mirror and not used. The canonical source is transformer-circuits.pub.
