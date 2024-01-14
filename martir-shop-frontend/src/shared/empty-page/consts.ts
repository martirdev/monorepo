const LABELS = {
  CART_TITLE: 'Корзина пуста...',
  CART_DESCRIPTION: 'В каталоге вы найдете что-то подходящее!',
  CART_BUTTON: 'В каталог'
};

export const CART_EMPTY_PAGE_PROPS = {
  title: LABELS.CART_TITLE,
  description: LABELS.CART_DESCRIPTION,
  primaryButton: {
    link: '/',
    title: LABELS.CART_BUTTON
  }
};
