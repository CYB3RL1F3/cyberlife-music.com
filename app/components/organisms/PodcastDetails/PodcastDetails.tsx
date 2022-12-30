import ImgIcon from "~/components/atoms/ImgIcon";
import PageDetailLayout from "~/components/layouts/PageDetailLayout";
import Thumbnail from "~/components/molecules/Thumbnail";
import type { PodcastDetailsProps } from "./PodcastDetails.types";
import SoundcloudIcon from "~/icons/soundcloud.svg";
import Text from "~/components/atoms/Text";
import { BsDownload } from "react-icons/bs";
import dayjs from "dayjs";
import PodcastActionPlayContainer from "../PodcastActionPlayContainer";
import { useConfigContext } from "~/components/contexts/ConfigContext";
import ToggleIconLikeContainer from "~/components/organisms/ToggleIconLikeContainer";

const PodcastDetails = ({ podcast }: PodcastDetailsProps) => {
  const {
    id,
    artwork,
    soundcloud,
    date,
    duration,
    license,
    downloadable,
    download
  } = podcast;

  const { config } = useConfigContext();
  const apiUrl = config?.apiEndpoint || "";

  const linkIcons = [
    {
      icon: <ToggleIconLikeContainer id={`podcasts/${id}`} />
    },
    {
      icon: <ImgIcon icon={SoundcloudIcon} alt="Soundcloud Icon" isInverted />,
      url: soundcloud || ""
    }
  ];
  if (downloadable && download) {
    const url = `${apiUrl}/cyberlife/playlists/${id}/download`;
    linkIcons.push({
      icon: <BsDownload />,
      url
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
