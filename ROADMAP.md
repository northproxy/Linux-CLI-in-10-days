# Linux CLI in 10 Days — ROADMAP

## Phase 0 — Foundation

- [x] Define 10-day Learn Path
- [x] Define Task Map concept
- [x] Define GitHub + website + Instagram scope
- [x] Define minimal technical stack
- [x] Create repository structure
- [x] Create initial `data/map.json`
- [x] Create website skeleton
- [x] Initialize Git repository
- [x] Publish repository to GitHub
- [x] Prepare dedicated Ubuntu VM
- [x] Configure SSH access from VS Code terminal

## Phase 0.5 — Dynamic Command Cloud prototype

The interaction model was clarified during Day 1.

The website is now centered on a dynamic contextual Command Cloud.

- [x] Define Linux-centered Command Cloud concept
- [x] Define hover preview behavior
- [x] Define click-to-focus behavior
- [x] Define deeper contextual exploration
- [x] Build first experimental `ls` interaction
- [x] Build `Linux` overview cloud with a small command set
- [x] Make `ls` become the center after click
- [x] Render `ls` options around the focused command
- [x] Add real hover tooltip
- [x] Add back / breadcrumb navigation
- [x] Validate mobile tap behavior
- [x] Validate the JSON knowledge model with the prototype

Prototype validation complete.

Validated behavior:

- data-driven knowledge loaded from `data/map.json`;
- `LINUX` overview cloud;
- click/tap focus transitions;
- `ls` option cloud;
- deeper `ls -l` output-concept cloud;
- automatic radial positioning for variable node counts;
- real desktop hover tooltip;
- touch first-tap preview / second-tap focus behavior;
- Back and breadcrumb navigation.

Next learning block:

> Phase 2 — Final exercise: investigate a suspicious web-server log.

Do not add all Linux commands before they are introduced or needed.

## Phase 1 — Days 1–10

For each day, complete one medium learning block:

- practical command use;
- concise lesson;
- command references;
- relevant Command Cloud / Task Map data;
- one useful visual where appropriate.

### Course

- [x] Day 1 — Navigation
- [x] Day 2 — Files & Directories
- [x] Day 3 — Reading Files
- [x] Day 4 — Search
- [x] Day 5 — Pipes & Redirection
- [x] Day 6 — Text Processing
- [x] Day 7 — Permissions
- [x] Day 8 — Processes
- [x] Day 9 — Networking
- [x] Day 10 — Services & Logs

### Day 2 current progress

- [x] Practice `mkdir`
- [x] Practice `mkdir -p`
- [x] Practice `touch`
- [x] Practice `cp`
- [x] Practice `mv`
- [x] Practice `rm`
- [x] Practice recursive removal with `rm -r` in the safe VM directory
- [x] Understand create → copy → move / rename → remove
- [x] Understand `cp` vs `mv`
- [x] Complete Day 2 recap / self-check
- [x] Create `day-02-files-directories.md`
- [x] Create command references for `mkdir`, `touch`, `cp`, `mv`, `rm`
- [x] Add Day 2 knowledge to the validated cloud/map model
- [x] Add one useful Day 2 visual
- [x] Finalize Day 2 after Command Cloud / map update



### Day 10 current progress

- [x] Practice `systemctl status ssh`
- [x] Practice `systemctl is-active ssh` and `systemctl is-enabled ssh`
- [x] Understand `active` vs `enabled`
- [x] List running services with `systemctl --type=service --state=running`
- [x] Connect services to processes and listening ports from Days 8–9
- [x] Practice `journalctl -u ssh` and `journalctl -u ssh -n 20`
- [x] Practice `--since`, `-p`, `-b`, and `--no-pager`
- [x] Combine `journalctl` with `grep` and `wc -l`
- [x] Investigate current-boot authentication failures
- [x] Understand that `inactive` does not necessarily mean failed
- [x] Inspect a one-shot service with `sysstat-collect.service`
- [x] Safely start `sysstat-collect.service` and verify completion
- [x] Inspect `sysstat-collect.timer → sysstat-collect.service`
- [x] Complete Day 10 self-check
- [x] Create `day-10-services-logs.md`
- [x] Create command references for `systemctl` and `journalctl`
- [x] Prepare the `Services & logs` Command Cloud branch and task-oriented paths
- [x] Merge Day 10 additions into the current `data/map.json`
- [x] Validate `LINUX → Services & logs → systemctl/journalctl`
- [x] Finalize Day 10 after Command Cloud validation

### Day 9 current progress

