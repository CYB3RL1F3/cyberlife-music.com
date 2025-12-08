import { useEffect, useLayoutEffect, useRef } from 'react';
import ReactAudioPlayer from 'react-audio-player';

import type { AudioProps } from './Audio.types';
import dayjs from 'dayjs';

const Audio = ({
  url,
  duration,
  setLoad,
  seek,
  setSeek,
  volume,
  jumping,
  onEnded,
  id,
}: AudioProps) => {
  let playerRef = useRef<ReactAudioPlayer>(null);
  let element = playerRef.current?.audioEl;

  useLayoutEffect(() => {
    element = playerRef.current?.audioEl;
  }, [playerRef.current]);

  const onListen = (value: number) => {
    if (!element?.current || !duration) return;

    const loaded =
      (element.current.buffered.end(element.current.buffered.length - 1) /
        element.current.duration) *
      100;

    setLoad(loaded);

    if (jumping) {
      element.current.currentTime = ((seek / 100) * duration) / 1000;
      setSeek(seek);
    } else {
      const currentSeek = ((value * 100) / duration) * 1000;
      setSeek(currentSeek);
    }
  };

  if (!url) return null;

  return (
    <ReactAudioPlayer
      ref={playerRef}
      src={url}
      listenInterval={100}
      onListen={onListen}
      onEnded={onEnded}
      controls={false}
      autoPlay
      volume={volume / 100}
    />
  );
};

export default Audio;
