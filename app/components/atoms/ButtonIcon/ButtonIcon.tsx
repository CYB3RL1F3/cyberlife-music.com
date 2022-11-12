import type { ButtonIconProps } from "./ButtonIcon.types";

const ButtonIcon = ({ icon, onClick }: ButtonIconProps) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center w-8 h-8 text-white border-none outline-none cursor-pointer bg-none"
    >
      {icon}
    </button>
  );
};

export default ButtonIcon;
