import {memo, useCallback} from 'react';

import {cn} from '_utils/cn';
import {useQuery} from '_utils/hooks/useQuery';

type FilterItemPropsType = {
  active: boolean;
  value: string;
  label: string;
};

const FilterItem = memo(function FilterItem({active, value, label}: FilterItemPropsType) {
  const {mergeParams} = useQuery({});

  const handleAddValueToQuery = useCallback(() => {
    mergeParams({filter: value});
  }, [value, mergeParams]);

  return (
    <div
      className={cn(
        'cursor-pointer whitespace-nowrap rounded px-5 py-3 text-small font-bold text-white duration-200 ease-in-out hover:bg-common-dark-gray',
        {
          'bg-danger-normal hover:bg-danger-light': active
        }
      )}
      onClick={handleAddValueToQuery}
    >
      {label}
    </div>
  );
});

export {FilterItem};
