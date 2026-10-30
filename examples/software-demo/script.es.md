---
title: Dos clics muestran lo que una correlación esconde
author: presentation-kit · ejemplo de demostración de software
date: 2026
profile: sober
lang: es
audience: Un laboratorio o equipo que construye paneles y quiere mostrar uno funcionando en una charla.
message: Una demostración es una tarea hecha en el producto real, filmada donde ocurre la acción; nunca se reemplaza por un dibujo.
---

<!-- Ejemplo de demostración de software. La aplicación de app/index.html es código real; el video se graba desde
     ella con «python engine/kit.py demo demo.es.yml». -->

## Dos clics muestran lo que una correlación esconde
@type cover
@subtitle Una demostración grabada desde el panel real, no dibujada
> Una sola tarea, mostrada en el producto: ajustar una recta a dos conjuntos y mirar los residuos.
@why El título es la conclusión de la demostración, no el nombre del producto (principio 4). El subtítulo dice cuál es la evidencia: el video sale del código funcionando (catálogo de demostraciones, «mostrar el producto real»).

## El panel da el mismo r para dos conjuntos muy distintos; los residuos los separan
@video figures/demo_residuals.es.mp4
@source Grabado con «kit.py demo» desde app/index.html (demo.es.yml). Datos: Anscombe (1973), The American Statistician 27(1), 17–21.
> Dejar correr el video; se acerca donde ocurre cada clic. Con V se pausa en los residuos.
@why Una tarea por video, escrita antes de grabar, con la cámara sobre el control que se usa y un cursor visible (señalización, F25; catálogo de demostraciones). La etiqueta del video dice desde dónde se grabó.

## El video sale de ejecutar el código, paso a paso
@steps
- **demo.es.yml enumera la tarea:** abrir, elegir un conjunto, hacer clic, acercar, esperar.
- **kit.py demo la ejecuta en un navegador real** y toma una captura en cada paso.
- **El acercamiento, el cursor y los subtítulos se agregan después,** a partir de la posición de los elementos reales.
- **Si todavía no hay código,** `mockup: true` estampa «Maqueta» en cada cuadro.
@source presentation-kit: engine/demo.py.
> Esta es la diapositiva para quien vaya a grabar su propia demostración.
@why Dice cómo se produjo la evidencia (principio 8) y separa una demostración real de una maqueta, que en pantalla no se distinguen.

## Fuentes
@appendix
- Anscombe, F. J. (1973). Graphs in Statistical Analysis. The American Statistician 27(1), 17–21. DOI 10.1080/00031305.1973.10478966.
- Cómo mostrar software: docs/software-demos.es.md (catálogo de demostraciones reconocidas y de la evidencia sobre videos de software).
- La aplicación: app/index.html (HTML y JavaScript). La grabación: demo.es.yml y engine/demo.py.
@why El anexo dice dónde está cada pieza para que cualquiera pueda volver a grabar la demostración.
