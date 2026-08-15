# `mv`

## Purpose

Move or rename files and directories.

## Syntax

```bash
mv source destination
```

## Useful variants

### Move a file into a directory

```bash
mv todo.txt documents/
```

### Rename a file

```bash
mv notes.txt notes-old.txt
```

The same command performs both operations. The meaning comes from the destination path.

## Hover / tap meanings

```text
mv source destination
Move an existing object or give it a new name.
```

## Input

A source path and a destination path.

## Output

Normally no output on success.

## Safety note

A destination file with the same name may be replaced. Verify important destination paths before moving files.

## Related tasks

- move a file;
- rename a file;
- reorganize filesystem content.

## Related concepts

- source;
- destination;
- paths;
- rename.

## Lesson

- `days/day-02-files-directories.md`
