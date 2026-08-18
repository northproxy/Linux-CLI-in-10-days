# `grep`

## Purpose

Search text and output lines that match a pattern.

## Syntax

```bash
grep [options] pattern file
```

## Useful variants

### Find matching lines

```bash
grep ERROR app.log
```

### Ignore letter case

```bash
grep -i error app.log
```

### Show line numbers

```bash
grep -n ERROR app.log
```

### Show non-matching lines

```bash
grep -v ERROR app.log
```

### Count matching lines

```bash
grep -c ERROR app.log
```

### Search for alternatives

```bash
grep -E "ERROR|WARNING" app.log
```

### Match a whole word

```bash
grep -w INFO app.log
```

Options can be combined when their meanings are needed together:

```bash
grep -in info app.log
```

## Hover / tap meanings

```text
grep PATTERN FILE
Show lines in FILE that match PATTERN.
```

```text
grep -i
Ignore letter case while matching.
```

```text
grep -n
Show the source line number for each match.
```

```text
grep -v
Invert the match and show non-matching lines.
```

```text
grep -c
Output the number of matching lines.
```

```text
grep -E
Use an extended pattern, for example ERROR|WARNING.
```

```text
grep -w
Match the pattern as a whole word.
```

## Input

A search pattern and text input, represented in Day 4 by a text file such as `app.log`.

## Output

Normally the lines that match the pattern. Options such as `-v` or `-c` change that output.

## Related tasks

- find errors in a log;
- find text without case sensitivity;
- show where matches occur;
- exclude matching lines;
- count matching lines;
- search for one of several alternatives.

## Related concepts

- text search;
- patterns;
- matching lines;
- case sensitivity;
- log investigation.

## Lesson

- `days/day-04-search.md`
