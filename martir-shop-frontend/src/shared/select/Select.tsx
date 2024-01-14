import {Select as AntSelect} from 'antd';
import {memo} from 'react';

import {SelectPropsType} from './types';

const Select = memo<SelectPropsType>(function Select({isMulti, ...props}) {
  return <AntSelect {...props} mode={isMulti ? 'multiple' : undefined} />;
});

export {Select};
