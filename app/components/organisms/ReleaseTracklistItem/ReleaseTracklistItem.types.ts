import {
  ReleaseQueryReleaseItemRelease,
  ReleaseQueryReleaseItemReleaseTracklist,
} from '~/types/gql/ReleaseQuery';
import { PlayerReleaseTrackContainerProps } from '../PlayerReleaseTrackContainer/PlayerReleaseTrackContainer.types';

export type ReleaseTracklistItemProps = {
  track: ReleaseQueryReleaseItemReleaseTracklist;
  thumb: ReleaseQueryReleaseItemRelease['thumb'];
  id: string;
  album?: ReleaseQueryReleaseItemRelease['title'];
} & Pick<PlayerReleaseTrackContainerProps, 'nextId' | 'prevId'>;
