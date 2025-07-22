/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum Environment {
  dev = "dev",
  prod = "prod",
  staging = "staging",
}

export interface AddressInput {
  name: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  extra?: string | null;
}

export interface ArtistDto {
  name?: string | null;
  role?: string | null;
}

export interface BillingDto {
  address: AddressInput;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
}

export interface CartInput {
  items: CartItemInput[];
  amount: number;
  amountWithTax: number;
  vat: number;
  redeem?: string | null;
}

export interface CartItemInput {
  id: string;
  quantity: number;
  amount: number;
  productId: string;
  product: ReleaseDtoInput;
}

export interface CommentDto {
  id?: number | null;
  body?: string | null;
  createdAt?: string | null;
  timestamp?: number | null;
  user?: UserDto | null;
}

export interface ContactDto {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface DiscogsStatsDto {
  collection?: number | null;
  wantlist?: number | null;
}

export interface ExpeditionInput {
  trackingNumber?: string | null;
  service: string;
  status: string;
  address: AddressInput;
  email: string;
  phone: string;
  amountWithTax: number;
  vat: number;
}

export interface LikeDto {
  avatar?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  fullName?: string | null;
  id?: number | null;
  soundcloud?: string | null;
  uri?: string | null;
  urn?: string | null;
  userName?: string | null;
  verified?: boolean | null;
  city?: string | null;
  country?: string | null;
  createdAt?: any | null;
}

export interface OrderDto {
  cart: CartInput;
  orderAt: any;
  updatedAt: any;
  expedition: ExpeditionInput;
  billing: BillingDto;
  query?: string | null;
  webshopId: string;
}

export interface PaymentInput {
  id: string;
  transactionId: string;
  paymentMethod: string;
  transactionDate: any;
}

export interface PlaylistTrackDto {
  id?: number | null;
  slug?: string | null;
  title?: string | null;
  genre?: string | null;
  description?: string | null;
  uri?: string | null;
  url?: string | null;
  position?: number | null;
  license?: string | null;
  artwork?: string | null;
  download?: string | null;
  soundcloud?: string | null;
  date?: any | null;
  downloadable?: boolean | null;
  duration?: number | null;
  stats?: StatsDto | null;
  taglist?: string[] | null;
  waveform?: string | null;
  tracklist?: string[] | null;
  comments?: CommentDto[] | null;
  likes?: LikeDto[] | null;
}

export interface ReleaseDtoInput {
  title?: string | null;
  slug?: string | null;
  label?: string | null;
  thumb?: string | null;
  artist?: string | null;
  format?: string | null;
  uri?: string | null;
  role?: string | null;
  year?: number | null;
  resourceUrl?: string | null;
  type?: string | null;
  genre?: string | null;
  releaseId?: number | null;
  mainRelease?: number | null;
  images?: string[] | null;
  releaseDate?: any | null;
  cat?: string | null;
  tracklist?: ReleaseTrackDto[] | null;
  notes?: string | null;
  discogs?: string | null;
  bandcamp?: string | null;
  country?: string | null;
  styles?: string[] | null;
  stats?: DiscogsStatsDto | null;
}

export interface ReleaseTrackDto {
  title?: string | null;
  duration?: string | null;
  id?: string | null;
  position?: string | null;
  fullTitle?: string | null;
  artists?: ArtistDto[] | null;
  extraartists?: ArtistDto[] | null;
  stream?: PlaylistTrackDto | null;
}

export interface StatsDto {
  count?: number | null;
  downloads?: number | null;
  favorites?: number | null;
}

export interface SubscriptionDto {
  endpoint?: string | null;
  keys?: SubscriptionKeys | null;
}

export interface SubscriptionKeys {
  auth?: string | null;
  p256dh?: string | null;
}

export interface UserDto {
  avatar?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  fullName?: string | null;
  id?: number | null;
  soundcloud?: string | null;
  uri?: string | null;
  urn?: string | null;
  userName?: string | null;
  verified?: boolean | null;
  city?: string | null;
  country?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
