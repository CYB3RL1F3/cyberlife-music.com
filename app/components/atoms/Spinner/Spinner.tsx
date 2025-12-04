import { cn } from '~/utils/cn';

import type { SpinnerProps } from './Spinner.types';

const Spinner = ({ variant = 'md', className }: SpinnerProps) => {
  return (
    <div
      className={cn(
        {
          ' animate-spin ease-linear border-t-neutral-300 rounded-full border-gray-600/80': true,
          'w-64 h-64 border-t-12': variant === 'xl',
          'w-48 h-48 border-t-8': variant === 'lg',
          'w-24 h-24 border-t-6': variant === 'md',
          'w-12 h-12 border-t-4': variant === 'sm',
          'w-4 h-4 border-t-2': variant === 'xs',
        },
        className,
      )}
    />
  );
};

export default Spinner;
