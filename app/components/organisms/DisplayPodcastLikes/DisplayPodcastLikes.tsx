import type { DisplayPodcastLikesProps } from "./DisplayPodcastLikes.types";
import ListPodcastLikes from "../ListPodcastLikes";
import WrapperListings from "~/components/molecules/WrapperListings";

const DisplayPodcastLikes = ({ likes }: DisplayPodcastLikesProps) => {
  if (!likes.length) return null;
  return (
    <WrapperListings title={`Supported by ${likes.length} music lovers:`}>
      <ListPodcastLikes likes={likes} />
    </WrapperListings>
  );
};

export default DisplayPodcastLikes;
