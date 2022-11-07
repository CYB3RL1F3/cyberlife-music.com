/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: InfosQuery
// ====================================================

export interface InfosQueryInfosBio {
  _typename: "bio";
  /**
   * Artist content
   */
  content: string | null;
}

export interface InfosQueryInfos {
  _typename: "Infos";
  /**
   * Artist bio
   */
  bio: InfosQueryInfosBio | null;
  /**
   * Artist Instagram
   */
  instagram: string | null;
  /**
   * Artist RA page
   */
  RA: string | null;
  /**
   * Artist Facebook page
   */
  facebook: string | null;
  /**
   * Artist Twitter
   */
  twitter: string | null;
  /**
   * Artist soundcloud
   */
  soundcloud: string | null;
  /**
   * Artist discogs
   */
  discogs: string | null;
  /**
   * Booking information details 
   */
  bookingDetails: string | null;
}

export interface InfosQuery {
  infos: InfosQueryInfos;
}

export interface InfosQueryVariables {
  profile: string;
}
