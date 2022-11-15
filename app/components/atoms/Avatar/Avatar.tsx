import type { AvatarProps } from "./Avatar.types";
import { useDynamicSource } from "~/hooks/useDynamicSource";

const Avatar = ({ src, alt }: AvatarProps) => {
  const placeholder =
    "https://www.belin.re/wp-content/uploads/2018/11/default-avatar-600x600.png";
  const img = useDynamicSource(src, placeholder);
  return (
    <img
      src={img}
      alt={alt}
      className="w-8 h-8 border-2 border-gray-400 rounded-full"
    />
  );
};

export default Avatar;
