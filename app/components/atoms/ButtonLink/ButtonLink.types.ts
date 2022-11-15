import type { AnchorProps } from "../Anchor";
import type { ButtonProps } from "../Button/Button.types";

export type ButtonLinkProps = Pick<
  AnchorProps,
  "children" | "href" | "target" | "className"
> &
  Pick<ButtonProps, "rightIcon">;
