import { useRef } from "react";
import { Panel, PanelGroup } from "react-resizable-panels";
import ResizeHandle from "./components/ui/ResizeHandle";
import { GameProvider } from "./providers/GameProvider";
import ToolBar from "@/components/editor/ToolBar";
import Hierarchy from "@/components/editor/Hierarchy";
import Controls from "@/components/editor/Controls";
import Assets from "@/components/editor/Assets";
import Inspector from "./components/editor/Inspector";

function Editor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <GameProvider canvasRef={canvasRef}>
      <div className="w-screen h-screen">
        <div className="w-full h-full flex-1 flex overflow-hyidden">
          <ToolBar />
          <PanelGroup direction="horizontal">
            <Panel defaultSize={20} minSize={10}>
              <Hierarchy />
            </Panel>
            <ResizeHandle direction="horizontal" />

            <Panel defaultSize={60} minSize={20}>
              <div className="w-full h-full flex flex-col relative">
                <PanelGroup direction="vertical" className="flex-1">
                  <Panel defaultSize={80} minSize={20}>
                    <Controls />
                    <canvas ref={canvasRef} className="w-full h-full" />
                  </Panel>

                  <ResizeHandle direction="vertical" />

                  <Panel defaultSize={20} minSize={10}>
                    <Assets />
                  </Panel>
                </PanelGroup>
              </div>
            </Panel>

            <ResizeHandle direction="horizontal" />

            <Panel defaultSize={20} minSize={10}>
              <Inspector />
            </Panel>
          </PanelGroup>
        </div>
      </div>
    </GameProvider>
  );
}

export default Editor;
