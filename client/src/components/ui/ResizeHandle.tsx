import { PanelResizeHandle } from "react-resizable-panels";
import { GripVertical, GripHorizontal } from "lucide-react";

const ResizeHandle = ({
  direction,
}: {
  direction: "horizontal" | "vertical";
}) => {
  const isHorizontal = direction === "horizontal";

  return (
    <PanelResizeHandle
      className={`
            group relative bg-gray-700 transition-all duration-200
            ease-in-out
            ${isHorizontal ? "w-1 hover:w-2" : "h-1 hover:h-2"}
        `}
    >
      <div
        className={`
                absolute inset-0 flex items-center justify-center
                opacity-0 group-hover:opacity-100 transition-opacity duration-200
                bg-blue-500        
            `}
      >
        {isHorizontal ? (
          <GripVertical size={14} className="text-white" />
        ) : (
          <GripHorizontal size={14} className="text-white" />
        )}
      </div>
    </PanelResizeHandle>
  );
};

export default ResizeHandle;
