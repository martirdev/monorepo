import {memo} from 'react';

import {cn} from '_utils/cn';

import {TableItemPropsType} from './types';

const Body = memo<TableItemPropsType>(function Body({children, className}) {
  return (
    <tbody
      className={cn(' ', {
        [className as string]: !!className
      })}
    >
      {children}
    </tbody>
  );
});
export default Body;
