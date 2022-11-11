import BackgroundImage from "~/components/atoms/BackgroundImage";
import type { ThumbnailProps } from "./Thumbnail.types";
import { clsx } from "clsx";

const Thumbnail = ({ children, src, variant = "normal" }: ThumbnailProps) => {
  return (
    <BackgroundImage
      className={clsx("items-center justify-center h-32 ", {
        "w-32": variant === "normal",
        "w-48": variant === "large"
      })}
      src={src}
    >
      {children}
    </BackgroundImage>
  );
};

export default Thumbnail;
