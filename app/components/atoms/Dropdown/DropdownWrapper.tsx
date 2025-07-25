import { useMemo, useRef, type ReactNode } from 'react';
import DropdownButton from './DropdownButton';
import clsx from 'clsx';
import { useOnClickOutside } from '~/hooks/useOnClickOutside';
import { DropdownWrapperProps } from './Dropdown.types';

const defaultDropdownButton: DropdownWrapperProps['dropdownButton'] = (
  isOpen,
  onChange,
  label = 'Dropdown',
  disabled,
) => (
  <DropdownButton
    disabled={disabled}
    className="w-full h-10"
    isOpen={isOpen}
    onClick={onChange}
  >
    {label}
  </DropdownButton>
);

const DropdownWrapper = ({
  children,
  label,
  isOpen = false,
  handleClickOutside = true,
  position = 'bottom',
  onToggle,
  disabled,
  extra,
  dropdownButton = defaultDropdownButton,
}: DropdownWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
    isOpen && handleClickOutside && onToggle?.();
  });

  const style = clsx(
    'absolute z-10 top-2 bg-gray-800 h-auto overflow-y-hidden min-w-full left-0 transition-all duration-300 ease-in-out o-2',
    isOpen ? 'max-h-96' : 'max-h-0',
    {
      'top-full': position === 'bottom',
      'bottom-14': position === 'top',
    },
  );

  const itemStyle = clsx('w-full overflow-y-auto', {
    'max-h-96': isOpen && !extra,
    'max-h-72': isOpen && extra,
    'max-h-0': !isOpen,
  });

  const extraStyle = clsx(
    'relative top-0 left-0 w-full min-h-12 h-fit',
    position === 'top' ? 'bottom-0' : 'top-0',
  );

  const items = useMemo(
    () => (
      <div className={style}>
        {isOpen && extra && <div className={extraStyle}>{extra}</div>}
        {<div className={itemStyle}>{children}</div>}
      </div>
    ),
    [isOpen, extra, style, itemStyle, children, extraStyle],
  );

  return (
    <div ref={ref} className="relative flex flex-col w-full">
      {position === 'top' && items}
      {dropdownButton(isOpen, onToggle, label, disabled)}
      {position === 'bottom' && items}
    </div>
  );
};

export default DropdownWrapper;
