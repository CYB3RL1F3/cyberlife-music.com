import ListPodcastLikes from '~/components/organisms/ListPodcastLikes';
import WrapperListings from '~/components/molecules/WrapperListings';
import { isCyberlife } from '~/utils/business/filters';

import type { DisplayPodcastLikesProps } from './DisplayPodcastLikes.types';

const DisplayPodcastLikes = ({ likes }: DisplayPodcastLikesProps) => {
  if (!likes.length) return null;
  const filteredLikes = likes.filter(
    (like) => like?.userName && !isCyberlife(like.userName),
  );
  const nbLikes = filteredLikes.length;
  const likeWord = nbLikes > 1 ? 'likes' : 'like';
  return (
    <WrapperListings
      title={`${filteredLikes.length} ${likeWord} on soundcloud:`}
    >
      <ListPodcastLikes likes={filteredLikes} />
    </WrapperListings>
  );
};

export default DisplayPodcastLikes;
