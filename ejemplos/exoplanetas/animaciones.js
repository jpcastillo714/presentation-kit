/* =====================================================================
   Animaciones del ejemplo «Exoplanetas» / Animations for the Exoplanets example.
   Usa la librería del motor (motor/anim.js, window.K): cada escena es una lista de estados, uno por nivel, y una
   función que dibuja un estado. Los textos salen en el idioma de la página con K.t(es, en).
   Each scene is a list of states (one per step) and a draw function; labels follow the page language via K.t().

   Física / Physics (cálculos en el navegador, con constantes públicas):
   - Profundidad del tránsito = (R_planeta / R_estrella)^2, radios nominales de la IAU (2015):
     R_Sol 695 700 km, R_Tierra 6 378,1 km, R_Júpiter 71 492 km → Tierra 84 ppm, Júpiter 1,06 %.
   - Velocidad inducida en la estrella (tercera ley de Kepler, órbita circular):
     K = (2πG/P)^(1/3) · m_p / (M_* + m_p)^(2/3) → Tierra 8,9 cm/s, Júpiter 12,5 m/s.
   Lienzo: viewBox 1920×1080, la diapositiva entera; el título ocupa hasta y ≈ 300 y la fuente desde y ≈ 960.
   ===================================================================== */
(function () {
  "use strict";
  const { svg, texto, attr, lerp, clamp, coma, colorLuz, t: T } = K;
  const V = (v) => `var(--${v})`;
  const A = (window.animaciones = window.animaciones || {});

  // ------------------------------------------------------------------ física
  const R_SOL = 695700, R_TIERRA = 6378.1, R_JUP = 71492;
  const G = 6.674e-11, M_SOL = 1.989e30, M_TIERRA = 5.972e24, M_JUP = 1.898e27, ANIO = 365.25 * 86400;
  const kepler = (m, P) => Math.pow(2 * Math.PI * G / P, 1 / 3) * m / Math.pow(M_SOL + m, 2 / 3);
  const PROF = { jup: Math.pow(R_JUP / R_SOL, 2), tierra: Math.pow(R_TIERRA / R_SOL, 2) };
  const KV = { jup: kepler(M_JUP, 11.86 * ANIO), tierra: kepler(M_TIERRA, ANIO) };

  // Líneas de absorción del Sol (Fraunhofer, nm) y líneas débiles ilustrativas con semilla fija.
  const FRAUNHOFER = [393.4, 396.8, 410.2, 430.8, 434.0, 438.4, 486.1, 516.7, 517.3, 518.4, 527.0, 589.0, 589.6, 656.3, 759.4];
  let semilla = 11;
  const azar = () => ((semilla = (semilla * 16807) % 2147483647) / 2147483647);
  const DEBILES = Array.from({ length: 140 }, () => [380 + 408 * azar(), 0.15 + 0.35 * azar()]);
  const gauss = (() => { const g = []; for (let i = 0; i < 4000; i++) { const u = azar() || 1e-9, v = azar();
    g.push(Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v)); } return g; })();

  function montarEspectro(padre, x, y, w, h, id) {
    const g = svg("g", {}, padre);
    const raiz = padre.ownerSVGElement || padre;
    K.degradadoEspectro(raiz, id);
    svg("rect", { x, y, width: w, height: h, rx: 4, fill: `url(#${id})` }, g);
    const lineas = svg("g", {}, g);
    const nm2x = (nm) => x + (nm - 380) / 408 * w;
    const els = [];
    for (const [nm, prof] of DEBILES) els.push([svg("rect", { y, height: h, width: 2, fill: "#05080f", opacity: prof }, lineas), nm]);
    for (const nm of FRAUNHOFER) els.push([svg("rect", { y, height: h, width: 4, fill: "#05080f", opacity: 0.92 }, lineas), nm]);
    const clip = svg("clipPath", { id: id + "-c" }, raiz.querySelector("defs"));
    svg("rect", { x, y, width: w, height: h, rx: 4 }, clip);
    lineas.setAttribute("clip-path", `url(#${id}-c)`);
    return { mover(dx) { for (const [e, nm] of els) e.setAttribute("x", nm2x(nm) + dx); } };
  }
  const etiqueta = (padre, x, y, txt, tam = 24, color = "tinta-suave", ancla = "start") =>
    texto(padre, x, y, txt, { "text-anchor": ancla, style: `fill:${V(color)};font-size:${tam}px` });

  // ================================================================ 1. portada
  A.portada = K.escena({
    estados: [{}], bucle: true,
    montar(s) {
      const g = { esp: montarEspectro(s, 0, 742, 1920, 150, "esp-portada") };
      etiqueta(s, 120, 930, "380 nm", 20); etiqueta(s, 1800, 930, "788 nm", 20, "tinta-suave", "end");
      return g;
    },
    dibujar(g, est, n, t) { g.esp.mover(9 * Math.sin(2 * Math.PI * t / 7)); },
  });

  // ================================================================ 2. tránsito
  A.transito = K.escena({
    estados: [{ rp: Math.sqrt(PROF.jup), prof: PROF.jup, esc: 1 }, { rp: Math.sqrt(PROF.tierra), prof: PROF.tierra, esc: 0 }],
    duracion: 1600, bucle: true, tFinal: 4,
    montar(s) {
      const g = { E: { x: 480, y: 610, r: 230 } };
      const defs = svg("defs", {}, s);
      const rg = svg("radialGradient", { id: "disco" }, defs);   // oscurecimiento hacia el borde (ilustrativo)
      svg("stop", { offset: "0%", "stop-color": "#fff4d8" }, rg);
      svg("stop", { offset: "70%", "stop-color": "#ffc861" }, rg);
      svg("stop", { offset: "100%", "stop-color": "#d9822b" }, rg);
      svg("circle", { cx: g.E.x, cy: g.E.y, r: g.E.r, fill: "url(#disco)" }, s);
      g.planeta = svg("circle", { style: "fill:#0a1020" }, s);
      g.marca = svg("circle", { r: 18, style: `fill:none;stroke:${V("acento-2")};stroke-width:3` }, s);
      g.nombre = etiqueta(s, g.E.x, g.E.y + g.E.r + 60, "", 28, "tinta", "middle");
      // curva de luz
      g.ej = { X0: 940, X1: 1800, Y0: 470, H: 300 };
      const { X0, X1, Y0, H } = g.ej;
      svg("line", { x1: X0, x2: X1, y1: Y0, y2: Y0, style: `stroke:${V("linea")};stroke-width:2;stroke-dasharray:6 8` }, s);
      svg("line", { x1: X0, x2: X1, y1: Y0 + H, y2: Y0 + H, style: `stroke:${V("linea")};stroke-width:2;stroke-dasharray:6 8` }, s);
      etiqueta(s, X0, Y0 - 50, T("brillo de la estrella", "brightness of the star"), 24);
      etiqueta(s, X0 - 16, Y0 + 8, "100 %", 22, "tinta-suave", "end");
      g.fondoEje = etiqueta(s, X0 - 16, Y0 + H + 8, "", 22, "acento", "end");
      etiqueta(s, X1, Y0 + H + 60, T("tiempo →", "time →"), 22, "tinta-suave", "end");
      g.traza = svg("path", { fill: "none", style: `stroke:${V("acento")};stroke-width:4` }, s);
      g.punto = svg("circle", { r: 10, style: `fill:${V("acento")}` }, s);
      g.prof = etiqueta(s, X1, Y0 - 50, "", 30, "acento", "end");
      return g;
    },
    dibujar(g, est, n, t) {
      const P = 6, frac = Math.min(0.999, (t % P) / P), E = g.E, { X0, X1, Y0, H } = g.ej;
      const rpx = Math.max(2.2, est.rp * E.r);
      const posX = (f) => E.x - 1.5 * E.r + 3 * E.r * f;           // el planeta cruza de izquierda a derecha
      const bloqueo = (f) => {                                      // fracción tapada (borde lineal, sin oscurecimiento)
        const d = Math.abs(posX(f) - E.x), r = E.r, p = est.rp * r;
        if (d >= r + p) return 0;
        if (d <= r - p) return est.prof;
        return est.prof * (r + p - d) / (2 * p);
      };
      attr(g.planeta, { cx: posX(frac), cy: E.y + 30, r: rpx });
      attr(g.marca, { cx: posX(frac), cy: E.y + 30 });
      g.marca.style.opacity = est.esc < 0.5 ? 1 : 0;
      // la escala vertical: la profundidad del planeta actual ocupa la altura H
      const escala = H / est.prof;
      let d = "";
      for (let k = 0; k <= 160; k++) { const f = k / 160 * frac;
        d += (k ? "L" : "M") + (X0 + (X1 - X0) * f).toFixed(1) + " " + (Y0 + bloqueo(f) * escala).toFixed(1); }
      g.traza.setAttribute("d", d);
      attr(g.punto, { cx: X0 + (X1 - X0) * frac, cy: Y0 + bloqueo(frac) * escala });
      const jup = est.esc > 0.5;
      g.nombre.textContent = jup ? T("un planeta como Júpiter", "a Jupiter-sized planet") : T("un planeta como la Tierra (marcado)", "an Earth-sized planet (circled)");
      g.fondoEje.textContent = jup ? "−1,06 %".replace(",", K.en() ? "." : ",") : "−84 ppm";
      g.prof.textContent = jup ? T("se apaga 1,06 %", "dims by 1.06 %") : T("se apaga 84 partes por millón", "dims by 84 parts per million");
    },
  });

  // ================================================================ 3. órbita
  A.orbita = K.escena({
    estados: [{ curva: 0, esp: 0 }, { curva: 1, esp: 0 }, { curva: 1, esp: 1 }],
    duracion: 900, bucle: true, tFinal: 8.95,
    montar(s) {
      const g = {}, C = { x: 470, y: 640 };
      g.C = C;
      svg("circle", { cx: C.x, cy: C.y, r: 250, fill: "none", style: `stroke:${V("linea")};stroke-width:2;stroke-dasharray:4 8` }, s);
      svg("circle", { cx: C.x, cy: C.y, r: 5, style: `fill:${V("tinta-suave")}` }, s);
      etiqueta(s, C.x + 12, C.y - 10, T("centro de masa", "center of mass"), 22);
      const defs = svg("defs", {}, s);
      const rg = svg("radialGradient", { id: "brillo" }, defs);
      svg("stop", { offset: "0%", "stop-color": "#ffe1a1" }, rg);
      svg("stop", { offset: "45%", "stop-color": "#f5a623" }, rg);
      svg("stop", { offset: "100%", "stop-color": "#f5a623", "stop-opacity": 0 }, rg);
      g.estrella = svg("circle", { r: 70, fill: "url(#brillo)" }, s);
      g.planeta = svg("circle", { r: 13, style: `fill:${V("acento-2")}` }, s);
      etiqueta(s, C.x, 930, T("↓ hacia nosotros", "↓ towards us"), 24, "tinta-suave", "middle");
      g.curvaG = svg("g", {}, s);
      const X0 = 900, X1 = 1800, Y0 = 560, AMP = 150;
      g.ej = { X0, X1, Y0, AMP };
      svg("line", { x1: X0, x2: X1, y1: Y0, y2: Y0, style: `stroke:${V("linea")};stroke-width:2` }, g.curvaG);
      etiqueta(g.curvaG, X0, Y0 - AMP - 34, T("velocidad hacia nosotros", "velocity towards us"), 24);
      etiqueta(g.curvaG, X1, Y0 + 44, T("tiempo: un año →", "time: one year →"), 22, "tinta-suave", "end");
      etiqueta(g.curvaG, X0 - 14, Y0 - AMP + 8, `+${coma(KV.tierra * 100, 1)} cm/s`, 22, "acento", "end");
      etiqueta(g.curvaG, X0 - 14, Y0 + AMP + 8, `−${coma(KV.tierra * 100, 1)} cm/s`, 22, "acento", "end");
      g.traza = svg("path", { fill: "none", style: `stroke:${V("acento")};stroke-width:4` }, g.curvaG);
      g.punto = svg("circle", { r: 10, style: `fill:${V("acento")}` }, g.curvaG);
      g.espG = svg("g", {}, s);
      g.esp = montarEspectro(g.espG, X0, 790, X1 - X0, 90, "esp-orbita");
      g.sentido = etiqueta(g.espG, X0, 925, "", 24, "tinta");
      return g;
    },
    dibujar(g, est, n, t) {
      const P = 9, th = 2 * Math.PI * t / P, C = g.C;
      attr(g.planeta, { cx: C.x + 250 * Math.cos(th), cy: C.y + 250 * Math.sin(th) });
      attr(g.estrella, { cx: C.x - 40 * Math.cos(th), cy: C.y - 40 * Math.sin(th) });
      const v = -Math.cos(th), { X0, X1, Y0, AMP } = g.ej, frac = Math.min(0.999, (t % P) / P);
      let d = "";
      for (let k = 0; k <= 120; k++) { const f = k / 120 * frac;
        d += (k ? "L" : "M") + (X0 + (X1 - X0) * f).toFixed(1) + " " + (Y0 + AMP * Math.cos(th - 2 * Math.PI * (frac - f))).toFixed(1); }
      g.traza.setAttribute("d", d);
      attr(g.punto, { cx: X0 + (X1 - X0) * frac, cy: Y0 - AMP * v });
      g.curvaG.style.opacity = est.curva; g.espG.style.opacity = est.esp;
      g.esp.mover(-14 * v);
      g.sentido.textContent = v > 0.3 ? T("se acerca: las líneas se corren al azul ←", "approaching: lines shift to the blue ←")
        : v < -0.3 ? T("se aleja: las líneas se corren al rojo →", "receding: lines shift to the red →") : "";
    },
  });

  // ================================================================ 4. líneas
  A.lineas = K.escena({
    estados: [{ e: 0 }, { e: 1 }, { e: 2 }, { e: 3.301 }],          // N = 10^e: 1, 10, 100, 2000
    duracion: 1800,
    montar(s) {
      const g = { filas: [] };
      for (let k = 0; k < 12; k++) g.filas.push(svg("path", { fill: "none", style: `stroke:${V("acento-2")};stroke-width:2` }, s));
      g.mas = etiqueta(s, 140, 935, "", 24);
      svg("line", { x1: 1060, x2: 1800, y1: 460, y2: 460, style: `stroke:${V("linea")};stroke-width:2` }, s);
      g.suma = svg("path", { fill: "none", style: `stroke:${V("acento")};stroke-width:5` }, s);
      g.err = svg("line", { y1: 820, y2: 820, style: `stroke:${V("acento")};stroke-width:6;stroke-linecap:round` }, s);
      svg("line", { x1: 1430, x2: 1430, y1: 380, y2: 860, style: `stroke:${V("tinta-suave")};stroke-dasharray:6 6;stroke-width:2` }, s);
      g.N = texto(s, 1060, 380, "", { style: `fill:${V("tinta")};font-size:40px;font-weight:600` });
      g.etq = etiqueta(s, 1430, 880, "", 26, "acento", "middle");
      return g;
    },
    dibujar(g, est) {
      const N = Math.round(Math.pow(10, est.e));
      const perfil = (i) => 1 - 0.4 * Math.exp(-Math.pow((i - 50) / 7, 2) / 2);
      const miles = (n) => n.toLocaleString(K.en() ? "en-US" : "es-CL");
      g.filas.forEach((f, k) => {
        if (k >= N) { f.style.opacity = 0; return; }
        const y0 = 360 + k * 48, h = 40; let d = "";
        for (let i = 0; i <= 100; i++) { const val = perfil(i) + 0.14 * gauss[(k * 101 + i) % gauss.length];
          d += (i ? "L" : "M") + (140 + 7.4 * i).toFixed(1) + " " + (y0 + h * (1 - val)).toFixed(1); }
        f.setAttribute("d", d); f.style.opacity = N === 1 ? 1 : 0.75;
        if (N === 1) f.setAttribute("transform", "translate(0 200)"); else f.removeAttribute("transform");
      });
      g.mas.textContent = N > 12 ? T(`… y ${miles(N - 12)} líneas más`, `… and ${miles(N - 12)} more lines`)
        : N === 1 ? T("una sola línea, con ruido de fotones", "a single line, with photon noise") : "";
      let d = ""; const ruido = 0.14 / Math.sqrt(N);
      for (let i = 0; i <= 100; i++) { const val = perfil(i) + ruido * gauss[(2000 + i) % gauss.length];
        d += (i ? "L" : "M") + (1060 + 7.4 * i).toFixed(1) + " " + (460 + 600 * (1 - val)).toFixed(1); }
      g.suma.setAttribute("d", d);
      const sigma = 220 / Math.sqrt(N);
      attr(g.err, { x1: 1430 - sigma, x2: 1430 + sigma });
      g.N.textContent = `N = ${miles(N)} ${N === 1 ? T("línea", "line") : T("líneas", "lines")}`;
      g.etq.textContent = N === 1 ? T("error de la velocidad", "velocity error") : `${T("error", "error")} ÷ ${coma(Math.sqrt(N), 1)}`;
    },
  });

  // ================================================================ 5. escala
  A.escala = K.escena({
    estados: [{ u: 0, tierra: 0 }, { u: 1, tierra: 1 }],
    duracion: 2600,
    montar(s) {
      const g = {};
      g.ejes = [
        { y: 470, lo: -2.5, hi: 2.3, ticks: [[-2, "1 cm/s"], [-1, "10 cm/s"], [0, "1 m/s"], [1, "10 m/s"], [2, "100 m/s"]],
          titulo: T("cuánto se mece la estrella (velocidad)", "how much the star wobbles (velocity)"),
          jup: Math.log10(KV.jup), tierra: Math.log10(KV.tierra) },
        { y: 800, lo: -5.4, hi: -0.6, ticks: [[-5, "10 ppm"], [-4, "100 ppm"], [-3, "0,1 %"], [-2, "1 %"], [-1, "10 %"]],
          titulo: T("cuánto se apaga en el tránsito (profundidad)", "how much it dims in transit (depth)"),
          jup: Math.log10(PROF.jup), tierra: Math.log10(PROF.tierra) },
      ];
      const X0 = 160, X1 = 1760;
      g.X = (e, v) => X0 + (X1 - X0) * (v - e.lo) / (e.hi - e.lo);
      g.ejes.forEach((e) => {
        svg("line", { x1: X0, x2: X1, y1: e.y, y2: e.y, style: `stroke:${V("linea")};stroke-width:3` }, s);
        etiqueta(s, X0, e.y - 110, e.titulo, 26, "tinta");
        for (const [v, txt] of e.ticks) {
          svg("line", { x1: g.X(e, v), x2: g.X(e, v), y1: e.y, y2: e.y + 14, style: `stroke:${V("tinta-suave")};stroke-width:2` }, s);
          etiqueta(s, g.X(e, v), e.y + 48, K.en() ? txt.replace(",", ".") : txt, 22, "tinta-suave", "middle");
        }
        svg("circle", { cx: g.X(e, e.jup), cy: e.y, r: 18, style: `fill:${V("acento")}` }, s);
        etiqueta(s, g.X(e, e.jup), e.y - 34, T("Júpiter", "Jupiter"), 24, "acento", "middle");
        e.flecha = svg("line", { y1: e.y - 4, y2: e.y - 4, style: `stroke:${V("acento-2")};stroke-width:3;stroke-dasharray:8 6` }, s);
        e.punto = svg("circle", { cy: e.y, r: 18, style: `fill:${V("acento-2")}` }, s);
        e.nombre = etiqueta(s, 0, e.y - 34, T("Tierra", "Earth"), 24, "acento-2", "middle");
        e.razon = etiqueta(s, 0, e.y - 20, "", 30, "tinta", "middle");
      });
      return g;
    },
    dibujar(g, est) {
      g.ejes.forEach((e) => {
        const xj = g.X(e, e.jup), xt = g.X(e, lerp(e.jup, e.tierra, est.u));
        attr(e.punto, { cx: xt }); attr(e.nombre, { x: xt });
        attr(e.flecha, { x1: xt, x2: xj });
        e.punto.style.opacity = e.nombre.style.opacity = e.flecha.style.opacity = est.tierra;
        const r = Math.pow(10, (e.jup - e.tierra) * est.u);
        attr(e.razon, { x: (xt + xj) / 2, y: e.y + 100 });
        e.razon.textContent = est.u > 0.05 ? `÷ ${Math.round(r)}` : "";
      });
    },
  });
})();
