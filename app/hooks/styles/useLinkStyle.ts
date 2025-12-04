import { cn } from '~/utils/cn';
import { useMemo } from 'react';

export const useLinkStyle = (className?: string) => {
  const linkClassName = useMemo(
    () =>
      cn('font-semibold leading-6 cursor-pointer hover:text-white', className),
    [className],
  );
  return linkClassName;
};
