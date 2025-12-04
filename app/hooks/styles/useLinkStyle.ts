import { cn } from '~/utils/cn';
import { useMemo } from 'react';

export const useLinkStyle = (className?: string) => {
  const buttonClassName = useMemo(
    () =>
      cn(
        'font-semibold leading-6 cursor-pointer hover:text-white',
        className,
      ),
    [className],
  );
  return buttonClassName;
};
