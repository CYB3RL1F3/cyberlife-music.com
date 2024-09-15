/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DownloadOrderTracks
// ====================================================

export interface DownloadOrderTracksDownloadOrderTracksDownloadsRelease {
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

export interface DownloadOrderTracksDownloadOrderTracksDownloads {
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
  release: DownloadOrderTracksDownloadOrderTracksDownloadsRelease;
}

export interface DownloadOrderTracksDownloadOrderTracks {
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
  downloads: DownloadOrderTracksDownloadOrderTracksDownloads[];
}

export interface DownloadOrderTracks {
  downloadOrderTracks: DownloadOrderTracksDownloadOrderTracks;
}

export interface DownloadOrderTracksVariables {
  profile: string;
  orderId: string;
  token: string;
  email: string;
}
