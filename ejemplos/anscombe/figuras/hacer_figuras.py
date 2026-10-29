"""Figuras del ejemplo «Anscombe» / Figures for the Anscombe example.

Datos: Anscombe, F. J. (1973), «Graphs in Statistical Analysis», The American Statistician 27(1), 17–21,
DOI 10.1080/00031305.1973.10478966. Este script comprueba que los datos reproducen las estadísticas del artículo
antes de dibujar. Las figuras no llevan texto en ningún idioma: sirven para la versión en español y en inglés.
Data check first; the figures carry no words, so they serve both the Spanish and the English deck.

    python figuras/hacer_figuras.py      (desde la carpeta del ejemplo / from the example folder)
"""
from __future__ import annotations

import sys
from pathlib import Path

import numpy as np

AQUI = Path(__file__).resolve().parent
sys.path.insert(0, str(AQUI.parent / "motor"))
from figuras import guardar, usar_perfil  # noqa: E402

import matplotlib.pyplot as plt  # noqa: E402

col = usar_perfil(AQUI.parent / "perfil")
ACENTO, ACENTO2, SUAVE, TINTA = col["acento"], col["acento_2"], col["tinta_suave"], col["tinta"]

X123 = [10, 8, 13, 9, 11, 14, 6, 4, 12, 7, 5]
DATOS = {
    "I": (X123, [8.04, 6.95, 7.58, 8.81, 8.33, 9.96, 7.24, 4.26, 10.84, 4.82, 5.68]),
    "II": (X123, [9.14, 8.14, 8.74, 8.77, 9.26, 8.10, 6.13, 3.10, 9.13, 7.26, 4.74]),
    "III": (X123, [7.46, 6.77, 12.74, 7.11, 7.81, 8.84, 6.08, 5.39, 8.15, 6.42, 5.73]),
    "IV": ([8, 8, 8, 8, 8, 8, 8, 19, 8, 8, 8], [6.58, 5.76, 7.71, 8.84, 8.47, 7.04, 5.25, 12.50, 5.56, 7.91, 6.89]),
}


def comprobar() -> None:
    """Las cuatro firmas deben coincidir: media x 9, var x 11, media y 7,50, var y 4,12, r 0,816, y = 3 + 0,5x."""
    for k, (x, y) in DATOS.items():
        x, y = np.array(x, float), np.array(y)
        b, a = np.polyfit(x, y, 1)
        r = np.corrcoef(x, y)[0, 1]
        assert abs(x.mean() - 9) < 1e-9 and abs(x.var(ddof=1) - 11) < 1e-9, k
        assert abs(y.mean() - 7.50) < 0.01 and abs(y.var(ddof=1) - 4.125) < 0.01, k
        assert abs(r - 0.816) < 0.001 and abs(a - 3.00) < 0.01 and abs(b - 0.500) < 0.001, k
        print(f"{k:>3}: media x {x.mean():.2f}  var x {x.var(ddof=1):.2f}  media y {y.mean():.2f}  "
              f"var y {y.var(ddof=1):.3f}  r {r:.3f}  y = {a:.2f} + {b:.3f}x")


def ejes(ax):
    ax.set_xlim(2, 20); ax.set_ylim(2, 14)
    ax.set_xticks([5, 10, 15, 20]); ax.set_yticks([4, 8, 12])
    ax.plot([2, 20], [3 + 0.5 * 2, 3 + 0.5 * 20], color=SUAVE, lw=1.8, zorder=1)


def fig_cuatro():
    fig, axs = plt.subplots(1, 4, figsize=(12, 3.6), sharey=True)
    for ax, (k, (x, y)) in zip(axs, DATOS.items()):
        ejes(ax)
        ax.scatter(x, y, s=70, color=ACENTO, zorder=2)
        ax.text(3, 13, k, fontsize=20, color=TINTA, fontweight="bold", va="top")
    guardar(fig, AQUI / "cuatro")


def fig_panel(k, destacar=None, curva=False, sin_atipico=False):
    x, y = (np.array(v, float) for v in DATOS[k])
    fig, ax = plt.subplots(figsize=(8, 5.6))
    ejes(ax)
    colores = [ACENTO2 if destacar is not None and i == destacar else ACENTO for i in range(len(x))]
    tam = [220 if destacar is not None and i == destacar else 90 for i in range(len(x))]
    ax.scatter(x, y, s=tam, color=colores, zorder=3)
    if curva:
        c = np.polyfit(x, y, 2)
        xx = np.linspace(3, 15, 200)
        ax.plot(xx, np.polyval(c, xx), color=ACENTO, lw=3, zorder=2)
    if sin_atipico:
        m = np.ones(len(x), bool); m[destacar] = False
        b, a = np.polyfit(x[m], y[m], 1)
        ax.plot([2, 20], [a + b * 2, a + b * 20], color=ACENTO, lw=3, zorder=2)
    ax.text(3, 13, k, fontsize=22, color=TINTA, fontweight="bold", va="top")
    guardar(fig, AQUI / f"panel_{k}")


if __name__ == "__main__":
    comprobar()
    fig_cuatro()
    fig_panel("II", curva=True)
    fig_panel("III", destacar=2, sin_atipico=True)
    fig_panel("IV", destacar=7)
    print("[OK] figuras en", AQUI)
