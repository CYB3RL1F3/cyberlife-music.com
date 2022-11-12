import type { TitleProps } from "./Title.types";

const Title = ({ children, align }: TitleProps) => {
  return (
    <h1
      className={`h-8 text-white font-semibold leading-6 uppercase text-md text-${align}`}
    >
      {children}
    </h1>
  );
};

export default Title;
