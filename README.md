Here’s a **project-accurate README** based on what you actually did while recording the workspace setup.

# Built From Scratch: 2D Game Engine

**Episode 1 — Working with Workspaces (Bun + TypeScript + React + Tailwind)**

> We’re building a simple, shippable 2D engine and editor from scratch. Not perfect—just practical. Small packages, clear boundaries, fast feedback.

---

## What we set up in this episode

### 1) Bun workspace (monorepo)

- Initialized the repo with `bun init`.
- Edited the root `package.json`:

  - Set a project name (e.g., `@gs/workspaces-root`).
  - Declared **workspaces**:

    ```json
    {
      "name": "@ges/workspaces-root",
      "private": true,
      "workspaces": ["packages/*", "apps/*"]
    }
    ```

- Created folders:

  ```
  apps/
  packages/
  ```

### 2) Shared TypeScript config package

- Created **`packages/config`** (`bun init` as a library).
- Added a TS config that other packages **extend**, including DOM libs:

  ```jsonc
  // packages/config/tsconfig.json
  {
    "compilerOptions": {
      "target": "ES2020",
      "module": "ESNext",
      "moduleResolution": "Bundler",
      "lib": ["ES2020", "DOM"],
      "strict": true,
      "jsx": "react-jsx"
    }
  }
  ```

- Pointed **root** and **packages** to extend it:

  ```jsonc
  // tsconfig.json at repo root
  { "extends": "packages/config/tsconfig.json" }
  ```

  ```jsonc
  // each package tsconfig.json
  { "extends": "../../config/tsconfig.json" }
  ```

### 3) Engine modules (packages)

- Created **`packages/ecs`** via `bun init` (library).

  - Scoped name (e.g., `@ges/ecs`), entry under `src/index.ts`.
  - Set `"main": "src/index.ts"` so the editor can import the TypeScript directly during dev.
  - Stubbed an exported default function:

    ```ts
    // packages/ecs/src/index.ts
    export default function hello() {
      return "Hello from ECS"
    }
    ```

- Duplicated the pattern to bootstrap more packages:

  ```
  packages/
    ecs/       // default export: "Hello from ECS"
    engine/    // default export: "Hello from engine"
    utils/     // default export: "Hello from utils"
    common/    // default export: "Hello from common" (shared assets/things)
    config/    // shared tsconfig (and future lint/prettier if desired)
  ```

  > Each has `tsconfig.json` extending `packages/config/tsconfig.json`.

### 4) Editor application (app)

- Created **`apps/editor`** via `bun init` as a **React** project
  (Tailwind + shadcn planned; wiring comes next episode).
- In `apps/editor/package.json`, added workspace dependencies on the internal packages using the **workspace protocol**:

  ```json
  {
    "name": "@ges/editor",
    "dependencies": {
      "@gs/engine": "workspace:*",
      "@gs/ecs": "workspace:*",
      "@gs/utils": "workspace:*",
      "@gs/common": "workspace:*"
    }
  }
  ```

- Installed everything from the repo root:

  ```bash
  bun install
  ```

### 5) Proof of HMR across packages

- Imported the ECS function in the editor and rendered it:

  ```tsx
  // apps/editor/src/App.tsx
  import helloEcs from "@ges/ecs"

  export default function App() {
    return <div>{helloEcs()}</div>
  }
  ```

- Ran the dev server (e.g., `bun run dev`) and opened **[http://localhost:3000](http://localhost:3000)**.
  Saw **“Hello from ECS”**.
- Edited `packages/ecs/src/index.ts` to:

  ```ts
  export default function () {
    return "Hello from ECS Module"
  }
  ```

- **Result:** The browser **updated live**—no rebuild dance. That’s workspaces + HMR doing work.

---

## Why workspaces here?

- **Modularity:** Engine, ECS, editor, utils, common—small parts, clear boundaries.
- **Speed:** Edit a package, the editor hot-reloads.
- **Clarity:** Each package owns its `package.json` and TS config (extends shared base).
- **Future-friendly:** Any piece (ECS, loop, renderer) can be versioned/published later.
- **Single history:** One repo/PR for atomic engine+editor changes.

---

## Repo layout (current)

```
.
├─ apps/
│  └─ editor/        # React app (TS); consumes internal packages
├─ packages/
│  ├─ config/        # shared tsconfig (and future lint/prettier)
│  ├─ ecs/           # ECS starter (default export string for now)
│  ├─ engine/        # engine starter
│  ├─ utils/         # shared utilities
│  └─ common/        # shared/common assets/things
└─ tsconfig.json     # extends packages/config/tsconfig.json
```

---

## Getting started

**Prereq:** Install Bun → [https://bun.sh](https://bun.sh)

```bash
# clone & enter
git clone <your-repo-url>
cd <repo-folder>

# install all deps (root + workspaces)
bun install

# run the editor (dev server with HMR)
bun run dev
# or, from inside apps/editor: bun run dev
```

Open the printed URL (typically **[http://localhost:3000](http://localhost:3000)**).
You should see the string rendered from `@gs/ecs`.

---

## What’s next (Episode 2)

- Clean up the editor scaffold (remove unused bits).
- Add a `<canvas>`.
- Create a `@gs/renderer` package.
- **Draw our first rectangle.** 🎉

---

## Feedback / Contributions

This is intentionally iterative. If you see a better way:

- Open an issue or PR with suggestions.
- New folks: there’s no single “right way”—just a way that works and can improve.

---

## Watch the series

- **YouTube:** Check out my channel → **CodingButter**
  If this helps, please **like, share, and subscribe**—it keeps the project moving.

---

### License

TBD while the core pieces settle (we’ll choose a permissive license once stable).
