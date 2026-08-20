# `ss`

## Purpose

Inspect network sockets, including local listening TCP ports and the processes that own them.

## Syntax

```bash
ss [OPTIONS]
```

## Common options

| Option | Meaning |
|---|---|
| `-l` | Show listening sockets |
| `-t` | Show TCP sockets |
| `-n` | Show numeric addresses and port numbers |
| `-p` | Show process information when permitted |

## Examples

```bash
ss -ltn
```

Show listening TCP sockets.

```bash
ss -ltnp
```

Also request process information.

```bash
sudo ss -ltnp
```

Use elevated privileges when process ownership information is otherwise hidden.

## How to read it

```text
0.0.0.0:8000
│       │
│       └── TCP port
└── all IPv4 interfaces
```

Day 9 examples:

```text
0.0.0.0:22   → sshd
0.0.0.0:8000 → splunkd
0.0.0.0:8089 → splunkd
0.0.0.0:9997 → splunkd
```

`127.0.0.1:PORT` means the service is bound only to localhost.

## Input

Socket information from the Linux kernel.

## Output

Socket state, queues, local address and port, peer address and port, and optionally process information.

## Safety

`ss` itself is read-only, but `sudo` should only be used when the additional privilege is actually needed.

## Related concepts

- socket
- TCP
- port
- LISTEN
- localhost
- process
- PID

## Used in

- Day 9 — Networking
- Inspect listening services and connect ports to processes
