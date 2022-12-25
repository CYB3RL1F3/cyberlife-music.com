import Avatar from "~/components/atoms/Avatar";
import type { ListPodcastCommentsItemProps } from "./ListPodcastCommentsItem.types";

const ListPodcastCommentsItem = ({ comment }: ListPodcastCommentsItemProps) => {
  if (!comment.user?.soundcloud || !comment.user.userName) return null;
  return (
    <div className="flex p-1 bg-gray-600 bg-opacity-50 rounded">
      <div className="flex items-center justify-center w-16 min-h-12">
        {comment.user.avatar && (
          <a target="_blank" href={comment.user.soundcloud} rel="noreferrer">
            <Avatar
              src={comment.user.avatar}
              alt={comment.user?.userName || "Soundcloud user"}
            />
          </a>
        )}
      </div>
      <div className="flex flex-col justify-center w-full o-2">
        <a
          href={comment.user.soundcloud}
          target="_blank"
          className="text-xs italic underline"
          rel="noreferrer"
        >
          {comment.user.userName}
        </a>
        <p className="w-full p-0 m-0 text-sm italic">{comment.body}</p>
      </div>
    </div>
  );
};

export default ListPodcastCommentsItem;
