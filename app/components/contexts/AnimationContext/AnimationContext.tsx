import { createContext } from "react";
import type { AnimationContextValues } from "./AnimationContext.types";

export const AnimationContext = createContext<AnimationContextValues>({
  canAnimate: false
});

export default AnimationContext;
