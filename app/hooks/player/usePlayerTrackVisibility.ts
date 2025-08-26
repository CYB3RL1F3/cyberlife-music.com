import { usePlayerContext } from '~/components/contexts/PlayerContext';
import { useLocation } from '@remix-run/react';
import { useEffect, useMemo, useState } from 'react';
import useDebounceEffect from '../misc/useDebouncedEffect';

export const usePlayerTrackVisibility = (isMobile?: boolean) => {
  const { pathname } = useLocation();
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);
  const [isVisible, setVisible] = useState(false);

  const { setCurrentTrackContext, currentTrack } = usePlayerContext();

  useEffect(() => {
    setCurrentTrackContext(pathname);
    setVisible(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const isTrackInCurrentContext = useMemo(() => {
    if (!currentTrack) return false;
    if (isMobile) return currentTrack.contexts.mobile.includes(pathname);
    return currentTrack.contexts.desktop.includes(pathname);
  }, [currentTrack?.contexts?.desktop?.length, isMobile, pathname]);

  useEffect(() => {
    const newObserver = new IntersectionObserver(
      (entries, observer) => {
        const isElementVisible = entries.some((entry) => entry.isIntersecting);
        setVisible(isElementVisible);
      },
      { threshold: 0.6 },
    );

    setObserver(newObserver);
    return () => {
      newObserver.disconnect();
      setObserver(null);
    };
  }, [pathname]);

  function onRemoved(el: HTMLElement, callback: () => void) {
    const observer = new MutationObserver(() => {
      if (!document.contains(el)) {
        observer.disconnect();
        callback();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return observer;
  }

  useEffect(() => {
    const effect = () => {
      if (!currentTrack?.id || !observer) {
        return;
      }

      const elementId = `player__${currentTrack.id}__${pathname.replace('/', '_')}`;
      const element = document.getElementById(elementId);

      if (isTrackInCurrentContext && element) {
        observer.observe(element);
        onRemoved(element, () => {
          observer.unobserve(element);
          effect();
        });
      }

      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    };

    return effect();
  }, [currentTrack?.id, pathname, isTrackInCurrentContext, observer]);

  const showExternalPlayer =
    !!currentTrack?.id &&
    (!isTrackInCurrentContext || (isTrackInCurrentContext && !isVisible));

  return {
    showExternalPlayer,
  };
};
