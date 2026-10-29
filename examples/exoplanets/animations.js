/* =====================================================================
   Animations for the Exoplanets example.
   Built with the engine's library (engine/anim.js, window.K): each scene
   is a list of states (one per step) and a draw function. Labels follow
   the page language through K.t(en, es) and numbers through K.num().

   Physics, computed in the browser from public constants:
   - Transit depth = (R_planet / R_star)^2, IAU (2015) nominal radii:
     Sun 695,700 km, Earth 6,378.1 km, Jupiter 71,492 km → Earth 84 ppm, Jupiter 1.06 %.
   - Velocity induced on the star (Kepler's third law, circular orbit):
     K = (2πG/P)^(1/3) · m_p / (M_* + m_p)^(2/3) → Earth 8.9 cm/s, Jupiter 12.5 m/s.
   Canvas: viewBox 1920×1080, the whole slide; the title takes the top down
   to y ≈ 300 and the source line starts at y ≈ 960.
   ===================================================================== */
(function () {
  "use strict";
  const { svg, text, attr, lerp, num, lightColor } = K;
  const t = K.t;
  const V = (v) => `var(--${v})`;
  const A = (window.animations = window.animations || {});

  // ---------------------------------------------------------------- physics
  const R_SUN = 695700, R_EARTH = 6378.1, R_JUP = 71492;
  const G = 6.674e-11, M_SUN = 1.989e30, M_EARTH = 5.972e24, M_JUP = 1.898e27, YEAR = 365.25 * 86400;
  const kepler = (m, P) => Math.pow(2 * Math.PI * G / P, 1 / 3) * m / Math.pow(M_SUN + m, 2 / 3);
  const DEPTH = { jup: Math.pow(R_JUP / R_SUN, 2), earth: Math.pow(R_EARTH / R_SUN, 2) };
  const KV = { jup: kepler(M_JUP, 11.86 * YEAR), earth: kepler(M_EARTH, YEAR) };

  // Solar absorption lines (Fraunhofer, nm) and illustrative weak lines from a fixed seed.
  const FRAUNHOFER = [393.4, 396.8, 410.2, 430.8, 434.0, 438.4, 486.1, 516.7, 517.3, 518.4, 527.0, 589.0, 589.6, 656.3, 759.4];
  let seed = 11;
  const random = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const WEAK = Array.from({ length: 140 }, () => [380 + 408 * random(), 0.15 + 0.35 * random()]);
  const gauss = (() => { const g = []; for (let i = 0; i < 4000; i++) { const u = random() || 1e-9, v = random();
    g.push(Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v)); } return g; })();

  function mountSpectrum(parent, x, y, w, h, id) {
    const g = svg("g", {}, parent);
    const root = parent.ownerSVGElement || parent;
    K.spectrumGradient(root, id);
    svg("rect", { x, y, width: w, height: h, rx: 4, fill: `url(#${id})` }, g);
    const lines = svg("g", {}, g);
    const nm2x = (nm) => x + (nm - 380) / 408 * w;
    const els = [];
    for (const [nm, depth] of WEAK) els.push([svg("rect", { y, height: h, width: 2, fill: "#05080f", opacity: depth }, lines), nm]);
    for (const nm of FRAUNHOFER) els.push([svg("rect", { y, height: h, width: 4, fill: "#05080f", opacity: 0.92 }, lines), nm]);
    const clip = svg("clipPath", { id: id + "-c" }, root.querySelector("defs"));
    svg("rect", { x, y, width: w, height: h, rx: 4 }, clip);
    lines.setAttribute("clip-path", `url(#${id}-c)`);
    return { shift(dx) { for (const [e, nm] of els) e.setAttribute("x", nm2x(nm) + dx); } };
  }
  const label = (parent, x, y, txt, size = 24, color = "ink-soft", anchor = "start") =>
    text(parent, x, y, txt, { "text-anchor": anchor, style: `fill:${V(color)};font-size:${size}px` });

  // ================================================================ 1. cover
  A.cover = K.scene({
    states: [{}], loop: true,
    mount(s) {
      const g = { spectrum: mountSpectrum(s, 0, 742, 1920, 150, "spectrum-cover") };
      label(s, 120, 930, "380 nm", 20); label(s, 1800, 930, "788 nm", 20, "ink-soft", "end");
      return g;
    },
    draw(g, st, n, time) { g.spectrum.shift(9 * Math.sin(2 * Math.PI * time / 7)); },
  });

  // ================================================================ 2. transit
  A.transit = K.scene({
    states: [{ rp: Math.sqrt(DEPTH.jup), depth: DEPTH.jup, jupiter: 1 }, { rp: Math.sqrt(DEPTH.earth), depth: DEPTH.earth, jupiter: 0 }],
    duration: 1600, loop: true, tFinal: 4,
    mount(s) {
      const g = { S: { x: 480, y: 610, r: 230 } };
      const defs = svg("defs", {}, s);
      const rg = svg("radialGradient", { id: "disc" }, defs);   // darker towards the limb (illustrative)
      svg("stop", { offset: "0%", "stop-color": "#fff4d8" }, rg);
      svg("stop", { offset: "70%", "stop-color": "#ffc861" }, rg);
      svg("stop", { offset: "100%", "stop-color": "#d9822b" }, rg);
      svg("circle", { cx: g.S.x, cy: g.S.y, r: g.S.r, fill: "url(#disc)" }, s);
      g.planet = svg("circle", { style: "fill:#0a1020" }, s);
      g.ring = svg("circle", { r: 18, style: `fill:none;stroke:${V("accent-2")};stroke-width:3` }, s);
      g.name = label(s, g.S.x, g.S.y + g.S.r + 60, "", 28, "ink", "middle");
      g.ax = { X0: 940, X1: 1800, Y0: 470, H: 300 };
      const { X0, X1, Y0, H } = g.ax;
      svg("line", { x1: X0, x2: X1, y1: Y0, y2: Y0, style: `stroke:${V("line")};stroke-width:2;stroke-dasharray:6 8` }, s);
      svg("line", { x1: X0, x2: X1, y1: Y0 + H, y2: Y0 + H, style: `stroke:${V("line")};stroke-width:2;stroke-dasharray:6 8` }, s);
      label(s, X0, Y0 - 50, t("brightness of the star", "brillo de la estrella"), 24);
      label(s, X0 - 16, Y0 + 8, "100 %", 22, "ink-soft", "end");
      g.bottom = label(s, X0 - 16, Y0 + H + 8, "", 22, "accent", "end");
      label(s, X1, Y0 + H + 60, t("time →", "tiempo →"), 22, "ink-soft", "end");
      g.trace = svg("path", { fill: "none", style: `stroke:${V("accent")};stroke-width:4` }, s);
      g.dot = svg("circle", { r: 10, style: `fill:${V("accent")}` }, s);
      g.headline = label(s, X1, Y0 - 50, "", 30, "accent", "end");
      return g;
    },
    draw(g, st, n, time) {
      const P = 6, frac = Math.min(0.999, (time % P) / P), S = g.S, { X0, X1, Y0, H } = g.ax;
      const rpx = Math.max(2.2, st.rp * S.r);
      const posX = (f) => S.x - 1.5 * S.r + 3 * S.r * f;           // the planet crosses from left to right
      const blocked = (f) => {                                     // fraction covered (linear ingress, no limb darkening)
        const d = Math.abs(posX(f) - S.x), r = S.r, p = st.rp * r;
        if (d >= r + p) return 0;
        if (d <= r - p) return st.depth;
        return st.depth * (r + p - d) / (2 * p);
      };
      attr(g.planet, { cx: posX(frac), cy: S.y + 30, r: rpx });
      attr(g.ring, { cx: posX(frac), cy: S.y + 30 });
      g.ring.style.opacity = st.jupiter < 0.5 ? 1 : 0;
      const scale = H / st.depth;                                  // the current planet's depth spans the height H
      let d = "";
      for (let k = 0; k <= 160; k++) { const f = k / 160 * frac;
        d += (k ? "L" : "M") + (X0 + (X1 - X0) * f).toFixed(1) + " " + (Y0 + blocked(f) * scale).toFixed(1); }
      g.trace.setAttribute("d", d);
      attr(g.dot, { cx: X0 + (X1 - X0) * frac, cy: Y0 + blocked(frac) * scale });
      const jup = st.jupiter > 0.5;
      g.name.textContent = jup ? t("a Jupiter-sized planet", "un planeta como Júpiter") : t("an Earth-sized planet (circled)", "un planeta como la Tierra (marcado)");
      g.bottom.textContent = jup ? `−${num(DEPTH.jup * 100, 2)} %` : `−${Math.round(DEPTH.earth * 1e6)} ppm`;
      g.headline.textContent = jup ? t(`dims by ${num(DEPTH.jup * 100, 2)} %`, `se apaga ${num(DEPTH.jup * 100, 2)} %`)
        : t(`dims by ${Math.round(DEPTH.earth * 1e6)} parts per million`, `se apaga ${Math.round(DEPTH.earth * 1e6)} partes por millón`);
    },
  });

  // ================================================================ 3. orbit
  A.orbit = K.scene({
    states: [{ curve: 0, spectrum: 0 }, { curve: 1, spectrum: 0 }, { curve: 1, spectrum: 1 }],
    duration: 900, loop: true, tFinal: 8.95,
    mount(s) {
      const g = {}, C = { x: 470, y: 640 };
      g.C = C;
      svg("circle", { cx: C.x, cy: C.y, r: 250, fill: "none", style: `stroke:${V("line")};stroke-width:2;stroke-dasharray:4 8` }, s);
      svg("circle", { cx: C.x, cy: C.y, r: 5, style: `fill:${V("ink-soft")}` }, s);
      label(s, C.x + 12, C.y - 10, t("center of mass", "centro de masa"), 22);
      const defs = svg("defs", {}, s);
      const rg = svg("radialGradient", { id: "glow" }, defs);
      svg("stop", { offset: "0%", "stop-color": "#ffe1a1" }, rg);
      svg("stop", { offset: "45%", "stop-color": "#f5a623" }, rg);
      svg("stop", { offset: "100%", "stop-color": "#f5a623", "stop-opacity": 0 }, rg);
      g.star = svg("circle", { r: 70, fill: "url(#glow)" }, s);
      g.planet = svg("circle", { r: 13, style: `fill:${V("accent-2")}` }, s);
      label(s, C.x, 930, t("↓ towards us", "↓ hacia nosotros"), 24, "ink-soft", "middle");
      g.curveG = svg("g", {}, s);
      const X0 = 900, X1 = 1800, Y0 = 560, AMP = 150;
      g.ax = { X0, X1, Y0, AMP };
      svg("line", { x1: X0, x2: X1, y1: Y0, y2: Y0, style: `stroke:${V("line")};stroke-width:2` }, g.curveG);
      label(g.curveG, X0, Y0 - AMP - 34, t("velocity towards us", "velocidad hacia nosotros"), 24);
      label(g.curveG, X1, Y0 + 44, t("time: one year →", "tiempo: un año →"), 22, "ink-soft", "end");
      label(g.curveG, X0 - 14, Y0 - AMP + 8, `+${num(KV.earth * 100, 1)} cm/s`, 22, "accent", "end");
      label(g.curveG, X0 - 14, Y0 + AMP + 8, `−${num(KV.earth * 100, 1)} cm/s`, 22, "accent", "end");
      g.trace = svg("path", { fill: "none", style: `stroke:${V("accent")};stroke-width:4` }, g.curveG);
      g.dot = svg("circle", { r: 10, style: `fill:${V("accent")}` }, g.curveG);
      g.spectrumG = svg("g", {}, s);
      g.spectrum = mountSpectrum(g.spectrumG, X0, 790, X1 - X0, 90, "spectrum-orbit");
      g.direction = label(g.spectrumG, X0, 925, "", 24, "ink");
      return g;
    },
    draw(g, st, n, time) {
      const P = 9, th = 2 * Math.PI * time / P, C = g.C;
      attr(g.planet, { cx: C.x + 250 * Math.cos(th), cy: C.y + 250 * Math.sin(th) });
      attr(g.star, { cx: C.x - 40 * Math.cos(th), cy: C.y - 40 * Math.sin(th) });
      const v = -Math.cos(th), { X0, X1, Y0, AMP } = g.ax, frac = Math.min(0.999, (time % P) / P);
      let d = "";
      for (let k = 0; k <= 120; k++) { const f = k / 120 * frac;
        d += (k ? "L" : "M") + (X0 + (X1 - X0) * f).toFixed(1) + " " + (Y0 + AMP * Math.cos(th - 2 * Math.PI * (frac - f))).toFixed(1); }
      g.trace.setAttribute("d", d);
      attr(g.dot, { cx: X0 + (X1 - X0) * frac, cy: Y0 - AMP * v });
      g.curveG.style.opacity = st.curve; g.spectrumG.style.opacity = st.spectrum;
      g.spectrum.shift(-14 * v);
      g.direction.textContent = v > 0.3 ? t("approaching: lines shift to the blue ←", "se acerca: las líneas se corren al azul ←")
        : v < -0.3 ? t("receding: lines shift to the red →", "se aleja: las líneas se corren al rojo →") : "";
    },
  });

  // ================================================================ 4. lines
  A.lines = K.scene({
    states: [{ e: 0 }, { e: 1 }, { e: 2 }, { e: 3.301 }],          // N = 10^e: 1, 10, 100, 2000
    duration: 1800,
    mount(s) {
      const g = { rows: [] };
      for (let k = 0; k < 12; k++) g.rows.push(svg("path", { fill: "none", style: `stroke:${V("accent-2")};stroke-width:2` }, s));
      g.more = label(s, 140, 935, "", 24);
      svg("line", { x1: 1060, x2: 1800, y1: 460, y2: 460, style: `stroke:${V("line")};stroke-width:2` }, s);
      g.sum = svg("path", { fill: "none", style: `stroke:${V("accent")};stroke-width:5` }, s);
      g.err = svg("line", { y1: 820, y2: 820, style: `stroke:${V("accent")};stroke-width:6;stroke-linecap:round` }, s);
      svg("line", { x1: 1430, x2: 1430, y1: 380, y2: 860, style: `stroke:${V("ink-soft")};stroke-dasharray:6 6;stroke-width:2` }, s);
      g.N = text(s, 1060, 380, "", { style: `fill:${V("ink")};font-size:40px;font-weight:600` });
      g.errLabel = label(s, 1430, 880, "", 26, "accent", "middle");
      return g;
    },
    draw(g, st) {
      const N = Math.round(Math.pow(10, st.e));
      const profile = (i) => 1 - 0.4 * Math.exp(-Math.pow((i - 50) / 7, 2) / 2);
      const thousands = (x) => x.toLocaleString(K.es() ? "es-CL" : "en-US");
      g.rows.forEach((row, k) => {
        if (k >= N) { row.style.opacity = 0; return; }
        const y0 = 360 + k * 48, h = 40; let d = "";
        for (let i = 0; i <= 100; i++) { const val = profile(i) + 0.14 * gauss[(k * 101 + i) % gauss.length];
          d += (i ? "L" : "M") + (140 + 7.4 * i).toFixed(1) + " " + (y0 + h * (1 - val)).toFixed(1); }
        row.setAttribute("d", d); row.style.opacity = N === 1 ? 1 : 0.75;
        if (N === 1) row.setAttribute("transform", "translate(0 200)"); else row.removeAttribute("transform");
      });
      g.more.textContent = N > 12 ? t(`… and ${thousands(N - 12)} more lines`, `… y ${thousands(N - 12)} líneas más`)
        : N === 1 ? t("a single line, with photon noise", "una sola línea, con ruido de fotones") : "";
      let d = ""; const noise = 0.14 / Math.sqrt(N);
      for (let i = 0; i <= 100; i++) { const val = profile(i) + noise * gauss[(2000 + i) % gauss.length];
        d += (i ? "L" : "M") + (1060 + 7.4 * i).toFixed(1) + " " + (460 + 600 * (1 - val)).toFixed(1); }
      g.sum.setAttribute("d", d);
      const sigma = 220 / Math.sqrt(N);
      attr(g.err, { x1: 1430 - sigma, x2: 1430 + sigma });
      g.N.textContent = `N = ${thousands(N)} ${N === 1 ? t("line", "línea") : t("lines", "líneas")}`;
      g.errLabel.textContent = N === 1 ? t("velocity error", "error de la velocidad") : `${t("error", "error")} ÷ ${num(Math.sqrt(N), 1)}`;
    },
  });

  // ================================================================ 5. scale
  A.scale = K.scene({
    states: [{ u: 0, earth: 0 }, { u: 1, earth: 1 }],
    duration: 2600,
    mount(s) {
      const g = {};
      g.axes = [
        { y: 470, lo: -2.5, hi: 2.3, ticks: [[-2, "1 cm/s"], [-1, "10 cm/s"], [0, "1 m/s"], [1, "10 m/s"], [2, "100 m/s"]],
          title: t("how much the star wobbles (velocity)", "cuánto se mece la estrella (velocidad)"),
          jup: Math.log10(KV.jup), earth: Math.log10(KV.earth) },
        { y: 800, lo: -5.4, hi: -0.6, ticks: [[-5, "10 ppm"], [-4, "100 ppm"], [-3, `${num(0.1, 1)} %`], [-2, "1 %"], [-1, "10 %"]],
          title: t("how much it dims in transit (depth)", "cuánto se apaga en el tránsito (profundidad)"),
          jup: Math.log10(DEPTH.jup), earth: Math.log10(DEPTH.earth) },
      ];
      const X0 = 160, X1 = 1760;
      g.X = (a, v) => X0 + (X1 - X0) * (v - a.lo) / (a.hi - a.lo);
      g.axes.forEach((a) => {
        svg("line", { x1: X0, x2: X1, y1: a.y, y2: a.y, style: `stroke:${V("line")};stroke-width:3` }, s);
        label(s, X0, a.y - 110, a.title, 26, "ink");
        for (const [v, txt] of a.ticks) {
          svg("line", { x1: g.X(a, v), x2: g.X(a, v), y1: a.y, y2: a.y + 14, style: `stroke:${V("ink-soft")};stroke-width:2` }, s);
          label(s, g.X(a, v), a.y + 48, txt, 22, "ink-soft", "middle");
        }
        svg("circle", { cx: g.X(a, a.jup), cy: a.y, r: 18, style: `fill:${V("accent")}` }, s);
        label(s, g.X(a, a.jup), a.y - 34, t("Jupiter", "Júpiter"), 24, "accent", "middle");
        a.arrow = svg("line", { y1: a.y - 4, y2: a.y - 4, style: `stroke:${V("accent-2")};stroke-width:3;stroke-dasharray:8 6` }, s);
        a.dot = svg("circle", { cy: a.y, r: 18, style: `fill:${V("accent-2")}` }, s);
        a.name = label(s, 0, a.y - 34, t("Earth", "Tierra"), 24, "accent-2", "middle");
        a.ratio = label(s, 0, a.y - 20, "", 30, "ink", "middle");
      });
      return g;
    },
    draw(g, st) {
      g.axes.forEach((a) => {
        const xj = g.X(a, a.jup), xe = g.X(a, lerp(a.jup, a.earth, st.u));
        attr(a.dot, { cx: xe }); attr(a.name, { x: xe });
        attr(a.arrow, { x1: xe, x2: xj });
        a.dot.style.opacity = a.name.style.opacity = a.arrow.style.opacity = st.earth;
        const r = Math.pow(10, (a.jup - a.earth) * st.u);
        attr(a.ratio, { x: (xe + xj) / 2, y: a.y + 100 });
        a.ratio.textContent = st.u > 0.05 ? `÷ ${Math.round(r)}` : "";
      });
    },
  });
})();
