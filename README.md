# 🧩 Built from Scratch: 2D Game Engine (Tutorial Series)

### 🎬 Overview

This repository follows along with the **YouTube series _Built from Scratch: 2D Game Engine_**, where we’re creating a simple but complete 2D game engine **from the ground up**.

Each episode is under **30 minutes**, focused on clarity and understanding — not speed, not polish, not “production-ready.”
Our goal is to **build the foundation**, wire everything correctly, and ensure every line of code has a clear purpose before we add complexity.

We’re using **BHVR** — short for **Bun · Hono · Vite · React** — not as the engine itself, but as our **development conduit**.
Think of BHVR as the **cable system** that connects all the moving parts. It’s what lets our ideas communicate, our systems evolve, and our future features plug in cleanly.

---

## ⚙️ Current Episode — Renderer Foundations

In the most recent episode, we:

- **Migrated** from a manually wired workspace to a **BHVR-powered monorepo**.
- **Structured** our packages and folders to prepare for future engine modules.
- **Built** the first basic renderer — just enough to draw a square on screen.

This episode was about connection and confirmation: proving that our BHVR setup can power the engine’s first visual output.

---

## 🧭 Roadmap (Episodes 1–7)

| Episode | Topic                        | Duration | Purpose                                                     |
| :-----: | :--------------------------- | :------: | :---------------------------------------------------------- |
|  **1**  | Manual Setup                 | <30 min  | Build everything by hand to understand the wiring.          |
|  **2**  | BHVR Integration _(current)_ | <30 min  | Transition to BHVR; create our first working renderer.      |
|  **3**  | Core Tick & Scene Management | <30 min  | Add the heartbeat — update + render loop.                   |
|  **4**  | ECS Foundations              | <30 min  | Build the entity and component architecture.                |
|  **5**  | ECS Systems                  | <30 min  | Connect logic and behavior to the engine tick.              |
|  **6**  | Editor UI Setup              | <30 min  | Build the editor interface using React.                     |
|  **7**  | Editor Interaction           | <30 min  | Add selection, input, and live connections between systems. |

By the end of Episode 7, everything will be wired — the renderer, tick, ECS, and editor — ready to power all future systems we’ll build.

---

## 🧠 Series Philosophy

> “Focus on the structure.
> The features come later.”

We’re not optimizing yet.
We’re not polishing yet.
We’re building **a clean, understandable conduit** for all future features — physics, input, sound, networking, you name it.

Every episode answers a single question:

> _What part of the code does what?_

That’s how we’ll grow an engine that’s easy to reason about, expand, and improve — one wire at a time.

---

## 🧰 BHVR Stack

| Tool      | Role                                                        |
| --------- | ----------------------------------------------------------- |
| **Bun**   | Runtime and package manager — our lightning-fast backbone.  |
| **Hono**  | Lightweight dev server for API and tool wiring.             |
| **Vite**  | Handles hot reload, bundling, and efficient feedback loops. |
| **React** | Powers our editor UI and debug overlays.                    |

BHVR keeps our workflow smooth and connected — the cables beneath the surface that make iteration fast and clean.

---

## 🛣️ Next Episode Preview

In the upcoming episode:

1. We’ll build the **core tick and render loop** — the heartbeat of the engine.
2. Introduce **simple scene management**, allowing us to load and swap what’s on screen.
3. Begin routing the renderer through the tick for consistent timing and updates.

By the end, the engine won’t just display a square — it’ll **run** one.

---

## 🧑‍💻 Developer Notes

- Keep the wiring clear and logical.
- Avoid optimization until the structure is complete.
- Always ask, _“What part of this connects to what?”_
- BHVR is our conduit — not the engine, but the system that powers our growth.
