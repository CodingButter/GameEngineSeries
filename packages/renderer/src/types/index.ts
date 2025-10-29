export type Color = string

export interface Renderer {
  readonly width: number
  readonly height: number
  resize(width: number, height: number): void
  clear(color?: Color): void
  rect(x: number, y: number, w: number, h: number, color: Color): void
  getNative(): CanvasRenderingContext2D
}
