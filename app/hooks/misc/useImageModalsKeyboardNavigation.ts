import { useCallback } from 'react';

import { useImageModal } from '~/hooks/misc/useImageModal';
import { useKeypressedEvent } from '~/hooks/events/useKeypressedEvent';

export const useImageModalsKeyboardNavigation = (images: string[]) => {
  const { open, image, close } = useImageModal();

  const handleMediaOpen = useCallback(
    (image: string) => {
      open(image);
    },
    [open],
  );

  const onMediaNext = useCallback(() => {
    const currentIndex = images.findIndex((i) => i === image);
    if (!image || currentIndex >= images.length - 1) return;
    const nextMedia = images[currentIndex + 1];
    handleMediaOpen(nextMedia);
  }, [image, handleMediaOpen, images]);

  const onMediaPrevious = useCallback(() => {
    const currentIndex = images.findIndex((i) => i === image);
    if (!image || currentIndex <= 0) return;
    const previousMedia = images[currentIndex - 1];
    handleMediaOpen(previousMedia);
  }, [image, handleMediaOpen, images]);

  useKeypressedEvent('ArrowRight', onMediaNext);
  useKeypressedEvent('ArrowLeft', onMediaPrevious);
  useKeypressedEvent('ArrowUp', onMediaPrevious);
  useKeypressedEvent('ArrowDown', onMediaNext);

  return {
    currentMedia: image,
    handleMediaOpen,
    handleMediaClose: close,
    onMediaNext,
    onMediaPrevious,
  };
};
