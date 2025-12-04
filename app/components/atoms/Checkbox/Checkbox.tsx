import { cn } from '~/utils/cn';
import type { ReactEventHandler } from 'react';
import { FaCheck } from 'react-icons/fa6';

import Icon from '~/components/atoms/Icon';

import type { CheckboxProps } from './Checkbox.types';

const Checkbox = ({ value, className, onChange, id }: CheckboxProps) => {
  const style = cn(
    'cursor-pointer border-none inline-flex items-center transition-all duration-200',
    {
      'bg-gray-500 text-white': value,
      'bg-gray-200 text-gray-500': !value,
    },
  );

  const handleChange: ReactEventHandler<HTMLInputElement> = (e) => {
    const checked = e.currentTarget.checked;
    onChange?.(checked);
  };

  return (
    <label
      htmlFor={id}
      className={cn('flex items-center cursor-pointer', className)}
    >
      <input
        type="checkbox"
        className="hidden"
        checked={value}
        onChange={handleChange}
        id={id}
      />
      <span
        className={cn(
          style,
          'w-4 h-4 flex justify-center items-center rounded-xs',
        )}
      >
        {value && <Icon icon={<FaCheck className="text-white" />} size={12} />}
      </span>
    </label>
  );
};

export default Checkbox;
