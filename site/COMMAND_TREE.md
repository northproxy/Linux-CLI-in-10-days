# Linux CLI — Command Tree

> Derived overview for the Cards + Graph experiment.
> This file is **not** a source of truth. Machine-readable relationships remain in `data/map.json`.

```text
LINUX
├── File operations
│   ├── pwd
│   ├── ls
│   │   ├── -a
│   │   ├── -l
│   │   │   ├── permissions
│   │   │   ├── owner
│   │   │   ├── group
│   │   │   ├── size
│   │   │   ├── modified
│   │   │   └── filename
│   │   ├── -la
│   │   ├── -h
│   │   └── -R
│   ├── cd
│   ├── mkdir
│   │   └── -p
│   ├── touch
│   ├── cp
│   ├── mv
│   └── rm
│       └── -r
├── Reading text
│   ├── cat
│   ├── less
│   ├── head
│   │   └── -n N
│   └── tail
│       ├── -n N
│       └── -f
├── Search
│   ├── grep
│   │   ├── -i
│   │   ├── -n
│   │   ├── -v
│   │   ├── -c
│   │   ├── -E
│   │   └── -w
│   └── find
│       ├── -name
│       ├── -iname
│       ├── -type f
│       └── -type d
├── Text processing
│   ├── |
│   ├── >
│   ├── >>
│   ├── wc
│   │   ├── -l
│   │   ├── -w
│   │   └── -c
│   ├── sort
│   ├── uniq
│   │   └── -c
│   └── cut
│       └── -d / -f
├── Permissions
│   ├── ls -l
│   ├── chmod
│   │   ├── symbolic
│   │   ├── 644
│   │   ├── 600
│   │   └── 640
│   ├── chown
│   └── sudo
├── Processes
│   ├── ps
│   │   ├── -f
│   │   ├── aux
│   │   ├── PID
│   │   └── PPID
│   ├── top
│   │   ├── %CPU
│   │   ├── %MEM
│   │   └── state
│   └── kill
│       ├── SIGTERM
│       └── SIGKILL
├── Networking
│   ├── ip
│   │   └── addr
│   ├── ping
│   │   └── -c N
│   ├── curl
│   │   └── -I
│   └── ss
│       ├── -ltn
│       └── -ltnp
└── Services & logs
    ├── systemctl
    │   ├── status
    │   ├── is-active
    │   ├── is-enabled
    │   ├── running services
    │   └── list-timers
    └── journalctl
        ├── -u UNIT
        ├── -n N
        ├── --since
        ├── -p
        ├── -b
        └── --no-pager
```
