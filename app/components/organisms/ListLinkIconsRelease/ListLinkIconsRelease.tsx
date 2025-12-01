import ImgIcon from '~/components/atoms/ImgIcon';
import type { ListLinkIconsProps } from '~/components/molecules/ListLinkIcons';
import ListLinkIcons from '~/components/molecules/ListLinkIcons';
import FeatureFlag from '~/components/molecules/FeatureFlag';
import ToggleIconLikeContainer from '~/components/organisms/ToggleIconLikeContainer';
import ButtonBuyRelease from '~/components/organisms/ButtonBuyRelease';
import DiscogsIcon from '~/icons/discogs.svg';
import BandcampIcon from '~/icons/bandcamp.svg';

import type { ListLinkIconsReleaseProps } from './ListLinkIconsRelease.types';

const ListLinkIconsRelease = ({ release }: ListLinkIconsReleaseProps) => {
  if (!release.release) return null;

  const { _id, discogs, bandcamp, title } = release.release;

  if (!_id) return null;

  const linkIcons: ListLinkIconsProps['linkIcons'] = [
    {
      icon: (
        <ToggleIconLikeContainer
          title={title || 'This release'}
          id={`releases/${_id}`}
        />
      ),
      id: `toggleLikeRelease__${_id}`,
    },
  ];

  if (discogs) {
    linkIcons.push({
      icon: (
        <ImgIcon size={14} icon={DiscogsIcon} alt="Discogs Icon" isInverted />
      ),
      url: discogs,
      id: `discogs__${_id}`,
    });
  }

  if (bandcamp) {
    linkIcons.push({
      icon: <ImgIcon size={32} icon={BandcampIcon} alt="Bandcamp Icon" />,
      url: bandcamp,
      id: `bandcamp__${_id}`,
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
