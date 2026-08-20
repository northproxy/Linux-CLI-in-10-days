# Linux CLI in 10 Days — Learning Log

## Purpose

Track meaningful learning milestones without documenting every small action.

Focus on:

- practical skills gained;
- concepts understood;
- environment or tooling milestones;
- design decisions that changed the project;
- concise notes that can later serve as portfolio evidence.

Do not use this file as a step-by-step diary.

---

## Environment setup

### What I worked on

- Created a dedicated Ubuntu 24.04 VM for Linux CLI practice.
- Installed and enabled OpenSSH Server.
- Configured VirtualBox NAT port forwarding:
  `127.0.0.1:2222 → Ubuntu:22`.
- Connected to the Linux VM via SSH from the VS Code terminal.
- Established the working flow:

  `VS Code → SSH → Ubuntu VM → Linux CLI`

### What I learned

- The difference between a local PowerShell terminal and a remote Linux shell.
- SSH server listens on TCP port 22.
- VirtualBox NAT can use port forwarding for host-to-guest SSH access.
- VS Code can be the main terminal interface while Linux runs inside a VM.

---

## Day 1 — Navigation

_Status: in progress_

### What I practiced

- `pwd`
- `ls`
- `ls -a`
- `ls -l`
- `ls -la`
- `cd`

### What I learned

- `/` is the filesystem root.
- `~` represents the current user's home directory.
- `.` represents the current directory.
- `..` represents the parent directory.
- Absolute paths start from `/`.
- Relative paths are resolved from the current directory.
- Hidden Linux entries normally begin with `.`.
- The same-looking commands can behave differently in PowerShell and a Linux shell.

### Practical examples

Navigated between:

```text
/home/sadmin
/home
/
```

Inspected hidden files and long-format directory listings.

---

## Command Cloud concept

### What changed

The website concept became clearer while working with `ls`.

The project is not intended to be a static command list or only a task tree.

The intended interaction is a dynamic contextual knowledge cloud.

### Interaction model

```text
Linux
→ click command
→ command becomes center
→ related options/variants appear
→ hover/tap previews syntax and meaning
→ click deeper to explore related concepts
```

Example:

```text
Linux
→ ls
→ -a / -l / -la
```

A deeper `ls -l` view may expose:

```text
permissions
owner
group
size
modified
filename
```

### Why this matters

This changed the website architecture from a mostly linear task navigator into a graph-like contextual explorer.

The Task Map remains useful as a second entry point, but both views should reuse the same underlying knowledge.

### Current prototype

A small experimental `ls` interaction exists in the static website.

The next experiment is:

> Start from `LINUX`, click `ls`, rebuild the cloud around `ls`, add a real hover tooltip, and provide Back/breadcrumb navigation.

---

## Command Cloud prototype and Day 1 completed

### What I built

- Completed the first data-driven dynamic Command Cloud prototype.
- Moved interactive knowledge from hard-coded JavaScript into `data/map.json`.
- Implemented the path:

```text
Linux
→ ls
→ -l
→ output concepts
```

- Added automatic radial positioning so the layout adapts to different node counts.
- Added a real desktop hover tooltip.
- Added touch behavior: first tap previews, second tap changes focus.
- Added Back and breadcrumb navigation.
- Tested the site locally through VS Code Live Server.

### What I learned

- UI state can be represented by the current focus plus navigation history.
- HTML can remain a lightweight shell while JavaScript renders changing views from JSON.
- Data and rendering logic are easier to extend when knowledge is not hard-coded into the interface.
- Dynamic layouts should not depend on fixed `nth-child` rules when the number of nodes can change.
- Desktop hover and mobile tap need separate interaction behavior.

### Day 1 status

Day 1 — Navigation is complete.

Completed:

- `pwd`, `ls`, `ls -a`, `ls -l`, `ls -la`, `cd`;
- `/`, `~`, `.`, `..`;
- absolute vs relative paths;
- command references for `pwd`, `ls`, `cd`;
- Day 1 knowledge in the validated map model;
- navigation visual;
- recap and self-check.

Next learning block:

> Day 2 — Files & Directories: `mkdir`, `touch`, `cp`, `mv`, `rm`.


