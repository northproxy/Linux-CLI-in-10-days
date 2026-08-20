# `cut`

## Purpose

Extract selected fields or parts from each input line.

## Syntax

```bash
cut -d "DELIMITER" -f FIELD [FILE]
```

## Common options

| Option | Meaning |
|---|---|
| `-d` | Set the field delimiter |
| `-f` | Select one or more fields |

## Examples

### Extract the first field

```bash
cut -d ":" -f 1 users.txt
```

### Extract the second field

```bash
cut -d ":" -f 2 users.txt
```

### Extract multiple fields

```bash
cut -d ":" -f 1,3 users.txt
```

### Count values from one field

```bash
cut -d ":" -f 3 users.txt | sort | uniq -c
```

## How to read it

```text
cut -d ":" -f 3 users.txt
│    │       │      │
│    │       │      └─ input file
│    │       └─ third field
│    └─ delimiter is :
└─ command
```

## Input

Structured text where fields can be separated by a known delimiter.

## Output

Only the selected field or fields from each line.

## Related tasks

- Extract usernames, roles, or statuses
- Select columns from delimited text
- Build field-frequency summaries

## Related commands

- [`sort`](sort.md)
- [`uniq`](uniq.md)

## Lesson

- [Day 6 — Text Processing](../days/day-06-text-processing.md)
