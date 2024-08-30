import PageDetailHeader from "~/components/molecules/PageDetailHeader";
import PageDetailHeaderPortal from "~/components/molecules/PageDetailHeaderPortal";
import ReleaseDetails from "../ReleaseDetails/ReleaseDetails";
import ReleaseTracklist from "../ReleaseTracklist";
import type { ViewReleaseProps } from "./ViewRelease.types";
import Text from "~/components/atoms/Text";
import { useFluidTransition } from "~/hooks/useFluidTransition";
import { motion } from "framer-motion";

const ViewRelease = ({ release }: ViewReleaseProps) => {
  const transition = useFluidTransition({
    initial: {
      x: 50,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1
    }
  });
  if (!release.release) return null;

  const { title, notes, tracklist, thumb, slug } = release.release;
  return (
    <article className="o-4">
      <PageDetailHeaderPortal>
        <PageDetailHeader title={title} url="/releases" />
      </PageDetailHeaderPortal>
      <motion.article className="w-full" {...transition(0.05)}>
        <ReleaseDetails release={release} />
      </motion.article>
      <motion.article className="py-4" {...transition(0.1)}>
        <Text.RightItalic>{notes}</Text.RightItalic>
      </motion.article>
      {tracklist && (
        <ReleaseTracklist
          id={slug}
          tracks={tracklist}
          thumb={thumb}
          album={title}
        />
      )}
    </article>
  );
};

export default ViewRelease;
