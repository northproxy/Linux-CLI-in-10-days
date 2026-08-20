# Linux CLI in 10 Days — PROJECT

## 1. Goal

Build a compact Linux CLI learning and portfolio project with one knowledge base and three outputs:

1. **GitHub repository** — structured course and command reference.
2. **Static website** — interactive Cards + Graph knowledge interface.
3. **Instagram** — concise visual learning content derived from the same knowledge.

The project should remain small, understandable, practical, and maintainable.

## 2. Core concept — Cards + Graph

The active website architecture is a **Cards + Graph** interface.

The earlier radial / temporary-focus Command Cloud remains a validated design experiment, but it is archived and is no longer the required final architecture.

### Overview state

The root view uses descriptive functional-area cards:

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

The overview should feel calm and immediately understandable.

### Local layered view

Clicking a functional-area card opens a local knowledge view instead of expanding a global graph.

Example:

```text
File operations
→ pwd / ls / cd / mkdir / touch / cp / mv / rm
```

Selecting a command reveals its immediate options or concepts:

```text
ls
→ -a / -l / -la / -h / -R
```

A meaningful option may reveal one deeper layer:

```text
ls
→ -l
→ permissions / owner / group / size / modified / filename
```

### Validated interaction behavior

Current validated behavior:

- `Cards + Graph` is the Home control;
- breadcrumb shows the persistent path;
- area title and commands share the top row;
- first-level `Options & concepts` occupies a stable-height region;
- hovering another command temporarily previews that command's child options without changing persistent selection;
- leaving hover restores the selected command's child options;
- clicking a new top-level command clears stale child/deep state;
- when a deeper branch is active, sibling options remain visible but are dimmed;
- hovering a dimmed sibling restores its visibility temporarily;
- clicking a dimmed sibling exits the deeper branch and returns to the parent-command state;
- syntax and examples use a full-width, square-cornered terminal-style block;
- the interface does not pretend to execute shell commands.

The knowledge remains graph-like in the data model, but visual geometry is layered rather than globally radial.

## 3. Secondary navigation — Task-oriented paths

The project also supports navigation from human intent:

```text
Domain
  ↓
Task
  ↓
Command
  ↓
Variant / option
  ↓
Concrete syntax
```

Example:

```text
Filesystem
→ Show hidden files
→ ls
→ -a
→ ls -a
```

The Task Map and Command Cloud are two views of the same knowledge.

Do not maintain separate duplicated knowledge bases.

## 4. Three ways to use the project

### Learn Path

A 10-day guided crash course.

### Explore

A dynamic Command Cloud for discovering commands, options, syntax, outputs, and related concepts.

### Find by task

A task-oriented route for users who know what they want to accomplish but do not know the command.

Visual Cards and Instagram content are publishing outputs derived from these same concepts.

## 4.1 Planned interactive learning layer

After the core 10-day Learn Path and Command Cloud are stable, the website may add a contextual learning layer driven by the same knowledge base.

The intended flow is:

```text
Explore
→ Understand
→ Try
→ Check yourself
```

A focused command in the Command Cloud can feed three progressively more active learning modes:

```text
Command Cloud focus
      ↓
Learn by example
      ↓
Practice
      ↓
Challenge
```

### Learn by example

Show short, contextual command examples for the current command or concept.

Example:

```text
Linux → Reading text → tail

tail app.log
→ show the last lines

tail -n 20 app.log
→ show the last 20 lines

tail -f app.log
→ follow new lines
```

### Practice

Ask the learner to complete a partially guided command, for example by choosing or entering the required option or argument.

### Challenge

Ask the learner to write the complete command for a concrete task, then compare it with accepted answers and show representative output or a short hint.

The first prototype should use commands already learned, such as `grep`, `find`, and `tail`.

This layer should remain safe and static for the first version: do not execute real shell commands in the browser. Use JSON-driven examples, accepted answers, expected output, and hints rendered by vanilla JavaScript.

This is a planned extension and is **not required to complete the current v1 scope** unless it is explicitly promoted later.

