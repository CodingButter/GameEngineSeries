export * from "./types"
import type { Renderer, Color } from "./types"

export function makeCanvasRenderer(canvas: HTMLCanvasElement): Renderer {
  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error("2D context not available")

  let _width = canvas.width
  let _height = canvas.height

  const api: Renderer = {
    get width() {
      return _width
    },
    get height() {
      return _height
    },

    resize(width, height) {
      _width = width
      _height = height
      canvas.width = width
      canvas.height = height
    },

    clear(color: Color) {
      if (!color) {
        ctx.clearRect(0, 0, _width, _height)
      } else {
        ctx.fillStyle = color
        ctx.fillRect(0, 0, _width, _height)
      }
    },

    rect(x, y, w, h, color) {
      ctx.fillStyle = color
      ctx.fillRect(x, y, w, h)
    },

    getNative() {
      return ctx
    },
  }

  return api
}
