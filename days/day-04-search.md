# Day 4 — Search

## Goal

Search for text inside files with `grep` and locate filesystem objects with `find`.

## Commands

- `grep`
- `find`

## Core concept

Day 4 introduces two different kinds of search:

```text
grep → search inside file contents
find → search for filesystem objects
```

The key question is:

```text
Do I need to find text inside a file?
→ grep

Do I need to find a file or directory itself?
→ find
```

## Command Cloud context

```text
Linux
→ Search
   ├── grep → matching lines
   └── find → matching files / directories
```

Useful relationships introduced in this lesson:

```text
grep → -i → ignore case
grep → -n → show line numbers
grep → -v → invert the match
grep → -c → count matching lines
grep → -E → extended pattern such as ERROR|WARNING
grep → -w → match a whole word

find → -name  → match a name
find → -iname → match a name ignoring case
find → -type f → files only
find → -type d → directories only
```

## Visual — Which search command?

```text
                    What are you searching for?
                              │
                 ┌────────────┴────────────┐
                 ↓                         ↓
          text inside a file        file / directory
                 │                         │
               grep                      find
                 │                         │
        outputs matching lines     outputs matching paths
```

## Examples

Find lines containing `ERROR`:

```bash
grep ERROR app.log
```

Ignore letter case:

```bash
grep -i error app.log
```

Show matching line numbers:

```bash
grep -n ERROR app.log
```

Show lines that do not contain `ERROR`:

```bash
grep -v ERROR app.log
```

Count matching lines:

```bash
grep -c ERROR app.log
```

Search for either `ERROR` or `WARNING`:

```bash
grep -E "ERROR|WARNING" app.log
```

Match `INFO` as a whole word:

```bash
grep -w INFO app.log
```

Find objects named `app.log` from the current directory downward:

```bash
find . -name "app.log"
```

Find all `.log` names:

```bash
find . -name "*.log"
```

Find only regular `.log` files:

```bash
find . -type f -name "*.log"
```

Find directories:

```bash
find . -type d
```

Find `.txt` names without case sensitivity:

```bash
find . -iname "*.txt"
```

## Practice

The practical exercise was completed in:

```text
/home/sadmin/linux-cli-day4
```

The learner:

1. created a small example `app.log`;
2. searched for matching log lines with `grep`;
3. practiced `-i`, `-n`, `-v`, `-c`, `-E`, and `-w`;
4. created a small directory tree containing `.log` and `.txt` files;
5. searched by exact name and wildcard with `find`;
6. restricted results with `-type f` and `-type d`;
7. compared `-name` with case-insensitive `-iname`;
8. completed a short challenge choosing between `grep` and `find`.

## Check yourself

1. Which command searches for text inside `app.log`?
2. Which command searches for files named `app.log` below the current directory?
3. What does `grep -i` change?
4. What does `grep -v` output?
5. What is the difference between `find -name` and `find -iname`?
6. How do you tell `find` to return regular files only?
7. What does `.` mean in `find . -name "*.log"`?

## Quick recap

```text
grep PATTERN FILE
→ search file contents
→ output matching lines

grep -i → ignore case
grep -n → line numbers
grep -v → non-matching lines
grep -c → count matching lines
grep -E → extended pattern
grep -w → whole word

find START -name PATTERN
→ search filesystem objects below START

find . -name "*.log"     → matching names
find . -iname "*.txt"    → ignore case
find . -type f            → files only
find . -type d            → directories only
```

## Command references

- `commands/grep.md`
- `commands/find.md`

## Completion rule

Day 4 is complete when:

- practical `grep` and `find` searches were used successfully;
- the learner can distinguish content search from filesystem-object search;
- the main practiced options are understood;
- command references exist;
- Search relationships are represented in the validated knowledge model;
- the Search Command Cloud path is tested;
- `ROADMAP.md` is updated.
