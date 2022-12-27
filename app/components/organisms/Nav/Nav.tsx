import NavContextProvider from "~/components/contexts/NavContext";
import type { NavProps } from "./Nav.types";
import NavIndicatorContainer from "~/components/organisms/NavIndicatorContainer";
import clsx from "clsx";
import ClientOnly from "~/components/atoms/ClientOnly";

const Nav = ({ routes, children, isOpen }: NavProps) => {
  return (
    <NavContextProvider routes={routes}>
      <nav
        className={clsx(
          "top-0 z-30 w-full h-screen p-12 mt-12 bg-gray-800 md:mt-0 max-md:backdrop-blur-md md:p-0 bg-opacity-70 md:bg-transparent max-md:absolute md:h-auto md:w-auto md:flex md:flex-col md:flex-end transition-all duration-75 ease-in-out",
          {
            "translate-x-full md:translate-x-0": !isOpen
          }
        )}
      >
        {children}
        <ClientOnly>{() => <NavIndicatorContainer />}</ClientOnly>
      </nav>
    </NavContextProvider>
  );
};

export default Nav;
