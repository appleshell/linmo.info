import { cn } from "@/lib/utils";
import { FC } from "react";
import Balancer from "react-wrap-balancer";

interface PageTitleProps {
  title: string;
  subTitle?: string;
  className: string;
}

const PageTitle: FC<PageTitleProps> = ({
  title,
  subTitle,
  className,
  ...rest
}) => (
  <div className={cn("mb-6", className)}>
    <Balancer as="h1" {...rest}>
      {title}
    </Balancer>
    {subTitle}
  </div>
);

export default PageTitle;
