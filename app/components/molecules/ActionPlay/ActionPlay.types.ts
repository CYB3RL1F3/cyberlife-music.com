import type { ActionProps } from "~/components/atoms/Action";

export type ActionPlayProps = Pick<ActionProps, "title"> & {
  isPlaying?: boolean;
  onChange?: (playing: ActionPlayProps["isPlaying"]) => void;
};
