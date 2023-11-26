/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: EventSnippetFragment
// ====================================================

export interface EventSnippetFragmentFlyer {
  __typename: "flyer";
  /**
   * front image source
   */
  front: string | null;
}

export interface EventSnippetFragment {
  __typename: "Event";
  /**
   * event ID
   */
  _id: string | null;
  /**
   * event slug
   */
  slug: string | null;
  /**
   * event date
   */
  date: Any | null;
  /**
   * title
   */
  title: string | null;
  /**
   * country name
   */
  country: string | null;
  /**
   * address
   */
  address: string | null;
  /**
   * time (begin / end)
   */
  flyer: EventSnippetFragmentFlyer | null;
}
