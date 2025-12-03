import type { ReactNode } from 'react';

export type SecurityContextValues = {
  isBot?: boolean;
};

export type SecurityContextProviderProps = SecurityContextValues & {
  children?: ReactNode;
};
