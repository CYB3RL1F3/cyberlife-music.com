import Anchor from '~/components/atoms/Anchor';

import type { ButtonLinkProps } from './ButtonLink.types';

const ButtonLink = ({
  className,
  href,
  target = '_blank',
  children,
  rightIcon,
}: ButtonLinkProps) => {
  return (
    <Anchor className={className} variant="button" href={href} target={target}>
      {children}
      {rightIcon && <span className="ml-2 min-w-4">{rightIcon}</span>}
    </Anchor>
  );
};

export default ButtonLink;
