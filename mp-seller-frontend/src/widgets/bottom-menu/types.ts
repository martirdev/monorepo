import {FC} from 'react';

export type BottomMenuPropsType = FC<{selectedRowKeys: Array<string>; onCancel: () => void}>;

export type ItemsType = {label: JSX.Element; key: string; title: string}[];
