import type { TextProps } from "./Text.types";

const Text = ({ children, size = "sm" }: TextProps) => {
  return (
    <p className={`pr-2 m-0 text-${size} italic text-right text-gray-400 p-O`}>
      {children}
    </p>
  );
};

export default Text;
