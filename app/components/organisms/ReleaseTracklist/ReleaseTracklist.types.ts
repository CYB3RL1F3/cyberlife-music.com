import { Release } from '~/types/gql';

export type ReleaseTracklistProps = {
  tracks: Release['tracklist'];
  thumb: Release['thumb'];
  id: Release['_id'];
  album: Release['title'];
};
