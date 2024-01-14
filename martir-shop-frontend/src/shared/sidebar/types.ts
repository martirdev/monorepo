import {PropsWithChildren} from 'react';

export type SidebarType = PropsWithChildren<{isOpen: boolean; onClose: () => void; footer?: React.ReactNode}>;
