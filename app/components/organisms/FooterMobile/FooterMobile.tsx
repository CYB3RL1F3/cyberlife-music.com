import FooterAnchorsInfosContainer from "~/components/organisms/FooterAnchorsInfosContainer";
import FooterAnchorsCopyrights from "~/components/organisms/FooterAnchorsCopyrights/FooterAnchorsCopyrights";
import NotificationActivationSwitch from "../NotificationActivationSwitch";

const FooterMobile = () => {
  return (
    <div className="mt-4 md:hidden">
      <NotificationActivationSwitch />
      <FooterAnchorsCopyrights />
      <FooterAnchorsInfosContainer />
    </div>
  );
};

export default FooterMobile;
