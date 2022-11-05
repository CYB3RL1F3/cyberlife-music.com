import type { NavItemProps } from "./NavItem.types";
import { Link } from "@remix-run/react";
import { forwardRef } from "react";

const NavItem = forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ href, label }, ref) => {
    return (
      <Link
        ref={ref}
        prefetch="intent"
        to={href}
        className={
          "h-8 inline-flex items-center uppercase text-lg font-semibold hover:text-white"
        }
      >
        {label}
      </Link>
    );
  }
);

NavItem.displayName = "NavItem";

export default NavItem;
