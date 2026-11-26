// What the Elevator Would Say — entry program.
// Writes one line, the funniest thing an elevator would say, to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

const LINE =
  "I know what floor you're going to. I just like watching you press the button twice.";

// Gate: the sealed scorer requires UTF-8 text of 1-120 chars, not whitespace-only.
if (LINE.length < 1 || LINE.length > 120) {
  throw new Error(`entry line is ${LINE.length} chars, must be 1-120`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line is whitespace-only");
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");

// Read back and verify: what the grader reads must be exactly the line.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== LINE) {
  throw new Error("read-back mismatch: /output/entry.txt does not match the entry line");
}
console.log(`wrote ${LINE.length} chars to ${OUTPUT_PATH} (read-back verified)`);
