import type { ReleaseItemFragmentReleaseTracklist } from "~/types/gql/ReleaseItemFragment";

export const isCyberlife = (value: string) =>
  /cyberlife/gim.test(value.toLocaleLowerCase());

export const getCyberlifeReleaseTracks = (
  tracks: ReleaseItemFragmentReleaseTracklist[]
) => {
  return tracks.filter((track) => {
    if (!track.title || !track.artists) return false;
    if (isCyberlife(track.title)) return true;
    if (track.artists.some((artist) => artist.name && isCyberlife(artist.name)))
      return true;
    return false;
  });
};
