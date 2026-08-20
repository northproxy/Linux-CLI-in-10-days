# `uniq`

## Purpose

Remove or count adjacent duplicate lines.

## Syntax

```bash
uniq [OPTIONS]
```

## Common options

| Option | Meaning |
|---|---|
| `-c` | Prefix each unique line with its occurrence count |

## Examples

### Remove adjacent duplicates

```bash
sort events.log | uniq
```

### Count repeated lines

```bash
grep ERROR events.log | sort | uniq -c
```

## How to read it

```text
sort | uniq -c
       │    │
       │    └─ count occurrences
       └─ collapse adjacent duplicates
```

## Input

Text, usually received through standard input.

## Output

Unique adjacent lines, optionally with occurrence counts.

## Important behavior

`uniq` only detects duplicate lines when they are adjacent.

That is why this pattern is common:

```text
sort → uniq
```

## Related tasks

- Remove repeated lines
- Count repeated events
- Build frequency summaries

## Related commands

- [`sort`](sort.md)
- [`cut`](cut.md)

## Lesson

- [Day 6 — Text Processing](../days/day-06-text-processing.md)
