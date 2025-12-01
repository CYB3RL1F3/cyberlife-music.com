import { PictureProps } from '~/components/organisms/Picture';

export type PicturesGalleryProps = {
  images: string[];
} & Pick<PictureProps, 'variant' | 'className'>;