- [x] Practice `ip addr`
- [x] Identify loopback, NAT, and Host-Only interfaces
- [x] Understand interface names and IPv4 addresses
- [x] Practice `ping -c 4` against localhost, lab host, external IP, and hostname
- [x] Understand direct IP reachability vs DNS resolution plus reachability
- [x] Observe `Destination Host Unreachable` while the Windows VM is powered off
- [x] Verify successful Host-Only connectivity after the Windows VM starts
- [x] Practice `curl` and `curl -I`
- [x] Understand HTTP/HTTPS response body vs response headers
- [x] Practice `ss -ltn` and `ss -ltnp`
- [x] Understand `LISTEN`, `127.0.0.1`, and `0.0.0.0`
- [x] Connect listening ports to processes with `sudo ss -ltnp`
- [x] Relate `ss` socket ownership to Day 8 process concepts
- [x] Complete Day 9 challenge
- [x] Complete Day 9 self-check
- [x] Create `day-09-networking.md`
- [x] Create command references for `ip`, `ping`, `curl`, and `ss`
- [x] Prepare the `Networking` Command Cloud branch and task-oriented paths
- [x] Merge Day 9 additions into the current `data/map.json`
- [x] Validate `Networking → ip`, `Networking → ping`, `Networking → curl`, and `Networking → ss`
- [x] Finalize Day 9 after Command Cloud validation

### Day 8 current progress

- [x] Practice `ps`
- [x] Practice `ps -f`
- [x] Practice `ps aux`
- [x] Understand `PID` and `PPID`
- [x] Understand current-terminal process view vs broader system process view
- [x] Practice `top`
- [x] Inspect process state, `%CPU`, and `%MEM`
- [x] Create safe background processes with `sleep ... &`
- [x] Practice normal process termination with `kill PID`
- [x] Understand default `SIGTERM`
- [x] Practice forced termination with `kill -9 PID`
- [x] Understand `SIGTERM` vs `SIGKILL`
- [x] Understand why `grep` can match its own command line
- [x] Complete Day 8 challenge
- [x] Complete Day 8 self-check
- [x] Create `day-08-processes.md`
- [x] Create command references for `ps`, `top`, and `kill`
- [x] Add the `Processes` functional area to `data/map.json`
- [x] Add focused `ps`, `top`, and `kill` states
- [x] Add Day 8 task-oriented process paths
- [x] Validate `Processes → ps`, `Processes → top`, and `Processes → kill`
- [x] Validate `kill → SIGTERM / SIGKILL`
- [x] Finalize Day 8

### Day 7 current progress

- [x] Practice reading permissions with `ls -l`
- [x] Understand file type plus `owner / group / others`
- [x] Understand `r`, `w`, and `x`
- [x] Understand the difference between `x` on files and directories
- [x] Practice symbolic `chmod` changes
- [x] Practice numeric modes `644`, `600`, and `640`
- [x] Understand `chmod` vs `chown`
- [x] Practice changing owner and group with `chown`
- [x] Understand when `sudo` is required
- [x] Complete Day 7 challenge
- [x] Create `day-07-permissions.md`
- [x] Create command references for `chmod`, `chown`, and `sudo`
- [x] Add the `Permissions` area and Day 7 focus states to `data/map.json`
- [x] Add Day 7 task-oriented permission paths
- [x] Validate `Permissions → chmod` and `Permissions → ls -l` Command Cloud paths
- [x] Finalize Day 7

### Day 6 current progress

- [x] Practice `wc`
- [x] Practice `wc -l`, `wc -w`, `wc -c`
- [x] Combine `grep` with `wc -l`
- [x] Practice `sort`
- [x] Practice `uniq`
- [x] Practice `uniq -c`
- [x] Understand that `uniq` detects adjacent duplicate lines
- [x] Understand why `sort` is commonly used before `uniq`
- [x] Practice `cut -d` and `cut -f`
- [x] Extract one or multiple fields from delimited text
- [x] Build `cut | sort | uniq -c` pipelines
- [x] Complete Day 6 recap / self-check
- [x] Create `day-06-text-processing.md`
- [x] Create command references for `wc`, `sort`, `uniq`, `cut`
- [x] Add Day 6 commands and task-oriented paths to `data/map.json`
- [x] Validate Day 6 Command Cloud targets
- [x] Finalize Day 6

### Day 5 current progress

- [x] Practice `|`
- [x] Practice `>`
- [x] Practice `>>`
- [x] Understand standard output flowing into another command through a pipe
- [x] Understand overwrite (`>`) vs append (`>>`)
- [x] Build multi-stage filters with `grep`
- [x] Combine a pipeline with file redirection
- [x] Complete Day 5 challenge
- [x] Complete Day 5 self-check
- [x] Create `day-05-pipes-redirection.md`
- [x] Add Day 5 operators and task paths to the Command Cloud data
- [x] Update learned root labels to `File operations`, `Reading text`, `Search`, and `Text processing`
- [x] Validate Day 5 states in the interactive Command Cloud
- [x] Finalize Day 5

