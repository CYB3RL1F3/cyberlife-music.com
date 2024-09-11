/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: EventsQuery
// ====================================================

export interface EventsQueryEventsFlyer {
  __typename: "flyer";
  /**
   * front image source
   */
  front: string | null;
}

export interface EventsQueryEvents {
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
  date: any | null;
  /**
   * event end date
   */
  endDate: any | null;
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
  flyer: EventsQueryEventsFlyer | null;
}

export interface EventsQuery {
  events: EventsQueryEvents[];
}

export interface EventsQueryVariables {
  profile: string;
}
