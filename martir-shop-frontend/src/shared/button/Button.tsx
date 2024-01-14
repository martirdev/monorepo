import {Button as AntButton, ButtonProps as AntButtonProps} from 'antd';
import {memo} from 'react';

import {cn} from '_utils/cn';

type ButtonProps = AntButtonProps & {theme?: 'warning' | 'success'; state?: 'normal' | 'hover' | 'disabled'};

const Button = memo<ButtonProps>(function Button({type, theme, state, ...props}) {
  return (
    <AntButton
      {...props}
      type={type || 'primary'}
      disabled={state === 'disabled'}
      className={cn(props.className ?? '', {
        'bg-warning-normal text-black': theme === 'warning',
        'bg-success-normal text-black': theme === 'success'
      })}
    />
  );
});

export {Button};