---

## Day 2 — Files & Directories

_Status: practical work complete; knowledge-map integration pending_

### What I practiced

- `mkdir`
- `mkdir -p`
- `touch`
- `cp`
- `mv`
- `rm`
- `rm -r`
- `rmdir` as a supporting command for empty directories

### Practical environment

Worked inside the isolated practice directory:

```text
/home/sadmin/linux-cli-day2
```

Created directories and files, built a nested path, copied files, moved and renamed files, and removed disposable practice content.

### What I learned

- Filesystem operations can be understood as `create → copy → move / rename → remove`.
- `cp` creates another copy while the original remains.
- `mv` moves the existing object or changes its name.
- Commands can operate directly on relative paths such as `documents/report.txt`.
- `mkdir -p` can create missing parent directories in a path.
- `rm -r` is recursive and destructive, so the target path and current location must be checked before use.
- `rmdir` is useful when the directory is already empty.

### Verification

Completed a combined practice sequence using create, copy, move/rename, and remove operations and answered the Day 2 self-check correctly.

### Next project step

Add Day 2 relationships and safety metadata to the validated Command Cloud / `data/map.json`, then create one useful Day 2 visual and finalize the lesson.

---

## Day 2 — Files & Directories completed

### What I practiced

- `mkdir`
- `mkdir -p`
- `touch`
- `cp`
- `mv`
- `rm`
- `rm -r`
- `rmdir`

### What I learned

- `mkdir` creates directories, while `touch` can create empty files.
- One command can receive multiple path arguments.
- `mkdir -p` can create missing parent directories along a path.
- `cp` creates another copy of an object.
- `mv` changes the location or name of an existing object.
- `rm` removes files directly rather than moving them to a recycle bin.
- `rm -r` recursively removes a directory and its contents, so the target path must be verified before execution.
- File operations become easier to reason about as a sequence:

```text
create → copy → move / rename → remove
```

### Project integration

- Added Day 2 command references for `mkdir`, `touch`, `cp`, `mv`, and `rm`.
- Extended the validated Command Cloud data model with Day 2 command focus states.
- Added task-oriented filesystem paths for the Day 2 operations.
- Added a compact Day 2 filesystem-actions visual.

### Day 2 status

Day 2 — Files & Directories is complete.

Next learning block:

> Day 3 — Reading Files: `cat`, `less`, `head`, `tail`.

---

## Day 3 — Reading Files completed

### What I practiced

- `cat`
- `less`
- `head`
- `tail`
- `head -n N`
- `tail -n N`
- `tail -f`

### Practical environment

Worked inside:

```text
/home/sadmin/linux-cli-day3
```

Used:

```text
system-notes.txt
app.log
```

### What I learned

- `cat` is useful for printing the complete contents of a small file.
- `less` is better for interactively browsing longer files.
- `head` reads from the beginning of a file.
- `tail` reads from the end of a file.
- `-n N` controls how many lines `head` or `tail` displays.
- `tail -f` follows a growing file and shows new lines as they are written.
- `Ctrl+C` stops a running foreground command such as `tail -f`.
- Log investigation often begins at the end of a file because recent events are appended there.

### Live log experiment

Used two SSH terminals:

```text
Terminal 1 → tail -f app.log
Terminal 2 → append new log lines
```

Observed the new lines appear immediately in the first terminal.

### Project integration

- Added `cat`, `less`, `head`, and `tail` command references.
- Added Day 3 focus states to `data/map.json`.
- Added `head -n N`, `tail -n N`, and `tail -f` nodes.
- Added task-oriented `Text` paths.
- Validated the new command states in the interactive Command Cloud.
- Added a Day 3 Reading Files visual.

### Day 3 status

Day 3 — Reading Files is complete.

Next learning block:

> Day 4 — Search: `grep`, `find`.

---

## Day 4 — Search completed

### What I practiced

- `grep`
- `grep -i`
- `grep -n`
- `grep -v`
- `grep -c`
- `grep -E`
- `grep -w`
- `find`
- `find -name`
- `find -iname`
- `find -type f`
- `find -type d`

