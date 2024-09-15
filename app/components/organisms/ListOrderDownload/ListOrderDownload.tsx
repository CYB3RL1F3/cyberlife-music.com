import DisplayEmptyList from '../DisplayEmptyList';
import List from '../List/List';
import ListOrderDownloadItem from '../ListOrderDownloadItem';
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
          <ListOrderDownloadItem key={release.id} url={url} release={release} />
        ) : null,
      )}
    </List>
  );
};

export default ListOrderDownload;
