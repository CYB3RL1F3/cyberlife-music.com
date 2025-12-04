import { cn } from '~/utils/cn';
import { forwardRef } from 'react';

import type { WaveformProps } from './Waveform.types';

const Waveform = forwardRef<HTMLDivElement, WaveformProps>(
  ({ src, className, onClick }, ref) => {
    return (
      <div
        ref={ref}
        onClick={onClick}
        className={cn(
          'w-full h-6 bg-lightPink transition-all duration-200 bg-contain',
          className,
        )}
        style={{
          backgroundImage: `url("${src}")`,
          filter: 'invert(1)',
          backgroundSize: '100% 100%',
        }}
      />
    );
  },
);

Waveform.displayName = 'Waveform';

export default Waveform;
