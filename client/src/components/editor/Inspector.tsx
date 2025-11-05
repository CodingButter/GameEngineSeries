import { memo } from "react";

const Inspector = () => {
  return (
    <div className="w-full h-full bg-gray-900 border-l border-gray-700 flex flex-col">
      <div className="flex items-center justify-between p-2 border-b border-gray-700 h-12">
        <h2 className="text-sm font-semibold text-gray-300">Inspector</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-2">
        <div className="text-center text-gray-500 text-sm mt-4">
          Select an entity in the Hierarchy to inspect
        </div>
      </div>
    </div>
  );
};

export default memo(Inspector);
