/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PlaylistFragment
// ====================================================

export interface PlaylistFragmentTracks {
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
  date: any | null;
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
}

export interface PlaylistFragment {
  _typename: "Playlist";
  /**
   * playlist ID
   */
  id: number | null;
  /**
   * playlist tracks
   */
  tracks: PlaylistFragmentTracks[] | null;
}
