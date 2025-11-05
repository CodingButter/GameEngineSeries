# Episode 3: Core & Engine Package

This branch contains the code from **Episode 3** of the **Built From Scratch: 2D Game Engine** series.

---

## 📺 Watch This Episode

**YouTube:** [Watch Episode 3](https://youtu.be/cFh5zKOjXSY)
**Full Playlist:** [Built From Scratch: 2D Game Engine](https://www.youtube.com/playlist?list=PLX96T4AVTGy66MoIE9zt5HfErYOxFvWlf)
**Channel:** [CodingButter](https://youtube.com/@codingbutter)

---

## 🎯 What's Covered in This Episode

Episode 3 adds the engine heartbeat with core loops and timing:
- Creating the **@ges/core** package as a unified export surface
- Building the **@ges/engine** package with update and render loops
- Implementing delta time and fixed tick rate
- Adding frame-rate smoothing and FPS display
- Connecting the engine to drive the renderer
- Understanding the dependency chain: `editor → core → engine → renderer`

---

## 🚀 Quick Start

### Prerequisites
- [Bun](https://bun.sh/) installed on your system

### Setup & Run

```bash
# Clone the repository
git clone https://github.com/CodingButter/GameEngineSeries.git
cd GameEngineSeries

# Checkout this episode's branch
git checkout ep03-core-and-engine-package

# Install dependencies
bun install

# Run development server
bun run dev

# Build for production
bun run build
```

---

## 📂 Project Structure

```
.
├─ client/                 # React-based editor/frontend
├─ server/                 # Hono server for tooling/APIs
├─ shared/                 # Shared types & utilities
├─ packages/
│  ├─ renderer/            # Canvas 2D renderer
│  ├─ engine/              # Game loop & timing system (NEW!)
│  └─ core/                # Unified export surface (NEW!)
├─ package.json            # Workspace configuration
├─ bun.lock
├─ tsconfig.json
└─ turbo.json
```

---

## 🔗 Series Navigation

| Episode | Title | Branch |
|:--:|:--|:--|
| **1** | Working with Workspaces | [ep01-working-with-workspaces](https://github.com/CodingButter/GameEngineSeries/tree/ep01-working-with-workspaces) |
| **2** | Better Foundations & A Simple Renderer | [ep02-better-foundations-and-simple-renderer](https://github.com/CodingButter/GameEngineSeries/tree/ep02-better-foundations-and-simple-renderer) |
| **3** | Core & Engine Package | [ep03-core-and-engine-package](https://github.com/CodingButter/GameEngineSeries/tree/ep03-core-and-engine-package) |
| **4** | Entity Component System | [ep04-entity-component-system](https://github.com/CodingButter/GameEngineSeries/tree/ep04-entity-component-system) |
| **5** | Component Types & Systems | [ep05-component-types-and-systems](https://github.com/CodingButter/GameEngineSeries/tree/ep05-component-types-and-systems) |

**Main Repository:** [github.com/CodingButter/GameEngineSeries](https://github.com/CodingButter/GameEngineSeries)

---

## 💬 Feedback & Community

If you're following along, **like, share, and subscribe** on YouTube, or open an issue on GitHub if you spot something that can be improved.

---

**Built with the BHVR stack:** Bun · Hono · Vite · React
