import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one single-line safety warning label for every human being.
// Label form up front, universal truth in the middle, the laugh lands in
// the last few words: the forbidden thing is exactly what gets touched.
const ENTRY =
  "WARNING: This human ignores all warning labels, including this one, and will absolutely touch the thing you just told them not to touch.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate allows 1 to 160 characters; refuse to write an entry that
// could never pass it, instead of silently shipping an invalid file.
if ([...ENTRY].length > 160 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${[...ENTRY].length} characters; must be 1-160`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
