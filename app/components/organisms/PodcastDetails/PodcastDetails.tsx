import ImgIcon from "~/components/atoms/ImgIcon";
import PageDetailLayout from "~/components/layouts/PageDetailLayout";
import Thumbnail from "~/components/molecules/Thumbnail";
import type { PodcastDetailsProps } from "./PodcastDetails.types";
import SoundcloudIcon from "~/icons/soundcloud.svg";
import Text from "~/components/atoms/Text";
import { BsDownload } from "react-icons/bs";
import dayjs from "dayjs";
import PodcastActionPlayContainer from "../PodcastActionPlayContainer";

const PodcastDetails = ({ podcast }: PodcastDetailsProps) => {
  const { artwork, uri, date, duration, license, downloadable, download } =
    podcast;

  const linkIcons = [
    {
      icon: <ImgIcon icon={SoundcloudIcon} alt="Soundcloud Icon" isInverted />,
      url: uri || ""
    }
  ];
  if (downloadable && download) {
    linkIcons.push({
      icon: <BsDownload />,
      url: download
    });
  }
  return (
    <PageDetailLayout
      thumbnail={
        <Thumbnail variant="wider" src={artwork || ""}>
          <PodcastActionPlayContainer track={podcast} />
        </Thumbnail>
      }
      linkIcons={linkIcons.reverse()}
    >
      <Text size="md">
        Published on {date ? dayjs(date).format("DD/MM/YYYY") : "Soundcloud"}
      </Text>
      <Text size="md">
        Duration: {duration?.toString().substring(11, 11 + 8)}
      </Text>
      <Text size="md">{license}</Text>
    </PageDetailLayout>
  );
};

export default PodcastDetails;
