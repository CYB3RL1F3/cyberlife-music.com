// app/components/VideoPlayer.tsx
import { Suspense, lazy, useRef } from 'react';

import ClientOnly from '~/components/atoms/ClientOnly';

import { VideoPlayerYoutubeProps } from './VideoPlayerYoutube.types';

const ReactPlayer = lazy(() => import('react-player'));

export const VideoPlayerYoutube = ({
  src,
  width,
  height,
  style,
}: VideoPlayerYoutubeProps) => {
  const ref = useRef<HTMLVideoElement>(null);
  return (
    <ClientOnly fallback={null}>
      {() => (
        <Suspense fallback={null}>
          <ReactPlayer
            controls
            src={src}
            ref={ref}
            style={style}
            width={width}
            playIcon={null}
            height={height}
            config={{
              youtube: {
                enablejsapi: 1,
                fs: 0,
                rel: 0,
                iv_load_policy: 3,
                color: 'white',
              },
            }}
          />
        </Suspense>
      )}
    </ClientOnly>
  );
};

export default VideoPlayerYoutube;
