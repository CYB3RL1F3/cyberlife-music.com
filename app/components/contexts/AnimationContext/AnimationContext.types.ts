import type { ReactNode } from "react";

export type AnimationContextValues = {
  canAnimate?: boolean;
};

export type AnimationContextProviderProps = AnimationContextValues & {
  children: ReactNode;
};
