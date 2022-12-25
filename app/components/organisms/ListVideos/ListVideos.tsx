import List from "~/components/molecules/List";
import ListVideosItem from "../ListVideosItem";
import type { ListVideosProps } from "./ListVideos.types";

const ListVideos = ({ videos }: ListVideosProps) => {
  return (
    <List>
      {videos?.map((video) =>
        video.title ? <ListVideosItem key={video._id} video={video} /> : null
      )}
    </List>
  );
};

export default ListVideos;
