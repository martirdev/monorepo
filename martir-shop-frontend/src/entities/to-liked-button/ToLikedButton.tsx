import {HeartFilled, HeartOutlined} from '@ant-design/icons';
import {ButtonProps as AntButtonProps} from 'antd';
import {xor} from 'lodash';
import {memo, useCallback, useMemo} from 'react';

import {Button} from '_shared/button';
import {useLikedList} from '_utils/hooks/useLikedList';

type ToLikedButtonPropsType = AntButtonProps & {
  entity: string;
};

const ToLikedButton = memo<ToLikedButtonPropsType>(function ToLikedButton({entity, ...props}) {
  const [liked, setLiked] = useLikedList();
  const addEntityToLiked = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      setLiked(prev => xor(prev, [entity]));
    },
    [entity, setLiked]
  );

  const cartSet = useMemo(() => new Set(liked), [liked]);

  return (
    <Button
      {...props}
      onClick={addEntityToLiked}
      type="default"
      icon={cartSet.has(entity) ? <HeartFilled rev={undefined} /> : <HeartOutlined rev={undefined} />}
      size={props.size || 'large'}
    />
  );
});

export {ToLikedButton};
