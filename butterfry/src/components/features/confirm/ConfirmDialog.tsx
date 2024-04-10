import { Button } from "@/components/shared/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/dialog";
import { Input } from "@/components/shared/input";
import { Label } from "@/components/shared/label";
import { ReloadIcon } from "@radix-ui/react-icons";
import {
  PropsWithChildren,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";

export type RefType = {
  open: () => void;
  close: () => void;
};

type ConfirmDialogPropsType = {
  title?: string;
  description?: string;
  isSubmiting?: boolean;
  submit: () => void;
};

export const ConfirmDialog = forwardRef(function ConfirmDialog(
  { title, description, isSubmiting, submit }: ConfirmDialogPropsType,
  ref
) {
  const [open, setOpen] = useState(false);

  useImperativeHandle(
    ref,
    (): RefType => ({
      open: () => setOpen(true),
      close: () => setOpen(false),
    })
  );

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={submit}>
            {isSubmiting && (
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            )}
            <span>Подтвердить</span>
          </Button>
          <DialogClose asChild>
            <Button variant="secondary">Отменить</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});
