import { useEffect, useRef, useState } from "react"
import { makeCanvasRenderer, type Renderer } from "@ges/core/renderer"
import { Engine } from "@ges/core/engine"
import type { updateFN, renderFN, EngineProps } from "@ges/core/engine"

function Editor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [fps, setFPS] = useState<string | undefined>("")

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current!
    const parent = canvas.parentElement!
    let x = 20
    let speed = 50

    const update: updateFN = (dt: number) => {
      x = (x + speed * dt) % (r.width - 80)
    }

    const render: renderFN = () => {
      r.clear("#111")
      r.rect(x, 40, 80, 80, "#4caf50")
      setFPS(e.getFrameRate().toFixed(2))
    }

    const r: Renderer = makeCanvasRenderer(canvas)
    r.resize(parent.clientWidth, parent.clientHeight)
    const engineProps: EngineProps = {
      update,
      render,
      desired_frame_rate: 60,
      desired_tick_rate: 240,
    }
    const e: Engine = new Engine(engineProps)

    e.start()
    return () => {}
  }, [])

  return (
    <div className="w-screen h-screen">
      <div className="absolute top-0 left-0 p-4 text-white">
        <h1 className="font-bold">FPS:{fps}</h1>
      </div>
      <canvas ref={canvasRef} />
    </div>
  )
}

export default Editor
