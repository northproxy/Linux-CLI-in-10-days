# Linux CLI — KNOWLEDGE MAP

## Purpose

Represent Linux CLI knowledge as a connected graph that can be explored from different directions.

The same knowledge should support:

1. **Command Cloud exploration**
2. **Task-oriented discovery**
3. **10-day lessons**
4. **command reference pages**
5. **visual and Instagram content**

## Primary interaction model — Command Cloud

The website begins with Linux as the central concept.

```text
                         grep
              find                  ps

        cd                                 curl

                        LINUX

        pwd                                ss

              ls                    chmod
                       cat
```

Commands around the center are smaller nodes.

The exact layout can change dynamically.

The purpose is not to show every command at once.

The purpose is to show a useful local context.

## Focus model

Clicking a node makes it the new center.

Example:

```text
Linux
  ↓
ls
```

The cloud then changes to the context of `ls`:

```text
                         -a
                -l               -h

                         ls

                -la              -R
                         -t
```

The previous context should remain reachable through a Back action or breadcrumb.

## Hover / tap preview

A node should explain itself before the user commits to a deeper step.

Hover example:

```text
ls -a
Show all entries, including hidden files.
```

The preview should normally include:

- next syntax;
- short meaning;
- safety note when relevant.

Keep it short.

Do not turn the tooltip into a manual page.

## Deeper nodes

Some command variants naturally reveal concepts contained in their output.

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

This allows the graph to connect commands with Linux concepts, not only with options.

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
```

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

- The current focus is visually dominant.
- Show only a useful local neighborhood.
- Use font size, distance, and hierarchy to communicate importance.
- Hover previews the next step.
- Click changes focus.
- Back/breadcrumb restores context.
- Mobile tap must provide an equivalent interaction.
- Do not duplicate knowledge between Command Cloud and Task Map.
- Add nodes only when they improve understanding or navigation.
- Dangerous commands must surface a safety warning before execution examples.
