import { clsx } from 'clsx';

import type { SpinnerProps } from './Spinner.types';

const Spinner = ({ variant = 'md' }: SpinnerProps) => {
  return (
    <div
      className={clsx({
        ' animate-spin ease-linear border-t-neutral-300 rounded-full border-8 border-t-8 border-gray-800': true,
        'w-64 h-64': variant === 'xl',
        'w-48 h-48': variant === 'lg',
        'w-24 h-24': variant === 'md',
        'w-12 h-12': variant === 'sm',
        'w-4 h-4': variant === 'xs',
      })}
    />
  );
};

export default Spinner;
