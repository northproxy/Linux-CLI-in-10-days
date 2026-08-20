# `curl`

## Purpose

Transfer data to or from a URL and inspect application-layer responses such as HTTP/HTTPS.

## Syntax

```bash
curl [OPTIONS] URL
```

## Common options

| Option | Meaning |
|---|---|
| `-I` | Request and display response headers only |

## Examples

```bash
curl https://example.com
```

Display the response body.

```bash
curl -I https://example.com
```

Display response headers.

A successful Day 9 request returned:

```text
HTTP/2 200
```

## How to read it

```text
curl
├── -I   → headers only
└── URL  → target service
```

## Input

A URL such as `https://example.com`.

## Output

The response body, headers, status information, or other transferred data depending on the options used.

## Related concepts

- HTTP
- HTTPS
- status code
- response headers
- response body
- application-layer service

## Used in

- Day 9 — Networking
- Check whether an HTTP/HTTPS service responds
