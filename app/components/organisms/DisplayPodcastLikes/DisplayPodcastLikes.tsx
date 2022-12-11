import type { DisplayPodcastLikesProps } from "./DisplayPodcastLikes.types";
import ListPodcastLikes from "../ListPodcastLikes";
import WrapperListings from "~/components/molecules/WrapperListings";
import { isCyberlife } from "~/utils/business/filters";

const DisplayPodcastLikes = ({ likes }: DisplayPodcastLikesProps) => {
  if (!likes.length) return null;
  const filteredLikes = likes.filter(
    (like) => like?.userName && !isCyberlife(like.userName)
  );
  return (
    <WrapperListings
      title={`Supported by ${filteredLikes.length} music lovers:`}
    >
      <ListPodcastLikes likes={filteredLikes} />
    </WrapperListings>
  );
};

export default DisplayPodcastLikes;
