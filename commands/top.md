# top

## Purpose

Monitor Linux processes and system resource usage interactively in real time.

## Syntax

```bash
top
```

Exit with:

```text
q
```

## Core concept

`ps` gives a snapshot.

`top` continuously refreshes its view.

```text
ps  → snapshot
top → live monitoring
```

## Hover / tap meaning

```text
top
Monitor processes, CPU, memory, and process states in a continuously refreshed view.
```

## Useful information

The summary area may show:

```text
load average
Tasks
%Cpu
memory
swap
```

The process table includes useful fields such as:

```text
PID
USER
%CPU
%MEM
S
COMMAND
```

Common state letters seen in the lesson include:

```text
R → running
S → sleeping
```

## Example

```bash
top
```

During Day 8, `top` showed active Splunk processes plus the `top` process itself.

## Input

Live process and system resource information.

## Output

An interactive continuously refreshed terminal display.

## Safety

`top` is safe for monitoring.

Do not terminate or otherwise manipulate unfamiliar system processes merely because they appear near the top of the list.

## Related tasks

- find CPU-heavy processes;
- inspect memory usage;
- observe process state;
- monitor process activity over time.

## Related concepts

- process
- PID
- CPU
- memory
- process state
- `ps`
- `kill`

## Lesson

```text
days/day-08-processes.md
```
