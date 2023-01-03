import type { ImgIconProps } from "./ImgIcon.types";

const ImgIcon = ({ icon, alt, size = 30, isInverted }: ImgIconProps) => {
  return (
    <img
      src={icon}
      alt={alt}
      width={size}
      height={size}
      style={{
        filter: isInverted ? "invert(1)" : "invert(0)",
        width: `${size}px`,
        height: "auto"
      }}
    />
  );
};

export default ImgIcon;
