import { memo } from "react";
import { Plus, Box } from "lucide-react";
import { useGameContext } from "@/providers/GameProvider";
import type { Square } from "@/hooks/useGame";
import { generateRandomHexColor } from "@/lib/utils";
import type { Entity } from "@ges/core/ecs";
import { Button } from "@/components/ui/button";

const Hierarchy = () => {
  const {
    addSquare,
    rendererRef,
    worldRef,
    entities,
    selectedEntity,
    setSelectedEntity,
  } = useGameContext();

  const getEntityName = (entityId: Entity): string => {
    const world = worldRef.current;
    if (!world) return `Entity ${entityId}`;
    const base = world.getComponent<{ name: string; id: Entity }>(
      entityId,
      "Base"
    );
    return base?.name || `Entity ${entityId}`;
  };

  const handleAddSquare = () => {
    const renderer = rendererRef.current;
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
        {entities.length === 0 ? (
          <div className="text-center text-gray-500 text-sm mt-4">
            No entities yet. Click + to create one
          </div>
        ) : (
          <ul className="w-full flex flex-col gap-0 transition-all duration-200">
            {entities.map((entityId: Entity) => (
              <li key={entityId} className="w-full flex">
                <Button
                  variant={selectedEntity === entityId ? "default" : "ghost"}
                  onClick={() => setSelectedEntity(entityId)}
                  className={`w-full rounded-none justify-between items-center h-auto py-3 px-3 flex
                    ${
                      selectedEntity === entityId
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }
                    group
                  `}
                >
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <Box
                      size={16}
                      className={`shrink-0 ${
                        selectedEntity === entityId
                          ? "text-blue-200"
                          : "text-gray-500 group-hover:text-gray-400"
                      }
                      `}
                    />
                    <span className="text-left truncate">
                      {getEntityName(entityId)}
                    </span>
                  </div>
                  <span
                    className={`
                      text-xs px-2 py-1 rounded-md font-mono border shrink-0 ml-2
                      ${
                        selectedEntity === entityId
                          ? "bg-blue-500/30 text-blue-100 border-blue-400/40"
                          : "bg-gray-800/50 text-gray-400 border-gray-700/50 group-hover:bg-gray-700/50 group-hover:border-gray-600/50"
                      }
                    `}
                  >
                    #{entityId}
                  </span>
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default memo(Hierarchy);
