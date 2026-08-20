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

The website begins with `LINUX` as the central concept.

The first ring should use descriptive functional areas rather than a flat command list.

```text
                    Search

      Reading text          Processes

File operations      LINUX      Networking

     Text processing      Permissions

             Services & logs
```

Commands live one level below these areas.

The exact layout can change dynamically.

The purpose is not to show every command at once.

The purpose is to show a useful local context.


## Temporary hover-focus model

Desktop hover previews graph structure without immediately committing navigation.

The validated root interaction is a temporary-focus scene:

```text
normal state

             Reading text

                 LINUX

hover Reading text

                 cat
                    less
        Reading text   head
                       tail

        LINUX + other root areas
        drift away and fade
```

Behavior:

```text
hover functional area
→ hovered area moves toward the visual center
→ LINUX and non-hovered root areas move together in the opposite direction
→ background root areas gradually fade toward transparency
→ immediate child commands appear as a temporary outward command tail
→ animated parent-child lines stay attached to the moving hovered area
```

`LINUX` remains the global starting point in the knowledge model, but during this temporary visual state it is allowed to move with the old root context.

Clicking the temporarily focused area commits navigation using a deliberately simpler transition:

```text
temporary command tail fades out
→ hovered area completes centering
→ old LINUX/root context fades out
→ persistent focused view is rendered
→ child commands appear in the normal radial layout
```

Hover may later continue one level deeper, for example:

```text
Reading text
  └── tail   ← hovered
        ├── -n N
        └── -f
```

Limit temporary hover expansion to about two visible levels so the graph remains calm and readable.

On touch devices, preserve the validated first-tap preview / second-tap focus behavior rather than relying on hover. Revalidate touch behavior after the temporary-focus desktop interaction is generalized.

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

- The current persistent focus is visually dominant; a hovered root area may temporarily become the dominant local focus before click.
- Show only a useful local neighborhood.
- Use font size, distance, and hierarchy to communicate importance.
- Hover previews the next step.
- Click changes focus.
- Back/breadcrumb restores context.
- Mobile tap must provide an equivalent interaction.
- Do not duplicate knowledge between Command Cloud and Task Map.
- Add nodes only when they improve understanding or navigation.
- Dangerous commands must surface a safety warning before execution examples.
