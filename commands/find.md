# `find`

## Purpose

Search a directory tree for filesystem objects that match criteria such as name or type.

## Syntax

```bash
find start-path [tests]
```

## Useful variants

### Find an exact name

```bash
find . -name "app.log"
```

`.` means to start from the current directory.

### Find names using a wildcard

```bash
find . -name "*.log"
```

The quoted `*.log` pattern matches names ending in `.log`.

### Ignore case when matching names

```bash
find . -iname "*.txt"
```

This can match both `todo.txt` and `README.TXT`.

### Return regular files only

```bash
find . -type f -name "*.log"
```

### Return directories only

```bash
find . -type d
```

## Hover / tap meanings

```text
find . -name "app.log"
Search from the current directory downward for objects named app.log.
```

```text
find . -name "*.log"
Search recursively for names ending in .log.
```

```text
find . -iname "*.txt"
Match names without case sensitivity.
```

```text
find . -type f
Return regular files only.
```

```text
find . -type d
Return directories only.
```

## Input

A starting path plus one or more search tests such as `-name`, `-iname`, or `-type`.

## Output

Paths of filesystem objects that match the supplied criteria.

## Related tasks

- locate a file by name;
- locate files by extension;
- locate directories;
- search names without case sensitivity;
- restrict a search to regular files.

## Related concepts

- directory tree;
- recursive search;
- paths;
- filenames;
- file types;
- wildcard patterns.

## Lesson

- `days/day-04-search.md`
