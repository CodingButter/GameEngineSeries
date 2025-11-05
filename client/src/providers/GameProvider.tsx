import React, { useContext, createContext } from "react";
import { useGame, type GameObject } from "@/hooks/useGame";

const GameContext = createContext<GameObject>({} as GameObject);
export const useGameContext = () => useContext(GameContext);

type GameProviderProps = React.PropsWithChildren<{
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
}>;

export const GameProvider = ({ canvasRef, children }: GameProviderProps) => {
  const game = useGame(canvasRef);

  return <GameContext.Provider value={game}>{children}</GameContext.Provider>;
};
