# Final Exercise — Suspicious Web-Server Log Investigation

## Goal

Use the Linux CLI commands learned during Days 1–10 to investigate a small web-server access log and turn raw log lines into useful findings.

The exercise intentionally uses familiar tools instead of introducing a new log-analysis stack.

## Evidence

The investigation uses:

```text
access.log
```

```
192.168.1.15 - - [19/Aug/2026:08:01:12 +0000] "GET / HTTP/1.1" 200 4210 "-" "Mozilla/5.0 Chrome/127.0"
192.168.1.21 - - [19/Aug/2026:08:01:45 +0000] "GET /products HTTP/1.1" 200 8120 "-" "Mozilla/5.0 Firefox/128.0"
10.0.0.42 - - [19/Aug/2026:08:02:03 +0000] "GET /robots.txt HTTP/1.1" 200 120 "-" "Googlebot/2.1"
192.168.1.15 - - [19/Aug/2026:08:02:17 +0000] "GET /images/logo.png HTTP/1.1" 200 15420 "-" "Mozilla/5.0 Chrome/127.0"
203.0.113.77 - - [19/Aug/2026:08:03:01 +0000] "GET /admin HTTP/1.1" 404 512 "-" "Mozilla/5.0"
203.0.113.77 - - [19/Aug/2026:08:03:04 +0000] "GET /wp-admin HTTP/1.1" 404 512 "-" "Mozilla/5.0"
198.51.100.24 - - [19/Aug/2026:08:03:30 +0000] "GET /products HTTP/1.1" 200 8120 "-" "bingbot/2.0"
192.168.1.33 - - [19/Aug/2026:08:04:11 +0000] "POST /login HTTP/1.1" 401 620 "-" "Mozilla/5.0 Firefox/128.0"
192.168.1.33 - - [19/Aug/2026:08:04:20 +0000] "POST /login HTTP/1.1" 401 620 "-" "Mozilla/5.0 Firefox/128.0"
192.168.1.33 - - [19/Aug/2026:08:04:29 +0000] "POST /login HTTP/1.1" 200 910 "-" "Mozilla/5.0 Firefox/128.0"
45.155.205.18 - - [19/Aug/2026:08:05:02 +0000] "GET /.env HTTP/1.1" 404 512 "-" "curl/8.5.0"
45.155.205.18 - - [19/Aug/2026:08:05:05 +0000] "GET /.git/config HTTP/1.1" 404 512 "-" "curl/8.5.0"
45.155.205.18 - - [19/Aug/2026:08:05:09 +0000] "GET /config.php HTTP/1.1" 404 512 "-" "curl/8.5.0"
192.168.1.44 - - [19/Aug/2026:08:06:01 +0000] "GET /contact HTTP/1.1" 200 3010 "-" "Mozilla/5.0 Safari/605.1"
66.249.66.1 - - [19/Aug/2026:08:06:42 +0000] "GET /products/item1 HTTP/1.1" 200 6270 "-" "Googlebot/2.1"
203.0.113.77 - - [19/Aug/2026:08:07:14 +0000] "GET /phpmyadmin HTTP/1.1" 403 420 "-" "Mozilla/5.0"
192.168.1.21 - - [19/Aug/2026:08:08:00 +0000] "GET /products/item2 HTTP/1.1" 200 6450 "-" "Mozilla/5.0 Firefox/128.0"
45.155.205.18 - - [19/Aug/2026:08:08:33 +0000] "GET /etc/passwd HTTP/1.1" 400 390 "-" "curl/8.5.0"
192.168.1.15 - - [19/Aug/2026:08:09:02 +0000] "GET /about HTTP/1.1" 200 2810 "-" "Mozilla/5.0 Chrome/127.0"
198.51.100.90 - - [19/Aug/2026:08:09:51 +0000] "GET /search?q=linux HTTP/1.1" 500 780 "-" "Mozilla/5.0 Chrome/127.0"
```

Each line represents one HTTP request and contains an IP address, request, HTTP status, response size, referrer, and User-Agent.

## Investigation questions

The investigation answers:

- How many requests are present?
- Which requests returned HTTP errors?
- Which IP addresses are most active?
- Which automated clients or bots appear?
- Which User-Agents are associated with errors?
- Which requests target sensitive or administrative paths?
- Which IP addresses generate the suspicious activity?

