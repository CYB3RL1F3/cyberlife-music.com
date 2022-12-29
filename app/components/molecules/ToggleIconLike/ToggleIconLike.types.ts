import type { ToggleIconProps } from "~/components/atoms/ToggleIcon";

export type ToggleIconLikeProps = Pick<
  ToggleIconProps,
  "active" | "setActive" | "value"
>;
