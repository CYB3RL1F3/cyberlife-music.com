import clsx from "clsx";

import type { IconProps } from "./Icon.types";

const Icon = ({ icon, size, className }: IconProps) => {
  return (
    <span
      className={clsx("block", className)}
      style={{ width: size, fontSize: size }}
    >
      {icon}
    </span>
  );
};

export default Icon;
