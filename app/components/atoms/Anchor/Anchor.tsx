import type { AnchorProps } from "./Anchor.types";
import { clsx } from "clsx";
import { theme } from "~/theme";
import { Link } from "@remix-run/react";
import { useMemo } from "react";
import { useButtonStyle } from "~/hooks/styles/useButtonStyle";

const Anchor = ({
  children,
  href,
  className,
  target = "_blank",
  variant = "link"
}: AnchorProps) => {
  const buttonStyle = useButtonStyle(className);
  const cls = useMemo(
    () =>
      clsx({
        [clsx("font-semibold leading-6", theme.linkHover, className)]:
          variant === "link",
        [buttonStyle]: variant === "button"
      }),
    [buttonStyle, className, variant]
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
