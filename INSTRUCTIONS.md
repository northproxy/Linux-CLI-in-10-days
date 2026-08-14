# Linux CLI in 10 Days — INSTRUCTIONS

## 1. Project type

This is a **learning + portfolio + publishing project**.

The project has one knowledge base and three outputs:

```text
Linux CLI Knowledge
├── Learn Path
├── Interactive Task Map
└── Visual / Instagram Content
```

The project must remain practical, compact, understandable, and easy to maintain.

---

## 2. Working language

- Work with ChatGPT: **Russian**
- Repository documentation: **English**
- Code comments and script headers: **English**
- Instagram language: chosen per post

---

## 3. Working style

Work in **medium-sized blocks**.

Do not record every small action.

A good unit of progress is:

> One lesson or one coherent feature completed end to end.

Typical session: about **2 hours**.

Do not generate the whole project in advance.

Work step by step and keep the user involved in the learning process.

---

## 4. Teaching principle

This is a learning project.

Do not only provide finished code.

When introducing a new command, script, or technical concept:

1. explain what problem it solves;
2. explain the important parts;
3. show the practical implementation;
4. let the learner run or inspect it;
5. verify the result;
6. only then continue.

Prefer understanding over memorization.

Avoid:

- unexplained copy-paste;
- large code dumps;
- unnecessary abstractions;
- long theory blocks;
- introducing tools that are not needed yet.

---

## 5. Learn Path

The 10-day course is:

1. Navigation
2. Files & Directories
3. Reading Files
4. Search
5. Pipes & Redirection
6. Text Processing
7. Permissions
8. Processes
9. Networking
10. Services & Logs

Each lesson should normally include:

```text
Goal
Commands
Concept
Visual
Examples
Practice
Check yourself
Quick recap
Command references
```

Use `LESSON_TEMPLATE.md`.

---

## 6. Task Map principle

The Task Map starts from the user's intent, not from the command name.

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
-v
  ↓
cp -v report.txt backup/
```

Primary machine-readable source:

```text
data/map.json
```

Readable domain pages belong in:

```text
map/
```

---

## 7. Command reference rule

Command-specific knowledge belongs in:

```text
commands/<command>.md
```

Use `COMMAND_TEMPLATE.md`.

A command page should contain only what is useful for this project:

- purpose;
- syntax;
- relevant options;
- examples;
- input;
- output;
- safety note if necessary;
- links to related tasks or lessons.

Do not recreate full `man` pages.

Lessons and map pages should link to command pages instead of duplicating detailed explanations.

---

## 8. Website scope

v1 uses only:

```text
HTML
CSS
vanilla JavaScript
JSON
Nginx
```

Do not introduce React, Vue, Node.js, databases, APIs, build systems, or frameworks unless the existing approach becomes genuinely insufficient.

The website should remain understandable by reading its source files.

Main interaction:

```text
Domain → Task → Command → Options → Concrete syntax
```

Website files belong in:

```text
site/
```

---

## 9. Mandatory script header

Because this is a learning and portfolio project, **every script or executable source file must begin with a short project header**.

The purpose is to make every file understandable without needing external context.

The header must contain:

- Script
- Purpose
- Project
- Learning focus
- Lifecycle

### JavaScript example

```javascript
/**
 * Script: app.js
 *
 * Purpose:
 * Handles interaction with the Linux CLI Task Map.
 *
 * Project:
 * Linux CLI in 10 Days — learning and portfolio project.
 *
 * Learning focus:
 * Vanilla JavaScript, JSON loading, DOM manipulation, and navigation logic.
 *
 * Lifecycle:
 * Permanent project component.
 */
```

### Python example

```python
"""
Script: example.py

Purpose:
Short description of what this script does.

Project:
Linux CLI in 10 Days — learning and portfolio project.

Learning focus:
What technical concept is being practiced in this file.

Lifecycle:
Permanent project component.
"""
```

### Shell example

```bash
#!/usr/bin/env bash

