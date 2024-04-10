"use client";
import { Button } from "@/components/shared/button";
import { Textarea } from "@/components/shared/textarea";
import { dateFormater } from "@/lib/locale";
import { trpc } from "@/lib/trpc";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { memo } from "react";
import { toast } from "sonner";
import { COMMENT_FORM_INIT_VALUES } from "./consts";

type Comment = {
  id: string;
  text: string;
  createdAt: string;
};

const EMPTY_COMMENTS: Comment[] = [];

type CommentFormPropsType = {
  id: string;
  comments: Undefinable<Comment[]>;
  refetch?: () => void;
};

const CommentForm = memo<CommentFormPropsType>(function CommentForm({
  id,
  comments = EMPTY_COMMENTS,
  refetch,
}) {
  const form = useForm({
    defaultValues: COMMENT_FORM_INIT_VALUES,
    onSubmit: async ({ value }) => {
      mutate({
        orderId: id,
        text: value.text,
      });
    },
    validatorAdapter: zodValidator,
  });

  const { mutate, isLoading } = trpc.setComment.useMutation({
    onSuccess: () => {
      form.setFieldValue("text", "");
      toast("Комментарии добавлен", {
        description: "Теперь он виден на странице заказа",
      });
      refetch?.();
    },
    onError: (data) => {
      toast(`Ошибка "${data.data?.code}"`, {
        description: data.message,
      });
    },
  });
  return (
    <div className="p-4 space-y-4 bg-white rounded-md">
      <div className="font-bold">Комментарии</div>
      <div className="space-y-2">
        <form.Field name="text">
          {(field) => (
            <div className="space-y-2">
              <Textarea
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                placeholder="Товар Яблоко не доступен, клиент согласен убрать его из заказа"
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        </form.Field>
        <Button onClick={form.handleSubmit}>
          {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
          Отправить
        </Button>
      </div>
      <div className="bg-border h-[1px] w-full" />
      <div className="space-y-4">
        {(comments ?? []).map((comment) => (
          <div key={comment.id} className="space-y-0.5">
            <div className="text-xs text-muted-foreground">
              {dateFormater(comment.createdAt).fromNow()}
            </div>
            <div className="text-sm">{comment.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
});

export { CommentForm };
