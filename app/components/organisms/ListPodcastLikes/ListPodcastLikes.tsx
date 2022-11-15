import type { ListPodcastLikesProps } from "./ListPodcastLikes.types";
import ListPodcastLikesItem from "~/components/organisms/ListPodcastLikesItem";

const ListPodcastLikes = ({ likes }: ListPodcastLikesProps) => {
  return (
    <ul className="flex flex-wrap gap-1">
      {likes.map(
        (like) =>
          like && (
            <li key={like.id} className="px-1 py-1 m-0 list-none">
              <ListPodcastLikesItem like={like} />
            </li>
          )
      )}
    </ul>
  );
};

export default ListPodcastLikes;
