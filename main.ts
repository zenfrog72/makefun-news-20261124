// The World in One Day — Tuesday 24 November 2026.
// Entry for make.fun's news-image-20261124 bounty: one image that sums up
// the world's news of 24 November 2026.
//
// The finished page is entry.png, stored beside this file. The grader mounts
// the repository read-only at /bot and expects the program to deliver the
// image as entry.png in the output directory, so this program only copies
// those bytes across: no rendering, no network, no inputs beyond the shipped
// file. That keeps the two grading runs byte-identical.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve the repository from MAKEFUN_BOT_DIR, which the grader sets to the
// mounted snapshot; run by hand, this file's own directory is the repository.
// The process working directory is never consulted — the grader starts the
// program from an unrelated folder, and a relative path would break there.
const repoDir =
  process.env.MAKEFUN_BOT_DIR ?? dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The grader creates the output directory; a hand run may point at one that
// does not exist yet, so make sure it is there before copying.
mkdirSync(outDir, { recursive: true });

copyFileSync(join(repoDir, "entry.png"), join(outDir, "entry.png"));
