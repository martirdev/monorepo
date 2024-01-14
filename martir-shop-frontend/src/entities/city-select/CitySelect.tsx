import {Select, SelectProps} from 'antd';
import {memo} from 'react';

import {CITIES_OPTIONS} from '_shared/consts';

const CitySelect = memo<SelectProps>(function CitySelect({...props}) {
  return <Select options={CITIES_OPTIONS} optionFilterProp="label" showSearch {...props} />;
});

export {CitySelect};
