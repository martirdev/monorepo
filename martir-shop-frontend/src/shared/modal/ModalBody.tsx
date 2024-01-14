import {memo} from 'react';

import {ModalBodyType} from './types';

const ModalBody = memo<ModalBodyType>(function ModalBody({children}) {
  return <div>{children}</div>;
});

export {ModalBody};
