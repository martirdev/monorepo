import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/shared/ui/components/dialog";
import { Ruler } from "lucide-react";

export function RulerDialog() {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-1 underline hover:no-underline text-sm text-gray-600">
        Руководство по выбору размера <Ruler size={16} />
      </DialogTrigger>
      <DialogContent>Размерная таблица и информация об модели</DialogContent>
    </Dialog>
  );
}
