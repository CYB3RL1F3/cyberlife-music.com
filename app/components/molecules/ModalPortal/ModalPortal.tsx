import Portal from "~/components/atoms/Portal";

import type { ModalPortalProps } from "./ModalPortal.types";

const ModalPortal = ({ children }: ModalPortalProps) => {
  return <Portal id={ModalPortal.Id} children={children} />;
};

const ModalPortalContainer = () => <div id={ModalPortal.Id} />;

ModalPortal.Id = "modal";

ModalPortal.Container = ModalPortalContainer;

export default ModalPortal;
