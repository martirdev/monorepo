// Get product by id
export type GetProductRequestType = {
  product_id: string;
};

// export type GetProductResponceType = Array<Product>;
// пока что так, как ручку накинем, верну к варианту выше
export type GetProductResponceType = Product;

type sizeLeftType = {
  size: string;
  sizeLeft: number;
};
// Component
export type Product = {
  id: string; //идентификатор товара
  name: string; //название
  image: string; //фото
  price: string; //цена
  previousPrice?: string;
  size: string; //размер
  sizesLeft: Array<sizeLeftType>; // сколько отвара осталось по размерам
};
