import type { LinkNavItemProps } from "./LinkNavItem.types";
import { Link } from "@remix-run/react";
import { forwardRef } from "react";
import { theme } from "~/theme";
import clsx from "clsx";

const LinkNavItem = forwardRef<HTMLAnchorElement, LinkNavItemProps>(
  ({ href, label, onChange }, ref) => {
    return (
      <Link
        ref={ref}
        prefetch="intent"
        onClick={onChange}
        to={href}
        className={clsx(
          "h-24 leading-24 md:leading-8 md:h-8 inline-flex items-center uppercase text-xl md:text-lg font-semibold",
          theme.linkHover
        )}
      >
        {label}
      </Link>
    );
  }
);

LinkNavItem.displayName = "LinkNavItem";

export default LinkNavItem;
