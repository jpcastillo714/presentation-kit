[English](../en/presentations.md)

# Catálogo de presentaciones y charlas de referencia (con y sin animación)

Pensado para defensas de tesis, charlas de laboratorio, seminarios y presentaciones de trabajo, por ejemplo con datos astronómicos o con un modelo de ML. Un criterio frecuente es usar pocas animaciones, porque «menos es más». Este catálogo pone ese criterio a prueba contra la evidencia, no solo lo repite.

> **Nota sobre las fuentes.** Las fuentes se verificaron en octubre de 2026. Cada ficha marca su estado.

## Cómo leer este documento

- **Verificación.** Cada ficha indica el estado de sus datos:
  - **VERIFICADO**: se abrió la fuente (página, DOI/Crossref o PDF) durante la verificación y el dato coincide.
  - **PARCIAL**: se abrió una fuente, pero no confirma todos los datos de la ficha; lo no confirmado queda marcado.
  - **NO VERIFICADO**: no se pudo abrir la fuente o el dato viene solo del recuerdo. Hay que comprobarlo antes de citarlo en un trabajo académico.
- **Animación.** Escala: ninguna / mínima / central. Después se dice si aporta o distrae.
- No se reproducen diapositivas ni textos. Las citas son pocas y cortas.
- Límite de la verificación: la herramienta de lectura usada devolvía resúmenes, no el texto íntegro, y varias páginas (YouTube, Vimeo, PubMed, Stanford News) no cargaron. Se anota en cada caso.

## Resumen rápido (tabla)

| Id | Ficha | Animación | Estado |
|---|---|---|---|
| F01 | Rosling, TED 2006 | central | PARCIAL |
| F02 | Rosling, BBC «200 países» 2010 | central | PARCIAL |
| F03 | Jobs, iPhone 2007 | mínima (diapositivas) / demo en vivo | PARCIAL |
| F04 | Jobs, Stanford 2005 | ninguna | NO VERIFICADO |
| F05 | Gore, *Una verdad incómoda* 2006 | mínima a media | VERIFICADO (Wikipedia) |
| F06 | Tufte, *The Cognitive Style of PowerPoint* 2003 | ninguna (crítica) | VERIFICADO |
| F07 | Reynolds, *Presentation Zen* | ninguna / mínima | PARCIAL |
| F08 | Duarte, *Resonate* 2010 | mínima | PARCIAL |
| F09 | Método Lessig y método Takahashi | ninguna | PARCIAL |
| F10 | PechaKucha 20x20 (2003) | ninguna (formato temporal) | VERIFICADO |
| F11 | 3Blue1Brown y manim | central | VERIFICADO |
| F12 | Bret Victor: «Inventing on Principle» y «Ladder of Abstraction» | central (interactiva) | PARCIAL |
| F13 | Distill.pub y explicaciones interactivas | central (interactiva) | VERIFICADO |
| F14 | Shneiderman, «The Eyes Have It» 1996 | ninguna (principio de interacción) | VERIFICADO (resumen) |
| F15 | Amazon: memo de seis páginas (2004) | ninguna (sin diapositivas) | PARCIAL |
| F16 | Anthropic: páginas de interpretabilidad y charlas públicas | mínima en las páginas | PARCIAL |
| F17 | Feynman, Messenger Lectures 1964 | ninguna | PARCIAL |
| F18 | Sagan, *Cosmos* 1980 | efectos visuales (central en el medio) | PARCIAL |
| F19 | Gates, TED 2009 | ninguna | PARCIAL |
| F20 | Bergstrom y West, *Calling Bullshit* | ninguna / mínima | PARCIAL |
| F21 | Kurzgesagt | central | VERIFICADO (Wikipedia) |
| F22 | Event Horizon Telescope, anuncio 2019 | mínima (una imagen) | PARCIAL |
| F23 | Observatorio Vera Rubin, «First Look» 2025 | imágenes y videos | PARCIAL |
| F24 | Karpathy, *Zero to Hero* | ninguna (código en vivo) | VERIFICADO |
| F25 | Mayer, aprendizaje multimedia | evidencia sobre animación | VERIFICADO (resúmenes) |
| F26 | Alley, *The Craft of Scientific Presentations* y «assertion-evidence» | ninguna | VERIFICADO |
| F27 | Doumont, *Trees, Maps, and Theorems* 2009 | ninguna | PARCIAL |
| F28 | Sweller, carga cognitiva 1988 | base teórica | VERIFICADO |
| F29 | Tversky, Morrison y Bétrancourt 2002 + meta-análisis de Höffler y Leutner 2007 | evidencia directa sobre animación | VERIFICADO |
| F30 | Reglas dudosas: 10/20/30 y «7±2» (Miller 1956 vs. Cowan 2001) | n/a | VERIFICADO |
| F31 | Ciechanowski, ensayos interactivos 2020–2022 | central (interactiva) | VERIFICADO |
| F32 | Hohman et al., «Communicating with Interactive Articles» 2020 | interactiva (revisión) | VERIFICADO |
| F33 | Victor, «Explorable Explanations» 2011, y explorabl.es | interactiva | VERIFICADO |
| F34 | Bourne, «Ten Simple Rules for Making Good Oral Presentations» 2007 | ninguna | VERIFICADO |

---

## Parte A. Charlas con animación o visualización dinámica

### F01. Hans Rosling, «The best stats you've ever seen» (TED 2006)
- **Autor y año:** Hans Rosling, TED2006 (febrero de 2006).
- **Fuente:** https://www.ted.com/talks/hans_rosling_the_best_stats_you_ve_ever_seen (abierta; confirma título, autor y año; la descripción oficial dice que presenta datos con energía de comentarista deportivo y desmonta mitos sobre el «mundo en desarrollo»). Contexto del software: https://en.wikipedia.org/wiki/Gapminder_Foundation (abierta; Gapminder se fundó en 2005, Trendalyzer produce el gráfico de burbujas animado). **Corrección:** Google compró Trendalyzer en **2007**, no en 2006 como decía Wikipedia; fuente: https://www.gapminder.org/about/about-gapminder/history/
- **Qué hace bien:** Una sola pregunta clara por gráfico, y datos reales que contradicen una creencia que la audiencia tiene. Además, el presentador narra el gráfico en vivo, como un relator.
- **Rol de la animación:** central. **Aporta**, porque lo que se muestra es justamente un cambio en el tiempo (cada país se mueve en ejes de ingreso y salud). Cumple la regla de F29: la animación representa un cambio real, no decora.
- **Principio de diseño:** que la forma del gráfico coincida con la forma de la idea (principio de congruencia, Tversky et al. 2002, F29).
- **Aplicación a una defensa de tesis:** si hay una evolución temporal (por ejemplo, cómo cambia el espacio embebido durante el entrenamiento de un modelo de ML), una animación corta y narrada puede ser la mejor figura. Si no hay cambio en el tiempo, un gráfico estático basta.
- **Contrapunto:** la animación de Rosling funciona también por su narración y por el control del presentador (puede pausar y señalar). Un video automático sin narrador pierde mucho de eso. Esto es una inferencia a partir de la evidencia de F29, no un dato medido en esta charla.
- **Estado:** PARCIAL. No se pudo abrir la transcripción ni el video; la página de TED no describe el gráfico animado. NO VERIFICADO: duración exacta de la charla.

