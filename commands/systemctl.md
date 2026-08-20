# systemctl

## Purpose

Inspect and control `systemd` units such as services and timers.

## Syntax

```bash
systemctl ACTION UNIT
```

## Useful variants

```bash
systemctl status ssh
```
Show the current state of the SSH service, including load state, active state, main PID, and recent events.

```bash
systemctl is-active ssh
```
Return the current runtime state, for example `active` or `inactive`.

```bash
systemctl is-enabled ssh
```
Show whether the unit is configured for automatic startup.

```bash
systemctl --type=service --state=running
```
List currently running service units.

```bash
sudo systemctl start SERVICE
```
Ask `systemd` to start a service.

```bash
systemctl list-timers --all
```
Show systemd timers and the units they trigger.

## Input

A systemd action and, where required, a unit name.

## Output

Unit state, configuration information, process details, or a list of units depending on the action.

## Safety note

Starting, stopping, or restarting system services changes the running system and may interrupt network access or applications. Verify the target unit first. Do not stop or restart the SSH service from the SSH session used for the exercise.

## Related tasks

- Check whether a service is running.
- Check whether a service starts automatically.
- List running services.
- Start a safe service manually.
- Inspect timer-to-service relationships.

## Related concepts

- `systemd`
- unit
- service
- timer
- process
- PID
- `active` vs `enabled`
- one-shot service

## Lesson

- `days/day-10-services-logs.md`
