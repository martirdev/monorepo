import {LeftOutlined, RightOutlined} from '@ant-design/icons';
import {useEffect, useMemo, useRef, useState} from 'react';

import {cn} from '_utils/cn';

import {SliderType} from './types';

const Slider: SliderType = ({images, duration, className}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  const left = useMemo(
    () => (sliderRef.current?.querySelectorAll('.slider')[currentIndex] as HTMLDivElement)?.offsetLeft || 0,
    [currentIndex]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, images, currentIndex]);

  const handlePrevClick = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex w-full flex-col gap-4 overflow-hidden px-4">
      <div
        className={cn('flex h-[500px] gap-2 transition-transform duration-500 ease-in-out', {
          [className as string]: !!className
        })}
        ref={sliderRef}
        style={{transform: `translateX(-${left || 0}px)`}}
      >
        {images.map((image, index) => (
          <div key={index} className="slider h-full flex-shrink-0">
            <img src={image} alt={`Image ${index}`} className="h-full" />
          </div>
        ))}
      </div>
      <div className="hidden gap-6 lg:flex">
        <LeftOutlined
          alt="back"
          className="select-none duration-100 ease-in-out hover:text-white"
          onClick={handlePrevClick}
          rev={undefined}
        />
        <div className="flex w-16 justify-center text-paragraph-2">
          {currentIndex + 1} / {images.length}
        </div>
        <RightOutlined
          alt="forward"
          className="select-none duration-100 ease-in-out hover:text-white"
          onClick={handleNextClick}
          rev={undefined}
        />
      </div>
    </div>
  );
};

export default Slider;
