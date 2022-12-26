import type { NotSupportedPageProps } from "./NotSupportedPage.types";
import NotSupportedIe from "~/components/organisms/NotSupportedIe";
import NotSupportedTooOld from "~/components/organisms/NotSupportedTooOld";

const NotSupportedPage = ({ isIe }: NotSupportedPageProps) => {
  return isIe ? <NotSupportedIe /> : <NotSupportedTooOld />;
};

export default NotSupportedPage;
