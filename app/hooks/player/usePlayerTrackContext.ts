import { usePlayerContext } from "~/components/contexts/PlayerContext";
import { useLocation } from "@remix-run/react";
import { useEffect, useMemo } from "react";

export const usePlayerTrackContext = (isMobile?: boolean) => {
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

  const showExternalPlayer = !!currentTrack && !isTrackInCurrentContext;
  return {
    showExternalPlayer
  };
};
