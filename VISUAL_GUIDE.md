# Visual Guide

## Purpose

Create concise technical visuals that teach Linux CLI as a connected system.

The website's main visual language is the **dynamic Command Cloud**.

The same concepts can be adapted for:

- GitHub;
- website;
- Instagram.

## Core principles

- one clear concept or context per visual;
- minimal text;
- strong hierarchy;
- readable on a phone;
- exact command syntax;
- no decorative clutter;
- relationships should be visible, not only listed.

## Command Cloud hierarchy

### Root state

`LINUX` is the largest central node.

Core commands surround it with smaller type.

Example:

```text
                         grep
              find                  ps

        cd                                 curl

                        LINUX

        pwd                                ss

              ls                    chmod
                       cat
```

### Focus state

When a command is selected, it becomes the visual center.

Example:

```text
                         -a
                -l               -h

                         ls

                -la              -R
```

### Deeper state

A command variant can reveal output concepts:

```text
                    permissions

          owner                    group

                        ls -l

          size                     modified

                     filename
```

## Hierarchy signals

Prefer a combination of:

- font size;
- distance from the center;
- whitespace;
- subtle connecting lines when useful;
- focus/hover state;
- reduced emphasis for background context.

Do not rely only on color.

## Interaction visuals

### Hover

Hover should reveal a compact tooltip:

```text
ls -a
Show all entries, including hidden files.
```

### Click

Click changes focus and rebuilds the local cloud.

### Back / breadcrumb

The user should always understand where they are.

Example:

```text
Linux › ls › -l
```

### Mobile

There is no hover on touch devices.

Use first tap for preview/focus behavior in a way that remains understandable.

The mobile behavior must be validated separately.

## Other preferred visual types

### Flow

```text
access.log → grep → matching lines → wc -l → count
```

### Tree

```text
/
├── home
├── etc
└── var
    └── log
```

### Anatomy

```text
grep -Ei "bot|crawler" access.log
│    │        │              │
│    │        │              └─ input file
│    │        └─ pattern
│    └─ options
└─ command
```

### Task path

```text
Filesystem → Show hidden files → ls → -a → ls -a
```

## Output strategy

Create the master concept once.

Adapt it later for:

- repository diagram;
- interactive website;
- Instagram portrait/carousel.

Do not redesign the same concept independently for every channel.
