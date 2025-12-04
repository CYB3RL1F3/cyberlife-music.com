import { forwardRef } from 'react';
import { Link } from '@remix-run/react';
import { cn } from '~/utils/cn';

import type { LinkNavItemProps } from './LinkNavItem.types';

export const useLinkNavItemStyle = () =>
  cn(
    'h-16 leading-16 md:h-24 md:leading-24 md:leading-8 md:h-8 inline-flex items-center uppercase text-xl md:text-lg font-semibold',
    'cursor-pointer hover:text-white',
  );

const LinkNavItem = forwardRef<HTMLAnchorElement, LinkNavItemProps>(
  ({ href, label, onChange }, ref) => {
    const className = useLinkNavItemStyle();
    return (
      <Link
        ref={ref}
        prefetch="render"
        onClick={onChange}
        to={href}
        className={className}
      >
        {label}
      </Link>
    );
  },
);

LinkNavItem.displayName = 'LinkNavItem';

export default LinkNavItem;
