import {memo} from 'react';

import {cn} from '_utils/cn';

import {TableItemPropsType} from './types';

const Table = memo<TableItemPropsType>(function Table({children, className}) {
  return <table className={cn('table-auto', {[className as string]: !!className})}>{children}</table>;
});
export default Table;
