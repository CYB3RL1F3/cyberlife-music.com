import { cn } from '~/utils/cn';

import type { ListItemProps } from './ListItem.types';

const ListItem = ({ children, thumbnail, emphasis }: ListItemProps) => {
  const className = cn('flex w-full gap-4', {
    'bg-slate-800/60': emphasis,
  });
  return (
    <div className={className}>
      <div className="relative flex flex-auto max-md:w-1/2">{children}</div>
      {thumbnail && <div className="flex">{thumbnail}</div>}
    </div>
  );
};

export default ListItem;
