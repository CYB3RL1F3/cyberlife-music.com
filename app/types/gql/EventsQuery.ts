/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: EventsQuery
// ====================================================

export interface EventsQueryEvents {
  _typename: "Event";
  /**
   * event ID
   */
  Id: string | null;
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
}

export interface EventsQuery {
  events: EventsQueryEvents[];
}

export interface EventsQueryVariables {
  profile: string;
}
