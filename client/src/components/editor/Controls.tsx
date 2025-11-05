import { Play } from "lucide-react";

const Controls = () => {
  return (
    <div className="w-full flex justify-end items-center gap-2 p-2 absolute z-100">
      <div className="p-2 bg-secondary/50 hover:bg-yello-300/50 transition-colors text-white">
        <button
          className="flex justify-center items-center"
          title="Launch (Run Game)"
        >
          <Play size={20} />
          <span>Launch</span>
        </button>
      </div>
    </div>
  );
};

export default Controls;
