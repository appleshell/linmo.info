import { SCROLL_AREA_ID } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface ScrollAreaProps {
  hasScrollTitle?: boolean;
  className?: string;
  children: any;
}

const ScrollArea: FC<ScrollAreaProps> = ({
  hasScrollTitle,
  className,
  children,
  ...rest
}) => (
  <div
    id={hasScrollTitle ? SCROLL_AREA_ID : undefined}
    className={cn("scrollable-area relative w-full", className)}
    {...rest}
  >
    {children}
  </div>
);

export default ScrollArea;
