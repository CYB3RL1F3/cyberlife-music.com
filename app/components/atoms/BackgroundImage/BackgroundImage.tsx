import type { BackgroundImageProps } from "./BackgroundImage.types";
import { clsx } from "clsx";

const BackgroundImage = ({
  src,
  children,
  className,
  backgroundType = "bg-cover"
}: BackgroundImageProps) => {
  return (
    <div
      className={clsx("flex h-full", backgroundType, className)}
      style={{
        backgroundImage: `url("${src}")`
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundImage;
