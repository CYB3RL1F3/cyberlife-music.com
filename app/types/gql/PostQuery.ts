/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostQuery
// ====================================================

export interface PostQueryPost {
  __typename: "Post";
  /**
   * Post content
   */
  content: string | null;
  /**
   * Post title
   */
  title: string | null;
  /**
   * Post subtitle
   */
  subtitle: string | null;
  /**
   * post ID
   */
  _id: string | null;
}

export interface PostQuery {
  post: PostQueryPost;
}

export interface PostQueryVariables {
  profile: string;
  id: string;
}
