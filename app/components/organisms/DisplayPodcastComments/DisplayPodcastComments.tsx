import type { DisplayPodcastCommentsProps } from "./DisplayPodcastComments.types";
import ListPodcastComments from "../ListPodcastComments";
import WrapperListings from "~/components/molecules/WrapperListings";
import { isCyberlife } from "../../../utils/business/filters";

const DisplayPodcastComments = ({ comments }: DisplayPodcastCommentsProps) => {
  if (!comments.length) return null;
  const filteredComments = comments.filter(
    (comment) => comment.user?.userName && !isCyberlife(comment.user.userName)
  );
  const nbComments = filteredComments.length;
  const commentWord = nbComments > 1 ? "comments" : "comment";
  return (
    <WrapperListings
      title={`${filteredComments.length} ${commentWord} on soundcloud:`}
    >
      <ListPodcastComments comments={filteredComments} />
    </WrapperListings>
  );
};

export default DisplayPodcastComments;