### Practical environment

Worked inside:

```text
/home/sadmin/linux-cli-day4
```

Used a small `app.log` plus nested `logs/`, `backups/`, and `notes/` directories to compare searching file contents with locating filesystem objects.

### What I learned

- `grep` searches file contents and returns matching lines.
- `find` searches filesystem objects by properties such as name and type.
- `grep -i` ignores letter case.
- `grep -n` shows line numbers.
- `grep -v` inverts the match.
- `grep -c` counts matching lines.
- `grep -E` allows extended patterns such as alternatives with `|`.
- `grep -w` matches a whole word.
- `find -name` is case-sensitive, while `find -iname` ignores case.
- `find -type f` limits results to files and `find -type d` limits them to directories.
- Quoting patterns such as `"*.log"` keeps the wildcard for `find` to interpret rather than letting the shell expand it first.

The main mental model is:

```text
grep → search inside file contents
find → search for filesystem objects
```

### Project integration

- Added `day-04-search.md`.
- Added command references for `grep` and `find`.
- Added the `Search` domain to the grouped Command Cloud root.
- Added contextual `grep` and `find` nodes and the practiced options to `data/map.json`.
- Kept the cloud scoped to commands already introduced in the Learn Path.

### Day 4 status

Day 4 — Search is complete.

Next learning block:

> Day 5 — Pipes & Redirection: `|`, `>`, `>>`.
---

## Day 5 — Pipes & Redirection completed

### What I practiced

- `|`
- `>`
- `>>`
- combining `grep` filters in a pipeline
- redirecting filtered output into files
- appending additional results without overwriting existing content

### Practical environment

Worked inside:

```text
/home/sadmin/linux-cli-day5
```

Used `app.log` to build and save filtered results.

Representative pipeline:

```bash
grep ERROR app.log | grep Login > login-errors.txt
```

### What I learned

- `|` passes the standard output of one command to the standard input of the next command.
- `>` redirects output to a file and replaces its previous contents.
- `>>` redirects output to the end of a file and preserves the existing contents.
- Commands can be composed into processing flows instead of being used only as isolated actions.
- If a command such as `grep` can read the file directly, `grep ERROR app.log` is usually clearer than `cat app.log | grep ERROR`.
- Pipelines make it possible to progressively narrow or transform output before choosing the final destination.

The main mental model is:

```text
input → command → output → next command or file
```

### Project integration

- Added `day-05-pipes-redirection.md`.
- Added Day 5 operators and task-oriented paths to `data/map.json`.
- Added the `Text processing` root area without pre-populating Day 6 commands.
- Renamed the learned root labels from `Filesystem` / `Text` to the current descriptive direction: `File operations` / `Reading text`.
- Validated the updated Day 5 states in the interactive Command Cloud.
- Added a compact pipe-flow visual model.

### Day 5 status

Day 5 — Pipes & Redirection is complete.

Next learning block:

> Day 6 — Text Processing: `wc`, `sort`, `uniq`, `cut`.

---

## Day 6 — Text Processing completed

### What I practiced

- `wc`
- `wc -l`
- `wc -w`
- `wc -c`
- `sort`
- `uniq`
- `uniq -c`
- `cut -d`
- `cut -f`
- combining text-processing commands with pipes

### Practical environment

Worked inside:

```text
/home/sadmin/linux-cli-day6
```

Used:

```text
events.log
users.txt
```

### What I learned

- `wc` summarizes text by counting lines, words, or bytes.
- `wc -l` is especially useful in pipelines to count how many lines another command produced.
- `sort` orders lines and is often used to place identical values next to each other.
- `uniq` works on adjacent duplicate lines rather than finding duplicates globally.
- `uniq -c` counts adjacent repeated lines.
- `cut` extracts fields from structured text when a delimiter is known.
- `cut -d ":" -f N` selects fields from colon-separated text.
- Small text-processing commands become more powerful when composed with pipes.

The main mental model is:

```text
wc    → count
sort  → order / group
uniq  → collapse or count adjacent duplicates
cut   → extract fields
```

Representative processing flow:

```text
users.txt
→ cut -d ":" -f 3
→ sort
→ uniq -c
→ frequency summary
```

