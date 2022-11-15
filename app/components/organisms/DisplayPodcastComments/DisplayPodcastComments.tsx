import type { DisplayPodcastCommentsProps } from "./DisplayPodcastComments.types";
import ListPodcastComments from "../ListPodcastComments";
import WrapperListings from "~/components/molecules/WrapperListings";

const DisplayPodcastComments = ({ comments }: DisplayPodcastCommentsProps) => {
  if (!comments.length) return null;
  return (
    <WrapperListings title={`${comments.length} comments on soundcloud:`}>
      <ListPodcastComments comments={comments} />
    </WrapperListings>
  );
};

export default DisplayPodcastComments;
