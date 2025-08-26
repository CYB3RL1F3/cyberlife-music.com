import { getConfig } from '~/utils/config';
import { useSummaryQuery } from '~/hooks/queries/useSummaryQuery';

export const useHomepageSummary = () => {
  return useSummaryQuery({
    playlist: 'dj-sets',
    topPodcastId: 'minuteuf-20',
    webshopId: getConfig()?.webshopId!,
    expectedNbReleases: 2,
  });
};
