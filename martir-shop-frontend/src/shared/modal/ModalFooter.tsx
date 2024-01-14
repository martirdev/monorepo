import {memo} from 'react';

import {ModalBodyType} from './types';

const ModalFooter = memo<ModalBodyType>(function ModalFooter({children}) {
  return <div className="flex items-center justify-end gap-3 border-t border-common-gray pt-3">{children}</div>;
});

export {ModalFooter};
