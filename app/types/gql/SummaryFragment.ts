/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SummaryFragment
// ====================================================

export interface SummaryFragmentNextEventFlyer {
  __typename: "flyer";
  /**
   * front image source
   */
  front: string | null;
}

export interface SummaryFragmentNextEvent {
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
   * description
   */
  description: string | null;
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
  flyer: SummaryFragmentNextEventFlyer | null;
}

export interface SummaryFragmentTopPodcast {
  __typename: "Track";
  /**
   * track ID
   */
  id: number | null;
  /**
   * track slug
   */
  slug: string | null;
  /**
   * track title
   */
  title: string | null;
  /**
   * track genre
   */
  genre: string | null;
  /**
   * track description
   */
  description: string | null;
  /**
   * track artwork
   */
  artwork: string | null;
  /**
   * track date
   */
  date: any | null;
  /**
   * track uri
   */
  uri: string | null;
  /**
   * track url
   */
  url: string | null;
  /**
   * track duration
   */
  duration: number | null;
  /**
   * track waveform
   */
  waveform: string | null;
  /**
   * track downloadable
   */
  downloadable: boolean | null;
  /**
   * track download
   */
  download: string | null;
  /**
   * track soundcloud
   */
  soundcloud: string | null;
}

export interface SummaryFragmentLatestPodcast {
  __typename: "Track";
  /**
   * track ID
   */
  id: number | null;
  /**
   * track slug
   */
  slug: string | null;
  /**
   * track title
   */
  title: string | null;
  /**
   * track genre
   */
  genre: string | null;
  /**
   * track description
   */
  description: string | null;
  /**
   * track artwork
   */
  artwork: string | null;
  /**
   * track date
   */
  date: any | null;
  /**
   * track uri
   */
  uri: string | null;
  /**
   * track url
   */
  url: string | null;
  /**
   * track duration
   */
  duration: number | null;
  /**
   * track waveform
   */
  waveform: string | null;
  /**
   * track downloadable
   */
  downloadable: boolean | null;
  /**
   * track download
   */
  download: string | null;
  /**
   * track soundcloud
   */
  soundcloud: string | null;
}

export interface SummaryFragmentLatestReleasesReleaseTracklist {
  __typename: "ReleaseTrack";
  /**
   * Release's Track title
   */
  title: string | null;
}

export interface SummaryFragmentLatestReleasesRelease {
  __typename: "ReleaseDtoOutput";
  /**
   * release ID
   */
  _id: string | null;
  /**
   * Release slug
   */
  slug: string | null;
  /**
   * Release title
   */
  title: string | null;
  /**
   * Release date
   */
  releaseDate: any | null;
  /**
   * Release role
   */
  role: string | null;
  /**
   * Release year
   */
  year: number | null;
  /**
   * Release thumb url
   */
  thumb: string | null;
  /**
   * Release label
   */
  label: string | null;
  /**
   * Release tracklist
   */
  tracklist: SummaryFragmentLatestReleasesReleaseTracklist[] | null;
  /**
   * Release discogs
   */
  discogs: string | null;
  /**
   * Release bandcamp
   */
  bandcamp: string | null;
  /**
   * Release notes
   */
  notes: string | null;
}

export interface SummaryFragmentLatestReleases {
  __typename: "ReleaseItem";
  /**
   * Item id
   */
  id: string | null;
  /**
   * Item name
   */
  name: string | null;
  /**
   * Item price
   */
  price: number | null;
  /**
   * Item price
   */
  availableQuantity: number | null;
  /**
   * Item release
   */
  release: SummaryFragmentLatestReleasesRelease | null;
}

export interface SummaryFragmentLatestVideo {
  __typename: "Video";
  /**
   * Video url
   */
  url: string | null;
  /**
   * Video title
   */
  title: string | null;
  /**
   * Video description
   */
  description: string | null;
  /**
   * Video type source
   */
  type: string | null;
  /**
   * Video illustration
   */
  illustration: string | null;
  /**
   * Video slug
   */
  slug: string | null;
  /**
   * post ID
   */
  _id: string | null;
}

export interface SummaryFragment {
  __typename: "SummaryEntity";
  /**
   * Next event
   */
  nextEvent: SummaryFragmentNextEvent | null;
  /**
   * top podcast
   */
  topPodcast: SummaryFragmentTopPodcast | null;
  /**
   * latest podcast
   */
  latestPodcast: SummaryFragmentLatestPodcast | null;
  /**
   * Recent releases
   */
  latestReleases: SummaryFragmentLatestReleases[] | null;
  /**
   * Latest video
   */
  latestVideo: SummaryFragmentLatestVideo | null;
}
