# `ls`

## Purpose

List directory contents.

## Syntax

```bash
ls
ls -a
ls -l
ls -la
```

## Useful variants

### `ls`

Show visible entries in the current directory.

### `ls -a`

Show all entries, including hidden entries.

### `ls -l`

Show a detailed long-format listing.

### `ls -la`

Show a detailed long-format listing including hidden entries.

## Hover / tap meanings

```text
ls
List directory contents.
```

```text
ls -a
Show all entries, including hidden files.
```

```text
ls -l
Show a detailed list with permissions, owner, group, size, and modification time.
```

```text
ls -la
Show a detailed listing including hidden files.
```

## Examples

```bash
ls
ls -a
ls -l
ls -la
```

## Input

A directory context or path to inspect.

For the Day 1 examples, `ls` is used mainly on the current directory.

## Output

Directory entries.

With `-l`, the output also exposes concepts such as:

- permissions
- owner
- group
- size
- modification time
- filename

## Safety

Safe for normal use. `ls` displays information and does not modify files.

## Related tasks

- Inspect the current directory.
- Show hidden files.
- Inspect detailed file and directory information.

## Related concepts

- hidden files
- directory contents
- permissions
- owner
- group
- size
- modification time

## Lesson links

- `../days/day-01-navigation.md`
