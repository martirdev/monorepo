import {PropsWithChildren, memo} from 'react';

import {cn} from '_utils/cn';

type TooltipProps = PropsWithChildren<{
  label: string;
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'center-left'
    | 'center-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
}>;

const Tooltip = memo<TooltipProps>(function Link({children, label, position = 'top-center'}) {
  return (
    <span className="group relative">
      <span>{children}</span>
      {label && (
        <span
          className={cn(
            'pointer-events-none absolute bg-common-darkest-gray/80 px-2 py-1 text-small opacity-0 group-hover:opacity-100',
            {
              ['bottom-full right-full mb-1 mr-1']: position === 'top-left',
              ['bottom-full left-1/2 mb-1 -translate-x-1/2']: position === 'top-center',
              ['bottom-full left-full mb-1 ml-1']: position === 'top-right',
              ['bottom-1/2 right-full mr-1 translate-y-1/2']: position === 'center-left',
              ['bottom-1/2 left-full ml-1 translate-y-1/2']: position === 'center-right',
              ['right-full top-full mr-1 mt-1']: position === 'bottom-left',
              ['left-1/2 top-full mt-1 -translate-x-1/2']: position === 'bottom-center',
              ['left-full top-full ml-1 mt-1']: position === 'bottom-right'
            }
          )}
        >
          {label}
        </span>
      )}
    </span>
  );
});

export {Tooltip};
