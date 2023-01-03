import List from "~/components/organisms/List";
import DisplayEmptyList from "~/components/organisms/DisplayEmptyList";
import ListVideosItem from "~/components/organisms/ListVideosItem";
import type { ListVideosProps } from "./ListVideos.types";

const ListVideos = ({ videos }: ListVideosProps) => {
  if (!videos?.length) {
    return <DisplayEmptyList children="No videos to show here!" />;
  }
  return (
    <List>
      {videos.map((video) =>
        video.title ? <ListVideosItem key={video._id} video={video} /> : null
      )}
    </List>
  );
};

export default ListVideos;
