# `ip`

## Purpose

Inspect Linux network interfaces, addresses, and related network configuration.

## Syntax

```bash
ip OBJECT
```

For Day 9:

```bash
ip addr
```

## Common options / forms

| Form | Meaning |
|---|---|
| `ip addr` | Show network interfaces and their addresses |

## Example

```bash
ip addr
```

## How to read it

```text
interface
├── state
├── MAC address
├── IPv4 address
└── IPv6 address
```

Day 9 examples:

```text
lo      → 127.0.0.1/8
enp0s3  → 10.0.2.15/24
enp0s8  → 192.168.56.30/24
```

## Input

Network information managed by the Linux kernel.

## Output

Interface names, states, link-layer addresses, IP addresses, and related metadata.

## Related concepts

- loopback
- IPv4 address
- network interface
- CIDR prefix
- NAT
- Host-Only network

## Used in

- Day 9 — Networking
- Inspect local network configuration
