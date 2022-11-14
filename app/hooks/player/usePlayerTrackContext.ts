import { usePlayerContext } from "~/components/contexts/PlayerContext";
import { useLocation } from "@remix-run/react";
import { useEffect, useMemo } from "react";

export const usePlayerTrackContext = () => {
  const { pathname } = useLocation();
  const { setCurrentTrackContext, currentTrack } = usePlayerContext();

  useEffect(() => {
    setCurrentTrackContext(pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  console.log("CURR >>> ", pathname, currentTrack?.contexts);

  const isTrackInCurrentContext = useMemo(() => {
    return currentTrack && currentTrack.contexts.includes(pathname);
  }, [currentTrack, pathname]);

  const showExternalPlayer = !!currentTrack && !isTrackInCurrentContext;
  return {
    showExternalPlayer
  };
};
