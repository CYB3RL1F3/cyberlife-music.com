import clsx, { ClassValue } from 'clsx';
import { ClassNameValue, twMerge } from 'tailwind-merge';

export const cn = (...values: (ClassNameValue | ClassValue)[]) => {
  return twMerge(clsx(...values));
};
