"use client";

import { FC } from "react";
import ScrollArea from "./scroll-area";
import { cn } from "@/lib/utils";

const SideMenu: FC<any> = ({ children, isInner }) => {
  return (
    <ScrollArea
      className={cn(
        "hidden bg-zinc-50 lg:flex lg:flex-col lg:border-r",
        isInner ? "lg:w-80 xl:w-96" : "lg:w-60 xl:w-72"
      )}
    >
      <div className="bg-zinc-50 p-3">{children}</div>
    </ScrollArea>
  );
};

export default SideMenu;
