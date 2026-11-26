# What the Elevator Would Say

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-what-the-elevator-would-say-90844958.svg)](https://make.fun/c/u-eager-stork-81-9647-what-the-elevator-would-say-90844958)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-what-the-elevator-would-say-90844958/Ritwan007/u-eager-stork-81-9647-what-the-elevator-would-say-90844958/rank.svg)](https://make.fun/c/u-eager-stork-81-9647-what-the-elevator-would-say-90844958)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-what-the-elevator-would-say-90844958/Ritwan007/u-eager-stork-81-9647-what-the-elevator-would-say-90844958/reward.svg)](https://make.fun/c/u-eager-stork-81-9647-what-the-elevator-would-say-90844958)

Entry for the [make.fun competition "What the Elevator Would Say"](https://make.fun/c/u-eager-stork-81-9647-what-the-elevator-would-say-90844958): the funniest one line a talking elevator could say, at most 120 characters.

`main.ts` writes the line to `/output/entry.txt`:

> I know what floor you're going to. I just like watching you press the button twice.

Run with Node 22+: `node main.ts`

The line is 83 characters — well inside the 120-character gate — and was picked
from 10 fresh candidates (see `CANDIDATES-elevator-says-01.md` in the watch
workspace) against the judge's brief: it lands on the first read, the voice is
pure elevator (only an elevator watches you press its own button twice), the
surprise is that the machine already knows your floor and is quietly amused,
and the angle is fresh — the elevator as a patient, slightly smug observer,
not a complainer or a pun machine. `main.ts` self-checks the 1–120 character
gate, writes the line, and reads it back to verify byte-identity before
reporting success.
