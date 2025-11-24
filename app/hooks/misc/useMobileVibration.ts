import { useCallback, useEffect, useState } from "react";

export const useMobileVibration = (canVibrate: boolean) => {
  const [vibrated, setVibrated] = useState(canVibrate);

  const vibrate = useCallback(() => {
    if (navigator.vibrate && !vibrated) {
      navigator.vibrate(300);
      setTimeout(() => {
        setVibrated(true);
      }, 10);
    }
  }, [vibrated]);

  useEffect(() => {
    if (canVibrate) {
      vibrate();
    }
  }, [canVibrate, vibrate]);
};
