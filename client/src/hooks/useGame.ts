import React, { useEffect, useRef, useState } from "react";
import { makeCanvasRenderer, Renderer } from "@ges/core/renderer";
import { Engine, type EngineProps } from "@ges/core/engine";
import { World, RenderSystem, UpdateSystem } from "@ges/core/ecs";

interface Transform {
  x: number;
  y: number;
}

interface Shape {
  width: number;
  height: number;
  color: string;
}

interface Velocity {
  vx: number;
  vy: number;
}

export interface Square {
  transform: Transform;
  velocity: Velocity;
  shape: Shape;
}

export function useGame(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  const worldRef = useRef<World | null>(null);
  const rendererRef = useRef<Renderer | null>(null);
  const engineRef = useRef<Engine | null>(null);
  const [fps, setFPS] = useState<string>("");

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const parent = canvas.parentElement;
    if (!parent) return;

    const renderer = makeCanvasRenderer(canvas);
    renderer.resize(parent.clientWidth, parent.clientHeight);
    rendererRef.current = renderer;

    const world = new World();
    world.registerComponent<Transform>("Transform");
    world.registerComponent<Shape>("Shape");
    world.registerComponent<Velocity>("Velocity");
    worldRef.current = world;

    class SquareRenderSystem extends RenderSystem {
      render(world: World): void {
        renderer.clear("#111");

        for (const [_entity, c] of world.query("Shape", "Transform")) {
          renderer.rect(
            c.Transform.x,
            c.Transform.y,
            c.Shape.width,
            c.Shape.height,
            c.Shape.color
          );
        }
      }
    }

    world.addSystem(new SquareRenderSystem(), { phase: "render" });

    class MovementSystem extends UpdateSystem {
      update(world: World, dt: number) {
        for (const [_entity, c] of world.query("Transform", "Velocity")) {
          c.Transform.x += c.Velocity.vx * dt;
          c.Transform.y += c.Velocity.vy * dt;
        }
      }
    }

    world.addSystem(new MovementSystem(), { phase: "update" });

    class BounceSystem extends UpdateSystem {
      update(world: World, _: number) {
        for (const [_entity, c] of world.query(
          "Transform",
          "Velocity",
          "Shape"
        )) {
          if (c.Transform.x >= renderer.width - c.Shape.width) {
            c.Transform.x = renderer.width - c.Shape.width;
            c.Velocity.vx *= -1;
          }
          if (c.Transform.x <= 0) {
            c.Transform.x = 0;
            c.Velocity.vx *= -1;
          }

          if (c.Transform.y >= renderer.height - c.Shape.height) {
            c.Transform.y = renderer.height - c.Shape.height;
            c.Velocity.vy *= -1;
          }
          if (c.Transform.y <= 0) {
            c.Transform.y = 0;
            c.Velocity.vy *= -1;
          }
        }
      }
    }

    world.addSystem(new BounceSystem(), { phase: "update" });

    const engineProps: EngineProps = {
      update: (dt: number) => {
        world.update(dt);
      },
      render: () => {
        world.render();

        setFPS(engine.getFrameRate().toFixed(2));
      },
      desired_frame_rate: 60,
      desired_tick_rate: 240,
    };

    const engine = new Engine(engineProps);
    engineRef.current = engine;
    engine.start();

    return () => {
      engine.stop?.();
    };
  }, [canvasRef]);

  const addSquare = ({ transform, shape, velocity }: Square) => {
    const world = worldRef.current;
    if (!world) {
      console.warn("Connot add square: world not initialized yet");
      return;
    }

    const entity = world.createEntity();
    world.addComponent(entity, "Transform", transform);
    world.addComponent(entity, "Shape", shape);
    world.addComponent(entity, "Velocity", velocity);
  };

  return { addSquare, fps };
}