### Project integration

- Added `day-06-text-processing.md`.
- Added command references for `wc`, `sort`, `uniq`, and `cut`.
- Added the Day 6 commands under the existing `Text processing` Command Cloud area.
- Added focused `wc`, `sort`, `uniq`, and `cut` states to `data/map.json`.
- Added Day 6 task-oriented text-processing paths.
- Validated that all new Command Cloud targets resolve correctly.

### Day 6 status

Day 6 — Text Processing is complete.

Next learning block:

> Day 7 — Permissions: `ls -l`, `chmod`, `chown`, `sudo`.

---

## Day 7 — Permissions completed

### What I practiced

- `ls -l`
- `ls -ld`
- symbolic `chmod` changes such as `u+w`, `g-w`, and `o-r`
- numeric `chmod` modes `644`, `600`, and `640`
- `chown`
- `sudo chown`

### Practical environment

Worked inside:

```text
/home/sadmin/linux-cli-day7
```

Used:

```text
report.txt
private/
```

### What I learned

- The first character in a long listing identifies the object type, for example `-` for a regular file and `d` for a directory.
- Permission bits are read in three groups:

```text
owner → group → others
```

- `r`, `w`, and `x` mean read, write, and execute.
- For a directory, `x` means the directory can be traversed and objects inside it can be accessed by name.
- Symbolic `chmod` changes individual permissions, while numeric modes describe the complete permission set.
- Numeric permissions use:

```text
r = 4
w = 2
x = 1
```

- `chmod 640` produces:

```text
-rw-r-----
```

- `chmod` changes permissions, while `chown` changes owner and/or group.
- `sudo` runs the following command with elevated privileges and should be used only when those privileges are actually required.

The main mental model is:

```text
ls -l  → inspect permissions and ownership
chmod   → change permissions
chown   → change owner/group
sudo    → run a command with elevated privileges
```

### Project integration

- Added `day-07-permissions.md`.
- Added command references for `chmod`, `chown`, and `sudo`.
- Added the `Permissions` functional area to the Command Cloud root.
- Added focused `chmod`, `chown`, and `sudo` states to `data/map.json`.
- Reused the existing `ls -l` deep context for `permissions`, `owner`, `group`, `size`, `modified`, and `filename` instead of duplicating knowledge.
- Added Day 7 task-oriented permission paths.
- Validated the `Permissions → chmod` and `Permissions → ls -l` Command Cloud paths.

### Day 7 status

Day 7 — Permissions is complete.

Next learning block:

> Day 8 — Processes: `ps`, `top`, `kill`.

---

## Day 8 — Processes completed

### What I practiced

- `ps`
- `ps -f`
- `ps aux`
- `ps aux | head`
- `ps aux | grep bash`
- `top`
- background processes with `sleep ... &`
- `kill PID`
- `kill -9 PID`

### Practical environment

Worked inside:

```text
/home/sadmin/linux-cli-day8
```

Created disposable background `sleep` processes so process termination could be practiced safely without touching SSH, Splunk, `systemd`, or unrelated services.

### What I learned

- A running program is represented as a process.
- `PID` is the unique Process ID.
- `PPID` is the Parent Process ID.
- `ps` without options shows processes associated with the current terminal.
- `ps -f` exposes additional process information such as `UID`, `PID`, `PPID`, `TTY`, and command details.
- `ps aux` provides a broader system process snapshot including `%CPU` and `%MEM`.
- `top` continuously refreshes process and resource information instead of showing only a snapshot.
- Process state letters seen during practice included:

```text
R → running
S → sleeping
```

- A background command such as:

```bash
sleep 600 &
```

creates a child process while returning control to the shell.
- `grep` can appear in its own results because the searched text is present in the `grep` command line itself.
- `kill PID` sends `SIGTERM` by default and should normally be the first termination method.
- `kill -9 PID` sends `SIGKILL`, which forces immediate termination and cannot be handled or ignored by the target process.
- The safe process-control sequence is:

```text
find process
→ verify PID and command
→ try SIGTERM
→ verify result
→ use SIGKILL only if necessary
```

