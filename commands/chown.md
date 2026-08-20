# chown

## Purpose

Change the owner and optionally the group of a file or directory.

## Syntax

Change owner:

```bash
chown OWNER FILE
```

Change owner and group:

```bash
chown OWNER:GROUP FILE
```

Examples:

```bash
sudo chown root report.txt
sudo chown sadmin:sadmin report.txt
```

## Core distinction

```text
chmod → changes permissions
chown → changes owner/group
```

## Hover / tap meanings

```text
chown USER FILE
Change the file owner.
```

```text
chown USER:GROUP FILE
Change both owner and group.
```

## Input

A target owner, optional group, and a target file or directory.

## Output

Usually no output on success.

Use `ls -l` to verify the owner and group.

## Safety

Changing ownership can prevent users or services from accessing files they need.

Normal users cannot arbitrarily transfer ownership to another user, so `chown` commonly requires elevated privileges.

Verify the target path before using `sudo chown`.

## Related tasks

- transfer file ownership;
- restore expected owner/group;
- inspect and correct ownership.

## Related concepts

- owner
- group
- permissions
- `chmod`
- `sudo`
- `ls -l`

## Lesson

```text
days/day-07-permissions.md
```
