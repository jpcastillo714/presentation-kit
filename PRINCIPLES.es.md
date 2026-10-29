# Principios del kit

[English](PRINCIPLES.md) · Español

Síntesis de `docs/charts.es.md` (fichas G) y `docs/presentations.es.md` (fichas F), con fuentes verificadas en
octubre de 2026. Cada principio dice de qué fichas sale y cuánto pesa su
evidencia: **experimento** (hay un estudio controlado), **réplica** (hay estudio y se repitió), **oficio** (experiencia de
autores reconocidos, sin experimento). Son una lectura de las fuentes, no leyes.

## Antes de abrir una diapositiva

1. **Una frase que la audiencia recuerde en una semana.** Todo lo que no la sostiene sale o va al anexo.
   F34 Bourne, F27 Doumont. *Oficio.*
2. **Esta audiencia, no una genérica.** Qué sabe ya, qué no, qué decide. Un comité pide rigor y límites; un equipo pide
   intuición y lo que cambia para su trabajo. F27, F34, F12. *Oficio.*
3. **Primero el guion, después el diseño.** La lista de títulos, leída de corrido, tiene que contar la historia sola.
   F26 Alley, F08 Duarte. *Oficio*, apoyado por el experimento de F26.

## Cada diapositiva

4. **El título es la conclusión; el cuerpo es la evidencia.** Una oración completa arriba («La atmósfera es un prisma»),
   una figura que la prueba abajo. No viñetas como cuerpo. F26 (experimento aleatorizado, Garner y Alley 2013:
   mejor comprensión, menos ideas erróneas), F06 Tufte, F25 Mayer. *Experimento.*
5. **Una idea por diapositiva.** Si la figura necesita dos títulos, son dos diapositivas. No hay un número mágico de
   viñetas: el «7 ± 2» no se deriva de Miller. F28 Sweller, F30, F25 (segmentación). *Experimento (aprendizaje).*
6. **El dato real antes que el modelo.** Mostrar el espectro, la imagen, la serie de telemetría real a tamaño grande;
   después la explicación. El ejemplo concreto antes de la regla general. F23 Rubin, F22 EHT, F11, F12, F16, G25.
   *Oficio.*
7. **Guía la mirada y no leas la diapositiva.** Resalta con flecha, color o recuadro lo que estás comentando; la voz
   explica, la pantalla no repite el texto que dices. Palabras y figura juntas, no en zonas separadas. F25 (señalización,
   redundancia, contigüidad espacial), F29. *Experimento (aprendizaje).*
8. **Cada cifra con su fuente, en la misma diapositiva.** Una línea discreta abajo: autor y año, o «proyecto». Declara
   los límites: qué no se midió, qué es modelo y qué es dato. F20 Bergstrom y West, F05 (caso Dimmock), F16, G12.
   *Oficio.*

## Cada figura

9. **Grafica antes de resumir en un número.** La distribución, no solo el promedio; los residuos, no solo el R².
   G7 Anscombe, G14 Tukey. *Oficio*, bien establecido.
10. **Los ejes los elige la pregunta.** Tiempo desde un evento y no fecha; log-log si es una potencia; avisa cuando la
    escala log puede ocultar algo. G8 H-R, G10 FT, G19. *Oficio.*
11. **Posición sobre ejes comunes antes que área o color.** Puntos y barras alineadas antes que tortas o burbujas.
    G20 Cleveland y McGill (*réplica*: Heer y Bostock 2010 mantienen el orden general; el ángulo no salió peor que la
    longitud).
12. **El color es un dato.** Escalas perceptualmente uniformes (viridis, cividis, las de Crameri); nunca arcoíris para
    una magnitud continua; rojo-verde nunca como único contraste. La leyenda dice qué significa el color.
    G22 Crameri, G13 Bertin, G24 Gaia. *Medido* (gradientes de las escalas) y *oficio*.
