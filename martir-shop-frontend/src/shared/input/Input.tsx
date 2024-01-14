import {Input as AntInput} from 'antd';
import {memo} from 'react';

import {TextFieldPropsType} from './types';

export const Input = memo<TextFieldPropsType>(function Input({...props}) {
  return <AntInput {...props} />;
});
