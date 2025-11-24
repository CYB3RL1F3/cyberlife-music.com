export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type Address = {
  /** address */
  address: Scalars['String']['output'];
  /** City name */
  city: Scalars['String']['output'];
  /** Country */
  country: Scalars['String']['output'];
  /** Extra informations */
  extra: Maybe<Scalars['String']['output']>;
  /** name */
  name: Scalars['String']['output'];
  /** Zip code */
  zipCode: Scalars['String']['output'];
};

export type AddressInput = {
  /** address */
  address: Scalars['String']['input'];
  /** City name */
  city: Scalars['String']['input'];
  /** Country */
  country: Scalars['String']['input'];
  /** Extra informations */
  extra: InputMaybe<Scalars['String']['input']>;
  /** name */
  name: Scalars['String']['input'];
  /** Zip code */
  zipCode: Scalars['String']['input'];
};

export type ArtistDto = {
  /** Artist Name */
  name: InputMaybe<Scalars['String']['input']>;
  /** Artist Role */
  role: InputMaybe<Scalars['String']['input']>;
};

export type AutocompleteLocationEntity = {
  /** suggestions */
  suggestions: Array<AutocompleteLocationSuggestion>;
};

export type AutocompleteLocationSuggestion = {
  /** city */
  city: Scalars['String']['output'];
  /** country */
  country: Scalars['String']['output'];
  /** country code */
  countryCode: Scalars['String']['output'];
  /** zipcode */
  zipcode: Scalars['String']['output'];
};

export type AutocompleteLocationSuggestionInput = {
  /** Country */
  country: Scalars['String']['input'];
  /** Language */
  language: InputMaybe<Scalars['String']['input']>;
  /** Limit */
  limit: InputMaybe<Scalars['Float']['input']>;
  /** Query */
  query: Scalars['String']['input'];
  /** Autocomplete type */
  type: AutocompleteLocationSuggestionType;
};

/** The type of autocomplete suggestions */
export enum AutocompleteLocationSuggestionType {
  Address = 'address',
  Category = 'category',
  City = 'city',
  Country = 'country',
  District = 'district',
  Locality = 'locality',
  Neighborhood = 'neighborhood',
  Place = 'place',
  Poi = 'poi',
  Postcode = 'postcode',
  Region = 'region',
  Street = 'street'
}

export type Billing = {
  /** postal address */
  address: Address;
  /** email for order */
  email: Scalars['String']['output'];
  /** amount ttc */
  firstName: Scalars['String']['output'];
  /** amount ttc */
  lastName: Scalars['String']['output'];
  /** phone number */
  phone: Scalars['String']['output'];
};

export type BillingDto = {
  /** postal address */
  address: AddressInput;
  /** email for order */
  email: Scalars['String']['input'];
  /** amount ttc */
  firstName: Scalars['String']['input'];
  /** amount ttc */
  lastName: Scalars['String']['input'];
  /** phone number */
  phone: Scalars['String']['input'];
};

export type BioDto = {
  /** Artist content */
  content: InputMaybe<Scalars['String']['input']>;
  /** Artist bio intro */
  intro: InputMaybe<Scalars['String']['input']>;
};

export type Cache = {
  /** cache TTL */
  ttl: Maybe<CacheTtl>;
  /** Mailer email recipient  */
  use: Maybe<Scalars['Boolean']['output']>;
};

export type CacheDto = {
  /** cache TTL */
  ttl: InputMaybe<Ttl>;
  /** Mailer email recipient  */
  use: InputMaybe<Scalars['Boolean']['input']>;
};

export type CacheTtl = {
  /** Cache TTL Resident Advisor */
  RA: Maybe<Scalars['Float']['output']>;
  /** Cache TTL discogs  */
  discogs: Maybe<Scalars['Float']['output']>;
  /** Cache TTL soundcloud */
  soundcloud: Maybe<Scalars['Float']['output']>;
};

export type CarrierPrice = {
  /** Carrier collissimo price */
  colissimoPrice: Scalars['Float']['output'];
  /** Carrier Mondial Relay price */
  mondialRelayPrice: Maybe<Scalars['Float']['output']>;
  /** Carrier ups price */
  upsPrice: Scalars['Float']['output'];
};

export type Cart = {
  /** Cart total amount */
  amount: Scalars['Float']['output'];
  /** amount ttc */
  amountWithTax: Scalars['Float']['output'];
  /** product id */
  items: Array<CartItem>;
  /** Cart total redeem code */
  redeem: Maybe<Scalars['String']['output']>;
  /** amount ttc */
  vat: Scalars['Float']['output'];
};

export type CartInput = {
  /** Cart total amount */
  amount: Scalars['Float']['input'];
  /** amount ttc */
  amountWithTax: Scalars['Float']['input'];
  /** product id */
  items: Array<CartItemInput>;
  /** Cart total redeem code */
  redeem: InputMaybe<Scalars['String']['input']>;
  /** amount ttc */
  vat: Scalars['Float']['input'];
};

export type CartItem = {
  /** Cart item price */
  amount: Scalars['Float']['output'];
  /** Cart item Id */
  id: Scalars['String']['output'];
  /** Release */
  product: ReleaseDto;
  /** Cart item product id */
  productId: Scalars['String']['output'];
  /** Cart item quantity */
  quantity: Scalars['Float']['output'];
};

export type CartItemInput = {
  /** Cart item price */
  amount: Scalars['Float']['input'];
  /** Cart item Id */
  id: Scalars['String']['input'];
  /** Release */
  product: ReleaseDtoInput;
  /** Cart item product id */
  productId: Scalars['String']['input'];
  /** Cart item quantity */
  quantity: Scalars['Float']['input'];
};

export type Charts = {
  /** chart ID */
  _id: Maybe<Scalars['String']['output']>;
  /** chart date */
  date: Maybe<Scalars['Date']['output']>;
  /** chart Id */
  id: Maybe<Scalars['String']['output']>;
  /** chart rank */
  rank: Maybe<Scalars['String']['output']>;
  /** chart rank */
  tracks: Maybe<Array<Tracks>>;
};

export type Comment = {
  /** comment body */
  body: Maybe<Scalars['String']['output']>;
  /** comment creation date */
  createdAt: Maybe<Scalars['String']['output']>;
  /** comment ID */
  id: Maybe<Scalars['Float']['output']>;
  /** comment timestamp */
  timestamp: Maybe<Scalars['Float']['output']>;
  /** comment user */
  user: Maybe<User>;
};

export type CommentDto = {
  /** comment body */
  body: InputMaybe<Scalars['String']['input']>;
  /** comment creation date */
  createdAt: InputMaybe<Scalars['String']['input']>;
  /** comment ID */
  id: InputMaybe<Scalars['Float']['input']>;
  /** comment timestamp */
  timestamp: InputMaybe<Scalars['Float']['input']>;
  /** comment user */
  user: InputMaybe<UserDto>;
};

export type Company = {
  /** Company Address  */
  address: Maybe<Address>;
  /** Company Email  */
  email: Maybe<Scalars['String']['output']>;
  /** Company Phone  */
  phone: Maybe<Scalars['String']['output']>;
  /** Company Siret  */
  siret: Maybe<Scalars['String']['output']>;
  /** Company Vat number  */
  vat: Maybe<Scalars['String']['output']>;
};

export type CompanyInput = {
  /** Company Address  */
  address: InputMaybe<AddressInput>;
  /** Company Email  */
  email: InputMaybe<Scalars['String']['input']>;
  /** Company Phone  */
  phone: InputMaybe<Scalars['String']['input']>;
  /** Company Siret  */
  siret: InputMaybe<Scalars['String']['input']>;
  /** Company Vat number  */
  vat: InputMaybe<Scalars['String']['input']>;
};

export type ContactDto = {
  /** email address from where to send the message */
  email: Scalars['String']['input'];
  /** email message */
  message: Scalars['String']['input'];
  /** email name */
  name: Scalars['String']['input'];
  /** email subject */
  subject: Scalars['String']['input'];
};

export type CustomerEntity = {
  /** User ID */
  _id: Maybe<Scalars['String']['output']>;
  /** User birthday */
  birthday: Maybe<Scalars['Date']['output']>;
  /** User confirmed email */
  confirmedEmail: Maybe<Scalars['Boolean']['output']>;
  /** User creation date */
  createdAt: Maybe<Scalars['Date']['output']>;
  /** User email */
  email: Maybe<Scalars['String']['output']>;
  /** User firstname */
  firstName: Maybe<Scalars['String']['output']>;
  /** User lastname */
  lastName: Maybe<Scalars['String']['output']>;
  /** User orderHistory */
  orderHistory: Maybe<Scalars['String']['output']>;
  /** User subtitle */
  subtitle: Maybe<Scalars['String']['output']>;
  /** User update date */
  updatedAt: Maybe<Scalars['Date']['output']>;
  /** User id */
  userId: Maybe<Scalars['String']['output']>;
};

export type CustomerInput = {
  /** User ID */
  _id: InputMaybe<Scalars['String']['input']>;
  /** User birthday */
  birthday: InputMaybe<Scalars['Date']['input']>;
  /** User confirmed email */
  confirmedEmail: InputMaybe<Scalars['Boolean']['input']>;
  /** User creation date */
  createdAt: InputMaybe<Scalars['Date']['input']>;
  /** User email */
  email: InputMaybe<Scalars['String']['input']>;
  /** User firstname */
  firstName: InputMaybe<Scalars['String']['input']>;
  /** User lastname */
  lastName: InputMaybe<Scalars['String']['input']>;
  /** User orderHistory */
  orderHistory: InputMaybe<Scalars['String']['input']>;
  /** User subtitle */
  subtitle: InputMaybe<Scalars['String']['input']>;
  /** User update date */
  updatedAt: InputMaybe<Scalars['Date']['input']>;
  /** User id */
  userId: InputMaybe<Scalars['String']['input']>;
};

export type DiscogsDto = {
  /** Artist ID */
  artistId: InputMaybe<Scalars['Float']['input']>;
  /** Discogs URL  */
  url: InputMaybe<Scalars['String']['input']>;
};

export type DiscogsStatsDto = {
  /** Artist stats nb records in collection */
  collection: InputMaybe<Scalars['Float']['input']>;
  /** Artist stats nb records in wantlist */
  wantlist: InputMaybe<Scalars['Float']['input']>;
};

