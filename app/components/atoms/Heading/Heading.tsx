import clsx from 'clsx';
import type { HeadingProps } from './Heading.types';

const Heading = ({ children, variant, className }: HeadingProps) => {
  const cls = clsx(
    'text-sm font-semibold text-right uppercase md:text-md cursor-pointer hover:text-white line-clamp-1',
    {
      italic: variant === 'italic',
    },
    className,
  );
  return <h1 className={cls}>{children}</h1>;
};

export default Heading;
