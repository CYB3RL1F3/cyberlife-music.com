import { AnimationContext } from "./AnimationContext";
import type { AnimationContextProviderProps } from "./AnimationContext.types";

const AnimationContextProvider = ({
  canAnimate,
  children
}: AnimationContextProviderProps) => {
  return (
    <AnimationContext.Provider
      value={{
        canAnimate
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationContextProvider;
