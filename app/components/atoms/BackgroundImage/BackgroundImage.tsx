import { clsx } from 'clsx';

import type { BackgroundImageProps } from './BackgroundImage.types';

const BackgroundImage = ({
  src,
  children,
  className,
  backgroundType = 'bg-cover',
}: BackgroundImageProps) => {
  return (
    <div
      className={clsx('flex h-full', backgroundType, className)}
      style={{
        backgroundImage: `url("${src}")`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundImage;
