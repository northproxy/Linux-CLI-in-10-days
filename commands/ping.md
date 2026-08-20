# `ping`

## Purpose

Test whether a host can be reached using ICMP echo requests.

## Syntax

```bash
ping [OPTIONS] HOST
```

## Common options

| Option | Meaning |
|---|---|
| `-c N` | Send N echo requests, then stop |

## Examples

```bash
ping -c 4 127.0.0.1
ping -c 4 192.168.56.10
ping -c 4 8.8.8.8
ping -c 4 google.com
```

## How to read it

```text
ping
├── -c 4  → send four requests
└── HOST  → target IP address or hostname
```

## Input

A target IP address or hostname.

A hostname such as `google.com` must first be resolved to an IP address through DNS.

## Output

Replies, packet-loss statistics, and round-trip timing information.

Possible Day 9 result:

```text
Destination Host Unreachable
```

This was observed while the Windows VM was powered off. After the VM started, the same host replied successfully.

## Related concepts

- ICMP
- reachability
- packet loss
- DNS resolution
- round-trip time

## Used in

- Day 9 — Networking
- Test local, lab, and external reachability
