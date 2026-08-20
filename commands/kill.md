# kill

## Purpose

Send a signal to a process identified by its PID.

## Syntax

Normal termination request:

```bash
kill PID
```

Force termination:

```bash
kill -9 PID
```

## Core concept

Despite its name, `kill` is fundamentally a signal-sending command.

```text
kill PID
→ SIGTERM
→ request normal termination
```

```text
kill -9 PID
→ SIGKILL
→ force immediate termination
```

## Useful forms

### Default — SIGTERM

```bash
kill 114759
```

The default signal is `SIGTERM`.

It gives a process the opportunity to terminate normally.

### SIGKILL

```bash
kill -9 114569
```

Signal 9 is `SIGKILL`.

The process cannot catch, handle, or ignore it.

Use this only when normal termination is not sufficient.

## Hover / tap meanings

```text
kill PID
Send SIGTERM and request that the process terminate normally.
```

```text
kill -9 PID
Send SIGKILL and force the process to stop. Verify the PID first.
```

## Input

A signal selection and one or more process IDs.

## Output

Usually no direct output on success.

The shell may report completion of a background job, for example:

```text
Terminated
```

or:

```text
Killed
```

Use `ps` to verify whether the process still exists.

## Safe example

Create a disposable process:

```bash
sleep 600 &
```

Find its PID:

```bash
ps -f
```

Terminate it normally:

```bash
kill PID
```

Verify:

```bash
ps -f
```

## Safety

`kill` can interrupt running applications, shells, services, or system work.

Before sending a signal:

1. identify the process;
2. verify the PID;
3. verify the command;
4. try normal `SIGTERM` first;
5. use `SIGKILL` only when necessary.

Do not practice on SSH, Splunk, `systemd`, or unrelated service processes.

## Related tasks

- stop a test process;
- request graceful process termination;
- force-stop an unresponsive process when necessary.

## Related concepts

- process
- PID
- signal
- SIGTERM
- SIGKILL
- `ps`
- `top`

## Lesson

```text
days/day-08-processes.md
```
