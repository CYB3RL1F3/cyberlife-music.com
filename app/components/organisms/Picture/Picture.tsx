import Action from '~/components/atoms/Action';
import Thumbnail from '~/components/molecules/Thumbnail';
import { useImageModal } from '~/hooks/misc/useImageModal';

import type { PictureProps } from './Picture.types';

const Picture = ({ src, alt, variant }: PictureProps) => {
  const { open } = useImageModal();

  const handleOpen = () => {
    open(src);
  };

  return (
    <>
      <Thumbnail src={src} variant={variant}>
        <Action
          title={`open picture ${alt}`}
          disabled={!src}
          onClick={handleOpen}
          className="w-full h-full"
        />
      </Thumbnail>
    </>
  );
};

export default Picture;
