import {memo} from 'react';

import {cn} from '_utils/cn';

import {CardPropsType} from './types';

const Card = memo<CardPropsType>(function Card({children, className}) {
  return (
    <div className="relative min-h-[200px] min-w-[440px]">
      <div className="absolute left-0 top-0 h-full w-full rounded-2xl bg-gradient-to-br from-common-white/80 to-common-white/20 mix-blend-overlay" />
      <div
        className={cn('relative px-8 py-5', {
          [className as string]: !!className
        })}
      >
        {children}
      </div>
    </div>
  );
});
export default Card;
