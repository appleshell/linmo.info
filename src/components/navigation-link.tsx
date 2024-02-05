"use client";

import Link from "next/link";
import { FC, ReactElement } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ArrowUpRightIcon } from "lucide-react";

interface NavgationLinkProps {
  href: string;
  icon: ReactElement;
  label: string;
}

const NavigationLink: FC<NavgationLinkProps> = ({ href, icon, label }) => {
  const pathname = usePathname();
  let isActive = false;

  const isInternalRoute = href.startsWith("/");
  if (!isInternalRoute) {
    return (
      <a
        key={href}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-between gap-2 p-2 rounded-lg hover:bg-gray-200"
      >
        <span className="inline-flex items-center gap-2">
          {icon} {label}
        </span>
        <ArrowUpRightIcon size={16} />
      </a>
    );
  }

  const currentPathname = pathname.split("/")[1] ?? "";
  isActive = currentPathname === href.split("/")[1];

  return (
    <Link
      href={href}
      key={href}
      className={cn(
        "group flex items-center justify-between rounded-lg p-2",
        isActive ? "bg-black text-white" : "hover:bg-gray-200"
      )}
    >
      <span className="flex items-center gap-2">
        {icon}
        <span>{label}</span>
      </span>
    </Link>
  );
};

export default NavigationLink;
