/* =====================================================================
   Librería de animación del kit (window.K). Opcional: la enlaza una
   presentación que tenga animaciones.js.

   La idea central es la ESCENA: una animación es una lista de estados
   (uno por nivel de pasos) y una función que dibuja un estado. La librería
   interpola entre estados al avanzar, salta al retroceder, respeta
   «reducir movimiento» y dibuja el último estado al imprimir. Así cada
   animación es determinista: un nivel siempre se ve igual.

     window.animaciones.mia = K.escena({
       montar(svg, slide) { ...crea elementos, devuelve un objeto g... },
       estados: [{x: 0}, {x: 1}, ...],          // uno por nivel (0..N)
       dibujar(g, est, nivel, t) { ... },       // t: segundos desde que entró (para bucles)
       duracion: 1600,                          // ms por transición (o función de nivel)
       bucle: false,                            // true: redibuja continuamente mientras está activa
     });

   Usa setTimeout y no requestAnimationFrame: requestAnimationFrame se
   detiene si la ventana no se está dibujando (PDF, capturas, ventanas
   en segundo plano).
   ===================================================================== */
(function () {
  "use strict";
  const NS = "http://www.w3.org/2000/svg";
  const K = (window.K = window.K || {});

  K.svg = function (tag, attrs = {}, padre) {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) if (attrs[k] !== undefined && attrs[k] !== null) e.setAttribute(k, attrs[k]);
    if (padre) padre.appendChild(e);
    return e;
  };
  K.texto = function (padre, x, y, txt, attrs = {}) {
    const t = K.svg("text", Object.assign({ x, y }, attrs), padre);
    t.textContent = txt;
    return t;
  };
  K.attr = function (e, attrs) { for (const k in attrs) e.setAttribute(k, attrs[k]); return e; };
  K.lerp = (a, b, t) => a + (b - a) * t;
  K.clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  K.suave = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);   // ease-in-out
  /* Decimal según el idioma de la página: coma en español, punto en inglés. / Decimal mark by page language. */
  K.en = () => document.documentElement.lang === "en";
  K.coma = (v, d = 2) => { const s = v.toFixed(d).replace("-", "−"); return K.en() ? s : s.replace(".", ","); };
  /* Texto según el idioma: K.t("hola", "hello"). / Text by language. */
  K.t = (es, en) => (K.en() ? en : es);
  /* ¿Saltar las animaciones? La preferencia «reducir movimiento» es del computador de quien presenta, no de la sala:
     por defecto las presentaciones animan siempre (body data-movimiento="siempre", que pone kit.py). Con
     «movimiento: respetar» en el guion, se respeta la preferencia del sistema. La tecla M lo cambia en vivo. */
  K.reducir = () => {
    const m = document.body && document.body.dataset.movimiento;
    if (m === "siempre") return false;
    if (m === "nunca") return true;
    try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; }
  };

  /* Color aproximado de una longitud de onda (nm): regla aproximada de color visible. / Approximate visible-light color rule. */
  K.colorLuz = function (nm, a = 1) {
    let r = 0, g = 0, b = 0;
    if (nm < 440) { r = -(nm - 440) / 60; b = 1; } else if (nm < 490) { g = (nm - 440) / 50; b = 1; }
    else if (nm < 510) { g = 1; b = -(nm - 510) / 20; } else if (nm < 580) { r = (nm - 510) / 70; g = 1; }
    else if (nm < 645) { r = 1; g = -(nm - 645) / 65; } else r = 1;
    let f = 1; if (nm < 420) f = 0.45 + 0.55 * (nm - 380) / 40; if (nm > 700) f = 0.45 + 0.55 * (790 - nm) / 90;
    const c = (v) => Math.round(255 * Math.pow(K.clamp(v * f, 0, 1), 0.8));
    return `rgba(${c(r)},${c(g)},${c(b)},${a})`;
  };

  /* Degradado del espectro visible dentro de un <defs>: devuelve el id para usar en fill="url(#id)". */
  K.degradadoEspectro = function (svg, id, lmin = 380, lmax = 788, opacidad = 1) {
    let defs = svg.querySelector("defs") || K.svg("defs", {}, svg);
    const g = K.svg("linearGradient", { id, x1: "0", x2: "1", y1: "0", y2: "0" }, defs);
    for (let k = 0; k <= 40; k++) {
      const nm = lmin + (lmax - lmin) * k / 40;
      K.svg("stop", { offset: `${(k / 40) * 100}%`, "stop-color": K.colorLuz(nm, opacidad) }, g);
    }
    return id;
  };

  /* Interpola dos estados: números se mezclan, lo demás salta al destino. */
  function mezclar(a, b, t) {
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
  K.mezclar = mezclar;

  K.escena = function (def) {
    return function (slide, nivel, opciones = {}) {
      const lienzo = slide.querySelector(".lienzo") || slide;
      if (!lienzo._g) {
        lienzo.innerHTML = "";
        const svg = K.svg("svg", { viewBox: def.viewBox || "0 0 1920 1080", width: "100%", height: "100%",
          preserveAspectRatio: def.aspecto || "xMidYMid meet" }, lienzo);
        lienzo._svg = svg;
        lienzo._g = def.montar(svg, slide) || {};
        lienzo._t0 = Date.now();
      }
      const g = lienzo._g;
      const N = def.estados.length - 1;
      const destino = def.estados[Math.min(nivel, N)];
      clearTimeout(lienzo._timer);
      const desde = lienzo._estado;
      const saltar = !desde || opciones.final || K.reducir() || nivel <= (lienzo._nivel ?? -1);
      const dur = typeof def.duracion === "function" ? def.duracion(nivel) : (def.duracion ?? 1400);
      const t0 = Date.now();
      lienzo._nivel = nivel;
      const activa = () => slide.classList.contains("activa");
      const tick = () => {
        const tv = (Date.now() - lienzo._t0) / 1000;
        const p = saltar || dur <= 0 ? 1 : K.clamp((Date.now() - t0) / dur, 0, 1);
        const est = p >= 1 ? destino : mezclar(desde, destino, K.suave(p));
        lienzo._estado = est;
        def.dibujar(g, est, nivel, opciones.final ? (def.tFinal ?? 0) : tv, opciones);
        const sigue = p < 1 || (def.bucle && !opciones.final && !K.reducir());
        if (sigue && activa()) lienzo._timer = setTimeout(tick, 16);
      };
      tick();
    };
  };
})();
