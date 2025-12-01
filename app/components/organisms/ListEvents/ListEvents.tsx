import dayjs from 'dayjs';

import List from '~/components/organisms/List';
import type { ListEventsProps } from './ListEvents.types';
import ListEventsItem from '~/components/organisms/ListEventsItem';
import ListEventsEmpty from '~/components/organisms/ListEventsEmpty';
import ListSeparator from '~/components/molecules/ListSeparator';
import { getSplittedEvents } from '~/utils/events';

const ListEvents = ({ events }: ListEventsProps) => {
  const { forthcomingEvents, pastEvents } = getSplittedEvents(events, dayjs());

  return (
    <List
      noBorder={(index) =>
        index === 0 || index === forthcomingEvents.length + 1
      }
    >
      {forthcomingEvents.length === 0 ? (
        <ListEventsEmpty />
      ) : (
        forthcomingEvents
          .reverse()
          .map((event) =>
            event.title ? (
              <ListEventsItem key={event._id} event={event} />
            ) : null,
          )
      )}
      {pastEvents.length > 0 && (
        <ListSeparator>
          <u>Past events</u>
        </ListSeparator>
      )}
      {pastEvents?.map((event) =>
        event.title ? <ListEventsItem key={event._id} event={event} /> : null,
      )}
    </List>
  );
};

export default ListEvents;
