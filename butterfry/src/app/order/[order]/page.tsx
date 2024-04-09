import ClientOrderPage from "@/components/pages/client-order-page";

type Props = {
  params: {
    order: string;
  };
};

export default async function Order({ params }: Props) {
  return <ClientOrderPage params={params} />;
}
