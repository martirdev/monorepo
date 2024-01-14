import {memo} from 'react';

import {cn} from '_utils/cn';

import {TableItemPropsType} from './types';

const Cell = memo<TableItemPropsType>(function Cell({children, className}) {
  return (
    <td
      className={cn('px-6 py-5 text-left', {
        [className as string]: !!className
      })}
    >
      {children}
    </td>
  );
});
export default Cell;
