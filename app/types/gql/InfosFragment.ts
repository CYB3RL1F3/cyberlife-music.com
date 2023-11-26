/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: InfosFragment
// ====================================================

export interface InfosFragmentBio {
  __typename: "bio";
  /**
   * Artist content
   */
  content: string | null;
}

export interface InfosFragment {
  __typename: "Infos";
  /**
   * Artist bio
   */
  bio: InfosFragmentBio | null;
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
