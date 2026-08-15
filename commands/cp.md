# `cp`

## Purpose

Copy files from a source to a destination.

## Syntax

```bash
cp source destination
```

## Useful variants

### Copy into a directory

```bash
cp notes.txt backups/
```

The copy keeps the same filename inside `backups/`.

### Copy and give the copy a new name

```bash
cp documents/report.txt backups/report-copy.txt
```

## Hover / tap meanings

```text
cp source destination
Create a copy of a file at the destination.
```

## Input

A source path and a destination path.

## Output

Normally no output on success. The original remains and a copy is created.

## Safety note

A destination file with the same name may be overwritten. Check the destination when working with important files.

## Related tasks

- make a backup copy;
- copy a file to another directory;
- copy a file under a new name.

## Related concepts

- source;
- destination;
- paths;
- file copies.

## Lesson

- `days/day-02-files-directories.md`
