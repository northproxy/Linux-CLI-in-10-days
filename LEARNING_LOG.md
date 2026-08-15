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
