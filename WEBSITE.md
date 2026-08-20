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

A small set of descriptive functional areas appears around it, for example `Reading text`, `Text processing`, `Search`, `File operations`, `Permissions`, `Processes`, `Networking`, and `Services & logs`. Commands are not shown as a flat root-level list.

```text
                    Search

      Reading text          Processes

File operations      LINUX      Networking

     Text processing      Permissions

             Services & logs
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

### Hover — temporary focus scene

Hovering a functional-area node creates a temporary focus scene.

Validated prototype behavior with `Reading text`:

```text
Reading text
→ moves toward the visual center

LINUX + non-hovered root areas
→ move together in the opposite direction
→ gradually fade toward transparency

cat / less / head / tail
→ appear as a temporary outward command tail
→ remain connected to Reading text with moving relationship lines
```

The temporary scene does not change `currentFocus`.

Hovering a command may later reveal one further level of options/variants. Temporary expansion should normally stop after about two visible levels.

Hover also shows a compact tooltip where appropriate.

Example:

```text
ls -a
Show all entries, including hidden files.
```

The tooltip should answer:

- what syntax this node represents;
- what it does;
- whether there is an important safety concern.

### Click — commit temporary focus

Clicking the temporarily focused area commits navigation.

Validated transition direction:

```text
temporary command tail
→ fade out

hovered area
→ finish moving to exact center

LINUX + previous root context
→ finish fading out

persistent render
→ selected area becomes center
→ child commands appear in the standard radial layout
```

This is intentionally simpler than morphing the temporary tail directly into the final circle.

Hover is temporary graph exploration; click makes the selected node the persistent center.

### Back

Provide a clear Back action.

### Breadcrumb

Show current context, for example:

```text
Linux › ls › -l
```

### Mobile

Touch devices do not have hover. Keep the validated model: first tap previews/temporarily exposes context, second tap changes focus.

The same information must remain available through tap interaction. Do not assume desktop behavior automatically works on mobile.

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

## Planned contextual learning panel

After the core Learn Path and Command Cloud are stable, the website may add an interactive learning panel linked to the current graph focus.

Intended flow:

```text
Command Cloud
→ Learn by example
→ Practice
→ Challenge
```

### Learn by example

When the current focus is a command such as `tail`, the panel can show short representative examples from the same knowledge data.

```text
tail app.log
→ show the last lines

tail -n 20 app.log
→ show the last 20 lines

tail -f app.log
→ follow new lines
```

Changing the Command Cloud focus should update this panel contextually rather than opening an unrelated lesson page.

### Practice mode

Give the learner a partially guided task, for example completing an option or argument.

### Challenge mode

Present a concrete task and let the learner enter a complete command. JavaScript can compare the normalized input with a small set of accepted answers and then show representative output or a short hint.

Example:

```text
Task: Find ERROR lines in app.log and show line numbers.

Accepted answer:
grep -n ERROR app.log
```

### Safety and technical boundary

The first implementation must **not execute real shell commands in the browser**.

Use a static simulation:

```text
task
+ accepted answers
+ expected output
+ hints
→ JSON
→ vanilla JavaScript
→ rendered feedback
```

This keeps the site inside the existing static v1 technology model and avoids introducing a backend, container execution service, or remote shell.

The first prototype should use already learned commands such as `grep`, `find`, and `tail`, then be expanded only if the interaction proves useful.

This learning panel is a planned extension and is not currently required for v1 completion.

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

### Post-Learn-Path interaction update

A new desktop temporary-focus interaction has been validated with the `Reading text` root area:

```text
hover Reading text
→ Reading text moves toward center
→ LINUX + other root areas move together away from it
→ background areas fade gradually
→ cat / less / head / tail appear as a temporary command tail

click Reading text
→ temporary tail fades out
→ Reading text completes centering
→ old root context fades out
→ persistent Reading text view renders
→ cat / less / head / tail appear in the normal radial layout
```

This prototype currently validates the interaction direction with one root area. The next implementation step is to generalize the same model to the remaining functional areas, then revalidate desktop readability/performance and mobile behavior.
