---
title: How to find a planet you cannot see
author: presentation-kit · expressive example
date: 2026
profile: night
lang: en
transition: fade
audience: A data or astronomy lab that wants to understand the two signals used to discover exoplanets.
message: The transit shadow gives the planet's size; the star's wobble gives its mass. An Earth leaves signals more than a hundred times smaller than a Jupiter.
---

<!-- Expressive-register example: "night" profile, full-bleed figures and five animated scenes
     (animations.js). Every number is computed in animations.js from public constants. -->

## How to find a planet you cannot see
@type cover
@class full
@anim cover
@subtitle Two tiny signals: the shadow and the wobble
> The background spectrum sways: this is, greatly exaggerated, a star moving towards and away from us.
@why The cover already teaches: the swaying spectrum is one of the two signals of the talk, exaggerated. It is not decoration (F11: every movement with a purpose).

## When a planet passes in front, its star dims a little
@kicker The shadow
@class full
@anim transit
@steps 1
@source Depth = (R_planet / R_star)², with IAU (2015) nominal radii: Jupiter in front of the Sun, 1.06 %; Earth, 84 ppm. No limb darkening; Earth's size not to scale in the curve.
> First a Jupiter-sized planet: the star loses 1 % of its light. Next, an Earth-sized one: 84 parts per million, and the vertical scale changes so it can be seen.
@why The light curve is drawn while the planet crosses: cause and effect together (temporal contiguity, F25). The change of scale is stated on the axis, not hidden (G10).

## The star wobbles too: Earth moves the Sun by only 9 cm/s
@kicker The wobble
@class full
@anim orbit
@steps 2
@source Kepler's third law, circular orbit: Earth induces 8.9 cm/s on the Sun; Jupiter, 12.5 m/s. Motion and shift exaggerated so they can be seen.
> Step 1: the star also orbits the center of mass. Step 2: seen edge-on, it approaches and recedes. Step 3: the spectral lines shift to the blue and the red at the same pace.
@why The measurement comes out of the motion in plain sight (F29: congruence). One new idea per step.

## A single line is noise; adding thousands, the error drops as 1/√N
@kicker The trick
@class full
@anim lines
@steps 3
@source Simulation with identical Gaussian lines and photon noise; these are not real lines. The velocity error drops as 1/√N: with 2000 lines, about 45 times smaller.
> This is how centimeters per second are measured: no single line is enough, but thousands together are.
@why Accumulating is a process: the animation shows it as it happens, and the 1/√N rule appears after it has been seen (example before rule, F11 and F12).

## Together, the two signals tell what the planet is made of
@kicker What is measured
@steps
- **The shadow gives the size:** the depth is (R_planet / R_star)².
- **The wobble gives the mass** (the minimum: it depends on the orbit's inclination).
- **Size and mass give the density:** rock like Earth or gas like Jupiter.
@source Standard relations of the transit and radial-velocity methods.
> After four slides in motion, a still one: this is where it all comes together.
@why A still slide after the animated run marks the change of pace (principles, "Two registers"). The three ideas are revealed one at a time.

## Finding another Earth means signals more than a hundred times smaller than a Jupiter's
@kicker The scale
@class full
@anim scale
@steps 1
@source Own computation: velocity (Kepler) 12.5 m/s vs 8.9 cm/s, ÷139; depth (IAU 2015) 1.06 % vs 84 ppm, ÷126. Logarithmic scales.
> First Jupiter on both scales; next, Earth slides to its place and the ratio for each signal appears.
@why Sliding along a logarithmic scale is a change of scale: the distance is felt by travelling it (F23). Position on a common scale (G20).

## This talk is a text script, five scenes and a profile
@kicker How it was made
- **script.md** (and script.es.md): one conclusion-title per slide, with its source and notes.
- **animations.js:** five scenes built with `K.scene`, one state per step.
- **night profile:** colors and fonts; `kit.py build` produces the HTML and the .pptx.
@source presentation-kit: engine/kit.py, engine/anim.js, profiles/night.
> Open script.md next to the deck to show that the content is just text.
@why For whoever receives the kit: it shows that the expressive register needs no design tools, just a script and short scenes.

## Sources
@appendix
- Nominal radii: IAU 2015 Resolution B3 (Sun 695,700 km; Earth equatorial 6,378.1 km; Jupiter equatorial 71,492 km).
- Masses: Sun 1.989 × 10³⁰ kg; Earth 5.972 × 10²⁴ kg; Jupiter 1.898 × 10²⁷ kg. G = 6.674 × 10⁻¹¹ m³ kg⁻¹ s⁻².
- Induced velocity: Kepler's third law for a circular orbit.
- Everything is computed in animations.js; the animations exaggerate motion so it can be seen.
@why The appendix states which constants were used and where each computation lives.
