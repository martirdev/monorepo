import {PropsWithChildren} from 'react';

export type AccordeonPropsType = PropsWithChildren<{
  title: string;
  opened?: boolean;
}>;