### Day 4 current progress

- [x] Practice `grep`
- [x] Practice `grep -i`
- [x] Practice `grep -n`
- [x] Practice `grep -v`
- [x] Practice `grep -c`
- [x] Practice `grep -E`
- [x] Practice `grep -w`
- [x] Practice `find`
- [x] Practice `find -name`
- [x] Practice `find -iname`
- [x] Practice `find -type f` and `find -type d`
- [x] Understand content search (`grep`) vs filesystem-object search (`find`)
- [x] Complete Day 4 recap / self-check
- [x] Create `day-04-search.md`
- [x] Create command references for `grep` and `find`
- [x] Add `Search` domain and Day 4 command states to the Command Cloud data
- [x] Validate Day 4 Search paths in the grouped cloud model
- [x] Finalize Day 4

### Day 3 current progress

- [x] Practice `cat`
- [x] Practice `less`
- [x] Practice `head`
- [x] Practice `tail`
- [x] Practice `head -n N`
- [x] Practice `tail -n N`
- [x] Practice `tail -f`
- [x] Understand whole file vs browsing vs beginning vs end
- [x] Observe live log updates with `tail -f`
- [x] Complete Day 3 recap / self-check
- [x] Create `day-03-reading-files.md`
- [x] Create command references for `cat`, `less`, `head`, `tail`
- [x] Add Day 3 knowledge to the validated cloud/map model
- [x] Add Day 3 task-oriented Text paths
- [x] Add one useful Day 3 visual
- [x] Finalize Day 3 after Command Cloud validation

### Day 1 current progress

- [x] Practice `pwd`
- [x] Practice `ls`
- [x] Practice `ls -a`, `ls -l`, `ls -la`
- [x] Practice `cd`
- [x] Understand `/`, `~`, `.`, `..`
- [x] Understand absolute vs relative paths
- [x] Create initial `day-01-navigation.md`
- [x] Create command references for `pwd`, `ls`, `cd`
- [x] Add Day 1 knowledge to the validated cloud/map model
- [x] Add one useful Day 1 visual
- [x] Final Day 1 recap / check yourself
- [x] Mark Day 1 complete

## Phase 1 completion

The full 10-day Learn Path is complete.

Validated final Day 10 paths:

```text
LINUX → Services & logs → systemctl
LINUX → Services & logs → journalctl
```

The Command Cloud root now contains all eight planned functional areas introduced by the Learn Path.

Next project block:

> Phase 2 — Final exercise: investigate a suspicious web-server log.

## Phase 2 — Final exercise

_Status: complete_

- [x] Add sample `access.log`
- [x] Count requests
- [x] Find HTTP errors
- [x] Identify bots
- [x] Find active IP addresses
- [x] Analyze User-Agents
- [x] Spot suspicious requests
- [x] Build multi-command pipelines
- [x] Document the investigation in `exercises/final-log-investigation.md`

Validated investigation results:

```text
20 total requests
10 HTTP 4xx/5xx responses

45.155.205.18  → 4 suspicious probing requests
203.0.113.77   → 3 administrative-interface discovery requests
192.168.1.33   → 2 failed login requests followed by a successful login request
```

Phase 2 demonstrated the complete investigation flow:

```text
raw log → filter → extract → group → count → correlate → investigate
```

Next project block:

> Phase 3 / Phase 4 — continue functional knowledge coverage and finish the remaining website interaction work.

## Phase 3 — Functional knowledge coverage

The Command Cloud root uses human-readable functional areas rather than abstract umbrella domains. Current Learn Path coverage:

- [x] Reading text — Day 3 (`cat`, `less`, `head`, `tail`)
- [x] Text processing — Day 5 operators (`|`, `>`, `>>`) and Day 6 commands (`wc`, `sort`, `uniq`, `cut`)
- [x] Search — Day 4 (`grep`, `find`)
- [x] File operations — Day 2 (`mkdir`, `touch`, `cp`, `mv`, `rm`)
- [x] Permissions — Day 7
- [x] Processes — Day 8 (`ps`, `top`, `kill`)
- [x] Networking — Day 9 (`ip`, `ping`, `curl`, `ss`)
- [x] Services & logs — Day 10

Day 1 navigation commands (`pwd`, `ls`, `cd`) are already learned and represented in the knowledge model. Their final placement in the descriptive root structure should be decided when the complete Learn Path is visible; do not invent an additional root area prematurely.

