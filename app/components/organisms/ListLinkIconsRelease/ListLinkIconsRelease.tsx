import type { ListLinkIconsReleaseProps } from "./ListLinkIconsRelease.types";
import ImgIcon from "~/components/atoms/ImgIcon";
import type { ListLinkIconsProps } from "~/components/molecules/ListLinkIcons";
import ToggleIconLikeContainer from "~/components/organisms/ToggleIconLikeContainer";
import DiscogsIcon from "~/icons/discogs.svg";
import ListLinkIcons from "~/components/molecules/ListLinkIcons";
import ButtonBuyRelease from "../ButtonBuyRelease";
import FeatureFlag from "~/components/molecules/FeatureFlag";

const ListLinkIconsRelease = ({ release }: ListLinkIconsReleaseProps) => {
  if (!release.release) return null;
  const { _id, discogs, title } = release.release;
  if (!_id) return null;
  const linkIcons: ListLinkIconsProps["linkIcons"] = [
    {
      icon: (
        <ToggleIconLikeContainer
          title={title || "This release"}
          id={`releases/${_id}`}
        />
      ),
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
  return (
    <div className="flex items-center justify-end gap-4">
      <ListLinkIcons linkIcons={linkIcons.reverse()} />
      <FeatureFlag id="purchase">
        <ButtonBuyRelease release={release} />
      </FeatureFlag>
    </div>
  );
};

export default ListLinkIconsRelease;
