import FooterAnchorsInfosContainer from '~/components/organisms/FooterAnchorsInfosContainer';
import FooterAnchorsCopyrights from '~/components/organisms/FooterAnchorsCopyrights/FooterAnchorsCopyrights';
import NotificationActivationSwitch from '~/components/organisms/NotificationActivationSwitch';
import clsx from 'clsx';
import { useCurrentTrackPlayer } from '~/hooks/player/useCurrentTrackPlayer';

const FooterMobile = () => {
  const { isPlaying } = useCurrentTrackPlayer();
  return (
    <div
      className={clsx('px-4 my-4 o-4 md:hidden', {
        'mb-16': isPlaying,
      })}
    >
      <NotificationActivationSwitch id="NotificationActivationSwitch__mobile" />
      <div className="flex items-start justify-between">
        <FooterAnchorsCopyrights />
        <FooterAnchorsInfosContainer />
      </div>
    </div>
  );
};

export default FooterMobile;
