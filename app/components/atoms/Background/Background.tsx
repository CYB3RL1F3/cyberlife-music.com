import type { BackgroundProps } from "./Background.types";

const Background = ({ children }: BackgroundProps) => {
  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{ height: "100vh" }} // NoScript
    >
      <div
        className="bg-main bg-cover w-screen h-screen mask absolute right-[180px]"
        style={{ height: "100vh" }} // NoScript
      />
      <div className="absolute w-screen h-screen">{children}</div>
    </div>
  );
};

export default Background;
