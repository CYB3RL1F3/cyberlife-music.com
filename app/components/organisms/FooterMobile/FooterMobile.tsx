import FooterAnchorsInfosContainer from '~/components/organisms/FooterAnchorsInfosContainer';
import FooterAnchorsCopyrights from '~/components/organisms/FooterAnchorsCopyrights/FooterAnchorsCopyrights';
import NotificationActivationSwitch from '../NotificationActivationSwitch';

const FooterMobile = () => {
  return (
    <div className="px-4 mt-4 mb-12 o-4 md:hidden">
      <NotificationActivationSwitch id="NotificationActivationSwitch__mobile" />
      <div className="flex items-start justify-between">
        <FooterAnchorsCopyrights />
        <FooterAnchorsInfosContainer />
      </div>
    </div>
  );
};

export default FooterMobile;
