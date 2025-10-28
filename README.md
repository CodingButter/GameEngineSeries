# GameEngineSeries

Build a **game engine + editor** in the open—using **Bun · React · TypeScript · Tailwind** and a home-rolled **ECS**—in tidy, 15-minute steps. Old-school craftsmanship, modern tools.

## Episode List

- 01 Working with Worktrees

  - **Branch:** https://github.com/CodingButter/GameEngineSeries/tree/ep01-ch01-ep01-repo-layout-and-scripts
  - **Youtube:** https://youtu.be/xERoxdRW2lE

---

## What this project is

A public, learn-by-building series that shows how to design and ship:

- a **runtime engine** (loop, ECS, rendering, assets, physics-lite),
- a **creator-friendly editor** (panels, hierarchy, inspector, gizmos),
- a small **vertical-slice game** that proves the stack.

We document decisions, keep commits small, and leave clear checkpoints so you can jump in anywhere.

---

## Goals

- **Clarity over cleverness:** readable code, explicit tradeoffs.
- **Production posture:** DX, linting, type safety, reproducible builds.
- **Authoring first:** editor features that make creation pleasant.
- **Pedagogy:** every 15-min episode lands a working artifact.
- **Traceability:** viewers can browse the exact code shown on screen.

---

## Who this is for

- **Web/game devs** who want to understand engines (not just use them).
- **Educators & students** who prefer real repositories over slides.
- **Toolsmiths** who like editors, pipelines, and creator UX.
- Anyone who enjoys tidy folders and crisp commits. (You’re our people.)

---

## What you’ll build (high level)

- **Core loop & input** → deterministic updates, input mapping
- **ECS backbone** → entities, components, systems, queries
- **Scene & transforms** → hierarchy, local/world math, gizmos
- **Rendering** → Canvas2D first; WebGL/WebGPU on-ramp optional
- **Assets** → manifests, cache-busting, async loading
- **Physics-lite** → AABB collisions, triggers
- **Editor** → dockable panels, hierarchy, inspector, undo/redo
- **Serialization** → scenes, prefabs, migrations
- **UX polish** → UI/HUD, audio/events, particles/tweens
- **Ship it** → packaging, saves, vertical slice, docs

---

## How the repository is organized

```
06_CODE/                 # Bun workspace (apps, packages, tooling, examples)
04_SERIES_CONTENT/       # Epics → Chapters → Episodes (media, notes, code worktrees)
```

- **apps/** → `editor`, `game`
- **packages/** → `ecs`, `engine`, `utils`, shared `config`
- **tooling/** → helper scripts (e.g., worktree creator)

---

## Branches & tags (how to find code from a specific video)

Every episode gets:

- **Branch:** `epNN-chMM-epPP-<episode-slug>`

  - Example: `ep01-ch01-ep01-repo-layout-scripts`

- **Tag (immutable snapshot when the video ships):** `pub-epNN-chMM-epPP`

  - Example: `pub-ep01-ch01-ep01`

### Find the branch on GitHub

- Click the branch dropdown and search `epNN-chMM-epPP` (e.g., `ep05-ch02-ep01`).
- Or visit `/branches/all` and filter by `epNN-`.

### Why both branch _and_ tag?

- **Branch** = living line for that episode (we may fix typos).
- **Tag** = frozen copy that exactly matches what you saw.
  We link both in each video description so you can choose certainty (tag) or convenience (branch).

### Local worktrees (for contributors/viewers who clone)

We keep a **worktree** of the code inside each episode folder so the repo doubles as a browsable time capsule:

```
04_SERIES_CONTENT/.../EPISODES/EPPP-<slug>/code/   # a git worktree attached to that episode branch
```

You don’t need these to browse on GitHub—but they’re handy offline.

---

## Following along (pick your style)

- **Binge the playlist** → jump branch to branch as you watch.
- **Hands-on** → check out the episode branch, run `bun i`, `bun run dev:editor`.
- **Skim by topic** → explore epics and chapters; each ends with a working demo.

---

## Values & vibe

- **Traditional craft:** measure twice, cut once, commit clearly.
- **Forward-looking:** Bun workspaces, modern TS, clean editor UX.
- **Ship small, ship often:** 15 minutes per step; progress compounds.

---

## Contributing

Issues and PRs welcome. If your change relates to a specific video, target the matching **episode branch**; otherwise target `main`. Keep commits narrative and test the basics.

---

## License

Code is MIT unless noted. Media (music/fonts/footage) carries its own licenses in `01_GLOBAL/legal/`.

---

If it squeaks, we oil it. If it wobbles, we shim it. If it ships—**we party.**
