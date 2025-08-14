import FooterAnchorsInfosContainer from '~/components/organisms/FooterAnchorsInfosContainer';
import FooterAnchorsCopyrights from '~/components/organisms/FooterAnchorsCopyrights/FooterAnchorsCopyrights';
import NotificationActivationSwitch from '../NotificationActivationSwitch';

const FooterMobile = () => {
  return (
    <div className="my-4 md:hidden">
      <div className="mb-4">
        <NotificationActivationSwitch id="NotificationActivationSwitch__mobile" />
      </div>
      <div className="flex items-start justify-between px-4">
        <FooterAnchorsCopyrights />
        <FooterAnchorsInfosContainer />
      </div>
    </div>
  );
};

export default FooterMobile;
