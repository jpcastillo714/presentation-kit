# Examples / Ejemplos

**EN.** This folder is the heart of the kit. Instead of generic rules or style catalogs, a model (or a person) gets
real decks as reference and learns from them. Each example has its script (`guion.md`, `guion.en.md`), its figures
with the code that makes them and, on every slide, a **why it works** note (in the HTML press **E**; in the script, the
`@why` / `@porque` line). When you hand the kit to a model, give it this folder: first this index, then the script of
the example closest to what it will make.

**ES.** Esta carpeta es el corazón del kit. En vez de reglas genéricas o estilos de catálogo, un modelo (o una persona)
recibe presentaciones reales como referencia y aprende de ellas. Cada ejemplo trae su guion (`guion.md`,
`guion.en.md`), sus figuras con el código que las genera y, en cada diapositiva, un **por qué funciona** (en el HTML,
tecla **E**; en el guion, la línea `@porque` / `@why`). Cuando le pases el kit a un modelo, pásale esta carpeta:
primero este índice, después el guion del ejemplo más parecido a lo que va a hacer.

| Folder / Carpeta | What it is / Qué es | Register / Registro |
|---|---|---|
| `anscombe/` | Four datasets with the same statistics and different shapes: plot before you summarize. 8 slides. / Cuatro conjuntos con la misma estadística y formas distintas: grafica antes de resumir. 8 diapositivas. | Sober / sobrio |
| `exoplanetas/` | How planets you cannot see are found: the transit shadow and the stellar wobble. 8 slides, 5 animated scenes. / Cómo se encuentran planetas que no se ven: la sombra del tránsito y el bamboleo de la estrella. 8 diapositivas, 5 escenas animadas. | Expressive / expresivo |

Each folder has the packaged single-file HTML, PDF and `.pptx` in both languages (`*.en.*` = English).
Cada carpeta trae el HTML de un solo archivo, el PDF y el `.pptx` en los dos idiomas (`*.en.*` = inglés).

## Resources and where to see them / Recursos y dónde verlos

Principle numbers refer to `../PRINCIPLES.md` (`../PRINCIPIOS.md`); F and G refer to the entries in `../docs/`.

| Resource / Recurso | When / Cuándo | Where / Dónde | Principle |
|---|---|---|---|
| Title that is the conclusion / Título que es la conclusión | Always / Siempre | every slide of both examples | 4 |
| One big number as evidence / Una cifra grande como evidencia | When the number is the message / Cuando la cifra es el mensaje | `anscombe`, 2 | 5 |
| Small multiples on shared axes / Múltiplos pequeños con los mismos ejes | Compare cases / Comparar casos | `anscombe`, 3 | 13 |
| One idea per slide, accent on what matters / Una idea por diapositiva, acento en lo que importa | Results / Resultados | `anscombe`, 4–6 | 5, 7 |
| The number that proves it next to the figure / La cifra que lo prueba junto a la figura | Always / Siempre | `anscombe`, 5 | 7 (F25) |
| Reveal one at a time / Revelar de a uno | Short lists of actions / Listas cortas | `anscombe`, 7; `exoplanetas`, 5 | F25 |
| Appendix with sources / Anexo con fuentes | Whenever there are numbers / Si hay cifras | last slide of both | 8 |
| A cover that already teaches / Portada que ya enseña | When the phenomenon can be shown / Si el fenómeno se puede mostrar | `exoplanetas`, 1 | F11 |
| Cause and effect drawn together / Causa y efecto juntos | A process with a measurable trace / Un proceso con una señal | `exoplanetas`, 2 and 3 | F25, F29 |
| Accumulate until the signal appears / Acumular hasta que aparece la señal | Averages, 1/√N | `exoplanetas`, 4 | F11, F12 |
| A still slide after an animated run / Una quieta tras la racha animada | Mark the change to discussion / Marcar el cambio | `exoplanetas`, 5 | "Two registers" |
| Travel along a log scale / Recorrer una escala logarítmica | Distances of orders of magnitude / Órdenes de magnitud | `exoplanetas`, 6 | F23, G20 |
| Show how it was made / Mostrar cómo se hizo | When sharing a method / Al compartir un método | `exoplanetas`, 7 | — |

## External references to look at / Referencias externas para mirar

Linked, not copied (third-party copyright). / Enlazadas, no copiadas (derechos de terceros).

- Bartosz Ciechanowski, "Cameras and Lenses" (2020): https://ciechanow.ski/cameras-and-lenses/ (F31).
- Rougier, Droettboom & Bourne (2014), *Ten Simple Rules for Better Figures*, code for every figure:
  https://github.com/rougier/ten-rules (G21).
- Crameri et al. (2020), *The misuse of colour in science communication*: https://doi.org/10.1038/s41467-020-19160-7 (G22).
- Distill, "Why Momentum Really Works" (2017): https://distill.pub/2017/momentum/ (F13).
