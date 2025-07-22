/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ReleaseSnippetItemFragment
// ====================================================

export interface ReleaseSnippetItemFragmentReleaseTracklist {
  __typename: "ReleaseTrack";
  /**
   * Release's Track title
   */
  title: string | null;
}

export interface ReleaseSnippetItemFragmentRelease {
  __typename: "ReleaseDtoOutput";
  /**
   * release ID
   */
  _id: string | null;
  /**
   * Release slug
   */
  slug: string | null;
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
  tracklist: ReleaseSnippetItemFragmentReleaseTracklist[] | null;
  /**
   * Release discogs
   */
  discogs: string | null;
  /**
   * Release bandcamp
   */
  bandcamp: string | null;
  /**
   * Release notes
   */
  notes: string | null;
}

export interface ReleaseSnippetItemFragment {
  __typename: "ReleaseItem";
  /**
   * Item id
   */
  id: string | null;
  /**
   * Item name
   */
  name: string | null;
  /**
   * Item price
   */
  price: number | null;
  /**
   * Item price
   */
  availableQuantity: number | null;
  /**
   * Item release
   */
  release: ReleaseSnippetItemFragmentRelease | null;
}
