import type { ThumbnailProps } from "~/components/molecules/Thumbnail";

export type PictureProps = Pick<ThumbnailProps, "variant" | "src"> & {
  alt: string;
  className?: string;
};
