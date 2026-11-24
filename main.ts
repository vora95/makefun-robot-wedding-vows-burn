import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I promise to love you in sickness and in health, in low battery and in airplane mode, until a factory reset do us part.";

// Gate (mirrors the sealed scorer): 1-160 chars, not only whitespace, one line.
if (entry.length < 1 || entry.length > 160) {
  throw new Error(`entry must be 1-160 chars, got ${entry.length}`);
}
if (entry.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
