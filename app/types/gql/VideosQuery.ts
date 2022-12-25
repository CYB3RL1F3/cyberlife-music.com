/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: VideosQuery
// ====================================================

export interface VideosQueryVideos {
  _typename: "Video";
  /**
   * Video url
   */
  url: string | null;
  /**
   * Video title
   */
  title: string | null;
  /**
   * Video description
   */
  description: string | null;
  /**
   * Video type source
   */
  type: string | null;
  /**
   * Video illustration
   */
  illustration: string | null;
  /**
   * post ID
   */
  _id: string | null;
}

export interface VideosQuery {
  videos: VideosQueryVideos[];
}

export interface VideosQueryVariables {
  profile: string;
}