# Script: example.sh
#
# Purpose:
# Short description of what this script does.
#
# Project:
# Linux CLI in 10 Days — learning and portfolio project.
#
# Learning focus:
# Shell commands, pipelines, and automation.
#
# Lifecycle:
# Temporary learning script.
```

Use an appropriate comment format for the language.

Do not add this header to:

- Markdown documentation;
- JSON data;
- static image assets;
- ordinary configuration files unless comments are supported and useful.

---

## 10. Lifecycle values

Use simple lifecycle descriptions such as:

```text
Permanent project component.
Temporary learning script.
Development helper.
Exercise-only script.
Planned for removal after validation.
```

If a script is temporary, its temporary nature should be explicit.

---

## 11. Visual rule

Visuals are instructional assets, not decoration.

Each visual should:

- explain one concept;
- contain minimal text;
- remain readable on mobile;
- use exact command syntax;
- work on GitHub and the website;
- be adaptable to Instagram.

Prefer:

- trees;
- flows;
- arrows;
- command anatomy;
- task paths;
- compact diagrams.

Visual files belong in:

```text
images/diagrams/
images/instagram/
```

---

## 12. Instagram rule

Instagram is a publishing layer, not a separate knowledge base.

Posts should be derived from finished project content.

Preferred carousel structure:

```text
Slide 1 — task / hook
Slide 2 — concept
Slide 3 — command anatomy or flow
Slide 4 — concrete command
Slide 5 — recap or mini challenge
```

Not every lesson needs an Instagram post.

Publish only concepts that work well visually.

---

## 13. Safety

Always warn before risky or destructive commands.

Especially:

```text
rm
sudo
chmod
chown
kill
recursive operations
disk/storage operations
```

Practice dangerous commands only in a safe directory, VM, or disposable environment.

Never encourage blind execution of a command the learner does not understand.

---

## 14. Documentation policy

Update documentation only when something meaningful changes.

Use:

- `PROJECT.md` — goals, scope, architecture
- `ROADMAP.md` — progress and next work
- `README.md` — public project overview
- `KNOWLEDGE_MAP.md` — domain/task model
- `WEBSITE.md` — website architecture and deployment
- `VISUAL_GUIDE.md` — visual conventions
- `SOCIAL_CONTENT.md` — publishing conventions

Do not maintain a diary of every small step.

---

## 15. Git policy

Prefer meaningful medium-sized commits.

Examples:

```text
docs: complete day 02 file operations
docs: add filesystem task map
docs: add cp command reference
feat: add interactive task navigation
docs: add permissions visual
feat: deploy static site with nginx
```

A commit should represent a coherent result, not every tiny edit.

---

## 16. Definition of a completed lesson

A lesson is complete when:

- the learner understands the commands;
- the practical exercise is completed;
- command reference pages exist where needed;
- the Task Map is updated;
- the visual adds real explanatory value;
- the lesson is concise and readable;
- `ROADMAP.md` is updated.

---

## 17. Definition of v1 complete

v1 is complete when:

- all 10 lessons are finished;
- the final log-analysis exercise works;
- the Task Map covers the main domains;
- core command reference pages exist;
- the static website navigates from task to command;
- the site is deployed with Nginx;
- HTTPS is configured;
- the main visuals are complete;
- at least one reusable Instagram carousel format exists;
- README and internal links are consistent;
- the repository can be understood without external explanation.

---

## 18. New chat start

Use this message when starting a new ChatGPT project chat:

```text
We are continuing the Linux CLI in 10 Days project.

Read PROJECT.md, ROADMAP.md, INSTRUCTIONS.md, KNOWLEDGE_MAP.md, and the relevant project files.

This is a learning and portfolio project.
Work in medium-sized blocks.
Do not document every small action.
Do not build the whole project in advance.

Every script must include the required project header from INSTRUCTIONS.md.

Check the next unfinished goal in ROADMAP.md.
Tell me briefly what we are completing in this session, then give me the first practical action.
```
