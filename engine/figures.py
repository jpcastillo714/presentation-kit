"""matplotlib figures in the profile's style, ready for a 1920×1080 slide.

    import sys; sys.path.insert(0, "engine")
    from figures import use_profile, save
    col = use_profile("profile")          # applies profile/figures.mplstyle and returns the profile colors
    fig, ax = plt.subplots()
    ax.plot(x, y, color=col["accent"])
    save(fig, "figures/dispersion")       # writes .svg (for the HTML) and .png (for the .pptx and PDF)

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


def use_profile(profile_dir: str | Path) -> dict:
    folder = Path(profile_dir)
    plt.style.use(str(folder / "figures.mplstyle"))
    data = yaml.safe_load((folder / "profile.yml").read_text(encoding="utf-8"))
    return dict(data["colors"])


def save(fig, path_without_extension: str | Path, png: bool = True) -> None:
    path = Path(path_without_extension)
    path.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(path.with_suffix(".svg"))
    if png:
        fig.savefig(path.with_suffix(".png"))
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
    return ax.annotate(text, xy=xy, xytext=xytext, color=color, fontsize=kw.pop("fontsize", 16),
                       arrowprops=dict(arrowstyle="-", color=color, lw=1.2, shrinkA=0, shrinkB=4), **kw)
