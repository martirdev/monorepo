import {ComponentPropsWithRef, ElementType} from 'react';

export type MergeElementProps<T extends ElementType, P extends object = object> = Omit<
  ComponentPropsWithRef<T>,
  keyof P
> &
  P;

export type GridSizes = 0 | 1 | 2 | 3 | 4 | 5 | 6;
