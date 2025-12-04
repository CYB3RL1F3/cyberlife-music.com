import { cn } from '~/utils/cn';

import type { InlineListItemProps } from './InlineListItem.types';

const InlineListItem = ({
  children,
  className,
  index,
}: InlineListItemProps) => {
  return (
    <li
      className={cn(
        'inline-flex h-full items-center',
        {
          "md:before:content-['-'] md:before:w-4 md:before:text-center":
            index > 0,
        },
        className,
      )}
    >
      {children}
    </li>
  );
};

export default InlineListItem;
