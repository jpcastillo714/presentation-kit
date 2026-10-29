[English](../en/charts.md)

# Catálogo de gráficos reconocidos y qué enseñan

Las fuentes se verificaron en octubre de 2026 y cada ficha marca su estado. Sin imágenes ni textos con derechos: solo enlaces y descripciones con palabras propias.

## Cómo leer los estados de verificación

- **VERIFICADO**: se abrió la fuente citada y los datos clave de la ficha salen de ella.
- **PARCIAL**: se abrió al menos una fuente, pero algún dato clave viene de un resumen de búsqueda o de una fuente secundaria. Se indica cuál.
- **NO VERIFICADO**: no se pudo abrir la fuente (bloqueo 403, error de certificado, sitio caído) o el dato solo aparece en resultados de búsqueda. Se deja el enlace para que el lector lo abra.

Un resultado que no abrió no prueba que el dato sea falso. Wikipedia no se usó como fuente.

## Índice y estado

| # | Ficha | Estado |
|---|---|---|
| 1 | [Minard, campaña de Rusia (1869)](#f01) | PARCIAL |
| 2 | [Nightingale, diagrama de áreas polares (1858)](#f02) | PARCIAL |
| 3 | [Snow, mapa del cólera (1854)](#f03) | VERIFICADO |
| 4 | [Playfair, series de tiempo y barras (1786)](#f04) | PARCIAL |
| 5 | [Rosling / Gapminder, burbujas animadas (2006)](#f05) | PARCIAL |
| 6 | [Du Bois, retratos de datos (1900)](#f06) | PARCIAL |
| 7 | [Anscombe, el cuarteto (1973)](#f07) | PARCIAL |
| 8 | [Diagrama de Hertzsprung-Russell (1911-1914)](#f08) | VERIFICADO |
| 9 | [NYT, "Four Ways to Slice" el presupuesto de Obama (2012)](#f09) | VERIFICADO |
| 10 | [FT / Burn-Murdoch, curvas de trayectoria COVID (2020)](#f10) | PARCIAL |
| 11 | [Tufte, múltiplos pequeños y sparklines](#f11) | PARCIAL |
| 12 | [Few, gráfico de bala (2006)](#f12) | VERIFICADO |
| 13 | [Bertin, variables visuales (1967)](#f13) | VERIFICADO |
| 14 | [Tukey, diagrama de caja (1970/1977)](#f14) | VERIFICADO |
| 15 | [Warming stripes, Hawkins (2018)](#f15) | VERIFICADO |
| 16 | [Curva de Keeling (1958 en adelante)](#f16) | PARCIAL |
| 17 | [Fisher / Anderson, datos Iris (1935-1936)](#f17) | PARCIAL |
| 18 | [t-SNE (2008) y su lectura correcta](#f18) | VERIFICADO |
| 19 | [Curvas de escalamiento, Kaplan et al. (2020)](#f19) | VERIFICADO |
| 20 | [Cleveland y McGill, jerarquía de la percepción (1984)](#f20) | PARCIAL |
| 21 | [Rougier et al., diez reglas para mejores figuras (2014)](#f21) | VERIFICADO |
| 22 | [Crameri et al., el mal uso del color (2020)](#f22) | VERIFICADO |
| 23 | [Wilke, *Fundamentals of Data Visualization* (2019)](#f23) | VERIFICADO |
| 24 | [Diagrama H-R de Gaia (2018)](#f24) | VERIFICADO |
| 25 | [Pepe et al., figuras de ESPRESSO (2021)](#f25) | VERIFICADO |
| 26 | [Cairo, *The Truthful Art* y *How Charts Lie*](#cairo) | VERIFICADO (metadatos) |

---

<a id="f01"></a>
## 1. Minard: pérdidas del ejército francés en Rusia

- **Autor y año:** Charles Joseph Minard, 1869 (publicado en París; el título original habla de las "pérdidas sucesivas en hombres" del ejército francés en la campaña de Rusia 1812-1813).
- **Estado:** PARCIAL.
- **Fuentes:**
  - [Science Norway, explicación de las variables, fuentes y reservas](https://www.sciencenorway.no/blog-blog-from-numbers-to-graphics-statistics/charles-joseph-minards-map-of-napoleons-flawed-russian-campaign-an-ever-current-classic/1618695): abierta y leída.
  - [Escuela de Puentes y Caminos (ENPC), patrimonio digital](https://heritage.ecoledesponts.fr/enpc/): el enlace directo al documento redirigió a este portal, que no se abrió. La búsqueda indica que el original está allí (signatura ENPC01_Fol_10975): NO VERIFICADO.
  - [Friendly (2002), "Visions and Re-visions of Charles Joseph Minard"](https://www.datavis.ca/papers/vita/Friendly02Minard.html): el servidor rechazó la conexión; solo se vio el resumen en la búsqueda. NO VERIFICADO.
- **Qué problema resuelve:** Cuenta en una sola imagen cómo un ejército de cientos de miles de hombres se redujo a una fracción. Une el tamaño del ejército (grosor de la banda), el recorrido sobre el mapa, la dirección de ida y vuelta, el tiempo y, en la retirada, la temperatura.
- **Principio de diseño:** Muchas variables en un solo lienzo sin perder legibilidad, y datos que cuentan la historia sin adornos. Tufte la ha llamado, según Science Norway que cita *Beautiful Evidence* (2006), "probably the best graphic that has ever been made". Friendly atribuye a Tufte (1983) una frase equivalente.
- **Aplicación a ciencia y ML:** Un diagrama de flujo de muestras en un pipeline (cuántas entran, cuántas se pierden en cada filtro, por qué). Útil para describir pérdidas de datos, atrición de participantes o descartes de un catálogo astronómico paso a paso.
- **Controversias y matices:**
  - Science Norway advierte que el mapa muestra que temperatura y muertes coinciden, pero no prueba causalidad; también cita una revisión de 2017 que sostiene que el hambre y las escaramuzas pesaron tanto como el frío.
  - La lectura "antibélica" es de Tufte, no una afirmación del propio mapa.
  - Según Friendly (resumen de búsqueda, no abierto), Minard no inventó los mapas de flujo: el antecedente sería Henry Drury Harness. NO VERIFICADO.
  - La fecha del "mapa de 1869" y la de la campaña (1812) son cosas distintas; una página de Friendly dice 1815 en una frase, lo que parece un error de esa página.

<a id="f02"></a>
## 2. Nightingale: diagrama de áreas polares ("rosa")

- **Autora y año:** Florence Nightingale, 1858 (en *Notes on Matters Affecting the Health, Efficiency and Hospital Administration of the British Army*); una versión en 1859 en el libro de Harriet Martineau *England and Her Soldiers*.
- **Estado:** PARCIAL. No se pudo abrir ninguna fuente primaria ni institucional; todo viene de resultados de búsqueda.
- **Fuentes (enlaces, no abiertos):**
  - [Colección David Rumsey, "Diagram of the Causes of Mortality"](https://luna.lunacommons.org/luna/servlet/detail/RUMSEY~8~1~327826~90096398:Diagram-of-the-Causes-of-Mortality-): devolvió una pantalla de verificación de acceso.
  - [Museo Florence Nightingale](https://www.florence-nightingale.co.uk/?p=9610): devolvió 404 al abrirlo.
  - [Friendly y Wall, "Nightingale radiant"](https://datavis.ca/papers/Nightingale-radiant.pdf): conexión rechazada.
- **Qué problema resuelve:** Mostrar a un público no técnico (políticos, oficiales) que la mayoría de las muertes de soldados en Crimea venía de enfermedades evitables, no de heridas de guerra, y cómo bajaron al mejorar las condiciones sanitarias. Cada cuña es un mes y el área de cada color es una causa de muerte.
- **Principio de diseño:** Un gráfico como argumento para persuadir. Atención: en estos diagramas el *área* codifica el valor, no el radio; hacerlo mal exagera las diferencias. Sobre percepción de áreas ver [ficha 20](#f20).
- **Aplicación a ciencia y ML:** Series con ciclo estacional (por ejemplo, fallos por mes de un instrumento). Hoy suele ser mejor un gráfico de líneas o barras por mes, porque comparar áreas es menos preciso.
- **Controversias y matices:**
  - Los resúmenes de búsqueda dicen que ella misma no lo llamó "coxcomb" ni "rosa", y que los historiadores prefieren "diagrama de áreas polares".
  - Se discute si fue la primera: según esos resúmenes, ella había visto un diagrama polar en un informe de William Farr de 1852, y Farr y su equipo la ayudaron con los datos. NO VERIFICADO con la fuente abierta.
  - Para el reparto de crédito (Nightingale, Farr, otros) conviene leer a Friendly y Wall antes de afirmar "primera" o "inventora".

<a id="f03"></a>
## 3. Snow: mapa del brote de cólera en Soho

- **Autor y año:** John Snow, 1854 (publicado en la segunda edición de *On the Mode of Communication of Cholera*, 1855).
- **Estado:** VERIFICADO.
- **Fuentes (abiertas):**
  - [Universidad de California en Los Ángeles (UCLA), sitio sobre Snow: el brote de Broad Street](https://epi-snow.ph.ucla.edu/Stream2_BSPoutbreak_e.html)
  - [Museo de Londres, "John Snow: Cholera & the Broad Street pump"](https://www.londonmuseum.org.uk/collections/london-stories/john-snow-cholera-broad-street-pump/)
- **Qué problema resuelve:** Responder dónde vive el riesgo. Al marcar cada muerte en su dirección, los casos se agrupan alrededor de la bomba de agua de Broad Street.
- **Principio de diseño:** Un mapa sirve de evidencia cuando se ve a simple vista el patrón que una tabla ocultaría; y la ubicación de los puntos, no su adorno, es el mensaje.
- **Aplicación a ciencia y ML:** Mapas de errores: dónde falla un modelo (por clase, por región del cielo, por tipo de objeto). El mismo método: poner las fallas sobre el espacio donde importa y buscar agrupaciones.
- **Controversias y matices:**
  - El brote ya declinaba antes de quitar la manilla (7-8 sept.); el sitio de UCLA muestra que Whitehead lo documentó y concluyó que quitar la manilla no terminó el brote, aunque quizá evitó uno nuevo.
  - La explicación de Snow fue rechazada por el comité médico de la época, que favorecía la teoría del miasma; la aceptación llegó años después (Museo de Londres indica 1866).
  - El reverendo Henry Whitehead empezó como escéptico y aportó evidencia clave (incluido el probable primer caso).
  - Los conteos de muertos varían según la fuente (rango de ~400 a ~700 en los resultados de búsqueda); no cites una cifra sin decir de dónde sale.
  - El mapa no fue la única prueba: Snow también comparó empresas de agua. Eso no está en las dos páginas abiertas: NO VERIFICADO aquí.

<a id="f04"></a>
## 4. Playfair: líneas y barras para datos económicos

- **Autor y año:** William Playfair, 1786, *The Commercial and Political Atlas* (el gráfico circular aparece en su *Statistical Breviary* de 1801).
- **Estado:** PARCIAL.
- **Fuentes:**
  - [Biblioteca de la Universidad de Princeton, mapas temáticos](https://static-prod.lib.princeton.edu/visual_materials/maps/websites/thematic-maps/quantitative/sociology-economics/sociology-economics.html): apareció en la búsqueda; al abrirla dio error de certificado. NO VERIFICADO directamente.
  - [Tufte, *The Visual Display of Quantitative Information*](https://www.edwardtufte.com/book/the-visual-display-of-quantitative-information/): abierta; confirma que la segunda edición incluye reproducciones de Playfair en color.
  - [American Scientist, "A visionary and a scoundrel"](https://www.americanscientist.org/article/a-visionary-and-a-scoundrel): devolvió 503.
- **Qué problema resuelve:** Reemplazar tablas de cifras por una forma que muestra tendencia y diferencia de un vistazo. Según los resúmenes de búsqueda, el *Atlas* tenía unos 43 gráficos de series de tiempo y un gráfico de barras (el comercio de Escocia).
- **Principio de diseño:** El tiempo va en el eje horizontal y el valor en el vertical; dos series se comparan por la separación entre líneas. Es la base de casi todo lo que hoy llamamos curva de entrenamiento.
- **Aplicación a ciencia y ML:** Curvas de pérdida de entrenamiento y validación, métricas por época, comparación de dos modelos en el tiempo. La brecha entre dos líneas (entrenamiento vs. validación) comunica sobreajuste.
- **Controversias y matices:** "Inventor" del gráfico de líneas y de barras es la atribución habitual, pero otros ya habían graficado series antes; no se pudieron verificar antecedentes con una fuente abierta. Evita escribir "el primero" sin esa comprobación.

<a id="f05"></a>
## 5. Rosling / Gapminder: gráfico de burbujas animado

- **Autores y año:** Hans Rosling, Ola Rosling y Anna Rosling Rönnlund; Gapminder se fundó en Estocolmo en 2005; la charla TED "The best stats you've ever seen" es de 2006.
- **Estado:** PARCIAL. La historia está confirmada; no se pudo confirmar con fuente abierta qué variable va en cada eje (lo habitual es ingreso vs. esperanza de vida, tamaño por población, pero eso NO VERIFICADO aquí).
- **Fuentes (abiertas):**
  - [Gapminder, historia](https://www.gapminder.org/about/about-gapminder/history/): fundación, fundadores, Trendalyzer y compra por Google en 2007.
  - [TED2006, Hans Rosling](https://www.ted.com/talks/hans_rosling_the_best_stats_you_ve_ever_seen): confirma charla de TED2006.
- **Qué problema resuelve:** Desmontar ideas erróneas sobre el mundo mostrando, año por año, cómo se mueven muchos países a la vez.
- **Principio de diseño:** Animación con propósito: el tiempo se vuelve movimiento, y el ojo sigue la trayectoria. También el uso de muchas dimensiones (posición en dos ejes, tamaño, color) en una sola vista.
- **Aplicación a ciencia y ML:** Seguimiento de muchos experimentos o modelos a lo largo del entrenamiento (pérdida vs. tiempo, tamaño del punto por número de parámetros). En un informe impreso la animación no sirve: usar cuadros fijos (ver [ficha 11](#f11)).
- **Controversias y matices:** La animación es potente en una charla y mala para leer valores exactos; los gráficos de burbujas obligan a comparar áreas (ver [ficha 20](#f20)).

<a id="f06"></a>
## 6. Du Bois: retratos de datos de Georgia y de la población afroamericana

- **Autor y año:** W. E. B. Du Bois y su equipo de la Universidad de Atlanta, para la Exposición Universal de París de 1900.
- **Estado:** PARCIAL. La Library of Congress sigue sin abrir (pide verificación humana), pero su blog y una reseña académica confirman lo principal: son **63** retratos de datos, 36 de la serie «The Georgia Negro: A Social Study» y 27 de la serie nacional, en la colección «African American Photographs Assembled for 1900 Paris Exposition». Fuentes: https://blogs.loc.gov/picturethis/2020/04/african-americans-at-the-turn-of-the-20th-century-a-graphic-visualization/ y la reseña de Friedly en *Cartographic Perspectives* 93, DOI 10.14714/CP93.1555. Las medallas en París siguen sin verificar.
- **Fuentes (no abiertas):**
  - [Library of Congress, colección de gráficos de Du Bois](https://www.loc.gov/pictures/collection/anedub/background.html): 403.
  - [Library of Congress, exposición "Du Bois data portraits"](https://www.loc.gov/exhibits/du-bois-data-portraits/): 404.
  - Resultados de búsqueda (WBUR, WABE, Hyperallergic, Project MUSE sobre el libro de Battle-Baptiste y Rusert) coinciden en que se hicieron unas 60 láminas y que ganaron medallas en París. No se abrieron.
- **Qué problema resuelve:** Mostrar con datos propios (ocupaciones, tierras, educación) la vida de la población negra en Estados Unidos frente a los estereotipos de la época.
- **Principio de diseño:** El diseño al servicio de un argumento y de una audiencia concreta, con color y forma fuera de la convención.
- **Aplicación a ciencia y ML:** Datos propios para contradecir una creencia: en resultados de un modelo, mostrar el subgrupo donde falla frente a la cifra promedio que se suele citar.
- **Controversias y matices:** Pendiente confirmar con la fuente cuántas láminas sobreviven y cuáles son de Georgia vs. del país (nota anterior al reparto 36/27 indicado en el estado).

<a id="f07"></a>
## 7. Anscombe: el cuarteto

- **Autor y año:** Francis J. Anscombe, 1973, "Graphs in Statistical Analysis", *The American Statistician* 27(1), 17-21.
- **Estado:** PARCIAL. Metadatos VERIFICADOS por Crossref (*The American Statistician* 27(1), 17–21, febrero de 1973); el contenido sigue sin leerse en el original, que es de pago.
- **Fuentes:**
  - [Eagereyes, "Anscombe's Quartet"](https://eagereyes.org/criticism/anscombes-quartet): abierta y leída; describe el cuarteto y su propósito.
  - Referencia del artículo: DOI 10.1080/00031305.1973.10478966 (no abierto).
- **Qué problema resuelve:** Cuatro conjuntos con casi las mismas medias, varianzas, correlación y recta de regresión que, al graficarse, son muy distintos (uno lineal, uno curvo, uno con un dato atípico, uno donde un solo punto crea la correlación).
- **Principio de diseño:** Los resúmenes numéricos pueden ocultar la estructura; hay que graficar antes de concluir. Eagereyes cita su idea de que una computadora debe hacer "both calculations and graphs".
- **Aplicación a ciencia y ML:** Antes de reportar una métrica agregada (R², exactitud), mostrar la dispersión de residuos o de predicciones frente a verdad. Para un ajuste astronómico, graficar siempre los residuos.
- **Controversias y matices:** El artículo es opinado, con afirmaciones fuertes sin respaldo (según Eagereyes). No se sabe cómo Anscombe construyó los datos (resumen de búsqueda de EPFL). Existe una versión moderna, el "Datasaurus Dozen" (2017), que no se abrió.

<a id="f08"></a>
## 8. Diagrama de Hertzsprung-Russell (astronomía)

- **Autores y año:** Ejnar Hertzsprung (diagramas de color y magnitud, 1911; Pléyades, 1913) y Henry Norris Russell (versión gráfica presentada el 30-dic-1913, publicada en *Nature* en mayo de 1914).
- **Estado:** VERIFICADO.
- **Fuente (abierta):** [Linda Hall Library, "Ejnar Hertzsprung"](https://www.lindahall.org/about/news/scientist-of-the-day/ejnar-hertzsprung/).
- **Qué problema resuelve:** Ordenar las estrellas: al poner luminosidad en vertical y tipo espectral (color) en horizontal, las estrellas no se reparten al azar sino en bandas (secuencia principal, gigantes, enanas blancas).
- **Principio de diseño:** Escoger los dos ejes correctos hace aparecer la estructura que ninguna tabla muestra. Un buen gráfico es una hipótesis visible.
- **Aplicación a ciencia y ML:** Es el modelo de "diagrama de color-magnitud" que todo astrónomo usa para cúmulos y catálogos (por ejemplo con Gaia). En ML, el análogo es graficar dos descriptores y ver si las clases se separan antes de entrenar.
- **Controversias y matices:** Linda Hall se contradice: el pie de foto dice que el de *Nature* 1914 es el primero impreso; el texto dice que el de Hertzsprung de 1913 es "realmente" el primero. Resultados de búsqueda mencionan trabajos de 1908 y la fecha de la presentación de Russell ante la Real Sociedad Astronómica con versiones distintas: NO VERIFICADO. Los ejes originales son tipo espectral y luminosidad; las versiones modernas usan color y magnitud absoluta, y el eje de temperatura suele invertirse por convención.

<a id="f09"></a>
## 9. The New York Times: "Four Ways to Slice Obama's 2013 Budget Proposal"

- **Autores y año:** Shan Carter, *The New York Times*, febrero de 2012 (la página dice «Updated February 12, 2012»; el presupuesto es el del año fiscal 2013).
- **Estado:** VERIFICADO en https://archive.nytimes.com/www.nytimes.com/interactive/2012/02/13/us/politics/2013-budget-proposal-graphic.html. Las cuatro vistas son pestañas: todo el gasto, tipos de gasto (obligatorio frente a discrecional), cambios respecto de 2012 y totales por departamento. Cada partida es un círculo con área proporcional al gasto y color según el cambio. El diseño muestra bien la reorganización según la pregunta y, a la vez, la limitación de codificar con áreas ([ficha 20](#f20)). Los campos de abajo marcados «antes de la verificación» se escribieron sin haber visto el gráfico y se mantienen como registro.
- **Fuentes:**
  - [El gráfico en nytimes.com](https://www.nytimes.com/interactive/2012/02/13/us/politics/2013-budget-proposal-graphic.html): la herramienta de lectura no permite acceder a ese sitio (por eso se verificó en la copia de archive.nytimes.com). El enlace salió de una entrada de blog de la Universidad de Santa Clara que no se abrió.
  - [FlowingData](https://flowingdata.com): según la búsqueda, tiene una reseña del 15-feb-2012; no se abrió.
- **Qué problema resuelve (antes de la verificación, según resultados de búsqueda):** Mostrar el mismo presupuesto desde cuatro ángulos distintos.
- **Principio de diseño:** El mismo conjunto de datos reorganizado de varias formas permite responder preguntas distintas. Es un uso de vistas coordinadas.
- **Aplicación a ciencia y ML:** Presentar un mismo resultado de modelo cortado por clase, por tamaño de muestra, por tiempo y por región.
- **Controversias y matices:** Ver el comentario de diseño en el estado.

<a id="f10"></a>
## 10. Financial Times / Burn-Murdoch: curvas de trayectoria de la COVID-19

- **Autor y año:** John Burn-Murdoch y el equipo de datos del FT, desde marzo de 2020.
- **Estado:** PARCIAL.
- **Fuentes:**
  - [Stamen, "Visualizing the pulse of a pandemic: a year of COVID line charts"](https://stamen.com/visualizing-the-pulse-of-a-pandemic-a-year-of-covid-line-charts-52368b4a22b0/): abierta y leída.
  - [Foro Económico Mundial, entrevista sobre gráficos del coronavirus](https://www.weforum.org/stories/health-and-healthcare-systems/data-visualization-5-questions-coronavirus/): 403; solo se vio el resumen de búsqueda.
- **Qué problema resuelve:** Comparar países que estaban en distinta fase de la epidemia: alinear cada país desde un punto común (según resúmenes de búsqueda, el día en que superó cierto número de casos) y usar escala logarítmica para ver el ritmo de crecimiento.
- **Principio de diseño:** Elegir el eje correcto (tiempo desde un evento, no fecha de calendario) hace comparables cosas que no lo son. Stamen señala que el defecto por omisión de las gráficas pasó de acumulados a casos semanales nuevos: "As the story shifts, the charts shift."
- **Aplicación a ciencia y ML:** Curvas de aprendizaje y de escalamiento en escala log-log (ver [ficha 19](#f19)); alinear corridas de entrenamiento por paso o por cómputo y no por fecha.
- **Controversias y matices:** Stamen indica que hubo un debate fuerte sobre si la escala logarítmica la entiende el público general y que un eje exponencial puede ocultar la gravedad de un nuevo repunte. Eso es una advertencia directa para cualquiera que use log en una presentación.

<a id="f11"></a>
## 11. Tufte: múltiplos pequeños y sparklines

- **Autor y año:** Edward Tufte; *The Visual Display of Quantitative Information* (1983, 2.ª ed. 2001), *Envisioning Information* (1990) para los múltiplos pequeños y *Beautiful Evidence* (2006) para los sparklines.
- **Estado:** PARCIAL.
- **Fuentes:**
  - [Tufte, página del libro](https://www.edwardtufte.com/book/the-visual-display-of-quantitative-information/): abierta; lista el diseño de múltiples pequeños, la razón datos-tinta y la "detección del engaño gráfico".
  - [Tufte, "Sparkline theory and practice"](https://www.edwardtufte.com/notebook/sparkline-theory-and-practice-edward-tufte/): abierta y leída; define el sparkline como "a small intense, simple, word-sized graphic with typographic resolution".
  - Para los múltiplos pequeños solo hay fuentes secundarias de búsqueda que citan a Tufte (1990, p. 67): NO VERIFICADO con el libro.
- **Qué problema resuelven:** Comparar muchas cosas sin ensuciar: un mismo gráfico repetido en cuadros pequeños (múltiplos pequeños) o gráficos del tamaño de una palabra dentro del texto o de una tabla (sparklines).
- **Principio de diseño:** Maximizar datos y minimizar diseño; comparar poniendo cosas lado a lado y no una tras otra. La página de sparklines resume su lema como máximo de datos, mínimo de diseño.
- **Aplicación a ciencia y ML:** Una cuadrícula de pequeñas curvas de aprendizaje (una por semilla, una por modelo) con los mismos ejes; sparklines de la métrica por época dentro de una tabla de resultados.
- **Controversias y matices:** La idea de "razón datos-tinta" a veces se lleva al extremo y produce gráficos ilegibles; la propia página de sparklines recomienda un aspecto ni plano ni puntiagudo y aprovechar la resolución del papel, que la pantalla no iguala.

<a id="f12"></a>
## 12. Few: gráfico de bala (bullet graph)

- **Autor y año:** Stephen Few, 2006 (especificación revisada el 10-oct-2013).
- **Estado:** VERIFICADO.
- **Fuente (abierta y leída completa):** [Perceptual Edge, "Bullet Graph Design Specification"](https://www.perceptualedge.com/articles/misc/Bullet_Graph_Design_Spec.pdf).
- **Qué problema resuelve:** Reemplaza los relojes y medidores de los tableros por una barra lineal que muestra una medida principal, una o dos comparaciones (meta, año anterior) y rangos cualitativos (bueno, regular, malo).
- **Principio de diseño:** Un diseño lineal ocupa menos espacio y se lee con más eficiencia que uno radial. Los rangos se codifican con intensidades de un solo tono (para quienes no distinguen colores) y se limitan a cinco como máximo, idealmente tres.
- **Aplicación a ciencia y ML:** Mostrar una métrica del modelo contra su línea base y contra el umbral de aceptación definido de antemano; ideal para tableros de monitoreo.
- **Controversias y matices:** Es una guía de diseño del propio autor, no un resultado experimental. Nada en el documento prueba que sea mejor que un medidor con datos propios; la afirmación se apoya en el argumento de Few y en la percepción (ver [ficha 20](#f20)).

<a id="f13"></a>
## 13. Bertin: las variables visuales

- **Autor y año:** Jacques Bertin, *Sémiologie graphique*, 1967 (edición inglesa de Esri Press, 2010).
- **Estado:** VERIFICADO (descripción editorial).
- **Fuente (abierta):** [Esri Press, *Semiology of Graphics*](https://www.esri.com/en-us/esri-press/browse/semiology-of-graphics-diagrams-networks-maps).
- **Qué problema resuelve:** Da un vocabulario para decidir cómo representar cada dato: qué propiedad visual (la página lista forma, orientación, color, textura, volumen y tamaño) comunica cada tipo de información.
- **Principio de diseño:** Las propiedades visuales no son intercambiables: cada una sirve para unas relaciones y no para otras. La página no usa el término "variables visuales" ni detalla cuáles sirven para qué; ese contenido está en el libro.
- **Aplicación a ciencia y ML:** Antes de colorear un gráfico, decidir si la variable es categórica (matiz) u ordenada (intensidad). Evita, por ejemplo, usar arcoíris para una magnitud continua.
- **Controversias y matices:** Es un marco teórico basado en la experiencia de un cartógrafo; la evidencia experimental sobre qué canal es más preciso vino después (ver [ficha 20](#f20)).

<a id="f14"></a>
## 14. Tukey: el diagrama de caja

- **Autor y año:** John W. Tukey; versión preliminar en 1970 y libro *Exploratory Data Analysis*, 1977.
- **Estado:** VERIFICADO.
- **Fuente (abierta y leída):** [Wickham y Stryjewski, "40 years of boxplots"](https://vita.had.co.nz/papers/boxplots.pdf) (2011).
- **Qué problema resuelve:** Resumir y comparar distribuciones de muchos grupos en poco espacio, con estadísticos robustos (mediana, cuartiles, valores adyacentes a los límites a 1,5 veces el rango intercuartílico, y puntos atípicos).
- **Principio de diseño:** Mostrar la distribución, no solo el promedio. Un resumen compacto sin parámetros de ajuste.
- **Aplicación a ciencia y ML:** Comparar la exactitud de un modelo entre semillas o entre pliegues de validación cruzada, o la distribución de un residuo por clase.
- **Controversias y matices:** Según Wickham, la forma básica (barra de rango) ya existía en los años 50 (Spear, 1952); la contribución de Tukey fue elegir los estadísticos. Su caja esconde la forma de la distribución (por eso hay variantes como violín); con pocas observaciones por grupo, es mejor mostrar los puntos.

<a id="f15"></a>
## 15. Warming stripes (franjas del calentamiento)

- **Autor y año:** Ed Hawkins, Universidad de Reading, 2018.
- **Estado:** VERIFICADO.
- **Fuentes (abiertas):**
  - [Universidad de Reading, "What are the stripes?"](https://www.reading.ac.uk/en/planet/climate-resources/climate-stripes)
  - [Organización Meteorológica Mundial, "Warming Stripes"](https://public.wmo.int/node/25831)
- **Qué problema resuelve:** Comunicar el aumento de la temperatura a quien no lee ejes ni cifras. Cada franja es un año, azul si fue más frío y rojo si fue más cálido que el promedio de 1961-2010.
- **Principio de diseño:** Reducir al mínimo: sin texto, sin números, sin ejes. La página de Reading lo resume como "No words. No numbers. No graphs."
- **Aplicación a ciencia y ML:** Para público general, no para ciencia entre pares. Sirve de ejemplo de que a veces conviene quitar elementos. En un informe técnico, no sustituye al gráfico con ejes.
- **Controversias y matices:** Es un gráfico de impacto, no de lectura cuantitativa. Resultados de búsqueda dicen que el color es una decisión estética de Hawkins y que la escala se ajusta por región; no se abrieron. NO VERIFICADO el dato de que la idea nació de una manta tejida.

<a id="f16"></a>
## 16. La curva de Keeling

- **Autor y año:** Charles David Keeling, mediciones de CO₂ en Mauna Loa desde 1958.
- **Estado:** PARCIAL.
- **Fuente (abierta):** [Scripps Institution of Oceanography, Keeling Curve](https://keelingcurve.ucsd.edu/): confirma que es un registro diario de CO₂ atmosférico, con Mauna Loa como sitio de medición y registro desde 1958; ofrece vistas de una semana a 70 millones de años. La página no explica el patrón estacional: ese dato, que es conocido, queda NO VERIFICADO aquí. También existe la [página de tendencias de NOAA](https://gml.noaa.gov/ccgg/trends/history.html), que se descargó pero no se leyó.
- **Qué problema resuelve:** Muestra dos escalas a la vez: una tendencia de largo plazo que sube y un ciclo anual de subidas y bajadas superpuesto.
- **Principio de diseño:** Una serie larga y limpia, con una sola línea, puede ser más persuasiva que cualquier adorno. Enseña también a elegir el rango de tiempo según la pregunta (la página ofrece varios).
- **Aplicación a ciencia y ML:** Series temporales de un instrumento o de una métrica de monitoreo: separar tendencia y ciclo, y mostrar la escala completa para que se vea lo que importa.
- **Controversias y matices:** Una sola línea no demuestra causa; la medición es un solo sitio (aunque la red global la corrobora, afirmación que no se verificó).

<a id="f17"></a>
## 17. Fisher y Anderson: los datos Iris

- **Autores y año:** Edgar Anderson (1935, medición) y Ronald A. Fisher (1936, análisis), "The use of multiple measurements in taxonomic problems", *Annals of Eugenics* 7(2), 179-188.
- **Estado:** PARCIAL.
- **Fuentes (abiertas):**
  - [Repositorio Rothamsted, registro del artículo (acceso abierto, CC BY 4.0)](https://repository.rothamsted.ac.uk/item/9914w/the-use-of-multiple-measurements-in-taxonomic-problems)
  - [Documentación de R, conjunto iris](https://search.r-project.org/CRAN/refmans/datasets/html/iris.html): 150 flores, tres especies, cuatro medidas en cm; Anderson (1935) recogió los datos.
- **Qué problema resuelve:** Separar especies con varias medidas a la vez. La matriz de dispersión (todos los pares de variables) es el gráfico clásico con estos datos.
- **Principio de diseño:** Ver todas las parejas de variables juntas revela cuáles separan clases y cuáles son redundantes.
- **Aplicación a ciencia y ML:** Primer vistazo a un conjunto con pocas variables antes de entrenar; en ML con muchas variables se reemplaza por reducción de dimensión (ver [ficha 18](#f18)).
- **Controversias y matices:**
  - La atribución de la *matriz de dispersión* a Fisher o a Anderson NO VERIFICADO: las fuentes abiertas solo prueban el origen de los datos, no del gráfico. Una pista (Kleinman, 2002 sobre los gráficos de Anderson) no se abrió.
  - Fisher fue figura central de la eugenesia, y la revista donde publicó se llamaba *Annals of Eugenics*. Es parte honesta de la historia de este conjunto; no la omitas si lo presentas en una charla sobre historia de la estadística.
  - Los datos son demasiado fáciles para evaluar un método (las clases casi se separan solas).

<a id="f18"></a>
## 18. t-SNE (y UMAP) en gráficos de incrustaciones

- **Autores y año:** Laurens van der Maaten y Geoffrey Hinton, 2008, *Journal of Machine Learning Research* 9, 2579-2605. Guía de lectura: Wattenberg, Viégas y Johnson, Distill, 2016.
- **Estado:** VERIFICADO.
- **Fuentes (abiertas):**
  - [JMLR, "Visualizing Data using t-SNE"](https://www.jmlr.org/papers/v9/vandermaaten08a.html)
  - [Distill, "How to Use t-SNE Effectively"](https://distill.pub/2016/misread-tsne/)
  - [arXiv, UMAP (McInnes y colaboradores)](https://arxiv.org/abs/1802.03426): abierta, solo se vieron el título y los metadatos; no se leyó.
- **Qué problema resuelve:** Dibujar en 2D o 3D datos de muchas dimensiones (por ejemplo vectores de un modelo) de modo que lo cercano quede cerca.
- **Principio de diseño:** La visualización debe acompañarse de una advertencia de lectura. Distill muestra que "Cluster sizes in a t-SNE plot mean nothing", que las distancias entre grupos pueden no significar nada y que el ruido aleatorio puede parecer estructura; recomienda probar varias perplejidades.
- **Aplicación a ciencia y ML:** Sirve para explorar incrustaciones (de galaxias, de textos, de capas de una red). Nunca presentar un t-SNE como prueba de que dos grupos son distintos: es una pista que se debe contrastar con una métrica cuantitativa.
- **Controversias y matices:** El parámetro "perplejidad" cambia mucho el dibujo; el artículo original dice que el método es bastante robusto entre 5 y 50, y Distill matiza que la historia es más compleja. Para UMAP, no se pudieron contrastar las críticas que se le hacen a las distancias globales: NO VERIFICADO.

<a id="f19"></a>
## 19. Curvas de escalamiento y de aprendizaje (ML)

- **Autores y año:** Jared Kaplan y otros nueve, 2020, "Scaling Laws for Neural Language Models", arXiv 2001.08361 (enviado el 23-ene-2020).
- **Estado:** VERIFICADO (resumen y metadatos).
- **Fuente (abierta):** [arXiv:2001.08361](https://arxiv.org/abs/2001.08361)
- **Qué problema resuelve:** Mostrar cómo la pérdida baja como una ley de potencia con el tamaño del modelo, el tamaño de los datos y el cómputo, con tendencias que abarcan más de siete órdenes de magnitud, según el resumen. En ejes log-log eso aparece como una recta.
- **Principio de diseño:** Elegir escalas (log-log) que conviertan una relación de potencia en una recta; una recta permite extrapolar y comparar de un vistazo.
- **Aplicación a ciencia y ML:** Para planificar cuánto entrenar y cuántos datos reunir. Cada curva de aprendizaje debe mostrar entrenamiento y validación, y la escala debe estar indicada de forma explícita (ver advertencia de la [ficha 10](#f10) sobre escalas logarítmicas).
- **Controversias y matices:** Solo se leyó el resumen. No se evalúa si las leyes se mantienen más allá del rango estudiado; el propio resumen limita su alcance a modelos de lenguaje con pérdida de entropía cruzada.

<a id="f20"></a>
## 20. Cleveland y McGill: qué tan bien leemos cada codificación

- **Autores y año:** William S. Cleveland y Robert McGill, 1984, "Graphical Perception: Theory, Experimentation, and Application to the Development of Graphical Methods", *Journal of the American Statistical Association* 79(387). DOI 10.1080/01621459.1984.10478080.
- **Estado:** PARCIAL. Metadatos y resumen VERIFICADOS (*JASA* 79(387), **531–554**, septiembre de 1984; Crossref y OpenAlex): el artículo ordena tareas perceptivas por exactitud y propone usar las más altas, con gráficos de puntos en vez de tortas. El orden detallado sale de diapositivas de un curso de Cornell, no del artículo. La réplica de Heer y Bostock (CHI 2010, pp. 203–212, DOI 10.1145/1753326.1753357; PDF de los autores: https://idl.cs.washington.edu/files/2010-MTurk-CHI.pdf) mantiene el orden general y la ventaja de la posición sobre la longitud, pero en sus datos **el ángulo no fue peor que la longitud** y el área de círculos fue peor que el ángulo.
- **Fuentes (no abiertas):**
  - [DOI / Taylor & Francis](https://www.tandfonline.com/doi/abs/10.1080/01621459.1984.10478080): 403.
  - Resumen de búsqueda de apoyo: [diapositivas de Cornell](https://info3312.infosci.cornell.edu/slides/04-graphical-perception.html), sin abrir.
- **Qué problema resuelve:** Ordenar las tareas perceptivas (posición, longitud, ángulo, área, color, etc.) por la exactitud con que las personas leen cantidades.
- **Principio de diseño:** Según los resúmenes: diez tareas elementales; la posición sobre una escala común es la más exacta y el sombreado o la saturación de color, la menos; conviene usar las tareas más altas de la jerarquía.
- **Aplicación a ciencia y ML:** Es la razón de peso para preferir puntos o barras alineadas sobre círculos, burbujas o gráficos circulares cuando hay que comparar valores.
- **Controversias y matices:** Los resúmenes de búsqueda indican que hubo réplicas en línea (Heer y Bostock, 2010) con resultados parecidos y que una réplica táctil de 2023 no sostuvo el orden. NO VERIFICADO con la fuente.

<a id="f21"></a>
## 21. Rougier, Droettboom y Bourne: diez reglas para mejores figuras (2014)

- **Autores y año:** Nicolas P. Rougier, Michael Droettboom y Philip E. Bourne, «Ten Simple Rules for Better Figures», *PLOS Computational Biology* 10(9), e1003833, 11-sep-2014. DOI 10.1371/journal.pcbi.1003833. Licencia CC0.
- **Estado:** VERIFICADO.
- **Fuentes (abiertas):** [PLOS](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003833); el código de sus figuras está en https://github.com/rougier/ten-rules
- **Qué problema resuelve:** figuras científicas que salen con los valores por defecto del software y no dicen nada.
- **Principio de diseño:** conocer al público, tener un mensaje, adaptar la figura al medio (artículo, póster o diapositiva), no confiar en los valores por defecto, usar el color con intención, no engañar, evitar el adorno.
- **Aplicación a ciencia y ML:** es la referencia más directa para figuras hechas con matplotlib; dos de sus autores vienen de ese entorno. «Adaptar al medio» significa que la figura del informe no es la de la diapositiva: en la diapositiva, letra más grande y menos paneles.
- **Controversias y matices:** son reglas de experiencia, no experimentos.

<a id="f22"></a>
## 22. Crameri, Shephard y Heron: el mal uso del color en la ciencia (2020)

- **Autores y año:** Fabio Crameri, Grace E. Shephard y Philip J. Heron, «The misuse of colour in science communication», *Nature Communications* 11, 5444, 28-oct-2020. DOI 10.1038/s41467-020-19160-7. Licencia CC BY.
- **Estado:** VERIFICADO (por Crossref y Europe PMC, PMC7595127).
- **Qué problema resuelve:** las escalas arcoíris y rojo-verde distorsionan los datos (sus gradientes no son parejos, así que inventan bordes) y son ilegibles para quienes no distinguen colores.
- **Principio de diseño:** usar escalas de color perceptualmente uniformes y accesibles; elegir secuencial, divergente o categórica según el dato.
- **Aplicación a ciencia y ML:** espectros, mapas del cielo, matrices de confusión, mapas de calor de series temporales. En matplotlib: `viridis`, `cividis` o las escalas de Crameri (paquete `cmcrameri`), nunca `jet`.
- **Controversias y matices:** algunas comunidades mantienen el arcoíris por costumbre y porque permite leer valores con una leyenda discreta; el artículo sostiene que el costo en distorsión y accesibilidad es mayor.

<a id="f23"></a>
## 23. Wilke: *Fundamentals of Data Visualization* (2019)

- **Autor y año:** Claus O. Wilke, O'Reilly Media, 2019. Versión libre del manuscrito en https://clauswilke.com/dataviz/ (CC BY-NC-ND 4.0).
- **Estado:** VERIFICADO.
- **Qué problema resuelve:** decidir qué gráfico usar según la pregunta (cantidades, distribuciones, proporciones, relaciones, incertidumbre).
- **Principio de diseño:** la forma sale de la pregunta; capítulos específicos sobre escalas de color, tinta proporcional, puntos superpuestos, figuras de varios paneles y cómo mostrar la incertidumbre.
- **Aplicación a ciencia y ML:** la consulta rápida cuando no se sabe qué gráfico conviene; gratis y por capítulos.
- **Controversias y matices:** está pensado para figuras estáticas (escrito con R y ggplot2); los principios se trasladan a matplotlib sin problema.

<a id="f24"></a>
## 24. El diagrama de Hertzsprung-Russell de Gaia (2018)

- **Autores y año:** Gaia Collaboration, Babusiaux et al., «Gaia Data Release 2: Observational Hertzsprung-Russell diagrams», *A&A* 616, A10, 2018. DOI 10.1051/0004-6361/201832843.
- **Estado:** VERIFICADO (Crossref). Imagen publicada por la ESA el 25-abr-2018 con licencia CC BY-SA 3.0 IGO: https://www.esa.int/ESA_Multimedia/Images/2018/04/Gaia_s_Hertzsprung-Russell_diagram
- **Qué problema resuelve:** el mismo diagrama de la [ficha 8](#f08), ahora con más de cuatro millones de estrellas a menos de 5.000 años luz: con tantos puntos, el diagrama de dispersión se vuelve un mapa de densidad.
- **Principio de diseño:** con muchos datos, mostrar densidad y no puntos; y la leyenda importa: el color de la imagen indica densidad de estrellas, no su color real.
- **Aplicación a ciencia y ML:** cualquier dispersión con millones de puntos (telemetría, embeddings): histograma 2D o densidad en vez de puntos que se tapan.
- **Controversias y matices:** se elige por su difusión institucional, no porque una fuente lo llame «el mejor».

<a id="f25"></a>
## 25. Las figuras de un artículo de instrumentación astronómica: Pepe et al. 2021 (ESPRESSO)

- **Autores y año:** F. Pepe y otros 99 autores, «ESPRESSO at VLT: On-sky performance and first results», *A&A* 645, A96, enero de 2021. DOI 10.1051/0004-6361/202038306; arXiv 2010.00316.
- **Estado:** VERIFICADO (se leyeron los pies de figura en arXiv).
- **Qué problema resuelve:** mostrar en un solo artículo cómo rinde un instrumento nuevo en el cielo. Según su resumen, precisión mejor que 25 cm/s en una noche y 50 cm/s en varios meses.
- **Principio de diseño:** cada tipo de figura responde una pregunta distinta del instrumento: esquema del camino de la luz, formato del espectro en el detector, mapas de resolución, un espectro completo con dos acercamientos, eficiencia frente a seeing y longitud de onda, series de velocidad antes y después de una mejora, velocidades plegadas en fase comparadas con HARPS.
- **Aplicación a ciencia y ML:** es un repertorio de figuras típico de un artículo de instrumentación. Útil para elegir la forma de cada resultado sobre un instrumento, o sobre uno de sus subsistemas, con el lenguaje visual que su comunidad ya lee.
- **Controversias y matices:** son figuras para leer en un artículo; en una diapositiva hay que simplificarlas ([ficha 21](#f21): adaptar al medio).

<a id="cairo"></a>
## 26. Cairo: *The Truthful Art* (2016) y *How Charts Lie* (2019)

- **Autor y año:** Alberto Cairo. *The Truthful Art: Data, Charts, and Maps for Communication*, New Riders, 2016, ISBN 978-0-321-93407-9. *How Charts Lie: Getting Smarter about Visual Information*, W. W. Norton, 2019, ISBN 978-1-324-00156-0. En español: *El arte funcional* (Alamut, ISBN 978-84-9889-067-9; año de la primera edición en español sin confirmar).
- **Estado:** VERIFICADO solo en metadatos (Open Library, sitio del autor https://www.albertocairo.com/ y la editorial). Los libros no se abrieron: no se les atribuyen citas ni principios concretos.
- **Qué trata, en términos generales:** representar datos con honestidad y leer gráficos con sospecha (escalas, datos malos, pocos datos, patrones sugeridos que no existen).
- **Aplicación:** la referencia en español más sólida que se encontró. No se encontró una guía en español de diseño de charlas científicas que cumpla el estándar de este catálogo.

---

## Síntesis: cómo presentar resultados

Cada principio se apoya en las fichas indicadas. La fuerza de la evidencia varía: los principios que dependen solo de fichas PARCIAL o NO VERIFICADO están marcados.

1. **Grafica antes de resumir en un número.** Un promedio, una correlación o una exactitud pueden ocultar estructuras muy distintas. Ver [7 Anscombe](#f07), [14 Tukey](#f14).
2. **Elige los ejes que hacen aparecer la estructura.** La pregunta decide el eje (luminosidad vs. color, tiempo desde un evento, pasos de entrenamiento). Ver [8 Hertzsprung-Russell](#f08), [10 FT](#f10), [3 Snow](#f03).
3. **Prefiere la codificación que las personas leen con más exactitud.** Posición sobre ejes comunes antes que nada; área y color al final. (La réplica de 2010 no sostiene que el ángulo sea peor que la longitud.) Ver [20 Cleveland y McGill](#f20) (orden detallado PARCIAL), [13 Bertin](#f13), [2 Nightingale](#f02), [9 NYT](#f09).
   - 3b. **El color es un dato: escalas uniformes y accesibles, nunca arcoíris para una magnitud continua.** Ver [22 Crameri](#f22), [13 Bertin](#f13), [24 Gaia](#f24) (la leyenda dice qué significa el color).
   - 3c. **Adapta la figura al medio.** La figura del informe no es la de la diapositiva. Ver [21 Rougier](#f21), [25 artículo de instrumentación](#f25).
4. **Muestra la distribución, no solo el promedio.** Cajas o puntos por grupo, por semilla y por pliegue. Ver [14 Tukey](#f14), [17 Iris](#f17).
5. **Compara poniendo las cosas lado a lado, con los mismos ejes.** Cuadrículas de gráficos pequeños en vez de una pila de figuras distintas. Ver [11 Tufte](#f11) (PARCIAL), [12 Few](#f12).
6. **Quita lo que no aporta, pero no lo que el lector necesita para interpretar.** Mínimo de adorno, sí; sin ejes, solo para público general. Ver [11 Tufte](#f11), [15 Warming stripes](#f15), [12 Few](#f12).
7. **Una imagen puede llevar varias variables si cada una tiene su canal.** Pero cada variable añadida exige una razón. Ver [1 Minard](#f01), [5 Gapminder](#f05).
8. **Sé explícito con las escalas y avisa de lo que pueden ocultar.** La escala logarítmica muestra el ritmo de crecimiento y puede ocultar la gravedad de un repunte; indica siempre cuál usas. Ver [10 FT](#f10), [19 Escalamiento](#f19), [16 Keeling](#f16).
9. **Advierte cómo leer un gráfico que se presta a malas lecturas.** Un t-SNE no prueba que dos grupos sean distintos; tamaños y distancias pueden no significar nada. Ver [18 t-SNE](#f18), [1 Minard](#f01) (correlación no es causa).
10. **Pon los casos donde falla el modelo en el espacio donde importa.** Mapas de errores, residuos y subgrupos, no solo el promedio. Ver [3 Snow](#f03), [6 Du Bois](#f06) (PARCIAL), [7 Anscombe](#f07).
11. **Elige la complejidad según el público.** Para un auditorio general, un diseño mínimo (franjas); para pares, ejes, incertidumbre y comparación con una línea base. Ver [15 Warming stripes](#f15), [12 Few](#f12), [16 Keeling](#f16).
12. **Sé honesto sobre la historia y los límites de cada gráfico.** Evita "el primero" sin comprobar, reconoce las disputas de prioridad y las lecturas que son interpretaciones. Ver [2 Nightingale](#f02), [3 Snow](#f03), [1 Minard](#f01), [17 Iris](#f17), [8 Hertzsprung-Russell](#f08).

## Qué falta para cerrar el catálogo

- Leer el texto completo de Cleveland y McGill (tabla del orden) y de Anscombe; ambos son de pago.
- Library of Congress (Du Bois): pide verificación humana; las medallas siguen sin confirmar.
- Leer a Friendly (Minard y Nightingale) cuando el servidor de datavis.ca vuelva a responder, incluido el mapa de flujos de Harness como antecedente de Minard ([ficha 1](#f01)).
- Confirmar con Gapminder los ejes y la codificación de las burbujas.
- Entrevista del FT en el Foro Económico Mundial.