13. **Compara lado a lado, con los mismos ejes.** Múltiplos pequeños antes que una figura con diez líneas. G11 Tufte,
    G9 NYT. *Oficio.*
14. **Adapta la figura al medio.** La figura del informe no es la de la diapositiva: en pantalla, letra grande, menos
    paneles, un solo mensaje. G21 Rougier, G25. *Oficio.*
15. **Advierte cómo leer lo que se presta a malas lecturas.** Un t-SNE no prueba que dos grupos sean distintos; una
    correlación en un mapa no es causa. G18, G1. *Oficio*, con demostraciones.

## Cuándo animar (regla explícita)

La evidencia no dice «nunca animes»: dice que la animación ayuda cuando lo que se enseña **es un cambio** y casi
siempre empata con una buena figura estática en lo demás (F29: Tversky et al. 2002; Höffler y Leutner 2007, d = 0,37;
Ploetzner et al. 2020 y 2021). *Experimento y meta-análisis.*

Anima solo si se cumplen las cuatro:

- (a) lo que se muestra **es** una transformación: algo gira, se desplaza, crece, cambia de escala o de forma;
- (b) dos o tres figuras estáticas con flechas no dicen lo mismo;
- (c) es lenta, esquemática y mueve una sola cosa a la vez, con una marca que guía la vista;
- (d) tú la narras y puedes detenerla (avanza con tecla, no sola).

Nunca: transiciones decorativas entre diapositivas, texto que aparece letra por letra, resultados que se comparan (el
ojo necesita ver los dos valores a la vez), cosas que no cambian. Toda animación tiene un **estado final estático** que
sale en el PDF.

Mostrar paso a paso (revelar partes de una figura con la tecla) no es animar: es segmentar (F25) y vale para cualquier
diapositiva densa.

## Dos registros, la misma regla

El kit tiene dos registros y los dos cumplen la regla de arriba; cambia cuánto del contenido es un cambio y cuánto
se invierte en mostrarlo.

- **Sobrio** (`examples/anscombe`): fondo claro, figuras fijas, sin animación. Para comités,
  reuniones de trabajo y cuando el tiempo de preparación es corto.
- **Expresivo** (`examples/exoplanets`): fondo oscuro con profundidad, figuras a pantalla completa y una
  animación en casi cada diapositiva, **porque en ese tema casi todo es un cambio** (un planeta que cruza, una
  órbita, líneas que se corren, ruido que baja, una escala que se recorre). Para charlas donde se explica un mecanismo.

En los dos: ninguna animación sin las cuatro condiciones; el fundido corto entre diapositivas es la única transición;
y después de una racha en movimiento, una diapositiva quieta marca que lo que sigue es para discutir.

## Lista de revisión (antes de entregar)

Recorre la presentación con esta lista. Si algo falla, se corrige antes de mostrarla.

- [ ] Leídos de corrido, los títulos cuentan la historia completa.
- [ ] Cada título es una oración con verbo, no un rótulo («Resultados», «Metodología»).
- [ ] Cada cifra tiene su fuente en la misma diapositiva; lo que es modelo dice que es modelo.
- [ ] Ninguna figura usa arcoíris para una magnitud continua; los ejes tienen nombre y unidad.
- [ ] La letra de las figuras se lee desde el fondo de la sala (en 1920×1080, nada bajo ~22 px).
- [ ] Cada animación cumple las cuatro condiciones y tiene estado final para el PDF.
- [ ] Nada decorativo que compita con la evidencia: sin íconos, tarjetas ni efectos. En el registro expresivo, un fondo
      con profundidad vale si no baja el contraste del texto ni de las figuras.
- [ ] Hay una diapositiva de cierre con lo que se pide o lo que queda abierto, no un «¡Gracias!» solo.
- [ ] Lo denso que no cabe está en el anexo, no apretado en una diapositiva.
- [ ] Se ensayó en voz alta con reloj.
