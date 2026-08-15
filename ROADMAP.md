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

> Day 2 — Files & Directories (`mkdir`, `touch`, `cp`, `mv`, `rm`).

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
- [ ] Day 3 — Reading Files
- [ ] Day 4 — Search
- [ ] Day 5 — Pipes & Redirection
- [ ] Day 6 — Text Processing
- [ ] Day 7 — Permissions
- [ ] Day 8 — Processes
- [ ] Day 9 — Networking
- [ ] Day 10 — Services & Logs

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
- [ ] Add Day 2 knowledge to the validated cloud/map model
- [ ] Add one useful Day 2 visual
- [ ] Finalize Day 2 after Command Cloud / map update

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

## Phase 2 — Final exercise

- [ ] Add sample `access.log`
- [ ] Count requests
- [ ] Find HTTP errors
- [ ] Identify bots
- [ ] Find active IP addresses
- [ ] Analyze User-Agents
- [ ] Spot suspicious requests
- [ ] Build multi-command pipelines

## Phase 3 — Knowledge coverage

Main conceptual domains:

- [ ] Filesystem
- [ ] Text
- [ ] Search
- [ ] Permissions
- [ ] Processes
- [ ] Network
- [ ] Services
- [ ] System
- [ ] Archives
- [ ] Integrity / Hashing

These domains support task-oriented discovery and should connect to the same command nodes used by the Command Cloud.

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
- [ ] Processes
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
