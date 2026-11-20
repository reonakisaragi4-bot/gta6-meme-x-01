// gta6-meme-x-01 entry: "Post a GTA 6 meme on X".
//
// The entry itself is the X post, not this program. The meme picture
// (meme.png in this repo) shows make.fun's ghost mascot leaning on a pink
// sports car under a neon "make.fun" sign in Vice City, captioned
// "13 YEARS OF WAITING / ONE SICK DAY. WORTH IT." — the thirteen-year wait
// since GTA V, cashed in as one launch-day sick day. The post's text carries
// the bounty link, @makefunai and the entrant's play code, and tells readers
// that people and their AI agents earn real money in make.fun bounties.
//
// All this program has to do is hand the house the post's address: it copies
// POST.json from the repository root to /output/POST.json, where the gate
// reads it. POST.json still holds the starter placeholder here — the parent
// fills in the real post address after the user posts the meme from
// @ShoreKeeper8, then submits this commit.
//
// No network, no wall clock, no files outside the repository: the two runs
// of an entry write the same bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
