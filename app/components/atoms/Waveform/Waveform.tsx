import clsx from "clsx";
import { forwardRef } from "react";
import type { WaveformProps } from "./Waveform.types";

const Waveform = forwardRef<HTMLDivElement, WaveformProps>(
  ({ src, className, onClick }, ref) => {
    return (
      <div
        ref={ref}
        onClick={onClick}
        className={clsx(
          "w-full h-6 bg-lightPink transition-all duration-200 bg-contain",
          className
        )}
        style={{
          backgroundImage: `url("${src}")`,
          filter: "invert(1)"
        }}
      />
    );
  }
);

Waveform.displayName = "Waveform";

export default Waveform;
