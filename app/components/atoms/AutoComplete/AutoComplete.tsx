import { cn } from '~/utils/cn';
import { useCallback, useState } from 'react';

import { useKeydownEvent } from '~/hooks/events/useKeydownEvent';

import type { AutoCompleteProps } from './AutoComplete.types';

const actionValues = {
  ArrowUp: -1 as const,
  ArrowDown: 1 as const,
};

const AutoComplete = ({
  values,
  onSelect,
  autoCompleteItem,
  disabled,
  size = 'w-full',
}: AutoCompleteProps) => {
  const [hover, setHover] = useState(0);
  const isOpen = !!values.length;

  const moveTo = useCallback(
    (dy: 1 | -1) => {
      setHover((hover) => {
        if (hover + dy === values.length) {
          return 0;
        }
        if (hover + dy === -1) {
          return values.length - 1;
        }
        return hover + dy;
      });
    },
    [values.length],
  );

  const handleKeyboard = useCallback<Parameters<typeof useKeydownEvent>[0]>(
    (e: KeyboardEvent) => {
      if (disabled) return;
      if (e.key === 'Enter') {
        e.preventDefault();
        onSelect?.(values[hover]);
      }

      if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
      moveTo(actionValues[e.key]);
    },
    [disabled, hover, moveTo, onSelect, values],
  );

  useKeydownEvent(handleKeyboard);

  return (
    <div className={cn('relative', size)}>
      {isOpen && !disabled && (
        <div className="absolute flex flex-col gap-1 z-10000 w-inherit">
          {values.map((value, index) =>
            autoCompleteItem({
              value,
              isHover: hover === index,
              onClick: () => {
                onSelect?.(value);
              },
            }),
          )}
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
