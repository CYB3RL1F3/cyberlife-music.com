import Avatar from "~/components/atoms/Avatar";
import type { AvatarUserProps } from "./AvatarUser.types";
import IconAvatar from "~/icons/avatar.png";

const AvatarUser = ({ avatar, userName, url }: AvatarUserProps) => {
  return (
    <a target="_blank" href={url || "#"} rel="noreferrer">
      <Avatar src={avatar || IconAvatar} alt={userName || "Soundcloud user"} />
    </a>
  );
};

export default AvatarUser;
