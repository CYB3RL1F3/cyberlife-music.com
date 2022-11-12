import Portal from "~/components/atoms/Portal";

import type { PageDetailHeaderPortalProps } from "./PageDetailHeaderPortal.types";

const PageDetailHeaderPortal = ({ children }: PageDetailHeaderPortalProps) => {
  return <Portal id={PageDetailHeaderPortal.Id} children={children} />;
};

const PageDetailHeaderPortalContainer = () => (
  <div id={PageDetailHeaderPortal.Id} />
);

PageDetailHeaderPortal.Id = "pageDetailHeaderPortal";

PageDetailHeaderPortal.Container = PageDetailHeaderPortalContainer;

export default PageDetailHeaderPortal;
