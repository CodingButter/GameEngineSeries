export type updateFN = (delta: number) => void
export type renderFN = () => void

export interface EngineProps {
  update: updateFN
  render: renderFN
  desired_tick_rate?: number
  desired_frame_rate?: number
}
