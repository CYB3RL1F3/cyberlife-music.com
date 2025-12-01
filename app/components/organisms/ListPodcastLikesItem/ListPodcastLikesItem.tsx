import AvatarUser from '~/components/molecules/AvatarUser';

import type { ListPodcastLikesItemProps } from './ListPodcastLikesItem.types';

const ListPodcastLikesItem = ({ like }: ListPodcastLikesItemProps) => {
  return (
    <AvatarUser
      url={like.soundcloud || '#'}
      avatar={like.avatar}
      userName={like.userName}
    />
  );
};

export default ListPodcastLikesItem;
