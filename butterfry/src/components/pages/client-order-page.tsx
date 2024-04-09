import { Comment } from "@/components/features/comment";
import { ProductItem } from "@/components/features/product-item";
import { Card } from "@/components/shared/card";
import { TextWithLabel } from "@/components/shared/text-with-label";
import {
  convertCredentialsToShort,
  currency,
  dateFormater,
  transformId,
} from "@/lib/locale";
import { trpcNext } from "@/lib/trpc/server";
import { first, last } from "lodash";
import React from "react";

const convertProductParams = (list: { name: string; value: string }[]) =>
  list.map(({ name: key, value }) => ({ key, value }));

const STATUSES = {
  CREATED: "Создан",
  IN_PROCESS: "В процессе",
  NEED_INFO: "Требуется информация",
  READY_TO_DELIVERY: "Готов к доставке",
  IN_DELIVERY: "Доставляется",
  COMPLETED: "Завершен",
  CANCELED: "Отменен",
  REFUND: "Возврат",
};

type Props = {
  params: {
    order: string;
  };
};

export default async function ClientOrderPage({ params }: Props) {
  const data = await trpcNext().getOrder.query({ id: params.order });

  if (!data) {
    throw new Error("Заказ не найден");
  }

  const lastVersion = last(data.orderVersions);

  if (!lastVersion) {
    throw new Error("Заказ не сформирован");
  }

  return (
    <div className="flex flex-col lg:flex-row gap-9">
      <div className="w-full lg:w-2/3 flex flex-col gap-9">
        <Card>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">
              Номер заказа: {transformId(data.id)}
            </h1>
            <p className="text-base">
              <span className="mr-3 text-gray-400">Дата заказа:</span>
              <span>{dateFormater(data.createdAt).fromNow()}</span>
            </p>
          </div>
          <hr className="bg-border my-6" />
          <div className="flex">
            <div className="flex overflow-auto gap-16 mx-auto">
              {data.orderVersions.map((version, index) => (
                <div
                  key={version.id}
                  className="inline-flex flex-col items-center gap-4 w-[130px]"
                >
                  <div className="rounded-full w-5 h-5 bg-indigo-500 relative">
                    {index + 1 !== data.orderVersions.length && (
                      <div className="absolute h-1 w-[200px] left-1/2 top-1/2 -translate-y-1/2 bg-indigo-500" />
                    )}
                  </div>
                  <div className="text-center">
                    <p className="text-indigo-500 font-semibold">
                      {STATUSES[version.status]}
                    </p>
                    <p className="capitalize text-xs text-gray-400 mt-1">
                      {dateFormater(version.createdAt).format("dd, DD MMM")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
        <Card>
          {lastVersion.products.map(({ productId, amount, product }, index) => (
            <React.Fragment key={productId}>
              {index !== 0 && <hr className="bg-border my-6" />}
              <ProductItem
                image={first(product.images)?.url ?? ""}
                name={product.name}
                properties={convertProductParams(product.params)}
                price={product.price}
                quantity={amount}
              />
            </React.Fragment>
          ))}
        </Card>
        <Card className="w-full lg:w-2/3">
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-semibold">Итоги заказа</h4>
            <div className="flex flex-col gap-2">
              <p className="text-base flex justify-between">
                <span className="mr-3 text-gray-400">Общая стоимость</span>
                <span>{currency(lastVersion.total)}</span>
              </p>
              {/* <p className="text-base flex justify-between">
                <span className="mr-3 text-gray-400">Скидка</span>
                <span>{currency(200)} (-20%)</span>
              </p> */}
              {/* <p className="text-base flex justify-between">
                <span className="mr-3 text-gray-400">Доставка</span>
                <span>{currency(200)}</span>
              </p> */}
            </div>
          </div>
          <hr className="bg-border my-6" />
          <div>
            <div className="flex justify-between text-lg font-semibold">
              <div className="mr-3">Всего</div>
              <div>{currency(lastVersion.total)}</div>
            </div>
          </div>
        </Card>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-9">
        <Card>
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-semibold">Получатель</h4>
            <div>
              <TextWithLabel label="ФИО">
                {convertCredentialsToShort(data.customer)}
              </TextWithLabel>
              <hr className="my-3 bg-border" />
              <TextWithLabel label="Контакт">
                {data.customer.contact}
              </TextWithLabel>
              <hr className="my-3 bg-border" />
              <TextWithLabel label="Адрес">{lastVersion.address}</TextWithLabel>
            </div>
          </div>
        </Card>
        {!!data.comments.length && (
          <Card>
            <div className="flex flex-col gap-6">
              <h4 className="text-xl font-semibold">Комментарий</h4>
              <div className="flex flex-col gap-5">
                {data.comments.map((comment) => (
                  <Comment
                    avatar={comment.user.avatar ?? ""}
                    userName={`${comment.user.surname} ${comment.user.name}`}
                    date={comment.createdAt}
                    content={comment.text}
                  />
                ))}
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
