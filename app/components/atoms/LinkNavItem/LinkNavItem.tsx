import type { LinkNavItemProps } from "./LinkNavItem.types";
import { Link } from "@remix-run/react";
import { forwardRef } from "react";
import { theme } from "~/theme";
import clsx from "clsx";

const LinkNavItem = forwardRef<HTMLAnchorElement, LinkNavItemProps>(
  ({ href, label }, ref) => {
    return (
      <Link
        ref={ref}
        prefetch="intent"
        to={href}
        className={clsx(theme.largeSemiBoldUppercase, theme.linkHover)}
      >
        {label}
      </Link>
    );
  }
);

LinkNavItem.displayName = "LinkNavItem";

export default LinkNavItem;
