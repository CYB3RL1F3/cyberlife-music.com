// app/components/VideoPlayer.tsx
import ClientOnly from '~/components/atoms/ClientOnly';
import { Suspense, lazy } from 'react';
import { VideoPlayerYoutubeProps } from './VideoPlayerYoutube.types';

const ReactPlayer = lazy(() => import('react-player'));

export const VideoPlayerYoutube = ({
  src,
  width,
  height,
  style,
}: VideoPlayerYoutubeProps) => {
  return (
    <ClientOnly fallback={null}>
      {() => (
        <Suspense fallback={null}>
          <ReactPlayer
            src={src}
            style={style}
            controls
            width={width}
            height={height}
            config={{
              youtube: {
                referrerpolicy: 'strict-origin-when-cross-origin',
                enablejsapi: 1,
                fs: 0,
              },
            }}
          />
        </Suspense>
      )}
    </ClientOnly>
  );
};

export default VideoPlayerYoutube;
