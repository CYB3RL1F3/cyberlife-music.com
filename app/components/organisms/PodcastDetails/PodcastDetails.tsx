import PageDetailLayout from "~/components/layouts/PageDetailLayout";
import Thumbnail from "~/components/molecules/Thumbnail";
import type { PodcastDetailsProps } from "./PodcastDetails.types";
import Text from "~/components/atoms/Text";
import dayjs from "dayjs";
import PodcastActionPlayContainer from "../PodcastActionPlayContainer";
import ListLinkIconsPodcast from "~/components/organisms/ListLinkIconsPodcast";

const PodcastDetails = ({ podcast }: PodcastDetailsProps) => {
  const { artwork, date, duration, license } = podcast;

  return (
    <PageDetailLayout
      thumbnail={
        <Thumbnail variant="wider" src={artwork || ""}>
          <PodcastActionPlayContainer track={podcast} />
        </Thumbnail>
      }
      linkIcons={<ListLinkIconsPodcast podcast={podcast} />}
    >
      <Text.RightItalic>
        Published on {date ? dayjs(date).format("DD/MM/YYYY") : "Soundcloud"}
      </Text.RightItalic>
      <Text.RightItalic>
        {duration &&
          ` Duration: ${new Date(duration)
            .toISOString()
            .substring(11, 11 + 8)}`}
      </Text.RightItalic>
      <Text.RightItalic>{license}</Text.RightItalic>
    </PageDetailLayout>
  );
};

export default PodcastDetails;
