import type { ReactNode } from 'react';

export type ApplicationOutletProps = {
  children?: ReactNode;
};

export type ApplicationTransitionOutletProps = {
  children: ReactNode;
  pathKey: string;
};
