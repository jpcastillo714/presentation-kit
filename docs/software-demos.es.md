[English](software-demos.md) · Español

# Catálogo de demos de software y de la evidencia sobre cómo mostrar software

Pensado para charlas de laboratorio, seminarios y presentaciones de trabajo que muestran software funcionando: un dashboard de datos, un notebook o una interfaz de chat sobre un modelo de lenguaje (LLM), en vivo o como un clip grabado. Complementa a [presentations.es.md](presentations.es.md) (charlas, fichas F) y a [charts.es.md](charts.es.md). Las fichas de este catálogo se numeran S01, S02… El lanzamiento del iPhone (Macworld 2007) ya es la ficha F03 de presentations.es.md y no se repite aquí.

> **Nota sobre las fuentes.** Las fuentes se verificaron en octubre de 2026. Cada ficha marca su estado. Los textos del kit son CC BY 4.0; las fuentes citadas conservan sus propias licencias y de ellas no se reproduce nada más allá de unas pocas citas cortas.

## Cómo leer este documento

- **Verificación.** Cada ficha indica el estado de sus datos:
  - **VERIFICADO**: se abrió la fuente (página web, registro DOI en Crossref u OpenAlex, PDF o resumen) durante la verificación y el dato coincide.
  - **PARCIAL**: se abrió una fuente, pero no confirma todos los datos de la ficha; lo no confirmado queda marcado.
  - **NO VERIFICADO**: no se pudo abrir la fuente, o el dato viene solo del recuerdo o de un fragmento de buscador. Hay que comprobarlo antes de citarlo en un trabajo académico.
- **Formato.** demo en vivo / audio o video grabado / video editado / norma (legal o de plataforma) / investigación. Después, cada ficha dice qué papel cumplen el movimiento, el zoom y el video.
- **Fuerza de la evidencia** (se usa en la síntesis): **meta-análisis** (muchos experimentos combinados), **experimento** (uno o pocos estudios controlados), **observacional** (muchos datos de uso, sin asignación al azar), **oficio** (guías de profesionales, casos, normas legales o de plataforma).
- Límites de la verificación: la herramienta de lectura devuelve resúmenes, no el texto íntegro. Varios sitios rechazaron el acceso automatizado (OpenAI, BBC, Neowin, MDPI, ScienceDirect, Springer, el sitio de la Society for Technical Communication, el MouseSite de Stanford, un repositorio HAL y el PDF de un repositorio universitario protegido con una verificación humana). Ninguno de esos bloqueos se esquivó; cada caso queda anotado. Que una página no cargue no prueba que el dato sea falso.

## Resumen rápido (tabla)

| Id | Ficha | Formato | Estado |
|---|---|---|---|
| S01 | Engelbart, «The Mother of All Demos» 1968 | demo en vivo | PARCIAL |
| S02 | Jobs, presentación del Macintosh 1984 | demo en vivo (con guion) | VERIFICADO (relato de primera mano) |
| S03 | Caída de Windows 98 en el escenario, 1998 | demo en vivo (falla) | PARCIAL |
| S04 | Victor, «Inventing on Principle» 2012 | programación en vivo | PARCIAL |
| S05 | Google Duplex, I/O 2018 | audio grabado en una presentación en vivo | PARCIAL |
| S06 | La ventana del Tesla Cybertruck, 2019 | demo en vivo (falla) | VERIFICADO (prensa) |
| S07 | Google, «Hands-on with Gemini» 2023 | video editado | PARCIAL |
| S08 | Transmisión en vivo de GPT-4o de OpenAI, 2024 | demo en vivo | PARCIAL |
| S09 | Anthropic, uso de computador (computer use) 2024 | videos grabados + límites declarados | VERIFICADO |
| S10 | *FTC v. Colgate-Palmolive* 1965 (maquetas) | norma (legal) | VERIFICADO |
| S11 | Apple, reglas de las vistas previas de apps en la App Store | norma (plataforma) | VERIFICADO |
| S12 | van der Meij: pautas para videotutoriales de software (2013, 2014, 2022) | investigación | PARCIAL |
| S13 | Entrenamiento basado en demostraciones (Rosen et al. 2010; van der Meij 2016–2018; Brar y van der Meij 2017) | investigación | VERIFICADO (resúmenes) |
| S14 | Señalización texto-imagen: Richter et al. 2016, más un estudio con video de software (2023) | investigación | VERIFICADO (resúmenes) |
| S15 | Meta-análisis de señalización: Schneider et al. 2018, más Jamet 2014 | investigación | PARCIAL |
| S16 | Meta-análisis de segmentación: Rey et al. 2019 | investigación | VERIFICADO (resumen) |
| S17 | Subtítulos y narración: Adesope y Nesbit 2012; Fyfield et al. 2022 | investigación | VERIFICADO (resúmenes) |
| S18 | Mayer, Fiorella y Stull 2020, cinco principios para el video instruccional | investigación | VERIFICADO (resumen) |
| S19 | Guo, Kim y Rubin 2014, producción de video y atención | investigación (observacional) | VERIFICADO |
| S20 | Guías de profesionales: Nielsen Norman Group 2020 y GitHub Docs | oficio | VERIFICADO |

---

## Parte A. Demos y presentaciones de producto reconocidas

### S01. Douglas Engelbart, «The Mother of All Demos» (1968)
- **Autor y año:** Douglas Engelbart y su equipo del Augmentation Research Center de SRI; 9 de diciembre de 1968, Fall Joint Computer Conference, San Francisco.
- **Fuente:** https://www.dougengelbart.org/content/view/209/ (Doug Engelbart Institute; abierta el 30-oct-2026). Confirma el título de la sesión («A Research Center for Augmenting Human Intellect»), unos 90 minutos en vivo, Engelbart sentado en una consola hecha a medida, el sistema NLS corriendo en un computador de SRI a unos 30 millas (unos 48 km) con la imagen proyectada en una pantalla grande, miembros del equipo conectados por teleconferencia y un ingeniero jefe a cargo de la producción. La página dice que el evento «llegó a conocerse» por su nombre famoso, sin decir quién lo acuñó. El MouseSite de Stanford (403) y una página de SRI (404) no cargaron.
- **Qué hace bien:** el sistema funcionando es la charla. Engelbart pasa de su propio esquema a funciones en vivo, y el esquema mismo vive dentro de la herramienta que muestra.
- **Papel del movimiento, el zoom y el video:** central y real: el público mira una pantalla en vivo y a colegas remotos por un enlace de video. Nada en la fuente sugiere que alguna parte fuera simulada.
- **Principio:** muestra el sistema real haciendo trabajo real, en el orden de un argumento.
- **Aplicación (charla de laboratorio o de trabajo):** deja el esquema de la charla dentro del dashboard o del notebook (una pestaña o celda «empieza aquí»), para que pasar del argumento a la demo no cueste nada.
- **Contrapunto:** necesitó un equipo de producción, mobiliario y hardware a medida y un enlace remoto; una sola falla podía detenerlo todo. La página no dice nada de ensayos ni de un respaldo. Las funciones que suelen atribuirse a la demo (enlaces de hipertexto, edición en pantalla compartida, el mouse como dispositivo para apuntar) quedan NO VERIFICADAS en la página abierta, salvo una mención a un mousepad y a segmentos por teleconferencia.
- **Estado:** PARCIAL.

