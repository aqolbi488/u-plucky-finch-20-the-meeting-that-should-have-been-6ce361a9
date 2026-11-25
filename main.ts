import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry =
  "We spent forty minutes in a meeting to decide who would write the email announcing the meeting was cancelled.";

function validateEntry(text: string): void {
  const chars = [...text].length;
  if (text.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (chars < 1 || chars > 200) {
    throw new Error("entry must be 1-200 characters");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

validateEntry(entry);

const out = "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, entry, "utf8");
