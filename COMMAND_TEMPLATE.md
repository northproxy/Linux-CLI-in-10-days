# Command Reference Template

# `<command>`

## Purpose

One short description of the problem this command solves.

## Basic syntax

```bash
<command> [options] [arguments]
```

## Core use

Explain the command in the scope of this project.

Do not recreate the full `man` page.

## Useful variants

Document only variants that are useful for the course and Command Cloud.

| Syntax | Short meaning | Expected effect |
|---|---|---|
| `<command> -x` | Short hover text | What changes in the output/behavior |
| `<command> -y` | Short hover text | What changes in the output/behavior |

## Command Cloud nodes

Define the meaningful next nodes for the interactive website.

Example:

```text
<command>
├── -x → short meaning
├── -y → short meaning
└── -z → short meaning
```

For each node, keep the hover/tap preview short enough to work as a tooltip.

## Examples

```bash
<real example>
```

Explain the expected result.

## Input

What the command receives:

- file;
- directory;
- text stream;
- process identifier;
- URL;
- other relevant input.

## Output

What the command normally produces or changes.

If the output introduces useful Linux concepts, list them as possible deeper Command Cloud nodes.

Example:

```text
ls -l
→ permissions
→ owner
→ group
→ size
→ modified
→ filename
```

## Safety

Add a warning when the command can:

- delete data;
- overwrite data;
- change permissions or ownership;
- stop processes;
- change system state;
- require elevated privileges.

Omit this section only when no special warning is useful.

## Related tasks

Examples:

```text
Filesystem → Show hidden files
Search → Find text in files
Network → Check listening ports
```

## Related commands

- `<related-command>`

## Used in lessons

- `days/day-XX-....md`
