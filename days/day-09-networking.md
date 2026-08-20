# Day 9 — Networking

## Goal

Understand the basic Linux networking view and be able to inspect interfaces, test host reachability, make a simple HTTP/HTTPS request, and inspect listening TCP sockets.

## Commands

- `ip`
- `ping`
- `curl`
- `ss`

## Core concept

Linux networking can be inspected in layers:

```text
interfaces / addresses
→ host reachability
→ application service
→ local listening sockets
```

The Day 9 mental model is:

```text
ip    → inspect interfaces and addresses
ping  → test network reachability
curl  → talk to an HTTP/HTTPS service
ss    → inspect sockets and listening ports
```

## Command Cloud context

```text
LINUX
└── Networking
    ├── ip
    ├── ping
    ├── curl
    └── ss
```

Useful deeper relationships from practice:

```text
ip
├── loopback
├── IPv4 address
└── interface

ping
├── IP reachability
└── DNS + reachability

curl
├── response body
└── headers

ss
├── LISTEN
├── local address:port
└── process
```

## Visual

```text
Ubuntu VM
│
├── lo      → 127.0.0.1
├── enp0s3  → 10.0.2.15/24      → NAT / external network
└── enp0s8  → 192.168.56.30/24  → Host-Only lab network

192.168.56.30
      │
      ├── ping 192.168.56.10 → Windows VM
      ├── curl https://example.com → HTTPS service
      └── ss -ltnp → local listening services
```

## Examples

Inspect network interfaces and addresses:

```bash
ip addr
```

Relevant values seen during practice:

```text
lo      → 127.0.0.1/8
enp0s3  → 10.0.2.15/24
enp0s8  → 192.168.56.30/24
```

Test the local network stack:

```bash
ping -c 4 127.0.0.1
```

Test another host in the lab:

```bash
ping -c 4 192.168.56.10
```

When the Windows VM was powered off, the result was:

```text
Destination Host Unreachable
```

After starting the Windows VM, the same address replied successfully with `0% packet loss`.

Test external IP connectivity:

```bash
ping -c 4 8.8.8.8
```

Test DNS resolution plus connectivity:

```bash
ping -c 4 google.com
```

The hostname was resolved to an IP address before ICMP replies were received.

Fetch an HTTPS response body:

```bash
curl https://example.com
```

Fetch only response headers:

```bash
curl -I https://example.com
```

The successful response included:

```text
HTTP/2 200
```

Inspect listening TCP sockets:

```bash
ss -ltn
```

Include process information where permissions allow:

```bash
ss -ltnp
```

For complete process ownership information:

```bash
sudo ss -ltnp
```

During practice, familiar services included:

```text
22   → sshd
8000 → splunkd
8089 → splunkd
9997 → splunkd
```

## Practice

The practical work was completed in:

```text
/home/sadmin/linux-cli-day9
```

Validated network layers:

```text
127.0.0.1
→ local network stack works

192.168.56.10
→ Host-Only lab connectivity works when the Windows VM is running

8.8.8.8
→ external IP connectivity works

google.com
→ DNS resolution plus connectivity works

https://example.com
→ HTTPS service responds successfully

ss -ltnp
→ local listening ports can be connected to processes
```

## Check yourself

1. What extra step is required by `ping google.com` compared with `ping 8.8.8.8`?
2. What does `0.0.0.0:8000` mean in `ss` output?
3. What is the practical difference between `ping` and `curl`?
4. What does `-p` add to `ss -ltnp`?

## Quick recap

```text
ip addr
→ interfaces and addresses

ping -c 4 HOST
→ reachability
→ hostname also requires DNS resolution

curl URL
→ application-layer HTTP/HTTPS response

curl -I URL
→ response headers only

ss -ltn
→ listening TCP sockets

ss -ltnp
→ listening TCP sockets plus processes when permitted

127.0.0.1
→ localhost only

0.0.0.0:PORT
→ listening on all IPv4 interfaces
```

## Command references

```text
commands/ip.md
commands/ping.md
commands/curl.md
commands/ss.md
```
