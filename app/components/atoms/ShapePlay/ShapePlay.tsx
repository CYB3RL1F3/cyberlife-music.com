import clsx from 'clsx';

import type { ShapePlayProps } from './ShapePlay.types';

const ShapePlay = ({ isPlaying }: ShapePlayProps) => {
  const className = clsx({
    'w-6 h-6 border-solid border-0 border-gray-100 opacity-60 transition-all duration-250': true,
    'border-l-8 border-t-transparent border-b-transparent border-t-transparent border-r-8 border-b-0 ml-0: playing':
      isPlaying,
    'border-y-[14px] border-x-[22px] border-y-transparent w-0 border-r-0':
      !isPlaying,
  });
  return <div className={className} />;
};

export default ShapePlay;
