import { useEffect, useMemo, useRef, useState } from 'react';
import useDebounceEffect from '~/hooks/misc/useDebouncedEffect';
import { usePlayerStore } from '~/hooks/stores/player/usePlayerStore';

export const usePlayerTrackVisibility = () => {
  const { currentTrack } = usePlayerStore();

  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);
  const mutationObserverRef = useRef<MutationObserver | null>(null);
  const observedElementRef = useRef<HTMLElement | null>(null);

  const [currentElement, setCurrentElement] = useState<HTMLElement | null>(
    null,
  );
  const [isVisible, setIsVisible] = useState(false);

  const playerId = useMemo(() => {
    if (!currentTrack?.id) return null;
    return `player__${currentTrack.id}`;
  }, [currentTrack?.id]);

  useEffect(() => {
    console.log('CALLED ????????');
    if (intersectionObserverRef.current) return;

    intersectionObserverRef.current = new IntersectionObserver(
      (entries) => {
        const isVisible = entries.some(({ isIntersecting }) => isIntersecting);
        setIsVisible(isVisible);
      },
      { threshold: 0.5 },
    );

    return () => {
      intersectionObserverRef.current?.disconnect();
      intersectionObserverRef.current = null;
    };
  }, []);

  const observeElement = (element: HTMLElement | null) => {
    const intersectionObserver = intersectionObserverRef.current;
    if (!intersectionObserver) return;

    if (observedElementRef.current) {
      intersectionObserver.unobserve(observedElementRef.current);
      observedElementRef.current = null;
    }

    if (element) {
      intersectionObserver.observe(element);
      observedElementRef.current = element;
    }

    if (!element) setIsVisible(false);
  };

  const findPlayerElement = () => {
    if (!playerId) return null;
    const element = document.getElementById(playerId);
    return element && document.contains(element) ? element : null;
  };

  useEffect(() => {
    console.log('CALLED çççççççç');
    if (!playerId) return;
    const element = findPlayerElement();
    setCurrentElement(element);
    observeElement(element);
  }, [playerId]);

  useDebounceEffect(
    () => {
      if (!playerId) {
        mutationObserverRef.current?.disconnect();
        return;
      }

      const root = document.getElementById('page') ?? document.body;
      const selector = `#${playerId}`;

      let frameId: number | null = null;

      const schedule = () => {
        if (frameId != null) return;
        frameId = requestAnimationFrame(() => {
          frameId = null;
          const element = findPlayerElement();
          setCurrentElement((prev) => {
            if (prev === element) return prev;
            observeElement(element);
            return element;
          });
          if (!element) setIsVisible(false);
        });
      };

      const matchesPlayer = (node: Node) =>
        node instanceof Element &&
        (node.matches(selector) || node.querySelector(selector));

      const mutationObserver = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type !== 'childList') continue;
          if (matchesPlayer(mutation.target)) {
            schedule();
            break;
          }
          for (const addedNode of mutation.addedNodes) {
            if (matchesPlayer(addedNode)) {
              schedule();
              break;
            }
          }
          for (const removedNode of mutation.removedNodes) {
            if (matchesPlayer(removedNode)) {
              schedule();
              break;
            }
          }
        }
      });

      mutationObserver.observe(root, { childList: true, subtree: true });
      mutationObserverRef.current = mutationObserver;

      const element = findPlayerElement();
      setCurrentElement(element);
      observeElement(element);

      return () => {
        mutationObserver.disconnect();
        if (mutationObserverRef.current === mutationObserver)
          mutationObserverRef.current = null;
        if (frameId != null) cancelAnimationFrame(frameId);
      };
    },
    [playerId],
    250,
  );

  const showExternalPlayer =
    !!currentTrack?.id && !(currentElement && isVisible);

  return { showExternalPlayer };
};
