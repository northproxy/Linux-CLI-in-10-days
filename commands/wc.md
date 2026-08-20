# `wc`

## Purpose

Count lines, words, and bytes in text input.

## Syntax

```bash
wc [OPTIONS] [FILE]
```

## Common options

| Option | Meaning |
|---|---|
| `-l` | Count lines |
| `-w` | Count words |
| `-c` | Count bytes |

## Examples

### Basic

```bash
wc events.log
```

### Count lines

```bash
wc -l events.log
```

### Count matching events

```bash
grep ERROR events.log | wc -l
```

## How to read it

```text
wc -l events.log
│   │      │
│   │      └─ input file
│   └─ count lines
└─ command
```

## Input

A file or text received through standard input.

## Output

Counts for the requested text properties.

## Related tasks

- Count lines in a file
- Count matching log events
- Count pipeline results

## Related commands

- [`grep`](grep.md)
- [`sort`](sort.md)

## Lesson

- [Day 6 — Text Processing](../days/day-06-text-processing.md)
