import type { VideoQueryVideo } from "~/types/gql/VideoQuery";

export type VideoPlayerProps = Pick<VideoQueryVideo, "url" | "type">;

export type AbstractVideoPlayerProps = {
  isPlaying?: boolean;
};