### S02. Steve Jobs, presentación del Macintosh (24-ene-1984)
- **Autor y año:** Steve Jobs, junta anual de accionistas de Apple, Flint Center, Cupertino, 24 de enero de 1984.
- **Fuente:** Andy Hertzfeld, «The Times They Are A-Changin'», https://www.folklore.org/The_Times_They_Are_A-Changin.html (abierta). Es un relato de primera mano de un miembro del equipo del Macintosh. Cuenta que el software de la demo se armó a la carrera, con un equipo agotado; que el ensayo del fin de semana tuvo muchos problemas (un proyector arrendado que tardaba en calentarse y a veces se apagaba; hubo que construir una tarjeta especial para ajustar la señal de video del Mac); y que Jobs apenas alcanzó a hacer un ensayo completo. En el escenario sacaron el Mac de un bolso, arrancó desde un disquete, se presentó con voz sintetizada y la demo corrió sin fallas. El relato de Jobs ya lo había usado antes en una reunión de ventas.
- **Qué hace bien:** el producto se presenta solo, en una secuencia corta y fija que únicamente la máquina real podía hacer.
- **Papel del movimiento, el zoom y el video:** en vivo en el escenario, pero con guion fijo, no exploración libre.
- **Principio:** escribe la demo como una secuencia fija y ensáyala en el hardware real y con el proyector de la sala.
- **Aplicación:** con una interfaz de LLM, escribe los prompts en un orden ensayado; prueba antes el proyector, la resolución y la red de la sala. En 1984 el problema fue el proyector, no el computador.
- **Contrapunto:** es una sola memoria, escrita por un participante, sin una segunda fuente que la corrobore aquí. No dice si la voz se generaba en vivo. Una demo con guion muestra el mejor camino, no el uso típico.
- **Estado:** VERIFICADO (relato de primera mano; una sola fuente).

### S03. La caída de Windows 98 en el escenario (1998)
- **Autor y año:** Microsoft, vista previa de Windows 98 durante la presentación principal de Bill Gates en COMDEX, Chicago, 20 de abril de 1998, según resultados de búsqueda (el artículo de Neowin devolvió 403; fecha y lugar NO VERIFICADOS en una página abierta).
- **Fuente:** Raymond Chen, *The Old New Thing* (blog de desarrolladores de Microsoft), 23-sep-2025: https://devblogs.microsoft.com/oldnewthing/20250923-00/?p=111621 (abierta). Quienes presentaban habían comprado un escáner en una tienda local y no lo probaron antes de subir al escenario; el aparato tenía un defecto. La lección que describe el texto: el estudio de producción de Microsoft agregó después una sala junto al estudio de transmisión donde los equipos se instalan y se prueban antes de entregarlos a quienes presentan. Un fragmento de buscador (no abierto) atribuye a un texto anterior de Chen la causa técnica: el escáner pedía más energía USB de la permitida y activó un camino de error nunca probado.
- **Qué enseña:** una demo se cayó frente a la prensa por un equipo sin probar, no por el software que se mostraba.
- **Papel del movimiento, el zoom y el video:** demo en vivo de conectar un dispositivo; la falla la vio todo el mundo.
- **Principio:** haz la demo solo con el equipo, las cuentas y los datos exactos que probaste; el escenario no es el lugar para hacer algo por primera vez.
- **Aplicación:** no conectes un adaptador nuevo, no cambies de red ni entres a una cuenta recién creada durante la charla; usa el notebook, el perfil del navegador y los datos con que ensayaste.
- **Contrapunto:** según resultados de búsqueda, Gates desactivó el momento con una broma (la frase cambia según la fuente; NO VERIFICADO). Una falla visible, manejada con calma, se puede sobrevivir.
- **Estado:** PARCIAL.

### S04. Bret Victor, «Inventing on Principle» (CUSEC 2012)
- **Autor y año:** Bret Victor, conferencia CUSEC, Montreal. Fecha de la charla, 20 de enero de 2012, según un fragmento de buscador de la página del autor; esa página redirige a Vimeo, que mostró una verificación antibots en una revisión anterior (ver F12) y no se volvió a intentar.
- **Fuente:** https://archive.org/details/vimeo-36579366 (abierta): título, CUSEC como autor, fecha de publicación original 10-feb-2012 y una descripción del autor como creador de herramientas para que la gente entienda y cree. Esta ficha complementa la F12 de presentations.es.md.
- **Qué hace bien (según el recuerdo; NO VERIFICADO aquí porque no se vio el video):** cada demo cambia algo en el código y muestra el resultado al instante, así que el público ve causa y efecto.
- **Papel del movimiento, el zoom y el video:** central; programación en vivo con respuesta visual inmediata.
- **Principio:** muestra causa y efecto: cambia una sola cosa y deja que el público vea la consecuencia en el acto.
- **Aplicación:** en un dashboard, cambia un filtro y deja que el gráfico responda; en una interfaz de LLM, cambia una palabra del prompt y muestra las dos respuestas lado a lado.
- **Contrapunto:** los entornos de demo se construyeron para la charla, no eran productos terminados; de ahí viene el pulido. Una herramienta que responde al instante en el ensayo puede ir lenta con el wifi de un congreso.
- **Estado:** PARCIAL.

### S05. Google Duplex en I/O (8-may-2018)
- **Autor y año:** Google, presentación principal de I/O, 8 de mayo de 2018.
- **Fuentes:**
  - Blog de Google Research, «Google Duplex: An AI System for Accomplishing Real-World Tasks Over the Phone», 8-may-2018: https://research.google/blog/google-duplex-an-ai-system-for-accomplishing-real-world-tasks-over-the-phone/ (abierta). Describe el sistema, lo limita a dominios acotados, menciona que se autovigila y deriva a operadores humanos, dice que la transparencia importa y que explorarían la mejor forma en los meses siguientes, y presenta las muestras de audio como conversaciones entre un sistema totalmente automático y negocios reales.
  - TechCrunch, «What we know about Google's Duplex demo so far», 18-may-2018: https://techcrunch.com/2018/05/18/what-we-know-about-googles-duplex-demo-so-far/ (abierta). En el escenario, el CEO dijo que el audio era una llamada real a una peluquería real. Google no quiso nombrar los negocios, ni decir si tenía consentimiento para grabar, ni responder las preguntas de un medio sobre la edición. En las muestras nadie dice el nombre del negocio, lo que sugiere cortes. La mejor hipótesis del autor: no era falso, pero se mostraron solo los mejores ejemplos.
  - Un reportaje posterior de Bloomberg según el cual las llamadas se editaron para ocultar los nombres de los negocios aparece solo en resultados de búsqueda (NO VERIFICADO).
