import type { ImgIconProps } from "./ImgIcon.types";

const ImgIcon = ({ icon, alt, size = 30, isInverted }: ImgIconProps) => {
  return (
    <img
      src={icon}
      alt={alt}
      width={`${size}px`}
      height="auto"
      style={{
        filter: isInverted ? "invert(1)" : "invert(0)",
        width: `${size}px`,
        height: "auto"
      }}
    />
  );
};

export default ImgIcon;
