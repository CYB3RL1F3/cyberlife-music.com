import type { ListLinkIconsReleaseProps } from "./ListLinkIconsRelease.types";
import ImgIcon from "~/components/atoms/ImgIcon";
import type { ListLinkIconsProps } from "~/components/molecules/ListLinkIcons";
import ToggleIconLikeContainer from "~/components/organisms/ToggleIconLikeContainer";
import DiscogsIcon from "~/icons/discogs.svg";
import ListLinkIcons from "~/components/molecules/ListLinkIcons";

const ListLinkIconsRelease = ({ release }: ListLinkIconsReleaseProps) => {
  const { _id, discogs } = release;
  if (!_id) return null;
  const linkIcons: ListLinkIconsProps["linkIcons"] = [
    {
      icon: <ToggleIconLikeContainer id={`releases/${_id}`} />,
      id: `toggleLikeRelease__${_id}`
    }
  ];
  if (discogs) {
    linkIcons.push({
      icon: (
        <ImgIcon size={20} icon={DiscogsIcon} alt="Discogs Icon" isInverted />
      ),
      url: discogs,
      id: `discogs__${_id}`
    });
  }
  return <ListLinkIcons linkIcons={linkIcons.reverse()} />;
};

export default ListLinkIconsRelease;
