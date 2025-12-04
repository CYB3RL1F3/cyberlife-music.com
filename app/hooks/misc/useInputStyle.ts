import { cn } from '~/utils/cn';

import { useToggleState } from './useToggleState';

export const useInputStyle = (hasError?: boolean, customClassName?: string) => {
  const [isFocus, onFocus, onBlur] = useToggleState(false);

  const className = cn(
    'w-full rounded italic text-sm p-2 text-gray-400 placeholder-gray-500 leading-4 flex items-center border-none bg-opacity-80 outline-none transition-all duration-50',
    {
      'bg-gray-700': !isFocus && !hasError,
      'bg-gray-800': isFocus,
      'bg-red-900 bg-opacity-70 text-gray-300': !isFocus && hasError,
    },
    customClassName,
  );
  return {
    className,
    onFocus,
    onBlur,
  };
};
