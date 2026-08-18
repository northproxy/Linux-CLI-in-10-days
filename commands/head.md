# `head`

## Purpose

Display the beginning of a file.

## Syntax

```bash
head FILE
```

By default, `head` shows the first 10 lines.

## Useful variant

```bash
head -n N FILE
```

Show the first `N` lines.

## Example

```bash
head -n 3 app.log
```

## Input

A text file.

## Output

The first lines of the file.

## Hover / tap meaning

```text
head -n N FILE
Show the first N lines of a file.
```

## Related tasks

- Preview a file
- Inspect the beginning of a log
- Check file structure before reading more

## Related concepts

- lines
- text files

## Lesson

`days/day-03-reading-files.md`