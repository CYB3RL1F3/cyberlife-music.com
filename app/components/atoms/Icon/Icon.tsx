import { cn } from '~/utils/cn';

import type { IconProps } from "./Icon.types";

const Icon = ({ icon, size, className }: IconProps) => {
  return (
    <span
      className={cn("block", className)}
      style={{ width: size, fontSize: size }}
    >
      {icon}
    </span>
  );
};

export default Icon;
