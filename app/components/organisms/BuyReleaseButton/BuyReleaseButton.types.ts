import type { ReleaseFragment } from "~/types/gql/ReleaseFragment";
import type { ReleasesQueryReleases } from "~/types/gql/ReleasesQuery";

export type BuyReleaseButtonProps = {
  release: ReleaseFragment | ReleasesQueryReleases;
};
