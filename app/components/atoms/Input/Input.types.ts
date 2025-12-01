import type { HTMLProps, RefObject } from 'react';
import type { RefCallBack } from 'react-hook-form';

type InputBaseProps = Omit<
  HTMLProps<HTMLInputElement>,
  'value' | 'onChange' | 'ref'
>;

export type InputProps<T extends string = string> = InputBaseProps & {
  value?: T;
  onChange?: (value: T) => void;
  hasError?: boolean;
  onUnfocus?: () => void;
  ref?: RefObject<HTMLInputElement> | RefCallBack;
};
