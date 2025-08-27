export function debounce<T extends (...args: any[]) => void>(
  callback: T,
  delayMs: number,
) {
  let timeoutId: number | null = null;

  const debounced = (...args: Parameters<T>) => {
    if (timeoutId !== null) {
      window.clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(() => {
      timeoutId = null;
      callback(...args);
    }, delayMs);
  };

  debounced.cancel = () => {
    if (timeoutId !== null) {
      window.clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  return debounced as T & { cancel: () => void };
}
