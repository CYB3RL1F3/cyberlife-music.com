import { twMerge } from 'tailwind-merge';
import type { LabelProps } from './Label.types';

const Label = ({ children, className, icon }: LabelProps) => {
  return (
    <div
      className={twMerge(
        'flex items-center w-full gap-4 text-left text-gray-100 text-md',
        className,
      )}
    >
      {icon} {children}
    </div>
  );
};

export default Label;
