import PageDetailHeader from '~/components/molecules/PageDetailHeader';
import PageDetailHeaderPortal from '~/components/molecules/PageDetailHeaderPortal';
import type { ViewPodcastProps } from './ViewPodcast.types';
import PodcastDetails from '../PodcastDetails/PodcastDetails';
import Text from '~/components/atoms/Text';
import { parseHtml, toHtml } from '~/utils/html';
import DisplayPodcastTracklist from '~/components/organisms/DisplayPodcastTracklist';
import DisplayPodcastLikes from '../DisplayPodcastLikes';
import type { ListTagProps } from '~/components/molecules/ListTag';
import ListTag from '~/components/molecules/ListTag';
import DisplayPodcastComments from '~/components/organisms/DisplayPodcastComments';
import PlayerPodcastTrackContainer from '~/components/organisms/PlayerPodcastTrackContainer';
import { useMemo } from 'react';
import { useFluidTransition } from '~/hooks/misc/useFluidTransition';
import { motion } from 'framer-motion';
import { useLocation } from '@remix-run/react';

const ViewPodcast = ({ podcast }: ViewPodcastProps) => {
  const { pathname } = useLocation();
  const { title, description, tracklist, likes, comments, taglist } = podcast;
  const tags: ListTagProps['tags'] = useMemo(
    () =>
      (taglist || []).map((tag) => ({
        value: tag,
        href: `https://soundcloud.com/tags/${tag}`,
      })),
    [taglist],
  );
  const transition = useFluidTransition({
    initial: {
      x: 50,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  });
  return (
    <article className="o-4">
      <PageDetailHeaderPortal>
        <PageDetailHeader title={title} url="/" />
      </PageDetailHeaderPortal>
      <motion.article {...transition(0.1)}>
        <PodcastDetails podcast={podcast} />
      </motion.article>
      <motion.article {...transition(0.2)}>
        <PlayerPodcastTrackContainer track={podcast} />
      </motion.article>
      <motion.article {...transition(0.3)} className="pt-4 o-8">
        {description && (
          <Text>{parseHtml(toHtml(description, 'underline'))}</Text>
        )}
        {!!tracklist && <DisplayPodcastTracklist tracklist={tracklist} />}
        {!!tags.length && <ListTag tags={tags} />}
        {!!likes?.length && <DisplayPodcastLikes likes={likes} />}
        {!!comments?.length && <DisplayPodcastComments comments={comments} />}
      </motion.article>
    </article>
  );
};

export default ViewPodcast;
