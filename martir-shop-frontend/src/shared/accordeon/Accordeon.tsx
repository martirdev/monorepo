import {Disclosure} from '@headlessui/react';
import {ChevronUpIcon} from '@heroicons/react/solid';
import {memo} from 'react';

import {cn} from '_utils/cn';

import {AccordeonPropsType} from './types';

const Accordeon = memo<AccordeonPropsType>(function Accordeon({title, opened, children}) {
  return (
    <div>
      <Disclosure defaultOpen={opened}>
        {({open}) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between border-y border-y-white bg-transparent py-4 text-left text-paragraph text-white focus-visible:ring-opacity-75">
              <div>{title}</div>
              <ChevronUpIcon
                className={cn('easy-in-out h-8 w-8 text-white duration-200', {
                  ['rotate-180 transform']: open
                })}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="pb-2 pt-4">{children}</Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
});

export {Accordeon};
