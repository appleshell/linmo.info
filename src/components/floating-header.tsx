"use client";

import MobileDrawer from "./mobile-drawer";

const FloatingHeader = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-10 mx-auto flex h-12 w-full shrink-0 items-center overflow-hidden border-b bg-white text-sm font-medium lg:hidden">
      <div>
        <MobileDrawer />
      </div>
    </header>
  );
};

export default FloatingHeader;
