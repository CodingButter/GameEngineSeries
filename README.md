# Episode 5: Component Types & Systems

This branch contains the code from **Episode 5** of the **Built From Scratch: 2D Game Engine** series.

---

## 📺 Watch This Episode

**YouTube:** Coming Soon
**Full Playlist:** [Built From Scratch: 2D Game Engine](https://www.youtube.com/playlist?list=PLX96T4AVTGy66MoIE9zt5HfErYOxFvWlf)
**Channel:** [CodingButter](https://youtube.com/@codingbutter)

---

## 🎯 What's Covered in This Episode

Episode 5 expands the ECS system with practical components and an editor UI:
- Building a modular **Editor UI Layout** with resizable panels
- Creating ToolBar, Hierarchy, Controls, Assets, and Inspector panels
- Integrating **react-resizable-panels** for flexible editor interface
- Implementing **GameProvider** for centralized game state management
- Adding utility functions for editor operations
- Structuring the editor for scalability and future features

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
git checkout ep05-component-types-and-systems

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
│  ├─ src/
│  │  ├─ components/
│  │  │  ├─ editor/       # Editor panels (NEW!)
│  │  │  ├─ icons/        # Icon components (NEW!)
│  │  │  └─ ui/           # UI components (NEW!)
│  │  └─ providers/       # Context providers (NEW!)
├─ server/                 # Hono server for tooling/APIs
├─ shared/                 # Shared types & utilities
├─ packages/
│  ├─ renderer/            # Canvas 2D renderer
│  ├─ engine/              # Game loop & timing system
│  ├─ ecs/                 # Entity Component System
│  └─ core/                # Unified export surface
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
