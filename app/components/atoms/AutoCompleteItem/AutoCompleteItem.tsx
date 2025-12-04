import { cn } from '~/utils/cn';

import type { AutoCompleteItemProps } from './AutoCompleteItem.types';

const AutoCompleteItem = ({
  value,
  isHover,
  onClick,
}: AutoCompleteItemProps) => {
  return (
    <button
      type="button"
      title={value}
      onClick={onClick}
      className={cn(
        'w-full text-left h-8 p-2 text-xs italic border-none outline-none transition-all duration-25',
        {
          ' text-gray-200 hover:bg-gray-800 hover:text-gray-400 bg-gray-600':
            !isHover,
          ' text-gray-400 bg-gray-800 text-bold': isHover,
        },
      )}
    >
      {value}
    </button>
  );
};

export default AutoCompleteItem;
