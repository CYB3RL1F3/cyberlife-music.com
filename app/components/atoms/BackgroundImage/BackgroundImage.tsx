import type { BackgroundImageProps } from "./BackgroundImage.types";
import { clsx } from "clsx";

const BackgroundImage = ({
  src,
  children,
  className
}: BackgroundImageProps) => {
  return (
    <div
      className={clsx("flex bg-cover h-full", className)}
      style={{
        backgroundImage: `url("${src}")`
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundImage;
