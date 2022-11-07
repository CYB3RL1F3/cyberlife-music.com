/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: EventFragment
// ====================================================

export interface EventFragmentTime {
  _typename: "time";
  /**
   * time start
   */
  begin: string | null;
  /**
   * time end
   */
  end: string | null;
}

export interface EventFragmentFlyer {
  _typename: "flyer";
  /**
   * front image source
   */
  front: string | null;
  /**
   * back image source
   */
  back: string | null;
}

export interface EventFragmentLocation {
  _typename: "location";
  /**
   * position
   */
  position: number[] | null;
}

export interface EventFragment {
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
   * event Id
   */
  venue: string | null;
  /**
   * time (begin / end)
   */
  time: EventFragmentTime | null;
  /**
   * time (begin / end)
   */
  flyer: EventFragmentFlyer | null;
  /**
   * location
   */
  location: EventFragmentLocation | null;
}
