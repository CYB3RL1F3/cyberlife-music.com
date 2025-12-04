import { cn } from '~/utils/cn';

import NavIndicatorContainer from '~/components/organisms/NavIndicatorContainer';
import ClientOnly from '~/components/atoms/ClientOnly';

import type { NavProps } from './Nav.types';

const Nav = ({ routes, children, isOpen }: NavProps) => {
  return (
    <nav
      className={cn(
        'top-0 z-30 w-full h-[100vh] p-12 mt-12 bg-gray-800/70 md:mt-0 max-md:backdrop-blur-md md:p-0 md:bg-transparent max-md:absolute md:h-auto md:w-auto md:flex md:flex-col md:flex-end transition-all duration-75 ease-in-out',
        {
          'translate-x-full md:translate-x-0': !isOpen,
        },
      )}
    >
      {children}
      <ClientOnly>{() => <NavIndicatorContainer routes={routes} />}</ClientOnly>
    </nav>
  );
};

export default Nav;
