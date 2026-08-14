# Linux CLI in 10 Days

A practical Linux CLI course, task-oriented command map, and visual reference.

One knowledge base. Three outputs:

```text
                    Linux CLI Knowledge
                           │
             ┌─────────────┼─────────────┐
             ↓             ↓             ↓
          GitHub        Website       Instagram
          Course        Task Map      Visual Cards
```

## Learn

Follow the 10-day course:

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

## Find

Start with what you want to do:

```text
Network
  ↓
Check open ports
  ↓
ss
  ↓
ss -tulpn
```

## See

Use concise diagrams to understand concepts quickly.

Examples:

- Linux filesystem tree
- command anatomy
- pipes
- permissions
- processes
- network connections
- systemd and logs

The same visuals can be reused on the website and adapted for Instagram carousels.

## Website

v1 uses only:

```text
HTML + CSS + vanilla JavaScript + JSON
```

The site is static and can be served by Nginx.

No framework or database is required.

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
├── days/          # 10-day course
├── commands/      # command reference
├── map/           # readable task-map pages
├── data/          # machine-readable map data
├── site/          # static website
├── exercises/     # practice files
└── images/
    ├── diagrams/
    └── instagram/
```

## Core rule

Before running a command, ask:

1. What program will run?
2. What input does it receive?
3. What options change its behavior?
4. What output should I expect?
