import { ProductSection } from "@/widgets/product-section";

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: Promise<{ [key: string]: string | string[] | undefined }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id } = await searchParams;
  const { product } = await params;

  return (
    <div>
      <ProductSection
        masterProductId={product as string}
        variantId={id as string}
      />
    </div>
  );
}
