/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ReleaseFragment
// ====================================================

export interface ReleaseFragmentTracklistStream {
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
   * Release's Track stream
   */
  stream: ReleaseFragmentTracklistStream | null;
}

export interface ReleaseFragment {
  _typename: "Release";
  /**
   * release ID
   */
  Id: string | null;
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
   * Release label
   */
  label: string | null;
  /**
   * Release tracklist
   */
  tracklist: ReleaseFragmentTracklist[] | null;
  /**
   * Release notes
   */
  notes: string | null;
}
