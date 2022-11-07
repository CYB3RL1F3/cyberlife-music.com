/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ReleasesQuery
// ====================================================

export interface ReleasesQueryReleasesTracklist {
  _typename: "ReleaseTrack";
  /**
   * Release's Track title
   */
  title: string | null;
}

export interface ReleasesQueryReleases {
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
  tracklist: ReleasesQueryReleasesTracklist[] | null;
  /**
   * Release notes
   */
  notes: string | null;
}

export interface ReleasesQuery {
  releases: ReleasesQueryReleases[];
}

export interface ReleasesQueryVariables {
  profile: string;
}
