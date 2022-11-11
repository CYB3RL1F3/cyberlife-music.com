/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: EventSnippetFragment
// ====================================================

export interface EventSnippetFragmentFlyer {
  _typename: "flyer";
  /**
   * front image source
   */
  front: string | null;
}

export interface EventSnippetFragment {
  _typename: "Event";
  /**
   * event ID
   */
  _id: string | null;
  /**
   * event date
   */
  date: any | null;
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
