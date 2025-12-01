import AvatarUser from '~/components/molecules/AvatarUser';
import CardLayout from '~/components/molecules/CardLayout';
import type { ListPodcastCommentsItemProps } from './ListPodcastCommentsItem.types';

const ListPodcastCommentsItem = ({ comment }: ListPodcastCommentsItemProps) => {
  if (!comment?.user?.soundcloud || !comment?.user?.userName) return null;
  return (
    <CardLayout
      left={<AvatarUser url={comment.user.soundcloud} {...comment.user} />}
    >
      <a
        href={comment.user.soundcloud}
        target="_blank"
        className="text-xs italic underline"
        rel="noreferrer"
      >
        {comment.user.userName}
      </a>
      <p className="w-full p-0 m-0 text-sm italic">{comment.body}</p>
    </CardLayout>
  );
};

export default ListPodcastCommentsItem;
