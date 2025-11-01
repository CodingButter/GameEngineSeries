# Built From Scratch: 2D Game Engine — Episode 2 (Foundations & Renderer)

This branch tracks Episode 2 of the series and moves the project onto a BHVR-style monorepo (Bun, Hono, Vite, React). We also build the first engine module: a minimal Canvas 2D renderer, wire it to the React client, and prove hot reload across the workspace.

🎥 Watch: https://youtu.be/oHxFAvvBBtY

---

## What’s in this branch

- **BHVR layout** with separate top-level apps and shared types:
  - `client/` — React app (the editor/frontend)
  - `server/` — Hono HTTP server (for later tooling/APIs)
  - `shared/` — shared types across client/server
  - `packages/renderer/` — Canvas 2D renderer module

(Structure verified on this branch’s main view.)  
*Reference: repo shows `client`, `server`, `shared`, and `packages/renderer` at root, with root files `package.json`, `bun.lock`, `tsconfig.json`, and `turbo.json`.* :contentReference[oaicite:1]{index=1}

---

## Episode goals

- Transition from hand-wired setup to **BHVR workspace**.
- Create **`@ges/renderer`** with the bare essentials:
  - `clear(color)` to wipe the frame
  - `drawRect(x, y, w, h, color)` to render a simple rectangle
- Plug the renderer into the **React client** and confirm live reload.

---

## Quick start

```bash
git clone https://github.com/CodingButter/GameEngineSeries.git
cd GameEngineSeries
git checkout ep01-ch01-ep-02-foundations-renderer
bun install
bun run dev
````

This launches the client and links workspace packages so edits in `packages/renderer` live-reload in the browser.

---

## Repo structure (Episode 2)

```
.
├─ client/                 # React frontend (editor)
├─ server/                 # Hono backend (tooling/APIs; minimal in Ep2)
├─ shared/                 # Shared TypeScript types
├─ packages/
│  └─ renderer/            # Canvas 2D renderer (clear, drawRect)
├─ package.json            # Workspaces + scripts
├─ bun.lock
├─ tsconfig.json
└─ turbo.json
```

Top-level directories and files are visible in the repo root. ([GitHub][1])

---

## Renderer overview

A tiny, testable module you can import from the client:

```ts
export interface Renderer {
  clear(color?: string): void
  drawRect(x: number, y: number, w: number, h: number, color?: string): void
}
```

Implementation uses the Canvas 2D API and keeps the surface unopinionated so we can swap or extend later.

---

## Why this matters

* The **renderer** proves the BHVR setup is working end-to-end.
* The **workspace** separation (client/server/shared/packages) keeps boundaries clean as we add engine pieces.
* Hot reload + modular imports = faster iteration with fewer rebuilds.

---

## What’s next (Episode 3)

* Add **core** and **engine** packages.
* Implement a real **update + render loop** with delta time.
* Drive the renderer through the engine and surface FPS in the UI.

---

## Links

* Main repo: [https://github.com/CodingButter/GameEngineSeries](https://github.com/CodingButter/GameEngineSeries)
* Channel: [https://youtube.com/@codingbutter](https://youtube.com/@codingbutter)
* Series playlist: [https://www.youtube.com/playlist?list=PLX96T4AVTGy66MoIE9zt5HfErYOxFvWlf](https://www.youtube.com/playlist?list=PLX96T4AVTGy66MoIE9zt5HfErYOxFvWlf)
