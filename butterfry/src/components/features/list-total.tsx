"use client";
import { Skeleton } from "@/components/shared/skeleton";
import { memo } from "react";

type ListTotalPropsType = {
  isLoading?: boolean;
  total: number;
  perPage: number;
  page: number;
  entity: string;
};

const ListTotal = memo<ListTotalPropsType>(function ListTotal({
  isLoading,
  total,
  perPage,
  page,
  entity,
}) {
  const from = page * perPage + 1;
  const to = Math.min(page * perPage + perPage, total);

  return (
    <div className="text-xs text-muted-foreground">
      {isLoading && <Skeleton className="w-40 h-4" />}
      {!isLoading && total && (
        <>
          Показано{" "}
          <strong>
            {from === to ? (
              from
            ) : (
              <>
                {from}-{to}
              </>
            )}
          </strong>{" "}
          из <strong>{total}</strong> {entity}
        </>
      )}
    </div>
  );
});

export { ListTotal };
