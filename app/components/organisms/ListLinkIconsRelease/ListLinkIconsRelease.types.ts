import type { ReleaseFragment } from "~/types/gql/ReleaseFragment";
import type { ReleasesQueryReleases } from "~/types/gql/ReleasesQuery";

export type ListLinkIconsReleaseProps = {
  release: ReleasesQueryReleases | ReleaseFragment;
};
