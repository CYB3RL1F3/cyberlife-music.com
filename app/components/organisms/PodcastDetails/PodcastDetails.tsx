import dayjs from 'dayjs';

import PageDetailLayout from '~/components/layouts/PageDetailLayout';
import Thumbnail from '~/components/molecules/Thumbnail';
import type { PodcastDetailsProps } from './PodcastDetails.types';
import Text from '~/components/atoms/Text';
import PodcastActionPlayContainer from '~/components/organisms/PodcastActionPlayContainer';
import ListLinkIconsPodcast from '~/components/organisms/ListLinkIconsPodcast';
import { getMappedLicenseLabel } from '~/utils/business/labels';
import { getFormattedDuration } from '~/utils/duration';

const PodcastDetails = ({ podcast, podcasts = [] }: PodcastDetailsProps) => {
  const { artwork, date, duration, license } = podcast;
  const licenseLabel = getMappedLicenseLabel(license);

  return (
    <PageDetailLayout
      thumbnail={
        <Thumbnail variant="wider" src={artwork || ''}>
          <PodcastActionPlayContainer track={podcast} podcasts={podcasts} />
        </Thumbnail>
      }
      linkIcons={<ListLinkIconsPodcast podcast={podcast} />}
    >
      <Text.RightItalic>
        Published on {date ? dayjs(date).format('DD/MM/YYYY') : 'Soundcloud'}
      </Text.RightItalic>
      <Text.RightItalic>
        {duration && ` Duration: ${getFormattedDuration(duration)}`}
      </Text.RightItalic>
      {licenseLabel && <Text.RightItalic>{licenseLabel}</Text.RightItalic>}
    </PageDetailLayout>
  );
};

export default PodcastDetails;
