import React from "react";
import Lattice from "@/assets/Lattice-Icon.png";
import { cn } from "@/lib/utils";

type PropsWithClassName = React.PropsWithoutRef<{ className: string }>;

const LatticeLogo = ({ className }: PropsWithClassName) => {
  return (
    <div
      className={cn(
        "w-full h-full flex justify-center items-center px-2",
        className
      )}
    >
      <img alt="Lattice Logo" src={Lattice} className="aspect-square" />
    </div>
  );
};

export default LatticeLogo;
