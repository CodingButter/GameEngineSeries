import { memo } from "react";
import { Plus } from "lucide-react";
import { useGameContext } from "@/providers/GameProvider";
import type { Square } from "@/hooks/useGame";
import { generateRandomHexColor } from "@/lib/utils";

const Hierarchy = () => {
  const { addSquare, renderer } = useGameContext();

  const handleAddSquare = () => {
    if (!renderer) return;
    const size = 25 + Math.random() * 50;
    const maxSpeed = 200;
    const minSpeed = 20;
    const square: Square = {
      transform: {
        x: Math.random() * (renderer.width - size),
        y: Math.random() * (renderer.height - size),
      },
      shape: {
        width: size,
        height: size,
        color: generateRandomHexColor(),
      },
      velocity: {
        vx: minSpeed + Math.random() * (maxSpeed - minSpeed),
        vy: minSpeed + Math.random() * (maxSpeed - minSpeed),
      },
    };
    addSquare(square);
    console.log("adding square");
  };

  return (
    <div className="w-full h-full bg-gray-900 border-r border-gray-700 flex flex-col">
      <div className="flex items-center justify-between p-2 border-b border-gray-700 h-12">
        <h2 className="text-sm font-simibold text-gray-300">Hierarchy</h2>
        <button
          onClick={handleAddSquare}
          className="p-1 rounded hover:bg-gray-800 transition-colors
        text-gray-400 hover:text-white"
          title="Create Square"
        >
          <Plus size={16} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        <div className="text-center text-gray-500 text-sm mt-4">
          No entities yet. Click + to create one
        </div>
      </div>
    </div>
  );
};

export default memo(Hierarchy);
