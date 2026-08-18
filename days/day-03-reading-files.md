# Day 3 — Reading Files

## Goal

Learn how to read text files efficiently and choose the right command depending on whether you need the whole file, its beginning, its end, or interactive browsing.

## Commands

- `cat`
- `less`
- `head`
- `tail`

## Core concept

Linux provides different commands for different ways of viewing file content.

```text
cat   → whole file
less  → interactive browsing
head  → beginning of a file
tail  → end of a file
```

The best command depends on the task and the size of the file.

## Command Cloud context

```text
Linux
→ cat
→ less
→ head
→ tail
```

Useful variants introduced during practice:

```text
head
└── -n N → first N lines

tail
├── -n N → last N lines
└── -f   → follow new lines
```

## Examples

Show the complete contents of a small file:

```bash
cat system-notes.txt
```

Browse a file interactively:

```bash
less system-notes.txt
```

Exit `less` with:

```text
q
```

Show the first 5 lines:

```bash
head -n 5 system-notes.txt
```

Show the last 5 lines:

```bash
tail -n 5 system-notes.txt
```

Follow new log entries as they are written:

```bash
tail -f app.log
```

Stop `tail -f` with:

```text
Ctrl+C
```

## Practice

Practice was completed in:

```text
~/linux-cli-day3
```

Two files were used:

```text
system-notes.txt
app.log
```

The exercises included:

- reading a complete text file with `cat`;
- browsing a file with `less`;
- selecting a specific number of lines with `head -n` and `tail -n`;
- inspecting the end of a log file;
- following new log entries with `tail -f`;
- adding new log entries from a second terminal and observing them appear in real time.

## Check yourself

Choose the appropriate command:

1. Show all contents of a small `config.txt`.
2. Browse a file containing thousands of lines.
3. Show the first 20 lines of `access.log`.
4. Show the last 5 lines of `error.log`.
5. Watch new lines appear in `app.log`.

Example answers:

```bash
cat config.txt
less config.txt
head -n 20 access.log
tail -n 5 error.log
tail -f app.log
```

## Quick recap

```text
Need the whole small file? → cat
Need to browse?            → less
Need the beginning?        → head
Need the end?              → tail
Need live log updates?     → tail -f
```

For logs, the end of a file is especially important because new events are normally appended there.

## Command references

```text
commands/cat.md
commands/less.md
commands/head.md
commands/tail.md
```

## Completion status

Practical command work and self-check are complete.

Command references, Command Cloud integration, and the Day 3 visual are the remaining project-integration steps.