import { usePlayerContext } from "~/components/contexts/PlayerContext";
import { useLocation } from "@remix-run/react";
import { useEffect, useMemo } from "react";

export const usePlayerTrackContext = () => {
  const { pathname } = useLocation();
  const { setCurrentTrackContext, currentTrack } = usePlayerContext();

  useEffect(() => {
    setCurrentTrackContext(pathname);
  }, [pathname]);

  const isTrackInCurrentContext = useMemo(() => {
    return currentTrack && currentTrack.contexts.includes(pathname);
  }, [currentTrack, pathname]);

  const showExternalPlayer = !!currentTrack && !isTrackInCurrentContext;
  return {
    showExternalPlayer
  };
};
