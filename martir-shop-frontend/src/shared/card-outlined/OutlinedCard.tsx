import {PropsWithChildren, memo} from 'react';

import {cn} from '_utils/cn';

type OutlinedCardPropsType = PropsWithChildren<{className: string}>;

const OutlinedCard = memo<OutlinedCardPropsType>(function OutlinedCard({children, className}) {
  return (
    <div
      className={cn('rounded-lg border border-common-light-gray p-2 hover:cursor-pointer hover:border-common-white', {
        [className]: !!className
      })}
    >
      {children}
    </div>
  );
});

export {OutlinedCard};
