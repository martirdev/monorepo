"use client";
import { useVariants } from "@/shared/api/products";
import { useLocalStorage } from "@/shared/hooks/use-local-storage";
import { financial } from "@/shared/lib/localization";
import { Button } from "@/shared/ui/components/button";
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/components/sheet";
import { TextLink } from "@/shared/ui/text-link";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { CartEmptyState } from "./CartEmptyState";
import { IconButton } from "./IconButton";
import Image from "next/image";

export function CartButton() {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useLocalStorage("cart", {});

  const itemsKeys = useMemo(() => Object.keys(cart), [cart]);
  const items = useMemo(() => Object.entries(cart), [cart]);

  const { data } = useVariants(itemsKeys);

  const itemsInCart = useMemo(() => {
    return items.reduce((acc, [_id, item]) => acc + item, 0) || null;
  }, [items]);

  const total = useMemo(() => {
    return (
      data?.variants.reduce((acc, product) => {
        return (
          acc + Number(product.lastPrice?.price || 0) * cart[product.id] || 0
        );
      }, 0) || 0
    );
  }, [data?.variants]);

  const removeItemFromCart = useCallback(
    (id: string) => {
      setCart((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
    },
    [setCart]
  );

  const close = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
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
        {!itemsKeys.length ? (
          <CartEmptyState />
        ) : (
          <>
            <SheetBody className="space-y-4">
              {data?.variants.length &&
                data?.variants.map(
                  ({ id, name, params, lastPrice, product, images }) => (
                    <div className="flex gap-3 md:gap-6" key={id}>
                      <Link
                        href={{
                          pathname: `/products/${product.id}`,
                          query: { id },
                        }}
                        onClick={close}
                      >
                        <div className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] bg-[#e7e7e7] rounded-md flex-none overflow-hidden">
                          <Image
                            width={150}
                            height={150}
                            src={images[0].image.url || ""}
                            alt={images[0].image.alt || name}
                            className="object-contain h-full"
                          />
                        </div>
                      </Link>
                      <div className="space-y-3 md:space-y-5 flex-1">
                        <div className="space-y-2 md:space-y-3">
                          <div className="flex gap-1 items-start">
                            <TextLink
                              href={{
                                pathname: `/products/${product.id}`,
                                query: { id },
                              }}
                              onClick={close}
                              className="flex-1"
                            >
                              <div className="font-bold text-sm md:text-base leading-[20px] md:leading-[24px]">
                                {name}
                              </div>
                            </TextLink>
                            <button
                              className="flex-none text-xs underline leading-[20px] md:leading-[24px]"
                              onClick={() => removeItemFromCart(id)}
                            >
                              Удалить
                            </button>
                          </div>
                          <div className="text-gray-500 space-y-1 text-[12px] leading-[16px] md:text-sm md:leading-[20px]">
                            {params.map(({ paramValue }) => (
                              <div key={name}>
                                {paramValue.param.name}:{" "}
                                <b>{paramValue.value}</b>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2 items-center">
                          <div className="font-bold text-lg">
                            {financial(Number(lastPrice?.price || 0))}
                          </div>
                          <div className="flex items-center gap-1 ml-auto">
                            <Button variant="outline" size="icon">
                              −
                            </Button>
                            <Button variant="ghost" size="icon">
                              {cart[id]}
                            </Button>
                            <Button variant="outline" size="icon">
                              +
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
            </SheetBody>
            <SheetFooter className="border-t border-gray-200">
              <div className="flex-1 space-y-2 md:space-y-4">
                <div className="flex items-center justify-center gap-1">
                  <span className="text-sm">Итого:</span>
                  <span className="text-xl font-bold">{financial(total)}</span>
                </div>
                <Button className="w-full display-block">
                  Перейти к оформлению
                </Button>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
