import {memo} from 'react';

import {cn} from '_utils/cn';

import {TableItemPropsType} from './types';

const Row = memo<TableItemPropsType>(function Row({children, className}) {
  return (
    <tr
      className={cn('divide-x divide-common-gray border-b border-common-gray hover:bg-common-darkest-gray', {
        [className as string]: !!className
      })}
    >
      {children}
    </tr>
  );
});
export default Row;
