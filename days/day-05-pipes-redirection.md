# Day 5 — Pipes & Redirection

## Goal

Understand how Linux commands can pass output to another command or redirect it into a file.

By the end of this lesson, the learner should be able to:

- connect commands with `|`;
- write output to a file with `>`;
- append output to a file with `>>`;
- combine filtering and redirection in one pipeline.

## Commands

This lesson introduces shell operators rather than new standalone commands:

- `|`
- `>`
- `>>`

Previously learned commands used in the examples:

- `cat`
- `grep`
- `echo`

## Core concept

Linux CLI commands become much more useful when their output can be reused.

The main mental model is:

```text
command1 | command2
```

The standard output of the first command becomes the standard input of the second command.

Redirection changes where output goes:

```text
command > file
```

writes output to a file and replaces its previous contents.

```text
command >> file
```

adds output to the end of a file without removing its existing contents.

## Command Cloud context

Day 5 connects previously learned commands rather than introducing another standalone command family.

```text
input
  ↓
command
  ↓
output
  ├── |  → another command
  ├── >  → replace file
  └── >> → append to file
```

This is an important bridge toward Day 6, where text-processing commands will be combined into larger pipelines.

## Visual

```text
app.log
   ↓
grep ERROR
   ↓
   |
   ↓
grep Login
   ↓
   >
   ↓
login-errors.txt
```

The flow reads from left to right conceptually:

```text
input → filter → filter → destination
```

## Examples

### Write output to a file

```bash
echo "First line" > output.txt
```

Running another command with `>` replaces the existing file contents:

```bash
echo "Second line" > output.txt
```

`output.txt` now contains only:

```text
Second line
```

### Append output

```bash
echo "Third line" >> output.txt
```

The file now contains:

```text
Second line
Third line
```

### Pipe output into another command

```bash
cat app.log | grep ERROR
```

`cat` prints the file and `grep` receives that output as input.

Because `grep` can read a file directly, this is usually simpler:

```bash
grep ERROR app.log
```

### Combine a pipeline with redirection

```bash
grep ERROR app.log | grep Login > login-errors.txt
```

This:

1. selects `ERROR` lines;
2. keeps only lines containing `Login`;
3. stores the final result in `login-errors.txt`.

## Practice

Practical work was completed inside:

```text
/home/sadmin/linux-cli-day5
```

The learner practiced:

```bash
echo "INFO Backup completed" >> app.log
```

```bash
grep ERROR app.log > errors.txt
```

```bash
grep WARNING app.log >> errors.txt
```

```bash
grep ERROR app.log | grep Login
```

```bash
grep INFO app.log | grep Backup >> summary.txt
```

Final challenge:

```bash
grep ERROR app.log | grep Login > login-errors.txt
```

## Check yourself

1. What is the difference between `>` and `>>`?
2. What does `|` do?
3. Why is `grep ERROR app.log` usually preferable to `cat app.log | grep ERROR` when no other processing is needed?

Expected mental model:

```text
>   replace file contents
>>  append to file
|   pass output to the next command
```

## Quick recap

Day 5 introduces composition.

A Linux command does not have to be the end of an operation.

Its output can become:

- input for another command;
- a new file;
- additional content in an existing file.

The central idea is:

```text
input → command → output → next step
```

This prepares the learner for Day 6 — Text Processing, where commands such as `wc`, `sort`, `uniq`, and `cut` will be combined through pipelines.

## Command references

No separate command reference pages are required for `|`, `>`, or `>>` because they are shell operators, not standalone commands.

Related command references:

```text
commands/cat.md
commands/grep.md
```

## Completion rule

Day 5 is complete when:

- `|`, `>`, and `>>` were used practically;
- the learner understands pipe vs overwrite vs append;
- a multi-command pipeline was completed;
- Day 5 relationships are represented in the knowledge map;
- the pipe-flow visual is included;
- the lesson remains concise.
