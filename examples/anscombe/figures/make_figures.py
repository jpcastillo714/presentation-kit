"""Figures for the Anscombe example.

Data: Anscombe, F. J. (1973), "Graphs in Statistical Analysis", The American Statistician 27(1), 17–21,
DOI 10.1080/00031305.1973.10478966. The script first checks that the data reproduce the statistics of the paper,
then draws. The figures carry no words, so they serve both the English and the Spanish deck.

    python figures/make_figures.py      (from the example folder)
"""
from __future__ import annotations

import sys
from pathlib import Path

import numpy as np

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parent / "engine"))
from figures import save, use_profile  # noqa: E402

import matplotlib.pyplot as plt  # noqa: E402

col = use_profile(HERE.parent / "profile")
ACCENT, ACCENT2, SOFT, INK = col["accent"], col["accent_2"], col["ink_soft"], col["ink"]

X123 = [10, 8, 13, 9, 11, 14, 6, 4, 12, 7, 5]
DATA = {
    "I": (X123, [8.04, 6.95, 7.58, 8.81, 8.33, 9.96, 7.24, 4.26, 10.84, 4.82, 5.68]),
    "II": (X123, [9.14, 8.14, 8.74, 8.77, 9.26, 8.10, 6.13, 3.10, 9.13, 7.26, 4.74]),
    "III": (X123, [7.46, 6.77, 12.74, 7.11, 7.81, 8.84, 6.08, 5.39, 8.15, 6.42, 5.73]),
    "IV": ([8, 8, 8, 8, 8, 8, 8, 19, 8, 8, 8], [6.58, 5.76, 7.71, 8.84, 8.47, 7.04, 5.25, 12.50, 5.56, 7.91, 6.89]),
}


def check() -> None:
    """All four signatures must match: mean x 9, var x 11, mean y 7.50, var y 4.12, r 0.816, y = 3 + 0.5x."""
    for k, (x, y) in DATA.items():
        x, y = np.array(x, float), np.array(y)
        b, a = np.polyfit(x, y, 1)
        r = np.corrcoef(x, y)[0, 1]
        assert abs(x.mean() - 9) < 1e-9 and abs(x.var(ddof=1) - 11) < 1e-9, k
        assert abs(y.mean() - 7.50) < 0.01 and abs(y.var(ddof=1) - 4.125) < 0.01, k
        assert abs(r - 0.816) < 0.001 and abs(a - 3.00) < 0.01 and abs(b - 0.500) < 0.001, k
        print(f"{k:>3}: mean x {x.mean():.2f}  var x {x.var(ddof=1):.2f}  mean y {y.mean():.2f}  "
              f"var y {y.var(ddof=1):.3f}  r {r:.3f}  y = {a:.2f} + {b:.3f}x")


def axes(ax):
    ax.set_xlim(2, 20); ax.set_ylim(2, 14)
    ax.set_xticks([5, 10, 15, 20]); ax.set_yticks([4, 8, 12])
    ax.plot([2, 20], [3 + 0.5 * 2, 3 + 0.5 * 20], color=SOFT, lw=1.8, zorder=1)


def fig_four():
    fig, axs = plt.subplots(1, 4, figsize=(12, 3.6), sharey=True)
    for ax, (k, (x, y)) in zip(axs, DATA.items()):
        axes(ax)
        ax.scatter(x, y, s=70, color=ACCENT, zorder=2)
        ax.text(3, 13, k, fontsize=20, color=INK, fontweight="bold", va="top")
    save(fig, HERE / "four")


def fig_panel(k, highlight=None, curve=False, without_outlier=False):
    x, y = (np.array(v, float) for v in DATA[k])
    fig, ax = plt.subplots(figsize=(8, 5.6))
    axes(ax)
    colors = [ACCENT2 if highlight is not None and i == highlight else ACCENT for i in range(len(x))]
    size = [220 if highlight is not None and i == highlight else 90 for i in range(len(x))]
    ax.scatter(x, y, s=size, color=colors, zorder=3)
    if curve:
        c = np.polyfit(x, y, 2)
        xx = np.linspace(3, 15, 200)
        ax.plot(xx, np.polyval(c, xx), color=ACCENT, lw=3, zorder=2)
    if without_outlier:
        m = np.ones(len(x), bool); m[highlight] = False
        b, a = np.polyfit(x[m], y[m], 1)
        ax.plot([2, 20], [a + b * 2, a + b * 20], color=ACCENT, lw=3, zorder=2)
    ax.text(3, 13, k, fontsize=22, color=INK, fontweight="bold", va="top")
    save(fig, HERE / f"panel_{k}")


if __name__ == "__main__":
    check()
    fig_four()
    fig_panel("II", curve=True)
    fig_panel("III", highlight=2, without_outlier=True)
    fig_panel("IV", highlight=7)
    print("[OK] figures in", HERE)
