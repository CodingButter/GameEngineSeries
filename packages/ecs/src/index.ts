export * from "./types";
import type {
  Entity,
  ComponentSchema,
  ComponentMap,
  WorldState,
  EntityState,
} from "./types";
import { UpdateSystem, RenderSystem } from "./types";

export class World {
  private nextEntityId = 1;
  private components = new Map<string, ComponentMap>();

  private updateSystems: UpdateSystem[] = [];
  private renderSystems: RenderSystem[] = [];

  private listeners = new Map<string, Set<Function>>();

  public on(event: string, callback: Function): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(callback);

    return () => {
      this.listeners.get(event)?.delete(callback);
    };
  }

  private emit(event: string, data?: any): void {
    this.listeners.get(event)?.forEach((callback) => callback(data));
  }

  createEntity(): Entity {
    const id = this.nextEntityId++;

    this.emit("entityCreated", { entityId: id });
    return id;
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

    this.emit("componentAdded", {
      entityId: entity,
      componentType: type,
      data: props,
    });
  }

  getComponent<T extends ComponentSchema>(
    entity: Entity,
    type: string
  ): T | undefined {
    return this.components.get(type)?.get(entity) as T;
  }

  public getEntities(): Entity[] {
    const entities = new Set<Entity>();

    this.components.forEach((compMap) => {
      compMap.forEach((_, entity) => entities.add(entity));
    });
    return Array.from(entities).sort((a, b) => a - b);
  }

  public getComponents(entity: Entity): Record<string, ComponentSchema> {
    const result: Record<string, ComponentSchema> = {};
    this.components.forEach((compMap, componentType) => {
      const comp = compMap.get(entity);
      if (comp) {
        result[componentType] = comp;
      }
    });
    return result;
  }

  public getState(): WorldState {
    const entities: EntityState[] = this.getEntities().map((id) => ({
      id,
      components: this.getComponents(id),
    }));

    return { entities };
  }

  public setState(state: WorldState): void {
    this.components.forEach((map) => map.clear());
    this.nextEntityId = 1;

    state.entities.forEach(({ id, components }) => {
      if (id >= this.nextEntityId) {
        this.nextEntityId = id + 1;
      }

      Object.entries(components).forEach(([type, data]) => {
        const compMap = this.components.get(type);

        if (compMap) {
          compMap.set(id, data);
        }
      });

      this.emit("worldReset", { entities: this.getEntities() });
    });
  }

  public clear(): void {
    const entityIds = this.getEntities();
    this.components.forEach((map) => map.clear());
    this.nextEntityId = 1;

    this.emit("worldCleared", { removedEntities: entityIds });
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
