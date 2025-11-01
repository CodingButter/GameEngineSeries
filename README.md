# 🧩 Built From Scratch: 2D Game Engine (Tutorial Series)

### 🎬 Overview

Welcome to the **Built From Scratch: 2D Game Engine** series — a hands-on YouTube course where we build a modular, browser-based 2D game engine step by step.

Each episode focuses on understanding **why** things are built the way they are.  
No rushed coding, no copy-paste boilerplate — just practical structure, clean logic, and gradual complexity.  

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

We now have a working **core** and **engine** package driving the **React editor** through a clean modular structure:

```

editor → core → engine → renderer

````

- The **renderer** draws frames to the canvas.  
- The **engine** handles timing, delta updates, and control flow.  
- The **core** ties everything together into a unified importable package.

The project has officially moved from a static renderer to a functioning engine loop with live FPS and delta-based updates.

---

## 🧰 Tech Stack (BHVR)

| Tool | Role |
|------|------|
| **Bun** | Runtime and package manager — ultra-fast workspace management |
| **Hono** | Lightweight HTTP framework for internal dev APIs |
| **Vite** | Modern build tool with instant hot reload |
| **React** | Used for the editor UI and debug overlays |
| **TypeScript** | Strong typing and interface contracts across packages |

---

## 🛠️ Quick Start

Clone the repo and run the latest version of the engine/editor:

```bash
git clone https://github.com/CodingButter/GameEngineSeries.git
cd GameEngineSeries
bun install
bun run dev
````

This launches the **editor app**, automatically linking all workspace packages.
You’ll see the current demo scene running inside the browser, powered by the latest version of the engine.

---

## 🧩 Project Structure

```
.
├─ apps/
│  └─ editor/             # React-based game editor
├─ packages/
│  ├─ core/               # Central export hub (engine, renderer, types)
│  ├─ engine/             # Game loop (update + render)
│  ├─ renderer/           # Canvas2D renderer
│  ├─ ecs/                # Entity Component System (coming soon)
│  └─ config/             # Shared configs (tsconfig, lint, etc.)
└─ tsconfig.json
```

---

## 🧠 Series Philosophy

> “Focus on the structure. The features come later.”

We’re not optimizing or chasing polish yet.
We’re building **a clear foundation** — easy to read, reason about, and expand later.

Each episode answers one question:

> *What part of the code does what?*

That’s how we’ll grow this engine into something powerful, understandable, and fun to build.

---

## 🛣️ Upcoming Episodes

* **Episode 4:** ECS Foundations

  * Build the Entity Component System and define the base architecture.
* **Episode 5:** ECS Systems

  * Connect logic and data to the core tick.
* **Episode 6:** Editor UI Setup

  * Add real interface panels, layout, and debugging.
* **Episode 7:** Editor Interaction

  * Add input, selection, and live entity updates.

---

## 💬 Feedback & Community

I’ve been coding for over 20 years, but I’m still learning every day.
This project is about sharing the process — the mistakes, the rewrites, and the small wins along the way.

If you’re following along, **like, share, and subscribe** on YouTube to support the series,
or open an issue on GitHub if you spot something that can be improved.

**Channel:** [CodingButter](https://youtube.com/@codingbutter)
**Playlist:** [Built From Scratch: 2D Game Engine](https://www.youtube.com/playlist?list=PLX96T4AVTGy66MoIE9zt5HfErYOxFvWlf)

---

### 📄 License

This project and its code are provided for **educational and open-source learning purposes**.
You’re welcome to fork, remix, and expand it — just keep it open and share what you learn.

---

**Main Repo:** [github.com/CodingButter/GameEngineSeries](https://github.com/CodingButter/GameEngineSeries)
