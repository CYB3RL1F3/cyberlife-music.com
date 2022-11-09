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
          // "-webkit-mask-image": `url("${src}")`,
          // "-webkit-mask-size": "100% 1.5rem",
          // "mask-type": "alpha"
        }}
      />
    );
  }
);

Waveform.displayName = "Waveform";

export default Waveform;
