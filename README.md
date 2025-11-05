# Episode 4: Entity Component System

This branch contains the code from **Episode 4** of the **Built From Scratch: 2D Game Engine** series.

---

## 📺 Watch This Episode

**YouTube:** [Watch Episode 4](https://youtu.be/n4ewWlgmNd8)
**Full Playlist:** [Built From Scratch: 2D Game Engine](https://www.youtube.com/playlist?list=PLX96T4AVTGy66MoIE9zt5HfErYOxFvWlf)
**Channel:** [CodingButter](https://youtube.com/@codingbutter)

---

## 🎯 What's Covered in This Episode

Episode 4 introduces the Entity Component System (ECS) architecture:
- Creating the **@ges/ecs** package
- Implementing the **World** class for managing entities
- Building component storage and management systems
- Creating systems that operate on entities with specific components
- Integrating ECS with the engine loop
- Understanding data-driven game object architecture
- Setting up Transform, Velocity, and Shape components with Movement and Render systems

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
git checkout ep04-entity-component-system

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
│  ├─ engine/              # Game loop & timing system
│  ├─ ecs/                 # Entity Component System (NEW!)
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
