# 🧩 Built From Scratch: 2D Game Engine (Tutorial Series)

### 🎬 Overview

Welcome to the **Built From Scratch: 2D Game Engine** series — a hands-on YouTube course where we build a modular, browser-based 2D game engine step by step.

Each episode focuses on understanding **why** things are built the way they are.  
No rushed coding, no copy-paste boilerplate — just practical structure, clean logic, and steady progress.

We’re using the **BHVR stack** — **Bun · Hono · Vite · React** — as our foundation.  
BHVR isn’t the engine; it’s the **development conduit** that keeps everything fast, modular, and connected.

---

## 🧭 Series Roadmap

| Episode | Title | Branch | YouTube |
|:--:|:--|:--|:--|
| **1** | Working with Workspaces | [ep01-working-with-workspaces](https://github.com/CodingButter/GameEngineSeries/tree/ep01-working-with-workspaces) | [Watch on YouTube](https://youtu.be/xERoxdRW2lE) |
| **2** | Better Foundations & A Simple Renderer | [ep02-better-foundations-and-simple-renderer](https://github.com/CodingButter/GameEngineSeries/tree/ep02-better-foundations-and-simple-renderer) | [Watch on YouTube](https://youtu.be/oHxFAvvBBtY) |
| **3** | Core & Engine Package | [ep03-core-and-engine-package](https://github.com/CodingButter/GameEngineSeries/tree/ep03-core-and-engine-package) | [Watch on YouTube](https://youtu.be/cFh5zKOjXSY) |
| **4** | Entity Component System | [ep04-entity-component-system](https://github.com/CodingButter/GameEngineSeries/tree/ep04-entity-component-system) | [Watch on YouTube](https://youtu.be/n4ewWlgmNd8) |
| **5** | Editor UI Foundation | [ep05-ui-foundation](https://github.com/CodingButter/GameEngineSeries/tree/ep05-ui-foundation) | [Watch on YouTube](https://www.youtube.com/watch?v=BqMyIVvVH6Y) |
| **6** | World State Management & Events | [ep06-world-state-management-events](https://github.com/CodingButter/GameEngineSeries/tree/ep06-world-state-management-events) | [Watch on YouTube](https://youtu.be/kw3Llwy8PoY) |
| **7** | Interactive Hierarchy & Selection | [ep07-interactive-hierarchy-selection](https://github.com/CodingButter/GameEngineSeries/tree/ep07-interactive-hierarchy-selection) | [Watch on YouTube](https://youtu.be/naoVTzhT_0E) |

**Channel:** [CodingButter on YouTube](https://youtube.com/@codingbutter)  
**Full Playlist:** [Built From Scratch: 2D Game Engine](https://www.youtube.com/playlist?list=PLX96T4AVTGy66MoIE9zt5HfErYOxFvWlf)

---

## ⚙️ Current Status

**Main** is a landing branch and may differ from per-episode branches.
As of Episode 7, the series introduces **Interactive Hierarchy & Selection** with live entity lists and selection state, built on top of the event-driven **Entity Component System (ECS)** architecture:

```

editor → core → engine → renderer
              ↓
             ecs → world → entities/components/systems

````

- The **renderer** draws frames to the canvas.
- The **engine** manages timing, delta updates, and control flow.
- The **ecs** provides the World class for managing entities, components, and systems.
- The **core** provides a single import surface for all engine modules.

---

## 🧰 Tech Stack (BHVR)

| Tool | Role |
|------|------|
| **Bun** | Runtime and package manager — ultra-fast workspace management |
| **Hono** | Lightweight HTTP framework for internal dev APIs |
| **Vite** | Modern build tool with instant hot reload |
| **React** | Editor UI and debug overlays |
| **TypeScript** | Strong typing and interface contracts across packages |

---

## 🛠️ Quick Start

Clone the repo and run the dev environment:

```bash
git clone https://github.com/CodingButter/GameEngineSeries.git
cd GameEngineSeries
bun install
bun run dev
````

This starts the editor and links workspace packages (client/server/shared/packages) using the current main setup.
Top-level directories you’ll see on **main**: `client/`, `server/`, `shared/`, and `packages/` (renderer lives here; other modules land on episode branches). ([GitHub][1])

---

## 🧩 Project Structure (main)

```
.
├─ client/                 # React-based editor/frontend
├─ server/                 # Hono server for tooling/APIs
├─ shared/                 # Shared types & utilities for client/server
├─ packages/
│  ├─ renderer/            # Canvas 2D renderer (episode 2)
│  ├─ engine/              # Game loop & timing system (episode 3)
│  ├─ ecs/                 # Entity Component System (episode 4)
│  └─ core/                # Unified export surface (episode 3+)
├─ package.json            # Workspace + scripts
├─ bun.lock
├─ tsconfig.json
└─ turbo.json
```

This structure is visible at the repo root on main. ([GitHub][1])

---

## 🧠 Series Philosophy

> “Focus on the structure. The features come later.”

We’re not optimizing for polish yet. We’re building **a clear foundation** — easy to read, reason about, and extend.

Each episode answers one question:

> *What part of the code does what?*

That’s how we’ll grow this engine into something powerful, understandable, and fun to build.

---

## 🛣️ Upcoming Episodes

* **Episode 8:** Inspector Panel — property editing and real-time component updates
* **Episode 9:** Input System — keyboard and mouse handling for game interaction
* **Episode 10:** Canvas Selection & Manipulation — visual entity selection and drag-to-move
* **Episode 11:** Asset Management — sprite loading, texture atlases, and resource optimization

---

## 💬 Feedback & Community

I’ve been coding for over 20 years, and I’m still learning every day.
This project is about sharing the process — the mistakes, the rewrites, and the small wins.

If you’re following along, **like, share, and subscribe** on YouTube,
or open an issue on GitHub if you spot something that can be improved.

**Channel:** [CodingButter](https://youtube.com/@codingbutter)
**Playlist:** [Built From Scratch: 2D Game Engine](https://www.youtube.com/playlist?list=PLX96T4AVTGy66MoIE9zt5HfErYOxFvWlf)

---

### 📄 License

This project and its code are provided for **educational and open-source learning purposes**.
You’re welcome to fork, remix, and expand it — just keep it open and share what you learn.

---

**Main Repo:** [github.com/CodingButter/GameEngineSeries](https://github.com/CodingButter/GameEngineSeries)
