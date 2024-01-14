import {FC} from 'react';

type SliderPropsType = {
  images: string[];
  duration: number;
  className?: string;
};
export type SliderType = FC<SliderPropsType>;
