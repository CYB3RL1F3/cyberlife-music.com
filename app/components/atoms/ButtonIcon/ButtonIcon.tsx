import Icon from '~/components/atoms/Icon';
import { cn } from '~/utils/cn';
import type { ButtonIconProps } from './ButtonIcon.types';

const ButtonIcon = ({
  icon,
  disabled,
  type = 'button',
  className,
  onClick,
  size = 16,
}: ButtonIconProps) => {
  const style = cn(
    'flex items-center justify-center w-6 h-6 px-2 text-sm bg-transparent rounded-md text-bold',
    {
      'hover:bg-gray-600/90 text-white': !disabled,
      'text-gray-400': disabled,
    },
    className,
  );
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={style}>
      <Icon icon={icon} size={size} />
    </button>
  );
};

export default ButtonIcon;
