import { Link } from '@remix-run/react';

import ShapePlay from '~/components/atoms/ShapePlay';

import type { LinkPlayProps } from './LinkPlay.types';

const LinkPlay = ({ to }: LinkPlayProps) => {
  return (
    <Link
      to={to}
      className="flex items-center justify-center w-full h-full transition-all duration-75 bg-black bg-opacity-20 hover:bg-opacity-40"
    >
      <ShapePlay />
    </Link>
  );
};

export default LinkPlay;
