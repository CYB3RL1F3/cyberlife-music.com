import PageDetailLayout from "~/components/layouts/PageDetailLayout/PageDetailLayout";
import Thumbnail from "~/components/molecules/Thumbnail/Thumbnail";
import type { ReleaseDetailsProps } from "./ReleaseDetails.types";
import DiscogsIcon from "~/icons/discogs.svg";
import Text from "~/components/atoms/Text";
import dayjs from "dayjs";
import ImgIcon from "~/components/atoms/ImgIcon";

const ReleaseDetails = ({ release }: ReleaseDetailsProps) => {
  const { thumb, discogs, releaseDate, cat, label, role, genre } = release;
  const date = releaseDate
    ? dayjs(releaseDate).format("DD/MM/YYYY")
    : release.year;
  return (
    <PageDetailLayout
      thumbnail={<Thumbnail variant="wider" src={thumb || ""} />}
      linkIcons={[
        {
          icon: <ImgIcon icon={DiscogsIcon} alt="Discogs Icon" isInverted />,
          url: discogs || ""
        }
      ]}
    >
      <Text>
        {role} ({cat}) - {label}
      </Text>
      <br />
      <Text>Published on {date}</Text>
      <Text>{genre}</Text>
    </PageDetailLayout>
  );
};

export default ReleaseDetails;
