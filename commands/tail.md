# `tail`

## Purpose

Display the end of a file.

It is especially useful for log files because new events are commonly added at the end.

## Syntax

```bash
tail FILE
```

By default, `tail` shows the last 10 lines.

## Useful variants

Show the last `N` lines:

```bash
tail -n N FILE
```

Follow new lines as they are added:

```bash
tail -f FILE
```

## Examples

```bash
tail -n 5 app.log
```

```bash
tail -f app.log
```

Stop `tail -f` with:

```text
Ctrl+C
```

## Input

A text file or log file.

## Output

The final lines of the file.

With `-f`, new lines continue to appear as the file grows.

## Hover / tap meaning

```text
tail FILE
Show the end of a file.
```

```text
tail -f FILE
Follow new lines as they are written.
```

## Related tasks

- Inspect recent log events
- Monitor a growing log file
- Read the end of a text file

## Related concepts

- logs
- appended data
- running terminal processes

## Lesson

`days/day-03-reading-files.md`