The main mental model is:

```text
ps   → inspect processes
top  → monitor processes live
kill → send signals to processes
```

### Practical verification

Completed a Day 8 challenge:

```text
sleep 600 &
→ identify PID
→ verify the process
→ terminate with normal kill
→ confirm the process disappeared
```

Also compared shell feedback for the two termination signals:

```text
SIGTERM → Terminated
SIGKILL → Killed
```

### Project integration

- Added `day-08-processes.md`.
- Added command references for `ps`, `top`, and `kill`.
- Added the `Processes` functional area to the Command Cloud root.
- Added focused `ps`, `top`, and `kill` states to `data/map.json`.
- Added `PID`, `PPID`, CPU, memory, state, `SIGTERM`, and `SIGKILL` context where useful.
- Added Day 8 task-oriented process paths.
- Validated:

```text
Processes → ps
Processes → top
Processes → kill
kill → SIGTERM / SIGKILL
```

### Day 8 status

Day 8 — Processes is complete.

Next learning block:

> Day 9 — Networking: `ip`, `ping`, `curl`, `ss`.

---

## Day 9 — Networking

_Status: complete_

### What I practiced

- `ip addr`
- `ping -c 4 127.0.0.1`
- `ping -c 4 192.168.56.10`
- `ping -c 4 8.8.8.8`
- `ping -c 4 google.com`
- `curl https://example.com`
- `curl -I https://example.com`
- `ss -ltn`
- `ss -ltnp`
- `sudo ss -ltnp`

### Practical environment

Worked inside:

```text
/home/sadmin/linux-cli-day9
```

The Ubuntu VM exposed three useful network contexts:

```text
lo      → 127.0.0.1
enp0s3  → 10.0.2.15/24
enp0s8  → 192.168.56.30/24
```

The lab Windows VM used:

```text
192.168.56.10
```

### What I learned

- `ip addr` shows network interfaces and assigned addresses.
- `127.0.0.1` is loopback and refers to the local machine.
- The VM uses a NAT interface for external connectivity and a Host-Only interface for the lab network.
- `ping` tests network reachability using ICMP.
- `ping` to an IP address tests connectivity directly, while `ping` to a hostname first depends on DNS resolution.
- `Destination Host Unreachable` was observed while the Windows VM was powered off; after starting it, the same Host-Only address replied successfully.
- `curl` talks to an application-layer service rather than only checking host reachability.
- `curl -I` returns HTTP response headers without the response body.
- A successful HTTPS request to `example.com` returned `HTTP/2 200`.
- `ss -ltn` shows listening TCP sockets with numeric ports.
- `ss -ltnp` adds process information where permissions allow.
- `0.0.0.0:PORT` means a service is listening on all IPv4 interfaces for that port.
- `127.0.0.1:PORT` means a service is bound only to localhost.
- Elevated `ss` output connected familiar listening ports to processes:

```text
22   → sshd
8000 → splunkd
8089 → splunkd
9997 → splunkd
```

This connected Day 8 and Day 9:

```text
process
→ socket
→ port
→ network service
```

The main Day 9 mental model is:

```text
ip    → interfaces and addresses
ping  → reachability
curl  → HTTP/HTTPS service response
ss    → sockets, ports, and processes
```

### Project integration

- Added `day-09-networking.md`.
- Added command references for `ip`, `ping`, `curl`, and `ss`.
- Added the `Networking` functional area to `data/map.json`.
- Added focused `ip`, `ping`, `curl`, and `ss` states.
- Added task-oriented Networking paths.
- Validated:

```text
LINUX → Networking
Networking → ip
Networking → ping
Networking → curl
Networking → ss
```

### Day 9 status

Day 9 — Networking is complete.

Next learning block:

> Day 10 — Services & Logs: `systemctl`, `journalctl`.
---

## Day 10 — Services & Logs

_Status: complete_

### What I practiced

- `systemctl status ssh`
- `systemctl is-active ssh`
- `systemctl is-enabled ssh`
- `systemctl --type=service --state=running`
- `sudo systemctl start sysstat-collect.service`
- `systemctl list-timers --all`
- `journalctl -u ssh`
- `journalctl -u ssh -n 20`
- `journalctl --since ...`
- `journalctl -p warning` / `-p err`
- `journalctl -b`
- `journalctl --no-pager`
- journal pipelines with `grep` and `wc -l`

