import VideoPlayerYoutube from "~/components/atoms/VideoPlayerYoutube";
import type { VideoPlayerProps } from "./VideoPlayer.types";

const VideoPlayer = ({ url, type }: VideoPlayerProps) => {
  if (!url) return null;
  switch (type) {
    case "youtube":
      return <VideoPlayerYoutube url={url} />;
    default:
      return null;
  }
};

export default VideoPlayer;
