import { cn } from '~/utils/cn';

import Button from '~/components/atoms/Button';

import type { ButtonMenuProps } from './ButtonMenu.types';

const ButtonMenu = ({ isOpen, onClick }: ButtonMenuProps) => {
  const barClassName =
    'block w-6 h-1 transition-all duration-75 ease-in-out bg-gray-200';
  return (
    <Button
      title="menu"
      onClick={onClick}
      className="bg-transparent absolute rounded-sm z-20 flex flex-col items-center justify-center w-8 h-[30px] gap-1 right-2 top-2 md:hidden"
    >
      <div
        className={cn(barClassName, {
          'rotate-45 translate-y-[6px] translate-x-[1px] scale-75': isOpen,
        })}
      />
      <div
        className={cn(barClassName, {
          'h-0 opacity-0 scale-75': isOpen,
        })}
      />
      <div
        className={cn(barClassName, {
          'rotate-[135deg] scale-75 translate-x-[1px] translate-y-[-5px]':
            isOpen,
        })}
      />
    </Button>
  );
};

export default ButtonMenu;
