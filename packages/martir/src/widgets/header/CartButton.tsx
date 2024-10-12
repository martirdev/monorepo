import { useLocalStorage } from "@/shared/hooks/use-local-storage";
import { Button } from "@/shared/ui/components/button";
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet";
import { ShoppingBag } from "lucide-react";
import { useMemo } from "react";
import { IconButton } from "./IconButton";

export function CartButton() {
  const [cart] = useLocalStorage("cart", {});

  const items = useMemo(() => Object.entries(cart), [cart]);

  const itemsInCart = useMemo(() => {
    return items.reduce((acc, [_id, item]) => acc + item, 0) || null;
  }, [items]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div>
          <IconButton>
            <ShoppingBag />
            {itemsInCart && (
              <div className="rounded-full bg-red-500 text-white text-xs absolute px-1 min-w-[16px] -right-1 -bottom-1">
                <div className="absolute w-full h-full rounded-full bg-red-500 animate-slow-scale top-0 left-0"></div>
                <div className="z-10 relative">{itemsInCart}</div>
              </div>
            )}
          </IconButton>
        </div>
      </SheetTrigger>
      <SheetContent className="md:w-[600px]">
        <SheetHeader>
          <SheetTitle>Корзина</SheetTitle>
        </SheetHeader>
        <SheetBody className="space-y-4">
          <div className="flex gap-3 md:gap-6">
            <div className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] bg-[#e7e7e7] rounded-md flex-none"></div>
            <div className="space-y-3 md:space-y-5">
              <div className="space-y-2 md:space-y-3">
                <div className="flex gap-1 items-start">
                  <div className="font-bold text-sm md:text-base leading-[20px] md:leading-[24px]">
                    Черная хлопковая оверсайз футболка с вышитым логотипом
                  </div>
                  <button className="flex-none text-xs underline leading-[20px] md:leading-[24px]">
                    Удалить
                  </button>
                </div>
                <div className="text-gray-500 space-y-1 text-[12px] leading-[16px] md:text-sm md:leading-[20px]">
                  <div>
                    Цвет: <b>Черный</b>
                  </div>
                  <div>
                    Размер: <b>M</b>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="font-bold text-lg">18 000 ₽</div>
                <div className="flex items-center gap-1 ml-auto">
                  <Button variant="outline" size="icon">
                    −
                  </Button>
                  <Button variant="ghost" size="icon">
                    1
                  </Button>
                  <Button variant="outline" size="icon">
                    +
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </SheetBody>
        <SheetFooter className="border-t border-gray-200">
          <div className="flex-1 space-y-2 md:space-y-4">
            <div className="flex items-center justify-center gap-1">
              <span className="text-sm">Итого:</span>
              <span className="text-xl font-bold">18 000 ₽</span>
            </div>
            <Button className="w-full display-block">
              Перейти к оформлению
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
