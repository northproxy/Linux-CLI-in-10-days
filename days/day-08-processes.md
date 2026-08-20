# Day 8 — Processes

## Goal

Understand how Linux represents running programs as processes and be able to inspect, monitor, and safely stop a process.

## Commands

- `ps`
- `top`
- `kill`

## Core concept

A running program is a process.

Each process has a unique process ID (`PID`) and normally has a parent process identified by `PPID`.

```text
program → running process → PID → inspect / monitor / signal
```

A shell can start child processes:

```text
bash
└── sleep 600
```

The main Day 8 mental model is:

```text
ps   → inspect processes
top  → monitor processes live
kill → send a signal to a process
```

## Command Cloud context

```text
LINUX
└── Processes
    ├── ps
    ├── top
    └── kill
        ├── SIGTERM
        └── SIGKILL
```

Only the commands and signal behavior practiced in this lesson are represented.

## Visual

```text
bash (parent process)
   │
   └── sleep 600 (child process)
            │
            ├── PID
            ├── state
            └── CPU / memory

ps   → snapshot
top  → live view
kill → signal
```

## Examples

Show processes associated with the current terminal:

```bash
ps
```

Show a fuller process listing:

```bash
ps -f
```

Important fields include:

```text
PID   → Process ID
PPID  → Parent Process ID
TTY   → associated terminal
CMD   → command
```

Show processes across the system:

```bash
ps aux
```

A useful filtered example:

```bash
ps aux | grep bash
```

`grep` may appear in its own results because its command line contains the searched text.

Monitor processes interactively:

```bash
top
```

Useful information includes process counts, CPU use, memory use, process state, and the most active processes.

Press:

```text
q
```

to leave `top`.

Create a safe background process:

```bash
sleep 600 &
```

Find its PID:

```bash
ps -f
```

Request normal termination:

```bash
kill PID
```

By default, `kill` sends `SIGTERM`.

Force termination only when necessary:

```bash
kill -9 PID
```

`-9` sends `SIGKILL`, which the process cannot catch or ignore.

## Practice

The practical work was completed in:

```text
/home/sadmin/linux-cli-day8
```

Completed flow:

```text
sleep 600 &
→ find PID
→ verify command
→ kill PID
→ verify process disappeared
```

A separate safe test also demonstrated:

```text
kill -9 PID
→ SIGKILL
```

## Safety

Before using `kill`:

1. identify the process;
2. verify its `PID`;
3. verify its command;
4. prefer normal `SIGTERM`;
5. use `SIGKILL` only when normal termination is not sufficient.

Do not terminate system, SSH, Splunk, or other unrelated service processes as part of practice.

## Check yourself

1. What is the difference between `ps` and `top`?
2. What does `PID` identify?
3. What does `PPID` identify?
4. Why can `grep sleep` appear in its own output?
5. Why should `kill -9` not be the first choice?

## Quick recap

```text
process → running program
PID     → process identifier
PPID    → parent process identifier

ps      → snapshot
top     → live monitoring
kill    → send signal

SIGTERM → request normal termination
SIGKILL → force immediate termination
```

## Command references

```text
commands/ps.md
commands/top.md
commands/kill.md
```
