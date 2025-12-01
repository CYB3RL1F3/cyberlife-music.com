import Avatar from '~/components/atoms/Avatar';
import IconAvatar from '~/icons/avatar.png';

import type { AvatarUserProps } from './AvatarUser.types';

const AvatarUser = ({ avatar, userName, url }: AvatarUserProps) => {
  return (
    <a target="_blank" href={url || '#'} rel="noreferrer">
      <Avatar src={avatar || IconAvatar} alt={userName || 'Soundcloud user'} />
    </a>
  );
};

export default AvatarUser;
