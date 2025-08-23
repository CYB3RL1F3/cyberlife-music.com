import { useEffect, useMemo, useState } from 'react';
import { useLocation } from '@remix-run/react';
import { usePlayerContext } from '~/components/contexts/PlayerContext';
import { getDomElement } from '~/utils/getDomElement';

export const usePlayerTrackVisibility = (isMobile?: boolean) => {
  const { pathname } = useLocation();
  const { setCurrentTrackContext, currentTrack } = usePlayerContext();

  useEffect(() => {
    setCurrentTrackContext(pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const isTrackInCurrentContext = useMemo(() => {
    if (!currentTrack) return false;
    if (isMobile) return currentTrack.contexts.mobile.includes(pathname);
    return currentTrack.contexts.desktop.includes(pathname);
  }, [currentTrack, isMobile, pathname]);

  const [observer, setObserver] = useState<IntersectionObserver | null>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            return;
          }
          setVisible(false);
        });
      },
      { threshold: 0.9 },
    );

    setObserver(observer);
  }, []);

  useEffect(() => {
    let element: Element | null;
    const effect = async () => {
      if (!currentTrack?.id || !isTrackInCurrentContext || !observer) return;
      element = await getDomElement(`#player__${currentTrack.id}`);
      if (!element) return;
      observer.observe(element);
    };

    effect();

    return () => {
      if (!element || !observer) return;
      observer.unobserve(element);
    };
  }, [currentTrack?.id, isTrackInCurrentContext, observer]);

  const showExternalPlayer =
    !!currentTrack && (!isTrackInCurrentContext || !isVisible);

  return {
    showExternalPlayer,
  };
};