export type Download = {
  /** Date of the download */
  date: Scalars['Date']['output'];
  /** Download */
  downloads: Array<DownloadItem>;
  /** User email */
  email: Scalars['String']['output'];
  /** User ID */
  expire: Scalars['Date']['output'];
  /** ID */
  id: Scalars['String']['output'];
  /** token */
  token: Scalars['String']['output'];
};

export type DownloadItem = {
  /** Name of the download */
  name: Scalars['String']['output'];
  /** Release infos */
  release: Release;
  /** URL of the download */
  url: Scalars['String']['output'];
};

export enum Environment {
  Dev = 'dev',
  Prod = 'prod',
  Staging = 'staging'
}

export type Event = {
  /** event ID */
  _id: Maybe<Scalars['String']['output']>;
  /** address */
  address: Maybe<Scalars['String']['output']>;
  /** RA area */
  area: Maybe<Scalars['String']['output']>;
  /** RA area Id */
  areaId: Maybe<Scalars['String']['output']>;
  /** cost */
  cost: Maybe<Scalars['String']['output']>;
  /** country name */
  country: Maybe<Scalars['String']['output']>;
  /** event date */
  date: Maybe<Scalars['Date']['output']>;
  /** description */
  description: Maybe<Scalars['String']['output']>;
  /** event end date */
  endDate: Maybe<Scalars['Date']['output']>;
  /** event Id */
  eventId: Maybe<Scalars['String']['output']>;
  /** time (begin / end) */
  flyer: Maybe<Flyer>;
  /** event Id */
  id: Maybe<Scalars['String']['output']>;
  /** lineup */
  lineup: Maybe<Array<Scalars['String']['output']>>;
  /** time (begin / end) */
  links: Maybe<Links>;
  /** location */
  location: Maybe<Location>;
  /** promoter name */
  promoter: Maybe<Scalars['String']['output']>;
  /** event slug */
  slug: Maybe<Scalars['String']['output']>;
  /** time (begin / end) */
  time: Maybe<Time>;
  /** title */
  title: Maybe<Scalars['String']['output']>;
  /** event Id */
  venue: Maybe<Scalars['String']['output']>;
  /** venue Id */
  venueId: Maybe<Scalars['String']['output']>;
};

export type Expedition = {
  /** postal address */
  address: Address;
  /** amount ttc */
  amountWithTax: Scalars['Float']['output'];
  /** email for order */
  email: Scalars['String']['output'];
  /** phone number */
  phone: Scalars['String']['output'];
  /** service */
  service: Scalars['String']['output'];
  /** service */
  status: Scalars['String']['output'];
  /** tracking number */
  trackingNumber: Maybe<Scalars['String']['output']>;
  /** amount ttc */
  vat: Scalars['Float']['output'];
};

export type ExpeditionInput = {
  /** postal address */
  address: AddressInput;
  /** amount ttc */
  amountWithTax: Scalars['Float']['input'];
  /** email for order */
  email: Scalars['String']['input'];
  /** phone number */
  phone: Scalars['String']['input'];
  /** service */
  service: Scalars['String']['input'];
  /** service */
  status: Scalars['String']['input'];
  /** tracking number */
  trackingNumber: InputMaybe<Scalars['String']['input']>;
  /** amount ttc */
  vat: Scalars['Float']['input'];
};

export type FeatureFlagActive = {
  /** Feature flag name */
  flag: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
};

export type FeatureFlagRules = {
  /** Feature flag rules */
  dev: Maybe<Scalars['Boolean']['output']>;
  /** Feature flag rules */
  prod: Maybe<Scalars['Boolean']['output']>;
  /** Feature flag rules */
  staging: Maybe<Scalars['Boolean']['output']>;
};

export type FeatureFlagRulesInput = {
  /** Feature flag rules */
  dev: InputMaybe<Scalars['Boolean']['input']>;
  /** Feature flag rules */
  prod: InputMaybe<Scalars['Boolean']['input']>;
  /** Feature flag rules */
  staging: InputMaybe<Scalars['Boolean']['input']>;
};

export type FlyerDto = {
  /** back image source */
  back: InputMaybe<Scalars['String']['input']>;
  /** front image source */
  front: InputMaybe<Scalars['String']['input']>;
  /** list thumb image source */
  list: InputMaybe<Scalars['String']['input']>;
};

export type Infos = {
  /** Artist RA page */
  RA: Maybe<Scalars['String']['output']>;
  /** infos ID */
  _id: Maybe<Scalars['String']['output']>;
  /** Aliases  */
  aliases: Maybe<Scalars['String']['output']>;
  /** Artist bandcamp */
  bandcamp: Maybe<Scalars['String']['output']>;
  /** Artist bio */
  bio: Maybe<Bio>;
  /** Booking information details  */
  bookingDetails: Maybe<Scalars['String']['output']>;
  /** Country  */
  country: Maybe<Scalars['String']['output']>;
  /** Artist discogs */
  discogs: Maybe<Scalars['String']['output']>;
  /** Artist Facebook page */
  facebook: Maybe<Scalars['String']['output']>;
  /** Nb of followers */
  followers: Maybe<Scalars['Float']['output']>;
  /** Artist Instagram */
  instagram: Maybe<Scalars['String']['output']>;
  /** Labels */
  labels: Maybe<Array<Label>>;
  /** Artist name */
  name: Maybe<Scalars['String']['output']>;
  /** Artist picture */
  picture: Maybe<Scalars['String']['output']>;
  /** Artist soundcloud */
  soundcloud: Maybe<Scalars['String']['output']>;
  /** Artist Twitter */
  twitter: Maybe<Scalars['String']['output']>;
  /** Artist website */
  website: Maybe<Scalars['String']['output']>;
};

export type LabelDto = {
  /** Label RA */
  RA: InputMaybe<Scalars['String']['input']>;
  /** Label image */
  image: InputMaybe<Scalars['String']['input']>;
  /** Label name */
  name: InputMaybe<Scalars['String']['input']>;
};

export type Like = {
  /** user avatar */
  avatar: Maybe<Scalars['String']['output']>;
  /** user city */
  city: Maybe<Scalars['String']['output']>;
  /** user country */
  country: Maybe<Scalars['String']['output']>;
  /** like creation date */
  createdAt: Maybe<Scalars['Date']['output']>;
  /** user first name */
  firstName: Maybe<Scalars['String']['output']>;
  /** user full name */
  fullName: Maybe<Scalars['String']['output']>;
  /** user ID */
  id: Maybe<Scalars['Float']['output']>;
  /** user last name */
  lastName: Maybe<Scalars['String']['output']>;
  /** user soundcloud URL */
  soundcloud: Maybe<Scalars['String']['output']>;
  /** user uri */
  uri: Maybe<Scalars['String']['output']>;
  /** user urn */
  urn: Maybe<Scalars['String']['output']>;
  /** username */
  userName: Maybe<Scalars['String']['output']>;
  /** user is verified */
  verified: Maybe<Scalars['Boolean']['output']>;
};

export type LikeDto = {
  /** user avatar */
  avatar: InputMaybe<Scalars['String']['input']>;
  /** user city */
  city: InputMaybe<Scalars['String']['input']>;
  /** user country */
  country: InputMaybe<Scalars['String']['input']>;
  /** like creation date */
  createdAt: InputMaybe<Scalars['Date']['input']>;
  /** user first name */
  firstName: InputMaybe<Scalars['String']['input']>;
  /** user full name */
  fullName: InputMaybe<Scalars['String']['input']>;
  /** user ID */
  id: InputMaybe<Scalars['Float']['input']>;
  /** user last name */
  lastName: InputMaybe<Scalars['String']['input']>;
  /** user soundcloud URL */
  soundcloud: InputMaybe<Scalars['String']['input']>;
  /** user uri */
  uri: InputMaybe<Scalars['String']['input']>;
  /** user urn */
  urn: InputMaybe<Scalars['String']['input']>;
  /** username */
  userName: InputMaybe<Scalars['String']['input']>;
  /** user is verified */
  verified: InputMaybe<Scalars['Boolean']['input']>;
};

export type LinksDto = {
  /** event */
  event: InputMaybe<Scalars['String']['input']>;
  /** venue */
  venue: InputMaybe<Scalars['String']['input']>;
};

