import { cn } from '~/utils/cn';
import { useMemo } from 'react';

import { useButtonStyle } from '~/hooks/styles/useButtonStyle';
import { useLinkStyle } from '~/hooks/styles/useLinkStyle';

import type { ButtonProps } from './Button.types';

const Button = ({
  children,
  type = 'button',
  disabled,
  onClick,
  title,
  rightIcon,
  variant = 'button',
  className,
}: ButtonProps) => {
  const buttonStyle = useButtonStyle(className);
  const linkStyle = useLinkStyle(cn('bg-none border-none', className));
  const cls = useMemo(
    () =>
      cn({
        [linkStyle]: variant === 'link',
        [buttonStyle]: variant === 'button',
      }),
    [buttonStyle, linkStyle, variant],
  );
  return (
    <button
      className={cls}
      type={type}
      title={title}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
      {rightIcon && <span className="ml-2 min-w-4">{rightIcon}</span>}
    </button>
  );
};

export default Button;
