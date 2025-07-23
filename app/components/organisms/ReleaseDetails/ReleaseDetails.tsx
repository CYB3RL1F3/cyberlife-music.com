import PageDetailLayout from "~/components/layouts/PageDetailLayout/PageDetailLayout";
import Thumbnail from "~/components/molecules/Thumbnail/Thumbnail";
import type { ReleaseDetailsProps } from "./ReleaseDetails.types";
import Text from "~/components/atoms/Text";
import dayjs from "dayjs";
import ListLinkIconsRelease from "~/components/organisms/ListLinkIconsRelease";

const ReleaseDetails = ({ release }: ReleaseDetailsProps) => {
  if (!release.release) return null;
  const { thumb, releaseDate, cat, label, role, genre, year } = release.release;
  const date = releaseDate ? dayjs(releaseDate).format("DD/MM/YYYY") : year;
  return (
    <PageDetailLayout
      thumbnail={<Thumbnail variant="wider" src={thumb || ""} />}
      linkIcons={<ListLinkIconsRelease release={release} />}
    >
      <Text.RightItalic>
        {role} ({cat}) - {label}
      </Text.RightItalic>
      <br />
      <Text.RightItalic>Released on {date}</Text.RightItalic>
      <Text.RightItalic>{genre}</Text.RightItalic>
    </PageDetailLayout>
  );
};

export default ReleaseDetails;
