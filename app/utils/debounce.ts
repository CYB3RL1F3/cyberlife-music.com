let dbnc = false;

export const debounce =
  (func: Function, duration: number) =>
  (...args: any[]) => {
    if (dbnc === false) {
      dbnc = true;
      func(...args);
      setTimeout(() => {
        dbnc = false;
      }, duration);
    }
  };
