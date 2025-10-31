export * from "./types"
import { reduceEachTrailingCommentRange } from "typescript"
import type { updateFN, renderFN, EngineProps } from "./types"

export class Engine {
  private eps: number = 0.00001
  private stopped = true
  private update_last_time: number = performance.now()
  private render_last_time: number = performance.now()
  private update_dt: number = 0
  private render_dt: number = 0

  private frame_rate: number = 0
  private tick_rate: number = 0
  private ticks: number = 0
  private renders: number = 0

  private update_time_step: number = 0
  private render_time_step: number = 0
  private updateIntval: number = 0

  private update: updateFN = (delta: number) => void {}
  private render: renderFN = () => void {}

  private desired_tick_rate: number = 240
  private desired_frame_rate: number = 60

  constructor({ update, render, desired_frame_rate, desired_tick_rate }: EngineProps) {
    this.update = update
    this.render = render
    this.desired_frame_rate = desired_frame_rate!
    this.desired_tick_rate = desired_tick_rate!

    this.update_time_step = 1000 / this.desired_tick_rate
    this.render_time_step = 1000 / this.desired_frame_rate
  }

  private updateLoop = (): void => {
    if (this.stopped) return

    const now = performance.now()
    const tickTime = now - this.update_last_time
    this.update_last_time = now
    this.update_dt += tickTime

    while (this.update_dt >= this.update_time_step - this.eps) {
      this.update(this.update_time_step / 1000)
      this.update_dt -= this.update_time_step
      this.tick_rate = this.tick_rate * 0.9 + this.update_time_step * 0.1
      this.ticks++
    }
    this.updateIntval = setTimeout(this.updateLoop, 0)
  }

  private renderLoop = (): void => {
    if (this.stopped) return
    requestAnimationFrame(this.renderLoop)

    const now = performance.now()
    const renderTime = now - this.render_last_time
    this.render_last_time = now
    this.render_dt += renderTime

    while (this.render_dt >= this.render_time_step - this.eps) {
      this.render()
      this.render_dt -= this.render_time_step
      this.frame_rate = this.frame_rate * 0.9 + this.render_time_step * 0.1
      this.renders++
    }
  }

  public start(): void {
    if (!this.stopped) return
    this.stopped = false
    this.update_last_time = this.render_last_time = performance.now()
    this.update_dt = 0
    this.render_dt = 0
    this.updateLoop()
    this.renderLoop()
  }

  public stop(): void {
    this.stopped = true
    clearTimeout(this.updateIntval)
  }

  public getTickRate(): number {
    return 1000 / (this.tick_rate + this.eps)
  }

  public getFrameRate(): number {
    return 1000 / (this.frame_rate + this.eps)
  }
}
