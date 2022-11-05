import NavContextProvider from "~/components/contexts/Nav";
import type { NavProps } from "./Nav.types";
import NavIndicatorContainer from "../NavIndicatorContainer";

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
