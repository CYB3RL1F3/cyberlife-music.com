import { motion, useWillChange } from 'framer-motion';

import Text from '~/components/atoms/Text';
import PageDetailHeader from '~/components/molecules/PageDetailHeader';
import PageDetailHeaderPortal from '~/components/molecules/PageDetailHeaderPortal';
import PicturesGallery from '~/components/organisms/PicturesGallery';
import ReleaseDetails from '~/components/organisms/ReleaseDetails/ReleaseDetails';
import ReleaseTracklist from '~/components/organisms/ReleaseTracklist';
import { useFluidTransition } from '~/hooks/misc/useFluidTransition';
import { getTextToHtml } from '~/utils/html';

import type { ViewReleaseProps } from './ViewRelease.types';

const ViewRelease = ({ release }: ViewReleaseProps) => {
  const willChange = useWillChange();
  const transition = useFluidTransition({
    initial: {
      x: 50,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: 50,
      opacity: 0,
    },
    style: { willChange },
  });

  if (!release.release) return <p>Release data is missing</p>;

  const { title, images, notes, tracklist } = release.release;

  return (
    <article className="o-4">
      <PageDetailHeaderPortal>
        <PageDetailHeader title={title} url="/releases" />
      </PageDetailHeaderPortal>
      <motion.article className="w-full" {...transition(0.05, 0.1)}>
        <ReleaseDetails release={release} />
      </motion.article>
      {images && images.length > 0 && (
        <motion.article
          className="flex flex-wrap justify-end w-full py-4 h-fit"
          {...transition(0.2, 0.2)}
        >
          <PicturesGallery images={images} />
        </motion.article>
      )}
      {notes ? (
        <motion.article className="py-4" {...transition(0.15, 0.15)}>
          <Text.RightItalic>{getTextToHtml(notes)}</Text.RightItalic>
        </motion.article>
      ) : null}

      {tracklist && <ReleaseTracklist release={release.release} />}
    </article>
  );
};

export default ViewRelease;
