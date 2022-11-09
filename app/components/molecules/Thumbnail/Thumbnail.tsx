import BackgroundImage from "~/components/atoms/BackgroundImage";
import { useDynamicSource } from "~/hooks/useDynamicSource";
import type { ThumbnailProps } from "./Thumbnail.types";

const Thumbnail = ({ children, src }: ThumbnailProps) => {
  const backgroundImage = useDynamicSource(src, "");
  return (
    <BackgroundImage
      className="items-center justify-center w-32 h-32 "
      src={backgroundImage}
    >
      {children}
    </BackgroundImage>
  );
};

export default Thumbnail;