Future topics such as system information, archives, and integrity / hashing remain outside the current root until they are deliberately added to scope.

## Command Cloud information architecture decision

Final direction for the root interaction:

- [x] Use descriptive functional areas directly around `LINUX` rather than abstract umbrella domains or a flat command list
- [x] Keep commands one level below those functional areas
- [x] Define desktop temporary-focus behavior for functional-area hover
- [x] Validate `Reading text` temporary-focus prototype
- [x] Hovered area moves toward the visual center
- [x] `LINUX` + non-hovered root areas move together in the opposite direction
- [x] Background root areas fade progressively instead of disappearing abruptly
- [x] Temporary child commands appear as a directional command tail
- [x] Temporary relationship lines stay attached to the moving focused area
- [x] Click commit uses tail fade-out → finish centering → persistent radial render
- [x] Keep click/tap as the persistent focus transition
- [x] Preserve first-tap preview / second-tap focus behavior on touch devices
- [ ] Generalize temporary-focus branches from `Reading text` to all root areas
- [ ] Add one additional hover-expanded option/variant level where useful
- [ ] Validate animation readability and performance on desktop
- [ ] Revalidate mobile behavior after the interaction update

Current validated desktop prototype:

```text
hover Reading text
→ Reading text moves to temporary center
→ LINUX + other domains drift together away
→ other domains gradually fade
→ cat / less / head / tail appear as a command tail

click Reading text
→ tail fades out
→ Reading text completes centering
→ old root context fades out
→ persistent radial Reading text view appears
```

This interaction is validated for `Reading text` only and must be generalized before the website task is marked complete.

Planned root areas:

```text
Linux
├── Reading text
├── Text processing
├── Search
├── File operations
├── Permissions
├── Processes
├── Networking
└── Services & logs
```

Do not populate future command branches before they are introduced in the Learn Path.

## Planned interactive learning layer — post Learn Path / optional v1.5

Architectural direction:

```text
Explore → Understand → Try → Check yourself

Command Cloud
→ Learn by example
→ Practice
→ Challenge
```

- [x] Define contextual `Learn by example` concept
- [x] Define Practice and Challenge progression
- [x] Keep the learning layer connected to the same knowledge graph
- [x] Define safe static simulation instead of real browser shell execution
- [ ] Define a minimal JSON structure for examples, accepted answers, expected output, and hints
- [ ] Build first `Learn by example` prototype
- [ ] Build first Practice interaction
- [ ] Build first Challenge interaction
- [ ] Prototype with already learned `grep`, `find`, and `tail`
- [ ] Validate answer normalization and useful hint behavior
- [ ] Validate mobile interaction
- [ ] Decide after prototype whether to promote this layer into v1 or keep it for v1.5

Do not interrupt Days 5–10 to build this feature. Finish the core Learn Path first unless the roadmap is deliberately changed later.

## Phase 4 — Static website

- [x] Create `index.html`
- [x] Create `style.css`
- [x] Create `app.js`
- [x] Load knowledge from `data/map.json`
- [x] Render Linux-centered command cloud
- [x] Render contextual command options
- [x] Hover / tap preview
- [x] Click / tap focus transitions
- [x] Breadcrumb / back navigation
- [ ] Task-oriented discovery path
- [ ] Command detail/reference links
- [x] Mobile layout
- [ ] Internal links to GitHub/reference pages
- [ ] Deploy with Nginx
- [ ] Enable HTTPS

## Phase 5 — Visual system

- [ ] Define final visual style
- [ ] Linux CLI overview cloud
- [ ] Filesystem tree
- [ ] Command anatomy
- [ ] Pipe flow
- [ ] Permissions
- [x] Processes
- [ ] Networking
- [ ] systemd + logs

## Phase 6 — Instagram

- [ ] Define reusable carousel format
- [ ] Create first carousel
- [ ] Export Instagram-ready assets
- [ ] Add source link/QR or project reference where useful
- [ ] Publish selected course / cloud visuals

## Phase 7 — v1 polish

- [ ] Check links
- [ ] Check command syntax
- [ ] Review dangerous commands
- [ ] Check hover/tap accessibility
- [ ] Check keyboard navigation where practical
- [ ] Check mobile website
- [ ] Review README
- [ ] Review visual consistency
- [ ] Tag `v1.0`

## Later, not v1

- Bash scripting
- SSH as a learning topic
- package management
- users/groups
- disks/filesystems
- cron/systemd timers
- Docker CLI
- advanced security
- large-scale graph visualization libraries
- framework migration only if the vanilla approach becomes genuinely insufficient