## 5. Technical scope

### Documentation

- Markdown
- GitHub

### Website

- HTML
- CSS
- vanilla JavaScript
- JSON
- static hosting
- Nginx
- HTTPS

No React, Vue, Node.js application layer, backend, database, API, or build system is required for v1.

### Visuals

- technical diagrams;
- cards + layered knowledge views;
- command anatomy;
- flows;
- trees;
- reusable concepts for GitHub, website, and Instagram.

## 6. Learning scope

### Day 1 — Navigation

`pwd`, `ls`, `cd`

### Day 2 — Files & Directories

`mkdir`, `touch`, `cp`, `mv`, `rm`

### Day 3 — Reading Files

`cat`, `less`, `head`, `tail`

### Day 4 — Search

`grep`, `find`

### Day 5 — Pipes & Redirection

`|`, `>`, `>>`

### Day 6 — Text Processing

`wc`, `sort`, `uniq`, `cut`

### Day 7 — Permissions

`ls -l`, `chmod`, `chown`, `sudo`

### Day 8 — Processes

`ps`, `top`, `kill`

### Day 9 — Networking

`ip`, `ping`, `curl`, `ss`

### Day 10 — Services & Logs

`systemctl`, `journalctl`

Final mini-project:

**Investigate a suspicious web-server log.**

## 7. Repository architecture

```text
linux-cli-in-10-days/
│
├── README.md
├── PROJECT.md
├── ROADMAP.md
├── INSTRUCTIONS.md
├── KNOWLEDGE_MAP.md
├── VISUAL_GUIDE.md
├── WEBSITE.md
├── SOCIAL_CONTENT.md
├── COMMAND_TEMPLATE.md
├── LESSON_TEMPLATE.md
├── LEARNING_LOG.md
│
├── days/
├── map/
├── commands/
├── data/
├── exercises/
├── site/
└── images/
    ├── diagrams/
    └── instagram/
```

## 8. Source-of-truth model

Command-specific explanations belong in:

```text
commands/<command>.md
```

Interactive relationships belong in:

```text
data/map.json
```

The JSON should eventually describe relationships such as:

```text
Linux
↔ command
↔ option / variant
↔ meaning
↔ output concept
↔ related task
```

The exact JSON schema should be validated using a small working prototype before it is expanded.

Lessons reference command knowledge.

The website renders contextual views from the knowledge data.

Visuals summarize existing concepts.

Instagram adapts finished visuals and does not become a separate source of truth.

## 9. Learning environment

Current practical environment:

```text
Windows / VS Code
      ↓ SSH
Ubuntu 24.04 VM
      ↓
Linux CLI practice
```

The Linux VM is a dedicated clone and is safe for course exercises.

## 10. Working rhythm

Target: about **2 hours per session**.

Work in medium-sized blocks.

A good unit of progress is one coherent learning or implementation result, for example:

> Day 2 completed: practice + lesson + command references + cloud/map update + one useful visual.

Do not document every small action.

Do not generate the full project in advance.

## 11. Definition of v1 complete

v1 is complete when:

- all 10 lessons are finished;
- the final log-analysis exercise works;
- core command reference pages exist;
- the Cards + Graph overview supports contextual exploration from functional areas;
- hover/tap previews provide equivalent contextual information;
- click/tap persistent selection works;
- Home/breadcrumb navigation works;
- the task-oriented path can reach relevant commands;
- the knowledge data is loaded from JSON;
- the website is usable on mobile;
- the site is deployed with Nginx and HTTPS;
- main instructional visuals are complete;
- at least one reusable Instagram carousel format exists;
- README and internal links are consistent.

## 12. Portfolio principle

The repository should demonstrate:

- Linux CLI knowledge;
- structured technical learning;
- information architecture;
- graph/context-based UI thinking;
- HTML/CSS/vanilla JavaScript fundamentals;
- JSON-driven rendering;
- basic web-server deployment;
- technical communication;
- ability to turn one knowledge source into multiple useful outputs.

Keep the project practical and concise.
