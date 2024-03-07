import {ReactNode} from 'react';

export type AddNewProductSidebarType = {onClose: () => void; open: boolean};

export type SelectedOptiontype = {label: string; value: string; icon?: ReactNode}[];
