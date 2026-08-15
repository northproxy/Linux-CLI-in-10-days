# Linux CLI in 10 Days — WEBSITE

## Purpose

Build a static interactive website for exploring Linux CLI knowledge through a dynamic Command Cloud and task-oriented paths.

## v1 stack

```text
HTML
CSS
vanilla JavaScript
JSON
Nginx
HTTPS
```

Do not introduce a frontend framework, backend, database, or build system unless the vanilla implementation becomes genuinely insufficient.

## Main experience — Dynamic Command Cloud

### State 1 — Linux overview

The initial view places `LINUX` in the center.

A small set of important commands appears around it.

```text
                         grep
              find                  ps

        cd                                 curl

                        LINUX

        pwd                                ss

              ls                    chmod
                       cat
```

Do not render the complete Linux command universe at once.

The first view should be understandable and calm.

### State 2 — Command focus

Clicking `ls` makes `ls` the center.

The cloud is rebuilt around `ls`.

```text
                         -a
                -l               -h

                         ls

                -la              -R
```

### State 3 — Deeper context

Clicking a meaningful variant can reveal concepts associated with the command or its output.

Example:

```text
Linux › ls › -l
```

with nodes such as:

```text
permissions
owner
group
size
modified
filename
```

## Interaction rules

### Hover

Hovering over a node shows a compact tooltip.

Example:

```text
ls -a
Show all entries, including hidden files.
```

The tooltip should answer:

- what syntax this node represents;
- what it does;
- whether there is an important safety concern.

### Click

Clicking a node changes the current focus and rerenders the local context.

### Back

Provide a clear Back action.

### Breadcrumb

Show current context, for example:

```text
Linux › ls › -l
```

### Mobile

Touch devices do not have hover.

The same information must remain available through tap interaction.

Do not assume desktop behavior automatically works on mobile.

## Secondary experience — Find by task

The website should also support task-oriented discovery.

Example:

```text
Filesystem
→ Show hidden files
→ ls
→ -a
→ ls -a
```

This path should point to the same underlying knowledge as the Command Cloud.

## Data

Machine-readable knowledge belongs in:

```text
data/map.json
```

The final JSON model should support relationships between:

```text
Linux
commands
options / variants
tasks
meanings
output concepts
related concepts
reference pages
```

Do not populate the full dataset before the model is validated with a small prototype.

## Rendering principle

HTML should provide the application shell.

JavaScript should render changing nodes from data.

Do not hard-code every future command as permanent HTML.

The first `ls` prototype may be hard-coded temporarily for learning and validation, but the validated version should become data-driven.

## Files

```text
site/
├── index.html
├── style.css
└── app.js
```

## Script rule

`app.js` must keep the required project header from `INSTRUCTIONS.md`.

## Accessibility and usability

v1 should aim for:

- readable contrast;
- usable font sizes;
- focus visibility;
- keyboard-accessible buttons where practical;
- hover information available by another mechanism;
- mobile-friendly layout;
- no critical information conveyed only by color.

## Deployment

Target:

```text
Static site
   ↓
Nginx
   ↓
HTTPS
```

Deployment comes after the local interaction model is validated.

## Current prototype status

Validated:

- `LINUX` starts as the central node;
- a small command set is rendered around it;
- clicking `ls` makes `ls` the new center;
- `ls` options are rendered from `data/map.json`;
- clicking `-l` can continue to a deeper `ls -l` context;
- `ls -l` reveals output concepts such as permissions, owner, group, size, modified time, and filename;
- nodes are positioned automatically in a radial layout based on node count;
- desktop hover shows a real floating tooltip with syntax and short meaning;
- keyboard focus can expose the same tooltip;
- touch devices use first tap for preview and second tap for focus;
- Back and breadcrumb navigation preserve context;
- the current knowledge model is loaded with `fetch()` from `data/map.json`;
- local development is tested through VS Code Live Server.

Validated example path:

```text
Linux
→ ls
→ -l
→ permissions / owner / group / size / modified / filename
```

The prototype is now sufficiently validated to continue the Learn Path without expanding the full Linux command universe in advance.

Next website work should follow learning needs from Day 2 rather than adding unrelated features.
