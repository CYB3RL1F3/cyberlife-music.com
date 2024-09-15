/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DownloadFragment
// ====================================================

export interface DownloadFragmentDownloadsRelease {
  __typename: "Release";
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
}

export interface DownloadFragmentDownloads {
  __typename: "DownloadItem";
  /**
   * Name of the download
   */
  name: string;
  /**
   * URL of the download
   */
  url: string;
  /**
   * Release infos
   */
  release: DownloadFragmentDownloadsRelease;
}

export interface DownloadFragment {
  __typename: "Download";
  /**
   * ID
   */
  id: string;
  /**
   * token
   */
  token: string;
  /**
   * User email
   */
  email: string;
  /**
   * Date of the download
   */
  date: any;
  /**
   * User ID
   */
  expire: any;
  /**
   * Download
   */
  downloads: DownloadFragmentDownloads[];
}
