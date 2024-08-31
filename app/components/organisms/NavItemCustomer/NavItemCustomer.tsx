import { useLinkNavItemStyle } from "~/components/atoms/LinkNavItem/LinkNavItem";

const NavItemCustomer = () => {
  const className = useLinkNavItemStyle();
  const isAuthenticated = false;

  return (
    <div className="relative">
      <button className={className} onClick={() => console.log("Customer")}>
        {isAuthenticated ? "Customer" : "Log in"}
      </button>
    </div>
  );
};

export default NavItemCustomer;
