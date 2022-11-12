import PageDetailHeader from "~/components/molecules/PageDetailHeader";
import PageDetailHeaderPortal from "~/components/molecules/PageDetailHeaderPortal";
import ReleaseDetails from "../ReleaseDetails/ReleaseDetails";
import ReleaseTracklist from "../ReleaseTracklist";
import type { ReleaseDisplayProps } from "./ReleaseDisplay.types";
import Text from "~/components/atoms/Text";

const ReleaseDisplay = ({ release }: ReleaseDisplayProps) => {
  return (
    <div className="o-4">
      <PageDetailHeaderPortal>
        <PageDetailHeader title={release.title} url="/releases" />
      </PageDetailHeaderPortal>
      <ReleaseDetails release={release} />
      <Text>{release.notes}</Text>
      {release.tracklist && (
        <ReleaseTracklist tracks={release.tracklist} thumb={release.thumb} />
      )}
    </div>
  );
};

export default ReleaseDisplay;
