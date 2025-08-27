import {
  ReleaseQueryReleaseItemRelease,
  ReleaseQueryReleaseItemReleaseTracklist,
} from '~/types/gql/ReleaseQuery';
import { PlayerReleaseTrackContainerProps } from '../PlayerReleaseTrackContainer/PlayerReleaseTrackContainer.types';

export type ReleaseTracklistItemProps = {
  track: ReleaseQueryReleaseItemReleaseTracklist;
  thumb: ReleaseQueryReleaseItemRelease['thumb'];
  album?: ReleaseQueryReleaseItemRelease['title'];
} & Pick<PlayerReleaseTrackContainerProps, 'nextId' | 'prevId'>;
