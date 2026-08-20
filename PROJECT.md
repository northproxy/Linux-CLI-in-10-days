# Linux CLI in 10 Days — PROJECT

## 1. Goal

Build a compact Linux CLI learning and portfolio project with one knowledge base and three outputs:

1. **GitHub repository** — structured course and command reference.
2. **Static website** — interactive dynamic Command Cloud.
3. **Instagram** — concise visual learning content derived from the same knowledge.

The project should remain small, understandable, practical, and maintainable.

## 2. Core concept — Dynamic Command Cloud

The primary website interaction is a dynamic contextual knowledge cloud.

Initial state:

```text
                    Search

      Reading text          Processes

File operations      LINUX      Networking

     Text processing      Permissions

             Services & logs
```

`LINUX` is the central node.

Human-readable functional areas appear around `LINUX` rather than a flat list of commands.

Planned top-level functional areas:

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

Commands belong under these descriptive areas. A node is not just a link. It is an interactive knowledge point.

### Hover / tap preview and temporary focus

On desktop, hovering a functional-area node creates a temporary focus scene rather than immediately changing navigation state.

Validated interaction direction:

```text
normal root state
LINUX + functional areas

hover Reading text
→ Reading text moves toward the visual center
→ LINUX and the other root areas drift together in the opposite direction
→ background areas gradually fade toward transparency
→ Reading text commands appear as a temporary outward "tail"
→ temporary parent-child lines move with the focused area
```

`LINUX` remains the global starting point, but it is not visually fixed during this temporary-focus animation. It stays readable as background context while the hovered functional area becomes the temporary local focus.

Hovering a command may later reveal one further level of useful options or variants. Temporary expansion should normally stop after about two visible levels to avoid clutter.

Hover/tap also shows:

- the resulting command or syntax;
- a short explanation of what it does.

Example:

```text
ls -a
Show all entries, including hidden files.
```

### Click / tap focus

Clicking the temporarily focused area commits the navigation:

```text
temporary hover focus
→ temporary command tail fades out
→ hovered area completes its move to the center
→ LINUX and the old root context fade out
→ persistent focused view is rendered
→ child commands appear in a clean radial layout
```

Hover expansion is temporary; click focus is persistent.

Example:

```text
Linux
  ↓
ls
  ↓
-a  -l  -la  -h  -R
```

The selected command becomes the center and the cloud is rebuilt around its context.

### Deeper exploration

A command variant may lead to concepts contained in its output.

Example:

```text
Linux
→ ls
→ -l
→ permissions
  owner
  group
  size
  modified
  filename
```

The interface should feel like exploring a knowledge graph, not navigating static pages.

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
- radial command-cloud views;
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
- the Command Cloud starts from Linux and supports contextual exploration;
- hover/tap previews work;
- click/tap focus transitions work;
- back/breadcrumb navigation works;
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
