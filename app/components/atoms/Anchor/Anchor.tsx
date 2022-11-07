import type { AnchorProps } from "./Anchor.types";
import { clsx } from "clsx";
import { theme } from "~/theme";
import { Link } from "@remix-run/react";
import { useMemo } from "react";

const Anchor = ({
  children,
  href,
  className,
  target = "_blank"
}: AnchorProps) => {
  const cls = useMemo(
    () => clsx(theme.midSemiBold, theme.linkHover, className),
    [className]
  );

  if (!href) return null;
  const internal = !href.includes("https://");

  return internal ? (
    <Link to={href} prefetch="intent" className={cls}>
      {children}
    </Link>
  ) : (
    <a href={href} target={target} className={cls}>
      {children}
    </a>
  );
};

export default Anchor;
