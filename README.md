# Linux CLI in 10 Days

A practical Linux CLI learning and portfolio project built around an interactive **Cards + Graph** knowledge interface.

One knowledge base. Three outputs:

```text
                    Linux CLI Knowledge
                           │
             ┌─────────────┼─────────────┐
             ↓             ↓             ↓
          GitHub        Website       Instagram
          Course      Command Cloud   Visual Cards
```

## Status

**Active development.**

The 10-day Linux CLI learning path and final log-investigation exercise are complete.

The current website direction is a validated **Cards + Graph** interface:

```text
functional-area cards
→ local command layer
→ options / concepts
→ deeper related concepts
→ syntax / explanation
```

The earlier radial / temporary-focus interface was a useful prototype and is now archived outside the active project.

## Core idea

The website is not a traditional command list and no longer depends on a radial graph layout.

The overview uses functional-area cards such as:

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

Clicking a card opens a local layered knowledge view.

Example:

```text
File operations
→ ls
→ -l
→ permissions / owner / group / size / modified / filename
```

The current interaction rules include:

- `Cards + Graph` returns to the overview;
- breadcrumb shows persistent context;
- area title and commands share the top row;
- the first `Options & concepts` area keeps a stable height;
- hovering another command temporarily previews its options without changing persistent selection;
- clicking another top-level command clears previous child/deep state;
- deeper paths keep the parent option row visible and dim sibling options;
- hovering a dimmed sibling restores it temporarily;
- clicking a dimmed sibling exits the deeper branch and returns to the parent-command level;
- syntax is shown in a full-width, square-cornered terminal-style block.

The interface remains an explorable knowledge graph conceptually, but the visual organization is **cards + layered local context**, not a global moving graph.

## Two ways to find knowledge

### Explore

Use the Cards + Graph interface when you want to explore a functional area, command, option, or related concept.

```text
Linux → ls → -l → permissions / owner / size / date
```

### Task-oriented path

Use when you know the goal but not the command.

```text
Filesystem
→ Show hidden files
→ ls
→ -a
→ ls -a
```

Both paths should lead to the same underlying knowledge.

## Planned interactive learning layer

After the core Learn Path is stable, the same knowledge graph can drive a contextual learning flow:

```text
Cards + Graph
→ Learn by example
→ Practice
→ Challenge
```

The first prototype should remain a safe static simulation in vanilla JavaScript and JSON rather than executing real shell commands in the browser.

## Learn

The project also contains a 10-day learning path:

| Day | Topic |
|---|---|
| 1 | Navigation |
| 2 | Files & Directories |
| 3 | Reading Files |
| 4 | Search |
| 5 | Pipes & Redirection |
| 6 | Text Processing |
| 7 | Permissions |
| 8 | Processes |
| 9 | Networking |
| 10 | Services & Logs |

## Technical stack

v1 intentionally stays small:

```text
HTML + CSS + vanilla JavaScript + JSON
```

Deployment:

```text
Static files → Nginx → HTTPS
```

No framework, database, backend, or build system is required for v1.

## Learning environment

Current practice setup:

```text
VS Code
   ↓ SSH
Ubuntu 24.04 VM
   ↓
Linux CLI
```

The Ubuntu VM is a dedicated clone used as a safe learning environment.

## Final mini-project

Analyze a web-server log:

- count requests;
- find HTTP errors;
- identify bots;
- find active IP addresses;
- inspect User-Agents;
- detect suspicious requests;
- combine commands with pipes.

## Repository

```text
.
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
├── commands/
├── map/
├── data/
├── exercises/
├── site/
└── images/
    ├── diagrams/
    └── instagram/
```

## Core learning rule

Before running a command, ask:

1. What program will run?
2. What input does it receive?
3. What options change its behavior?
4. What output should I expect?

The goal is not to memorize a long command list.

The goal is to build a connected mental map of Linux CLI.
