import type { ReleaseQueryRelease } from "~/types/gql/ReleaseQuery";

export const isCyberlife = (value: string) =>
  /cyberlife/gim.test(value.toLocaleLowerCase());

export const getCyberlifeReleaseTracks = (
  tracks: NonNullable<ReleaseQueryRelease["tracklist"]>
) => {
  return tracks.filter((track) => {
    if (!track.title || !track.artists) return false;
    if (isCyberlife(track.title)) return true;
    if (track.artists.some((artist) => artist.name && isCyberlife(artist.name)))
      return true;
    return false;
  });
};
