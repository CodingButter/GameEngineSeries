# Episode 1: Working with Workspaces

This branch contains the code from **Episode 1** of the **Built From Scratch: 2D Game Engine** series.

---

## 📺 Watch This Episode

**YouTube:** [Watch Episode 1](https://youtu.be/xERoxdRW2lE)
**Full Playlist:** [Built From Scratch: 2D Game Engine](https://www.youtube.com/playlist?list=PLX96T4AVTGy66MoIE9zt5HfErYOxFvWlf)
**Channel:** [CodingButter](https://youtube.com/@codingbutter)

---

## 🎯 What's Covered in This Episode

Episode 1 introduces the foundation of our project:
- Setting up a Bun workspace with multiple packages
- Configuring the monorepo structure
- Understanding workspace dependencies
- Basic project layout and scripts
- Development workflow setup

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
git checkout ep01-working-with-workspaces

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
├─ packages/               # Core engine packages
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
