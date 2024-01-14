import {cn} from '_utils/cn';

export const SELECT_STYLES = {
  valueContainer: () => ({}),
  control: () => ({}),
  singleValue: () => ({}),
  multiValueLabel: () => ({}),
  multiValue: () => ({}),
  indicatorSeparator: () => ({}),
  option: () => ({})
};

export const SELECT_CLASSES = {
  singleValue: () => 'pl-1.5 truncate',
  valueContainer: () => 'items-center flex flex-1 flex-wrap overflow-hidden p-0.5 gap-0.5',
  multiValue: () => 'py-1 pl-2 pr-1 flex border border-common-gray rounded gap-1 truncate',
  multiValueRemove: () => 'duration-200 ease-in-out',
  control: props =>
    cn(
      'relative flex flex-wrap border hover:border-white rounded bg-common-bg text-paragraph text-white outline-none duration-200 ease-in-out min-h-[40px]',
      {
        ['opacity-50']: props.isDisabled,
        ['border-white shadow-md shadow-primary-normal']: props.isFocused,
        ['border-common-gray shadow-none']: !props.isFocused
      }
    ),
  input: () => '!text-white',
  menu: () => '!bg-common-bg border border-common-gray',
  option: () => 'cursor-pointer p-2 hover:bg-common-dark-gray'
};
