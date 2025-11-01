# 🧩 Built from Scratch: 2D Game Engine (Tutorial Series)

### 🎬 Overview

This repository follows along with the **YouTube series _Built from Scratch: 2D Game Engine_**, where we’re building a modular, browser-based 2D game engine from the ground up — one clean system at a time.

Each episode is short (under **30 minutes**) and focused on clarity, not perfection.  
The goal is to show how real systems are built: simple, transparent, and adaptable.

We’re using **BHVR** — short for **Bun · Hono · Vite · React** — as our foundation for rapid iteration.  
It’s not the engine itself, but the infrastructure that connects all the moving parts.

---

## ⚙️ Current Episode — Core Loops & Engine Integration

🎥 Watch the episode:  
**[YouTube – Episode 3: Core Loops & Engine Integration](https://www.youtube.com/watch?v=oHxFAvvBBtY)**

In this episode, we gave our engine a real **heartbeat**.  
We built two key packages — **@ges/core** and **@ges/engine** — and connected them to the editor through the renderer.  
This setup turns the project from a visual demo into a functioning engine loop with real delta-time updates.

### Highlights

- Created a **core package** that unifies all engine modules under one namespace
- Built the **engine package**, defining its update and render loops
- Implemented consistent timing using **delta time** and a fixed tick rate
- Added frame-rate smoothing to avoid CPU drift
- Hooked the **engine** into the **React editor** and displayed live FPS
- Verified the new modular dependency chain: `editor → core → engine → renderer`

This episode marks the transition from “drawing frames” to **running frames** — the engine now drives the scene.

---

## 🧭 Roadmap (Episodes 1–7)

| Episode | Topic                                      | Duration | Purpose                                                 |
| :-----: | :----------------------------------------- | :------: | :------------------------------------------------------ |
|  **1**  | Manual Setup                               | <30 min  | Build everything by hand to understand the wiring.      |
|  **2**  | BHVR Integration                           | <30 min  | Transition to BHVR; create our first working renderer.  |
|  **3**  | Core Tick & Engine Integration _(current)_ | <30 min  | Add the heartbeat — consistent update + render loops.   |
|  **4**  | ECS Foundations                            | <30 min  | Build the entity and component architecture.            |
|  **5**  | ECS Systems                                | <30 min  | Connect logic and behavior to the engine tick.          |
|  **6**  | Editor UI Setup                            | <30 min  | Build the editor interface using React.                 |
|  **7**  | Editor Interaction                         | <30 min  | Add selection, input, and live updates between systems. |

By the end of Episode 7, the engine, editor, ECS, and renderer will be fully wired together and ready to evolve.

---

## 🧠 Series Philosophy

> “Focus on the structure.  
> The features come later.”

We’re not chasing optimization yet — we’re building a clear, maintainable foundation.  
Every system connects logically, every line has a purpose, and every improvement builds on solid ground.

> _What part of the code does what?_  
> That’s the question each episode answers.

---

## 🧰 BHVR Stack

| Tool      | Role                                                       |
| --------- | ---------------------------------------------------------- |
| **Bun**   | Runtime and package manager for fast builds and workspaces |
| **Hono**  | Lightweight HTTP framework for tooling and dev servers     |
| **Vite**  | Instant hot reload and efficient bundling                  |
| **React** | Editor UI and live engine overlays                         |

BHVR keeps the workflow fast, modular, and transparent — the cables beneath the surface that make iteration effortless.

---

## 🛠️ Quick Start

Clone the repo and check out this episode’s branch:

```bash
git clone https://github.com/CodingButter/GameEngineSeries.git
cd GameEngineSeries
git checkout ep01-ch01-ep03-core-loops-and-state-management
```

Install dependencies with **Bun**:

```bash
bun install
```

Then start the development server:

```bash
bun run dev
```

This will launch the **editor** app and automatically link all workspace packages
(`core`, `engine`, and `renderer`) through the Bun workspace system.

When the editor opens in your browser, you’ll see a moving object with a live FPS counter —
powered by the newly built **Engine class** and **update/render loop**.

---

## 🛣️ Next Episode Preview

In the next episode, we’ll:

1. Build the **foundation for an ECS (Entity Component System)**
2. Connect entities and components to the engine tick
3. Start managing game state and scene logic through data instead of hardcoded updates

The goal: let the engine **simulate**, not just render.

---

## 🧑‍💻 Developer Notes

- Keep the core lightweight and dependency-free.
- Use strong TypeScript types for contracts between packages.
- Avoid micro-optimizations until the full architecture is proven.
- Every change should make the system **clearer**, not just more complex.

---

### 📁 Repo Structure (as of Episode 3)

```
.
├─ apps/
│  └─ editor/             # React editor connected to the engine
├─ packages/
│  ├─ core/               # Central hub (exports engine, renderer, types)
│  ├─ engine/             # Core update & render loop
│  ├─ renderer/           # Canvas2D rendering package
│  └─ config/             # Shared TS configs and workspace settings
└─ tsconfig.json
```

---

**Main Repo:** [CodingButter/GameEngineSeries](https://github.com/CodingButter/GameEngineSeries)
**Branch:** `ep01-ch01-ep03-core-loops-and-state-management`
**Series Playlist:** [YouTube Playlist](https://www.youtube.com/playlist?list=PLX96T4AVTGy66MoIE9zt5HfErYOxFvWlf)
