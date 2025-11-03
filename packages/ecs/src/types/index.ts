import type { World } from "../";

export type Entity = number;

export interface ComponentSchema {
  [key: string]: any;
}

export type ComponentInstance<T extends ComponentSchema = ComponentSchema> = T;

export type ComponentMap = Map<Entity, ComponentInstance>;

export abstract class UpdateSystem {
  abstract update(world: World, dt: number): void;
}

export abstract class RenderSystem {
  abstract render(world: World): void;
}
