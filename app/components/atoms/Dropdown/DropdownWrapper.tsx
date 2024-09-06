import { useRef, type ReactNode } from 'react';
import DropdownButton from './DropdownButton';
import clsx from 'clsx';
import { useOnClickOutside } from '~/hooks/useOnClickOutside';
import { DropdownWrapperProps } from './Dropdown.types';

const DropdownWrapper = ({
  children,
  label,
  isOpen = false,
  handleClickOutside = true,
  position = 'bottom',
  onToggle,
  disabled,
  dropdownButton = (isOpen, onChange, label, disabled) => (
    <DropdownButton
      disabled={disabled}
      className="w-full h-10 "
      isOpen={isOpen}
      onClick={onChange}
    >
      {label || 'Dropdown'}
    </DropdownButton>
  ),
}: DropdownWrapperProps) => {
  const style = clsx(
    'absolute z-10 h-auto min-w-full left-0 rounded-xl shadow-lg overflow-y-auto transition-all duration-300 ease-in-out',
    isOpen ? 'max-h-96' : 'max-h-0',
    {
      'top-full': position === 'bottom',
      'bottom-14': position === 'top',
    },
  );

  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
    isOpen && handleClickOutside && onToggle?.();
  });

  return (
    <div ref={ref} className="relative flex flex-col w-full">
      {position === 'top' && <div className={style}>{children}</div>}
      {dropdownButton(isOpen, onToggle, label, disabled)}
      {position === 'bottom' && <div className={style}>{children}</div>}
    </div>
  );
};

export default DropdownWrapper;
