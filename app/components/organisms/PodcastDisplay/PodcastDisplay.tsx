import PageDetailHeader from "~/components/molecules/PageDetailHeader";
import PageDetailHeaderPortal from "~/components/molecules/PageDetailHeaderPortal";
import type { PodcastDisplayProps } from "./PodcastDisplay.types";
import PodcastDetails from "../PodcastDetails/PodcastDetails";
import Text from "~/components/atoms/Text";
import { parseHtml, toHtml } from "~/utils/html";
import DisplayPodcastTracklist from "~/components/organisms/DisplayPodcastTracklist";
import DisplayPodcastLikes from "../DisplayPodcastLikes";
import ListTag from "~/components/molecules/ListTag";
import DisplayPodcastComments from "~/components/organisms/DisplayPodcastComments";
import PlayerPodcastTrackContainer from "~/components/organisms/PlayerPodcastTrackContainer";

const PodcastDisplay = ({ podcast }: PodcastDisplayProps) => {
  const { title, description, tracklist, likes, comments, taglist } = podcast;
  return (
    <div className="o-4">
      <PageDetailHeaderPortal>
        <PageDetailHeader title={title} url="/" />
      </PageDetailHeaderPortal>
      <PodcastDetails podcast={podcast} />
      <PlayerPodcastTrackContainer track={podcast} />
      <div className="pt-4 o-8">
        {description && (
          <Text align="left" size="md">
            {parseHtml(toHtml(description, "underline"))}
          </Text>
        )}
        {!!tracklist && <DisplayPodcastTracklist tracklist={tracklist} />}
        {!!taglist?.length && <ListTag tags={taglist} />}
        {!!likes?.length && <DisplayPodcastLikes likes={likes} />}
        {!!comments?.length && <DisplayPodcastComments comments={comments} />}
      </div>
    </div>
  );
};

export default PodcastDisplay;
