import type { DisplayPodcastTracklistProps } from "./DisplayPodcastTracklist.types";
import Text from "~/components/atoms/Text";

const DisplayPodcastTracklist = ({
  tracklist
}: DisplayPodcastTracklistProps) => {
  return (
    <ul className="p-0 m-0">
      {tracklist?.map((track, index) => (
        <li key={`tracklist__${track}`} className="p-0 m-0 list-none">
          <Text>
            {index + 1}. {track}
          </Text>
        </li>
      ))}
    </ul>
  );
};

export default DisplayPodcastTracklist;
