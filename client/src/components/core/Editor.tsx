import { useRef } from "react"
import { useGame } from "@/hooks/useGame"
import { Button} from "@/components/ui/button"

function Editor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { addSquare, fps } = useGame(canvasRef)
  
  return (
    <div className="w-screen h-screen">
      <div className="absolute top-0 left-0 p-4 text-white gap-4">
        <h1 className="font-bold">FPS:{fps}</h1>
        <Button onClick={()=>{
          addSquare({
            transform:{x:0,y:50},
            velocity:{vx:50,vy:20},
            shape:{width:50,height:50,color:"green"}
          })
        }}> Add Square</Button>
      </div>
      <canvas ref={canvasRef} />
    </div>
  )
}

export default Editor
