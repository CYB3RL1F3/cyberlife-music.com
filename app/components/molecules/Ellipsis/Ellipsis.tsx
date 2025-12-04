import { cn } from '~/utils/cn';

import type { EllipsisProps } from './Ellipsis.types';

const Ellipsis = ({ children, className }: EllipsisProps) => {
  return <p className={cn(className, 'line-clamp-2')}>{children}</p>;
};

export default Ellipsis;
