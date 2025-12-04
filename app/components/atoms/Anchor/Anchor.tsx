import { cn } from '~/utils/cn';
import { useMemo } from 'react';
import { Link } from '@remix-run/react';

import { useButtonStyle } from '~/hooks/styles/useButtonStyle';
import { useLinkStyle } from '~/hooks/styles/useLinkStyle';

import type { AnchorProps } from './Anchor.types';

const Anchor = ({
  children,
  href,
  className,
  target = '_blank',
  variant = 'link',
}: AnchorProps) => {
  const buttonStyle = useButtonStyle(className);
  const linkStyle = useLinkStyle(className);
  const cls = useMemo(
    () =>
      cn({
        [linkStyle]: variant === 'link',
        [buttonStyle]: variant === 'button',
      }),
    [buttonStyle, linkStyle, variant],
  );

  if (!href) return null;
  const internal = !href.includes('https://');

  return internal ? (
    <Link to={href} prefetch="render" className={cls}>
      {children}
    </Link>
  ) : (
    <a href={href} target={target} className={cls}>
      {children}
    </a>
  );
};

export default Anchor;
