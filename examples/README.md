# Examples

*Español: misma tabla, abajo. / Spanish below.*

This folder is the heart of the kit. Instead of generic rules or style catalogs, a model (or a person) gets real
decks as reference and learns from them. Each example has its script (`script.md`, and `script.es.md` in Spanish), its
figures with the code that makes them and, on every slide, a **why it works** note (in the HTML press **E**; in the
script, the `@why` line). When you hand the kit to a model, give it this folder: first this index, then the script of
the example closest to what it will make.

| Folder | What it is | Register |
|---|---|---|
| [`anscombe/`](anscombe) | Four datasets with the same statistics and different shapes: plot before you summarize. 8 slides. | Sober |
| [`exoplanets/`](exoplanets) | How planets you cannot see are found: the transit shadow and the stellar wobble. 8 slides, 5 animated scenes. | Expressive |

Each folder has the packaged single-file HTML, the PDF and the `.pptx` in both languages (`*.es.*` = Spanish).

## Resources and where to see them

Principle numbers refer to [`../PRINCIPLES.md`](../PRINCIPLES.md); F and G refer to the entries in [`../docs/`](../docs).

| Resource | When | Where | Principle |
|---|---|---|---|
| Title that is the conclusion | Always | every slide of both examples | 4 |
| One big number as evidence | When the number is the message | `anscombe`, 2 | 5 |
| Small multiples on shared axes | Comparing cases | `anscombe`, 3 | 13 |
| One idea per slide, accent on what matters | Results | `anscombe`, 4–6 | 5, 7 |
| The number that proves it next to the figure | Always | `anscombe`, 5 | 7 (F25) |
| Reveal one at a time | Short lists of actions | `anscombe`, 7; `exoplanets`, 5 | F25 |
| Appendix with sources | Whenever there are numbers | last slide of both | 8 |
| A cover that already teaches | When the phenomenon can be shown | `exoplanets`, 1 | F11 |
| Cause and effect drawn together | A process with a measurable trace | `exoplanets`, 2 and 3 | F25, F29 |
| Accumulate until the signal appears | Averages, 1/√N | `exoplanets`, 4 | F11, F12 |
| A still slide after an animated run | Marking the change to discussion | `exoplanets`, 5 | "Two registers" |
| Travel along a log scale | Distances of orders of magnitude | `exoplanets`, 6 | F23, G20 |
| Show how it was made | When sharing a method | `exoplanets`, 7 | — |

## External references to look at

Linked, not copied (third-party copyright).

- Bartosz Ciechanowski, "Cameras and Lenses" (2020): https://ciechanow.ski/cameras-and-lenses/ (F31).
- Rougier, Droettboom & Bourne (2014), *Ten Simple Rules for Better Figures*, with the code of every figure:
  https://github.com/rougier/ten-rules (G21).
- Crameri et al. (2020), *The misuse of colour in science communication*: https://doi.org/10.1038/s41467-020-19160-7 (G22).
- Distill, "Why Momentum Really Works" (2017): https://distill.pub/2017/momentum/ (F13).

---

## Ejemplos (español)

Esta carpeta es el corazón del kit. En vez de reglas genéricas o estilos de catálogo, un modelo (o una persona) recibe
presentaciones reales como referencia y aprende de ellas. Cada ejemplo trae su guion (`script.md` en inglés,
`script.es.md` en español), sus figuras con el código que las genera y, en cada diapositiva, un **por qué funciona**
(en el HTML, tecla **E**; en el guion, la línea `@why`). Cuando le pases el kit a un modelo, pásale esta carpeta.

| Carpeta | Qué es | Registro |
|---|---|---|
| [`anscombe/`](anscombe) | Cuatro conjuntos con la misma estadística y formas distintas: grafica antes de resumir. 8 diapositivas. | Sobrio |
| [`exoplanets/`](exoplanets) | Cómo se encuentran planetas que no se ven: la sombra del tránsito y el bamboleo de la estrella. 8 diapositivas, 5 escenas animadas. | Expresivo |

La tabla de recursos de arriba vale igual; los principios en español están en
[`../PRINCIPLES.es.md`](../PRINCIPLES.es.md) y los catálogos en `../docs/*.es.md`.
