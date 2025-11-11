import type { Entity } from "@ges/core/ecs";
export interface Transform {
  x: number;
  y: number;
}

export interface Shape {
  width: number;
  height: number;
  color: string;
}

export interface Velocity {
  vx: number;
  vy: number;
}

export interface Base {
  name: string;
  id: Entity;
}
