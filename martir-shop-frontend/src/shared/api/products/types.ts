export type ListProductResponse = {
  id: string;
  title: string;
  image: string;
  price: number;
  categories?: string[];
}[];
