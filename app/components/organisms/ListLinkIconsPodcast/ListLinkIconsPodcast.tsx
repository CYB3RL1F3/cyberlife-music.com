import { BsDownload } from 'react-icons/bs';

import ImgIcon from '~/components/atoms/ImgIcon';
import { useConfigContext } from '~/components/contexts/ConfigContext';
import type { ListLinkIconsProps } from '~/components/molecules/ListLinkIcons';
import ToggleIconLikeContainer from '~/components/organisms/ToggleIconLikeContainer';
import SoundcloudIcon from '~/icons/soundcloud.svg';
import ListLinkIcons from '~/components/molecules/ListLinkIcons/ListLinkIcons';

import type { ListLinkIconsPodcastProps } from './ListLinkIconsPodcast.types';

const ListLinkIconsPodcast = ({ podcast }: ListLinkIconsPodcastProps) => {
  const { id, downloadable, download, soundcloud, title } = podcast;
  const { config } = useConfigContext();
  const apiUrl = config?.apiEndpoint || '';

  if (!id) return null;

  const linkIcons: ListLinkIconsProps['linkIcons'] = [
    {
      icon: (
        <ToggleIconLikeContainer
          title={title || 'This podcast'}
          id={`podcasts/${id}`}
        />
      ),
      id: `toggleLikePodcast__${id}`,
      title: `like podcast ${title}`,
    },
  ];

  if (soundcloud) {
    linkIcons.push({
      icon: <ImgIcon icon={SoundcloudIcon} alt="Soundcloud Icon" isInverted />,
      url: soundcloud,
      id: `linkSoundcloud__${id}`,
      title: `Soundcloud link ${title || ''}`,
    });
  }

  if (downloadable && download && apiUrl) {
    const url = `${apiUrl}/cyberlife/playlists/${id}/download`;
    linkIcons.push({
      icon: (
        <span className="text-md">
          <BsDownload />
        </span>
      ),
      url,
      title: `Download podcast ${title || ''}`,
      id: `download__${id}`,
    });
  }

  return <ListLinkIcons linkIcons={linkIcons.reverse()} />;
};

export default ListLinkIconsPodcast;
