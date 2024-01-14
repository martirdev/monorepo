import {useCallback, useState} from 'react';

export const useModal = () => {
  const [isOpened, setOpenedStatus] = useState(false);

  const openModal = useCallback(() => {
    setOpenedStatus(true);
  }, [setOpenedStatus]);

  const closeModal = useCallback(() => {
    setOpenedStatus(false);
  }, [setOpenedStatus]);

  return {isOpened, openModal, closeModal};
};
