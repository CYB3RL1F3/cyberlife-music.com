import { ReactNode } from 'react';

export type CrashBoundaryProps = {
  children: ReactNode;
  onError?: (error: unknown, info: React.ErrorInfo) => void;
};

export type CrashBoundaryState = {
  hasError: boolean;
};
