import PageDetailHeader from '~/components/molecules/PageDetailHeader';
import PageDetailHeaderPortal from '~/components/molecules/PageDetailHeaderPortal';
import type { ViewVideoProps } from './ViewVideo.types';
import Text from '~/components/atoms/Text';
import VideoPlayer from '~/components/organisms/VideoPlayer';
import { useFluidTransition } from '~/hooks/misc/useFluidTransition';
import { motion, useWillChange } from 'framer-motion';
import { getTextToHtml } from '~/utils/html';

const ViewVideo = ({ video }: ViewVideoProps) => {
  const { title, description, type, url } = video;
  const willChange = useWillChange();
  const transition = useFluidTransition({
    style: { willChange },
  });

  return (
    <div className="o-4">
      <PageDetailHeaderPortal>
        <PageDetailHeader title={title} url="/videos" />
      </PageDetailHeaderPortal>
      <motion.div {...transition(0.1)} className="flex justify-end w-full h-96">
        <VideoPlayer width={680} height="auto" url={url} type={type} />
      </motion.div>
      {description && (
        <motion.div {...transition(0.2)} className="w-full">
          <Text.RightItalic>{getTextToHtml(description)}</Text.RightItalic>
        </motion.div>
      )}
    </div>
  );
};

export default ViewVideo;
