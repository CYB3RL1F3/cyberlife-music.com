import type { BackgroundProps } from "./Background.types";

const Background = ({ children }: BackgroundProps) => {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <div className="bg-main bg-cover w-screen h-screen mask absolute right-[180px]" />
      <div className="w-screen h-screen absolute">{children}</div>
    </div>
  );
};

export default Background;
