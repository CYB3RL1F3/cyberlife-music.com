import BackgroundImage from "~/components/atoms/BackgroundImage";
import type { ThumbnailProps } from "./Thumbnail.types";
import { clsx } from "clsx";

const Thumbnail = ({ children, src, variant = "normal" }: ThumbnailProps) => {
  return (
    <BackgroundImage
      className={clsx(
        "items-center justify-center bg-gray-700 bg-opacity-50 ",
        {
          "w-32 h-32": variant === "normal",
          "w-48 h-32": variant === "large",
          "w-40 h-40": variant === "wider"
        }
      )}
      src={src}
    >
      {children}
    </BackgroundImage>
  );
};

export default Thumbnail;