### F02. Hans Rosling, «200 Countries, 200 Years, 4 Minutes» (BBC, *The Joy of Stats*, 2010)
- **Autor y año:** Hans Rosling; BBC Four, emitido el 7-dic-2010 según la ficha de Wellcome Collection citada en la búsqueda.
- **Fuente:** https://www.youtube.com/watch?v=jbkSRLYSojo (abierta; confirma el título «Hans Rosling's 200 Countries, 200 Years, 4 Minutes - The Joy of Stats - BBC»; fecha y canal NO leídos de la página). Datos de contexto (200 países, unos 120.000 puntos de datos, gráfico de dispersión animado): resultados de búsqueda de https://www.statschat.org.nz/2011/06/22/the-joy-of-stats-bbc-four-200-countries-200-years-4-minutes-hans-rosling/ (no se abrió en detalle).
- **Qué hace bien:** condensa 200 años en cuatro minutos con un hilo conductor y un solo mensaje (la «brecha» entre mundos se achica).
- **Rol de la animación:** central y **aporta**. Es la versión de estudio de F01: el cambio en el tiempo es el contenido.
- **Principio:** la animación se justifica cuando el dato es una trayectoria. Además, el narrador dirige la atención («señalización», Mayer, F25).
- **Aplicación:** modelo para un único clip de 30 a 60 segundos en una defensa de tesis, no para toda la presentación.
- **Contrapunto:** el efecto es de un gráfico, de cuatro minutos, hecho con producción de televisión. Replicarlo con herramientas caseras es caro y tentador de sobredimensionar.
- **Estado:** PARCIAL (título comprobado; detalles de duración y cifras vienen de la búsqueda; el sitio openculture.com dio error 504).

### F11. 3Blue1Brown y manim (Grant Sanderson)
- **Autor y año:** Grant Sanderson; biblioteca manim, repositorio https://github.com/3b1b/manim. NO VERIFICADO: año de inicio del canal.
- **Fuente:** https://www.3blue1brown.com/faq y https://github.com/3b1b/manim (ambas abiertas). El repositorio dice que manim es un motor para animaciones programáticas de videos de matemática, con licencia MIT, y que existe una bifurcación comunitaria (ManimCommunity) desde 2020. En el FAQ, Sanderson explica que casi todas sus animaciones usan manim y propone su filosofía.
- **Qué hace bien:** cada movimiento tiene propósito, el ejemplo concreto va antes del marco abstracto y el visual refuerza la narración en vez de competir con ella.
- **Rol de la animación:** central y, cuando se hace así, **aporta**. La propia regla del autor es una cita corta útil: «Every movement on the screen should be deliberate, with an identifiable purpose.»
- **Principio:** movimiento con propósito + coherencia entre voz e imagen (coherencia y señalización, F25).
- **Aplicación:** es la referencia más cercana para evaluar una presentación animada (por ejemplo, ejes que se convierten en esfera) con el criterio del propio autor: ¿cada transformación enseña algo que el estático no enseña? En una defensa de tesis, manim sirve para clips cortos y precisos (por ejemplo, una proyección de embedding), no para animar cada diapositiva.
- **Contrapunto:** es un video con edición y narración, no una presentación en vivo. Trasladarlo a una charla de 20 minutos sin ensayo del timing es arriesgado. El propio autor dice que manim es «un patio de juegos» para su propio uso, no una herramienta pulida.
- **Estado:** VERIFICADO (año del canal NO VERIFICADO).

### F12. Bret Victor: «Inventing on Principle» y «Up and Down the Ladder of Abstraction»
- **Autor y año:** Bret Victor. «Ladder of Abstraction»: octubre de 2011 (página abierta). «Inventing on Principle»: año NO VERIFICADO (se recuerda como 2012, sin comprobar).
- **Fuente:** https://worrydream.com/LadderOfAbstraction/ (abierta; describe un ensayo interactivo: simulación de un auto, controles deslizantes de tiempo y de tasa de giro, trayectorias superpuestas, mapa de calor, y la técnica de subir y bajar entre niveles de abstracción). La charla en video: https://worrydream.com/InventingOnPrinciple/ redirige a https://vimeo.com/906418692, pero Vimeo mostró una verificación anti-bots y no se pudo leer descripción ni fecha.
- **Qué hace bien:** el espectador controla el parámetro y ve la consecuencia inmediata. Alterna entre el caso concreto y la visión general.
- **Rol de la animación:** central, pero es **interacción**, no animación pasiva. **Aporta** porque el control está en manos de quien aprende (esto coincide con la recomendación final de F29).
- **Principio:** «subir y bajar» entre un ejemplo concreto y el patrón general; manipulación directa de parámetros.
- **Aplicación:** en un seminario de tesis, un notebook o página con un deslizador (por ejemplo, el número de vecinos de un UMAP/t-SNE o el umbral de un clasificador) puede ser la mejor demostración en una sesión de preguntas, preparada como respaldo, no como eje.
- **Contrapunto:** requiere una demo en vivo que puede fallar. Prepara un respaldo estático.
- **Estado:** PARCIAL.

### F13. Distill.pub y las explicaciones interactivas
- **Autor y año:** Distill (revista); ejemplo: Gabriel Goh, «Why Momentum Really Works», 4-abr-2017.
- **Fuente:** https://distill.pub/2017/momentum/ (abierta; figuras interactivas con controles para el paso α y el momento β, diagramas de fase, gráficos de convergencia). https://distill.pub/2021/distill-hiatus/ (abierta; 2-jul-2021: los editores pausan la revista por «fricción estructural» y agotamiento de voluntarios, y dicen que el cuello de botella es el esfuerzo y la mezcla de experticia científica y de diseño).
- **Qué hace bien:** el lector controla los parámetros y ve la dinámica; se expone el modelo matemático junto al visual.
- **Rol de la animación/interactividad:** central. **Aporta**, pero a un costo de producción alto, y los propios editores lo reconocieron.
- **Principio:** la interactividad compensa los problemas de la animación pasiva (Tversky et al. 2002, F29).
- **Aplicación:** una figura interactiva en un artículo o en un anexo de una tesis (en HTML), no en la defensa oral.
- **Contrapunto honesto:** el hecho de que Distill se pausara muestra que este formato es caro y difícil de sostener. No es una norma realista para una tesis.
- **Estado:** VERIFICADO.

### F21. Kurzgesagt – In a Nutshell
- **Autor y año:** Philipp Dettmer (estudio con sede en Múnich); canal creado el 10-jul-2013.
- **Fuente:** https://en.wikipedia.org/wiki/Kurzgesagt (abierta; gráficos planos minimalistas, a veces 3D; investigación interna; cita fuentes; desde 2019 pide verificación por expertos; retiró dos videos de 2015 por no haber pasado ese proceso; rehizo un video de 2024 tras críticas).
- **Qué hace bien:** estilo visual consistente, un tema por video, y declara sus fuentes.
- **Rol de la animación:** central y **aporta** en el medio de video. Pero es un equipo de unas setenta personas.
- **Principio:** la consistencia visual (colores, formas) reduce la carga de procesar cada escena (relacionado con F25 y F28). Su historia de correcciones muestra que una buena animación no garantiza rigor.
- **Aplicación:** copia su disciplina de estilo (paleta fija, formas simples), no su producción.
- **Contrapunto:** retiraron videos por errores: la calidad visual puede dar una falsa sensación de rigor. En una defensa, la animación no reemplaza el respaldo de datos.
- **Estado:** VERIFICADO (solo vía Wikipedia, que es fuente secundaria).

