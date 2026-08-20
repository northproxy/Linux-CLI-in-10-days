# ps

## Purpose

Display information about running processes.

## Syntax

```bash
ps
```

Useful forms practiced in Day 8:

```bash
ps
ps -f
ps aux
```

## Useful forms

### Current terminal

```bash
ps
```

Show processes associated with the current terminal.

### Full format

```bash
ps -f
```

Show additional fields such as `UID`, `PID`, `PPID`, and the full command.

### System-wide view

```bash
ps aux
```

Show processes across the system with CPU and memory information.

## Hover / tap meanings

```text
ps
Show a snapshot of processes associated with the current terminal.
```

```text
ps -f
Show a fuller process listing including PID and PPID.
```

```text
ps aux
Show a broad system process snapshot with CPU and memory information.
```

## Input

Process information maintained by the operating system.

## Output

A process listing.

Important fields used in this lesson:

```text
PID   → Process ID
PPID  → Parent Process ID
TTY   → terminal
%CPU  → CPU usage
%MEM  → memory usage
CMD / COMMAND → process command
```

## Examples

```bash
ps -f
```

```bash
ps aux | head
```

```bash
ps aux | grep bash
```

When using `grep`, the `grep` process itself may appear because its command line contains the search term.

## Safety

`ps` only inspects process information and is safe to use.

Be careful when using a PID from `ps` as input to commands such as `kill`: verify both the PID and command first.

## Related tasks

- inspect current shell processes;
- find a process PID;
- inspect parent/child relationships;
- check CPU and memory usage before taking action.

## Related concepts

- process
- PID
- PPID
- TTY
- `top`
- `kill`

## Lesson

```text
days/day-08-processes.md
```
