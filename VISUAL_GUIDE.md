# Visual Guide

## Purpose

Create concise technical visuals that teach Linux CLI as a connected system.

The website's main visual language is **Cards + Graph**: calm functional-area cards leading into layered local knowledge views.

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

## Cards + Graph hierarchy

### Overview

Use functional-area cards as the root visual structure.

```text
Reading text      Search
Text processing   File operations
Permissions       Processes
Networking        Services & logs
```

Do not require `LINUX` to be a central visual node.

### Local area state

A selected area opens a layered local context:

```text
File operations        COMMANDS
                       pwd  ls  cd  mkdir  touch  cp  mv  rm
```

### First child layer

```text
OPTIONS & CONCEPTS
-a  -l  -la  -h  -R
```

This first child region should keep a stable visual height so lower content does not jump during hover previews.

### Deeper state

```text
ls → -l

-a  [-l]  -la  -h  -R
      ↓
permissions  owner  group  size  modified  filename
```

When one option is expanded:

- keep the sibling options visible;
- reduce their emphasis;
- restore a sibling to normal emphasis on hover;
- do not rely only on color for state.

### Detail card

Use a clear hierarchy:

```text
TYPE
title
short explanation

terminal-style syntax
```

The terminal-style syntax area:

- spans the available detail-card width;
- uses square corners;
- is visually distinct from the surrounding white surface;
- must not imply that commands are being executed in-browser.

### Archived radial prototype

The earlier radial / temporary-focus design is a validated experiment, not the active visual architecture.

Do not generalize it unless the project direction is explicitly changed again.

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

Click commits persistent selection and updates the local layered context.

### Home / breadcrumb

The user should always understand where they are. `Cards + Graph` returns to the overview; breadcrumb shows the persistent path.

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
