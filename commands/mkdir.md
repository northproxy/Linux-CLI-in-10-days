# `mkdir`

## Purpose

Create directories.

## Syntax

```bash
mkdir [options] directory...
```

## Useful variants

### Create one directory

```bash
mkdir projects
```

### Create several directories

```bash
mkdir documents backups temp
```

### Create missing parent directories

```bash
mkdir -p documents/projects/linux
```

`-p` allows the full directory path to be created when intermediate directories do not yet exist.

## Hover / tap meanings

```text
mkdir
Create a directory.
```

```text
mkdir -p
Create the directory path, including missing parent directories.
```

## Input

Directory name or path.

## Output

Normally no output on success. The new directory or directories appear in the filesystem.

## Related tasks

- create a directory;
- create several directories;
- create a nested directory structure.

## Related concepts

- directories;
- paths;
- parent directories.

## Lesson

- `days/day-02-files-directories.md`
