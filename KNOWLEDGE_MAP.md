# Linux CLI — KNOWLEDGE MAP

## Purpose

Help users reach the correct Linux command from a real-world task.

```text
DOMAIN
  ↓
TASK
  ↓
COMMAND
  ↓
OPTIONS
  ↓
CONCRETE SYNTAX
```

## Main domains

```text
                         Linux CLI
                             │
      ┌──────────┬───────────┼───────────┬──────────┐
      ↓          ↓           ↓           ↓          ↓
 Filesystem     Text       Search    Permissions  Processes
      ↓          ↓           ↓           ↓          ↓
   Network    Services     System     Archives   Integrity
```

## Example paths

```text
Filesystem
→ Copy a file
→ cp
→ -v
→ cp -v report.txt backup/
```

```text
Integrity
→ Calculate SHA-256
→ sha256sum
→ FILE
→ sha256sum ubuntu.iso
```

```text
Network
→ Check listening ports
→ ss
→ -tulpn
→ ss -tulpn
```

## Data model

The interactive website should read from:

```text
data/map.json
```

Conceptual structure:

```json
{
  "domain": "Filesystem",
  "tasks": [
    {
      "task": "Copy a file",
      "command": "cp",
      "options": ["-i", "-v", "-p"],
      "example": "cp -v report.txt backup/"
    }
  ]
}
```

## Design rules

- Start with human intent.
- Keep navigation shallow.
- Do not duplicate command explanations.
- Link final command nodes to command reference pages.
- Add domains only when they improve navigation.
