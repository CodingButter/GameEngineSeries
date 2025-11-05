import { FolderOpen, Image, FileText } from "lucide-react";

const Assets = () => {
  return (
    <div className="w-full h-full bg-gray-900 flex flex-col">
      <div className="flex items-center justify-between p-2 border-b border-gray-700">
        <h2 className="text-sm font-semibold text-gray-300">Assets</h2>
        <div className="flex items-center gap-1">
          <button
            className="p-1 rounded hover:bg-gray-800 transition-colors text-gray-400 hover:text-white"
            title="Import Asset"
          >
            <FolderOpen size={16} />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-3">
        <div className="h-full flex flex-col items-center justify-center text-gray-500">
          <div className="flex items-center gap-3 mb-3">
            <Image size={24} className="text-gray-600" />
            <FileText size={24} className="text-gray-600" />
          </div>
          <p className="text-sm text-center">No assets yet</p>
          <p className="text-xs text-center mt-1">
            Import images, sounds and scripts here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Assets;
