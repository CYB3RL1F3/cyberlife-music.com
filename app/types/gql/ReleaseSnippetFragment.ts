/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ReleaseSnippetFragment
// ====================================================

export interface ReleaseSnippetFragmentTracklist {
  _typename: "ReleaseTrack";
  /**
   * Release's Track title
   */
  title: string | null;
}

export interface ReleaseSnippetFragment {
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
  tracklist: ReleaseSnippetFragmentTracklist[] | null;
  /**
   * Release discogs
   */
  discogs: string | null;
  /**
   * Release notes
   */
  notes: string | null;
}
