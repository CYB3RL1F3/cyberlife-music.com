import { createContext, useContext, useRef } from 'react';
import type { ContainerScrollPageProps } from './ContainerScrollPage.types';
import clsx from 'clsx';
import ContainerScrollContextProvider from '~/components/contexts/ContainerScrollContext';

const ContainerScrollPage = ({
  children,
  className,
}: ContainerScrollPageProps) => {
  return (
    <ContainerScrollContextProvider>
      {(ref) => (
        <section
          ref={ref}
          className={clsx(
            'mt-6 md:ml-24 lg:ml-36 xl:ml-48 h-[calc(100vh_-_6rem)] md:h-[calc(100vh_-_18rem)] md:mx-2 pr-4 flex-auto overflow-x-hidden overflow-y-scroll py-12 mask-page scroll-py-4 scrollbar scrollbar-w-1 scrollbar-thumb-gray-400 scrollbar-track-black',
            className,
          )}
        >
          {children}
        </section>
      )}
    </ContainerScrollContextProvider>
  );
};

export default ContainerScrollPage;
