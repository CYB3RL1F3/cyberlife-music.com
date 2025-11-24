import { VideoPlayerYoutubeProps } from '~/components/atoms/VideoPlayerYoutube';
import type { VideoQueryVideo } from '~/types/gql/VideoQuery';

export type VideoPlayerProps = Pick<VideoQueryVideo, 'url' | 'type'> &
  Omit<VideoPlayerYoutubeProps, 'src'>;

export type AbstractVideoPlayerProps = {
  isPlaying?: boolean;
};
