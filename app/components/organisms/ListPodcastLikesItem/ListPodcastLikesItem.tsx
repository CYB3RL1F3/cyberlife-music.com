import type { ListPodcastLikesItemProps } from "./ListPodcastLikesItem.types";
import AvatarUser from "~/components/molecules/AvatarUser";

const ListPodcastLikesItem = ({ like }: ListPodcastLikesItemProps) => {
  return (
    <AvatarUser
      url={like.soundcloud || "#"}
      avatar={like.avatar}
      userName={like.userName}
    />
  );
};

export default ListPodcastLikesItem;
