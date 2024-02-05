"use client";

import Link from "next/link";
import { LINKS, PROFILES } from "@/lib/constants";
import NavigationLink from "./navigation-link";

const MenuContent = () => {
  return (
    <div className="flex flex-col w-full text-sm">
      <div className="flex flex-col gap-4">
        <Link href="/" className="link-card inline-flex items-center gap-2 p-2">
          <img
            width={40}
            height={36}
            loading="lazy"
            src="https://me.linmo.info/assets/me-02a665b8.jpg"
            alt="me"
            className="rounded-full border shadow-sm"
          />
          <div className="flex flex-col">
            <strong>Pansen LYU</strong>
            <span>Full-stack Developer</span>
          </div>
        </Link>
        <div className="flex flex-col gap-2">
          {LINKS.map((item) => (
            <NavigationLink key={item.href} {...item} />
          ))}
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-2 text-sm">
        <span className="px-2 text-xs font-medium leading-relaxed text-gray-600">
          Online
        </span>
        <div className="flex flex-col gap-2">
          {PROFILES.map((item) => (
            <NavigationLink key={item.href} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuContent;
