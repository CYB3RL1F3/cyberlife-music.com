/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ReleaseQuery
// ====================================================

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
   * Release's Track stream
   */
  stream: ReleaseQueryReleaseTracklistStream | null;
}

export interface ReleaseQueryRelease {
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
  tracklist: ReleaseQueryReleaseTracklist[] | null;
  /**
   * Release notes
   */
  notes: string | null;
}

export interface ReleaseQuery {
  release: ReleaseQueryRelease;
}

export interface ReleaseQueryVariables {
  profile: string;
  id: string;
}
