import { useCallback, useState } from "react";

export const useToggleState = (defaultState = false) => {
  const [state, setState] = useState(defaultState);

  const setTrue = useCallback(() => {
    setState(true);
  }, []);

  const setFalse = useCallback(() => {
    setState(false);
  }, []);

  return [state, setTrue, setFalse] as const;
};
