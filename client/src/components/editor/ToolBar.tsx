import { ReactElement, useMemo, useState } from "react";
import {
  MousePointer,
  Hand,
  Square,
  Circle,
  Settings,
  Move,
  Code,
} from "lucide-react";
import LatticeLogo from "@/components/icons/LatticeLogo";

type ToolType = "select" | "pan" | "shape" | "entity" | "move" | "code";
type Tool = {
  title: string;
  shortcut: string;
  type: ToolType;
  icon: ReactElement;
  action: () => void;
};

const ToolBar = () => {
  const [activeTool, setSelectedTool] = useState<ToolType>("select");

  const handleSelectTool = (tool: Tool) => {
    console.log(`${tool.title} Selected`);
    setSelectedTool(tool.type);
    tool.action();
  };

  const tools = useMemo((): Tool[] => {
    return [
      {
        title: "Select Tool",
        shortcut: "V",
        type: "select",
        icon: <MousePointer size={20} />,
        action: () => {},
      },
      {
        title: "Pan Tool",
        shortcut: "H",
        type: "pan",
        icon: <Hand size={20} />,
        action: () => {},
      },
      {
        title: "Move Tool",
        shortcut: "M",
        type: "move",
        icon: <Move size={20} />,
        action: () => {},
      },
      {
        title: "Shape Tool",
        shortcut: "S",
        type: "shape",
        icon: <Square size={20} />,
        action: () => {},
      },
      {
        title: "Entity Tool",
        shortcut: "E",
        type: "entity",
        icon: <Circle size={20} />,
        action: () => {},
      },
      {
        title: "Code Tool",
        shortcut: "C",
        type: "code",
        icon: <Code size={20} />,
        action: () => {},
      },
    ];
  }, []);

  return (
    <div className="w-12 h-full bg-gray-900 border-r border-gray-700 flex flex-col">
      <div className="flex flex-col gap-1 items-start">
        <LatticeLogo className="h-12 border-b border-gray-700" />
        {tools.map((tool: Tool) => {
          const { title, shortcut, type, icon } = tool;
          return (
            <button
              key={type}
              onClick={() => handleSelectTool(tool)}
              className={`w-full aspect-square flex items-center justify-center transition-colors
                ${
                  activeTool === type
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }
                `}
              title={`${title} (${shortcut})`}
            >
              {icon}
            </button>
          );
        })}
      </div>
      <div className="flex-1" />
      <div className="flex flex-col gap-1 border-t border-gray-700">
        <button
          className="w-full aspect-square flex items-center justify-center text-gray-400 hover:bg-gray-800
         hover:text-white transition-colors"
          onClick={() => {}}
          title="Settings"
        >
          <Settings size={20} />
        </button>
      </div>
    </div>
  );
};

export default ToolBar;
