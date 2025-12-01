import Heading from '~/components/atoms/Heading';

import type { ListSeparatorProps } from './ListSeparator.types';

const ListSeparator = ({ children }: ListSeparatorProps) => {
  return (
    <div>
      <div className="flex items-center justify-end w-full gap-4 pt-4 flex-end">
        <Heading variant="italic">{children}</Heading>
      </div>
    </div>
  );
};

export default ListSeparator;
