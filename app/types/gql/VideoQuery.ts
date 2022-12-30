/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: VideoQuery
// ====================================================

export interface VideoQueryVideo {
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
   * Video slug
   */
  slug: string | null;
  /**
   * post ID
   */
  _id: string | null;
}

export interface VideoQuery {
  video: VideoQueryVideo;
}

export interface VideoQueryVariables {
  profile: string;
  id: string;
  keyType?: string | null;
}
