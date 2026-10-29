---
titulo: Cómo encontrar un planeta que no se puede ver
autor: kit-presentaciones · ejemplo expresivo
fecha: 2026
perfil: noche
idioma: es
transicion: fundido
audiencia: Un laboratorio de datos o de astronomía que quiere entender las dos señales con que se descubren exoplanetas.
mensaje: La sombra del tránsito da el tamaño del planeta; el bamboleo de la estrella da su masa. Una Tierra deja señales más de cien veces más chicas que un Júpiter.
---

<!-- Ejemplo del registro expresivo: perfil «noche», figuras a pantalla completa y cinco escenas animadas
     (animaciones.js). Todas las cifras se calculan en animaciones.js con constantes públicas. -->

## Cómo encontrar un planeta que no se puede ver
@tipo portada
@clase completa
@anim portada
@subtitulo Dos señales diminutas: la sombra y el bamboleo
> El espectro de fondo se mece: así se ve, muy exagerado, una estrella que se acerca y se aleja.
@porque La portada ya enseña algo: el espectro que se mece es una de las dos señales de la charla, exagerada. No es decoración (F11: cada movimiento con propósito).

## Cuando un planeta pasa por delante, su estrella se apaga un poco
@antetitulo La sombra
@clase completa
@anim transito
@pasos 1
@fuente Profundidad = (R_planeta / R_estrella)², con los radios nominales de la IAU (2015): Júpiter frente al Sol, 1,06 %; la Tierra, 84 ppm. Sin oscurecimiento hacia el borde; tamaños de la Tierra no a escala en la curva.
> Primero un planeta como Júpiter: la estrella pierde un 1 % de su luz. Al avanzar, uno como la Tierra: 84 partes por millón, y la escala vertical cambia para que se vea.
@porque La curva de luz se dibuja al mismo tiempo que el planeta cruza: causa y efecto juntos (contigüidad temporal, F25). El cambio de escala se dice en el eje, no se esconde (G10).

## La estrella también se mece: la Tierra mueve al Sol apenas 9 cm/s
@antetitulo El bamboleo
@clase completa
@anim orbita
@pasos 2
@fuente Tercera ley de Kepler con órbita circular: la Tierra induce 8,9 cm/s en el Sol; Júpiter, 12,5 m/s. Movimiento y corrimiento exagerados para que se vean.
> Paso 1: la estrella también orbita el centro de masa. Paso 2: vista de lado, se acerca y se aleja. Paso 3: las líneas del espectro se corren al azul y al rojo al mismo ritmo.
@porque La medición sale del movimiento a la vista (F29: congruencia). Una idea nueva por paso.

## Una línea sola es ruido; sumando miles, el error baja como 1/√N
@antetitulo El truco
@clase completa
@anim lineas
@pasos 3
@fuente Simulación con líneas gaussianas idénticas y ruido de fotones; no son líneas reales. El error de la velocidad cae como 1/√N: con 2000 líneas, unas 45 veces menos.
> Así se miden centímetros por segundo: ninguna línea sola alcanza, pero miles juntas sí.
@porque Acumular es un proceso: la animación lo muestra mientras ocurre, y la regla 1/√N aparece cuando ya se vio (ejemplo antes que regla, F11 y F12).

## Juntas, las dos señales dicen de qué está hecho el planeta
@antetitulo Lo que se mide
@pasos
- **La sombra da el tamaño:** la profundidad es (R_planeta / R_estrella)².
- **El bamboleo da la masa** (la mínima: depende de la inclinación de la órbita).
- **Tamaño y masa dan la densidad:** roca como la Tierra o gas como Júpiter.
@fuente Relaciones estándar de los métodos de tránsito y de velocidad radial.
> Después de cuatro diapositivas en movimiento, una quieta: aquí se junta lo visto.
@porque Una diapositiva quieta tras la racha animada marca el cambio de ritmo (principios, «Dos registros»). Las tres ideas se revelan de a una.

## Encontrar otra Tierra exige señales más de cien veces más chicas que las de un Júpiter
@antetitulo La escala
@clase completa
@anim escala
@pasos 1
@fuente Cálculo propio: velocidad (Kepler) 12,5 m/s frente a 8,9 cm/s, ÷139; profundidad (IAU 2015) 1,06 % frente a 84 ppm, ÷126. Escalas logarítmicas.
> Primero Júpiter en las dos escalas; al avanzar, la Tierra se desliza hasta su lugar y aparece cuánto más chica es cada señal.
@porque Deslizarse por una escala logarítmica es una transformación de escala: la distancia se siente recorriéndola (F23). Posición sobre escala común (G20).

## Esta presentación es un guion de texto, cinco escenas y un perfil
@antetitulo Cómo se hizo
- **guion.md** (y guion.en.md): un título-conclusión por diapositiva, con su fuente y sus notas.
- **animaciones.js:** cinco escenas con `K.escena`, un estado por paso.
- **perfil noche:** colores y tipografías; `kit.py build` arma el HTML y el .pptx.
@fuente kit-presentaciones: motor/kit.py, motor/anim.js, perfiles/noche.
> Abrir guion.md al lado de la presentación para mostrar que el contenido es solo texto.
@porque Para quien recibe el kit: muestra que lo expresivo no exige herramientas de diseño, solo un guion y escenas cortas.

## Fuentes
@anexo
- Radios nominales: IAU 2015 Resolution B3 (Sol 695 700 km; Tierra ecuatorial 6 378,1 km; Júpiter ecuatorial 71 492 km).
- Masas: Sol 1,989 × 10³⁰ kg; Tierra 5,972 × 10²⁴ kg; Júpiter 1,898 × 10²⁷ kg. G = 6,674 × 10⁻¹¹ m³ kg⁻¹ s⁻².
- Velocidad inducida: tercera ley de Kepler para una órbita circular.
- Todo se calcula en animaciones.js; las animaciones exageran el movimiento para que se vea.
@porque El anexo dice qué constantes se usaron y dónde está cada cálculo.
