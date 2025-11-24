import { useLocation, useMatches } from '@remix-run/react';
import { useEffect, useRef } from 'react';

export const useRemixNavigationPostMessage = (
  location: ReturnType<typeof useLocation>,
) => {
  const isMount = useRef(true);
  const matches = useMatches();

  useEffect(() => {
    let mounted = isMount?.current;
    isMount.current = false;
    if (!('serviceWorker' in navigator)) {
      return;
    }
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller?.postMessage({
        type: 'REMIX_NAVIGATION',
        isMount: mounted,
        location,
        matches,
        manifest: window.__remixManifest,
      });
    } else {
      let listener = async () => {
        await navigator.serviceWorker.ready;
        navigator.serviceWorker.controller?.postMessage({
          type: 'REMIX_NAVIGATION',
          isMount: mounted,
          location,
          matches,
          manifest: window.__remixManifest,
        });
      };
      navigator.serviceWorker.addEventListener('controllerchange', listener);
      return () => {
        navigator.serviceWorker.removeEventListener(
          'controllerchange',
          listener,
        );
      };
    }
  }, [location, matches]);
};
