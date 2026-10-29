---
title: Cuatro conjuntos de datos con la misma estadística y cuatro historias distintas
author: presentation-kit · ejemplo sobrio
date: 2026
profile: sober
lang: es
audience: Un laboratorio que reporta métricas de modelos (exactitud, R², correlación) en sus reuniones.
message: Antes de reportar un número, grafica los datos y los residuos.
---

<!-- Ejemplo del registro sobrio: fondo claro, figuras fijas, sin animación. Datos de dominio público
     (Anscombe 1973); cada cifra se calcula en figures/make_figures.py. -->

## Cuatro conjuntos de datos con la misma estadística y cuatro historias distintas
@type cover
@subtitle Por qué hay que graficar antes de resumir: el cuarteto de Anscombe (1973)
> Una charla de diez minutos para cualquier reunión donde se reporten métricas.
@why El título ya es la conclusión de la charla; el subtítulo dice de dónde sale. Sin imagen de relleno.

## Los cuatro conjuntos tienen la misma media, varianza, correlación y recta
@number r = 0,816
En los cuatro: media de x **9**, varianza de x **11**, media de y **7,50**, varianza de y **4,12** y recta de ajuste **y = 3,00 + 0,500 x**.
Si solo miráramos esta tabla, diríamos que son el mismo fenómeno.
@source Anscombe, F. J. (1973), The American Statistician 27(1), 17–21. Cálculo propio en figures/make_figures.py.
> Dejar que la sala piense un segundo qué forma tienen estos datos antes de pasar.
@why Una cifra grande como evidencia y el resto de la firma en una línea. Crea la expectativa que la siguiente diapositiva rompe (F32: predecir antes de mostrar).

## Graficados, son cuatro historias distintas
@figure figures/four.svg
@source Anscombe (1973). Los cuatro paneles comparten ejes; la línea gris es la misma recta en todos.
> I es lo que esperamos. II es una curva. III es una recta con un punto fuera. IV no tiene relación: un solo punto la fabrica.
@why Múltiplos pequeños con los mismos ejes (G11): la comparación la hace el ojo, no la memoria. La misma recta gris en los cuatro muestra que el resumen es idéntico.

## En el II los datos son una curva: la recta es el modelo equivocado
@figure figures/panel_II.svg
Una parábola los describe casi exactamente.
La correlación de 0,816 mide qué tan bien se ajusta una recta, no si la recta es el modelo correcto.
@source Anscombe (1973); ajuste cuadrático propio.
> La pregunta no es «¿qué tan alto es r?», sino «¿qué forma tienen los datos?».
@why Una idea por diapositiva (principio 5). El ajuste correcto en color de acento y el resumen engañoso en gris (señalización, F25).

## En el III un solo punto tuerce la recta: sin él, los datos están perfectamente alineados
@figure figures/panel_III.svg
Sin el punto destacado, la correlación es **1,000** y la recta pasa a y = 4,01 + 0,345 x.
Un atípico basta para cambiar la pendiente que reportamos.
@source Anscombe (1973); ajuste sin el punto atípico, cálculo propio.
> Antes de borrar un atípico hay que entenderlo: puede ser un error o el dato más interesante.
@why El punto que importa se marca con el segundo acento, reservado para advertencias. La cifra que lo prueba va al lado de la figura (contigüidad espacial, F25).

## En el IV no hay relación: un solo punto fabrica toda la correlación
@figure figures/panel_IV.svg
Diez de los once puntos tienen la misma x. El único distinto decide la recta entera.
@source Anscombe (1973).
> Si quitamos ese punto, la recta ni siquiera se puede calcular: todos los x son iguales.
@why Declara el límite del número: una correlación alta no prueba una relación (G15, G7).

## Antes de reportar una métrica, grafica los datos y los residuos
@steps
- **Grafica la distribución,** no solo el promedio: puntos o cajas por grupo (Tukey).
- **Grafica los residuos** de cada ajuste: ahí aparecen la curva del II y el atípico del III.
- **Mira cada punto que domina** el resultado antes de creerle a la cifra.
@source Anscombe (1973); Wickham y Stryjewski, «40 years of boxplots» (2011).
> Esta es la diapositiva que la gente se lleva. Cerrar preguntando qué métrica reportamos sin graficar.
@why Cierre que pide algo concreto; las tres acciones se revelan de a una (segmentación, F25).

## Fuentes
@appendix
- Anscombe, F. J. (1973). Graphs in Statistical Analysis. The American Statistician 27(1), 17–21. DOI 10.1080/00031305.1973.10478966.
- Wickham, H. y Stryjewski, L. (2011). 40 years of boxplots. https://vita.had.co.nz/papers/boxplots.pdf
- Datos y cálculos: figures/make_figures.py (comprueba la estadística antes de graficar).
@why El anexo junta las fuentes y dice dónde se calculó cada cifra.
