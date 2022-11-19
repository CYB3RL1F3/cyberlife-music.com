import BackgroundImage from "~/components/atoms/BackgroundImage";
import type { ThumbnailProps } from "./Thumbnail.types";
import { clsx } from "clsx";

const Thumbnail = ({ children, src, variant = "normal" }: ThumbnailProps) => {
  return (
    <BackgroundImage
      className={clsx(
        "items-center justify-center bg-gray-700 bg-opacity-50 ",
        {
          "w-24 h-24 md:w-32 md:h-32": variant === "normal",
          "w-32 h-24 md:w-48 md:h-32": variant === "large",
          "w-32 h-32 md:w-40 md:h-40": variant === "wider"
        }
      )}
      src={src}
    >
      {children}
    </BackgroundImage>
  );
};

export default Thumbnail;
