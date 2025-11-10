import type { World } from "../";

export type Entity = number;

export interface ComponentSchema {
  [key: string]: any;
}

export type ComponentMap = Map<Entity, ComponentSchema>;

export abstract class UpdateSystem {
  abstract update(world: World, dt: number): void;
}

export abstract class RenderSystem {
  abstract render(world: World): void;
}

export interface EntityState {
  id: Entity;
  components: Record<string, ComponentSchema>;
}

export interface WorldState {
  entities: EntityState[];
}
