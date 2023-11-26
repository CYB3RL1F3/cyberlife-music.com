/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TrackFragment
// ====================================================

export interface TrackFragmentStats {
  __typename: "stats";
  /**
   * nb listens
   */
  count: number | null;
  /**
   * nb downloads
   */
  downloads: number | null;
}

export interface TrackFragmentLikes {
  __typename: "Like";
  /**
   * user ID
   */
  id: number | null;
  /**
   * user avatar
   */
  avatar: string | null;
  /**
   * username
   */
  userName: string | null;
  /**
   * user soundcloud URL
   */
  soundcloud: string | null;
  /**
   * user uri
   */
  uri: string | null;
}

export interface TrackFragmentCommentsUser {
  __typename: "User";
  /**
   * user avatar
   */
  avatar: string | null;
  /**
   * username
   */
  userName: string | null;
  /**
   * user soundcloud URL
   */
  soundcloud: string | null;
  /**
   * user uri
   */
  uri: string | null;
}

export interface TrackFragmentComments {
  __typename: "Comment";
  /**
   * comment ID
   */
  id: number | null;
  /**
   * comment creation date
   */
  createdAt: string | null;
  /**
   * comment body
   */
  body: string | null;
  /**
   * comment user
   */
  user: TrackFragmentCommentsUser | null;
}

export interface TrackFragment {
  __typename: "Track";
  /**
   * track ID
   */
  id: number | null;
  /**
   * track slug
   */
  slug: string | null;
  /**
   * track title
   */
  title: string | null;
  /**
   * track genre
   */
  genre: string | null;
  /**
   * track description
   */
  description: string | null;
  /**
   * track artwork
   */
  artwork: string | null;
  /**
   * track date
   */
  date: Any | null;
  /**
   * track uri
   */
  uri: string | null;
  /**
   * track url
   */
  url: string | null;
  /**
   * track duration
   */
  duration: number | null;
  /**
   * track waveform
   */
  waveform: string | null;
  /**
   * track downloadable
   */
  downloadable: boolean | null;
  /**
   * track download
   */
  download: string | null;
  /**
   * track soundcloud
   */
  soundcloud: string | null;
  /**
   * track license
   */
  license: string | null;
  /**
   * track stats
   */
  stats: TrackFragmentStats | null;
  /**
   * track taglist
   */
  taglist: string[] | null;
  /**
   * track tracklist
   */
  tracklist: string[] | null;
  /**
   * track likes
   */
  likes: TrackFragmentLikes[] | null;
  /**
   * track comments
   */
  comments: TrackFragmentComments[] | null;
}
