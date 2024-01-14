import {memo} from 'react';

import {cn} from '_utils/cn';

import {TableItemPropsType} from './types';

const HeaderCell = memo<TableItemPropsType>(function Head({children, className}) {
  return (
    <th
      className={cn('px-6 py-5 text-left text-bold-2', {
        [className as string]: !!className
      })}
    >
      {children}
    </th>
  );
});
export default HeaderCell;
