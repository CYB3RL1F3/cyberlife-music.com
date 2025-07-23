import type { LinkNavItemProps } from "./LinkNavItem.types";
import { Link } from "@remix-run/react";
import { forwardRef } from "react";
import clsx from "clsx";

export const useLinkNavItemStyle = () =>
  clsx(
    "h-24 leading-24 md:leading-8 md:h-8 inline-flex items-center uppercase text-xl md:text-lg font-semibold",
    "cursor:pointer hover:text-white"
  );

const LinkNavItem = forwardRef<HTMLAnchorElement, LinkNavItemProps>(
  ({ href, label, onChange }, ref) => {
    const className = useLinkNavItemStyle();
    return (
      <Link
        ref={ref}
        prefetch="intent"
        onClick={onChange}
        to={href}
        className={className}
      >
        {label}
      </Link>
    );
  }
);

LinkNavItem.displayName = "LinkNavItem";

export default LinkNavItem;
