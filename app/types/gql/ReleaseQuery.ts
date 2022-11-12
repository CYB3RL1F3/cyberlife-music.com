/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ReleaseQuery
// ====================================================

export interface ReleaseQueryReleaseTracklistArtists {
  _typename: "artist";
  /**
   * Artist Name
   */
  name: string | null;
  /**
   * Artist Role
   */
  role: string | null;
}

export interface ReleaseQueryReleaseTracklistStream {
  _typename: "Track";
  /**
   * track ID
   */
  id: number | null;
  /**
   * track artwork
   */
  artwork: string | null;
  /**
   * track uri
   */
  uri: string | null;
  /**
   * track url
   */
  url: string | null;
  /**
   * track waveform
   */
  waveform: string | null;
  /**
   * track duration
   */
  duration: number | null;
}

export interface ReleaseQueryReleaseTracklist {
  _typename: "ReleaseTrack";
  /**
   * Release's Track title
   */
  title: string | null;
  /**
   * Release's Track position
   */
  position: string | null;
  /**
   * Release's Track Id
   */
  id: string | null;
  /**
   * Release's Track artists
   */
  artists: ReleaseQueryReleaseTracklistArtists[] | null;
  /**
   * Release's Track stream
   */
  stream: ReleaseQueryReleaseTracklistStream | null;
}

export interface ReleaseQueryRelease {
  _typename: "Release";
  /**
   * release ID
   */
  _id: string | null;
  /**
   * Release title
   */
  title: string | null;
  /**
   * Release date
   */
  releaseDate: any | null;
  /**
   * Release role
   */
  role: string | null;
  /**
   * Release year
   */
  year: number | null;
  /**
   * Release thumb url
   */
  thumb: string | null;
  /**
   * Release label
   */
  label: string | null;
  /**
   * Release tracklist
   */
  tracklist: ReleaseQueryReleaseTracklist[] | null;
  /**
   * Release discogs
   */
  discogs: string | null;
  /**
   * Release notes
   */
  notes: string | null;
  /**
   * Release cat
   */
  cat: string | null;
  /**
   * Release format
   */
  format: string | null;
  /**
   * Release genre
   */
  genre: string | null;
}

export interface ReleaseQuery {
  release: ReleaseQueryRelease;
}

export interface ReleaseQueryVariables {
  profile: string;
  id: string;
}
