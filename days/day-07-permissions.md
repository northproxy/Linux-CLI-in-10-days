# Day 7 — Permissions

## Goal

Understand how Linux represents file and directory permissions, how to read them with `ls -l`, how to change permissions with `chmod`, how ownership differs from permissions, and when elevated privileges with `sudo` are required.

## Commands

- `ls -l`
- `chmod`
- `chown`
- `sudo`

## Core concept

Linux permissions are shown for three categories:

```text
owner → group → others
```

Each category can have:

```text
r = read
w = write
x = execute
```

Example:

```text
-rw-r-----
 │  │  │
 │  │  └─ others: no permissions
 │  └──── group: read
 └─────── owner: read + write
```

The first character describes the object type:

```text
- = regular file
d = directory
```

For a regular file, `x` means the file may be executed.

For a directory, `x` means the directory may be entered/traversed and objects inside it may be accessed by name.

## Command Cloud context

```text
Linux
→ Permissions
   ├── ls -l
   ├── chmod
   ├── chown
   └── sudo
```

The existing `ls -l` path also connects naturally to permission-related output concepts:

```text
ls -l
→ permissions
→ owner
→ group
```

## Visual

```text
-rw-r-----
││  │  │
││  │  └── others
││  └───── group
│└──────── owner
└───────── file type

r = 4
w = 2
x = 1

640
│││
││└─ others → ---
│└── group  → r--
└─── owner  → rw-
```

## Examples

Inspect permissions and ownership:

```bash
ls -l report.txt
```

Example output:

```text
-rw-r--r-- 1 sadmin sadmin 0 Aug 19 09:15 report.txt
```

Remove write permission from the owner:

```bash
chmod u-w report.txt
```

Add it back:

```bash
chmod u+w report.txt
```

Set permissions numerically:

```bash
chmod 640 report.txt
```

This means:

```text
6 → rw-
4 → r--
0 → ---
```

Change the owner:

```bash
sudo chown root report.txt
```

Restore owner and group:

```bash
sudo chown sadmin:sadmin report.txt
```

## Safety

`chmod`, `chown`, and `sudo` can affect access to important system files.

Before changing permissions or ownership:

1. verify the target path;
2. understand which owner/group is affected;
3. avoid recursive changes unless they are explicitly required;
4. use `sudo` only when elevated privileges are actually needed.

Practice in the dedicated VM or another safe directory.

## Practice

The Day 7 practice used:

```text
/home/sadmin/linux-cli-day7
```

with:

```text
report.txt
private/
```

The learner practiced:

- reading `-rw-rw-r--` and `drwxrwxr-x`;
- distinguishing file type from permissions;
- symbolic changes with `u+w`, `g-w`, and `o-r`;
- numeric modes `644`, `600`, and `640`;
- changing ownership with `chown`;
- using `sudo` when normal user permissions were insufficient.

Final challenge state:

```text
-rw-r----- 1 sadmin sadmin ... report.txt
```

## Check yourself

1. What are the three permission categories?
2. What do `r`, `w`, and `x` mean?
3. What does `chmod 640 file` produce?
4. What is the difference between `chmod` and `chown`?
5. Why should `sudo` not be added automatically to every command?

## Quick recap

```text
ls -l  → inspect permissions and ownership
chmod   → change permissions
chown   → change owner/group
sudo    → run one command with elevated privileges
```

Permissions are easier to reason about when read as:

```text
object type | owner | group | others
```

## Command references

```text
commands/ls.md
commands/chmod.md
commands/chown.md
commands/sudo.md
```

## Completion rule

Day 7 is complete when:

- `ls -l` permissions can be read correctly;
- symbolic and numeric `chmod` have been practiced;
- ownership vs permissions is understood;
- `chown` has been practiced safely;
- the role and risk of `sudo` are understood;
- command references exist;
- the Permissions relationships are represented in the Command Cloud / map.
