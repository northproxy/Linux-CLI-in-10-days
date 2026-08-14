# Linux CLI in 10 Days — PROJECT

## 1. Goal

Build a compact Linux CLI learning project with one knowledge base and three outputs:

1. **GitHub repository** — structured course and reference.
2. **Static website** — interactive task-oriented command map.
3. **Instagram** — concise visual learning cards based on the same material.

The project should remain small, understandable, and maintainable.

## 2. Core concept

Linux commands are easier to learn when navigation starts from the task:

```text
Domain
  ↓
Task
  ↓
Command
  ↓
Options
  ↓
Concrete syntax
```

Example:

```text
Filesystem
  ↓
Copy a file
  ↓
cp
  ↓
-r / -i / -v / -p
  ↓
cp -v report.txt backup/
```

## 3. Three ways to use the project

### Learn Path

A 10-day crash course.

### Task Map

A task-oriented navigator for finding the right command.

### Visual Cards

Minimal diagrams and carousels for quick learning and Instagram publication.

All three outputs should reuse the same concepts instead of duplicating knowledge.

## 4. Technical scope

### Documentation
- Markdown
- GitHub

### Website
- HTML
- CSS
- vanilla JavaScript
- JSON
- static hosting
- Nginx on the server

No framework, database, backend, or build system is required for v1.

### Visuals
- minimal technical diagrams
- reusable on GitHub, website, and Instagram
- exported versions may differ in aspect ratio, but not in meaning

## 5. Learning scope

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

## 6. Repository architecture

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

## 7. Source-of-truth model

Command knowledge belongs in:

```text
commands/<command>.md
```

Task relationships belong in:

```text
data/map.json
```

Lessons reference commands.

The website reads the task map.

Visuals summarize concepts already documented.

Instagram posts adapt visuals; they do not become a separate knowledge base.

## 8. Working rhythm

Target: about **2 hours per session**.

Work in medium-sized blocks.

Good unit of progress:

> Day 2 completed: lesson + command references + map update + one useful visual.

Do not document every tiny action.

## 9. Definition of v1 complete

v1 is complete when:

- all 10 lessons are finished;
- the final log-analysis exercise works;
- the Task Map covers the main domains;
- core command reference pages exist;
- the static site can navigate from task to command;
- the site is deployed through Nginx;
- the main diagrams are complete;
- at least one reusable Instagram carousel/template style exists;
- links and navigation are consistent;
- README explains the whole project clearly.

## 10. Portfolio principle

The repository should show:

- Linux CLI knowledge;
- structured technical learning;
- information architecture;
- frontend fundamentals;
- basic web-server deployment;
- technical communication;
- ability to turn one knowledge source into multiple useful outputs.

Keep the project practical and concise.
