import React, { SetStateAction, useEffect, useRef, useState } from "react";
import { makeCanvasRenderer, Renderer } from "@ges/core/renderer";
import { Engine, type EngineProps } from "@ges/core/engine";
import { World, RenderSystem, UpdateSystem, type Entity } from "@ges/core/ecs";
import { type Transform, type Velocity, type Shape, Base } from "@/types";

export interface Square {
  transform: Transform;
  velocity: Velocity;
  shape: Shape;
}

export interface GameObject {
  addSquare: (square: Square) => void;
  rendererRef: React.RefObject<Renderer | null>;
  worldRef: React.RefObject<World | null>;
  engineRef: React.RefObject<Engine | null>;
  setSelectedEntity: React.Dispatch<SetStateAction<Entity | undefined>>;
  selectedEntity: Entity | undefined;
  entities: Entity[];
}

export function useGame(
  canvasRef: React.RefObject<HTMLCanvasElement | null>
): GameObject {
  const worldRef = useRef<World | null>(null);
  const rendererRef = useRef<Renderer | null>(null);
  const engineRef = useRef<Engine | null>(null);

  //Shared States
  const [entities, setEntities] = useState<Entity[]>([]);
  const [selectedEntity, setSelectedEntity] = useState<Entity>();

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const parent = canvas.parentElement;
    if (!parent) return;

    const renderer = makeCanvasRenderer(canvas);
    renderer.resize(parent.clientWidth, parent.clientHeight);
    rendererRef.current = renderer;

    const world = new World();
    world.registerComponent<Base>("Base");
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
      },
      desired_frame_rate: 60,
      desired_tick_rate: 240,
    };

    const engine = new Engine(engineProps);
    engineRef.current = engine;
    engine.start();

    // add Listeners
    const unsubscribeEntityCreated = world.on(
      "entityCreated",
      ({ entityId }: { entityId: Entity }) => {
        setEntities((prev) => [...prev, entityId]);
      }
    );

    // Listen for world reset
    const unsubscribeWorldReset = world.on(
      "worldReset",
      ({ entities: newEntities }: { entities: Entity[] }) => {
        setEntities(newEntities);
      }
    );

    // Listen for world cleared
    const unsubscribeWorldCleared = world.on("worldCleared", () => {
      setEntities([]);
      setSelectedEntity(undefined);
    });

    return () => {
      engine.stop?.();
      unsubscribeEntityCreated();
      unsubscribeWorldReset();
      unsubscribeWorldCleared();
    };
  }, [canvasRef]);

  const addSquare = ({ transform, shape, velocity }: Square) => {
    const world = worldRef.current;
    if (!world) {
      console.warn("Connot add square: world not initialized yet");
      return;
    }

    const entity = world.createEntity();
    world.addComponent(entity, "Base", {
      name: `Entity ${entity}`,
      id: entity,
    });
    world.addComponent(entity, "Transform", transform);
    world.addComponent(entity, "Shape", shape);
    world.addComponent(entity, "Velocity", velocity);
  };

  return {
    addSquare,
    rendererRef,
    worldRef,
    engineRef,
    entities,
    selectedEntity,
    setSelectedEntity,
  };
}
