/* presentation-kit, study guides: theme, exercise mode, predictions, and a small SVG plotter for simulators.
   window.G is the API used by each page's own script:

     G.plot(svg, {xlabel, ylabel, xlim:[a,b], ylim:[a,b], xlog, ylog,
                  series:[{x:[...], y:[...], color, width, dots, dash, label}],
                  bands:[{x:[...], lo:[...], hi:[...], color}], marks:[{x, label}]})
     G.bind("slider-id", value => {...})  // range input + its <output>, calls back now and on every change
     G.num(3.14159, 2)                    // number in the page's language (decimal comma in Spanish)
     G.rng(seed)                          // repeatable random numbers: .uniform(), .normal()
     G.data                               // the guide's data.json, if the folder has one

   Markup that needs no script:
     <div class="predict" data-correct="b"> <p class="q">…</p>
       <div class="options"><button data-option="a">…</button><button data-option="b">…</button></div>
       <p class="why">explanation shown after answering</p> </div>
     <div class="sim" data-gate>…</div>      ← locked in exercise mode until the prediction above is answered
*/
(function () {
  "use strict";
  const lang = document.documentElement.lang || "en";
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private window: fine */ } },
  };
  const t = (en, es) => (lang === "es" ? es : en);

  // ----- theme and exercise mode (remembered per browser; the page works without it)
  function setupBar() {
    const theme = store.get("guide-theme");
    if (theme) document.documentElement.dataset.theme = theme;
    const tb = document.getElementById("theme-btn");
    if (tb) tb.onclick = () => {
      const dark = getComputedStyle(document.documentElement).getPropertyValue("--bg").trim().startsWith("#1");
      const next = dark ? "light" : "dark";
      document.documentElement.dataset.theme = next; store.set("guide-theme", next);
    };
    const eb = document.getElementById("exercise-btn");
    const on = store.get("guide-exercise") === "1";
    document.body.classList.toggle("exercise", on);
    if (eb) {
      eb.setAttribute("aria-pressed", String(on));
      eb.onclick = () => {
        const now = !document.body.classList.contains("exercise");
        document.body.classList.toggle("exercise", now); eb.setAttribute("aria-pressed", String(now));
        store.set("guide-exercise", now ? "1" : "0");
      };
    }
  }

  // ----- predictions: answer, see why; the next gated simulator unlocks
  function setupPredictions() {
    document.querySelectorAll(".predict").forEach(box => {
      let gate = box.nextElementSibling;
      while (gate && !gate.matches("[data-gate]") && !gate.matches(".predict")) gate = gate.nextElementSibling;
      if (gate && gate.matches("[data-gate]")) gate.classList.add("locked"); else gate = null;
      box.querySelectorAll("button[data-option]").forEach(b => b.addEventListener("click", () => {
        box.querySelectorAll("button[data-option]").forEach(x => x.classList.remove("right", "wrong"));
        b.classList.add(b.dataset.option === box.dataset.correct ? "right" : "wrong");
        box.querySelector(`button[data-option="${box.dataset.correct}"]`).classList.add("right");
        box.classList.add("answered");
        if (gate) gate.classList.remove("locked");
      }));
    });
  }

  // ----- numbers and random numbers
  function num(v, digits = 2) {
    const s = Number(v).toFixed(digits).replace("-", "−");
    return lang === "es" ? s.replace(".", ",") : s;
  }
  function rng(seed = 1) {
    let s = seed >>> 0;
    const uniform = () => { s = (s + 0x6D2B79F5) >>> 0; let x = s; x = Math.imul(x ^ (x >>> 15), x | 1);
      x ^= x + Math.imul(x ^ (x >>> 7), x | 61); return ((x ^ (x >>> 14)) >>> 0) / 4294967296; };
    const normal = () => Math.sqrt(-2 * Math.log(1 - uniform())) * Math.cos(2 * Math.PI * uniform());
    return { uniform, normal };
  }

  // ----- a small plotter: axes with names and units, ticks, lines, dots, bands, vertical marks
  const NS = "http://www.w3.org/2000/svg";
  function el(tag, attrs, parent) {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function ticks(a, b, log) {
    if (log) { const out = []; for (let p = Math.ceil(Math.log10(a)); p <= Math.floor(Math.log10(b)); p++) out.push(10 ** p); return out; }
    const span = b - a, step0 = 10 ** Math.floor(Math.log10(span / 5));
    const step = [1, 2, 5, 10].map(m => m * step0).find(s => span / s <= 6);
    const out = []; for (let v = Math.ceil(a / step) * step; v <= b + 1e-9 * span; v += step) out.push(+v.toPrecision(12));
    return out;
  }
  function fmt(v, log) {
    if (log) return v >= 1e4 || v < 1e-3 ? `10^${Math.round(Math.log10(v))}` : String(v);
    return num(v, Math.abs(v) < 10 && v % 1 ? (Math.abs(v) < 1 ? 2 : 1) : 0);
  }
  function plot(svg, o) {
    const W = 640, H = 340, L = 64, R = 16, T = 14, B = 50;
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    svg.innerHTML = "";
    const all = (k) => (o.series || []).flatMap(s => s[k]).concat((o.bands || []).flatMap(b => k === "x" ? b.x : b.lo.concat(b.hi)));
    const [x0, x1] = o.xlim || [Math.min(...all("x")), Math.max(...all("x"))];
    const [y0, y1] = o.ylim || [Math.min(...all("y")), Math.max(...all("y"))];
    const tx = v => o.xlog ? Math.log10(v) : v, ty = v => o.ylog ? Math.log10(v) : v;
    const X = v => L + (tx(v) - tx(x0)) / (tx(x1) - tx(x0)) * (W - L - R);
    const Y = v => H - B - (ty(v) - ty(y0)) / (ty(y1) - ty(y0)) * (H - T - B);
    for (const v of ticks(y0, y1, o.ylog)) {
      el("line", { x1: L, x2: W - R, y1: Y(v), y2: Y(v), class: "grid" }, svg);
      el("text", { x: L - 8, y: Y(v) + 4, "text-anchor": "end" }, svg).textContent = fmt(v, o.ylog);
    }
    for (const v of ticks(x0, x1, o.xlog))
      el("text", { x: X(v), y: H - B + 18, "text-anchor": "middle" }, svg).textContent = fmt(v, o.xlog);
    el("line", { x1: L, x2: W - R, y1: H - B, y2: H - B, class: "axis" }, svg);
    if (o.xlabel) el("text", { x: (L + W - R) / 2, y: H - 8, "text-anchor": "middle" }, svg).textContent = o.xlabel;
    if (o.ylabel) el("text", { x: 14, y: (T + H - B) / 2, "text-anchor": "middle", transform: `rotate(-90 14 ${(T + H - B) / 2})` }, svg).textContent = o.ylabel;
    const clip = el("clipPath", { id: (svg.id || "p") + "-clip" }, el("defs", {}, svg));
    el("rect", { x: L, y: T, width: W - L - R, height: H - T - B }, clip);
    const g = el("g", { "clip-path": `url(#${clip.id})` }, svg);
    for (const b of o.bands || []) {
      const pts = b.x.map((x, i) => `${X(x)},${Y(b.hi[i])}`).concat(b.x.map((x, i) => `${X(x)},${Y(b.lo[i])}`).reverse());
      el("polygon", { points: pts.join(" "), fill: b.color || "var(--accent)", opacity: b.opacity || 0.15 }, g);
    }
    for (const s of o.series || []) {
      const color = s.color || "var(--accent)";
      if (s.dots) s.x.forEach((x, i) => el("circle", { cx: X(x), cy: Y(s.y[i]), r: s.r || 3, fill: color, opacity: s.opacity || 0.8 }, g));
      else el("polyline", { points: s.x.map((x, i) => `${X(x)},${Y(s.y[i])}`).join(" "), fill: "none", stroke: color,
        "stroke-width": s.width || 2.2, "stroke-dasharray": s.dash || "" }, g);
      if (s.label) { const i = s.x.length - 1; el("text", { x: X(s.x[i]) - 4, y: Y(s.y[i]) - 8, "text-anchor": "end", style: `fill:${color}` }, svg).textContent = s.label; }
    }
    for (const m of o.marks || []) {
      el("line", { x1: X(m.x), x2: X(m.x), y1: T, y2: H - B, stroke: m.color || "var(--accent-2)", "stroke-dasharray": "4 4" }, svg);
      if (m.label) el("text", { x: X(m.x) + 6, y: T + 14, style: `fill:${m.color || "var(--accent-2)"}` }, svg).textContent = m.label;
    }
    return { X, Y };
  }

  function bind(id, fn) {
    const input = document.getElementById(id);
    const out = document.querySelector(`output[for="${id}"]`);
    const run = () => { const v = Number(input.value); if (out) out.textContent = input.dataset.format === "int" ? String(v) : num(v, Number(input.dataset.digits || 2)); fn(v); };
    input.addEventListener("input", run); run();
    return input;
  }

  window.G = { plot, bind, num, rng, t, data: window.GUIDE_DATA || null };
  document.addEventListener("DOMContentLoaded", () => { setupBar(); setupPredictions(); });
})();