export type LocationDto = {
  /** address */
  address: InputMaybe<Scalars['String']['input']>;
  /** track ID */
  id: InputMaybe<Scalars['String']['input']>;
  /** position */
  position: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type MailerDto = {
  /** Mailer prefix */
  prefix: InputMaybe<Scalars['String']['input']>;
  /** Mailer email recipient  */
  recipient: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  cancelOrder: Scalars['Boolean']['output'];
  confirmOrderPaypal: Order;
  confirmOrderStripe: Order;
  contact: Scalars['Boolean']['output'];
  downloadOrderTracks: Download;
  intentOrderPaypal: OrderPaypalResponse;
  intentOrderStripe: OrderStripeResponse;
  subscribe: Subscription;
  unsubscribe: Deleted;
};


export type MutationCancelOrderArgs = {
  orderId: Scalars['String']['input'];
  profile: Scalars['String']['input'];
};


export type MutationConfirmOrderPaypalArgs = {
  orderId: Scalars['String']['input'];
  payment: PaymentInput;
  profile: Scalars['String']['input'];
};


export type MutationConfirmOrderStripeArgs = {
  orderId: Scalars['String']['input'];
  payment: PaymentInput;
  profile: Scalars['String']['input'];
};


export type MutationContactArgs = {
  message: ContactDto;
  profile: Scalars['String']['input'];
};


export type MutationDownloadOrderTracksArgs = {
  email: Scalars['String']['input'];
  orderId: Scalars['String']['input'];
  profile: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationIntentOrderPaypalArgs = {
  order: OrderDto;
  profile: Scalars['String']['input'];
};


export type MutationIntentOrderStripeArgs = {
  order: OrderDto;
  profile: Scalars['String']['input'];
};


export type MutationSubscribeArgs = {
  notificationPoolId: Scalars['String']['input'];
  subscription: SubscriptionDto;
};


export type MutationUnsubscribeArgs = {
  endpoint: Scalars['String']['input'];
  notificationPoolId: Scalars['String']['input'];
};

export type Order = {
  /** order ID */
  _id: Scalars['String']['output'];
  /** Order billing */
  billing: Billing;
  /** product id */
  cart: Cart;
  /** Order expedition */
  expedition: Expedition;
  /** Order date */
  orderAt: Scalars['Date']['output'];
  /** paid */
  paid: Scalars['Boolean']['output'];
  /** cart payment */
  payment: Payment;
  /** Order special informations */
  query: Maybe<Scalars['String']['output']>;
  /** Order status */
  status: Scalars['String']['output'];
  /** Order update date */
  updatedAt: Scalars['Date']['output'];
  /** Webshop ID */
  webshopId: Scalars['String']['output'];
};

export type OrderDto = {
  /** Order billing */
  billing: BillingDto;
  /** product id */
  cart: CartInput;
  /** Order expedition */
  expedition: ExpeditionInput;
  /** Order date */
  orderAt: Scalars['Date']['input'];
  /** Order special informations */
  query: InputMaybe<Scalars['String']['input']>;
  /** Order update date */
  updatedAt: Scalars['Date']['input'];
  /** Webshop ID */
  webshopId: Scalars['String']['input'];
};

export type OrderEntity = {
  /** order ID */
  _id: Scalars['String']['input'];
  /** Order billing */
  billing: BillingDto;
  /** product id */
  cart: CartInput;
  /** Order expedition */
  expedition: ExpeditionInput;
  /** Order date */
  orderAt: Scalars['Date']['input'];
  /** paid */
  paid: Scalars['Boolean']['input'];
  /** cart payment */
  payment: PaymentInput;
  /** Order special informations */
  query: InputMaybe<Scalars['String']['input']>;
  /** Order status */
  status: Scalars['String']['input'];
  /** Order update date */
  updatedAt: Scalars['Date']['input'];
  /** Webshop ID */
  webshopId: Scalars['String']['input'];
};

export type OrderPaypalResponse = {
  /** ID */
  order: Order;
  /** Intent */
  paymentIntent: PaypalResponse;
};

export type OrderStripeResponse = {
  /** ID */
  order: Order;
  /** Intent */
  paymentIntent: StripeResponse;
};

export type Payment = {
  /** payment ID */
  id: Scalars['String']['output'];
  /** Order payment method */
  paymentMethod: Scalars['String']['output'];
  /** Order transaction date */
  transactionDate: Scalars['Date']['output'];
  /** Transaction ID */
  transactionId: Scalars['String']['output'];
};

export type PaymentInput = {
  /** payment ID */
  id: Scalars['String']['input'];
  /** Order payment method */
  paymentMethod: Scalars['String']['input'];
  /** Order transaction date */
  transactionDate: Scalars['Date']['input'];
  /** Transaction ID */
  transactionId: Scalars['String']['input'];
};

export type PaypalIntent = {
  /** ID */
  id: Scalars['String']['output'];
  /** Links */
  links: Array<PaypalLink>;
  /** Status */
  status: Scalars['String']['output'];
};

export type PaypalLink = {
  /** Link URL */
  href: Scalars['String']['output'];
  /** Method */
  method: Scalars['String']['output'];
  /** Link URL */
  rel: Scalars['String']['output'];
};

export type PaypalResponse = {
  /** Intent */
  intent: PaypalIntent;
  /** Status */
  status: Scalars['Float']['output'];
};

export type Playlist = {
  /** playlist ID */
  _id: Maybe<Scalars['String']['output']>;
  /** playlist artwork */
  artwork: Maybe<Scalars['String']['output']>;
  /** playlist autofill */
  autofill: Maybe<Scalars['Boolean']['output']>;
  /** playlist description */
  description: Maybe<Scalars['String']['output']>;
  /** playlist genre */
  genre: Maybe<Scalars['String']['output']>;
  /** playlist ID */
  id: Maybe<Scalars['Float']['output']>;
  /** playlist name */
  name: Maybe<Scalars['String']['output']>;
  /** playlist soundcloud */
  soundcloud: Maybe<Scalars['String']['output']>;
  /** playlist taglist */
  taglist: Maybe<Array<Scalars['String']['output']>>;
  /** playlist title */
  title: Maybe<Scalars['String']['output']>;
  /** playlist tracks */
  tracks: Maybe<Array<Track>>;
};

export type PlaylistTrackDto = {
  /** track artwork */
  artwork: InputMaybe<Scalars['String']['input']>;
  /** track comments */
  comments: InputMaybe<Array<CommentDto>>;
  /** track date */
  date: InputMaybe<Scalars['Date']['input']>;
  /** track description */
  description: InputMaybe<Scalars['String']['input']>;
  /** track download */
  download: InputMaybe<Scalars['String']['input']>;
  /** track downloadable */
  downloadable: InputMaybe<Scalars['Boolean']['input']>;
  /** track duration */
  duration: InputMaybe<Scalars['Float']['input']>;
  /** track genre */
  genre: InputMaybe<Scalars['String']['input']>;
  /** track ID */
  id: InputMaybe<Scalars['Float']['input']>;
  /** track license */
  license: InputMaybe<Scalars['String']['input']>;
  /** track likes */
  likes: InputMaybe<Array<LikeDto>>;
  /** track position */
  position: InputMaybe<Scalars['Float']['input']>;
  /** track slug */
  slug: InputMaybe<Scalars['String']['input']>;
  /** track soundcloud */
  soundcloud: InputMaybe<Scalars['String']['input']>;
  /** track stats */
  stats: InputMaybe<StatsDto>;
  /** track taglist */
  taglist: InputMaybe<Array<Scalars['String']['input']>>;
  /** track title */
  title: InputMaybe<Scalars['String']['input']>;
  /** track tracklist */
  tracklist: InputMaybe<Array<Scalars['String']['input']>>;
  /** track uri */
  uri: InputMaybe<Scalars['String']['input']>;
  /** track url */
  url: InputMaybe<Scalars['String']['input']>;
  /** track waveform */
  waveform: InputMaybe<Scalars['String']['input']>;
};

export type Post = {
  /** post ID */
  _id: Maybe<Scalars['String']['output']>;
  /** Post content */
  content: Maybe<Scalars['String']['output']>;
  /** Post creation date */
  createdAt: Maybe<Scalars['Date']['output']>;
  /** Post illustration */
  illustration: Maybe<Scalars['String']['output']>;
  /** Post published */
  published: Maybe<Scalars['Boolean']['output']>;
  /** Post slug */
  slug: Maybe<Scalars['String']['output']>;
  /** Post subtitle */
  subtitle: Maybe<Scalars['String']['output']>;
  /** Post title */
  title: Maybe<Scalars['String']['output']>;
  /** Post update date */
  updatedAt: Maybe<Scalars['Date']['output']>;
  /** Post author id */
  userId: Maybe<Scalars['String']['output']>;
};

export type ProfileDto = {
  /** Artist name */
  artistName: Maybe<Scalars['String']['output']>;
  /** avatar url */
  avatar: Maybe<Scalars['String']['output']>;
  /** Cache */
  cache: Maybe<Cache>;
  /** Artist name */
  company: Maybe<Company>;
  /** Discogs Infos */
  discogs: Maybe<Discogs>;
  /** Profile email  */
  email: Maybe<Scalars['String']['output']>;
  /** Mailer */
  mailer: Maybe<Mailer>;
  /** Resident Advisor Credentials */
  residentAdvisor: Maybe<ResidentAdvisor>;
  /** Soundcloud Infos */
  soundcloud: Maybe<Soundcloud>;
  /** User Name  */
  userName: Maybe<Scalars['String']['output']>;
  /** User website  */
  website: Maybe<Scalars['String']['output']>;
};

export type Query = {
  autocompleteLocations: AutocompleteLocationEntity;
  carrierPrices: CarrierPrice;
  charts: Array<Charts>;
  event: Event;
  events: Array<Event>;
  featureFlag: FeatureFlagActive;
  featureFlags: Array<FeatureFlagActive>;
  infos: Infos;
  order: Order;
  playlist: Playlist;
  playlistTrack: Track;
  playlistTrackStream: Scalars['String']['output'];
  playlists: Playlist;
  post: Post;
  posts: Array<Post>;
  release: Release;
  releaseItem: ReleaseItem;
  releaseItems: Array<ReleaseItem>;
  releaseTrackById: ReleaseTrack;
  releaseTrackStream: Scalars['String']['output'];
  releases: Array<Release>;
  summary: SummaryEntity;
  video: Video;
  videos: Array<Video>;
};


export type QueryAutocompleteLocationsArgs = {
  payload: AutocompleteLocationSuggestionInput;
  source: InputMaybe<Source>;
};


export type QueryCarrierPricesArgs = {
  country: Scalars['String']['input'];
  items: Array<CartItemInput>;
  profile: Scalars['String']['input'];
};


export type QueryChartsArgs = {
  profile: Scalars['String']['input'];
};


export type QueryEventArgs = {
  eventId: Scalars['String']['input'];
  profile: Scalars['String']['input'];
};


export type QueryEventsArgs = {
  profile: Scalars['String']['input'];
};


export type QueryFeatureFlagArgs = {
  environment: Environment;
  id: Scalars['String']['input'];
  profile: Scalars['String']['input'];
};


export type QueryFeatureFlagsArgs = {
  environment: Environment;
  profile: Scalars['String']['input'];
};


export type QueryInfosArgs = {
  profile: Scalars['String']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['String']['input'];
  profile: Scalars['String']['input'];
};


export type QueryPlaylistArgs = {
  keyType: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  profile: Scalars['String']['input'];
};


export type QueryPlaylistTrackArgs = {
  keyType: InputMaybe<Scalars['String']['input']>;
  profile: Scalars['String']['input'];
  trackId: Scalars['String']['input'];
};


export type QueryPlaylistTrackStreamArgs = {
  id: Scalars['Float']['input'];
};


export type QueryPlaylistsArgs = {
  profile: Scalars['String']['input'];
};


export type QueryPostArgs = {
  author: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type QueryPostsArgs = {
  author: Scalars['String']['input'];
};


export type QueryReleaseArgs = {
  id: Scalars['String']['input'];
  profile: Scalars['String']['input'];
};


export type QueryReleaseItemArgs = {
  id: Scalars['String']['input'];
  profile: Scalars['String']['input'];
};


export type QueryReleaseItemsArgs = {
  profile: Scalars['String']['input'];
  webshopId: Scalars['String']['input'];
};


export type QueryReleaseTrackByIdArgs = {
  id: Scalars['String']['input'];
  profile: Scalars['String']['input'];
};


export type QueryReleaseTrackStreamArgs = {
  id: Scalars['Float']['input'];
};


export type QueryReleasesArgs = {
  profile: Scalars['String']['input'];
};


export type QuerySummaryArgs = {
  expectedNbReleases: InputMaybe<Scalars['Float']['input']>;
  playlist: Scalars['String']['input'];
  profile: Scalars['String']['input'];
  topPodcastId: Scalars['String']['input'];
  webshopId: Scalars['String']['input'];
};


export type QueryVideoArgs = {
  author: Scalars['String']['input'];
  id: Scalars['String']['input'];
  keyType: InputMaybe<Scalars['String']['input']>;
};


export type QueryVideosArgs = {
  author: Scalars['String']['input'];
};

export type Release = {
  /** release ID */
  _id: Maybe<Scalars['String']['output']>;
  /** Release artist name */
  artist: Maybe<Scalars['String']['output']>;
  /** Release bandcamp */
  bandcamp: Maybe<Scalars['String']['output']>;
  /** Release cat */
  cat: Maybe<Scalars['String']['output']>;
  /** Release country */
  country: Maybe<Scalars['String']['output']>;
  /** Release discogs */
  discogs: Maybe<Scalars['String']['output']>;
  /** Release format */
  format: Maybe<Scalars['String']['output']>;
  /** Release genre */
  genre: Maybe<Scalars['String']['output']>;
  /** Release images url */
  images: Maybe<Array<Scalars['String']['output']>>;
  /** Release label */
  label: Maybe<Scalars['String']['output']>;
  /** Release main release ID */
  mainRelease: Maybe<Scalars['Float']['output']>;
  /** Release notes */
  notes: Maybe<Scalars['String']['output']>;
  /** Release date */
  releaseDate: Maybe<Scalars['Date']['output']>;
  /** Release release ID */
  releaseId: Maybe<Scalars['Float']['output']>;
  /** Release resource Url */
  resourceUrl: Maybe<Scalars['String']['output']>;
  /** Release role */
  role: Maybe<Scalars['String']['output']>;
  /** Release slug */
  slug: Maybe<Scalars['String']['output']>;
  /** Release stats */
  stats: Maybe<DiscogsStats>;
  /** Release styles */
  styles: Maybe<Array<Scalars['String']['output']>>;
  /** Release thumb url */
  thumb: Maybe<Scalars['String']['output']>;
  /** Release title */
  title: Maybe<Scalars['String']['output']>;
  /** Release tracklist */
  tracklist: Maybe<Array<ReleaseTrack>>;
  /** Release type */
  type: Maybe<Scalars['String']['output']>;
  /** Release URI */
  uri: Maybe<Scalars['String']['output']>;
  /** Release year */
  year: Maybe<Scalars['Float']['output']>;
};

export type ReleaseDto = {
  /** Release artist name */
  artist: Maybe<Scalars['String']['output']>;
  /** Release bandcamp */
  bandcamp: Maybe<Scalars['String']['output']>;
  /** Release cat */
  cat: Maybe<Scalars['String']['output']>;
  /** Release country */
  country: Maybe<Scalars['String']['output']>;
  /** Release discogs */
  discogs: Maybe<Scalars['String']['output']>;
  /** Release format */
  format: Maybe<Scalars['String']['output']>;
  /** Release genre */
  genre: Maybe<Scalars['String']['output']>;
  /** Release images url */
  images: Maybe<Array<Scalars['String']['output']>>;
  /** Release label */
  label: Maybe<Scalars['String']['output']>;
  /** Release main release ID */
  mainRelease: Maybe<Scalars['Float']['output']>;
  /** Release notes */
  notes: Maybe<Scalars['String']['output']>;
  /** Release date */
  releaseDate: Maybe<Scalars['Date']['output']>;
  /** Release release ID */
  releaseId: Maybe<Scalars['Float']['output']>;
  /** Release resource Url */
  resourceUrl: Maybe<Scalars['String']['output']>;
  /** Release role */
  role: Maybe<Scalars['String']['output']>;
  /** Release slug */
  slug: Maybe<Scalars['String']['output']>;
  /** Release stats */
  stats: Maybe<DiscogsStats>;
  /** Release styles */
  styles: Maybe<Array<Scalars['String']['output']>>;
  /** Release thumb url */
  thumb: Maybe<Scalars['String']['output']>;
  /** Release title */
  title: Maybe<Scalars['String']['output']>;
  /** Release tracklist */
  tracklist: Maybe<Array<ReleaseTrack>>;
  /** Release type */
  type: Maybe<Scalars['String']['output']>;
  /** Release URI */
  uri: Maybe<Scalars['String']['output']>;
  /** Release year */
  year: Maybe<Scalars['Float']['output']>;
};

export type ReleaseDtoInput = {
  /** Release artist name */
  artist: InputMaybe<Scalars['String']['input']>;
  /** Release bandcamp */
  bandcamp: InputMaybe<Scalars['String']['input']>;
  /** Release cat */
  cat: InputMaybe<Scalars['String']['input']>;
  /** Release country */
  country: InputMaybe<Scalars['String']['input']>;
  /** Release discogs */
  discogs: InputMaybe<Scalars['String']['input']>;
  /** Release format */
  format: InputMaybe<Scalars['String']['input']>;
  /** Release genre */
  genre: InputMaybe<Scalars['String']['input']>;
  /** Release images url */
  images: InputMaybe<Array<Scalars['String']['input']>>;
  /** Release label */
  label: InputMaybe<Scalars['String']['input']>;
  /** Release main release ID */
  mainRelease: InputMaybe<Scalars['Float']['input']>;
  /** Release notes */
  notes: InputMaybe<Scalars['String']['input']>;
  /** Release date */
  releaseDate: InputMaybe<Scalars['Date']['input']>;
  /** Release release ID */
  releaseId: InputMaybe<Scalars['Float']['input']>;
  /** Release resource Url */
  resourceUrl: InputMaybe<Scalars['String']['input']>;
  /** Release role */
  role: InputMaybe<Scalars['String']['input']>;
  /** Release slug */
  slug: InputMaybe<Scalars['String']['input']>;
  /** Release stats */
  stats: InputMaybe<DiscogsStatsDto>;
  /** Release styles */
  styles: InputMaybe<Array<Scalars['String']['input']>>;
  /** Release thumb url */
  thumb: InputMaybe<Scalars['String']['input']>;
  /** Release title */
  title: InputMaybe<Scalars['String']['input']>;
  /** Release tracklist */
  tracklist: InputMaybe<Array<ReleaseTrackDto>>;
  /** Release type */
  type: InputMaybe<Scalars['String']['input']>;
  /** Release URI */
  uri: InputMaybe<Scalars['String']['input']>;
  /** Release year */
  year: InputMaybe<Scalars['Float']['input']>;
};

export type ReleaseDtoOutput = {
  /** release ID */
  _id: Maybe<Scalars['String']['output']>;
  /** Release artist name */
  artist: Maybe<Scalars['String']['output']>;
  /** Release bandcamp */
  bandcamp: Maybe<Scalars['String']['output']>;
  /** Release cat */
  cat: Maybe<Scalars['String']['output']>;
  /** Release country */
  country: Maybe<Scalars['String']['output']>;
  /** Release discogs */
  discogs: Maybe<Scalars['String']['output']>;
  /** Release format */
  format: Maybe<Scalars['String']['output']>;
  /** Release genre */
  genre: Maybe<Scalars['String']['output']>;
  /** Release images url */
  images: Maybe<Array<Scalars['String']['output']>>;
  /** Release label */
  label: Maybe<Scalars['String']['output']>;
  /** Release main release ID */
  mainRelease: Maybe<Scalars['Float']['output']>;
  /** Release notes */
  notes: Maybe<Scalars['String']['output']>;
  /** Release date */
  releaseDate: Maybe<Scalars['Date']['output']>;
  /** Release release ID */
  releaseId: Maybe<Scalars['Float']['output']>;
  /** Release resource Url */
  resourceUrl: Maybe<Scalars['String']['output']>;
  /** Release role */
  role: Maybe<Scalars['String']['output']>;
  /** Release slug */
  slug: Maybe<Scalars['String']['output']>;
  /** Release stats */
  stats: Maybe<DiscogsStats>;
  /** Release styles */
  styles: Maybe<Array<Scalars['String']['output']>>;
  /** Release thumb url */
  thumb: Maybe<Scalars['String']['output']>;
  /** Release title */
  title: Maybe<Scalars['String']['output']>;
  /** Release tracklist */
  tracklist: Maybe<Array<ReleaseTrack>>;
  /** Release type */
  type: Maybe<Scalars['String']['output']>;
  /** Release URI */
  uri: Maybe<Scalars['String']['output']>;
  /** Release year */
  year: Maybe<Scalars['Float']['output']>;
};

export type ReleaseEntityInput = {
  /** release ID */
  _id: InputMaybe<Scalars['String']['input']>;
  /** Release artist name */
  artist: InputMaybe<Scalars['String']['input']>;
  /** Release bandcamp */
  bandcamp: InputMaybe<Scalars['String']['input']>;
  /** Release cat */
  cat: InputMaybe<Scalars['String']['input']>;
  /** Release country */
  country: InputMaybe<Scalars['String']['input']>;
  /** Release discogs */
  discogs: InputMaybe<Scalars['String']['input']>;
  /** Release format */
  format: InputMaybe<Scalars['String']['input']>;
  /** Release genre */
  genre: InputMaybe<Scalars['String']['input']>;
  /** Release images url */
  images: InputMaybe<Array<Scalars['String']['input']>>;
  /** Release label */
  label: InputMaybe<Scalars['String']['input']>;
  /** Release main release ID */
  mainRelease: InputMaybe<Scalars['Float']['input']>;
  /** Release notes */
  notes: InputMaybe<Scalars['String']['input']>;
  /** Release date */
  releaseDate: InputMaybe<Scalars['Date']['input']>;
  /** Release release ID */
  releaseId: InputMaybe<Scalars['Float']['input']>;
  /** Release resource Url */
  resourceUrl: InputMaybe<Scalars['String']['input']>;
  /** Release role */
  role: InputMaybe<Scalars['String']['input']>;
  /** Release slug */
  slug: InputMaybe<Scalars['String']['input']>;
  /** Release stats */
  stats: InputMaybe<DiscogsStatsDto>;
  /** Release styles */
  styles: InputMaybe<Array<Scalars['String']['input']>>;
  /** Release thumb url */
  thumb: InputMaybe<Scalars['String']['input']>;
  /** Release title */
  title: InputMaybe<Scalars['String']['input']>;
  /** Release tracklist */
  tracklist: InputMaybe<Array<ReleaseTrackDto>>;
  /** Release type */
  type: InputMaybe<Scalars['String']['input']>;
  /** Release URI */
  uri: InputMaybe<Scalars['String']['input']>;
  /** Release year */
  year: InputMaybe<Scalars['Float']['input']>;
};

export type ReleaseItem = {
  /** Item price */
  availableQuantity: Maybe<Scalars['Float']['output']>;
  /** Item id */
  id: Maybe<Scalars['String']['output']>;
  /** Item ID */
  itemRef: Maybe<Scalars['String']['output']>;
  /** Item name */
  name: Maybe<Scalars['String']['output']>;
  /** Item price */
  price: Maybe<Scalars['Float']['output']>;
  /** Item release */
  release: Maybe<ReleaseDtoOutput>;
  /** Item price */
  totalQuantity: Maybe<Scalars['Float']['output']>;
  /** Item weight */
  weight: Maybe<Scalars['Float']['output']>;
};

export type ReleaseItemInput = {
  /** Item price */
  availableQuantity: InputMaybe<Scalars['Float']['input']>;
  /** Item id */
  id: InputMaybe<Scalars['String']['input']>;
  /** Item ID */
  itemRef: InputMaybe<Scalars['String']['input']>;
  /** Item name */
  name: InputMaybe<Scalars['String']['input']>;
  /** Item price */
  price: InputMaybe<Scalars['Float']['input']>;
  /** Item release */
  release: InputMaybe<ReleaseEntityInput>;
  /** Item price */
  totalQuantity: InputMaybe<Scalars['Float']['input']>;
  /** Item weight */
  weight: InputMaybe<Scalars['Float']['input']>;
};

export type ReleaseTrack = {
  /** Release's Track artists */
  artists: Maybe<Array<Artist>>;
  /** Release's Track duration */
  duration: Maybe<Scalars['String']['output']>;
  /** Release's Track full title */
  extraartists: Maybe<Array<Artist>>;
  /** Release's Track full title */
  fullTitle: Maybe<Scalars['String']['output']>;
  /** Release's Track Id */
  id: Maybe<Scalars['String']['output']>;
  /** Release's Track position */
  position: Maybe<Scalars['String']['output']>;
  /** Release's Track stream */
  stream: Maybe<Track>;
  /** Release's Track title */
  title: Maybe<Scalars['String']['output']>;
};

export type ReleaseTrackDto = {
  /** Release's Track artists */
  artists: InputMaybe<Array<ArtistDto>>;
  /** Release's Track duration */
  duration: InputMaybe<Scalars['String']['input']>;
  /** Release's Track full title */
  extraartists: InputMaybe<Array<ArtistDto>>;
  /** Release's Track full title */
  fullTitle: InputMaybe<Scalars['String']['input']>;
  /** Release's Track Id */
  id: InputMaybe<Scalars['String']['input']>;
  /** Release's Track position */
  position: InputMaybe<Scalars['String']['input']>;
  /** Release's Track stream */
  stream: InputMaybe<PlaylistTrackDto>;
  /** Release's Track title */
  title: InputMaybe<Scalars['String']['input']>;
};

export type ResidentAdvisorDto = {
  /** DJID  */
  DJID: InputMaybe<Scalars['String']['input']>;
  /** Access Key  */
  accessKey: InputMaybe<Scalars['String']['input']>;
  /** resident advisor URL  */
  url: InputMaybe<Scalars['String']['input']>;
  /** userId  */
  userId: InputMaybe<Scalars['String']['input']>;
};

export type SoundcloudDto = {
  /** Playlist names  */
  id: InputMaybe<Scalars['String']['input']>;
  /** Soundcloud URL  */
  url: InputMaybe<Scalars['String']['input']>;
};

/** The source of the autocomplete suggestions */
export enum Source {
  Geoapify = 'geoapify',
  Mapbox = 'mapbox'
}

export type StatsDto = {
  /** nb listens */
  count: InputMaybe<Scalars['Float']['input']>;
  /** nb downloads */
  downloads: InputMaybe<Scalars['Float']['input']>;
  /** nb favorites */
  favorites: InputMaybe<Scalars['Float']['input']>;
};

export type StripeResponse = {
  /** Intent */
  intent: Scalars['JSON']['output'];
  /** Status */
  status: Scalars['String']['output'];
};

export type Subscription = {
  /** Notification Pool's Subscription endpoint */
  endpoint: Maybe<Scalars['String']['output']>;
  /** Notification Pool's Subscription keys */
  keys: Maybe<SubscriptionKey>;
};

export type SubscriptionDto = {
  /** Notification Pool's Subscription endpoint */
  endpoint: InputMaybe<Scalars['String']['input']>;
  /** Notification Pool's Subscription keys */
  keys: InputMaybe<SubscriptionKeys>;
};

export type SubscriptionKey = {
  /** Notification Pool's Subscription notification auth key */
  auth: Maybe<Scalars['String']['output']>;
  /** Notification Pool's Subscription notification p256dh key */
  p256dh: Maybe<Scalars['String']['output']>;
};

export type SubscriptionKeys = {
  /** Notification Pool's Subscription notification auth key */
  auth: InputMaybe<Scalars['String']['input']>;
  /** Notification Pool's Subscription notification p256dh key */
  p256dh: InputMaybe<Scalars['String']['input']>;
};

export type SummaryEntity = {
  /** indicates if summary's full */
  isFull: Scalars['Boolean']['output'];
  /** latest podcast */
  latestPodcast: Maybe<Track>;
  /** Recent releases */
  latestReleases: Maybe<Array<ReleaseItem>>;
  /** Latest video */
  latestVideo: Maybe<Video>;
  /** Next event */
  nextEvent: Maybe<Event>;
  /** top podcast */
  topPodcast: Maybe<Track>;
};

export type TimeDto = {
  /** time start */
  begin: InputMaybe<Scalars['String']['input']>;
  /** time end */
  end: InputMaybe<Scalars['String']['input']>;
};

export type Track = {
  /** track artwork */
  artwork: Maybe<Scalars['String']['output']>;
  /** track comments */
  comments: Maybe<Array<Comment>>;
  /** track date */
  date: Maybe<Scalars['Date']['output']>;
  /** track description */
  description: Maybe<Scalars['String']['output']>;
  /** track download */
  download: Maybe<Scalars['String']['output']>;
  /** track downloadable */
  downloadable: Maybe<Scalars['Boolean']['output']>;
  /** track duration */
  duration: Maybe<Scalars['Float']['output']>;
  /** track genre */
  genre: Maybe<Scalars['String']['output']>;
  /** track ID */
  id: Maybe<Scalars['Float']['output']>;
  /** track license */
  license: Maybe<Scalars['String']['output']>;
  /** track likes */
  likes: Maybe<Array<Like>>;
  /** track position */
  position: Maybe<Scalars['Float']['output']>;
  /** track slug */
  slug: Maybe<Scalars['String']['output']>;
  /** track soundcloud */
  soundcloud: Maybe<Scalars['String']['output']>;
  /** track stats */
  stats: Maybe<Stats>;
  /** track taglist */
  taglist: Maybe<Array<Scalars['String']['output']>>;
  /** track title */
  title: Maybe<Scalars['String']['output']>;
  /** track tracklist */
  tracklist: Maybe<Array<Scalars['String']['output']>>;
  /** track uri */
  uri: Maybe<Scalars['String']['output']>;
  /** track url */
  url: Maybe<Scalars['String']['output']>;
  /** track waveform */
  waveform: Maybe<Scalars['String']['output']>;
};

export type TrackDto = {
  /** artist Name */
  artist: InputMaybe<Scalars['String']['input']>;
  /** track cover */
  cover: InputMaybe<Scalars['String']['input']>;
  /** track ID */
  id: InputMaybe<Scalars['String']['input']>;
  /** track label */
  label: InputMaybe<Scalars['String']['input']>;
  /** track title */
  title: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  /** user avatar */
  avatar: Maybe<Scalars['String']['output']>;
  /** user city */
  city: Maybe<Scalars['String']['output']>;
  /** user country */
  country: Maybe<Scalars['String']['output']>;
  /** user first name */
  firstName: Maybe<Scalars['String']['output']>;
  /** user full name */
  fullName: Maybe<Scalars['String']['output']>;
  /** user ID */
  id: Maybe<Scalars['Float']['output']>;
  /** user last name */
  lastName: Maybe<Scalars['String']['output']>;
  /** user soundcloud URL */
  soundcloud: Maybe<Scalars['String']['output']>;
  /** user uri */
  uri: Maybe<Scalars['String']['output']>;
  /** user urn */
  urn: Maybe<Scalars['String']['output']>;
  /** username */
  userName: Maybe<Scalars['String']['output']>;
  /** user is verified */
  verified: Maybe<Scalars['Boolean']['output']>;
};

export type UserDto = {
  /** user avatar */
  avatar: InputMaybe<Scalars['String']['input']>;
  /** user city */
  city: InputMaybe<Scalars['String']['input']>;
  /** user country */
  country: InputMaybe<Scalars['String']['input']>;
  /** user first name */
  firstName: InputMaybe<Scalars['String']['input']>;
  /** user full name */
  fullName: InputMaybe<Scalars['String']['input']>;
  /** user ID */
  id: InputMaybe<Scalars['Float']['input']>;
  /** user last name */
  lastName: InputMaybe<Scalars['String']['input']>;
  /** user soundcloud URL */
  soundcloud: InputMaybe<Scalars['String']['input']>;
  /** user uri */
  uri: InputMaybe<Scalars['String']['input']>;
  /** user urn */
  urn: InputMaybe<Scalars['String']['input']>;
  /** username */
  userName: InputMaybe<Scalars['String']['input']>;
  /** user is verified */
  verified: InputMaybe<Scalars['Boolean']['input']>;
};

export type Video = {
  /** post ID */
  _id: Maybe<Scalars['String']['output']>;
  /** Video creation date */
  createdAt: Maybe<Scalars['Date']['output']>;
  /** Video description */
  description: Maybe<Scalars['String']['output']>;
  /** Video illustration */
  illustration: Maybe<Scalars['String']['output']>;
  /** Video published */
  published: Maybe<Scalars['Boolean']['output']>;
  /** Video slug */
  slug: Maybe<Scalars['String']['output']>;
  /** Video title */
  title: Maybe<Scalars['String']['output']>;
  /** Video type source */
  type: Maybe<Scalars['String']['output']>;
  /** Video update date */
  updatedAt: Maybe<Scalars['Date']['output']>;
  /** Video url */
  url: Maybe<Scalars['String']['output']>;
  /** Video author id */
  userId: Maybe<Scalars['String']['output']>;
};

export type Artist = {
  /** Artist Name */
  name: Maybe<Scalars['String']['output']>;
  /** Artist Role */
  role: Maybe<Scalars['String']['output']>;
};

export type Bio = {
  /** Artist content */
  content: Maybe<Scalars['String']['output']>;
  /** Artist bio intro */
  intro: Maybe<Scalars['String']['output']>;
};

export type Deleted = {
  /** deleted */
  deleted: Maybe<Scalars['Boolean']['output']>;
};

export type Discogs = {
  /** Artist ID */
  artistId: Maybe<Scalars['Float']['output']>;
  /** Discogs URL  */
  url: Maybe<Scalars['String']['output']>;
};

export type DiscogsStats = {
  /** Artist stats nb records in collection */
  collection: Maybe<Scalars['Float']['output']>;
  /** Artist stats nb records in wantlist */
  wantlist: Maybe<Scalars['Float']['output']>;
};

export type Flyer = {
  /** back image source */
  back: Maybe<Scalars['String']['output']>;
  /** front image source */
  front: Maybe<Scalars['String']['output']>;
  /** list thumb image source */
  list: Maybe<Scalars['String']['output']>;
};

export type Label = {
  /** Label RA */
  RA: Maybe<Scalars['String']['output']>;
  /** Label image */
  image: Maybe<Scalars['String']['output']>;
  /** Label name */
  name: Maybe<Scalars['String']['output']>;
};

export type Links = {
  /** event */
  event: Maybe<Scalars['String']['output']>;
  /** venue */
  venue: Maybe<Scalars['String']['output']>;
};

export type Location = {
  /** address */
  address: Maybe<Scalars['String']['output']>;
  /** track ID */
  id: Maybe<Scalars['String']['output']>;
  /** position */
  position: Maybe<Array<Scalars['Float']['output']>>;
};

export type Mailer = {
  /** Mailer prefix */
  prefix: Maybe<Scalars['String']['output']>;
  /** Mailer email recipient  */
  recipient: Maybe<Scalars['String']['output']>;
};

export type Notification = {
  /** Notification action */
  action: Maybe<Scalars['String']['output']>;
  /** Notification title */
  date: Maybe<Scalars['Date']['output']>;
  /** Notification message */
  message: Maybe<Scalars['String']['output']>;
  /** Notification sent */
  sent: Maybe<Scalars['Boolean']['output']>;
  /** Notification title */
  title: Maybe<Scalars['String']['output']>;
};

export type ResidentAdvisor = {
  /** DJID  */
  DJID: Maybe<Scalars['String']['output']>;
  /** Access Key  */
  accessKey: Maybe<Scalars['String']['output']>;
  /** resident advisor URL  */
  url: Maybe<Scalars['String']['output']>;
  /** userId  */
  userId: Maybe<Scalars['String']['output']>;
};

export type Soundcloud = {
  /** Playlist names  */
  id: Maybe<Scalars['String']['output']>;
  /** Soundcloud URL  */
  url: Maybe<Scalars['String']['output']>;
};

export type Stats = {
  /** nb listens */
  count: Maybe<Scalars['Float']['output']>;
  /** nb downloads */
  downloads: Maybe<Scalars['Float']['output']>;
  /** nb favorites */
  favorites: Maybe<Scalars['Float']['output']>;
};

export type Time = {
  /** time start */
  begin: Maybe<Scalars['String']['output']>;
  /** time end */
  end: Maybe<Scalars['String']['output']>;
};

export type Tracks = {
  /** artist Name */
  artist: Maybe<Scalars['String']['output']>;
  /** track cover */
  cover: Maybe<Scalars['String']['output']>;
  /** track ID */
  id: Maybe<Scalars['String']['output']>;
  /** track label */
  label: Maybe<Scalars['String']['output']>;
  /** track title */
  title: Maybe<Scalars['String']['output']>;
};

export type Ttl = {
  /** Cache TTL Resident Advisor */
  RA: InputMaybe<Scalars['Float']['input']>;
  /** Cache TTL discogs  */
  discogs: InputMaybe<Scalars['Float']['input']>;
  /** Cache TTL soundcloud */
  soundcloud: InputMaybe<Scalars['Float']['input']>;
};

export type AutocompleteLocationFragment = { suggestions: Array<{ zipcode: string, city: string, country: string, countryCode: string }> };

export type CartFragmentFragment = { amount: number, amountWithTax: number, vat: number, redeem: string | null | undefined, items: Array<{ id: string, quantity: number, amount: number, productId: string }> };

export type CartItemFragmentFragment = { id: string, quantity: number, amount: number, productId: string };

export type DownloadFragmentFragment = { id: string, token: string, email: string, date: any, expire: any, downloads: Array<{ name: string, url: string, release: { slug: string | null | undefined, title: string | null | undefined, releaseDate: any | null | undefined, role: string | null | undefined, year: number | null | undefined, thumb: string | null | undefined, label: string | null | undefined } }> };

export type EventSnippetFragmentFragment = { _id: string | null | undefined, slug: string | null | undefined, title: string | null | undefined, date: any | null | undefined, endDate: any | null | undefined, description: string | null | undefined, country: string | null | undefined, address: string | null | undefined, flyer: { front: string | null | undefined } | null | undefined };

export type EventFragmentFragment = { cost: string | null | undefined, lineup: Array<string> | null | undefined, promoter: string | null | undefined, description: string | null | undefined, venue: string | null | undefined, _id: string | null | undefined, slug: string | null | undefined, title: string | null | undefined, date: any | null | undefined, endDate: any | null | undefined, country: string | null | undefined, address: string | null | undefined, time: { begin: string | null | undefined, end: string | null | undefined } | null | undefined, location: { position: Array<number> | null | undefined } | null | undefined, flyer: { front: string | null | undefined, back: string | null | undefined } | null | undefined, links: { event: string | null | undefined, venue: string | null | undefined } | null | undefined };

export type AddressFragmentFragment = { name: string, address: string, zipCode: string, city: string, country: string, extra: string | null | undefined };

export type ExpeditionFragmentFragment = { trackingNumber: string | null | undefined, service: string, status: string, email: string, phone: string, amountWithTax: number, vat: number, address: { name: string, address: string, zipCode: string, city: string, country: string, extra: string | null | undefined } };

export type FeatureFlagFragmentFragment = { flag: string | null | undefined, isActive: boolean };

export type InfosFragmentFragment = { instagram: string | null | undefined, RA: string | null | undefined, facebook: string | null | undefined, bandcamp: string | null | undefined, twitter: string | null | undefined, soundcloud: string | null | undefined, discogs: string | null | undefined, bookingDetails: string | null | undefined, bio: { content: string | null | undefined } | null | undefined };

export type OrderFragmentFragment = { orderAt: any, updatedAt: any, query: string | null | undefined, webshopId: string, _id: string, status: string, cart: { amount: number, amountWithTax: number, vat: number, redeem: string | null | undefined, items: Array<{ id: string, quantity: number, amount: number, productId: string }> }, expedition: { trackingNumber: string | null | undefined, service: string, status: string, email: string, phone: string, amountWithTax: number, vat: number, address: { name: string, address: string, zipCode: string, city: string, country: string, extra: string | null | undefined } }, payment: { id: string, transactionId: string, paymentMethod: string, transactionDate: any } };

export type PaymentFragmentFragment = { id: string, transactionId: string, paymentMethod: string, transactionDate: any };

export type PaypalLinkFragmentFragment = { href: string, rel: string, method: string };

export type PaypalIntentFragmentFragment = { status: string, id: string, links: Array<{ href: string, rel: string, method: string }> };

export type PaypalResponseFragmentFragment = { status: number, intent: { status: string, id: string, links: Array<{ href: string, rel: string, method: string }> } };

export type OrderPaypalResponseFragmentFragment = { order: { orderAt: any, updatedAt: any, query: string | null | undefined, webshopId: string, _id: string, status: string, cart: { amount: number, amountWithTax: number, vat: number, redeem: string | null | undefined, items: Array<{ id: string, quantity: number, amount: number, productId: string }> }, expedition: { trackingNumber: string | null | undefined, service: string, status: string, email: string, phone: string, amountWithTax: number, vat: number, address: { name: string, address: string, zipCode: string, city: string, country: string, extra: string | null | undefined } }, payment: { id: string, transactionId: string, paymentMethod: string, transactionDate: any } }, paymentIntent: { status: number, intent: { status: string, id: string, links: Array<{ href: string, rel: string, method: string }> } } };

export type PlaylistFragmentFragment = { id: number | null | undefined, artwork: string | null | undefined, tracks: Array<{ id: number | null | undefined, slug: string | null | undefined, title: string | null | undefined, genre: string | null | undefined, description: string | null | undefined, artwork: string | null | undefined, date: any | null | undefined, uri: string | null | undefined, url: string | null | undefined, duration: number | null | undefined, waveform: string | null | undefined, downloadable: boolean | null | undefined, download: string | null | undefined, soundcloud: string | null | undefined }> | null | undefined };

export type PostFragmentFragment = { content: string | null | undefined, title: string | null | undefined, subtitle: string | null | undefined, _id: string | null | undefined };

export type ReleaseFragmentFragment = { _id: string | null | undefined, slug: string | null | undefined, title: string | null | undefined, releaseDate: any | null | undefined, role: string | null | undefined, year: number | null | undefined, thumb: string | null | undefined, label: string | null | undefined, discogs: string | null | undefined, bandcamp: string | null | undefined, notes: string | null | undefined, cat: string | null | undefined, format: string | null | undefined, genre: string | null | undefined, tracklist: Array<{ title: string | null | undefined, position: string | null | undefined, id: string | null | undefined, artists: Array<{ name: string | null | undefined, role: string | null | undefined }> | null | undefined, stream: { id: number | null | undefined, title: string | null | undefined, artwork: string | null | undefined, uri: string | null | undefined, url: string | null | undefined, waveform: string | null | undefined, duration: number | null | undefined } | null | undefined }> | null | undefined };

export type ReleaseItemFragmentFragment = { id: string | null | undefined, name: string | null | undefined, price: number | null | undefined, availableQuantity: number | null | undefined, release: { _id: string | null | undefined, slug: string | null | undefined, title: string | null | undefined, releaseDate: any | null | undefined, role: string | null | undefined, year: number | null | undefined, thumb: string | null | undefined, label: string | null | undefined, discogs: string | null | undefined, bandcamp: string | null | undefined, notes: string | null | undefined, cat: string | null | undefined, format: string | null | undefined, genre: string | null | undefined, tracklist: Array<{ title: string | null | undefined, position: string | null | undefined, id: string | null | undefined, artists: Array<{ name: string | null | undefined, role: string | null | undefined }> | null | undefined, stream: { id: number | null | undefined, title: string | null | undefined, artwork: string | null | undefined, uri: string | null | undefined, url: string | null | undefined, waveform: string | null | undefined, duration: number | null | undefined } | null | undefined }> | null | undefined } | null | undefined };

export type ReleaseSnippetFragmentFragment = { _id: string | null | undefined, slug: string | null | undefined, title: string | null | undefined, releaseDate: any | null | undefined, role: string | null | undefined, year: number | null | undefined, thumb: string | null | undefined, label: string | null | undefined, discogs: string | null | undefined, bandcamp: string | null | undefined, notes: string | null | undefined, tracklist: Array<{ title: string | null | undefined }> | null | undefined };

export type ReleaseSnippetItemFragmentFragment = { id: string | null | undefined, name: string | null | undefined, price: number | null | undefined, availableQuantity: number | null | undefined, release: { _id: string | null | undefined, slug: string | null | undefined, title: string | null | undefined, releaseDate: any | null | undefined, role: string | null | undefined, year: number | null | undefined, thumb: string | null | undefined, label: string | null | undefined, discogs: string | null | undefined, bandcamp: string | null | undefined, notes: string | null | undefined, tracklist: Array<{ title: string | null | undefined }> | null | undefined } | null | undefined };

export type StripeIntentFragmentFragment = { status: string, intent: any };

export type OrderStripeResponseFragmentFragment = { order: { orderAt: any, updatedAt: any, query: string | null | undefined, webshopId: string, _id: string, status: string, cart: { amount: number, amountWithTax: number, vat: number, redeem: string | null | undefined, items: Array<{ id: string, quantity: number, amount: number, productId: string }> }, expedition: { trackingNumber: string | null | undefined, service: string, status: string, email: string, phone: string, amountWithTax: number, vat: number, address: { name: string, address: string, zipCode: string, city: string, country: string, extra: string | null | undefined } }, payment: { id: string, transactionId: string, paymentMethod: string, transactionDate: any } }, paymentIntent: { status: string, intent: any } };

export type SubscriptionFragmentFragment = { endpoint: string | null | undefined, keys: { auth: string | null | undefined, p256dh: string | null | undefined } | null | undefined };

export type SummaryFragmentFragment = { nextEvent: { _id: string | null | undefined, slug: string | null | undefined, title: string | null | undefined, date: any | null | undefined, endDate: any | null | undefined, description: string | null | undefined, country: string | null | undefined, address: string | null | undefined, flyer: { front: string | null | undefined } | null | undefined } | null | undefined, topPodcast: { id: number | null | undefined, slug: string | null | undefined, title: string | null | undefined, genre: string | null | undefined, description: string | null | undefined, artwork: string | null | undefined, date: any | null | undefined, uri: string | null | undefined, url: string | null | undefined, duration: number | null | undefined, waveform: string | null | undefined, downloadable: boolean | null | undefined, download: string | null | undefined, soundcloud: string | null | undefined } | null | undefined, latestPodcast: { id: number | null | undefined, slug: string | null | undefined, title: string | null | undefined, genre: string | null | undefined, description: string | null | undefined, artwork: string | null | undefined, date: any | null | undefined, uri: string | null | undefined, url: string | null | undefined, duration: number | null | undefined, waveform: string | null | undefined, downloadable: boolean | null | undefined, download: string | null | undefined, soundcloud: string | null | undefined } | null | undefined, latestReleases: Array<{ id: string | null | undefined, name: string | null | undefined, price: number | null | undefined, availableQuantity: number | null | undefined, release: { _id: string | null | undefined, slug: string | null | undefined, title: string | null | undefined, releaseDate: any | null | undefined, role: string | null | undefined, year: number | null | undefined, thumb: string | null | undefined, label: string | null | undefined, discogs: string | null | undefined, bandcamp: string | null | undefined, notes: string | null | undefined, tracklist: Array<{ title: string | null | undefined }> | null | undefined } | null | undefined }> | null | undefined, latestVideo: { url: string | null | undefined, title: string | null | undefined, description: string | null | undefined, type: string | null | undefined, illustration: string | null | undefined, slug: string | null | undefined, _id: string | null | undefined } | null | undefined };

export type TrackFragmentFragment = { license: string | null | undefined, taglist: Array<string> | null | undefined, tracklist: Array<string> | null | undefined, id: number | null | undefined, slug: string | null | undefined, title: string | null | undefined, genre: string | null | undefined, description: string | null | undefined, artwork: string | null | undefined, date: any | null | undefined, uri: string | null | undefined, url: string | null | undefined, duration: number | null | undefined, waveform: string | null | undefined, downloadable: boolean | null | undefined, download: string | null | undefined, soundcloud: string | null | undefined, stats: { count: number | null | undefined, downloads: number | null | undefined } | null | undefined, likes: Array<{ id: number | null | undefined, avatar: string | null | undefined, userName: string | null | undefined, soundcloud: string | null | undefined, uri: string | null | undefined }> | null | undefined, comments: Array<{ id: number | null | undefined, createdAt: string | null | undefined, body: string | null | undefined, user: { avatar: string | null | undefined, userName: string | null | undefined, soundcloud: string | null | undefined, uri: string | null | undefined } | null | undefined }> | null | undefined };

export type TrackSnippetFragmentFragment = { id: number | null | undefined, slug: string | null | undefined, title: string | null | undefined, genre: string | null | undefined, description: string | null | undefined, artwork: string | null | undefined, date: any | null | undefined, uri: string | null | undefined, url: string | null | undefined, duration: number | null | undefined, waveform: string | null | undefined, downloadable: boolean | null | undefined, download: string | null | undefined, soundcloud: string | null | undefined };

export type VideoFragmentFragment = { url: string | null | undefined, title: string | null | undefined, description: string | null | undefined, type: string | null | undefined, illustration: string | null | undefined, slug: string | null | undefined, _id: string | null | undefined };

export type CancelOrderMutationVariables = Exact<{
  profile: Scalars['String']['input'];
  orderId: Scalars['String']['input'];
}>;


export type CancelOrderMutation = { cancelOrder: boolean };

export type ConfirmOrderPaypalMutationVariables = Exact<{
  profile: Scalars['String']['input'];
  orderId: Scalars['String']['input'];
  payment: PaymentInput;
}>;


export type ConfirmOrderPaypalMutation = { confirmOrderPaypal: { orderAt: any, updatedAt: any, query: string | null | undefined, webshopId: string, _id: string, status: string, cart: { amount: number, amountWithTax: number, vat: number, redeem: string | null | undefined, items: Array<{ id: string, quantity: number, amount: number, productId: string }> }, expedition: { trackingNumber: string | null | undefined, service: string, status: string, email: string, phone: string, amountWithTax: number, vat: number, address: { name: string, address: string, zipCode: string, city: string, country: string, extra: string | null | undefined } }, payment: { id: string, transactionId: string, paymentMethod: string, transactionDate: any } } };

export type ContactMutationMutationVariables = Exact<{
  profile: Scalars['String']['input'];
  message: ContactDto;
}>;


export type ContactMutationMutation = { contact: boolean };

export type DownloadOrderTracksMutationVariables = Exact<{
  profile: Scalars['String']['input'];
  orderId: Scalars['String']['input'];
  token: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;


export type DownloadOrderTracksMutation = { downloadOrderTracks: { id: string, token: string, email: string, date: any, expire: any, downloads: Array<{ name: string, url: string, release: { slug: string | null | undefined, title: string | null | undefined, releaseDate: any | null | undefined, role: string | null | undefined, year: number | null | undefined, thumb: string | null | undefined, label: string | null | undefined } }> } };

export type IntentOrderPaypalMutationVariables = Exact<{
  profile: Scalars['String']['input'];
  order: OrderDto;
}>;


export type IntentOrderPaypalMutation = { intentOrderPaypal: { order: { orderAt: any, updatedAt: any, query: string | null | undefined, webshopId: string, _id: string, status: string, cart: { amount: number, amountWithTax: number, vat: number, redeem: string | null | undefined, items: Array<{ id: string, quantity: number, amount: number, productId: string }> }, expedition: { trackingNumber: string | null | undefined, service: string, status: string, email: string, phone: string, amountWithTax: number, vat: number, address: { name: string, address: string, zipCode: string, city: string, country: string, extra: string | null | undefined } }, payment: { id: string, transactionId: string, paymentMethod: string, transactionDate: any } }, paymentIntent: { status: number, intent: { status: string, id: string, links: Array<{ href: string, rel: string, method: string }> } } } };

export type IntentOrderStripeMutationVariables = Exact<{
  profile: Scalars['String']['input'];
  order: OrderDto;
}>;


export type IntentOrderStripeMutation = { intentOrderStripe: { order: { orderAt: any, updatedAt: any, query: string | null | undefined, webshopId: string, _id: string, status: string, cart: { amount: number, amountWithTax: number, vat: number, redeem: string | null | undefined, items: Array<{ id: string, quantity: number, amount: number, productId: string }> }, expedition: { trackingNumber: string | null | undefined, service: string, status: string, email: string, phone: string, amountWithTax: number, vat: number, address: { name: string, address: string, zipCode: string, city: string, country: string, extra: string | null | undefined } }, payment: { id: string, transactionId: string, paymentMethod: string, transactionDate: any } }, paymentIntent: { status: string, intent: any } } };

export type SubscribeMutationMutationVariables = Exact<{
  notificationPoolId: Scalars['String']['input'];
  subscription: SubscriptionDto;
}>;


export type SubscribeMutationMutation = { subscribe: { endpoint: string | null | undefined, keys: { auth: string | null | undefined, p256dh: string | null | undefined } | null | undefined } };

export type UnSubscribeMutationMutationVariables = Exact<{
  notificationPoolId: Scalars['String']['input'];
  endpoint: Scalars['String']['input'];
}>;


export type UnSubscribeMutationMutation = { unsubscribe: { deleted: boolean | null | undefined } };

export type AutoCompleteLocationsQueryVariables = Exact<{
  payload: AutocompleteLocationSuggestionInput;
}>;


export type AutoCompleteLocationsQuery = { autocompleteLocations: { suggestions: Array<{ zipcode: string, city: string, country: string, countryCode: string }> } };

export type CarrierPricesQueryVariables = Exact<{
  profile: Scalars['String']['input'];
  country: Scalars['String']['input'];
  items: Array<CartItemInput> | CartItemInput;
}>;


export type CarrierPricesQuery = { carrierPrices: { upsPrice: number, colissimoPrice: number, mondialRelayPrice: number | null | undefined } };

export type EventQueryQueryVariables = Exact<{
  profile: Scalars['String']['input'];
  id: Scalars['String']['input'];
}>;


export type EventQueryQuery = { event: { cost: string | null | undefined, lineup: Array<string> | null | undefined, promoter: string | null | undefined, description: string | null | undefined, venue: string | null | undefined, _id: string | null | undefined, slug: string | null | undefined, title: string | null | undefined, date: any | null | undefined, endDate: any | null | undefined, country: string | null | undefined, address: string | null | undefined, time: { begin: string | null | undefined, end: string | null | undefined } | null | undefined, location: { position: Array<number> | null | undefined } | null | undefined, flyer: { front: string | null | undefined, back: string | null | undefined } | null | undefined, links: { event: string | null | undefined, venue: string | null | undefined } | null | undefined } };

export type EventsQueryQueryVariables = Exact<{
  profile: Scalars['String']['input'];
}>;


export type EventsQueryQuery = { events: Array<{ _id: string | null | undefined, slug: string | null | undefined, title: string | null | undefined, date: any | null | undefined, endDate: any | null | undefined, description: string | null | undefined, country: string | null | undefined, address: string | null | undefined, flyer: { front: string | null | undefined } | null | undefined }> };

export type FeatureFlagQueryQueryVariables = Exact<{
  profile: Scalars['String']['input'];
  environment: Environment;
  id: Scalars['String']['input'];
}>;


export type FeatureFlagQueryQuery = { featureFlag: { flag: string | null | undefined, isActive: boolean } };

export type InfosQueryQueryVariables = Exact<{
  profile: Scalars['String']['input'];
}>;


export type InfosQueryQuery = { infos: { instagram: string | null | undefined, RA: string | null | undefined, facebook: string | null | undefined, bandcamp: string | null | undefined, twitter: string | null | undefined, soundcloud: string | null | undefined, discogs: string | null | undefined, bookingDetails: string | null | undefined, bio: { content: string | null | undefined } | null | undefined } };

export type PlaylistQueryQueryVariables = Exact<{
  profile: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type PlaylistQueryQuery = { playlist: { id: number | null | undefined, artwork: string | null | undefined, tracks: Array<{ id: number | null | undefined, slug: string | null | undefined, title: string | null | undefined, genre: string | null | undefined, description: string | null | undefined, artwork: string | null | undefined, date: any | null | undefined, uri: string | null | undefined, url: string | null | undefined, duration: number | null | undefined, waveform: string | null | undefined, downloadable: boolean | null | undefined, download: string | null | undefined, soundcloud: string | null | undefined }> | null | undefined } };

export type PostQueryQueryVariables = Exact<{
  profile: Scalars['String']['input'];
  id: Scalars['String']['input'];
}>;


export type PostQueryQuery = { post: { content: string | null | undefined, title: string | null | undefined, subtitle: string | null | undefined, _id: string | null | undefined } };

export type ReleaseQueryQueryVariables = Exact<{
  profile: Scalars['String']['input'];
  id: Scalars['String']['input'];
}>;


export type ReleaseQueryQuery = { releaseItem: { id: string | null | undefined, name: string | null | undefined, price: number | null | undefined, availableQuantity: number | null | undefined, release: { _id: string | null | undefined, slug: string | null | undefined, title: string | null | undefined, releaseDate: any | null | undefined, role: string | null | undefined, year: number | null | undefined, thumb: string | null | undefined, label: string | null | undefined, discogs: string | null | undefined, bandcamp: string | null | undefined, notes: string | null | undefined, cat: string | null | undefined, format: string | null | undefined, genre: string | null | undefined, tracklist: Array<{ title: string | null | undefined, position: string | null | undefined, id: string | null | undefined, artists: Array<{ name: string | null | undefined, role: string | null | undefined }> | null | undefined, stream: { id: number | null | undefined, title: string | null | undefined, artwork: string | null | undefined, uri: string | null | undefined, url: string | null | undefined, waveform: string | null | undefined, duration: number | null | undefined } | null | undefined }> | null | undefined } | null | undefined } };

export type ReleasesQueryQueryVariables = Exact<{
  profile: Scalars['String']['input'];
  webshopId: Scalars['String']['input'];
}>;


export type ReleasesQueryQuery = { releaseItems: Array<{ id: string | null | undefined, name: string | null | undefined, price: number | null | undefined, availableQuantity: number | null | undefined, release: { _id: string | null | undefined, slug: string | null | undefined, title: string | null | undefined, releaseDate: any | null | undefined, role: string | null | undefined, year: number | null | undefined, thumb: string | null | undefined, label: string | null | undefined, discogs: string | null | undefined, bandcamp: string | null | undefined, notes: string | null | undefined, tracklist: Array<{ title: string | null | undefined }> | null | undefined } | null | undefined }> };

export type SummaryQueryQueryVariables = Exact<{
  profile: Scalars['String']['input'];
  playlist: Scalars['String']['input'];
  webshopId: Scalars['String']['input'];
  topPodcastId: Scalars['String']['input'];
  expectedNbReleases: InputMaybe<Scalars['Float']['input']>;
}>;


export type SummaryQueryQuery = { summary: { nextEvent: { _id: string | null | undefined, slug: string | null | undefined, title: string | null | undefined, date: any | null | undefined, endDate: any | null | undefined, description: string | null | undefined, country: string | null | undefined, address: string | null | undefined, flyer: { front: string | null | undefined } | null | undefined } | null | undefined, topPodcast: { id: number | null | undefined, slug: string | null | undefined, title: string | null | undefined, genre: string | null | undefined, description: string | null | undefined, artwork: string | null | undefined, date: any | null | undefined, uri: string | null | undefined, url: string | null | undefined, duration: number | null | undefined, waveform: string | null | undefined, downloadable: boolean | null | undefined, download: string | null | undefined, soundcloud: string | null | undefined } | null | undefined, latestPodcast: { id: number | null | undefined, slug: string | null | undefined, title: string | null | undefined, genre: string | null | undefined, description: string | null | undefined, artwork: string | null | undefined, date: any | null | undefined, uri: string | null | undefined, url: string | null | undefined, duration: number | null | undefined, waveform: string | null | undefined, downloadable: boolean | null | undefined, download: string | null | undefined, soundcloud: string | null | undefined } | null | undefined, latestReleases: Array<{ id: string | null | undefined, name: string | null | undefined, price: number | null | undefined, availableQuantity: number | null | undefined, release: { _id: string | null | undefined, slug: string | null | undefined, title: string | null | undefined, releaseDate: any | null | undefined, role: string | null | undefined, year: number | null | undefined, thumb: string | null | undefined, label: string | null | undefined, discogs: string | null | undefined, bandcamp: string | null | undefined, notes: string | null | undefined, tracklist: Array<{ title: string | null | undefined }> | null | undefined } | null | undefined }> | null | undefined, latestVideo: { url: string | null | undefined, title: string | null | undefined, description: string | null | undefined, type: string | null | undefined, illustration: string | null | undefined, slug: string | null | undefined, _id: string | null | undefined } | null | undefined } };

export type PlaylistTrackQueryQueryVariables = Exact<{
  profile: Scalars['String']['input'];
  trackId: Scalars['String']['input'];
  keyType: InputMaybe<Scalars['String']['input']>;
}>;


export type PlaylistTrackQueryQuery = { playlistTrack: { license: string | null | undefined, taglist: Array<string> | null | undefined, tracklist: Array<string> | null | undefined, id: number | null | undefined, slug: string | null | undefined, title: string | null | undefined, genre: string | null | undefined, description: string | null | undefined, artwork: string | null | undefined, date: any | null | undefined, uri: string | null | undefined, url: string | null | undefined, duration: number | null | undefined, waveform: string | null | undefined, downloadable: boolean | null | undefined, download: string | null | undefined, soundcloud: string | null | undefined, stats: { count: number | null | undefined, downloads: number | null | undefined } | null | undefined, likes: Array<{ id: number | null | undefined, avatar: string | null | undefined, userName: string | null | undefined, soundcloud: string | null | undefined, uri: string | null | undefined }> | null | undefined, comments: Array<{ id: number | null | undefined, createdAt: string | null | undefined, body: string | null | undefined, user: { avatar: string | null | undefined, userName: string | null | undefined, soundcloud: string | null | undefined, uri: string | null | undefined } | null | undefined }> | null | undefined } };

export type VideoQueryQueryVariables = Exact<{
  profile: Scalars['String']['input'];
  id: Scalars['String']['input'];
  keyType: InputMaybe<Scalars['String']['input']>;
}>;


export type VideoQueryQuery = { video: { url: string | null | undefined, title: string | null | undefined, description: string | null | undefined, type: string | null | undefined, illustration: string | null | undefined, slug: string | null | undefined, _id: string | null | undefined } };

export type VideosQueryQueryVariables = Exact<{
  profile: Scalars['String']['input'];
}>;


export type VideosQueryQuery = { videos: Array<{ url: string | null | undefined, title: string | null | undefined, description: string | null | undefined, type: string | null | undefined, illustration: string | null | undefined, slug: string | null | undefined, _id: string | null | undefined }> };
