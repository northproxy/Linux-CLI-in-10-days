# Linux CLI in 10 Days — INSTRUCTIONS

## 1. Project type

This is a **learning + portfolio + publishing project**.

The project has one knowledge base with several views:

```text
Linux CLI Knowledge
├── Learn Path
├── Dynamic Command Cloud
├── Task-oriented discovery
└── Visual / Instagram Content
```

The project must remain practical, compact, understandable, and easy to maintain.

## 2. Working language

- Work with ChatGPT: **Russian**
- Repository documentation: **English**
- Code comments and script headers: **English**
- Instagram language: chosen per post

## 3. Working style

Work in **medium-sized blocks**.

Do not record every small action.

A good unit of progress is:

> One lesson or one coherent feature completed end to end.

Typical session: about **2 hours**.

Do not generate the whole project in advance.

Work step by step and keep the learner involved.

Use VS Code as the normal project workspace.

For Linux practice, the current environment is:

```text
VS Code terminal
      ↓ SSH
Ubuntu 24.04 VM
```

Do not suggest PowerShell merely to inspect a file that can be opened directly in VS Code.

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
Core concept
Command Cloud context
Visual
Examples
Practice
Check yourself
Quick recap
Command references
```

Use `LESSON_TEMPLATE.md`.

## 6. Cards + Graph principle

The active website architecture is **Cards + Graph with layered local knowledge views**.

The old radial / temporary-focus prototype is archived. Treat it as a validated experiment, not as the current architecture.

### Overview

Use descriptive functional-area cards:

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

### Local context

Clicking a card opens a local layered view.

Example:

```text
File operations
→ ls
→ -l
→ permissions / owner / group / size / modified / filename
```

### Interaction rules

- `Cards + Graph` is Home.
- Breadcrumb shows persistent context.
- Area title and command row share the top section.
- First-level `Options & concepts` keeps stable height.
- Hovering another command temporarily previews its child options without changing selection.
- Leaving hover restores persistent context.
- Clicking a different top-level command clears stale child/deep state.
- A deeper branch keeps its parent option row visible.
- Sibling options are dimmed during deep focus.
- Hover restores a dimmed sibling temporarily.
- Clicking a dimmed sibling exits the deep branch.
- Syntax uses a full-width square-cornered terminal-style block.
- The browser does not execute real shell commands.

### Mobile

Revalidate the Cards + Graph interaction separately on touch devices.

Do not mechanically reuse the old first-tap/second-tap radial behavior unless it proves useful again.

Show only useful local context.

## 7. Task-oriented discovery principle

The project must also allow navigation from human intent:

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

The Command Cloud and Task Map must reuse the same underlying knowledge.

## 8. Machine-readable knowledge

Primary machine-readable source:

```text
data/map.json
```

The final model should support relationships between commands, variants, tasks, meanings, and related concepts.

Do not populate the entire Linux command universe in advance.

Validate the structure with a small working prototype first.

## 9. Command reference rule

Command-specific knowledge belongs in:

```text
commands/<command>.md
```

Use `COMMAND_TEMPLATE.md`.

A command page should contain only what is useful for this project:

- purpose;
- syntax;
- useful variants;
- short hover/tap meanings;
- examples;
- input;
- output;
- safety note if necessary;
- related tasks;
- related concepts;
- lesson links.

Do not recreate full `man` pages.

## 10. Website scope

v1 uses only:

```text
HTML
CSS
vanilla JavaScript
JSON
Nginx
HTTPS
```

Do not introduce React, Vue, a Node.js application layer, databases, APIs, build systems, graph libraries, or frameworks unless the existing approach becomes genuinely insufficient.

The website should remain understandable by reading its source files.

Website files belong in:

```text
site/
```

## 11. Mandatory script header

Because this is a learning and portfolio project, every script or executable source file must begin with a short project header.

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
 * Renders and controls the interactive Linux CLI Cards + Graph interface.
 *
 * Project:
 * Linux CLI in 10 Days — learning and portfolio project.
 *
 * Learning focus:
 * Vanilla JavaScript, JSON loading, DOM manipulation, interaction state,
 * and contextual navigation.
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

Do not add this header to Markdown, JSON, image assets, or ordinary configuration files unless comments are supported and useful.

## 12. Lifecycle values

Use simple descriptions such as:

```text
Permanent project component.
Temporary learning script.
Development helper.
Exercise-only script.
Planned for removal after validation.
```

## 13. Visual rule

Visuals are instructional assets, not decoration.

Each visual should:

- explain one concept or context;
- contain minimal text;
- remain readable on mobile;
- use exact command syntax;
- show hierarchy or relationships clearly;
- work on GitHub and the website;
- be adaptable to Instagram.

Prefer:

- Command Clouds;
- trees;
- flows;
- arrows;
- command anatomy;
- task paths;
- compact diagrams.

## 14. Instagram rule

Instagram is a publishing layer, not a separate knowledge base.

Posts should be derived from finished project content.

A Command Cloud state is a strong candidate for a carousel slide.

Not every lesson needs an Instagram post.

## 15. Safety

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

Safety warnings should also be available in the interactive UI before dangerous examples are followed.

## 16. Documentation policy

Update documentation only when something meaningful changes.

Use:

- `PROJECT.md` — goals, scope, architecture
- `ROADMAP.md` — progress and next work
- `README.md` — public project overview
- `KNOWLEDGE_MAP.md` — knowledge graph and navigation model
- `WEBSITE.md` — website interaction, architecture, deployment
- `VISUAL_GUIDE.md` — visual conventions
- `SOCIAL_CONTENT.md` — publishing conventions
- `LEARNING_LOG.md` — meaningful learning milestones, not every action

Do not maintain a diary of every small step.

## 17. Git policy

Prefer meaningful medium-sized commits.

Examples:

```text
docs: define dynamic command cloud model
feat: prototype linux to ls focus interaction
docs: complete day 01 navigation
feat: load command cloud from json
docs: add permissions visual
feat: deploy static site with nginx
```

A commit should represent a coherent result.

## 18. Definition of a completed lesson

A lesson is complete when:

- the learner understands the commands;
- practical exercises are completed;
- command reference pages exist where needed;
- relevant knowledge relationships are added to the validated model;
- the visual adds real explanatory value;
- the lesson is concise and readable;
- `ROADMAP.md` is updated.

## 19. Definition of v1 complete

v1 is complete when:

- all 10 lessons are finished;
- the final log-analysis exercise works;
- core command references exist;
- the Linux-centered Command Cloud works;
- hover/tap previews work;
- click/tap focus works;
- Back/breadcrumb navigation works;
- task-oriented discovery works;
- JSON drives the interactive knowledge;
- mobile behavior is usable;
- the site is deployed with Nginx and HTTPS;
- main visuals are complete;
- at least one reusable Instagram carousel format exists;
- README and internal links are consistent.

## 20. New chat start

Use:

```text
We are continuing the Linux CLI in 10 Days project.

Read PROJECT.md, ROADMAP.md, INSTRUCTIONS.md, KNOWLEDGE_MAP.md,
WEBSITE.md, VISUAL_GUIDE.md, README.md, and LEARNING_LOG.md.

This is a learning and portfolio project.
Work in medium-sized blocks.
Do not document every small action.
Do not build the whole project in advance.

The active website architecture is Cards + Graph:
functional-area cards open a layered local knowledge view.
Commands reveal options/concepts; meaningful options may reveal one deeper layer.
Hover previews temporary context; click commits persistent selection.
The first Options & concepts region has stable height.
Deep focus keeps sibling options visible but dimmed.
Cards + Graph is Home; breadcrumb shows persistent context.
The old radial / temporary-focus prototype is archived and is not the active architecture.

Every script must include the required project header from INSTRUCTIONS.md.

Check the next unfinished goal in ROADMAP.md.
Tell me briefly what we are completing in this session, then give me the first practical action.
```
