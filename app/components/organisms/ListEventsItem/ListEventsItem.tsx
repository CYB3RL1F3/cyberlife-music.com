import ListItem from '~/components/molecules/ListItem';
import ListItemSnippet from '~/components/molecules/ListItemSnippet';
import Picture from '~/components/organisms/Picture';
import NowAlert from '~/components/molecules/NowAlert';
import { checkIsToday, getShortEventDateDisplay } from '~/utils/date';

import type { ListEventsItemProps } from './ListEventsItem.types';

const ListEventsItem = ({ event }: ListEventsItemProps) => {
  const { slug, flyer, title, date, endDate, address, country } = event;
  const isToday = checkIsToday(date, endDate);

  const countryName = country ? country.padStart(country.length + 2, '- ') : '';

  if (!title) return null;
  return (
    <ListItem
      emphasis={isToday}
      thumbnail={
        <Picture alt={title} variant="large" src={flyer?.front || ''} />
      }
    >
      {isToday && (
        <NowAlert className="absolute px-2 md:p-3 top-20 md:top-0" />
      )}

      <ListItemSnippet title={title} href={`/events/${slug}`}>
        <div className="w-full h-14">
          <p className="text-sm italic text-right">
            {date && getShortEventDateDisplay(event, 'Do MMMM YYYY')}
          </p>
          <p className="text-sm italic text-right">
            {address} {countryName}
          </p>
        </div>
      </ListItemSnippet>
    </ListItem>
  );
};

export default ListEventsItem;
