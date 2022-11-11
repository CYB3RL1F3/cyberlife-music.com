import type { LabelErrorProps } from "./LabelError.types";

const LabelError = ({ children }: LabelErrorProps) => {
  return (
    <p className="h-4 px-0 mx-0 my-1 text-xs italic text-red-600 leading-thin">
      {children}
    </p>
  );
};

export default LabelError;
