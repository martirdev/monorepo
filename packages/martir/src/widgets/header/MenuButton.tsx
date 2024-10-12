import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerTrigger,
} from "@/shared/ui/components/drawer";
import { Menu } from "lucide-react";
import { IconButton } from "./IconButton";
import { PropsWithChildren } from "react";

type MenuProps = PropsWithChildren<{
  trigggerClassName?: string;
}>;

export function MenuButton({ children, trigggerClassName }: MenuProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className={trigggerClassName}>
          <IconButton>
            <Menu />
          </IconButton>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