## Useful commands and pipelines

### Count all requests

```bash
wc -l access.log
```

Result:

```text
20 requests
```

### Find HTTP 4xx and 5xx responses

```bash
grep -E '" [45][0-9][0-9] ' access.log
```

Count them:

```bash
grep -E '" [45][0-9][0-9] ' access.log | wc -l
```

Result:

```text
10 errors
```

Status distribution:

```bash
grep -E '" [45][0-9][0-9] ' access.log \
| cut -d '"' -f 3 \
| cut -d ' ' -f 2 \
| sort \
| uniq -c
```

Observed:

```text
1 400
2 401
1 403
5 404
1 500
```

### Find the most active IP addresses

```bash
cut -d ' ' -f 1 access.log | sort | uniq -c | sort
```

Most active source:

```text
45.155.205.18 → 4 requests
```

### Identify obvious automated clients

```bash
grep -Ei 'bot|crawler|curl' access.log
```

Count:

```bash
grep -Ei 'bot|crawler|curl' access.log | wc -l
```

Result:

```text
7 requests
```

Automation alone is not automatically suspicious. `Googlebot` and `bingbot` appear alongside `curl`, but their requested paths and outcomes are different.

### Analyze User-Agents

```bash
cut -d '"' -f 6 access.log | sort | uniq -c | sort
```

Observed distribution:

```text
1 bingbot/2.0
1 Mozilla/5.0 Safari/605.1
2 Googlebot/2.1
3 Mozilla/5.0
4 curl/8.5.0
4 Mozilla/5.0 Chrome/127.0
5 Mozilla/5.0 Firefox/128.0
```

User-Agents associated with HTTP errors:

```bash
grep -E '" [45][0-9][0-9] ' access.log \
| cut -d '"' -f 6 \
| sort \
| uniq -c \
| sort
```

Observed:

```text
1 Mozilla/5.0 Chrome/127.0
2 Mozilla/5.0 Firefox/128.0
3 Mozilla/5.0
4 curl/8.5.0
```

### Find suspicious paths

```bash
grep -E '/\.env|/\.git/config|/config\.php|/etc/passwd|/wp-admin|/phpmyadmin|/admin' access.log
```

Count:

```bash
grep -E '/\.env|/\.git/config|/config\.php|/etc/passwd|/wp-admin|/phpmyadmin|/admin' access.log | wc -l
```

Result:

```text
7 suspicious-path requests
```

### Attribute suspicious requests to IP addresses

```bash
grep -E '/\.env|/\.git/config|/config\.php|/etc/passwd|/wp-admin|/phpmyadmin|/admin' access.log \
| cut -d ' ' -f 1 \
| sort \
| uniq -c \
| sort
```

Result:

```text
3 203.0.113.77
4 45.155.205.18
```

### Include failed login activity

```bash
grep -E '/\.env|/\.git/config|/config\.php|/etc/passwd|/wp-admin|/phpmyadmin|/admin|POST /login.* 401 ' access.log \
| cut -d ' ' -f 1 \
| sort \
| uniq -c \
| sort
```

Result:

```text
2 192.168.1.33
3 203.0.113.77
4 45.155.205.18
```

## Findings

### 45.155.205.18 — strong probing/scanning signal

This source generated four requests targeting:

```text
/.env
/.git/config
/config.php
/etc/passwd
```

All requests used:

```text
curl/8.5.0
```

and all returned HTTP 4xx responses. The combination of targeted paths, automation, and repeated failures is a strong probing/scanning indicator in this sample.

### 203.0.113.77 — administrative-interface discovery

This source requested:

```text
/admin
/wp-admin
/phpmyadmin
```

The pattern is consistent with discovery of exposed administrative interfaces.

### 192.168.1.33 — repeated authentication attempts

The sequence was:

```text
POST /login → 401
POST /login → 401
POST /login → 200
```

The access log supports the conclusion that two unsuccessful login requests were followed by a successful request. It does not by itself prove password guessing or malicious intent.

## Main learning result

The final exercise connected the individual CLI commands into one investigation process:

```text
raw log
→ filter
→ extract fields
→ group values
→ count events
→ correlate IP / path / status / User-Agent
→ investigate
```

The most important skill was not memorizing one pipeline. It was choosing a useful next transformation based on the question being investigated.
