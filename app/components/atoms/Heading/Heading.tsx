import type { HeadingProps } from "./Heading.types";

const Heading = ({ children, align }: HeadingProps) => {
  return (
    <h1
      className={`h-8 text-gray-400 font-semibold leading-6 uppercase inline-flex items-center justify-end text-md text-${align}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
