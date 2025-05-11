import { PreviewImage } from "@/features/preview-image";
import { client } from "@/shared/api/hono";
import { financial } from "@/shared/lib/localization";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion";
import { Container } from "@/shared/ui/layouts/container";
import { BaseLink } from "@/shared/ui/text-link";
import { Info, Truck, Undo2 } from "lucide-react";
import { ProductAddToCartForm } from "./ProductAddToCartForm";
import { Variants } from "./Variants";

type Product = {
  name: string;
  count: number;
  price: number;
  description?: string;
  images?: string[];
  params: Record<string, string>;
};

type ProductSectionProps = {
  masterProductId: string;
  variantId: string;
};

export async function ProductSection({
  masterProductId,
  variantId,
}: ProductSectionProps) {
  const data = await client.products.products
    .$post({
      json: {
        id: masterProductId,
      },
    })
    .then((res) => res.json());

  const productMap =
    data?.products?.productVariants.reduce<Record<string, Product>>(
      (acc, item) => {
        const params = item.params.reduce<Record<string, string>>(
          (acc, item) => {
            acc[item.paramValue.param.name] = item.paramValue.value;
            return acc;
          },
          {}
        );

        acc[item.id] = {
          name: item.name,
          price: Number(item.lastPrice?.price || 0),
          count: item.stock.stockedQuantity || 0,
          images: item.images.map((img) => img.image.url),
          description: item.description || undefined,
          params: params,
        };
        return acc;
      },
      {}
    ) ?? {};

  const { name, price, count, params, description, images } =
    productMap[variantId] ?? {};

  return (
    <Container className="flex flex-col lg:flex-row py-10 gap-10">
      <div className="flex-1 rounded-lg overflow-hidden flex justify-center bg-[#e7e7e7] lg:aspect-square lg:self-start">
        <PreviewImage src={images?.[0] || ""} alt={name} />
      </div>
      <div className="flex-1 max-w-[600px] md:max-w-full">
        <div className="space-y-2">
          <h1 className="h4 md:h2">{name}</h1>
          <p className="h2 md:h1 font-black">{financial(price)}</p>
        </div>
        <div className="mt-6 space-y-10">
          <div className="space-y-8">
            <Variants
              products={data?.products?.productVariants ?? []}
              productParam={params}
            />
            <ProductAddToCartForm count={count} id={variantId} />
          </div>
          <div>
            <Accordion
              type="single"
              className="w-full"
              defaultValue="description"
            >
              {description && (
                <AccordionItem value="description">
                  <AccordionTrigger>
                    <Info size="20" />
                    Описание товара
                  </AccordionTrigger>
                  <AccordionContent>{description}</AccordionContent>
                </AccordionItem>
              )}
              <AccordionItem value="delivery">
                <AccordionTrigger>
                  <Truck size="20" />
                  Доставка
                </AccordionTrigger>
                <AccordionContent>
                  В настоящее время мы сотрудничаем с логистической компанией
                  CDEK, которая функционирует в 67 000 населенных пунктах в 27
                  странах мира.
                  <br />
                  <br />
                  Стоимость доставки рассчитывается индивидуально, согласно
                  тарифам CDEK непосредственно при оформлении заказа. Мы
                  обязательно проинформируем вас об этом до момента оплаты.
                  <br />
                  <br />
                  Более подробную инофрмацию можно изучить на странице{" "}
                  <BaseLink href="/delivery-and-payments">
                    "Доставка и опалата"
                  </BaseLink>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="refund">
                <AccordionTrigger>
                  <Undo2 size="20" />
                  Возврат
                </AccordionTrigger>
                <AccordionContent>
                  Вы можете вернуть купленный товар в течение 14 дней после
                  получения посылки от почтовых служб.
                  <br />
                  <br />
                  Необходимо отправлять посылку строго без наложенного платежа.
                  Убедитесь, что возвращаете товары в том состоянии, в котором
                  они к вам прибыли: без следов эксплуатации, с заводскими
                  бирками и в оригинальной упаковке.
                  <br />
                  <br />
                  Более подробную инофрмацию можно изучить на странице{" "}
                  <BaseLink href="/refund">"Обмен и возврат"</BaseLink>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </Container>
  );
}
