# Website — v1

## Goal

Turn the Task Map into a lightweight interactive website.

The user should be able to move from:

```text
Domain → Task → Command → Syntax
```

without needing to know the command name first.

## Stack

```text
HTML + CSS + vanilla JavaScript + JSON
```

Server:

```text
Nginx
```

No backend or database in v1.

## Suggested structure

```text
site/
├── index.html
├── style.css
├── app.js
└── assets/
```

Shared project data:

```text
data/map.json
```

## Main interaction

1. Show top-level domains.
2. User selects a domain.
3. Show tasks.
4. User selects a task.
5. Show command, short purpose, options, and example.
6. Allow navigation back/up.
7. Link to full command reference when useful.

## v1 priorities

- fast;
- mobile-friendly;
- readable;
- accessible without JavaScript frameworks;
- easy to inspect and understand;
- easy to deploy.

## Deployment

Target:

```text
Browser
   ↓
HTTPS
   ↓
Nginx
   ↓
Static project files
```

Deployment and HTTPS configuration should be treated as part of the Linux learning project, not as separate infrastructure work.
