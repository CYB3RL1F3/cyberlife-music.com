import ListItem from '~/components/molecules/ListItem';
import ListItemSnippet from '~/components/molecules/ListItemSnippet';
import dayjs from 'dayjs';
import Picture from '../Picture';
import ListLinkIconsRelease from '~/components/organisms/ListLinkIconsRelease';
import { ListOrderDownloadItemProps } from './ListOrderDownloadItem.types';
import ButtonLink from '~/components/atoms/ButtonLink';
import Icon from '~/components/atoms/Icon';
import { IoMdDownload } from 'react-icons/io';

const ListOrderDownloadItem = ({
  release,
  url,
}: ListOrderDownloadItemProps) => {
  if (!release) return null;

  const { title, slug, thumb, label } = release;

  const defaultThumb =
    'https://media.istockphoto.com/id/134119615/photo/vinyl-record.jpg';

  const artwork = thumb || defaultThumb;
  if (!title) return null;
  return (
    <ListItem thumbnail={<Picture alt={title} src={artwork} />}>
      <ListItemSnippet title={title} href={`${slug}`}>
        <div className="w-full h-12">
          <p className="text-sm italic text-right">{label}</p>
        </div>
        <div className="flex justify-end w-full">
          <ButtonLink
            href={url}
            target="_blank"
            rightIcon={<Icon size={18} icon={<IoMdDownload />} />}
            className="w-fit"
          >
            Download now
          </ButtonLink>
        </div>
      </ListItemSnippet>
    </ListItem>
  );
};

export default ListOrderDownloadItem;