### Practical environment

Commands were run on the Ubuntu 24.04 VM through the existing VS Code → SSH workflow. Because service and journal commands are system-wide, the shell happened to remain in:

```text
/home/sadmin/linux-cli-day9
```

The active SSH service was inspected but not stopped or restarted. A safe one-shot sysstat service was used for manual service-start practice.

### What I learned

- `systemctl status UNIT` shows the current state and runtime details of a specific unit.
- `journalctl -u UNIT` shows that unit's event history.
- `active` answers whether a unit is running now, while `enabled` describes automatic-start configuration.
- A service can be `inactive (dead)` and still be healthy when it is designed to execute a short task and exit successfully.
- `status=0/SUCCESS` confirmed successful completion of `sysstat-collect.service`.
- `systemd` manages several unit types; `sysstat-collect.timer` triggered `sysstat-collect.service`.
- `journalctl -n N` returns the last N matching entries, while `--since` filters by time.
- `journalctl -p` filters by priority.
- `journalctl -b` limits the journal to the current boot.
- `--no-pager` prints directly to the terminal instead of opening the pager.
- The journal can be combined with previously learned tools such as `grep` and `wc -l`.
- Current-boot analysis found two `authentication failure` records: one from SSH authentication and one from sudo authentication.
- SSH service history showed `signal 15`, connecting Day 10 back to Day 8's `SIGTERM`.
- SSH listening messages connected the service back to Day 9's process/socket/port model.

The main mental model is:

```text
systemctl  → inspect / control services
journalctl → investigate what happened
```

### Project integration

- Added `day-10-services-logs.md`.
- Added command references for `systemctl` and `journalctl`.
- Added the `Services & logs` root node, focused `systemctl` and `journalctl` states, and task-oriented paths to `data/map.json`.
- Validated the Command Cloud paths:

```text
LINUX → Services & logs → systemctl
LINUX → Services & logs → journalctl
```
- Verified that all Day 10 cloud targets and task-node references resolve correctly.

### Day 10 status

Day 10 — Services & Logs is complete.

The full 10-day Learn Path is now complete.

Next project block:

> Phase 2 — Final exercise: investigate a suspicious web-server log.


---

## Phase 2 — Final Log Investigation

_Status: complete_

### What I investigated

Used a sample web-server `access.log` to perform a small CLI-driven security investigation using commands already learned during the 10-day course.

The investigation covered:

- total request volume;
- HTTP 4xx/5xx responses;
- active source IP addresses;
- bots and automated clients;
- User-Agent frequency;
- suspicious URL paths;
- repeated authentication failures;
- multi-command aggregation pipelines.

### What I learned

- A single HTTP error such as `404` is weak evidence by itself; useful context comes from correlating IP address, requested path, HTTP status, and User-Agent.
- Automation is not automatically malicious: known bot User-Agents can be normal, while `curl` combined with sensitive-path probing is more significant.
- `cut`, `sort`, and `uniq -c` can turn raw log lines into useful frequency summaries.
- Filtering first and aggregating second is an effective investigation pattern.
- Access logs support observations about HTTP requests and outcomes, but they do not always prove intent. Two `401` login responses followed by `200` indicate repeated authentication attempts followed by success, not necessarily a password attack.
- Previously learned commands become substantially more useful when composed into pipelines driven by an investigation question.

The main investigation model became:

```text
raw log
→ filter
→ extract
→ group
→ count
→ correlate
→ investigate
```

### Findings

```text
20 total requests
10 HTTP 4xx/5xx responses
```

Three sources deserved closer attention:

```text
45.155.205.18
→ 4 requests to sensitive paths
→ /.env, /.git/config, /config.php, /etc/passwd
→ curl/8.5.0
→ strong probing/scanning signal

203.0.113.77
→ 3 requests to administrative paths
→ /admin, /wp-admin, /phpmyadmin
→ administrative-interface discovery pattern

192.168.1.33
→ POST /login returned 401, 401, then 200
→ repeated failed authentication followed by a successful request
```

