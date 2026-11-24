// The Houseplant Out-of-Office — make.fun bounty
// u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047
//
// Writes one out-of-office auto-reply, as if sent by a houseplant, to
// /output/entry.txt. The line must be 1-120 characters, a single line.
//
// The winning line was picked from 10 drafted candidates scored against the
// judge brief (plant voice first, then surprise, plant life driving the joke,
// tightness, originality). The field is flooded with fern / "since March" /
// water / cactus / photosynthesis / union lines, so this entry takes an
// untouched angle: a plant that simply grew so big it now holds the building
// up. No water, no March, no fern, no cactus, no office cliche.

import { mkdirSync, writeFileSync } from "node:fs";

const reply =
  "Out of office: I started as a desk plant. I'm load-bearing now.";

// Gate guard: the sealed scorer only accepts 1-120 characters, not only
// whitespace, on a single line. Fail loudly here instead of shipping a
// line the gate would refuse.
if (reply.length < 1 || reply.length > 120) {
  throw new Error(`Reply is ${reply.length} characters; must be 1-120.`);
}
if (reply.trim().length === 0 || reply.includes("\n")) {
  throw new Error("Reply must be a single non-blank line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", reply, "utf8");

console.log(`Wrote ${reply.length} characters to /output/entry.txt`);
console.log(reply);
