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
| **1** | Working with Workspaces | [ep01-ch01-ep01-repo-layout-and-scripts](https://github.com/CodingButter/GameEngineSeries/tree/ep01-ch01-ep01-repo-layout-and-scripts) | [Watch on YouTube](https://youtu.be/xERoxdRW2lE) |
| **2** | Better Foundations & A Simple Renderer | [ep01-ch01-ep-02-foundations-renderer](https://github.com/CodingButter/GameEngineSeries/tree/ep01-ch01-ep-02-foundations-renderer) | [Watch on YouTube](https://youtu.be/oHxFAvvBBtY) |
| **3** | Core & Engine Package | [ep01-ch01-ep03-core-loops-and-state-management](https://github.com/CodingButter/GameEngineSeries/tree/ep01-ch01-ep03-core-loops-and-state-management) | [Watch on YouTube](https://youtu.be/cFh5zKOjXSY) |

**Channel:** [CodingButter on YouTube](https://youtube.com/@codingbutter)  
**Full Playlist:** [Built From Scratch: 2D Game Engine](https://www.youtube.com/playlist?list=PLX96T4AVTGy66MoIE9zt5HfErYOxFvWlf)

---

## ⚙️ Current Status

**Main** is a landing branch and may differ from per-episode branches.  
As of Episode 3, the series introduces **core** and **engine** packages (see the Ep3 branch) that drive the editor through a clean pipeline:

```

editor → core → engine → renderer

````

- The **renderer** draws frames to the canvas.  
- The **engine** manages timing, delta updates, and control flow.  
- The **core** provides a single import surface for engine modules.

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
│  └─ renderer/            # Canvas 2D renderer (episode 2)
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

* **Episode 4:** ECS Foundations — define the base Entity/Component model
* **Episode 5:** ECS Systems — connect behavior to the tick
* **Episode 6:** Editor UI Setup — panels, layout, and debugging
* **Episode 7:** Editor Interaction — input, selection, and live updates

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
