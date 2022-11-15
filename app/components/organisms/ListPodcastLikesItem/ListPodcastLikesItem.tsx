import Avatar from "~/components/atoms/Avatar";
import type { ListPodcastLikesItemProps } from "./ListPodcastLikesItem.types";
import IconAvatar from "~/icons/avatar.png";

const ListPodcastLikesItem = ({ like }: ListPodcastLikesItemProps) => {
  return (
    <a target="_blank" href={like.soundcloud || "#"} rel="noreferrer">
      <Avatar
        src={like.avatar || IconAvatar}
        alt={like.userName || "Soundcloud user"}
      />
    </a>
  );
};

export default ListPodcastLikesItem;
