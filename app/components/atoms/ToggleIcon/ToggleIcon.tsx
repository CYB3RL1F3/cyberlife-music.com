import type { ToggleIconProps } from "./ToggleIcon.types";
import { clsx } from "clsx";

const ToggleIcon = ({
  active,
  activeIcon,
  inactiveIcon,
  setActive,
  className,
  value
}: ToggleIconProps) => {
  const handleChange = () => {
    setActive?.(!active);
  };
  return (
    <label className="cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        checked={active}
        value={value}
        onChange={handleChange}
      />
      <span className={clsx("text-md", className)}>
        {active ? activeIcon : inactiveIcon}
      </span>
    </label>
  );
};

export default ToggleIcon;
