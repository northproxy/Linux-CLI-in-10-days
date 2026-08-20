# Linux CLI — KNOWLEDGE MAP

## Purpose

Represent Linux CLI knowledge as a connected graph that can be explored from different directions.

The same knowledge should support:

1. **Command Cloud exploration**
2. **Task-oriented discovery**
3. **10-day lessons**
4. **command reference pages**
5. **visual and Instagram content**

## Primary interaction model — Cards + Graph

The data model remains a connected knowledge graph.

The active visual interface is **Cards + Graph**, not a global radial layout.

### Root level

Functional-area cards provide the entry points:

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

Commands live one level below these areas.

### Local layered context

Example:

```text
File operations
├── pwd
├── ls
├── cd
├── mkdir
├── touch
├── cp
├── mv
└── rm
```

Selecting `ls` reveals:

```text
ls
├── -a
├── -l
├── -la
├── -h
└── -R
```

Selecting `-l` reveals a deeper concept layer:

```text
ls
└── -l
    ├── permissions
    ├── owner
    ├── group
    ├── size
    ├── modified
    └── filename
```

### Temporary hover preview

Hover can temporarily display another command's immediate children without changing persistent state.

Example:

```text
mkdir selected
→ -p

hover cd
→ /  ~  ..

leave cd
→ -p
```

### Persistent state

Click changes persistent selection.

Switching top-level commands clears previous child/deep branch state before rendering the new command.

### Deep focus

When a deeper branch is active:

- keep the parent option row visible;
- dim sibling options;
- restore a dimmed sibling on hover;
- clicking a dimmed sibling exits the deeper branch and returns to the parent-command level.

### Detail / syntax

The selected knowledge node may provide:

- type;
- title;
- short meaning;
- syntax;
- safety note.

Syntax is rendered in a terminal-style block, but no real shell execution occurs in the browser.

### Navigation

`Cards + Graph` returns to the overview.

Breadcrumb shows persistent context.

The archived radial / temporary-focus interface remains historical design evidence only.

## Task-oriented entry

Users may also start from intent:

```text
Domain
  ↓
Task
  ↓
Command
  ↓
Variant
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

This route should end at the same knowledge nodes used by the Command Cloud.

## Conceptual node types

The project may use node types such as:

```text
root
domain
task
command
option
variant
syntax
output-concept
related-concept
example
practice
challenge
expected-output
hint
```

These are conceptual categories, not yet a frozen JSON schema.

Do not finalize the schema until it is validated with the working `ls` prototype.

## Relationship examples

```text
Linux → ls
ls → -a
ls → -l
ls + -a → ls -a
ls -a → hidden files
Filesystem → Show hidden files
Show hidden files → ls -a
ls -l → permissions
ls -l → owner
ls -l → size
tail → example → tail -f app.log
grep → challenge → Find ERROR lines and show line numbers
challenge → accepted answer → grep -n ERROR app.log
challenge → expected output
challenge → hint
```

## Interactive learning relationships

The knowledge graph may later connect a command or concept to contextual learning material instead of maintaining a separate exercise database.

```text
command
├── example
├── practice
└── challenge
      ├── accepted answer
      ├── expected output
      └── hint
```

The same focused node should be reusable by the Command Cloud, Learn by example, Practice, and Challenge views.

For the first prototype, keep the model deliberately small and validate it with already learned commands such as `grep`, `find`, and `tail`. Do not model every possible valid shell command in advance.

## Source of truth

Machine-readable relationships belong in:

```text
data/map.json
```

Detailed command explanations belong in:

```text
commands/<command>.md
```

Lessons should link to this knowledge instead of recreating large command descriptions.

## Navigation principles

- Functional-area cards are the visual root.
- Show only useful local context.
- Hover previews temporary context without silently committing navigation.
- Click changes persistent selection.
- Switching top-level commands clears stale deeper state.
- Keep the first child region visually stable.
- A deeper branch may add one additional visible layer.
- Dim siblings during deep focus rather than removing them.
- `Cards + Graph` returns to overview.
- Breadcrumb restores persistent context.
- Mobile/touch behavior must provide equivalent information and requires separate validation.
- Do not duplicate knowledge between Cards + Graph and Task Map.
- Dangerous commands must surface a safety warning before execution examples.
