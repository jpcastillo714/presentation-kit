"""Figuras de matplotlib con el estilo del perfil, listas para una diapositiva de 1920×1080.

    import sys; sys.path.insert(0, "motor")
    from figuras import usar_perfil, guardar
    col = usar_perfil("perfil")          # aplica perfil/figuras.mplstyle y devuelve los colores del perfil
    fig, ax = plt.subplots()
    ax.plot(x, y, color=col["acento"])
    guardar(fig, "figuras/dispersion")    # escribe .svg (para el HTML) y .png (para el .pptx y el PDF)

Reglas que este módulo no puede imponer y tú sí (principios.md, 9–15): ejes con nombre y unidad, color con
significado y escala uniforme (cividis / viridis, nunca jet), una sola idea por figura, anotar lo que importa
directamente sobre la figura en vez de una leyenda lejana.
"""
from __future__ import annotations

from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import yaml


def usar_perfil(carpeta_perfil: str | Path) -> dict:
    carpeta = Path(carpeta_perfil)
    plt.style.use(str(carpeta / "figuras.mplstyle"))
    datos = yaml.safe_load((carpeta / "perfil.yml").read_text(encoding="utf-8"))
    return dict(datos["colores"])


def guardar(fig, ruta_sin_extension: str | Path, png: bool = True) -> None:
    ruta = Path(ruta_sin_extension)
    ruta.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(ruta.with_suffix(".svg"))
    if png:
        fig.savefig(ruta.with_suffix(".png"))
    plt.close(fig)


def coma_decimal(*axs) -> None:
    """Decimales con coma en los ejes (la presentación está en español)."""
    from matplotlib.ticker import FuncFormatter
    f = FuncFormatter(lambda v, _: f"{v:g}".replace(".", ",").replace("-", "−"))
    for ax in axs:
        if ax.get_xscale() == "linear":
            ax.xaxis.set_major_formatter(f)
        if ax.get_yscale() == "linear":
            ax.yaxis.set_major_formatter(f)


def anotar(ax, texto: str, xy, xytext, color: str, **kw):
    """Una anotación con flecha fina: señala lo que se comenta (principio 7) en vez de una leyenda."""
    return ax.annotate(texto, xy=xy, xytext=xytext, color=color, fontsize=kw.pop("fontsize", 16),
                       arrowprops=dict(arrowstyle="-", color=color, lw=1.2, shrinkA=0, shrinkB=4), **kw)
