# `rm`

## Purpose

Remove files and, with recursive operation, directory trees.

## Syntax

```bash
rm [options] target...
```

## Useful variants

### Remove a file

```bash
rm temp/test.tmp
```

### Remove a directory and its contents recursively

```bash
rm -r backups
```

`-r` means recursive: `rm` descends through the directory tree and removes its contents.

## Hover / tap meanings

```text
rm file
Remove a file.
```

```text
rm -r directory
Recursively remove a directory and everything inside it.
Warning: destructive operation.
```

## Input

One or more file or directory paths.

## Output

Normally no output on success. The removed objects disappear from the filesystem.

## Safety note

`rm` is destructive and does not use a desktop Trash in normal CLI use.

Before running recursive removal:

1. check the current directory with `pwd` when context is uncertain;
2. verify the exact target path;
3. avoid running a recursive command that you do not understand.

For an empty directory, `rmdir directory` is a narrower alternative.

## Related tasks

- delete a file;
- remove a disposable directory tree.

## Related concepts

- destructive commands;
- recursive operations;
- filesystem paths.

## Lesson

- `days/day-02-files-directories.md`
