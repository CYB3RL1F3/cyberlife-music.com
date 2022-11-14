import type { TextProps } from "./Text.types";

const Text = ({ children, size = "sm", align = "right" }: TextProps) => {
  return (
    <p
      className={`pr-2 m-0 text-${size} italic text-${align} text-gray-400 p-O`}
    >
      {children}
    </p>
  );
};

export default Text;
