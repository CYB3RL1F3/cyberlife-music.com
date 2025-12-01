import { PlayerReleaseTrackContainerProps } from '~/components/organisms/PlayerReleaseTrackContainer/PlayerReleaseTrackContainer.types';

import { Release } from '~/types/gql';

export type ReleaseTracklistItemProps = {
  track: NonNullable<Release['tracklist']>[number];
  thumb: Release['thumb'];
  album?: Release['title'];
} & Pick<PlayerReleaseTrackContainerProps, 'nextId' | 'prevId' | 'pageUrl'>;
