import { useEffect, useRef } from "react"
import { makeCanvasRenderer, type Renderer } from "renderer"

function Editor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current!
    const parent = canvas.parentElement!

    const r: Renderer = makeCanvasRenderer(canvas)
    r.resize(parent.clientWidth, parent.clientHeight)

    let x = 20
    const id = setInterval(() => {
      x = (x + 2) % (r.width - 80)
      r.clear("#111")
      r.rect(x, 40, 80, 80, "#4caf50")
    }, 16)

    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <div className="w-screen h-screen">
      <canvas ref={canvasRef} />
    </div>
  )
}

export default Editor
