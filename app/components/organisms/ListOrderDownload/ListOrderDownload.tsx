import DisplayEmptyList from '~/components/organisms/DisplayEmptyList';
import List from '~/components/organisms/List';
import ListOrderDownloadItem from '~/components/organisms/ListOrderDownloadItem';
import type { ListOrderDownloadProps } from './ListOrderDownload.types';

const ListOrderDownload = ({ download }: ListOrderDownloadProps) => {
  const downloads = download?.downloads;
  if (!downloads?.length) {
    return <DisplayEmptyList children="Nothing to download here!" />;
  }
  return (
    <List>
      {downloads.map(({ url, release }) =>
        release?.title ? (
          <ListOrderDownloadItem
            key={release._id}
            url={url}
            release={release}
          />
        ) : null,
      )}
    </List>
  );
};

export default ListOrderDownload;
