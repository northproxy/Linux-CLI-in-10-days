# Day 10 — Services & Logs

## Goal

Understand how `systemd` manages services and how to inspect service and system events with `journalctl`.

## Commands

- `systemctl`
- `journalctl`

## Core concept

On this Ubuntu system, `systemd` manages services and other units.

```text
systemctl
→ inspect or control units

journalctl
→ inspect events recorded in the system journal
```

A service can be viewed from several connected perspectives:

```text
service
→ process
→ socket / port
→ journal events
```

`active` and `enabled` answer different questions:

```text
active  → is it running now?
enabled → is it configured to start automatically?
```

An `inactive` service is not necessarily broken. A one-shot service can run a short task, exit with `status=0/SUCCESS`, and correctly become inactive again.

## Command Cloud context

```text
LINUX
→ Services & logs
   ├── systemctl
   └── journalctl
```

Useful deeper contexts:

```text
systemctl
├── status
├── is-active
├── is-enabled
├── start
└── list-timers

journalctl
├── -u UNIT
├── -n N
├── --since TIME
├── -p PRIORITY
├── -b
└── --no-pager
```

## Visual

```text
               systemd
                  │
       ┌──────────┴──────────┐
       ↓                     ↓
   systemctl             journalctl
       │                     │
 state / control        event history
       │                     │
       └──────────┬──────────┘
                  ↓
               service
                  ↓
               process
                  ↓
             socket / port
```

## Examples

Inspect SSH service state:

```bash
systemctl status ssh
```

Check current and boot-time configuration state:

```bash
systemctl is-active ssh
systemctl is-enabled ssh
```

List currently running services:

```bash
systemctl --type=service --state=running
```

Inspect recent SSH journal entries:

```bash
journalctl -u ssh -n 20
```

Limit by time and avoid the pager:

```bash
journalctl -u ssh --since "2026-08-14 22:10:00" --no-pager
```

Filter by priority:

```bash
journalctl -u ssh -p warning --no-pager
journalctl -u ssh -p err --no-pager
```

Inspect the current boot:

```bash
journalctl -b -n 20 --no-pager
```

Combine the journal with already learned tools:

```bash
journalctl -b --no-pager | grep "authentication failure" | wc -l
```

## Practice

The practical work used real services on the Ubuntu VM without disrupting the active SSH connection.

Observed:

- `ssh.service` was `active (running)` and `enabled`;
- its main process was `sshd`;
- SSH journal entries showed stop/start events and `SIGTERM` (`signal 15`);
- `sysstat-collect.service` was a successful one-shot service that returned to `inactive (dead)`;
- `sysstat-collect.timer` triggered `sysstat-collect.service`;
- the current-boot journal contained `systemd`, `sudo`, PAM, CRON, and sysstat events;
- filtering for `authentication failure` found both SSH and sudo authentication failures.

A safe manual start was performed with:

```bash
sudo systemctl start sysstat-collect.service
```

The service completed successfully and the result was verified with both `systemctl status` and `journalctl`.

## Check yourself

1. What is the difference between `systemctl status ssh` and `journalctl -u ssh`?
2. What is the difference between `active` and `enabled`?
3. Why can a service be `inactive` without being broken?
4. What does `journalctl -b` show?
5. What does `journalctl -u ssh -n 20` show?

## Quick recap

```text
systemctl status  → current unit state
systemctl start   → ask systemd to start a unit
is-active         → current runtime state
is-enabled        → automatic-start configuration

journalctl -u     → events for one unit
journalctl -n     → last N entries
journalctl --since→ events after a time
journalctl -p     → filter by priority
journalctl -b     → current boot
```

The main mental model is:

```text
systemctl  → inspect / control services
journalctl → investigate what happened
```

## Command references

- `commands/systemctl.md`
- `commands/journalctl.md`

## Completion rule

Day 10 is complete when:

- practical service inspection and safe service start were performed;
- the difference between runtime state and enablement is understood;
- service and system journals were inspected and filtered;
- command references exist;
- `Services & logs` is represented in the Command Cloud data;
- the new cloud path is validated.
