import {memo} from 'react';

import {cn} from '_utils/cn';

import {HoverIconType} from './types';

const HoverIcon = memo<HoverIconType>(function HoverIcon({className, children, ...props}) {
  return (
    <div
      {...props}
      className={cn(
        'block flex h-8 w-8 cursor-pointer select-none items-center justify-center rounded-lg p-1.5 duration-200 ease-in-out hover:bg-common-dark-gray',
        {
          [className as string]: !!className
        }
      )}
    >
      {children}
    </div>
  );
});

export {HoverIcon};
