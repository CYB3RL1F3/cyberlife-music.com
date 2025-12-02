import Picture from '~/components/organisms/Picture';
import type { PicturesGalleryProps } from './PicturesGallery.types';
import clsx from 'clsx';
import { useImageModalsKeyboardNavigation } from '~/hooks/misc/useImageModalsKeyboardNavigation';

const PicturesGallery = ({
  images,
  variant,
  className,
}: PicturesGalleryProps) => {
  useImageModalsKeyboardNavigation(images);

  return (
    <div
      className={clsx(
        'flex flex-wrap gap-4 justify-end min-h-24 h-auto',
        className,
      )}
    >
      {images.map((image) => (
        <Picture variant={variant} alt={image} key={image} src={image} />
      ))}
    </div>
  );
};

export default PicturesGallery;
