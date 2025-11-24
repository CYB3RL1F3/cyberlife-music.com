import { createContext, type RefObject, useContext, useRef } from 'react';

export type ContainerScrollContextType = {
  scrollY: number;
  setScrollY: (value?: number, behavior?: ScrollBehavior) => void;
};

export const ContainerScrollContext = createContext<ContainerScrollContextType>(
  {
    scrollY: 0,
    setScrollY: () => {},
  },
);

export const useContainerScrollContext = () => {
  return useContext(ContainerScrollContext);
};

export type ContainerScrollContextProps = {
  children: (ref: RefObject<HTMLDivElement | null>) => React.ReactNode;
};

const ContainerScrollContextProvider = ({
  children,
}: ContainerScrollContextProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const setScrollY: ContainerScrollContextType['setScrollY'] = (
    value = 0,
    behavior = 'instant',
  ) => {
    if (ref.current) {
      ref.current.scrollTo({ top: value, behavior });
    }
  };

  return (
    <ContainerScrollContext.Provider
      value={{ scrollY: ref.current?.scrollTop || 0, setScrollY }}
    >
      {children(ref)}
    </ContainerScrollContext.Provider>
  );
};

export default ContainerScrollContextProvider;
