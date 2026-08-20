# Day 6 — Text Processing

## Goal

Learn how to count, sort, deduplicate, and extract parts of text, then combine these commands in pipelines.

## Commands

- `wc`
- `sort`
- `uniq`
- `cut`

## Core concept

Text-processing commands are small tools that transform or summarize text.

The main mental model is:

```text
input
  ↓
filter / extract / sort / count
  ↓
output
```

These commands become especially useful when combined with pipes.

## Command Cloud context

```text
LINUX
→ Text processing
  → wc
  → sort
  → uniq
  → cut
```

Useful relationships:

```text
grep → wc -l
cut → sort → uniq -c
```

## Visual

```text
users.txt
   ↓
cut -d ":" -f 3
   ↓
active
inactive
active
   ↓
sort
   ↓
active
active
inactive
   ↓
uniq -c
   ↓
2 active
1 inactive
```

## Examples

Count lines:

```bash
wc -l events.log
```

Count matching log events:

```bash
grep ERROR events.log | wc -l
```

Sort matching lines:

```bash
grep ERROR events.log | sort
```

Group and count repeated lines:

```bash
grep ERROR events.log | sort | uniq -c
```

Extract the second field from colon-separated text:

```bash
cut -d ":" -f 2 users.txt
```

Count values from a selected field:

```bash
cut -d ":" -f 3 users.txt | sort | uniq -c
```

## Practice

Worked inside:

```text
/home/sadmin/linux-cli-day6
```

Used `events.log` to practice counting and log-event pipelines.

Used `users.txt` with colon-separated fields to practice extraction and frequency counting.

Representative results:

```text
ERROR events → 3
INFO events  → 2
```

```text
1 ERROR Database failed
2 ERROR Login failed
```

```text
1 admin
2 user
```

```text
2 active
1 inactive
```

## Check yourself

1. How do you count all lines in `events.log`?
2. Why is `sort` commonly used before `uniq`?
3. How do you print the second `:`-separated field?
4. What does this pipeline do?

```bash
cut -d ":" -f 3 users.txt | sort | uniq -c
```

## Quick recap

```text
wc    → count
sort  → order lines
uniq  → collapse or count adjacent duplicates
cut   → extract fields
```

Important relationship:

```text
sort → uniq
```

`uniq` only detects repeated lines when they are adjacent, so sorting first is a common pattern.

## Command references

- [`wc`](../commands/wc.md)
- [`sort`](../commands/sort.md)
- [`uniq`](../commands/uniq.md)
- [`cut`](../commands/cut.md)