- **Qué hace bien:** audio real del sistema real, y una entrada de blog que declara sus límites.
- **Papel del movimiento, el zoom y el video:** audio grabado reproducido en una presentación en vivo.
- **Principio:** si editas una grabación, aunque sea por una buena razón, dilo; un corte sin explicar siembra dudas sobre todo lo demás.
- **Aplicación:** si anonimizas datos para grabar un dashboard, pon una nota visible en pantalla («nombres ocultos para esta grabación»).
- **Contrapunto:** ocultar los nombres protegía a terceros, lo que es legítimo. El debate más grande de esos días fue si el sistema debía identificarse como máquina, algo que queda fuera de este catálogo.
- **Estado:** PARCIAL.

### S06. Tesla Cybertruck, la ventana de «vidrio blindado» (nov-2019)
- **Autor y año:** Tesla, presentación del Cybertruck, noviembre de 2019. La fuente abierta está fechada el lunes 25-nov-2019 y sitúa el evento el jueves anterior en la noche, es decir, el 21 de noviembre.
- **Fuente:** The Drive, «Elon Musk Explains Why the Tesla Cybertruck's Armored Windows Broke On Stage»: https://www.thedrive.com/news/31192/elon-musk-explains-why-the-tesla-cybertrucks-armored-windows-broke-on-stage (abierta). Tras un golpe de mazo en la puerta, una bola de acero lanzada contra la ventana la rompió, y después también la ventana trasera. La explicación de Musk en redes sociales: el golpe del mazo había trizado la base del vidrio, y la prueba de la bola debió ir primero. También publicó un video en cámara lenta del ensayo, horas antes del evento, en el que la prueba salió bien. Los críticos señalaron que eso no explica la ventana trasera. Una página de la BBC estaba bloqueada para la herramienta de lectura.
- **Qué enseña:** el ensayo salió bien y el espectáculo no: un paso anterior cambió el estado del que dependía un paso posterior.
- **Papel del movimiento, el zoom y el video:** demo física en vivo; el video del ensayo se usó después como prueba.
- **Principio:** ensaya la secuencia completa, en el mismo orden y partiendo de un estado limpio.
- **Aplicación:** en un chat con un LLM, los turnos anteriores cambian las respuestas siguientes: empieza la demo en una sesión nueva y ensaya la secuencia exacta. En un dashboard, filtros o cachés que quedaron del ensayo pueden cambiar lo que aparece.
- **Contrapunto:** la explicación viene del CEO de la empresa y la reporta la prensa; no es un informe técnico. No se abrieron las publicaciones originales en redes sociales.
- **Estado:** VERIFICADO (fuente de prensa).

### S07. Google, «Hands-on with Gemini» (dic-2023) y su aclaración
- **Autor y año:** Google, video publicado junto con el anuncio de Gemini, diciembre de 2023.
- **Fuentes:**
  - Google Developers Blog, «How it's Made: Interacting with Gemini through multimodal prompting», 6-dic-2023: https://developers.googleblog.com/2023/12/how-its-made-gemini-multimodal-prompting.html (abierta). Explica los prompts detrás del video: sobre todo imágenes fijas con prompts de texto, algunos con ejemplos resueltos que le enseñan un formato al modelo. En un ejemplo, el autor admite que el modelo no siempre acierta. No dice cómo se editó el video.
  - Engadget, 8-dic-2023, que reporta una columna de Bloomberg: https://www.engadget.com/google-admits-that-a-gemini-ai-demo-video-was-staged-055718855.html (abierta). La interacción no fue en tiempo real ni hubo interacción por voz; Google usó fotogramas fijos del video y prompts de texto. El acortamiento de las respuestas estaba declarado en la descripción del video. Uno de los líderes de Gemini afirmó que todos los prompts y respuestas eran reales y que el video buscaba inspirar a desarrolladores.
  - El texto exacto de la descripción en YouTube (latencia reducida, respuestas acortadas por brevedad) y la afirmación de que la voz se dobló después vienen solo de resultados de búsqueda (NO VERIFICADO; YouTube no se abrió).
- **Qué enseña:** un video con apariencia de conversación en vivo era una reconstrucción hecha con fotogramas fijos y prompts escritos. La aclaración existía, en la descripción y en una entrada para desarrolladores, pero no en el video mismo, y la cobertura se centró en esa distancia.
- **Papel del movimiento, el zoom y el video:** video editado presentado con la forma de una interacción en vivo.
- **Principio:** la forma tiene que calzar con lo que se afirma. Si un clip parece una interacción en tiempo real, debe serlo; si no, dilo en pantalla.
- **Aplicación:** en un clip de una interfaz de LLM, conserva el tiempo de espera real o marca cada corte en pantalla («corte de 12 s»); escribe el prompt real en vez de doblar uno hablado; si acortaste las respuestas, dilo en el clip.
- **Contrapunto:** según Google, las respuestas eran reales; la edición tocó el tiempo y la forma de entrada. La entrada que explica cómo se hizo salió el mismo día.
- **Estado:** PARCIAL.

