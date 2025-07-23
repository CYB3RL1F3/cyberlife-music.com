import clsx from "clsx";
import type { ButtonIconProps } from "./ButtonIcon.types";
import { twMerge } from "tailwind-merge";
import Icon from "../Icon";

const ButtonIcon = ({ icon, disabled, type = 'button', className, onClick, size = 16 }: ButtonIconProps) => {
  const style = twMerge(clsx("flex items-center justify-center w-6 h-6 px-2 text-sm bg-gray-600 bg-opacity-0 rounded-md text-bold", {
    "hover:bg-opacity-90 text-white": !disabled,
    "text-gray-400": disabled,
  }, className));
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={style}>
      <Icon icon={icon} size={size} />
    </button>
  );
};

export default ButtonIcon;
