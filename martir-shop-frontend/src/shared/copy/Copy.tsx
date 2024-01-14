import {DocumentDuplicateIcon} from '@heroicons/react/solid';
import {PropsWithChildren, memo, useCallback, useEffect, useState} from 'react';

import {Tooltip} from '_shared/tooltip';

const DEFAULT_LABEL = 'Скопировать';

type CopyProps = PropsWithChildren<{value?: string}>;

const Copy = memo<CopyProps>(function Link({children, value}) {
  const [copyMessage, setCopyMessage] = useState<string>(DEFAULT_LABEL);
  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value || (typeof children === 'string' ? children : ''));
      setCopyMessage('Скопированно!');
    } catch {
      setCopyMessage('Ошибка копирования');
    }
  }, [children, value]);

  const toDefault = useCallback(() => {
    setCopyMessage(DEFAULT_LABEL);
  }, [setCopyMessage]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCopyMessage(DEFAULT_LABEL);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [copyMessage]);

  return (
    <Tooltip label={copyMessage} position="top-center">
      <span
        className="inline-flex cursor-pointer items-center gap-1 text-paragraph text-primary-light visited:text-primary-dark hover:text-primary-normal"
        onClick={copyToClipboard}
        onMouseLeave={toDefault}
      >
        <span>{children}</span>
        <DocumentDuplicateIcon className="inline-block h-4 w-4" />
      </span>
    </Tooltip>
  );
});

export {Copy};
