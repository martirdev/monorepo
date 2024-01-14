import {Product} from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Жакардовое оверсайз худи с нашивкой “Familiar look”',
    image:
      'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '14250',
    previousPrice: '15000',
    size: 'M',
    sizesLeft: [
      {size: 'XS', sizeLeft: 10},
      {size: 'S', sizeLeft: 7},
      {size: 'M', sizeLeft: 5},
      {size: 'L', sizeLeft: 1},
      {size: 'XL', sizeLeft: 17}
    ]
  },
  {
    id: '2',
    name: 'Хлопковая рубашка с принтом “Martir”',
    image:
      'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '7650',
    previousPrice: '10000',
    size: 'XS',
    sizesLeft: [
      {size: 'XS', sizeLeft: 0},
      {size: 'S', sizeLeft: 2},
      {size: 'M', sizeLeft: 3},
      {size: 'L', sizeLeft: 5},
      {size: 'XL', sizeLeft: 10}
    ]
  },
  {
    id: '3',
    name: 'Джинсы с высокой талией и потертостями “Vintage vibes”',
    image:
      'https://images.unsplash.com/photo-1658857635450-f25dacd2589d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '11250',
    previousPrice: '130000',
    size: 'L',
    sizesLeft: [
      {size: 'XS', sizeLeft: 5},
      {size: 'S', sizeLeft: 3},
      {size: 'M', sizeLeft: 0},
      {size: 'L', sizeLeft: 2},
      {size: 'XL', sizeLeft: 7}
    ]
  },
  {
    id: '4',
    name: 'Платье-миди с цветочным принтом',
    image:
      'https://images.unsplash.com/photo-1511130558090-00af810c21b1?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '9850',
    previousPrice: '12000',
    size: 'XL',
    sizesLeft: [
      {size: 'XS', sizeLeft: 3},
      {size: 'S', sizeLeft: 5},
      {size: 'M', sizeLeft: 7},
      {size: 'L', sizeLeft: 10},
      {size: 'XL', sizeLeft: 0}
    ]
  },
  {
    id: '5',
    name: 'Сумка из натуральной кожи “Martir Urban”',
    image:
      'https://images.unsplash.com/photo-1541336318489-083c7d277b8e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '18500',
    previousPrice: '20000',
    size: 'One size',
    sizesLeft: [{size: 'One size', sizeLeft: 3}]
  }
];
