import {memo} from 'react';

import {stringParser, useQuery} from '_utils/hooks/useQuery';

import {FilterItem} from './FilterItem';
import {ALL_FILTER, FILTERS} from './consts';

const ProductFilters = memo(function ProductFilters() {
  const {values} = useQuery({filter: stringParser});

  return (
    <div className="flex w-full gap-1 overflow-auto rounded-md bg-common-darkest-gray p-1">
      <FilterItem
        label={ALL_FILTER.label}
        value={ALL_FILTER.value}
        active={!values.filter || values.filter === ALL_FILTER.value}
      />
      {FILTERS.map(filter => (
        <FilterItem
          label={filter.label}
          value={filter.value}
          key={filter.value}
          active={values.filter === filter.value}
        />
      ))}
    </div>
  );
});

export {ProductFilters};
