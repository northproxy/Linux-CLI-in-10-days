# Cards + Graph prototype

Experimental interface for **Linux CLI in 10 Days**.

This prototype deliberately does **not** replace the validated temporary-focus version.
It tests a different information architecture:

```text
overview cards
→ choose functional area
→ local graph
→ choose command
→ local options / concepts
→ contextual detail panel
```

## Files

```text
cards-graph-prototype/
├── index.html
├── style.css
├── app.js
├── COMMAND_TREE.md
└── data/
    └── map.json
```

## Run

Open the folder through VS Code Live Server (or any local static HTTP server).

Do not open `index.html` only through `file://`, because `fetch()` may be blocked when loading `data/map.json`.

## Validation goals

Evaluate only the interaction direction first:

- Is the eight-card overview calmer and easier to scan?
- Does a local graph feel clearer than a global moving graph?
- Is it obvious what is clickable?
- Does the detail panel help or distract?
- Does the layout still feel like one connected Linux knowledge system?
- Is mobile use understandable without hover?

## Data rule

`data/map.json` is the machine-readable prototype data.

`COMMAND_TREE.md` is a **derived overview only**. It must not become a second source of truth.


## v2 visual adjustment

The first-screen composition is intentionally compact:

- Cards are visible immediately on short desktop viewports.
- The hero behaves like interface context, not a landing-page banner.
- The graph interaction and data model are unchanged.


## v3 interaction experiment

This version tests a more continuous transition:

```text
card overview
→ click one card
→ other cards fade away
→ selected card visually expands
→ local graph appears
```

The goal is to make the graph feel like the inside of the selected card,
not like a separate page.

The old temporary-focus / global radial interaction remains outside this prototype.