### Project integration

- Added `exercises/final-log-investigation.md` with the investigation questions, representative pipelines, verified results, and findings.
- Marked all Phase 2 tasks complete in `ROADMAP.md`.
- Completed the final practical exercise required by the 10-day Learn Path.

### Phase 2 status

Phase 2 — Final exercise is complete.

Next project work moves away from the Learn Path itself and back to the remaining Command Cloud / website and v1 completion tasks.

---

## Command Cloud — temporary focus interaction prototype

_Status: validated with `Reading text`; generalization pending_

### What changed

The desktop root-hover interaction was refined after the 10-day Learn Path and final log investigation.

The earlier model kept `LINUX` visually fixed while child commands appeared around a hovered functional area. The new validated prototype uses a stronger temporary-focus transition.

### Validated interaction

```text
normal root
→ hover Reading text

Reading text
→ moves toward the visual center

LINUX + other root domains
→ move together in the opposite direction
→ gradually fade toward transparency

cat / less / head / tail
→ appear as a temporary directional command tail
→ remain connected to Reading text with moving relationship lines
```

The hover state remains temporary and does not change the persistent graph focus.

On click:

```text
temporary command tail
→ fades out

Reading text
→ completes movement to the exact center

LINUX + previous root context
→ finish fading out

persistent focus
→ Reading text becomes the center
→ cat / less / head / tail appear again in the normal radial layout
```

### What I learned

- Temporary visual focus and persistent navigation focus are easier to reason about as two separate UI states.
- It is simpler and more stable to fade the temporary command tail out before rendering the final radial focus than to morph the tail directly into the circle.
- `opacity` should drive background disappearance when a gradual fade is required; switching `visibility` during the transition makes the scene appear to disappear abruptly.
- Parent-child connector lines must update continuously when the parent node moves.
- Pointer interaction needs a guard area when the hovered node itself moves away from the original cursor position.
- The original Linux root can remain the conceptual global root even when it is not visually fixed during a temporary-focus animation.

### Next step

Generalize the validated `Reading text` temporary-focus interaction to all eight functional root areas, then validate desktop readability/performance and revalidate touch behavior.

---

## Cards + Graph — layered knowledge interface validated

_Status: current active website direction_

### What changed

After completing the Learn Path and validating the earlier radial / temporary-focus prototype, the website information architecture was reconsidered.

The radial prototype was archived outside the active project.

The current website direction is:

```text
Cards overview
→ functional area
→ command layer
→ options / concepts
→ optional deeper concept layer
→ detail / syntax
```

### What was validated

- Functional areas are shown as cards on the overview.
- Clicking a card opens a local layered knowledge view.
- `Cards + Graph` acts as Home.
- Breadcrumb shows the persistent path.
- Area title and command row share the top section.
- The first `Options & concepts` region keeps stable height.
- Hovering another command temporarily previews that command's children without changing persistent selection.
- Leaving hover restores the selected command's children.
- Selecting a new top-level command clears stale child and deeper state.
- Meaningful paths can open one deeper layer, for example:

```text
ls
→ -l
→ permissions / owner / group / size / modified / filename
```

- During deep focus, sibling options remain visible but are dimmed.
- Hovering a dimmed sibling restores it temporarily.
- Clicking a dimmed sibling exits the deep branch and returns to the parent-command level.
- The detail card uses a full-width square-cornered terminal-style syntax block.
- The browser remains a static knowledge interface and does not execute real shell commands.

### What I learned

- A knowledge graph does not require a radial visual layout.
- Stable regions reduce layout jumping during hover previews.
- Temporary hover state and persistent click state should remain separate.
- Clearing stale UI state when changing branches is essential in data-driven interfaces.
- Deeper context is easier to follow when parent and sibling nodes remain visible.
- The interface can preserve graph relationships while using a calmer layered visual structure.

### Current status

The Cards + Graph layered interface is the active implementation direction.

The earlier radial / temporary-focus prototype remains useful portfolio evidence of design exploration, but it is no longer the architecture to generalize.
