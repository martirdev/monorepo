import useLocalStorage from 'use-local-storage';

const DEFAULT_STORAGE_VALUE = [];

export const useLikedList = () => {
  return useLocalStorage<string[]>('liked_list', DEFAULT_STORAGE_VALUE);
};
