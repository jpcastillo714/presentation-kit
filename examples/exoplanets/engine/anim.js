/* =====================================================================
   presentation-kit animation library (window.K). Optional: a deck that
   has animations.js links it automatically.

   The core idea is the SCENE: an animation is a list of states (one per
   step level) and a function that draws a state. The library interpolates
   between states when moving forward, jumps when going back, draws the
   last state when printing, and switches language with K.t(en, es).
   Each animation is therefore deterministic: a level always looks the same.

     window.animations.mine = K.scene({
       mount(svg, slide) { ...create elements, return an object g... },
       states: [{x: 0}, {x: 1}, ...],        // one per level (0..N)
       draw(g, state, level, t) { ... },     // t: seconds since it appeared (for loops)
       duration: 1600,                       // ms per transition (or a function of the level)
       loop: false,                          // true: redraws continuously while the slide is active
     });

   It uses setTimeout, not requestAnimationFrame: requestAnimationFrame
   stops when the window is not being painted (PDF, screenshots,
   background windows).
   ===================================================================== */
(function () {
  "use strict";
  const NS = "http://www.w3.org/2000/svg";
  const K = (window.K = window.K || {});

  K.svg = function (tag, attrs = {}, parent) {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) if (attrs[k] !== undefined && attrs[k] !== null) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  };
  K.text = function (parent, x, y, txt, attrs = {}) {
    const t = K.svg("text", Object.assign({ x, y }, attrs), parent);
    t.textContent = txt;
    return t;
  };
  K.attr = function (e, attrs) { for (const k in attrs) e.setAttribute(k, attrs[k]); return e; };
  K.lerp = (a, b, t) => a + (b - a) * t;
  K.clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  K.ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);   // ease-in-out

  /* Language of the page: K.t("hello", "hola"); numbers with the right decimal mark: K.num(0.5, 1) → "0.5" / "0,5". */
  K.es = () => document.documentElement.lang === "es";
  K.t = (en, es) => (K.es() ? es : en);
  K.num = (v, d = 2) => { const s = v.toFixed(d).replace("-", "−"); return K.es() ? s.replace(".", ",") : s; };

  /* Does the deck skip animations? The OS "reduce motion" preference belongs to the presenter's computer, not to the
     room: by default decks always animate (body data-motion="always", set by kit.py). With "motion: respect" in the
     script, the OS preference is honored. Key M toggles it live. */
  K.reduceMotion = () => {
    const m = document.body && document.body.dataset.motion;
    if (m === "always") return false;
    if (m === "never") return true;
    try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; }
  };

  /* Approximate color of a wavelength in nm (visible light). */
  K.lightColor = function (nm, a = 1) {
    let r = 0, g = 0, b = 0;
    if (nm < 440) { r = -(nm - 440) / 60; b = 1; } else if (nm < 490) { g = (nm - 440) / 50; b = 1; }
    else if (nm < 510) { g = 1; b = -(nm - 510) / 20; } else if (nm < 580) { r = (nm - 510) / 70; g = 1; }
    else if (nm < 645) { r = 1; g = -(nm - 645) / 65; } else r = 1;
    let f = 1; if (nm < 420) f = 0.45 + 0.55 * (nm - 380) / 40; if (nm > 700) f = 0.45 + 0.55 * (790 - nm) / 90;
    const c = (v) => Math.round(255 * Math.pow(K.clamp(v * f, 0, 1), 0.8));
    return `rgba(${c(r)},${c(g)},${c(b)},${a})`;
  };

  /* A visible-spectrum gradient inside <defs>; returns the id to use in fill="url(#id)". */
  K.spectrumGradient = function (svg, id, lmin = 380, lmax = 788, opacity = 1) {
    const defs = svg.querySelector("defs") || K.svg("defs", {}, svg);
    const g = K.svg("linearGradient", { id, x1: "0", x2: "1", y1: "0", y2: "0" }, defs);
    for (let k = 0; k <= 40; k++) {
      const nm = lmin + (lmax - lmin) * k / 40;
      K.svg("stop", { offset: `${(k / 40) * 100}%`, "stop-color": K.lightColor(nm, opacity) }, g);
    }
    return id;
  };

  /* Interpolates two states: numbers (and arrays of numbers) blend, everything else jumps to the target. */
  function mix(a, b, t) {
    if (!a) return b;
    const out = {};
    for (const k in b) {
      const va = a[k], vb = b[k];
      if (typeof vb === "number" && typeof va === "number") out[k] = va + (vb - va) * t;
      else if (Array.isArray(vb) && Array.isArray(va) && vb.length === va.length && typeof vb[0] === "number")
        out[k] = vb.map((v, i) => va[i] + (v - va[i]) * t);
      else out[k] = t < 0.5 && va !== undefined ? va : vb;
    }
    return out;
  }
  K.mix = mix;

  K.scene = function (def) {
    return function (slide, level, options = {}) {
      const host = slide.querySelector(".scene") || slide;
      if (!host._g) {
        host.innerHTML = "";
        const svg = K.svg("svg", { viewBox: def.viewBox || "0 0 1920 1080", width: "100%", height: "100%",
          preserveAspectRatio: def.aspect || "xMidYMid meet" }, host);
        host._svg = svg;
        host._g = def.mount(svg, slide) || {};
        host._t0 = Date.now();
      }
      const g = host._g;
      const N = def.states.length - 1;
      const target = def.states[Math.min(level, N)];
      clearTimeout(host._timer);
      const from = host._state;
      const jump = !from || options.final || K.reduceMotion() || level <= (host._level ?? -1);
      const dur = typeof def.duration === "function" ? def.duration(level) : (def.duration ?? 1400);
      const t0 = Date.now();
      host._level = level;
      const active = () => slide.classList.contains("active");
      const tick = () => {
        const tv = (Date.now() - host._t0) / 1000;
        const p = jump || dur <= 0 ? 1 : K.clamp((Date.now() - t0) / dur, 0, 1);
        const st = p >= 1 ? target : mix(from, target, K.ease(p));
        host._state = st;
        def.draw(g, st, level, options.final ? (def.tFinal ?? 0) : tv, options);
        const keepGoing = p < 1 || (def.loop && !options.final && !K.reduceMotion());
        if (keepGoing && active()) host._timer = setTimeout(tick, 16);
      };
      tick();
    };
  };
})();
