# Linux CLI in 10 Days — Learning Log

## Purpose

Track meaningful learning milestones without documenting every small action.

Focus on:

- practical skills gained;
- concepts understood;
- environment or tooling milestones;
- design decisions that changed the project;
- concise notes that can later serve as portfolio evidence.

Do not use this file as a step-by-step diary.

---

## Environment setup

### What I worked on

- Created a dedicated Ubuntu 24.04 VM for Linux CLI practice.
- Installed and enabled OpenSSH Server.
- Configured VirtualBox NAT port forwarding:
  `127.0.0.1:2222 → Ubuntu:22`.
- Connected to the Linux VM via SSH from the VS Code terminal.
- Established the working flow:

  `VS Code → SSH → Ubuntu VM → Linux CLI`

### What I learned

- The difference between a local PowerShell terminal and a remote Linux shell.
- SSH server listens on TCP port 22.
- VirtualBox NAT can use port forwarding for host-to-guest SSH access.
- VS Code can be the main terminal interface while Linux runs inside a VM.

---

## Day 1 — Navigation

_Status: in progress_

### What I practiced

- `pwd`
- `ls`
- `ls -a`
- `ls -l`
- `ls -la`
- `cd`

### What I learned

- `/` is the filesystem root.
- `~` represents the current user's home directory.
- `.` represents the current directory.
- `..` represents the parent directory.
- Absolute paths start from `/`.
- Relative paths are resolved from the current directory.
- Hidden Linux entries normally begin with `.`.
- The same-looking commands can behave differently in PowerShell and a Linux shell.

### Practical examples

Navigated between:

```text
/home/sadmin
/home
/
```

Inspected hidden files and long-format directory listings.

---

## Command Cloud concept

### What changed

The website concept became clearer while working with `ls`.

The project is not intended to be a static command list or only a task tree.

The intended interaction is a dynamic contextual knowledge cloud.

### Interaction model

```text
Linux
→ click command
→ command becomes center
→ related options/variants appear
→ hover/tap previews syntax and meaning
→ click deeper to explore related concepts
```

Example:

```text
Linux
→ ls
→ -a / -l / -la
```

A deeper `ls -l` view may expose:

```text
permissions
owner
group
size
modified
filename
```

### Why this matters

This changed the website architecture from a mostly linear task navigator into a graph-like contextual explorer.

The Task Map remains useful as a second entry point, but both views should reuse the same underlying knowledge.

### Current prototype

A small experimental `ls` interaction exists in the static website.

The next experiment is:

> Start from `LINUX`, click `ls`, rebuild the cloud around `ls`, add a real hover tooltip, and provide Back/breadcrumb navigation.

---

## Command Cloud prototype and Day 1 completed

### What I built

- Completed the first data-driven dynamic Command Cloud prototype.
- Moved interactive knowledge from hard-coded JavaScript into `data/map.json`.
- Implemented the path:

```text
Linux
→ ls
→ -l
→ output concepts
```

- Added automatic radial positioning so the layout adapts to different node counts.
- Added a real desktop hover tooltip.
- Added touch behavior: first tap previews, second tap changes focus.
- Added Back and breadcrumb navigation.
- Tested the site locally through VS Code Live Server.

### What I learned

- UI state can be represented by the current focus plus navigation history.
- HTML can remain a lightweight shell while JavaScript renders changing views from JSON.
- Data and rendering logic are easier to extend when knowledge is not hard-coded into the interface.
- Dynamic layouts should not depend on fixed `nth-child` rules when the number of nodes can change.
- Desktop hover and mobile tap need separate interaction behavior.

### Day 1 status

Day 1 — Navigation is complete.

Completed:

- `pwd`, `ls`, `ls -a`, `ls -l`, `ls -la`, `cd`;
- `/`, `~`, `.`, `..`;
- absolute vs relative paths;
- command references for `pwd`, `ls`, `cd`;
- Day 1 knowledge in the validated map model;
- navigation visual;
- recap and self-check.

Next learning block:

> Day 2 — Files & Directories: `mkdir`, `touch`, `cp`, `mv`, `rm`.


---

## Day 2 — Files & Directories

_Status: practical work complete; knowledge-map integration pending_

### What I practiced

- `mkdir`
- `mkdir -p`
- `touch`
- `cp`
- `mv`
- `rm`
- `rm -r`
- `rmdir` as a supporting command for empty directories

### Practical environment

Worked inside the isolated practice directory:

```text
/home/sadmin/linux-cli-day2
```

Created directories and files, built a nested path, copied files, moved and renamed files, and removed disposable practice content.

### What I learned

