import { PlayerReleaseTrackContainerProps } from '~/components/organisms/PlayerReleaseTrackContainer/PlayerReleaseTrackContainer.types';

import { Release } from '~/types/gql';

export type ReleaseTracklistItemProps = {
  track: NonNullable<Release['tracklist']>[number];
  release: Release;
};
