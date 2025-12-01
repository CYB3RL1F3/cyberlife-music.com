import { VideoPlayerYoutubeProps } from '~/components/atoms/VideoPlayerYoutube';
import type { Video } from '~/types/gql';

export type VideoPlayerProps = Pick<Video, 'url' | 'type'> &
  Omit<VideoPlayerYoutubeProps, 'src'>;

export type AbstractVideoPlayerProps = {
  isPlaying?: boolean;
};
