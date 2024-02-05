import { Drawer } from "vaul";
import { CommandIcon } from "lucide-react";
import MenuContent from "./menu-content";

const MobileDrawer = () => (
  <Drawer.Root shouldScaleBackground>
    <Drawer.Trigger>
      <CommandIcon size={16} />
    </Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Overlay />
      <Drawer.Content>
        <MenuContent />
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
);

export default MobileDrawer;
