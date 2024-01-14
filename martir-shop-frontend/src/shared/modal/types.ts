import {PropsWithChildren} from 'react';

type ModalType = PropsWithChildren<{isOpen: boolean; onClose: () => void}>;

type ModalHeaderType = {title: string};

type ModalBodyType = PropsWithChildren;

export type {ModalType, ModalHeaderType, ModalBodyType};
