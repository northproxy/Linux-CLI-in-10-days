# Linux CLI in 10 Days

A practical Linux CLI learning project built around an interactive **Command Cloud**.

One knowledge base. Three outputs:

```text
                    Linux CLI Knowledge
                           │
             ┌─────────────┼─────────────┐
             ↓             ↓             ↓
          GitHub        Website       Instagram
          Course      Command Cloud   Visual Cards
```

## Core idea

The website is not a traditional command list.

It starts with a dynamic field of Linux CLI concepts:

```text
                         grep
              find                  ps

        cd                                 curl

                        LINUX

        pwd                                ss

              ls                    chmod
                       cat
```

The current focus is always the center of the cloud.

Hovering over a node shows a short preview of what it does.

Clicking a node makes it the new focus and reveals the next layer.

Example:

```text
Linux
  ↓ click ls
ls
├── -a
├── -l
├── -la
├── -h
└── -R
```

Hovering over `-a` can show:

```text
ls -a
Show all entries, including hidden files.
```

Clicking deeper can reveal output concepts, syntax, or related knowledge.

The interface behaves like an explorable Linux CLI knowledge graph rather than a static menu.

## Two ways to find knowledge

### Command Cloud

Use when you know or recognize a command and want to explore what it can do.

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
