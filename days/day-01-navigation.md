# Day 1 — Navigation

## Goal

Learn how to identify the current location, inspect directory contents, and move through the Linux filesystem.

## Commands

- `pwd`
- `ls`
- `cd`

## Core concepts

### Current directory

```bash
pwd
```

Shows the absolute path of the current working directory.

Example:

```text
/home/sadmin
```

### Listing directory contents

```bash
ls
ls -a
ls -l
ls -la
```

- `ls` — show visible entries
- `-a` — include hidden entries
- `-l` — show long-format information
- `-la` — long format including hidden entries

### Navigation symbols

```text
/   filesystem root
~   current user's home directory
.   current directory
..  parent directory
```

### Changing directories

```bash
cd /
cd ~
cd ..
cd /home/sadmin
cd sadmin
```

## Absolute vs relative paths

Absolute path:

```text
/home/sadmin
```

Relative path:

```text
sadmin
```

An absolute path starts from `/`.

A relative path is resolved from the current directory.

## Command Cloud context

Day 1 provides the first interactive branch of the Command Cloud:

```text
Linux
→ ls
├── -a   → include hidden entries
├── -l   → detailed long format
├── -la  → detailed long format + hidden entries
├── -h   → human-readable sizes
└── -R   → recursive listing
```

The validated prototype can also continue one level deeper:

```text
Linux
→ ls
→ -l
├── permissions
├── owner
├── group
├── size
├── modified
└── filename
```

Day 1 only introduces these `ls -l` output concepts at a high level. Permissions are explored properly later in the course.

## Visual — Navigation mental model

```text
/
└── home
    └── sadmin
        ├── projects
        └── notes

/              filesystem root
~              current user's home directory
.              current directory
..             parent directory
```

Think of navigation as changing your current position in this tree.

```text
pwd     → Where am I?
ls      → What is here?
cd      → Move somewhere else.
cd ..   → Move one level up.
cd ~    → Go home.
cd /    → Go to the filesystem root.
```

Absolute path:

```text
/home/sadmin/projects
```

starts from `/`.

Relative path:

```text
projects
```

starts from the current working directory.

## Practice completed

Navigated between:

```text
/home/sadmin
/home
/
```

Used both absolute and relative paths.

Compared:

```bash
ls
ls -a
ls -l
ls -la
```

## Important observation

`.` means the current directory.

It is often more useful as an argument to other commands than with `cd`.

Examples that will make more sense later:

```bash
find .
cp file.txt .
./script.sh
```

## Check yourself

1. What does `pwd` tell you?
2. What is the difference between `ls` and `ls -a`?
3. What is the difference between `/` and `~`?
4. What does `..` represent?
5. What is the difference between an absolute and a relative path?
6. If you are in `/home/sadmin`, where does `cd ..` take you?
7. What does `cd ~` do?
8. Why can `ls` show nothing while `ls -a` shows several entries?

## Quick recap

Day 1 navigation can be reduced to three questions:

```text
Where am I?        → pwd
What is here?      → ls
Where do I go?     → cd
```

Important path symbols:

```text
/    root
~    home
.    current directory
..   parent directory
```

The key mental model is that the shell always has a current working directory, and relative paths are interpreted from that location.

Before using an `ls` option, ask:

> What additional information do I want to see?

## Command references

- `../commands/pwd.md`
- `../commands/ls.md`
- `../commands/cd.md`
