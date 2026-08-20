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

## Main experience — Cards + Graph

The active website architecture is **Cards + Graph**.

The earlier Linux-centered radial / temporary-focus prototype is archived and is not the current implementation target.

### State 1 — Functional-area overview

The first screen presents functional areas as cards:

```text
Reading text
Text processing
Search
File operations
Permissions
Processes
Networking
Services & logs
```

The overview should remain calm, readable, and usable without hover.

Clicking a card opens its local knowledge context.

### State 2 — Local command layer

Example:

```text
File operations

Commands:
pwd  ls  cd  mkdir  touch  cp  mv  rm
```

The area title and command row share the top section.

`Cards + Graph` acts as the Home control.

Breadcrumb provides persistent context:

```text
Linux › File operations › ls
```

### State 3 — Options & concepts

Selecting a command reveals its immediate children in a stable-height region.

Example:

```text
ls
→ -a  -l  -la  -h  -R
```

Hovering another command temporarily replaces this preview with that command's children without changing persistent selection.

Example:

```text
mkdir selected
→ -p

hover cd
→ /  ~  ..

leave cd
→ -p
```

Selecting a different top-level command clears previous child and deep state.

### State 4 — Deeper context

A meaningful child may open one additional persistent layer.

Example:

```text
ls
→ -l
→ permissions  owner  group  size  modified  filename
```

During deep focus:

- the parent option row remains visible;
- sibling options are dimmed;
- hovering a dimmed sibling restores it temporarily;
- clicking a dimmed sibling exits the deep branch and returns to the parent-command state.

### Detail card

The selected command/option/concept is explained in a detail card.

Syntax is rendered in a full-width square-cornered terminal-style block:

```text
ls -a
```

The terminal styling is explanatory only; the browser does not execute shell commands.

### Interaction rules

#### Hover

Hover is a temporary preview.

It may:

- update detail text;
- preview the hovered command's immediate options;
- restore visibility to a dimmed sibling.

Hover must not silently change persistent selection.

#### Click

Click commits persistent selection.

A new top-level command clears previous child/deep state before rendering its own context.

#### Navigation

- `Cards + Graph` → overview
- breadcrumb → persistent path navigation
- no separate `Back` button is required in the current desktop design

#### Mobile

Touch behavior must be revalidated for the Cards + Graph redesign.

Do not assume desktop hover semantics work on touch devices.

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

Validated locally through VS Code Live Server:

- functional-area Cards overview;
- animated card → local-context transition;
- JSON-driven knowledge loaded from `../data/map.json`;
- local command layer;
- stable first-level `Options & concepts` area;
- temporary hover preview of another command's children;
- persistent command selection;
- stale child/deep state cleanup when switching commands;
- deeper branch rendering;
- dimmed sibling behavior during deep focus;
- sibling hover restoration;
- sibling click exits deep focus;
- Home behavior through `Cards + Graph`;
- larger breadcrumb navigation;
- full-width square-cornered terminal-style syntax block.

Validated example:

```text
File operations
→ ls
→ -l
→ permissions / owner / group / size / modified / filename
```

Next validation work:

- all eight functional areas;
- keyboard behavior;
- mobile/touch behavior;
- desktop spacing, animation, and performance;
- task-oriented discovery and reference links.
