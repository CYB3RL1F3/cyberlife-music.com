import type { ReactNode } from "react";

export type PwaContextValues = {
  registration?: ServiceWorkerRegistration | null;
};

export type PwaContextProps = {
  children: ReactNode;
};
