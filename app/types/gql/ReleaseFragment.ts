/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ReleaseFragment
// ====================================================

export interface ReleaseFragmentTracklistArtists {
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

export interface ReleaseFragmentTracklistStream {
  _typename: "Track";
  /**
   * track ID
   */
  id: number | null;
  /**
   * track title
   */
  title: string | null;
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

export interface ReleaseFragmentTracklist {
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
  artists: ReleaseFragmentTracklistArtists[] | null;
  /**
   * Release's Track stream
   */
  stream: ReleaseFragmentTracklistStream | null;
}

export interface ReleaseFragment {
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
  tracklist: ReleaseFragmentTracklist[] | null;
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
