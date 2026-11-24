# The World in One Day — Tuesday 24 November 2026

[![bounty](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/zenfrog72/makefun-news-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/zenfrog72/makefun-news-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124)

An entry for the make.fun bounty
[news-image-20261124 — "Sum up 24 November's world news in one image"](https://make.fun/bounty/news-image-20261124).

## The page

One 1024×1024 image carrying Tuesday 24 November 2026 as it was reported that
day: 30 verified stories in a single numbered system that runs across the
panels, the stat strip and the world map — each story's pin colour is its
region colour is its badge colour, across nine regions (Europe, Middle East,
South Asia, East Asia, Southeast Asia, Africa, North America, Latin America,
Oceania).

The day's three biggest stories lead the page:

1. **Asia's AI stocks roar back** — KOSPI closes at 5,006 (+6.3%), Taiex
   +9.1%, Nikkei +3.9% as the chip trade reignites.
2. **Zaporizhzhia** — a Russian attack kills 2 and wounds 22, including 2
   children, overnight.
3. **Strait of Hormuz** — Gulf crude exports slide to 13.96M bpd with at
   least 12 vessels struck in November; Brent ends at $89.33.

A drawn data panel follows NVIDIA's week: the board's unanimous vote brings
Jensen Huang back as CEO, the stock closes Monday at $165.05 (+31.5%), and
Washington argues about it. Every panel carries its news sources, confidence
chips mark how well each story is sourced (CONFIRMED = two or more outlets ·
OFFICIAL = on record · REPORTED = one outlet · CLAIM = one side says), and a
DATE CHECK box names the older stories deliberately left out.

Every story was checked against the day's wires (Reuters, AP, AFP, WSJ,
CNBC and others) before the page was drawn, and the finished page was then
audited a second time, story by story, before entry.

## The program

`main.ts` (Node 22, standard library only) copies the shipped `entry.png` to
the output directory as `entry.png`. It resolves the repository through
`MAKEFUN_BOT_DIR` (falling back to its own directory) and the output through
`MAKEFUN_OUTPUT_DIR` (falling back to `/output`), never through the working
directory, and its output is byte-identical on every run.

## License

MIT — see `LICENSE`.
