import { SheetBody } from "@/shared/ui/components/sheet";

export function CartEmptyState() {
  return (
    <SheetBody className="text-center flex items-center flex-col justify-center gap-1">
      <div className="h4">Вы пока что еще ничего не добавили в корзину</div>
      <div className="text-gray-500 text-sm">
        Найдите то что будет вам в самый раз
      </div>
    </SheetBody>
  );
}
