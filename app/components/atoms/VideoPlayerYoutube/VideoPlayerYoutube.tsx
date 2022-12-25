import type { VideoPlayerYoutubeProps } from "./VideoPlayerYoutube.types";
import YouTubePlayer from "react-player/youtube";

const VideoPlayerYoutube = ({ url }: VideoPlayerYoutubeProps) => {
  return <YouTubePlayer url={url} controls />;
};

export default VideoPlayerYoutube;
