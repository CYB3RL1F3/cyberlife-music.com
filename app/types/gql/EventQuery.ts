/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: EventQuery
// ====================================================

export interface EventQueryEventFlyer {
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

export interface EventQueryEventTime {
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

export interface EventQueryEventLocation {
  __typename: "location";
  /**
   * position
   */
  position: number[] | null;
}

export interface EventQueryEventLinks {
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

export interface EventQueryEvent {
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
  flyer: EventQueryEventFlyer | null;
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
  time: EventQueryEventTime | null;
  /**
   * location
   */
  location: EventQueryEventLocation | null;
  /**
   * time (begin / end)
   */
  links: EventQueryEventLinks | null;
}

export interface EventQuery {
  event: EventQueryEvent;
}

export interface EventQueryVariables {
  profile: string;
  id: string;
}
