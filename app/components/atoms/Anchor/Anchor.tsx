import type { AnchorProps } from './Anchor.types';
import { clsx } from 'clsx';
import { Link } from '@remix-run/react';
import { useMemo } from 'react';
import { useButtonStyle } from '~/hooks/styles/useButtonStyle';
import { useLinkStyle } from '~/hooks/styles/useLinkStyle';

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
      clsx({
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
