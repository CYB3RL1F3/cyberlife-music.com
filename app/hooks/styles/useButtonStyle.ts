import { useMemo } from 'react';

import { cn } from '~/utils/cn';

export const useButtonStyle = (className?: string) => {
  const buttonClassName = useMemo(
    () =>
      cn(
        'transition-all text-nowrap duration-50 italic h-10 px-4 text-md py-2 px-4 text-gray-400 rounded hover:text-gray-200 leading-4 flex items-center border-none bg-gray-600 bg-opacity-80 hover:bg-opacity-90 cursor-pointer outline-none',
        className,
      ),
    [className],
  );
  return buttonClassName;
};
