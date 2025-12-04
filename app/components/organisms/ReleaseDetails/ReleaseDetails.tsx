import dayjs from 'dayjs';

import PageDetailLayout from '~/components/layouts/PageDetailLayout/PageDetailLayout';
import Picture from '~/components/organisms/Picture';
import Text from '~/components/atoms/Text';
import ListLinkIconsRelease from '~/components/organisms/ListLinkIconsRelease';

import type { ReleaseDetailsProps } from './ReleaseDetails.types';

export const defaultThumb =
  'https://cdn.cyberlife-music.com/images/vinyl_default.jpg';

const ReleaseDetails = ({ release }: ReleaseDetailsProps) => {
  if (!release.release) return null;
  const { thumb, releaseDate, cat, label, role, genre, year } = release.release;
  const date = releaseDate ? dayjs(releaseDate).format('DD/MM/YYYY') : year;
  return (
    <PageDetailLayout
      thumbnail={
        <Picture
          alt={release.release.title || 'release thumbnail'}
          variant="wider"
          src={thumb || defaultThumb}
        />
      }
      linkIcons={<ListLinkIconsRelease release={release} />}
    >
      <Text.RightItalic>
        {role} ({cat}) - {label}
      </Text.RightItalic>
      <br />
      <Text.RightItalic>Released on {date}</Text.RightItalic>
      <Text.RightItalic>{genre}</Text.RightItalic>
    </PageDetailLayout>
  );
};

export default ReleaseDetails;
