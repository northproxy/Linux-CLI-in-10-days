# Visual Guide

## Purpose

Create concise technical visuals that teach one Linux concept quickly.

The same core visual can be reused in:

- GitHub;
- website;
- Instagram.

## Principles

- one concept per visual;
- minimal text;
- strong hierarchy;
- readable on a phone;
- no decorative clutter;
- command syntax must be exact.

## Preferred visual types

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
Network → Open ports → ss → -tulpn → ss -tulpn
```

## Output strategy

Create a master concept first.

Adapt it later for:

- repository diagram;
- website;
- Instagram portrait/carousel.

Do not redesign the concept from scratch for every channel.
