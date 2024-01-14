import {useDebounce} from '@uidotdev/usehooks';
import {Select, SelectProps} from 'antd';
import {memo, useCallback, useMemo, useState} from 'react';

import {useGeoSuggest} from '_shared/api/geo';

type AddressSelectPropsType = {
  city: string;
} & SelectProps;

const AddressSelect = memo<AddressSelectPropsType>(function AddressSelect({city, ...props}) {
  const [search, setSearch] = useState('');
  const debounceSearch = useDebounce(search, 1000);
  const {data, isLoading} = useGeoSuggest(`г. ${city}, ${debounceSearch}`);

  const options = useMemo(
    () => data?.data.results.map(suggest => ({label: suggest.title.text, value: suggest.title.text})),
    [data?.data.results]
  );

  const clearSearch = useCallback(() => {
    setSearch('');
  }, [setSearch]);

  return (
    <Select
      loading={isLoading}
      searchValue={search}
      options={options}
      onSearch={setSearch}
      onBlur={clearSearch}
      filterOption={false}
      showSearch
      {...props}
    />
  );
});

export {AddressSelect};
