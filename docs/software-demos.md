English · [Español](software-demos.es.md)

# Catalog of software demos and the evidence on how to show software

Written for lab talks, seminars and work presentations that show software running: a data dashboard, a notebook, or a chat interface built on a large language model (LLM), either live or as a recorded clip. It complements [presentations.md](presentations.md) (talks, F entries) and [charts.md](charts.md). Entries here are numbered S01, S02… The iPhone launch (Macworld 2007) is already entry F03 in presentations.md and is not repeated here.

> **A note on sources.** The sources were checked in October 2026. Each entry states its verification status. The kit's texts are CC BY 4.0; the cited sources keep their own licenses, and nothing from them is reproduced beyond a few short quotes.

## How to read this document

- **Verification.** Each entry states the status of its data:
  - **VERIFIED**: the source (web page, DOI/Crossref or OpenAlex record, PDF or abstract) was opened during verification and the data matches.
  - **PARTIAL**: a source was opened, but it does not confirm everything in the entry; whatever is unconfirmed is flagged.
  - **NOT VERIFIED**: the source could not be opened, or the data comes from recollection or a search snippet only. Check it before citing it in academic work.
- **Format.** live demo / recorded audio or video / edited video / rule (legal or platform) / research. Each entry then says what role motion, zoom and video play.
- **Evidence strength** (used in the synthesis): **meta-analysis** (many experiments pooled), **experiment** (one or a few controlled studies), **observational** (large usage data, no random assignment), **craft** (practitioners' guidance, case histories, legal or platform rules).
- Limits of the verification: the reading tool returns summaries rather than full text. Several sites refused automated access (OpenAI, BBC, Neowin, MDPI, ScienceDirect, Springer, the Society for Technical Communication site, Stanford's MouseSite, a HAL repository, and a university repository PDF behind a human-verification page). None of those blocks was circumvented; each case is noted. A page that did not load does not prove the fact is wrong.

## Quick overview (table)

| Id | Entry | Format | Status |
|---|---|---|---|
| S01 | Engelbart, "The Mother of All Demos" 1968 | live demo | PARTIAL |
| S02 | Jobs, Macintosh introduction 1984 | live demo (scripted) | VERIFIED (first-hand account) |
| S03 | Windows 98 crash on stage, 1998 | live demo (failure) | PARTIAL |
| S04 | Victor, "Inventing on Principle" 2012 | live coding | PARTIAL |
| S05 | Google Duplex, I/O 2018 | recorded audio at a live keynote | PARTIAL |
| S06 | Tesla Cybertruck window, 2019 | live demo (failure) | VERIFIED (press) |
| S07 | Google, "Hands-on with Gemini" 2023 | edited video | PARTIAL |
| S08 | OpenAI GPT-4o live stream 2024 | live demo | PARTIAL |
| S09 | Anthropic, computer use 2024 | recorded videos + stated limits | VERIFIED |
| S10 | *FTC v. Colgate-Palmolive* 1965 (mock-ups) | rule (legal) | VERIFIED |
| S11 | Apple, App Store app preview rules | rule (platform) | VERIFIED |
| S12 | van der Meij: guidelines for software video tutorials (2013, 2014, 2022) | research | PARTIAL |
| S13 | Demonstration-based training (Rosen et al. 2010; van der Meij 2016–2018; Brar and van der Meij 2017) | research | VERIFIED (abstracts) |
| S14 | Signaling text-picture relations: Richter et al. 2016, plus a software-video study (2023) | research | VERIFIED (abstracts) |
| S15 | Signaling meta-analysis: Schneider et al. 2018, plus Jamet 2014 | research | PARTIAL |
| S16 | Segmenting meta-analysis: Rey et al. 2019 | research | VERIFIED (abstract) |
| S17 | Captions and narration: Adesope and Nesbit 2012; Fyfield et al. 2022 | research | VERIFIED (abstracts) |
| S18 | Mayer, Fiorella and Stull 2020, five principles for instructional video | research | VERIFIED (abstract) |
| S19 | Guo, Kim and Rubin 2014, video production and engagement | research (observational) | VERIFIED |
| S20 | Practitioner guidance: Nielsen Norman Group 2020 and GitHub Docs | craft | VERIFIED |

---

## Part A. Recognized demos and product presentations

### S01. Douglas Engelbart, "The Mother of All Demos" (1968)
- **Author and year:** Douglas Engelbart and his team at SRI's Augmentation Research Center; 9 Dec 1968, Fall Joint Computer Conference, San Francisco.
- **Source:** https://www.dougengelbart.org/content/view/209/ (Doug Engelbart Institute; opened on 30 Oct 2026). It confirms the session title ("A Research Center for Augmenting Human Intellect"), about 90 minutes live, Engelbart seated at a custom console, the NLS system running on a computer at SRI about 30 miles away with its output projected on a large screen, team members joining by teleconference, and a lead engineer running the production. The page says the event "came to be known" by its famous name, without saying who coined it. Stanford's MouseSite (403) and an SRI page (404) did not load.
- **What it does well:** the working system is the talk. Engelbart moves between his own outline and live features, and the outline itself lives inside the tool being shown.
- **Role of motion/zoom/video:** central and real: the audience watches a live screen and remote colleagues over a video link. Nothing in the source suggests any part was simulated.
- **Principle:** show the real system doing real work, in the order of an argument.
- **Application (lab or work talk):** keep the talk's outline inside the dashboard or notebook (a "start here" tab or cell), so moving between the argument and the demo costs nothing.
- **Counterpoint:** it needed a production team, custom furniture and hardware, and a remote link; one failure could stop it. The page says nothing about rehearsals or a backup. The features usually attributed to the demo (hypertext links, shared-screen editing, the mouse as a pointing device) are NOT VERIFIED on the page that was opened, beyond a mention of a mousepad and of teleconferenced segments.
- **Status:** PARTIAL.

### S02. Steve Jobs, Macintosh introduction (24 Jan 1984)
- **Author and year:** Steve Jobs, Apple's annual shareholders meeting, Flint Center, Cupertino, 24 Jan 1984.
- **Source:** Andy Hertzfeld, "The Times They Are A-Changin'", https://www.folklore.org/The_Times_They_Are_A-Changin.html (opened). A first-hand account by a member of the Macintosh team. It says the demo software was put together in a hurry by an exhausted team; the weekend rehearsal had many problems (a rented projector that warmed up slowly and sometimes shut down; a special board had to be built to match the Mac's video timing); Jobs barely managed one complete run-through. On stage the Mac was taken out of a bag, booted from a floppy disk, introduced itself with a synthesized voice, and the demo ran without a failure. Jobs's narrative had already been used at an earlier sales meeting.
- **What it does well:** the product introduces itself in a short, fixed sequence that only the real machine could perform.
- **Role of motion/zoom/video:** live on stage, but a scripted sequence, not open exploration.
- **Principle:** script the demo as a fixed sequence, and rehearse it on the actual hardware and the room's projector.
- **Application:** for an LLM interface, type the prompts in a rehearsed order; test the room's projector, resolution and network beforehand. In 1984 the trouble was the projector, not the computer.
- **Counterpoint:** a single memoir by a participant, not corroborated here by a second source. It does not say whether the voice was generated live. A scripted demo shows the best path, not typical use.
- **Status:** VERIFIED (first-hand account; one source).

### S03. The Windows 98 crash on stage (1998)
- **Author and year:** Microsoft, a Windows 98 preview during Bill Gates's keynote at COMDEX in Chicago, 20 Apr 1998, according to search results (the Neowin article returned 403; date and venue NOT VERIFIED against a page that was opened).
- **Source:** Raymond Chen, *The Old New Thing* (Microsoft's developer blog), 23 Sep 2025: https://devblogs.microsoft.com/oldnewthing/20250923-00/?p=111621 (opened). The presenters had bought a scanner at a local store and did not test it before going on stage; the device had a bug. The lesson the post describes: Microsoft's production studio later added a room next to the broadcast studio where equipment is set up and tested before it is handed to the hosts. A search snippet (not opened) attributes to an earlier post by Chen the technical cause: the scanner drew more USB bus power than allowed and triggered an untested error path.
- **What it teaches:** a demo crashed in front of the press because of untested equipment, not because of the software being shown.
- **Role of motion/zoom/video:** live demo of plugging in a device; the failure was visible to everyone.
- **Principle:** demo only with the exact equipment, accounts and data you tested; the stage is not the place to try something for the first time.
- **Application:** do not plug in a new adapter, switch networks, or log in to a fresh account during the talk; use the laptop, browser profile and dataset you rehearsed with.
- **Counterpoint:** search results say Gates defused the moment with a joke (wording varies by source; NOT VERIFIED). A visible failure handled with calm can be survivable.
- **Status:** PARTIAL.

### S04. Bret Victor, "Inventing on Principle" (CUSEC 2012)
- **Author and year:** Bret Victor, CUSEC conference, Montreal. Date of the talk, 20 Jan 2012, according to a search snippet of the author's page; the author's page redirects to Vimeo, which showed an anti-bot check in an earlier check (see F12) and was not retried.
- **Source:** https://archive.org/details/vimeo-36579366 (opened): the title, CUSEC as creator, original publication date 10 Feb 2012, and a description of the author as a builder of tools that help people understand and create. This entry complements F12 in presentations.md.
- **What it does well (as recalled; NOT VERIFIED here because the video was not watched):** each demo changes something in code and shows the result immediately, so the audience sees cause and effect.
- **Role of motion/zoom/video:** central; live coding with immediate visual feedback.
- **Principle:** show cause and effect: change one thing and let the audience see the consequence at once.
- **Application:** in a dashboard, change one filter and let the chart respond; in an LLM interface, change one word of the prompt and show both answers side by side.
- **Counterpoint:** the demo environments were built for the talk, not shipping products; the polish comes from that. A live tool that responds instantly in rehearsal can lag on conference Wi-Fi.
- **Status:** PARTIAL.

### S05. Google Duplex at I/O (8 May 2018)
- **Author and year:** Google, I/O keynote, 8 May 2018.
- **Sources:**
  - Google Research blog, "Google Duplex: An AI System for Accomplishing Real-World Tasks Over the Phone", 8 May 2018: https://research.google/blog/google-duplex-an-ai-system-for-accomplishing-real-world-tasks-over-the-phone/ (opened). It describes the system, restricts it to narrow domains, mentions self-monitoring with hand-off to human operators, says transparency matters and that the right approach would be explored in the coming months, and presents the audio samples as conversations between a fully automatic system and real businesses.
  - TechCrunch, "What we know about Google's Duplex demo so far", 18 May 2018: https://techcrunch.com/2018/05/18/what-we-know-about-googles-duplex-demo-so-far/ (opened). On stage the CEO said the audio was a real call to a real salon. Google declined to name the businesses, to say whether it had consent to record, or to answer a news outlet's questions on editing. Nobody in the samples says the business's name, which suggests cuts. The author's best guess: not faked, but only the best examples were shown.
  - A later Bloomberg report that the calls were edited to hide the businesses' names appears only in search results (NOT VERIFIED).
- **What it does well:** real audio of the real system, and a blog post that states its limits.
- **Role of motion/zoom/video:** recorded audio played at a live keynote.
- **Principle:** if you edit a recording, even for a good reason, say so; an unexplained edit casts doubt on everything else.
- **Application:** when you anonymize data for a dashboard recording, put a visible note on screen ("names hidden for this recording").
- **Counterpoint:** hiding the businesses' names protected third parties, which is legitimate. The larger debate at the time was about whether the system should identify itself as a machine, which is outside the scope of this catalog.
- **Status:** PARTIAL.

### S06. Tesla Cybertruck, the "armor glass" window (Nov 2019)
- **Author and year:** Tesla, Cybertruck reveal, November 2019. The source opened is dated Monday 25 Nov 2019 and places the event on the previous Thursday night, which is 21 Nov.
- **Source:** The Drive, "Elon Musk Explains Why the Tesla Cybertruck's Armored Windows Broke On Stage": https://www.thedrive.com/news/31192/elon-musk-explains-why-the-tesla-cybertrucks-armored-windows-broke-on-stage (opened). After a sledgehammer strike on the door, a steel ball thrown at the window broke it, and then the rear window as well. Musk's explanation on social media: the sledgehammer impact had cracked the base of the glass, and the ball test should have come first. He also posted a slow-motion rehearsal video, hours before the event, in which the test succeeded. Critics noted this does not explain the rear window. A BBC page was blocked for the reading tool.
- **What it teaches:** the rehearsal succeeded, the show did not: an earlier step changed the state that a later step depended on.
- **Role of motion/zoom/video:** live physical demo; the rehearsal video was used afterwards as evidence.
- **Principle:** rehearse the whole sequence in the same order, starting from a clean state.
- **Application:** in an LLM chat, earlier turns change later answers: start the demo in a fresh session and rehearse the exact sequence. In a dashboard, filters or caches left over from rehearsal can change what appears.
- **Counterpoint:** the explanation comes from the company's CEO and is reported by the press; it is not an engineering report. The original social media posts were not opened.
- **Status:** VERIFIED (press source).

### S07. Google, "Hands-on with Gemini" (Dec 2023) and its disclosure
- **Author and year:** Google, video released with the Gemini announcement, December 2023.
- **Sources:**
  - Google Developers Blog, "How it's Made: Interacting with Gemini through multimodal prompting", 6 Dec 2023: https://developers.googleblog.com/2023/12/how-its-made-gemini-multimodal-prompting.html (opened). It explains the prompts behind the video: mostly still images paired with text prompts, some with worked examples that teach the model a format. In one example the author admits the model will not always get it right. It does not say how the video was edited.
  - Engadget, 8 Dec 2023, reporting a Bloomberg column: https://www.engadget.com/google-admits-that-a-gemini-ai-demo-video-was-staged-055718855.html (opened). The interaction was not in real time and there was no voice interaction; Google used still frames from the footage and text prompts. The shortening of outputs was declared in the video's description. A Gemini co-lead stated that all prompts and outputs were real and that the video was meant to inspire developers.
  - The exact wording of the YouTube description (reduced latency, outputs shortened for brevity) and the claim that the voice was dubbed come from search results only (NOT VERIFIED; YouTube was not opened).
- **What it teaches:** a video that looks like a live conversation was a reconstruction from still frames and typed prompts. The disclosure existed, in the description and in a developer post, but not in the video itself, and coverage centered on that gap.
- **Role of motion/zoom/video:** edited video presented in the form of a live interaction.
- **Principle:** the form has to match the claim. If a clip looks like a real-time interaction, it should be one; if not, say so on screen.
- **Application:** in a clip of an LLM interface, keep the real waiting time or mark each cut on screen ("12 s cut"); type the actual prompt rather than dubbing a spoken one; if outputs were shortened, say so in the clip.
- **Counterpoint:** according to Google the outputs were real; the editing concerned time and input mode. The post explaining how it was made appeared the same day.
- **Status:** PARTIAL.

### S08. OpenAI, GPT-4o live stream (13 May 2024)
- **Author and year:** OpenAI, "Spring Update" live event, 13 May 2024.
- **Sources:** OpenAI's announcement page (https://openai.com/index/hello-gpt-4o/) returned 403 and was NOT opened. Thurrott.com, https://www.thurrott.com/?p=302451 (opened): a live event, with demos of voices and emotions, singing, solving math problems, describing a person's emotions and explaining a code base; "a few glitches" as expected in a live demo; latency figures stated by OpenAI (audio responses in as little as 232 ms, 320 ms on average). Wikipedia, https://en.wikipedia.org/wiki/GPT-4o (opened): Advanced Voice Mode was delayed and reached paying subscribers in September 2024; one of the voices was withdrawn on 20 May 2024 after a controversy over its resemblance to an actress's voice.
- **What it does well:** presenters interacted with the model live, glitches included, which made it credible that the product was real.
- **Role of motion/zoom/video:** live demo, streamed.
- **Principle:** a live demo shows the product exists; it does not show when users will have it. Say what is available and when.
- **Application:** in a work talk, mark on the slide or in the clip what runs today and what is a prototype.
- **Counterpoint:** the voice features shown live reached users about four months later; viewers could mistake the demo for availability. The OpenAI page itself was not read.
- **Status:** PARTIAL.

### S09. Anthropic, computer use (22 Oct 2024)
- **Author and year:** Anthropic, 22 Oct 2024.
- **Sources (both opened):**
  - "Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku": https://www.anthropic.com/news/3-5-models-and-computer-use . Public beta; the capability is called experimental and "at times cumbersome and error-prone"; scrolling, dragging and zooming are still hard for the model; OSWorld (screenshot-only) 14.9% versus 7.8% for the next system; developers are advised to start with low-risk tasks. Demo videos are linked on YouTube (not watched).
  - "Developing a computer use model": https://www.anthropic.com/news/developing-computer-use . How it works (screenshots, counting pixels to move the cursor). While recording the launch demos, the model accidentally stopped a long screen recording and the footage was lost; in another demo it left a coding task to browse photos of Yellowstone. Human performance on the benchmark is about 70–75%. Note: this page gives 7.7% for the next system, the other 7.8%.
- **What it does well:** the demo comes with a plain statement of the success rate and with stories of failures.
- **Role of motion/zoom/video:** recorded videos of the real model operating a computer.
- **Principle:** pair the demo with how often it works and with an example of how it fails; the audience can then calibrate.
- **Application:** for an LLM interface, show one successful run and say how many of your own test runs succeeded (count them before the talk); show one failure if you have one.
- **Counterpoint:** stating limits is also good communication strategy for a company; the videos are still selected. A benchmark number is not your task's number.
- **Status:** VERIFIED.

### S10. *FTC v. Colgate-Palmolive Co.*, 380 U.S. 374 (1965): undisclosed mock-ups
- **Author and year:** United States Supreme Court, argued 10 Dec 1964, decided 5 Apr 1965.
- **Source:** https://www.law.cornell.edu/supremecourt/text/380/374 (opened). A television ad showed a shaving cream softening "sandpaper" that was in fact a sheet of plexiglass with sand applied. The Court held that an undisclosed mock-up, presented so viewers believe they are seeing a real test with their own eyes, is a deceptive practice, separate from the false claim itself. Props as such are not the problem: an ad that does not present the scene as proof is not covered, and simulations can be shown if viewers are not led to think they are watching a real test. Two justices dissented: a mock-up that accurately shows the product is not deceptive in itself.
- **What it teaches:** the line is not between real and simulated; it is whether the audience is told it is seeing proof.
- **Role of motion/zoom/video:** none; it is a rule about demonstrations.
- **Principle:** if you present something as a demonstration, it must be what it looks like; a mock-up is fine when labeled as one.
- **Application:** a design mock-up, or an interface wired to canned answers, is fine in a talk if it says "mock-up" on screen; it is not fine if presented as the running system.
- **Counterpoint:** this is United States advertising law, not a rule for scientific or internal talks; the transfer is an analogy.
- **Status:** VERIFIED.

### S11. Apple, App Store app preview rules
- **Author and year:** Apple, "App Previews" page for developers (current version, checked October 2026).
- **Source:** https://developer.apple.com/app-store/app-previews/ (opened). Up to three previews per language, each up to 30 seconds; previews must show only content captured from the app itself on the device, without filming people or hands using it; graphic elements such as touch indicators may be added to show interaction; capture the native interface resolution rather than zooming in on the view; transitions must not imply features the app lacks; previews play muted by default, so on-screen text must be legible and stay long enough to read; features that require a purchase, a subscription or a login must be disclosed.
- **What it does well:** turns "show the real product" into concrete production rules.
- **Role of motion/zoom/video:** recorded screen capture; annotations allowed; zoom discouraged for this format.
- **Principle:** record the real interface, annotate the interaction, do not imply what it cannot do.
- **Application:** for a web app: capture the real browser window, add a click indicator, avoid flashy transitions, and keep text on screen long enough to read.
- **Counterpoint:** these are store rules for short, muted, autoplaying clips on small screens. The advice against zooming probably protects fidelity to the device, not learning; Apple cites no evidence.
- **Status:** VERIFIED.

---

## Part B. The evidence on showing software

### S12. Hans van der Meij and colleagues: guidelines for software video tutorials (2013, 2014, 2022)
- **Sources:**
  - van der Meij and van der Meij (2013), "Eight guidelines for the design of instructional videos for software training", *Technical Communication* 60(3), 205–228. No DOI. Metadata and abstract on OpenAlex (record W2096464448) and on the University of Twente repository page (opened on 30 Oct 2026). The repository's PDF sat behind a human-verification page and was NOT opened.
  - van der Meij and van der Meij (2014), "A comparison of paper-based and video tutorials for software learning", *Computers & Education* 78, 150–159, DOI 10.1016/j.compedu.2014.06.003 (Crossref; abstract on the University of Twente page, opened).
  - van der Meij and Höpfner (2022), "Eleven Guidelines for the Design of Instructional Videos for Software Training", *Technical Communication* 69(3), 5–23, DOI 10.55177/tc786532 (Crossref; abstract on OpenAlex). The full text was not reachable (publisher 403, journal site under maintenance).
- **Findings (abstracts, paraphrased):** the 2013 guidelines draw on research about how people process visual and verbal information; three studies with videos on a word processor's formatting options found better motivation, higher skill right after training, and better retention a week later than with a paper tutorial. The authors limit them to tutorials, not reference videos. In the 2014 study (111 children aged about 12, four conditions), all conditions with video beat paper during training; at the post-test, only full video and video preview + paper procedure beat paper. In 2022 the eight guidelines were restructured and extended to eleven.
- **The guidelines themselves:** NOT VERIFIED here, since no full text was read. A search snippet says the first 2022 guideline is to keep videos short to prevent early dropout.
- **Role of motion/zoom/video:** narrated screen recordings of software tasks.
- **Principle:** a well-designed narrated screen recording can teach software better than paper instructions.
- **Application:** for a lab talk that also hands out the tool, a short narrated recording per task is a reasonable companion to the written guide.
- **Counterpoint:** one research group, schoolchildren and students, one kind of software; these are tutorials for learners, not demos in front of an audience.
- **Status:** PARTIAL.

### S13. Demonstration-based training: what goes around the demo
- **Sources (Crossref metadata; abstracts on OpenAlex or a university repository):**
  - Rosen, Salas, Pavlas, Jensen, Fu and Lampton (2010), "Demonstration-Based Training: A Review of Instructional Features", *Human Factors* 52(5), 596–609, DOI 10.1177/0018720810381071.
  - van der Meij and van der Meij (2016), "Demonstration-based training (DBT) in the design of a video tutorial for software training", *Instructional Science* 44(6), 527–542, DOI 10.1007/s11251-016-9394-9.
  - van der Meij, van der Meij, Voerman and Duipmans (2018, online Dec 2017), "Supporting motivation, task performance and retention in video tutorials for software training", *Educational Technology Research and Development* 66(3), 597–614, DOI 10.1007/s11423-017-9560-z.
  - Brar and van der Meij (2017), "Complex software training: Harnessing and optimizing video instruction", *Computers in Human Behavior* 70, 475–485, DOI 10.1016/j.chb.2017.01.014 (abstract read on the University of Twente page).
- **Findings (paraphrased):** Rosen et al. review the features added to a demonstration and group them by whether they are active or passive and by when they occur: passive guidance, preparatory activities (before), concurrent activities (during), retrospective activities (after) and prospective activities (planning future use); they conclude more research is needed on when each works. In 2016, with 55 schoolchildren, a demonstration followed by a short review video beat the demonstration alone. In the 2017–2018 study (65 children), all tutorials improved self-efficacy and procedural knowledge, but adding a review or a second demonstration made no difference. In Brar and van der Meij (statistics course), there was no main effect of adding reviews; how much of the video students covered predicted their knowledge.
- **Role of motion/zoom/video:** the demonstration is a video of the task; the "instructional features" are what comes before and after.
- **Principle:** a demo is more than the recording: say what the task is before it, and sum up after it. The evidence for recaps is mixed (one positive experiment, two null).
- **Application:** before each clip, one sentence: "now I will filter the dashboard to one instrument and export the table"; after it, one sentence with the result.
- **Counterpoint:** students learning software, not an audience watching a talk; and the effect of recaps did not replicate consistently.
- **Status:** VERIFIED (abstracts; full texts not read).

### S14. Signaling text-picture relations: Richter, Scheiter and Eitel (2016), and a software-video study (2023)
- **Sources:**
  - Richter, Scheiter and Eitel (2016), "Signaling text-picture relations in multimedia learning: A comprehensive meta-analysis", *Educational Research Review* 17, 19–36, DOI 10.1016/j.edurev.2015.12.003 (Crossref). The article's page returned 403; the abstract was read on the PsychArchives record of the meta-analysis data: https://psycharchives.org/handle/20.500.12034/2019 (opened).
  - Follow-up by the same authors (2018), "Signaling Text-Picture Relations in Multimedia Learning: The Influence of Prior Knowledge", *Journal of Educational Psychology* (ERIC record EJ1178409, abstract opened).
  - Ragazou and Karasavvidis (2023), "Effects of Signaling and Practice Types in Video-Based Software Training", *Education Sciences* 13(6), 602, DOI 10.3390/educsci13060602 (Crossref; abstract on OpenAlex). The publisher's page returned 403.
- **Findings (paraphrased):** Richter et al. pooled 27 studies (45 comparisons, N = 2,464): signals that link text and picture (color coding, explicit references) improved comprehension and transfer, r = 0.17 (95% CI 0.11 to 0.22), with the benefit concentrated in learners with low prior knowledge. In the 2018 field study, the same signals helped low-prior-knowledge students and hurt high-prior-knowledge ones (the expertise reversal effect). Ragazou and Karasavvidis (114 nursing students, software video tutorials, 2 × 2 design) found that signaling contributed to task performance and self-efficacy. What kind of signals they used is NOT VERIFIED (full text not opened).
- **Role of motion/zoom/video:** signals that tie the narration to the right spot on screen.
- **Principle:** link what you say to what is on screen; this helps most those who are new to the material.
- **Application:** a lab audience knows the science but not your interface. Signal the interface (where to look, what was clicked), and do not over-signal the domain concepts they already know.
- **Counterpoint:** a small-to-medium effect, mostly with static text and pictures, not with screen recordings; only one study of software video, with no full text read.
- **Status:** VERIFIED (abstracts).

### S15. Signaling meta-analysis: Schneider, Beege, Nebel and Rey (2018), plus Jamet (2014)
- **Sources:**
  - Schneider, Beege, Nebel and Rey (2018), "A meta-analysis of how signaling affects learning with media", *Educational Research Review* 23, 1–24, DOI 10.1016/j.edurev.2017.11.001 (Crossref). The article returned 403. Figures taken from the Clearing House Unterricht short review (Technical University of Munich), a German-language summary, PDF opened: https://www.clearinghouse.edu.tum.de/wp-content/uploads/2018/12/CHU_KR-22_-Schneider_2017_Lernmaterial_Hervorhebungen.pdf
  - Jamet (2014), "An eye-tracking study of cueing effects in multimedia learning", *Computers in Human Behavior* 32, 47–53, DOI 10.1016/j.chb.2013.11.013 (Crossref). The HAL copy showed an access-denied page; the abstract was NOT read. Search snippets describe an eye-tracking study with diagrams and spoken explanations, with and without visual cues.
- **Findings (according to the summary, paraphrased):** 103 studies, 12,201 participants. Signals improved retention (g = 0.53) and transfer (g = 0.33), reduced cognitive load (g = 0.25), slightly raised motivation (g = 0.13), lengthened learning time (g = 0.30), and drew longer looks at the signaled areas (g = 0.39). For transfer with pictures, the type of signal mattered: color highlighting helped; signposts, labels, spotlights and graphic organizers did not; flashing harmed transfer. Signals worked in every subject except mathematics.
- **Role of motion/zoom/video:** the closest evidence to "highlight where the action happens". A spotlight (a lit circle on part of the picture) is the nearest thing to a zoom-in effect, and it did not help transfer; no study on zooming in a screen recording was found.
- **Principle:** highlight with color the element you are talking about, in sync with the narration; do not make it blink.
- **Application:** in a recorded clip, a colored box or tint on the button, cell or chat message at the moment the narration names it; no flashing or pulsing effects.
- **Counterpoint:** the figures come from a secondary summary, not the article; each moderator rests on few studies; most studies use static materials, not screen recordings.
- **Status:** PARTIAL.

### S16. Segmenting: Rey et al. (2019)
- **Source:** Rey, Beege, Nebel, Wirzberger, Schmitt and Schneider (2019), "A Meta-analysis of the Segmenting Effect", *Educational Psychology Review* 31(2), 389–419, DOI 10.1007/s10648-018-9456-4 (Crossref). Abstract read on ERIC (record EJ1217373). The publisher's page redirected to a login.
- **Findings (abstract, paraphrased):** 56 investigations, 88 comparisons. Learners do better with instructions split into meaningful segments than with one continuous unit: small-to-medium effects on retention and transfer, lower cognitive load, longer learning time. The effects held also when the system, not the learner, sets the pace. Learners with high prior knowledge benefited more in retention.
- **Role of motion/zoom/video:** directly about dynamic multimedia: cutting it into pieces with pauses.
- **Principle:** split a demo into meaningful segments with a pause between them.
- **Application:** one task per clip; in a live talk, stop after each step and say what just happened before going on.
- **Counterpoint:** "meaningful" segments require knowing where the natural breaks are; arbitrary cuts are not what was tested.
- **Status:** VERIFIED (abstract).

### S17. Captions and narration: Adesope and Nesbit (2012), and Fyfield, Henderson and Phillips (2022)
- **Sources:**
  - Adesope and Nesbit (2012), "Verbal redundancy in multimedia learning environments: A meta-analysis", *Journal of Educational Psychology* 104(1), 250–263, DOI 10.1037/a0026147 (Crossref; abstract on OpenAlex).
  - Fyfield, Henderson and Phillips (2022), "Improving instructional video design: A systematic review", *Australasian Journal of Educational Technology*, pp. 150–178, DOI 10.14742/ajet.7296 (Crossref; abstract on OpenAlex).
- **Findings (abstracts, paraphrased):** Adesope and Nesbit (57 studies): spoken + written text did no worse than written only, and beat spoken only; the advantage appeared for learners with low prior knowledge, for system-paced materials and for materials without pictures. Showing **key terms** taken from the narration worked better than the full verbatim text and explained much of the advantage. Fyfield et al. (113 papers, 28 principles): for instructional video, coherence, segmenting and learner control are supported, but redundancy and modality are not; shorter, segmented, coherent videos tied to an activity are more likely to help.
- **Role of motion/zoom/video:** text on screen versus voice in a dynamic medium.
- **Principle:** the common rule "never show the same words you are saying" is not supported for video. What the evidence favors is key terms on screen, not the full script.
- **Application:** narrate; offer human-checked captions as a track the viewer can turn on; on screen, show only short labels (the name of the filter, the number to look at).
- **Counterpoint:** the redundancy advantage disappeared when pictures were present, which is the case in screen recordings; so captions are justified mainly by accessibility and muted viewing (S20), not by learning gains.
- **Status:** VERIFIED (abstracts).

### S18. Mayer, Fiorella and Stull (2020), "Five ways to increase the effectiveness of instructional video"
- **Source:** *Educational Technology Research and Development* 68(3), 837–852, DOI 10.1007/s11423-020-09749-6 (Crossref). Abstract read on ERIC (record EJ1256250).
- **Findings (abstract, paraphrased):** people learn better when the on-screen instructor draws graphics while explaining (dynamic drawing), shifts gaze between audience and board (gaze guidance), when the lesson prompts learners to summarize or explain (generative activity), when a demonstration is filmed from a first-person perspective (perspective), and when subtitles are added to narration in the learner's second language (subtitles). Adding interesting but extraneous video does not help (seductive details).
- **Role of motion/zoom/video:** the most direct principles for video demos.
- **Principle:** film from the user's point of view; cut decorative footage; prompt the audience to think.
- **Application:** a screen recording is already first person: don't film a laptop over someone's shoulder (Apple's rule in S11 agrees). If you narrate in English to a Spanish-speaking audience, or the reverse, add subtitles. No stock footage. Before showing the result, ask the room what they expect.
- **Counterpoint:** a review largely of the authors' own experiments; the abstract does not say which tasks the perspective studies used, so applying it to screen recordings is an inference.
- **Status:** VERIFIED (abstract).

### S19. Guo, Kim and Rubin (2014), "How video production affects student engagement"
- **Source:** *Proceedings of the first ACM Conference on Learning @ Scale*, 41–50, DOI 10.1145/2556325.2566239 (Crossref). Full PDF read from the author's site: https://pg.ucsd.edu/publications/edX-MOOC-video-production-and-engagement_LAS-2014.pdf
- **Findings (paraphrased):** 6.9 million viewing sessions in four edX courses. Length was by far the strongest signal: median viewing time was at most about 6 minutes whatever the video's length, and viewers often stopped before halfway through videos longer than 9 minutes. Tutorials drawn by hand on a tablet held attention 1.5 to 2 times longer than slides or code screencasts; videos that alternated the instructor's face with slides were more engaging; faster, more enthusiastic speakers held attention better. Recommendations: plan in advance and cut videos into pieces under 6 minutes; if you show slides or code, add emphasis by drawing over them; for tutorials, length matters less, but support re-watching and skimming.
- **Role of motion/zoom/video:** live annotation over the screen (drawing) is what held attention, not the screen alone.
- **Principle:** short clips, planned beforehand, with marks drawn over the screen where the action is.
- **Application:** keep each demo clip well under 6 minutes; annotate over the recording (circle, arrow) as you explain.
- **Counterpoint:** it measures engagement (time watched, attempts at exercises), not learning; observational data, no random assignment; MOOC lectures, not product demos.
- **Status:** VERIFIED.

### S20. Practitioner guidance: Nielsen Norman Group (2020) and GitHub Docs
- **Sources:**
  - Harley, "Videos as Instructional Content: User Behaviors and UX Guidelines", Nielsen Norman Group, 19 Jan 2020: https://www.nngroup.com/articles/instructional-video-guidelines/ (opened). Qualitative study with 8 participants plus earlier NN/g research.
  - GitHub Docs, "Using videos in GitHub Docs", last version before its removal: https://github.com/github/docs/blob/d6dcd2305906ed44ba90f64e4a69aa98850a8754/content/contributing/writing-for-github-docs/using-videos-in-github-docs.md (read through the GitHub API; the file was removed on 7 Apr 2026, in a change that removed the site's video embedding).
- **What they say (paraphrased):**
  - NN/g: video should complement text, not replace it; for multistep processes, one short video per step rather than one long one; show the duration before playing; captions so it can be followed without sound; chapters in long videos; place the video where it is relevant.
  - GitHub Docs: a checklist that rejects a video longer than 5 minutes; product overviews under one minute; feature videos as short as possible and at most 5 minutes; tutorials at most 5 minutes each and 15 in total; open with the agenda (steps and goal); use video when showing movement or a change of state, but screenshots or text may be enough; don't use video for features that change quickly, or to show a task without explaining it; no flashing; human-checked captions; any text must stay on screen longer than it takes to read it aloud twice; a descriptive transcript; no autoplay; a maintenance date for each video.
- **Role of motion/zoom/video:** practical production rules.
- **Principle:** short, one task per video, with text alongside and accessible; video only when movement or a change of state is the content.
- **Application:** for each recorded clip, a written list of the same steps next to it (in the repository or the handout), captions, and a date to re-record it when the interface changes.
- **Counterpoint:** practitioner guidance; NN/g's study is qualitative and small; GitHub withdrew its guide in 2026 together with its video infrastructure, a reminder of the maintenance cost.
- **Status:** VERIFIED.

---

## Synthesis: how to demo software

Ten principles for a lab or work talk that shows a dashboard or an LLM interface, live or recorded. Each one points to the entries that support it and states how strong the evidence is.

1. **Show the real product, or label the mock-up where the audience is looking.** A simulation is not the problem; presenting it as proof is. A disclosure hidden in a description below the video was not enough to avoid a controversy. Entries: S10 (legal rule), S11 (platform rule), S07 and S05 (cases), S01. *Evidence: craft (law, platform rules, cases). No experiment.*
2. **Script the task and rehearse the exact sequence on the exact setup, from a clean state.** Entries: S02 (problems in rehearsal were the projector), S03 (untested equipment), S06 (rehearsal succeeded, the sequence changed the state), S04. *Evidence: craft (cases).*
3. **Keep a recorded backup, and test the recording too.** Entries: S03, S06, S08 (glitches live), S09 (the recording itself was lost), F03. *Evidence: craft (cases). No source explicitly prescribes a backup clip; it is an inference from the failures.*
4. **One task per clip, in short, meaningful segments.** Entries: S16 (meta-analysis), S17 (systematic review: shorter, segmented videos), S19 (observational: viewing drops after about 6 minutes), S20 (≤ 5 min per video, one per step), S12. *Evidence: meta-analysis + observational + craft.*
5. **Say the goal before the clip and the result after it.** Entries: S13 (preparatory and retrospective features; recaps: one positive experiment, two null), S20 (open with the agenda). *Evidence: mixed experiments + craft.*
6. **Highlight where the action happens, with color, in sync with the narration, and never blinking.** Entries: S14 and S15 (meta-analyses: signals help; color helped transfer; spotlights did not; flashing harmed), S11 (touch indicators), S19 (drawing over the screen held attention). *Evidence: meta-analysis. No study on zooming in a screen recording was found.*
7. **Narrate; captions as a separate track; on screen, only key terms.** The rule "don't show the words you are saying" is not supported for video. Entries: S17 (meta-analysis and systematic review), S18 (subtitles help in a second language), S20 (accessibility, muted viewing). *Evidence: meta-analysis + experiment + craft.*
8. **Signal your interface, not the domain the audience already knows.** Signals help novices most and can hurt experts; segmenting, by contrast, helped those with more prior knowledge. Entries: S14 (expertise reversal), S16. *Evidence: meta-analysis + one field study.*
9. **Cut what does not belong: decorative footage, flashy transitions, transitions that suggest features.** Entries: S18 (seductive details), S11 (transitions), S20 (no flashing), F25 (coherence). *Evidence: experiment + craft.*
10. **State limits, success rates and what is available today.** Entries: S09 (success rate and failures), S05 (narrow domains), S07 (the model does not always get it right), S08 (shown live, shipped months later). *Evidence: craft (cases).*

### Rules for the kit's recorded demo videos (from a real web app)

Kept, because the sources support them (evidence level in brackets):

1. **Record the real app in a real browser.** If anything is mocked, sped up or cut, say so on screen: "mock-up", "sped up 2×", "12 s cut". [craft: S10, S11, S07]
2. **Write the script before recording:** task, exact inputs, expected result. Reset the state first: fresh session or conversation, cleared filters, a fixed dataset. [craft: S02, S06; observational: S19, pre-production]
3. **One task per clip.** Overview clips under 1 minute; task clips at most 5 minutes and, as a target, well under 6. [meta-analysis: S16; observational: S19; craft: S20]
4. **Open with the goal in one sentence and close with the result.** [craft: S20; mixed experiments: S13]
5. **Highlight the element being acted on** with a colored box or tint at the moment the narration names it; no blinking or pulsing. [meta-analysis: S14, S15]
6. **Narration + human-checked captions as a separate track;** on screen, only key terms, kept long enough to read twice aloud. [meta-analysis: S17; experiment: S18; craft: S20]
7. **For live talks, have the recorded clip ready** and test the equipment, network and accounts beforehand. [craft: S03, S06, S09]
8. **For LLM demos, keep the real waiting time or mark the cut,** and say how many of your test runs worked. [craft: S07, S09]
9. **No decorative footage, stock video or transitions** that suggest what the app does not do. [experiment: S18; craft: S11]
10. **Publish the written steps next to each clip,** and set a date to re-record when the interface changes. [craft: S20]

Rules from the brief that were **adjusted or not kept**:

- **"Zoom where the action happens."** No study on zooming in screen recordings was found; Apple advises capturing the native resolution rather than zooming (S11), and spotlight cues did not help transfer (S15). Use zoom only to make small text legible, as one slow step, and prefer a color highlight. [no direct evidence; craft]
- **"Move the cursor visibly and slowly."** No study on cursor speed or size was found. It agrees with the apprehension principle (F29: change has to be slow enough to perceive) and with filming from the user's perspective (S18), but it remains a craft rule: enlarge the pointer, show a click indicator, and do not move the cursor while you talk about something else. [craft]
- **"Captions or narration, but not both reading the same text."** Not supported for video (S17): replaced by rule 6.

## Limits of this catalog

- Several primary sources could not be read: OpenAI's GPT-4o page (403), the YouTube description of the Gemini video, the full texts of the van der Meij guidelines (2013 and 2022), the Schneider et al. and Richter et al. articles (only abstracts or a summary), the full text of the 2023 software-signaling study, and Jamet (2014), whose abstract was not read.
- The videos of the demos (S01, S02, S04, S05, S07, S08, S09) were not watched; what is said about them comes from the sources listed.
- Checked and not included: the launch post of GitHub Copilot (29 Jun 2021, https://github.blog/news-insights/product-news/introducing-github-copilot-ai-pair-programmer/, opened) confirms a technical preview with sign-up, but says nothing about how the product was demonstrated and lists no limitations, so it adds no lesson on demos. Stripe's and Linear's product videos were not included because no primary source describing their method was found. A widely reported staged truck video from another company was not included because the regulator's press releases that were opened do not mention it.
- Most of the research is about learning from tutorials (students and schoolchildren), not about an expert audience watching a talk; applying it to demos is an inference, flagged where it matters.
