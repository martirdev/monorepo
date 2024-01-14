import {PropsWithChildren, memo} from 'react';

import {GridSizes} from '_shared/types';
import {cn} from '_utils/cn';

type Adaptive = {
  def?: GridSizes;
  sm?: GridSizes;
  md?: GridSizes;
  lg?: GridSizes;
};
type ContainerProps = PropsWithChildren<{
  px?: GridSizes | Adaptive;
  py?: GridSizes | Adaptive;
  width?: 'small' | 'large' | 'full-width';
  className?: string;
}>;

const Container = memo<ContainerProps>(function Container({children, px = 0, py = 0, className, width = 'full-width'}) {
  return (
    <div
      className={cn('mx-auto', {
        'px-10': px === 6 || (typeof px === 'object' && px.def === 6),
        'sm:px-10': typeof px === 'object' && px.sm === 6,
        'md:px-10': typeof px === 'object' && px.md === 6,
        'lg:px-10': typeof px === 'object' && px.lg === 6,
        'py-10': py === 6 || (typeof py === 'object' && py.def === 6),
        'sm:py-10': typeof py === 'object' && py.sm === 6,
        'md:py-10': typeof py === 'object' && py.md === 6,
        'lg:py-10': typeof py === 'object' && py.lg === 6,
        'px-8': px === 5 || (typeof px === 'object' && px.def === 5),
        'sm:px-8': typeof px === 'object' && px.sm === 5,
        'md:px-8': typeof px === 'object' && px.md === 5,
        'lg:px-8': typeof px === 'object' && px.lg === 5,
        'py-8': py === 5 || (typeof py === 'object' && py.def === 5),
        'sm:py-8': typeof py === 'object' && py.sm === 5,
        'md:py-8': typeof py === 'object' && py.md === 5,
        'lg:py-8': typeof py === 'object' && py.lg === 5,
        'px-6': px === 4 || (typeof px === 'object' && px.def === 4),
        'sm:px-6': typeof px === 'object' && px.sm === 4,
        'md:px-6': typeof px === 'object' && px.md === 4,
        'lg:px-6': typeof px === 'object' && px.lg === 4,
        'py-6': py === 4 || (typeof py === 'object' && py.def === 4),
        'sm:py-6': typeof py === 'object' && py.sm === 4,
        'md:py-6': typeof py === 'object' && py.md === 4,
        'lg:py-6': typeof py === 'object' && py.lg === 4,
        'px-4': px === 3 || (typeof px === 'object' && px.def === 3),
        'sm:px-4': typeof px === 'object' && px.sm === 3,
        'md:px-4': typeof px === 'object' && px.md === 3,
        'lg:px-4': typeof px === 'object' && px.lg === 3,
        'py-4': py === 3 || (typeof py === 'object' && py.def === 3),
        'sm:py-4': typeof py === 'object' && py.sm === 3,
        'md:py-4': typeof py === 'object' && py.md === 3,
        'lg:py-4': typeof py === 'object' && py.lg === 3,
        'px-2': px === 2 || (typeof px === 'object' && px.def === 2),
        'sm:px-2': typeof px === 'object' && px.sm === 2,
        'md:px-2': typeof px === 'object' && px.md === 2,
        'lg:px-2': typeof px === 'object' && px.lg === 2,
        'py-2': py === 2 || (typeof py === 'object' && py.def === 2),
        'sm:py-2': typeof py === 'object' && py.sm === 2,
        'md:py-2': typeof py === 'object' && py.md === 2,
        'lg:py-2': typeof py === 'object' && py.lg === 2,
        'px-1': px === 1 || (typeof px === 'object' && px.def === 1),
        'sm:px-1': typeof px === 'object' && px.sm === 1,
        'md:px-1': typeof px === 'object' && px.md === 1,
        'lg:px-1': typeof px === 'object' && px.lg === 1,
        'py-1': py === 1 || (typeof py === 'object' && py.def === 1),
        'sm:py-1': typeof py === 'object' && py.sm === 1,
        'md:py-1': typeof py === 'object' && py.md === 1,
        'lg:py-1': typeof py === 'object' && py.lg === 1,
        'max-w-[680px]': width === 'small',
        'max-w-[980px]': width === 'large',
        [className as string]: !!className
      })}
    >
      {children}
    </div>
  );
});

export {Container};
