const defaultInitial = {
  y: -70,
  opacity: 0
};

const defaultAnimate = {
  y: 0,
  opacity: 1,
  transition: {
    duration: 0.15,
    delay: 0.25
  }
};

const defaultExit = {
  y: -20,
  opacity: 0,
  transition: {
    duration: 0.1,
    delay: 0.05
  }
};

type Animation = {
  initial: typeof defaultInitial;
  animate: typeof defaultAnimate;
  exit: typeof defaultExit;
};

export const useFluidTransition = (animation?: Animation) => {
  const getTransition = (
    delay = 0.25,
    delayExit = defaultExit.transition.delay
  ) => {
    return {
      initial: animation?.initial || defaultInitial,
      animate: {
        ...(animation?.animate || defaultAnimate),
        transition: {
          ...(animation?.animate?.transition || defaultAnimate.transition),
          delay
        }
      },
      exit: {
        ...(animation?.exit || defaultExit),
        transition: {
          ...(animation?.exit?.transition || defaultExit.transition),
          delay: delayExit
        }
      }
    };
  };
  return getTransition;
};
