# chmod

## Purpose

Change file or directory permission bits.

## Syntax

```bash
chmod MODE FILE
```

Examples:

```bash
chmod u-w report.txt
chmod u+w report.txt
chmod 640 report.txt
```

## Useful forms

### Symbolic mode

```text
u = owner / user
g = group
o = others

+ = add permission
- = remove permission

r = read
w = write
x = execute
```

Examples:

```bash
chmod u+w report.txt
chmod g-w report.txt
chmod o-r report.txt
```

### Numeric mode

```text
r = 4
w = 2
x = 1
```

Common combinations:

```text
7 = rwx
6 = rw-
5 = r-x
4 = r--
0 = ---
```

Example:

```bash
chmod 640 report.txt
```

produces:

```text
rw- r-- ---
```

## Hover / tap meanings

```text
chmod u+w FILE
Add write permission for the owner.
```

```text
chmod 640 FILE
Set owner to read/write, group to read-only, and others to no access.
```

## Input

A target file or directory and the permission change to apply.

## Output

Usually no output on success.

Use `ls -l` to verify the resulting permissions.

## Safety

`chmod` changes access control.

Verify the target before running it. Be especially careful with recursive permission changes and with commands executed through `sudo`.

## Related tasks

- allow or deny writing;
- make a file executable;
- restrict access to a file;
- set a known permission mode.

## Related concepts

- owner
- group
- others
- `r`, `w`, `x`
- numeric permissions
- `ls -l`

## Lesson

```text
days/day-07-permissions.md
```