### S08. OpenAI, transmisión en vivo de GPT-4o (13-may-2024)
- **Autor y año:** OpenAI, evento en vivo «Spring Update», 13 de mayo de 2024.
- **Fuentes:** la página de anuncio de OpenAI (https://openai.com/index/hello-gpt-4o/) devolvió 403 y NO se abrió. Thurrott.com, https://www.thurrott.com/?p=302451 (abierta): evento en vivo, con demos de voces y emociones, canto, resolución de problemas de matemática, descripción de las emociones de una persona y explicación de una base de código; «algunas fallas», como es esperable en una demo en vivo; cifras de latencia declaradas por OpenAI (respuestas de audio desde 232 ms, 320 ms en promedio). Wikipedia, https://en.wikipedia.org/wiki/GPT-4o (abierta): el modo de voz avanzado se atrasó y llegó a los suscriptores de pago en septiembre de 2024; una de las voces se retiró el 20-may-2024 tras una polémica por su parecido con la voz de una actriz.
- **Qué hace bien:** quienes presentaban interactuaron con el modelo en vivo, fallas incluidas, lo que hizo creíble que el producto existía.
- **Papel del movimiento, el zoom y el video:** demo en vivo, transmitida.
- **Principio:** una demo en vivo muestra que el producto existe; no muestra cuándo lo tendrán los usuarios. Di qué está disponible y cuándo.
- **Aplicación:** en una charla de trabajo, marca en la diapositiva o en el clip qué funciona hoy y qué es un prototipo.
- **Contrapunto:** las funciones de voz mostradas en vivo llegaron a los usuarios unos cuatro meses después; el público podía confundir la demo con la disponibilidad. La página de OpenAI no se leyó.
- **Estado:** PARCIAL.

### S09. Anthropic, uso de computador (22-oct-2024)
- **Autor y año:** Anthropic, 22 de octubre de 2024.
- **Fuentes (ambas abiertas):**
  - «Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku»: https://www.anthropic.com/news/3-5-models-and-computer-use . Beta pública; la capacidad se describe como experimental y, a veces, «cumbersome and error-prone» (engorrosa y propensa a errores); desplazarse, arrastrar y hacer zoom todavía le cuestan al modelo; OSWorld (solo capturas de pantalla) 14,9% frente a 7,8% del siguiente sistema; se aconseja a los desarrolladores empezar con tareas de bajo riesgo. Los videos de demostración están enlazados en YouTube (no se vieron).
  - «Developing a computer use model»: https://www.anthropic.com/news/developing-computer-use . Cómo funciona (capturas de pantalla y conteo de píxeles para mover el cursor). Mientras se grababan las demos del lanzamiento, el modelo detuvo por accidente una grabación de pantalla larga y se perdió el material; en otra demo dejó una tarea de programación para mirar fotos de Yellowstone. El desempeño humano en el benchmark ronda el 70–75%. Nota: esta página da 7,7% para el siguiente sistema; la otra, 7,8%.
- **Qué hace bien:** la demo viene con una declaración clara de la tasa de éxito y con relatos de fallas.
- **Papel del movimiento, el zoom y el video:** videos grabados del modelo real operando un computador.
- **Principio:** acompaña la demo con cuántas veces funciona y con un ejemplo de cómo falla; así el público puede calibrar.
- **Aplicación:** con una interfaz de LLM, muestra una ejecución exitosa y di cuántas de tus propias pruebas salieron bien (cuéntalas antes de la charla); muestra una falla si la tienes.
- **Contrapunto:** declarar límites también es buena estrategia de comunicación para una empresa; los videos igual son seleccionados. Una cifra de benchmark no es la cifra de tu tarea.
- **Estado:** VERIFICADO.

### S10. *FTC v. Colgate-Palmolive Co.*, 380 U.S. 374 (1965): maquetas no declaradas
- **Autor y año:** Corte Suprema de los Estados Unidos; alegatos el 10-dic-1964, fallo el 5-abr-1965.
- **Fuente:** https://www.law.cornell.edu/supremecourt/text/380/374 (abierta). Un comercial de televisión mostraba una crema de afeitar que ablandaba una «lija» que en realidad era una lámina de plexiglás con arena pegada. La Corte resolvió que una maqueta no declarada, presentada para que el público crea que ve con sus propios ojos una prueba real, es una práctica engañosa, distinta de la afirmación falsa en sí. La utilería no es el problema: un comercial que no presenta la escena como prueba no está cubierto, y se pueden mostrar simulaciones si no se hace creer al público que mira una prueba real. Dos jueces disintieron: una maqueta que muestra el producto con exactitud no es engañosa en sí misma.
- **Qué enseña:** la frontera no está entre lo real y lo simulado, sino en si al público se le dice que está viendo una prueba.
- **Papel del movimiento, el zoom y el video:** ninguno; es una norma sobre demostraciones.
- **Principio:** si presentas algo como demostración, tiene que ser lo que parece; una maqueta está bien si se declara como tal.
- **Aplicación:** una maqueta de diseño, o una interfaz conectada a respuestas preparadas, sirve en una charla si dice «maqueta» en pantalla; no sirve si se presenta como el sistema funcionando.
- **Contrapunto:** es derecho publicitario de los Estados Unidos, no una regla para charlas científicas o internas; el traslado es una analogía.
- **Estado:** VERIFICADO.

### S11. Apple, reglas de las vistas previas de apps en la App Store
- **Autor y año:** Apple, página «App Previews» para desarrolladores (versión vigente, revisada en octubre de 2026).
- **Fuente:** https://developer.apple.com/app-store/app-previews/ (abierta). Hasta tres vistas previas por idioma, de hasta 30 segundos cada una; deben mostrar solo contenido capturado desde la app misma en el dispositivo, sin filmar personas ni manos usándolo; se pueden agregar elementos gráficos, como indicadores de toque, para mostrar la interacción; hay que capturar la resolución nativa de la interfaz en vez de hacer zoom sobre la vista; las transiciones no deben sugerir funciones que la app no tiene; se reproducen sin sonido por defecto, así que el texto en pantalla debe ser legible y durar lo suficiente para leerse; hay que declarar las funciones que requieren compra, suscripción o inicio de sesión.
- **Qué hace bien:** convierte «muestra el producto real» en reglas concretas de producción.
- **Papel del movimiento, el zoom y el video:** captura de pantalla grabada; se permiten anotaciones; se desaconseja el zoom en este formato.
- **Principio:** graba la interfaz real, anota la interacción y no sugieras lo que no puede hacer.
- **Aplicación:** en una app web: captura la ventana real del navegador, agrega un indicador de clic, evita transiciones llamativas y deja el texto en pantalla el tiempo suficiente para leerlo.
- **Contrapunto:** son reglas de una tienda para clips cortos, sin sonido y de reproducción automática en pantallas chicas. El consejo de no hacer zoom probablemente protege la fidelidad al dispositivo, no el aprendizaje; Apple no cita evidencia.
- **Estado:** VERIFICADO.

---

## Parte B. La evidencia sobre cómo mostrar software

### S12. Hans van der Meij y colegas: pautas para videotutoriales de software (2013, 2014, 2022)
- **Fuentes:**
  - van der Meij y van der Meij (2013), «Eight guidelines for the design of instructional videos for software training», *Technical Communication* 60(3), 205–228. Sin DOI. Metadatos y resumen en OpenAlex (registro W2096464448) y en la página del repositorio de la Universidad de Twente (abierta el 30-oct-2026). El PDF del repositorio estaba tras una verificación humana y NO se abrió.
  - van der Meij y van der Meij (2014), «A comparison of paper-based and video tutorials for software learning», *Computers & Education* 78, 150–159, DOI 10.1016/j.compedu.2014.06.003 (Crossref; resumen en la página de la Universidad de Twente, abierta).
  - van der Meij y Höpfner (2022), «Eleven Guidelines for the Design of Instructional Videos for Software Training», *Technical Communication* 69(3), 5–23, DOI 10.55177/tc786532 (Crossref; resumen en OpenAlex). El texto completo no estaba accesible (la editorial devolvió 403 y el sitio de la revista estaba en mantención).
- **Hallazgos (resúmenes, en palabras propias):** las pautas de 2013 se basan en investigación sobre cómo procesamos información visual y verbal; tres estudios con videos sobre las opciones de formato de un procesador de texto encontraron mejor motivación, más habilidad justo después del entrenamiento y mejor retención una semana después que con un tutorial en papel. Los autores las limitan a tutoriales, no a videos de consulta. En el estudio de 2014 (111 niños de unos 12 años, cuatro condiciones), todas las condiciones con video superaron al papel durante el entrenamiento; en la prueba posterior, solo el video completo y la combinación de vista previa en video + procedimiento en papel superaron al papel. En 2022 las ocho pautas se reorganizaron y ampliaron a once.
- **Las pautas en sí:** NO VERIFICADAS aquí, porque no se leyó ningún texto completo. Un fragmento de buscador dice que la primera pauta de 2022 es mantener los videos cortos para evitar el abandono temprano.
- **Papel del movimiento, el zoom y el video:** grabaciones de pantalla narradas de tareas de software.
- **Principio:** una grabación de pantalla narrada y bien diseñada puede enseñar a usar software mejor que instrucciones en papel.
- **Aplicación:** en una charla de laboratorio en que además se entrega la herramienta, una grabación corta y narrada por tarea es un buen complemento de la guía escrita.
- **Contrapunto:** un solo grupo de investigación, escolares y estudiantes, un solo tipo de software; son tutoriales para aprender, no demos frente a un público.
- **Estado:** PARCIAL.

### S13. Entrenamiento basado en demostraciones: lo que rodea a la demo
- **Fuentes (metadatos en Crossref; resúmenes en OpenAlex o en un repositorio universitario):**
  - Rosen, Salas, Pavlas, Jensen, Fu y Lampton (2010), «Demonstration-Based Training: A Review of Instructional Features», *Human Factors* 52(5), 596–609, DOI 10.1177/0018720810381071.
  - van der Meij y van der Meij (2016), «Demonstration-based training (DBT) in the design of a video tutorial for software training», *Instructional Science* 44(6), 527–542, DOI 10.1007/s11251-016-9394-9.
  - van der Meij, van der Meij, Voerman y Duipmans (2018, en línea dic-2017), «Supporting motivation, task performance and retention in video tutorials for software training», *Educational Technology Research and Development* 66(3), 597–614, DOI 10.1007/s11423-017-9560-z.
  - Brar y van der Meij (2017), «Complex software training: Harnessing and optimizing video instruction», *Computers in Human Behavior* 70, 475–485, DOI 10.1016/j.chb.2017.01.014 (resumen leído en la página de la Universidad de Twente).
- **Hallazgos (en palabras propias):** Rosen et al. revisan los elementos que se agregan a una demostración y los agrupan según sean activos o pasivos y según cuándo ocurren: guía pasiva, actividades preparatorias (antes), concurrentes (durante), retrospectivas (después) y prospectivas (planificar el uso futuro); concluyen que falta investigación sobre cuándo funciona cada uno. En 2016, con 55 escolares, una demostración seguida de un video breve de repaso superó a la demostración sola. En el estudio de 2017–2018 (65 niños), todos los tutoriales mejoraron la autoeficacia y el conocimiento de procedimientos, pero agregar un repaso o una segunda demostración no hizo diferencia. En Brar y van der Meij (curso de estadística), agregar repasos no tuvo un efecto principal; cuánto del video vieron los estudiantes predijo su conocimiento.
- **Papel del movimiento, el zoom y el video:** la demostración es un video de la tarea; los «elementos instruccionales» son lo que va antes y después.
- **Principio:** una demo es más que la grabación: di cuál es la tarea antes y resume después. La evidencia sobre los repasos es mixta (un experimento a favor, dos nulos).
- **Aplicación:** antes de cada clip, una frase: «ahora voy a filtrar el dashboard a un instrumento y exportar la tabla»; después, una frase con el resultado.
- **Contrapunto:** son estudiantes aprendiendo software, no un público mirando una charla; y el efecto de los repasos no se replicó de forma consistente.
- **Estado:** VERIFICADO (resúmenes; textos completos no leídos).

### S14. Señalización de la relación texto-imagen: Richter, Scheiter y Eitel (2016), y un estudio con video de software (2023)
- **Fuentes:**
  - Richter, Scheiter y Eitel (2016), «Signaling text-picture relations in multimedia learning: A comprehensive meta-analysis», *Educational Research Review* 17, 19–36, DOI 10.1016/j.edurev.2015.12.003 (Crossref). La página del artículo devolvió 403; el resumen se leyó en el registro de PsychArchives de los datos del meta-análisis: https://psycharchives.org/handle/20.500.12034/2019 (abierta).
  - Seguimiento de los mismos autores (2018), «Signaling Text-Picture Relations in Multimedia Learning: The Influence of Prior Knowledge», *Journal of Educational Psychology* (registro ERIC EJ1178409, resumen abierto).
  - Ragazou y Karasavvidis (2023), «Effects of Signaling and Practice Types in Video-Based Software Training», *Education Sciences* 13(6), 602, DOI 10.3390/educsci13060602 (Crossref; resumen en OpenAlex). La página de la editorial devolvió 403.
- **Hallazgos (en palabras propias):** Richter et al. combinaron 27 estudios (45 comparaciones, N = 2.464): las señales que vinculan texto e imagen (códigos de color, referencias explícitas) mejoraron la comprensión y la transferencia, r = 0,17 (IC 95% 0,11 a 0,22), con el beneficio concentrado en quienes tenían poco conocimiento previo. En el estudio de campo de 2018, las mismas señales ayudaron a los estudiantes con poco conocimiento previo y perjudicaron a los que sabían más (el efecto de inversión por experticia). Ragazou y Karasavvidis (114 estudiantes de enfermería, videotutoriales de software, diseño 2 × 2) encontraron que la señalización aportó al desempeño en la tarea y a la autoeficacia. Qué tipo de señales usaron queda NO VERIFICADO (no se abrió el texto completo).
- **Papel del movimiento, el zoom y el video:** señales que amarran la narración al lugar correcto de la pantalla.
- **Principio:** vincula lo que dices con lo que está en pantalla; ayuda sobre todo a quien es nuevo en el material.
- **Aplicación:** el público de una charla de laboratorio sabe la ciencia, pero no conoce tu interfaz. Señala la interfaz (dónde mirar, qué se apretó) y no sobreseñales los conceptos del área que ya conoce.
- **Contrapunto:** un efecto entre pequeño y mediano, sobre todo con texto e imágenes estáticas, no con grabaciones de pantalla; un solo estudio con video de software, sin texto completo leído.
- **Estado:** VERIFICADO (resúmenes).

### S15. Meta-análisis de señalización: Schneider, Beege, Nebel y Rey (2018), más Jamet (2014)
- **Fuentes:**
  - Schneider, Beege, Nebel y Rey (2018), «A meta-analysis of how signaling affects learning with media», *Educational Research Review* 23, 1–24, DOI 10.1016/j.edurev.2017.11.001 (Crossref). El artículo devolvió 403. Las cifras vienen de la reseña breve del Clearing House Unterricht (Universidad Técnica de Múnich), un resumen en alemán, PDF abierto: https://www.clearinghouse.edu.tum.de/wp-content/uploads/2018/12/CHU_KR-22_-Schneider_2017_Lernmaterial_Hervorhebungen.pdf
  - Jamet (2014), «An eye-tracking study of cueing effects in multimedia learning», *Computers in Human Behavior* 32, 47–53, DOI 10.1016/j.chb.2013.11.013 (Crossref). La copia en HAL mostró una página de acceso denegado; el resumen NO se leyó. Fragmentos de buscador describen un estudio con seguimiento ocular, diagramas y explicaciones habladas, con y sin señales visuales.
- **Hallazgos (según el resumen, en palabras propias):** 103 estudios, 12.201 participantes. Las señales mejoraron la retención (g = 0,53) y la transferencia (g = 0,33), redujeron la carga cognitiva (g = 0,25), subieron levemente la motivación (g = 0,13), alargaron el tiempo de estudio (g = 0,30) e hicieron que se mirara más tiempo lo señalado (g = 0,39). En la transferencia con imágenes importó el tipo de señal: el resaltado con color ayudó; los indicadores de ruta, las etiquetas, los focos de luz y los organizadores gráficos no; el parpadeo perjudicó la transferencia. Las señales funcionaron en todas las asignaturas salvo matemática.
- **Papel del movimiento, el zoom y el video:** es la evidencia más cercana a «resaltar donde ocurre la acción». Un foco de luz (un círculo iluminado sobre parte de la imagen) es lo más parecido a un efecto de zoom, y no ayudó a la transferencia; no se encontró ningún estudio sobre hacer zoom en una grabación de pantalla.
- **Principio:** resalta con color el elemento del que hablas, sincronizado con la narración; no lo hagas parpadear.
- **Aplicación:** en un clip grabado, un recuadro o un tinte de color sobre el botón, la celda o el mensaje del chat en el momento en que la narración lo nombra; sin parpadeos ni pulsos.
- **Contrapunto:** las cifras vienen de un resumen secundario, no del artículo; cada moderador se apoya en pocos estudios; la mayoría usa materiales estáticos, no grabaciones de pantalla.
- **Estado:** PARCIAL.

### S16. Segmentación: Rey et al. (2019)
- **Fuente:** Rey, Beege, Nebel, Wirzberger, Schmitt y Schneider (2019), «A Meta-analysis of the Segmenting Effect», *Educational Psychology Review* 31(2), 389–419, DOI 10.1007/s10648-018-9456-4 (Crossref). Resumen leído en ERIC (registro EJ1217373). La página de la editorial redirigía a un inicio de sesión.
- **Hallazgos (resumen, en palabras propias):** 56 investigaciones, 88 comparaciones. Se aprende mejor con instrucciones divididas en segmentos con sentido que con una sola unidad continua: efectos entre pequeños y medianos en retención y transferencia, menor carga cognitiva y más tiempo de estudio. Los efectos se mantuvieron también cuando el ritmo lo fija el sistema y no quien aprende. Quienes tenían más conocimiento previo se beneficiaron más en retención.
- **Papel del movimiento, el zoom y el video:** trata directamente del multimedia dinámico: cortarlo en partes con pausas.
- **Principio:** divide la demo en segmentos con sentido y haz una pausa entre ellos.
- **Aplicación:** una tarea por clip; en una charla en vivo, detente después de cada paso y di qué acaba de pasar antes de seguir.
- **Contrapunto:** los segmentos «con sentido» exigen saber dónde están los cortes naturales; los cortes arbitrarios no son lo que se probó.
- **Estado:** VERIFICADO (resumen).

### S17. Subtítulos y narración: Adesope y Nesbit (2012), y Fyfield, Henderson y Phillips (2022)
- **Fuentes:**
  - Adesope y Nesbit (2012), «Verbal redundancy in multimedia learning environments: A meta-analysis», *Journal of Educational Psychology* 104(1), 250–263, DOI 10.1037/a0026147 (Crossref; resumen en OpenAlex).
  - Fyfield, Henderson y Phillips (2022), «Improving instructional video design: A systematic review», *Australasian Journal of Educational Technology*, pp. 150–178, DOI 10.14742/ajet.7296 (Crossref; resumen en OpenAlex).
- **Hallazgos (resúmenes, en palabras propias):** Adesope y Nesbit (57 estudios): el texto hablado + escrito no rindió peor que el solo escrito y superó al solo hablado; la ventaja apareció en quienes tenían poco conocimiento previo, en materiales con ritmo fijado por el sistema y en materiales sin imágenes. Mostrar **términos clave** sacados de la narración funcionó mejor que el texto completo palabra por palabra y explicó buena parte de la ventaja. Fyfield et al. (113 artículos, 28 principios): para el video instruccional, la coherencia, la segmentación y el control por parte de quien aprende tienen respaldo, pero la redundancia y la modalidad no; los videos más cortos, segmentados, coherentes y ligados a una actividad tienen más probabilidad de ayudar.
- **Papel del movimiento, el zoom y el video:** texto en pantalla frente a voz en un medio dinámico.
- **Principio:** la regla habitual «nunca muestres las mismas palabras que dices» no tiene respaldo para el video. Lo que la evidencia favorece son términos clave en pantalla, no el guion completo.
- **Aplicación:** narra; ofrece subtítulos revisados por una persona como una pista que se puede activar; en pantalla, solo etiquetas cortas (el nombre del filtro, el número que hay que mirar).
- **Contrapunto:** la ventaja de la redundancia desapareció cuando había imágenes, que es el caso de las grabaciones de pantalla; así que los subtítulos se justifican sobre todo por accesibilidad y por la reproducción sin sonido (S20), no por ganancias de aprendizaje.
- **Estado:** VERIFICADO (resúmenes).

### S18. Mayer, Fiorella y Stull (2020), «Five ways to increase the effectiveness of instructional video»
- **Fuente:** *Educational Technology Research and Development* 68(3), 837–852, DOI 10.1007/s11423-020-09749-6 (Crossref). Resumen leído en ERIC (registro EJ1256250).
- **Hallazgos (resumen, en palabras propias):** se aprende mejor cuando el instructor en pantalla dibuja los gráficos mientras explica (dibujo dinámico), cuando alterna la mirada entre el público y la pizarra (guía de la mirada), cuando la lección pide resumir o explicar (actividad generativa), cuando una demostración se filma en primera persona (perspectiva) y cuando se agregan subtítulos a una narración en un segundo idioma de quien aprende (subtítulos). Agregar video interesante pero ajeno al tema no ayuda (detalles seductores).
- **Papel del movimiento, el zoom y el video:** son los principios más directos para demos en video.
- **Principio:** filma desde el punto de vista de quien usa la herramienta; elimina el material decorativo; haz pensar al público.
- **Aplicación:** una grabación de pantalla ya es en primera persona: no filmes un notebook por encima del hombro de alguien (la regla de Apple en S11 coincide). Si narras en inglés para un público hispanohablante, o al revés, agrega subtítulos. Nada de video de archivo. Antes de mostrar el resultado, pregúntale a la sala qué espera.
- **Contrapunto:** es una revisión, en buena parte, de experimentos de los propios autores; el resumen no dice qué tareas usaron los estudios de perspectiva, así que aplicarlo a grabaciones de pantalla es una inferencia.
- **Estado:** VERIFICADO (resumen).

### S19. Guo, Kim y Rubin (2014), «How video production affects student engagement»
- **Fuente:** *Proceedings of the first ACM Conference on Learning @ Scale*, 41–50, DOI 10.1145/2556325.2566239 (Crossref). PDF completo leído desde el sitio del autor: https://pg.ucsd.edu/publications/edX-MOOC-video-production-and-engagement_LAS-2014.pdf
- **Hallazgos (en palabras propias):** 6,9 millones de sesiones de visualización en cuatro cursos de edX. La duración fue, por lejos, la señal más fuerte: la mediana del tiempo visto fue de 6 minutos como máximo, sin importar el largo del video, y muchas personas dejaban antes de la mitad los videos de más de 9 minutos. Los tutoriales dibujados a mano en una tableta retuvieron la atención entre 1,5 y 2 veces más que las diapositivas o las grabaciones de código; los videos que alternaban la cara del instructor con las diapositivas atrajeron más; quienes hablaban más rápido y con más entusiasmo retuvieron mejor la atención. Recomendaciones: planificar antes y cortar los videos en partes de menos de 6 minutos; si muestras diapositivas o código, agrega énfasis dibujando encima; en los tutoriales, la duración importa menos, pero hay que facilitar volver a ver y saltar partes.
- **Papel del movimiento, el zoom y el video:** lo que retuvo la atención fue la anotación en vivo sobre la pantalla (dibujar), no la pantalla sola.
- **Principio:** clips cortos, planificados antes, con marcas dibujadas sobre la pantalla donde ocurre la acción.
- **Aplicación:** mantén cada clip de demo bastante por debajo de 6 minutos; anota sobre la grabación (un círculo, una flecha) mientras explicas.
- **Contrapunto:** mide atención (tiempo visto, intentos de ejercicios), no aprendizaje; son datos observacionales, sin asignación al azar; clases de cursos en línea masivos (MOOC), no demos de producto.
- **Estado:** VERIFICADO.

### S20. Guías de profesionales: Nielsen Norman Group (2020) y GitHub Docs
- **Fuentes:**
  - Harley, «Videos as Instructional Content: User Behaviors and UX Guidelines», Nielsen Norman Group, 19-ene-2020: https://www.nngroup.com/articles/instructional-video-guidelines/ (abierta). Estudio cualitativo con 8 participantes, más investigación anterior de NN/g.
  - GitHub Docs, «Using videos in GitHub Docs», última versión antes de que se retirara: https://github.com/github/docs/blob/d6dcd2305906ed44ba90f64e4a69aa98850a8754/content/contributing/writing-for-github-docs/using-videos-in-github-docs.md (leída mediante la API de GitHub; el archivo se eliminó el 7-abr-2026, en un cambio que quitó la inserción de videos del sitio).
- **Qué dicen (en palabras propias):**
  - NN/g: el video debe complementar el texto, no reemplazarlo; para procesos de varios pasos, un video corto por paso en vez de uno largo; mostrar la duración antes de reproducir; subtítulos para poder seguirlo sin sonido; capítulos en los videos largos; poner el video donde corresponde.
  - GitHub Docs: una lista de chequeo que descarta un video de más de 5 minutos; presentaciones de producto de menos de un minuto; videos de funciones lo más cortos posible y de 5 minutos como máximo; tutoriales de 5 minutos como máximo cada uno y 15 en total; abrir con la agenda (pasos y objetivo); usar video cuando se muestra movimiento o un cambio de estado, aunque capturas o texto pueden bastar; no usar video para funciones que cambian rápido ni para mostrar una tarea sin explicarla; sin parpadeos; subtítulos revisados por una persona; todo texto debe quedar en pantalla más tiempo del que toma leerlo dos veces en voz alta; una transcripción descriptiva; sin reproducción automática; una fecha de mantención para cada video.
- **Papel del movimiento, el zoom y el video:** reglas prácticas de producción.
- **Principio:** corto, una tarea por video, con texto al lado y accesible; video solo cuando el contenido es un movimiento o un cambio de estado.
- **Aplicación:** junto a cada clip grabado, una lista escrita con los mismos pasos (en el repositorio o en el material que entregas), subtítulos y una fecha para volver a grabarlo cuando cambie la interfaz.
- **Contrapunto:** son guías de profesionales; el estudio de NN/g es cualitativo y pequeño; GitHub retiró su guía en 2026 junto con su infraestructura de video, un recordatorio del costo de mantención.
- **Estado:** VERIFICADO.

---

## Síntesis: cómo hacer una demo de software

Diez principios para una charla de laboratorio o de trabajo que muestra un dashboard o una interfaz de LLM, en vivo o grabada. Cada uno remite a las fichas que lo sustentan y dice qué tan fuerte es la evidencia.

1. **Muestra el producto real, o declara la maqueta donde el público está mirando.** El problema no es simular, sino presentar la simulación como prueba. Una aclaración escondida en la descripción bajo el video no bastó para evitar la polémica. Fichas: S10 (norma legal), S11 (norma de plataforma), S07 y S05 (casos), S01. *Evidencia: oficio (ley, reglas de plataforma, casos). Sin experimentos.*
2. **Escribe la tarea y ensaya la secuencia exacta, en el equipo exacto y desde un estado limpio.** Fichas: S02 (los problemas del ensayo fueron el proyector), S03 (equipo sin probar), S06 (el ensayo salió bien; la secuencia cambió el estado), S04. *Evidencia: oficio (casos).*
3. **Ten un respaldo grabado, y prueba también la grabación.** Fichas: S03, S06, S08 (fallas en vivo), S09 (se perdió la grabación misma), F03. *Evidencia: oficio (casos). Ninguna fuente prescribe explícitamente un clip de respaldo; es una inferencia a partir de las fallas.*
4. **Una tarea por clip, en segmentos cortos y con sentido.** Fichas: S16 (meta-análisis), S17 (revisión sistemática: videos más cortos y segmentados), S19 (observacional: la visualización cae pasados unos 6 minutos), S20 (≤ 5 min por video, uno por paso), S12. *Evidencia: meta-análisis + observacional + oficio.*
5. **Di el objetivo antes del clip y el resultado después.** Fichas: S13 (elementos preparatorios y retrospectivos; repasos: un experimento a favor y dos nulos), S20 (abrir con la agenda). *Evidencia: experimentos mixtos + oficio.*
6. **Resalta donde ocurre la acción, con color, sincronizado con la narración y nunca parpadeando.** Fichas: S14 y S15 (meta-análisis: las señales ayudan; el color ayudó a la transferencia; los focos de luz no; el parpadeo perjudicó), S11 (indicadores de toque), S19 (dibujar sobre la pantalla retuvo la atención). *Evidencia: meta-análisis. No se encontró ningún estudio sobre hacer zoom en una grabación de pantalla.*
7. **Narra; los subtítulos, como pista aparte; en pantalla, solo términos clave.** La regla «no muestres las palabras que dices» no tiene respaldo para el video. Fichas: S17 (meta-análisis y revisión sistemática), S18 (los subtítulos ayudan en un segundo idioma), S20 (accesibilidad, reproducción sin sonido). *Evidencia: meta-análisis + experimento + oficio.*
8. **Señala tu interfaz, no el área que el público ya domina.** Las señales ayudan sobre todo a los novatos y pueden perjudicar a los expertos; la segmentación, en cambio, ayudó más a quienes sabían más. Fichas: S14 (inversión por experticia), S16. *Evidencia: meta-análisis + un estudio de campo.*
9. **Saca lo que sobra: material decorativo, transiciones llamativas, transiciones que sugieren funciones.** Fichas: S18 (detalles seductores), S11 (transiciones), S20 (sin parpadeos), F25 (coherencia). *Evidencia: experimento + oficio.*
10. **Declara los límites, la tasa de éxito y lo que está disponible hoy.** Fichas: S09 (tasa de éxito y fallas), S05 (dominios acotados), S07 (el modelo no siempre acierta), S08 (mostrado en vivo, entregado meses después). *Evidencia: oficio (casos).*

### Reglas para los videos de demo que graba el kit (desde una app web real)

Se mantienen, porque las fuentes las respaldan (nivel de evidencia entre corchetes):

1. **Graba la app real en un navegador real.** Si algo es maqueta, está acelerado o tiene cortes, dilo en pantalla: «maqueta», «acelerado 2×», «corte de 12 s». [oficio: S10, S11, S07]
2. **Escribe el guion antes de grabar:** tarea, entradas exactas, resultado esperado. Parte desde un estado limpio: sesión o conversación nueva, filtros borrados, un conjunto de datos fijo. [oficio: S02, S06; observacional: S19, preproducción]
3. **Una tarea por clip.** Clips de presentación de menos de 1 minuto; clips de tarea de 5 minutos como máximo y, como meta, bastante por debajo de 6. [meta-análisis: S16; observacional: S19; oficio: S20]
4. **Abre con el objetivo en una frase y cierra con el resultado.** [oficio: S20; experimentos mixtos: S13]
5. **Resalta el elemento sobre el que actúas** con un recuadro o un tinte de color en el momento en que la narración lo nombra; sin parpadeos ni pulsos. [meta-análisis: S14, S15]
6. **Narración + subtítulos revisados por una persona como pista aparte;** en pantalla, solo términos clave, que duren lo suficiente para leerlos dos veces en voz alta. [meta-análisis: S17; experimento: S18; oficio: S20]
7. **En charlas en vivo, ten el clip grabado listo** y prueba antes el equipo, la red y las cuentas. [oficio: S03, S06, S09]
8. **En demos de LLM, conserva el tiempo de espera real o marca el corte,** y di cuántas de tus pruebas funcionaron. [oficio: S07, S09]
9. **Sin material decorativo, video de archivo ni transiciones** que sugieran lo que la app no hace. [experimento: S18; oficio: S11]
10. **Publica los pasos escritos junto a cada clip** y fija una fecha para volver a grabarlo cuando cambie la interfaz. [oficio: S20]

Reglas del encargo que se **ajustaron o no se mantuvieron**:

- **«Haz zoom donde ocurre la acción».** No se encontró ningún estudio sobre hacer zoom en grabaciones de pantalla; Apple aconseja capturar la resolución nativa en vez de hacer zoom (S11), y los focos de luz no ayudaron a la transferencia (S15). Usa el zoom solo para que un texto chico se pueda leer, como un único paso lento, y prefiere el resaltado con color. [sin evidencia directa; oficio]
- **«Mueve el cursor de forma visible y lenta».** No se encontró ningún estudio sobre la velocidad o el tamaño del cursor. Coincide con el principio de aprehensión (F29: el cambio tiene que ser lo bastante lento para percibirse) y con filmar desde la perspectiva de quien usa la herramienta (S18), pero sigue siendo una regla de oficio: agranda el puntero, muestra un indicador de clic y no muevas el cursor mientras hablas de otra cosa. [oficio]
- **«Subtítulos o narración, pero no ambos leyendo el mismo texto».** No tiene respaldo para el video (S17): la reemplaza la regla 6.

## Límites de este catálogo

- Varias fuentes primarias no se pudieron leer: la página de GPT-4o de OpenAI (403), la descripción en YouTube del video de Gemini, los textos completos de las pautas de van der Meij (2013 y 2022), los artículos de Schneider et al. y de Richter et al. (solo resúmenes o una reseña), el texto completo del estudio de señalización con software de 2023, y Jamet (2014), cuyo resumen no se leyó.
- No se vieron los videos de las demos (S01, S02, S04, S05, S07, S08, S09); lo que se dice de ellas viene de las fuentes indicadas.
- Revisado y no incluido: la entrada de lanzamiento de GitHub Copilot (29-jun-2021, https://github.blog/news-insights/product-news/introducing-github-copilot-ai-pair-programmer/, abierta) confirma una vista previa técnica con inscripción, pero no dice cómo se mostró el producto ni declara límites, así que no aporta una lección sobre demos. Los videos de producto de Stripe y de Linear no se incluyeron porque no se encontró una fuente primaria que describa su método. Un video muy comentado de un camión de otra empresa, supuestamente montado, no se incluyó porque los comunicados del regulador que se abrieron no lo mencionan.
- La mayor parte de la investigación trata de aprender con tutoriales (estudiantes y escolares), no de un público experto mirando una charla; aplicarla a las demos es una inferencia, marcada donde importa.