- Filesystem operations can be understood as `create → copy → move / rename → remove`.
- `cp` creates another copy while the original remains.
- `mv` moves the existing object or changes its name.
- Commands can operate directly on relative paths such as `documents/report.txt`.
- `mkdir -p` can create missing parent directories in a path.
- `rm -r` is recursive and destructive, so the target path and current location must be checked before use.
- `rmdir` is useful when the directory is already empty.

### Verification

Completed a combined practice sequence using create, copy, move/rename, and remove operations and answered the Day 2 self-check correctly.

### Next project step

Add Day 2 relationships and safety metadata to the validated Command Cloud / `data/map.json`, then create one useful Day 2 visual and finalize the lesson.

---

## Day 2 — Files & Directories completed

### What I practiced

- `mkdir`
- `mkdir -p`
- `touch`
- `cp`
- `mv`
- `rm`
- `rm -r`
- `rmdir`

### What I learned

- `mkdir` creates directories, while `touch` can create empty files.
- One command can receive multiple path arguments.
- `mkdir -p` can create missing parent directories along a path.
- `cp` creates another copy of an object.
- `mv` changes the location or name of an existing object.
- `rm` removes files directly rather than moving them to a recycle bin.
- `rm -r` recursively removes a directory and its contents, so the target path must be verified before execution.
- File operations become easier to reason about as a sequence:

```text
create → copy → move / rename → remove
```

### Project integration

- Added Day 2 command references for `mkdir`, `touch`, `cp`, `mv`, and `rm`.
- Extended the validated Command Cloud data model with Day 2 command focus states.
- Added task-oriented filesystem paths for the Day 2 operations.
- Added a compact Day 2 filesystem-actions visual.

### Day 2 status

Day 2 — Files & Directories is complete.

Next learning block:

> Day 3 — Reading Files: `cat`, `less`, `head`, `tail`.

---

## Day 3 — Reading Files completed

### What I practiced

- `cat`
- `less`
- `head`
- `tail`
- `head -n N`
- `tail -n N`
- `tail -f`

### Practical environment

Worked inside:

```text
/home/sadmin/linux-cli-day3
```

Used:

```text
system-notes.txt
app.log
```

### What I learned

- `cat` is useful for printing the complete contents of a small file.
- `less` is better for interactively browsing longer files.
- `head` reads from the beginning of a file.
- `tail` reads from the end of a file.
- `-n N` controls how many lines `head` or `tail` displays.
- `tail -f` follows a growing file and shows new lines as they are written.
- `Ctrl+C` stops a running foreground command such as `tail -f`.
- Log investigation often begins at the end of a file because recent events are appended there.

### Live log experiment

Used two SSH terminals:

```text
Terminal 1 → tail -f app.log
Terminal 2 → append new log lines
```

Observed the new lines appear immediately in the first terminal.

### Project integration

- Added `cat`, `less`, `head`, and `tail` command references.
- Added Day 3 focus states to `data/map.json`.
- Added `head -n N`, `tail -n N`, and `tail -f` nodes.
- Added task-oriented `Text` paths.
- Validated the new command states in the interactive Command Cloud.
- Added a Day 3 Reading Files visual.

### Day 3 status

Day 3 — Reading Files is complete.

Next learning block:

> Day 4 — Search: `grep`, `find`.

---

## Day 4 — Search completed

### What I practiced

- `grep`
- `grep -i`
- `grep -n`
- `grep -v`
- `grep -c`
- `grep -E`
- `grep -w`
- `find`
- `find -name`
- `find -iname`
- `find -type f`
- `find -type d`

### Practical environment

Worked inside:

```text
/home/sadmin/linux-cli-day4
```

Used a small `app.log` plus nested `logs/`, `backups/`, and `notes/` directories to compare searching file contents with locating filesystem objects.

### What I learned

- `grep` searches file contents and returns matching lines.
- `find` searches filesystem objects by properties such as name and type.
- `grep -i` ignores letter case.
- `grep -n` shows line numbers.
- `grep -v` inverts the match.
- `grep -c` counts matching lines.
- `grep -E` allows extended patterns such as alternatives with `|`.
- `grep -w` matches a whole word.
- `find -name` is case-sensitive, while `find -iname` ignores case.
- `find -type f` limits results to files and `find -type d` limits them to directories.
- Quoting patterns such as `"*.log"` keeps the wildcard for `find` to interpret rather than letting the shell expand it first.

The main mental model is:

```text
grep → search inside file contents
find → search for filesystem objects
```

### Project integration

- Added `day-04-search.md`.
- Added command references for `grep` and `find`.
- Added the `Search` domain to the grouped Command Cloud root.
- Added contextual `grep` and `find` nodes and the practiced options to `data/map.json`.
- Kept the cloud scoped to commands already introduced in the Learn Path.

### Day 4 status

Day 4 — Search is complete.

Next learning block:

> Day 5 — Pipes & Redirection: `|`, `>`, `>>`.
