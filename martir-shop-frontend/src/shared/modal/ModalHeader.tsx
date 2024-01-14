import {Dialog} from '@headlessui/react';
import {memo} from 'react';

import {ModalHeaderType} from './types';

const ModalHeader = memo<ModalHeaderType>(function ModalHeader({title}) {
  return (
    <div className="border-b border-common-gray">
      <Dialog.Title as="h3" className="pb-3 text-paragraph-2">
        {title}
      </Dialog.Title>
    </div>
  );
});

export {ModalHeader};
