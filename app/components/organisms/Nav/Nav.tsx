import NavContextProvider from "~/components/contexts/NavContext";
import type { NavProps } from "./Nav.types";
import NavIndicatorContainer from "~/components/organisms/LinkNavIndicatorContainer";

const Nav = ({ routes, children }: NavProps) => {
  return (
    <NavContextProvider routes={routes}>
      <nav className="flex-end flex flex-col">
        {children}
        <NavIndicatorContainer />
      </nav>
    </NavContextProvider>
  );
};

export default Nav;
