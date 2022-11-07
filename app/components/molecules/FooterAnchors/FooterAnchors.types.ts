import type { ReactNode } from "react";
import type { AnchorProps } from "~/components/atoms/Anchor";

type Anchor = Omit<AnchorProps, "children"> & {
  label: ReactNode;
};

export type FooterAnchorsProps = {
  anchors: Anchor[];
};
