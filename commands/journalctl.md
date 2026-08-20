# journalctl

## Purpose

Read and filter events stored in the `systemd` journal.

## Syntax

```bash
journalctl [OPTIONS]
```

## Useful variants

```bash
journalctl -u ssh
```
Show journal entries for the SSH unit.

```bash
journalctl -u ssh -n 20
```
Show the last 20 journal entries for SSH.

```bash
journalctl -u ssh --since "2026-08-14 22:10:00" --no-pager
```
Show SSH events beginning at the specified time and print them directly to the terminal.

```bash
journalctl -u ssh -p warning --no-pager
```
Show warning-priority and more serious entries for SSH.

```bash
journalctl -b -n 20 --no-pager
```
Show the last 20 journal entries from the current boot.

```bash
journalctl -b --no-pager | grep "authentication failure"
```
Use an already learned pipeline to search current-boot events by content.

## Input

Journal filters such as unit, count, boot, time range, or priority.

## Output

Timestamped journal records from services and system components.

## Safety note

Reading the journal is normally non-destructive. Some entries may require elevated privileges to view depending on system permissions.

## Related tasks

- Inspect the history of one service.
- Show recent service events.
- Investigate events from the current boot.
- Find warnings or errors.
- Search authentication failures.
- Feed logs into `grep`, `wc`, and other text-processing tools.

## Related concepts

- `systemd-journald`
- unit
- service
- boot
- priority
- authentication events
- log investigation

## Lesson

- `days/day-10-services-logs.md`
