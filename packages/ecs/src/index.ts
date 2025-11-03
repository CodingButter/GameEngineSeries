export * from "./types";
import type { Entity, ComponentSchema, ComponentMap } from "./types";
import { UpdateSystem, RenderSystem } from "./types";

export class World {
  private nextEntityId = 1;
  private components = new Map<string, ComponentMap>();

  private updateSystems: UpdateSystem[] = [];
  private renderSystems: RenderSystem[] = [];

  createEntity(): Entity {
    return this.nextEntityId++;
  }

  registerComponent<T extends ComponentSchema>(name: string): void {
    if (!this.components.has(name)) {
      this.components.set(name, new Map());
    }
  }

  addComponent<T extends ComponentSchema>(
    entity: Entity,
    type: string,
    props: T
  ): void {
    const compMap = this.components.get(type);
    if (!compMap) throw new Error(`Component '${type}' not registered`);
    compMap.set(entity, props);
  }

  getComponent<T extends ComponentSchema>(
    entity: Entity,
    type: string
  ): T | undefined {
    return this.components.get(type)?.get(entity) as T;
  }

  *query(...types: string[]): Generator<[Entity, Record<string, any>]> {
    if (types.length === 0) return;

    const sorted = types.slice().sort((a, b) => {
      return (
        (this.components.get(a)?.size ?? 0) -
        (this.components.get(b)?.size ?? 0)
      );
    });

    const baseType = sorted[0]!;
    const baseMap = this.components.get(baseType);
    if (!baseMap) return;

    for (const [entity, baseData] of baseMap.entries()) {
      let hasAll = true;
      const data: Record<string, any> = { [baseType]: baseData };

      for (let i = 1; i < sorted.length; i++) {
        const t = sorted[i]!;
        const map = this.components.get(t);
        const comp = map?.get(entity);
        if (!comp) {
          hasAll = false;
          break;
        }
        data[t] = comp;
      }

      if (hasAll) {
        yield [entity, data];
      }

      /* Example

      for (const [e, { Transform:transform,Velocity:velcoity}] of world.query("Transform","Velocity")){
        //move stuff
      }

    */
    }
  }

  addSystem(
    system: UpdateSystem | RenderSystem,
    opts?: { phase?: "update" | "render" }
  ) {
    const phase =
      opts?.phase ?? (system instanceof RenderSystem ? "render" : "update");
    if (phase === "render") this.renderSystems.push(system as RenderSystem);
    else this.updateSystems.push(system as UpdateSystem);
  }

  update(dt: number): void {
    for (const system of this.updateSystems) {
      system.update(this, dt);
    }
  }

  render(): void {
    for (const system of this.renderSystems) {
      system.render(this);
    }
  }
}
