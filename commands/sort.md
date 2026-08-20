# `sort`

## Purpose

Sort lines of text.

## Syntax

```bash
sort [FILE]
```

## Common options

No additional options are required for Day 6.

## Examples

### Basic

```bash
sort events.log
```

### Sort filtered lines

```bash
grep ERROR events.log | sort
```

### Prepare input for `uniq`

```bash
grep ERROR events.log | sort | uniq -c
```

## How to read it

```text
grep ERROR events.log | sort
                       │
                       └─ sort incoming lines
```

## Input

A file or text received through standard input.

## Output

The same lines in sorted order.

## Related tasks

- Sort log entries
- Group identical lines next to each other
- Prepare text for `uniq`

## Related commands

- [`grep`](grep.md)
- [`uniq`](uniq.md)

## Lesson

- [Day 6 — Text Processing](../days/day-06-text-processing.md)