### F23. Observatorio Vera C. Rubin, «First Look» (23-jun-2025)
- **Autor y año:** equipo NSF–DOE Rubin Observatory, 2025.
- **Fuente:** https://www.aura-astronomy.org/blog/2025/06/13/mark-your-calendars-nsf-doe-vera-c-rubin-observatory-will-unveil-first-look-images-on-23-june-2025/ (abierta; transmisión en vivo en YouTube, en inglés y español, el 23-jun-2025 a las 11:00 EDT, con fiestas de visionado). Las búsquedas indican que se mostraron imágenes y videos de alta resolución (cúmulo de Virgo, asteroides, estrellas RR Lyrae). NO VERIFICADO: duración del evento (una fuente dice 90 min), quiénes presentaron, y el contenido exacto, porque no se vio la grabación.
- **Qué hace bien (de lo que se pudo comprobar):** el contenido visual (imágenes reales del instrumento) es el protagonista, y la transmisión se hizo accesible en dos idiomas.
- **Rol de la animación:** los videos de zoom son un uso legítimo: el zoom cambia de escala, que es una transformación real.
- **Principio:** cuando el dato es una imagen espectacular, la mejor visualización es la imagen misma, a tamaño grande.
- **Aplicación:** con datos astronómicos, mostrar una imagen o un espectro real a pantalla completa antes del modelo, para anclar a la audiencia en el dato.
- **Estado:** PARCIAL.

