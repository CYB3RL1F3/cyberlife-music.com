import VideoPlayerYoutube from '~/components/atoms/VideoPlayerYoutube';
import type { VideoPlayerProps } from './VideoPlayer.types';

const VideoPlayer = ({ url, width, height, type }: VideoPlayerProps) => {
  if (!url) return null;
  switch (type) {
    case 'youtube':
      return <VideoPlayerYoutube src={url} width={width} height={height} />;
    default:
      return null;
  }
};

export default VideoPlayer;
