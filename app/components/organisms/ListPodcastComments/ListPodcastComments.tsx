import type { ListPodcastCommentsProps } from "./ListPodcastComments.types";
import ListPodcastCommentsItem from "~/components/organisms/ListPodcastCommentsItem";

const ListPodcastComments = ({ comments }: ListPodcastCommentsProps) => {
  return (
    <ul className="o-2">
      {comments.map(
        (comment) =>
          comment?.user?.userName && (
            <li key={comment.id} className="p-0 m-0 list-none">
              <ListPodcastCommentsItem comment={comment} />
            </li>
          )
      )}
    </ul>
  );
};

export default ListPodcastComments;
