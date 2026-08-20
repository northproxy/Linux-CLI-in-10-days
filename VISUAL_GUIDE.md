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

Descriptive functional areas surround it with smaller type. Prefer human-readable labels such as `Reading text`, `Text processing`, `Search`, `File operations`, `Permissions`, `Processes`, `Networking`, and `Services & logs` instead of exposing a flat root-level command list.

Example:

```text
                    Search

      Reading text          Processes

File operations      LINUX      Networking

     Text processing      Permissions

             Services & logs
```


### Temporary hover-focus scene

When a functional area is hovered, the visual hierarchy temporarily changes.

Validated direction:

```text
hover Reading text

Reading text
→ moves toward the visual center

cat / less / head / tail
→ emerge as a directional command tail

LINUX + other root areas
→ move together away from the temporary focus
→ fade progressively into background context
```

Use thin animated lines to show parent-child relationships. The lines must remain underneath the focused node and stay attached while the node moves.

Do not require `LINUX` to remain visually anchored during temporary focus. It remains the global conceptual root, but visually it may drift with the old context while the hovered functional area becomes dominant.

When the user clicks the temporarily focused area:

```text
temporary tail fades out
→ focused area finishes centering
→ old root context fades out
→ persistent child nodes appear again in a clean radial layout
```

A hovered command may later reveal one additional option level, but avoid showing more than about two temporary graph levels at once.

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

## Contextual learning panel

The future interactive learning layer should visually feel like a continuation of the Command Cloud rather than a separate product.

Preferred relationship:

```text
Command Cloud focus
       ↓
Learn by example
       ↓
Practice
       ↓
Challenge
```

Use three clear learning states:

### Example

Show a short exact command, representative output, and one concise explanation.

### Practice

Show a guided command with one meaningful part left for the learner to complete.

### Challenge

Show the task first and let the learner construct the full command. Feedback should be visually compact: correct result, representative output, or one useful hint.

The panel should inherit the active Command Cloud context. If `tail` is focused, examples and challenges should be about `tail`; if `grep` is focused, the panel should switch to `grep`.

Do not imitate a full terminal emulator visually if the underlying feature is only a safe simulation. Make the distinction clear while still using familiar terminal styling for examples and answers.

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
