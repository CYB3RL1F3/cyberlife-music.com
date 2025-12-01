import { ReleasesQuery } from '~/types/gql';

export type ListLinkIconsReleaseProps = {
  release: ReleasesQuery['releaseItems'][number];
};