### F14. Ben Shneiderman, «The Eyes Have It» (1996)
- **Autor y año:** Ben Shneiderman, «The eyes have it: a task by data type taxonomy for information visualizations», *Proceedings 1996 IEEE Symposium on Visual Languages*, pp. 336–343. DOI 10.1109/VL.1996.545307.
- **Fuente:** Crossref (https://api.crossref.org/works/10.1109/VL.1996.545307) y el resumen en OpenAlex, abiertos el 29-oct-2026.
- **Qué hace bien:** propone el «mantra» de la búsqueda visual de información: primero la vista general, después acercar y filtrar, y el detalle solo cuando se pide. Lo acompaña de una taxonomía de siete tipos de datos y siete tareas.
- **Rol de la animación:** ninguna; es un principio de interacción y de orden.
- **Principio:** ir de lo general al detalle, y que el detalle no compita con la vista general.
- **Aplicación:** en una charla, una diapositiva de mapa (todo el instrumento, toda la serie) antes de acercarse a una pieza; el detalle denso va a un anexo o a una diapositiva de respaldo.
- **Contrapunto:** está pensado para interfaces que el usuario explora, no para una charla que avanza al ritmo del orador; la transferencia es una analogía.
- **Estado:** VERIFICADO (metadatos y resumen; no se leyó el artículo completo).

### F31. Bartosz Ciechanowski, ensayos interactivos («Cameras and Lenses», 2020; «Mechanical Watch», 2022)
- **Fuente:** https://ciechanow.ski/archives/ (abierta el 29-oct-2026); https://ciechanow.ski/cameras-and-lenses/ (dic-2020), https://ciechanow.ski/mechanical-watch/ (may-2022).
- **Qué hace bien:** construye un fenómeno físico pieza por pieza; cada figura 3D está junto al párrafo que la explica y el lector cambia una sola variable a la vez.
- **Rol de la animación:** central e interactiva. **Aporta** porque el lector controla el ritmo y cada figura agrega una sola idea.
- **Principio:** progresión de una variable por vez; figura y texto juntos (contigüidad espacial, F25).
- **Aplicación:** es el modelo más cercano para explicar un instrumento óptico, como un espectrógrafo: luz, prisma, fibra, detector, cada uno en su paso. En una charla se toma la progresión, no el formato.
- **Contrapunto:** son ensayos de lectura larga, hechos por una persona con mucho tiempo; no se presentan en 20 minutos.
- **Estado:** VERIFICADO.

### F32. Hohman, Conlen, Heer y Chau, «Communicating with Interactive Articles» (Distill, 2020)
- **Fuente:** https://distill.pub/2020/communicating-with-interactive-articles/ , *Distill* 5(9), 11-sep-2020, DOI 10.23915/distill.00028 (abierta el 29-oct-2026).
- **Qué hace bien:** ordena la evidencia de educación, periodismo y visualización sobre qué aporta la interacción (acercar al dato, jugar con un modelo, pedir una predicción antes de mostrar) y qué cuesta.
- **Principio:** pedir una predicción antes de mostrar el resultado; la interacción solo donde sirve. Los autores advierten que «not everything needs to be interactive».
- **Aplicación:** en una charla, preguntar a la sala «¿qué creen que pasa si…?» antes de mostrar la figura cumple la misma función sin código.
- **Contrapunto:** los mismos autores reconocen poca evidencia empírica directa y alto costo de producción.
- **Estado:** VERIFICADO.

### F33. Bret Victor, «Explorable Explanations» (2011), y el sitio explorabl.es (Nicky Case)
- **Fuente:** https://worrydream.com/ExplorableExplanations/ (marzo de 2011, con posdata de febrero de 2024) y https://explorabl.es/ (diseñado por Nicky Case según el README del repositorio, CC0). Abiertas el 29-oct-2026.
- **Qué hace bien:** propone documentos «reactivos»: el lector cambia un supuesto del autor y ve al instante cómo cambia la conclusión.
- **Principio:** dejar que la audiencia mueva el supuesto que importa.
- **Aplicación:** material de estudio o anexo interactivo de una tesis, no la charla en sí.
- **Estado:** VERIFICADO. Es el origen del término que usan F12 y F13.

---

## Parte B. Charlas con poca o ninguna animación

### F03. Steve Jobs, presentación del iPhone (Macworld, 9-ene-2007)
- **Autor y año:** Steve Jobs, 9-ene-2007.
- **Fuente:** https://allaboutstevejobs.com/videos/keynotes/macworld_2007 (abierta; fecha 9-ene-2007, Moscone West, unos 1 h 45 min según los marcadores de tiempo; presenta iPhone, Apple TV y el cambio de nombre a Apple Inc.). Una búsqueda indica que la demo fue riesgosa porque el software no estaba terminado; fuentes secundarias.
- **Qué hace bien:** una idea por diapositiva, una promesa clara («tres productos en uno»), y una demo en vivo como clímax.
- **Rol de la animación:** mínima en las diapositivas. **Aporta** la demo real del producto.
- **Principio:** estructura narrativa (problema, solución, demostración) con diapositivas que acompañan al orador y no compiten con él (relacionado con F07 y F08).
- **Aplicación:** una demo real de un modelo de ML (por ejemplo, un caso de clasificación en vivo) tiene más fuerza que cualquier animación, si hay un plan B grabado.
- **Contrapunto:** la búsqueda **no** pudo confirmar que las diapositivas fueran «minimalistas» como se repite popularmente; ese dato queda NO VERIFICADO. Además, Jobs ensayó la demo durante semanas (NO VERIFICADO) y tenía un equipo de producción. Es un caso de marketing, no de un trabajo científico.
- **Estado:** PARCIAL.

### F04. Steve Jobs, discurso en Stanford (2005)
- **Autor y año:** Steve Jobs, junio de 2005 (año recordado, sin fuente abierta).
- **Fuente:** se intentó https://news.stanford.edu/stories/2005/06/youve-got-find-love-jobs-says y https://news.stanford.edu/2005/06/14/jobs-061505/, ambas devolvieron error 403. **NO VERIFICADO** durante la verificación: título, fecha y estructura.
- **Por qué está en la lista:** como contraste. Es una charla sin diapositivas, basada en tres historias personales y una estructura clara, según se recuerda (NO VERIFICADO).
- **Rol de la animación:** ninguna.
- **Aplicación:** ejemplo de que la estructura narrativa sostiene una charla sin apoyo visual; sirve de modelo para la apertura y el cierre de una defensa de tesis.
- **Estado:** NO VERIFICADO. Antes de citarlo, abre una transcripción oficial.

### F05. Al Gore, *Una verdad incómoda* (2006)
- **Autor y año:** Al Gore, dirección de Davis Guggenheim, 2006.
- **Fuente:** https://en.wikipedia.org/wiki/An_Inconvenient_Truth (abierta, solo la primera parte). Dice: la presentación estaba hecha en Keynote; Gore la dio más de mil veces; en 2004 contrató a Duarte Design para actualizarla con video y animación; el film ganó dos Óscar; en el caso *Dimmock* (2007) un tribunal del Reino Unido halló nueve errores científicos y a la vez dijo que el relato general era básicamente correcto.
- **Qué hace bien:** una tesis única, datos con gráficos grandes (por ejemplo series largas de CO2 y temperatura) y un hilo narrativo personal.
- **Rol de la animación:** media. Se usan animaciones para mostrar procesos físicos (cambio en el tiempo), lo que es coherente con F29. **Aporta** en general.
- **Principio:** una presentación de datos puede ser emocional y a la vez basada en cifras si el orador conduce la narrativa (F08).
- **Aplicación:** gráficos de series largas, con una anotación que guía la vista a la parte relevante.
- **Contrapunto:** el caso Dimmock muestra que una presentación persuasiva puede sacrificar matices; en una defensa, los errores se pagan caros. La parte de Wikipedia que no se leyó (144 mil caracteres restantes) podría contener más críticas.
- **Estado:** VERIFICADO (secundaria).

### F06. Edward Tufte, *The Cognitive Style of PowerPoint* (2003)
- **Autor y año:** Edward Tufte, 2003 (Graphics Press); revisada en 2006 según Wikipedia.
- **Fuente:** https://www.edwardtufte.com/?p=460 (abierta; hilo «ET on Columbia Evidence», 5-feb-2003; Tufte analizó las presentaciones de Boeing sobre el daño del ala del transbordador Columbia por un trozo de espuma, y dice que las diapositivas eran confusas y no dejaban clara la gravedad). https://en.wikipedia.org/wiki/Death_by_PowerPoint (abierta; la comisión investigadora del accidente citó su análisis y el texto resume sus críticas y las defensas).
- **Qué hace bien (la crítica):** muestra con un caso real que la jerarquía de viñetas puede esconder lo importante.
- **Rol de la animación:** ninguna; es una crítica del formato. Tufte prefiere un documento escrito entregado antes de la reunión (ver F15).
- **Principio:** la densidad de evidencia importa más que el formato; las viñetas fragmentan el razonamiento.
- **Aplicación:** en un seminario técnico, deja una figura rica en datos con una anotación clara, en vez de partir un resultado en tres diapositivas.
- **Contrapunto honesto (importante):**
  - La evidencia empírica de Tufte es anecdótica: Wikipedia recoge que un artículo de 2013 lo calificó como «no riguroso desde la perspectiva de investigación».
  - Tufte mismo corrigió en 2004 un detalle: él no presentó la solicitud de información de los informes (la hizo, probablemente, un medio de prensa).
  - Hay defensas serias: Steven Pinker sostiene que, bien usado, PowerPoint refleja cómo pensamos; Stephen Kosslyn, que el problema es el uso y no la herramienta.
  - La causa del accidente del Columbia no fue una diapositiva; fue un conjunto de fallas. Atribuírselo al formato es una simplificación.
- **Estado:** VERIFICADO.

### F07. Garr Reynolds, *Presentation Zen*
- **Autor y año:** Garr Reynolds; blog desde 2005; el libro tiene año NO VERIFICADO (se recuerda como 2008).
- **Fuente:** https://www.presentationzen.com/ (abierta; confirma autor, que el blog empezó en 2005 y que el libro existe). No se pudieron abrir sus consejos (https://www.garrreynolds.com/presentation-zen-tips dio 404).
- **Qué hace bien (según su fama, NO VERIFICADO):** simplicidad, imágenes grandes, y separar el documento de lectura de las diapositivas de apoyo.
- **Rol de la animación:** ninguna a mínima (NO VERIFICADO).
- **Principio:** que la diapositiva sea una ayuda visual para la voz, no un guion.
- **Aplicación:** una diapositiva con una sola figura grande y un título con la conclusión.
- **Contrapunto:** el estilo «imagen grande y poco texto» funciona en charlas públicas; en una defensa, el comité puede querer leer las diapositivas sin el orador. Conviene preparar un documento aparte o un anexo.
- **Estado:** PARCIAL.

### F08. Nancy Duarte, *Resonate* (2010)
- **Autor y año:** Nancy Duarte, 2010 (año tomado de Wikipedia).
- **Fuente:** https://www.duarte.com/resources/books/resonate/ (abierta; la presenta como un libro sobre estructura narrativa en la que la audiencia es la heroína y el orador el mentor) y https://en.wikipedia.org/wiki/Nancy_Duarte (abierta; *Slide:ology* 2008, *Resonate* 2010; trabajó con Gore en la presentación de F05). NO VERIFICADO: el término «sparkline» como alternancia entre «lo que es» y «lo que podría ser» (Wikipedia describe la idea sin ese nombre).
- **Qué hace bien:** da una estructura (situación actual, lo que podría ser, y el contraste entre ambos) a una charla.
- **Rol de la animación:** mínima; no es el centro de su método.
- **Principio:** la audiencia necesita una razón para cambiar de opinión; contrastar el estado actual con el posible.
- **Aplicación:** estructura para la introducción de una tesis: «hoy se hace X (limitación), propongo Y, esto cambia Z».
- **Contrapunto:** es un método de persuasión corporativa; en ciencia, la «historia» debe subordinarse a los resultados y a sus límites.
- **Estado:** PARCIAL.

### F09. Método Lessig y método Takahashi
- **Autor y año:** Takahashi Masayoshi (RubyConf; la página no da fecha, un enlace sugiere 2005); método Lessig por Lawrence Lessig.
- **Fuente:** https://en.wikipedia.org/wiki/Takahashi_method (abierta; una o dos palabras gigantes por diapositiva, sin imágenes ni gráficos, muchísimas diapositivas de corta duración). El artículo sobre el método Lessig (https://en.wikipedia.org/wiki/Lessig_method) dio 404 y el de Lawrence Lessig no describe su estilo. **NO VERIFICADO**: origen y descripción del método Lessig (solo se menciona que Takahashi es «similar»).
- **Rol de la animación:** ninguna; el ritmo viene del cambio rápido de diapositivas.
- **Principio:** lo que se dice y lo que se ve se refuerzan sin repetirse del todo.
- **Aplicación:** útil para enmarcar ideas clave en 2 o 3 diapositivas (por ejemplo, la pregunta de investigación). No sirve para resultados.
- **Contrapunto:** no hay evidencia experimental sobre estos métodos (NO VERIFICADO; no se encontraron estudios). Con gráficos cuantitativos no funcionan, porque prohíben figuras.
- **Estado:** PARCIAL.

### F10. PechaKucha 20x20
- **Autor y año:** Klein-Dytham Architecture, Tokio, febrero de 2003.
- **Fuente:** https://en.wikipedia.org/wiki/PechaKucha (abierta; 20 diapositivas de 20 segundos cada una, 6 min 40 s en total; sitio oficial pechakucha.org).
- **Qué hace bien:** impone brevedad y ritmo.
- **Rol de la animación:** ninguna; el tiempo está automatizado, lo que fuerza un cambio de imagen cada 20 s.
- **Principio:** una restricción de tiempo evita que el orador divague.
- **Aplicación:** buen ejercicio de ensayo: resumir una tesis en 20×20 obliga a decidir qué cuenta. Para la defensa real, el avance automático es arriesgado, porque no permite detenerse en una figura densa.
- **Contrapunto:** el tiempo fijo no se adapta a figuras técnicas que necesitan más de 20 s.
- **Estado:** VERIFICADO.

### F15. Amazon: el memo de seis páginas (2004)
- **Autor y año:** Jeff Bezos, correo de junio de 2004 (según fuentes secundarias).
- **Fuente:** https://www.aboutamazon.com/news/workplace/an-insider-look-at-amazons-culture-and-processes (abierta; describe el PR/FAQ, un documento narrativo leído en silencio al comienzo de la reunión, con retroalimentación después de leer; no habla de PowerPoint ni de «seis páginas» para ese formato). Los datos de «seis páginas», «prohibición de PowerPoint» y la fecha del correo (9-jun-2004) vienen solo de búsquedas que citan blogs (office-watch.com, anecdote.com), no de un documento primario. La carta de accionistas de Amazon que se intentó abrir no menciona nada de esto.
- **Rol de la animación:** ninguna (sin diapositivas).
- **Principio:** para decisiones complejas, un texto narrativo obliga a pensar en oraciones completas y causas; la lectura previa iguala la información de todos (coherente con F06).
- **Aplicación:** para una reunión de trabajo (por ejemplo, con un profesor guía o un supervisor), manda un documento corto de una o dos páginas antes de la reunión y usa la sesión para discutir.
- **Contrapunto:** el formato tiene un costo de escritura alto y favorece a quien escribe bien; no hay estudio que lo compare con diapositivas (NO VERIFICADO).
- **Estado:** PARCIAL (la fecha, las seis páginas y la «prohibición» NO están confirmadas con fuente primaria).

### F17. Richard Feynman, *The Character of Physical Law* (Messenger Lectures, Cornell, 1964)
- **Autor y año:** Richard Feynman, 1964.
- **Fuente:** https://en.wikipedia.org/wiki/The_Character_of_Physical_Law (abierta; siete conferencias en Cornell, grabadas por la BBC, libro de 1965; Cornell las puso en línea en 2015).
- **Qué hace bien:** explica ideas difíciles con ejemplos concretos y un tono conversacional (el artículo dice poco del estilo; lo demás es una lectura de este catálogo, NO VERIFICADO).
- **Rol de la animación:** ninguna.
- **Principio:** claridad por analogía y ejemplo; el orador es el recurso principal (Doumont, F27).
- **Aplicación:** para explicar la intuición de un método (por ejemplo, qué es un espacio embebido) con una analogía antes de una figura.
- **Contrapunto:** un orador excepcional no se puede copiar; no sirve como receta.
- **Estado:** PARCIAL.

### F18. Carl Sagan, *Cosmos: A Personal Voyage* (1980)
- **Autor y año:** Carl Sagan (con Ann Druyan y Steven Soter), PBS, 28-sep a 21-dic-1980.
- **Fuente:** https://en.wikipedia.org/wiki/Cosmos:_A_Personal_Voyage (abierta; 13 episodios de unos 60 min; el «Calendario Cósmico» y la «Nave de la Imaginación»; más de 500 millones de espectadores).
- **Qué hace bien:** metáforas de escala (un año para toda la historia del universo) que hacen comprensible lo inmenso.
- **Rol de la animación:** efectos visuales como parte del medio; la metáfora (calendario) **aporta** porque comprime una escala, no por el efecto.
- **Principio:** traducir una magnitud a una escala humana.
- **Aplicación:** si una tesis maneja distancias o cantidades enormes (datos astronómicos), una comparación a escala humana ayuda más que otra animación.
- **Contrapunto:** es televisión con alto presupuesto, no una charla.
- **Estado:** PARCIAL.

### F19. Bill Gates, «Mosquitos, malaria and education» (TED 2009)
- **Autor y año:** Bill Gates, TED2009 (febrero de 2009), 18 minutos.
- **Fuente:** https://www.ted.com/talks/bill_gates_mosquitos_malaria_and_education (abierta; confirma título, año y duración; no dice que liberó mosquitos).
- **Qué hace bien:** un gesto físico memorable en vivo (según se recuerda, liberó mosquitos en la sala; NO VERIFICADO).
- **Rol de la animación:** ninguna.
- **Principio:** una demostración física puede valer más que una diapositiva.
- **Aplicación:** un objeto o un caso real mostrado en una defensa (por ejemplo, un espectro real impreso) puede anclar la atención.
- **Contrapunto:** es un recurso de espectáculo; en una defensa puede parecer fuera de lugar si no sirve al argumento.
- **Estado:** PARCIAL.

### F20. Carl Bergstrom y Jevin West, *Calling Bullshit*
- **Autor y año:** Bergstrom y West; sitio con derechos de autor 2017–2019; libro posterior.
- **Fuente:** https://callingbullshit.org/ (abierta; curso sobre pensamiento crítico ante datos y modelos; sección de videos; libro *Calling Bullshit: The Art of Skepticism in a Data-Driven World*). NO VERIFICADO: año de inicio del curso y del libro; contenido de cada video.
- **Qué hace bien:** enseña a detectar gráficos y cifras engañosos.
- **Rol de la animación:** ninguna a mínima (NO VERIFICADO).
- **Principio:** una visualización honesta evita distorsionar (ejes, escalas, correlación vs. causalidad).
- **Aplicación:** lista de verificación para las figuras antes de presentar: ¿el eje empieza donde corresponde? ¿La barra de error aparece? ¿Hay un conjunto de prueba separado?
- **Contrapunto:** es material de curso, no un modelo de presentación oral.
- **Estado:** PARCIAL.

### F22. Event Horizon Telescope: anuncio del 10-abr-2019
- **Autor y año:** Colaboración EHT y NSF, 10-abr-2019.
- **Fuente:** https://www.nsf.gov/news/astronomers-capture-first-image-black-hole (abierta; título, fecha, M87, «conferencias de prensa coordinadas en todo el mundo»). El número de conferencias simultáneas NO VERIFICADO.
- **Qué hace bien (lo comprobable):** una sola imagen como mensaje, anunciada de forma coordinada.
- **Rol de la animación:** mínima: el protagonista es una imagen.
- **Principio:** una imagen única bien elegida puede ser todo el mensaje.
- **Aplicación:** si hay un resultado central, conviene hacerlo una figura grande y limpia, y explicar lo demás alrededor.
- **Contrapunto:** no se revisó la estructura de las charlas del anuncio, solo el comunicado.
- **Estado:** PARCIAL.

### F24. Andrej Karpathy, *Neural Networks: Zero to Hero*
- **Autor y año:** Andrej Karpathy; año NO VERIFICADO.
- **Fuente:** https://karpathy.ai/zero-to-hero.html (abierta; lecciones en video con programación en vivo, de una a dos horas cada una, desde retropropagación hasta modelos tipo GPT).
- **Qué hace bien:** construye todo desde cero y explica cada paso en el código.
- **Rol de la animación:** ninguna; el código que se escribe en vivo cumple la función de «ver cómo se construye».
- **Principio:** mostrar el proceso paso a paso, en vez de una transformación animada.
- **Aplicación:** para una sesión técnica con un equipo o un supervisor, recorrer un notebook de forma ordenada, con celdas cortas.
- **Contrapunto:** de una a dos horas, requiere audiencia dispuesta; no cabe en una defensa.
- **Estado:** VERIFICADO.

---

### F34. Philip E. Bourne, «Ten Simple Rules for Making Good Oral Presentations» (2007)
- **Fuente:** *PLOS Computational Biology* 3(4), e77, 27-abr-2007, DOI 10.1371/journal.pcbi.0030077, licencia CC BY: https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.0030077 (abierta el 29-oct-2026).
- **Qué hace bien:** reglas de oficio escritas desde la ciencia: hablarle a esta audiencia, presentar solo lo que vale la pena, dejar un mensaje que se recuerde una semana después, ensayar, pocas imágenes y buenas.
- **Rol de la animación:** ninguna.
- **Principio:** el mensaje que se lleva la audiencia decide qué entra y qué sale.
- **Aplicación:** antes de armar una presentación, escribir en una frase lo que el equipo debe recordar en una semana.
- **Contrapunto:** es experiencia de un editor y orador, no un experimento.
- **Estado:** VERIFICADO.

---

## Parte C. Anthropic: qué existe públicamente y de qué tipo

### F16. Anthropic: páginas de investigación en interpretabilidad y charlas públicas
- **Contexto:** los materiales públicos de Anthropic a veces se usan como ejemplos de presentación. Lo que se encontró públicamente es de dos tipos: páginas de investigación (texto + figuras) y eventos de desarrolladores. No se encontró un registro de «diapositivas de Anthropic» como tales.
- **Fuentes y hallazgos:**
  - «Tracing the thoughts of a large language model» (27-mar-2025): https://www.anthropic.com/research/tracing-thoughts-language-model (abierta). Es un artículo largo con figuras estáticas anotadas (diagramas de circuitos o de grafos de atribución), un video incrustado, una tabla de contenido y enlaces a dos artículos completos; cada hallazgo parte de un ejemplo concreto (una rima, una suma de dos dígitos, una pregunta de capital). **No tiene widgets interactivos claros** según la lectura.
  - «Scaling Monosemanticity»: https://transformer-circuits.pub/2024/scaling-monosemanticity/ . La búsqueda confirma la página y su contenido (autoencoders dispersos sobre Claude 3 Sonnet, con hasta unos 34 millones de rasgos; limitaciones declaradas por los autores). La lectura directa falló por tamaño de la página, así que **no se pudo confirmar cómo son sus visualizaciones interactivas** (NO VERIFICADO). Ojo: un arXiv que se probó (2405.06061) corresponde a otro trabajo (GPTCoach); no uses ese número. Un listado de arXiv (2605.29358) apareció en una búsqueda, pero se trata como espejo y no se verificó.
  - «Golden Gate Claude» (23-may-2024): https://www.anthropic.com/news/golden-gate-claude (abierta). Es una **demo interactiva pública** que mostraba que se puede amplificar un rasgo interno, disponible 24 horas. Es un caso donde la forma del mensaje es la interacción.
  - Code with Claude: https://claude.com/code-with-claude (abierta; en 2026 San Francisco 6-may, Londres 19-may, Tokio 10-jun; hay enlace a grabaciones pero no listó sesiones). Una búsqueda muestra, para 2026, una conversación entre Dario y Daniela Amodei moderada por Ami Vora; no se vio la grabación (NO VERIFICADO el contenido). El evento de 2025: speakers NO VERIFICADOS en la fuente abierta.
- **Qué hace bien:** anclar cada afirmación en un ejemplo concreto y declarar las limitaciones del método (en el artículo de «Tracing», los autores señalan que el método captura solo una fracción del cómputo; según el resumen de búsqueda).
- **Rol de la animación:** mínima en las páginas; figuras estáticas anotadas. La interactividad aparece en demos puntuales.
- **Principio:** ejemplo concreto primero, abstracción después (F11, F12); declarar límites (F20).
- **Aplicación:** si se toman estas páginas como «presentaciones», conviene saber que sus recursos principales son **texto + diagramas estáticos anotados**, no animaciones. Eso respalda el criterio de «menos es más».
- **Contrapunto:** no se revisaron presentaciones internas ni charlas de investigación en video; podría haber otras con más movimiento.
- **Estado:** PARCIAL.

---

## Parte D. La literatura que justifica (o limita) las decisiones

### F25. Richard E. Mayer, aprendizaje multimedia
- **Autor y año:** Richard E. Mayer, *Multimedia Learning* (varias ediciones); capítulo «Introduction to Multimedia Learning», 2005 y 2014.
- **Fuente:** capítulos del propio Mayer, verificados por Crossref y con resumen en OpenAlex (octubre de 2026): procesamiento accesorio, *Cambridge Handbook of Multimedia Learning* (2005), pp. 183–200, DOI 10.1017/CBO9780511816819.013; procesamiento esencial, pp. 169–182, DOI 10.1017/CBO9780511816819.012; Mayer y Moreno (2003), «Nine Ways to Reduce Cognitive Load in Multimedia Learning», *Educational Psychologist* 38(1), 43–52, DOI 10.1207/S15326985EP3801_6.
- **Idea (resúmenes de 2005, en palabras de este catálogo):** coherencia, excluir lo accesorio (10 de 11 pruebas; mediana del efecto 1,32); señalización, marcar cómo se organiza lo esencial (3 de 3; 0,60); redundancia, gráfico + narración rinde más que gráfico + narración + el mismo texto en pantalla (10 de 10; 0,69); contigüidad **espacial**, palabras e imágenes que se corresponden van juntas (8 de 8; 1,11), y **temporal**, la narración va al mismo tiempo que la animación; segmentación, partes al ritmo de quien aprende (3 de 3; 0,98). La redundancia no prohíbe el texto: desaconseja leer en voz alta lo mismo que está escrito cuando ya hay un gráfico.
- **Rol de la animación:** Mayer trata la animación como un medio que puede ayudar si se controla la carga.
- **Aplicación:** no leer lo que está escrito en la diapositiva; resaltar con una flecha la parte relevante de la figura.
- **Contrapunto:** los resultados vienen de pocas pruebas por principio (3 a 11), con estudiantes y en buena parte del laboratorio del propio autor, no de defensas científicas ante expertos; la transferencia a una defensa es una inferencia.
- **Estado:** VERIFICADO (resúmenes de los capítulos; no se leyó el texto completo).

### F26. Michael Alley, *The Craft of Scientific Presentations* y el método «assertion-evidence»
- **Autor y año:** Michael Alley, 2013 (2.ª edición), Springer, DOI 10.1007/978-1-4419-8279-7 (confirmado por Crossref).
- **Fuente:** https://www.assertion-evidence.com/ (abierta; sitio del Leonhard Center, Penn State; el titular de cada diapositiva es una afirmación completa y la evidencia visual la respalda, en lugar de viñetas). Estudios: Garner, Alley, Wolfe, Zappe y Sawarynski, «Assertion-Evidence Slides Appear to Lead to Better Comprehension and Recall of More Complex Concepts» (ASEE 2011), DOI 10.18260/1-2--17510 (verificado por Crossref; el año lo deduce el nombre del congreso, la base de datos no lo da).
- **Rol de la animación:** ninguna.
- **Principio:** el título de la diapositiva debe ser la conclusión, y la figura, la prueba.
- **Aplicación:** para cada resultado de una tesis: título = lo que muestra («El modelo separa clases X e Y con una exactitud de Z»); cuerpo = una figura.
- **Evidencia más fuerte:** Garner y Alley (2013), «How the design of presentation slides affects audience comprehension: A case for the assertion–evidence approach», *International Journal of Engineering Education* 29(6), 1564–1579 (sin DOI; PDF en https://www.writing.engr.psu.edu/ae_comprehension.pdf). Experimento aleatorizado con 110 estudiantes de ingeniería (59 con diapositivas afirmación-evidencia, 51 con diapositivas típicas) sobre cómo funciona una resonancia magnética: el primer grupo escribió mejores explicaciones, tuvo menos ideas erróneas (d = 0,47) y declaró menos esfuerzo mental.
- **Contrapunto:** sigue siendo un solo experimento, con estudiantes y un solo tema: buena evidencia, no concluyente.
- **Estado:** VERIFICADO.

### F27. Jean-luc Doumont, *Trees, Maps, and Theorems* (2009)
- **Autor y año:** Jean-luc Doumont, 2009, Principiae (Bélgica).
- **Fuente:** búsqueda con reseñas (https://www.tug.org/books/reviews/tb103reviews-doumont.html, no se pudo abrir: error 403; https://andrewpwheeler.com/2016/12/05/review-of-trees-maps-and-theorems-effective-communication-for-rational-minds-by-jean-luc-doumont/, no abierta). Las reseñas coinciden en: adaptar a la audiencia, maximizar la relación señal-ruido, y (según una reseña de lector) usar redundancia efectiva.
- **Rol de la animación:** ninguna.
- **Principio:** adaptarse a la audiencia es la primera ley.
- **Aplicación:** distingue lo que necesita el comité (rigor y límites) de lo que necesita un compañero (intuición).
- **Contrapunto:** no se abrió el libro; los datos son de reseñas. Una reseña discute un punto de gráficos (ejes con tres marcas).
- **Estado:** PARCIAL.

### F28. John Sweller, «Cognitive Load During Problem Solving» (1988)
- **Autor y año:** John Sweller, *Cognitive Science* 12(2), 257–285, abril de 1988.
- **Fuente:** DOI 10.1207/s15516709cog1202_4, verificado por Crossref (https://api.crossref.org/works/10.1207/s15516709cog1202_4). El resumen: la resolución convencional de problemas consume tanta capacidad de procesamiento que queda poco para adquirir esquemas.
- **Idea de aplicación:** la memoria de trabajo es limitada; lo que no ayuda al objetivo ocupa espacio.
- **Rol de la animación:** base teórica. La carga extra de una animación compleja puede dañar.
- **Aplicación:** una figura por idea. Presenta primero lo conocido y después lo nuevo.
- **Contrapunto:** es un trabajo sobre resolución de problemas, no sobre presentaciones; la extensión a diapositivas es inferencia posterior de la literatura (Mayer, F25).
- **Estado:** VERIFICADO (solo el resumen; no se leyó el texto).

### F29. Evidencia directa sobre animación: Tversky et al. (2002) y Höffler y Leutner (2007)
- **Fuentes:**
  - Tversky, Morrison y Bétrancourt, «Animation: can it facilitate?», *Int. J. Human-Computer Studies* 57, 247–262 (2002). Se leyó el PDF completo (copia de la Universidad de Washington: https://faculty.washington.edu/aragon/classes/hcde411/w13/readings/Tversky_AnimationFacilitate_IJHCS02.pdf). **DOI corregido:** 10.1006/ijhc.2002.1017, volumen 57, número 4 (Crossref).
  - Höffler y Leutner, «Instructional animation versus static pictures: A meta-analysis», *Learning and Instruction* 17(6), 722–738 (2007). Abierta: https://www.leibniz-ipn.de/en/research/publications/instructional-animation-versus-static-pictures-a-meta-analysis
- **Hallazgos (en palabras de este catálogo):**
  - Tversky et al.: la investigación sobre animación frente a gráficos estáticos «no es alentadora». Cuando la animación ganaba, los gráficos comparados no eran equivalentes (la animación traía más información o interactividad). Proponen dos principios: **congruencia** (la forma del gráfico debe corresponder a la del concepto) y **aprehensión** (debe poder percibirse con precisión: no demasiado rápida ni compleja). Recomiendan animaciones lentas, esquemáticas y con anotaciones (flechas, resaltado), y dar control al espectador. Añaden que una buena figura estática con flechas puede ser igual de efectiva.
  - Höffler y Leutner: 26 estudios, 76 comparaciones, efecto global d = 0,37 (IC 95 %: 0,25 a 0,49) a favor de la animación; animaciones «representacionales» d = 0,40; videos muy realistas d = 0,76; conocimiento procedimental-motor d = 1,06. Los intervalos de confianza: representacional 0,26–0,53; realista 0,39–1,13; procedimental-motor 0,72–1,40 (resumen verificado el 29-oct-2026). Revisiones posteriores: Ploetzner, Berney y Bétrancourt (2020), *J. Computer Assisted Learning* 36(6), 838–860, DOI 10.1111/jcal.12476, concluyen que la animación supera a la imagen fija cuando lo que se aprende son las características de un cambio; los mismos autores (2021), *Instructional Science* 49(4), DOI 10.1007/s11251-021-09541-w, hallaron la animación mejor para identificar movimientos y la imagen fija mejor para disposiciones espaciales (resúmenes en OpenAlex).
- **Cómo se concilian:** la animación puede ayudar, especialmente para procedimientos y movimientos, pero las ventajas se confunden con otras cosas (más información, interactividad). Para conceptos abstractos y sistemas complejos, la evidencia es débil.
- **Contrapunto honesto contra el criterio «menos es más»:** no es una ley. El meta-análisis encuentra una ventaja real de la animación en ciertas condiciones. La regla correcta es «animar cuando el contenido es un cambio y la animación es lenta, simple y guiada», no «evitar animar».
- **Aplicación:** para evaluar una animación concreta, usar ambos principios (ver «Síntesis», regla 4, y «Cómo evaluar una presentación animada»).
- **Limitación:** casi todos los estudios son de aprendizaje con estudiantes; una defensa es otro contexto (NO hay evidencia directa).
- **Estado:** VERIFICADO.

### F30. Reglas dudosas: 10/20/30 (Kawasaki) y «7 ± 2» (Miller) frente a Cowan
- **10/20/30:** diez diapositivas, veinte minutos, letra de 30 puntos, propuesta por Guy Kawasaki.
  - Fuente: https://www.cbsnews.com/news/improve-your-powerpoint-presentations-with-guy-kawasakis-10-20-30-rule/ (abierta; CBS MoneyWatch, actualizada el 3-may-2010; el artículo **no cita ningún estudio**, las justificaciones son opiniones: la audiencia solo capta unos diez conceptos, 20 minutos dejan tiempo para preguntas, y una letra grande evita leer el guion). La página original de Kawasaki dio 403. Un resultado de búsqueda sugiere que él la planteó como pauta, no como regla estricta (NO VERIFICADO).
  - Veredicto: sirve como heurística para una presentación de inversionistas, no como regla científica. Para una defensa, el tiempo lo define la facultad.
- **«7 ± 2»:**
  - Miller (1956), *Psychological Review* 63(2), 81–97: verificado por Crossref (DOI 10.1037/h0043158).
  - Cowan (2001), *Behavioral and Brain Sciences* 24(1), 87–114: https://www.cambridge.org/core/journals/behavioral-and-brain-sciences/article/magical-number-4-in-shortterm-memory-a-reconsideration-of-mental-storage-capacity/44023F1147D4A1D44BDC0AD226838496 (abierta; resumen: el límite real ronda unos cuatro fragmentos, y Miller habría dado el siete como una estimación aproximada y un recurso retórico).
  - Veredicto: no hay un «siete mágico». El número depende de cómo se cuenta un «fragmento». Lo útil es el principio general (la memoria de trabajo es corta), no la cifra. «Máximo 7 viñetas» no se deriva de Miller.
- **Otros números sin respaldo claro:** Kosslyn y otros (2012) reportan que muchas presentaciones violan principios psicológicos, con más de cuatro viñetas por lista y texto bajo 20 puntos (según Wikipedia, https://en.wikipedia.org/wiki/Death_by_PowerPoint, que no es la fuente original; NO VERIFICADO con el artículo).
- **Estado:** VERIFICADO (con las salvedades indicadas).

---

## Síntesis: cómo estructurar y presentar

Doce principios para una defensa de tesis, una charla de laboratorio, un seminario o una presentación de trabajo. Cada uno remite a las fichas que lo sustentan. Donde la evidencia es solo experiencia de oradores, se dice.

1. **Parte por la pregunta y por qué importa; el método viene después.** Contrasta el estado actual con lo que propones cambiar. Fichas: F08 (Duarte), F03 (Jobs), F04 (NO VERIFICADO), F27 (adaptar a la audiencia). Es una convención narrativa; no hay estudio que mida su efecto en defensas.
2. **Cada diapositiva afirma una conclusión y la figura la prueba.** El título es la frase completa; el cuerpo es una figura. Fichas: F26 (Alley; un experimento aleatorizado en revista, 2013, más trabajos de congreso), F06 (Tufte; densidad de evidencia), F22 (una imagen como mensaje), F34 (Bourne).
3. **Una idea por diapositiva y una figura por idea.** Limita lo que la memoria de trabajo debe sostener; no cuentes viñetas como regla. Fichas: F28, F25, F30 (el «7 ± 2» y el 10/20/30 no son reglas con respaldo).
4. **Cuándo SÍ animar** (regla explícita). Anima solo si se cumplen **las cuatro** condiciones: (a) lo que quieres mostrar **es** un cambio de estado o una transformación en el tiempo o el espacio (un embebido que pasa de 2D a un espacio mayor, un entrenamiento que converge, un zoom de escala); (b) un conjunto de figuras estáticas con flechas no transmite lo mismo (Tversky et al. dicen que a menudo sí lo hace); (c) la animación es **lenta, simple y esquemática**, con una sola cosa moviéndose a la vez y con anotación que guía la vista; (d) quien presenta la narra y puede pausarla. Fichas: F29 (congruencia y aprehensión; ventaja real en procedimientos), F01, F02 (Rosling), F11 (movimiento con propósito), F12 y F13 (el control está en el espectador).
5. **Cuándo NO animar.** No animes: transiciones decorativas entre diapositivas; texto que aparece letra por letra; resultados que se comparan (un gráfico de barras estático permite mirar dos valores a la vez, una animación obliga a recordar el anterior); y cualquier cosa que no cambie en el tiempo. Tampoco animes algo que no puedas explicar en el tiempo que dura. Fichas: F29 (la animación puede ser demasiado rápida o compleja y no mejora lo estático), F06 y F07 (distracción y relleno), F25 (coherencia: elimina lo accesorio).
6. **Si animas, ten una versión estática de respaldo.** Una demo en vivo puede fallar (la de Jobs fue riesgosa, según fuentes secundarias); lleva el fotograma final y uno intermedio como imágenes. Fichas: F03, F12, F29.
7. **Mostrar el dato real antes de abstraer.** Parte de una imagen o un espectro real (por ejemplo, de datos astronómicos) a tamaño grande, y luego explica el modelo; lo mismo para un caso concreto antes de la fórmula. Fichas: F23 (Rubin), F22 (EHT), F11 (ejemplo antes que marco), F16 (cada hallazgo parte de un ejemplo), F12 (subir y bajar de abstracción).
8. **No leas lo que está escrito, y guía la mirada.** Evita repetir en voz alta el texto de la diapositiva; resalta con una flecha o un recuadro lo que estás comentando. Fichas: F25 (redundancia y señalización), F29 (anotaciones), F02.
9. **Declara los límites y las comprobaciones.** Una presentación persuasiva no debe esconder los matices: indica cómo evaluaste, con qué datos y dónde falla. Fichas: F05 (caso Dimmock), F20 (Bergstrom y West), F16 (Anthropic declara limitaciones), F21 (retiros y correcciones de Kurzgesagt).
10. **Separa lo que se presenta de lo que se lee.** Para una reunión de trabajo, manda un texto breve antes y usa la sesión para discutir; para una defensa, lleva un anexo con las figuras de detalle. Fichas: F15 (memo de Amazon; evidencia solo anecdótica), F06 (Tufte), F07 (Reynolds).
11. **Una restricción de tiempo ayuda a elegir.** Ensaya un resumen de 20 diapositivas × 20 segundos para decidir qué importa, y luego arma la versión real con el tiempo disponible. Fichas: F10 (PechaKucha), F09 (Takahashi, solo para ideas clave y no para resultados), F30 (10/20/30 no tiene respaldo empírico).
12. **Adapta a la audiencia y ensaya en voz alta.** El comité evalúa rigor, un compañero busca intuición; el orador es el recurso principal. Fichas: F27 (Doumont), F17 (Feynman), F18 (Sagan; escala humana), F19 (Gates; un gesto físico, con reservas), F24 (Karpathy; paso a paso).

### Cómo evaluar una presentación animada
- **Lo que puede sostenerla:** si muestra una transformación (por ejemplo, pasar de ejes a una esfera en un espacio embebido), cumple la regla 4a. Si además es lenta, esquemática y narrada, cumple los principios de congruencia y aprehensión de F29.
- **Lo que hay que revisar:** ¿cada movimiento tiene propósito? (F11) ¿Hay una versión estática que diga lo mismo? ¿Quien la ve alcanza a percibir lo que cambia? (F29). Si la animación se inspira en materiales públicos de Anthropic, conviene recordar que esas fuentes son sobre todo texto y figuras estáticas anotadas (F16): el estilo animado no viene de ahí.
- **El criterio «menos es más»:** está respaldado por F25, F26 y F29 para la mayoría de los casos, pero no es universal. El meta-análisis de F29 muestra una ventaja de la animación en ciertas condiciones. La frase más precisa es: **«anima cuando el contenido es un cambio y aun así hazlo simple»**.

## Límites de este catálogo
- Muchos datos de contexto (por ejemplo, F02, F05, F15, F22, F23) vienen de resúmenes de una herramienta de lectura o de buscadores, no de la fuente completa.
- Varias charlas en video (TED, BBC, Jobs, Rubin, EHT, Code with Claude) no se vieron; lo dicho sobre su estilo visual es lo que se pudo confirmar o se marca como NO VERIFICADO.
- Los papers de Mayer, Doumont y Alley no se abrieron completos. Para un trabajo académico, cita solo lo marcado VERIFICADO (Sweller 1988, Miller 1956, Cowan 2001, Tversky et al. 2002, Höffler y Leutner 2007) y comprueba el resto con el texto original.
- Una búsqueda mostró un identificador arXiv (2605.29358) para «Scaling Monosemanticity», con fecha 2026; se trata como espejo y no se usa. La fuente canónica es transformer-circuits.pub.
