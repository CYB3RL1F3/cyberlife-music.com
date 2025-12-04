import type { MouseEventHandler } from 'react';
import { cn } from '~/utils/cn';

import type { CarouselControlProps } from './CarouselControl.types';

const CarouselControl = ({
  index,
  isActive,
  onChange,
  title = `carousel button ${index}`,
}: CarouselControlProps) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    onChange?.(index);
  };

  const className = cn({
    'w-8 h-8 rounded-full cursor-pointer transition-all duration-150': true,
    'bg-gray-500/50': !isActive,
    'bg-gray-500': isActive,
  });
  return <button title={title} onClick={handleClick} className={className} />;
};

export default CarouselControl;
