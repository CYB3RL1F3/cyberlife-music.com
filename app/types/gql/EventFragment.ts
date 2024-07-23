/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: EventFragment
// ====================================================

export interface EventFragmentFlyer {
  __typename: "flyer";
  /**
   * front image source
   */
  front: string | null;
  /**
   * back image source
   */
  back: string | null;
}

export interface EventFragmentTime {
  __typename: "time";
  /**
   * time start
   */
  begin: string | null;
  /**
   * time end
   */
  end: string | null;
}

export interface EventFragmentLocation {
  __typename: "location";
  /**
   * position
   */
  position: number[] | null;
}

export interface EventFragmentLinks {
  __typename: "links";
  /**
   * event
   */
  event: string | null;
  /**
   * venue
   */
  venue: string | null;
}

export interface EventFragment {
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
   * title
   */
  title: string | null;
  /**
   * event date
   */
  date: Any | null;
  /**
   * event end date
   */
  endDate: Any | null;
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
  flyer: EventFragmentFlyer | null;
  /**
   * cost
   */
  cost: string | null;
  /**
   * lineup
   */
  lineup: string[] | null;
  /**
   * promoter name
   */
  promoter: string | null;
  /**
   * description
   */
  description: string | null;
  /**
   * event Id
   */
  venue: string | null;
  /**
   * time (begin / end)
   */
  time: EventFragmentTime | null;
  /**
   * location
   */
  location: EventFragmentLocation | null;
  /**
   * time (begin / end)
   */
  links: EventFragmentLinks | null;
}
