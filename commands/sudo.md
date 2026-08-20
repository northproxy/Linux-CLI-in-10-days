# sudo

## Purpose

Run a command with elevated privileges when the current user does not have enough permission.

## Syntax

```bash
sudo COMMAND
```

Example:

```bash
sudo chown root report.txt
```

## Core concept

`sudo` does not itself change file permissions or ownership.

It runs the command that follows it with elevated privileges.

```text
sudo  → privilege elevation
chown → ownership change
```

## Hover / tap meaning

```text
sudo COMMAND
Run the following command with elevated privileges. Verify the command first.
```

## Input

Another command and its arguments.

## Output

The output of the command being executed.

`sudo` may also request authentication.

## Safety

`sudo` can allow commands to modify system-wide files and settings.

Before pressing Enter:

1. read the entire command;
2. verify every path;
3. understand what the command will change;
4. do not use `sudo` merely to bypass an error you do not understand.

Use elevated privileges only when they are actually required.

## Related tasks

- perform an administrative file ownership change;
- run a command that requires root privileges.

## Related concepts

- root
- privileges
- permissions
- ownership
- `chmod`
- `chown`

## Lesson

```text
days/day-07-permissions.md
```
