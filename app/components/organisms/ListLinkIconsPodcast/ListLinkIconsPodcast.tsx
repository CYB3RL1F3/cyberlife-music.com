import type { ListLinkIconsPodcastProps } from "./ListLinkIconsPodcast.types";
import ImgIcon from "~/components/atoms/ImgIcon";
import { useConfigContext } from "~/components/contexts/ConfigContext";
import type { ListLinkIconsProps } from "~/components/molecules/ListLinkIcons";
import ToggleIconLikeContainer from "~/components/organisms/ToggleIconLikeContainer";
import SoundcloudIcon from "~/icons/soundcloud.svg";
import { BsDownload } from "react-icons/bs";
import ListLinkIcons from "~/components/molecules/ListLinkIcons/ListLinkIcons";

const ListLinkIconsPodcast = ({ podcast }: ListLinkIconsPodcastProps) => {
  const { id, downloadable, download, soundcloud } = podcast;
  const { config } = useConfigContext();
  const apiUrl = config?.apiEndpoint || "";
  if (!id) return null;
  const linkIcons: ListLinkIconsProps["linkIcons"] = [
    {
      icon: <ToggleIconLikeContainer id={`podcasts/${id}`} />,
      id: `toggleLikePodcast__${id}`
    }
  ];
  if (soundcloud) {
    linkIcons.push({
      icon: <ImgIcon icon={SoundcloudIcon} alt="Soundcloud Icon" isInverted />,
      url: soundcloud,
      id: `linkSoundcloud__${id}`
    });
  }
  if (downloadable && download && apiUrl) {
    const url = `${apiUrl}/cyberlife/playlists/${id}/download`;
    linkIcons.push({
      icon: (
        <span className="mr-4 text-md">
          <BsDownload />
        </span>
      ),
      url,
      id: `download__${id}`
    });
  }
  return <ListLinkIcons linkIcons={linkIcons.reverse()} />;
};

export default ListLinkIconsPodcast;
