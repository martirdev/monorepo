import {SelectProps} from 'antd';

export type OptionType = {
  label: string;
  value: string;
};

export type SelectPropsType = Omit<SelectProps, 'options' | 'name'> & {
  isMulti?: boolean;
  options: OptionType[];
};
