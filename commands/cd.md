# `cd`

## Purpose

Change the current working directory.

## Syntax

```bash
cd <path>
```

Day 1 examples:

```bash
cd /
cd ~
cd ..
cd /home/sadmin
cd sadmin
```

## Useful variants

For Day 1, the important differences come from the path supplied to `cd` rather than command options.

### Root

```bash
cd /
```

Move to the filesystem root.

### Home directory

```bash
cd ~
```

Move to the current user's home directory.

### Parent directory

```bash
cd ..
```

Move one level up.

### Absolute path

```bash
cd /home/sadmin
```

Navigate using a path that starts from `/`.

### Relative path

```bash
cd sadmin
```

Navigate relative to the current directory.

## Hover / tap meaning

```text
cd
Change the current working directory.
```

## Examples

```bash
pwd
cd ..
pwd
```

Use `pwd` before and after `cd` to verify the location change.

## Input

A target path.

The path may be absolute or relative.

## Output

Normally no text output is produced when the directory change succeeds.

The visible result is a changed working-directory context for following commands.

## Safety

Safe for normal navigation. `cd` changes your shell location but does not modify files.

## Related tasks

- Move to the filesystem root.
- Return to the home directory.
- Move to a parent directory.
- Navigate using absolute and relative paths.

## Related concepts

- current working directory
- absolute path
- relative path
- `/`
- `~`
- `.`
- `..`

## Lesson links

- `../days/day-01-navigation.md`
