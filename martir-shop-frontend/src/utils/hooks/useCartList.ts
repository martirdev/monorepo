import useLocalStorage from 'use-local-storage';

const DEFAULT_STORAGE_VALUE = {};

export const useCartList = () => {
  return useLocalStorage<Record<string, Record<string, number>>>('cart_list', DEFAULT_STORAGE_VALUE);
};
