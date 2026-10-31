"""matplotlib figures in a profile's style, sized for where they will be read: a slide, a paper, a thesis.

    import sys; sys.path.insert(0, "<kit>/engine")
    from figures import use_profile, save
    col = use_profile("profile")          # slide (default): 1920×1080 deck, big type
    col = use_profile("<kit>/profiles/sober", medium="thesis")   # or "paper": printed page, real size in cm
    fig, ax = plt.subplots()
    ax.plot(x, y, color=col["accent"])
    save(fig, "figures/dispersion")       # .svg (HTML) and .png (.pptx); for paper/thesis also .pdf (LaTeX, Word)

Mediums (width × height in cm, type in pt at that size, so the figure is never scaled on the page):
    slide   30.5 × 13.7, 16 pt     the body of a 1920×1080 slide
    thesis  15 × 9.5,    10 pt     one text width of an A4 or letter thesis; `width_cm=` for another text width
    paper   8.8 × 6,     8 pt      one column of a two-column journal (A&A, IEEE…); `width_cm=18` for two columns
For paper and thesis the background is white whatever the profile says: print and journals expect it.

Rules this module cannot enforce and you can (PRINCIPLES.md, 9–15): axes with name and unit, color with meaning and a
uniform scale (cividis / viridis, never jet), one idea per figure, annotate what matters on the figure itself instead
of a distant legend.
"""
from __future__ import annotations

from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import yaml


MEDIUMS = {  # width cm, height cm, base type pt, line width pt
    "slide": (30.5, 13.7, 16, 2.4),
    "thesis": (15.0, 9.5, 10, 1.5),
    "paper": (8.8, 6.0, 8, 1.1),
}
_medium = "slide"


def use_profile(profile_dir: str | Path, medium: str = "slide", width_cm: float | None = None,
                height_cm: float | None = None) -> dict:
    """Applies the profile's style for one medium and returns its colors (background, ink, accent, series…)."""
    global _medium
    if medium not in MEDIUMS:
        raise ValueError(f"medium must be one of {list(MEDIUMS)}")
    folder = Path(profile_dir)
    plt.style.use(str(folder / "figures.mplstyle"))
    colors = dict(yaml.safe_load((folder / "profile.yml").read_text(encoding="utf-8"))["colors"])
    _medium = medium
    plt.rcParams.update({"pdf.fonttype": 42, "ps.fonttype": 42})   # real text in the PDF (searchable, PDF/A-friendly)
    if medium != "slide":
        w, h, pt, lw = MEDIUMS[medium]
        w = width_cm or w
        h = height_cm or (h * w / MEDIUMS[medium][0])
        plt.rcParams.update({
            "figure.figsize": (w / 2.54, h / 2.54), "font.size": pt, "axes.titlesize": pt + 1,
            "axes.labelsize": pt, "xtick.labelsize": pt - 1, "ytick.labelsize": pt - 1, "legend.fontsize": pt - 1,
            "lines.linewidth": lw, "lines.markersize": lw * 3, "axes.linewidth": 0.6,
            "xtick.major.width": 0.6, "ytick.major.width": 0.6, "savefig.dpi": 300, "savefig.bbox": "standard",
            "figure.constrained_layout.use": True,
            "figure.facecolor": "white", "axes.facecolor": "white", "savefig.facecolor": "white",
        })
        colors["background"] = "#ffffff"
    return colors


def save(fig, path_without_extension: str | Path, png: bool = True, pdf: bool | None = None) -> None:
    """Writes .svg and .png; for paper and thesis also .pdf (vector, for LaTeX or Word), at the exact set size."""
    path = Path(path_without_extension)
    path.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(path.with_suffix(".svg"))
    if png:
        fig.savefig(path.with_suffix(".png"))
    if pdf or (pdf is None and _medium != "slide"):
        fig.savefig(path.with_suffix(".pdf"))
    plt.close(fig)


def decimal_comma(*axs) -> None:
    """Decimal comma on linear axes (for Spanish decks)."""
    from matplotlib.ticker import FuncFormatter
    f = FuncFormatter(lambda v, _: f"{v:g}".replace(".", ",").replace("-", "−"))
    for ax in axs:
        if ax.get_xscale() == "linear":
            ax.xaxis.set_major_formatter(f)
        if ax.get_yscale() == "linear":
            ax.yaxis.set_major_formatter(f)


def annotate(ax, text: str, xy, xytext, color: str, **kw):
    """A thin-line annotation: point at what you are talking about (principle 7) instead of a legend."""
    return ax.annotate(text, xy=xy, xytext=xytext, color=color, fontsize=kw.pop("fontsize", plt.rcParams["font.size"]),
                       arrowprops=dict(arrowstyle="-", color=color, lw=1.2, shrinkA=0, shrinkB=4), **kw)
