import clsx from 'clsx';
import { useMemo } from 'react';

export const useLinkStyle = (className?: string) => {
  const buttonClassName = useMemo(
    () =>
      clsx(
        'font-semibold leading-6 cursor-pointer hover:text-white',
        className,
      ),
    [className],
  );
  return buttonClassName;
};
