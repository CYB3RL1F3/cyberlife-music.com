import List from "~/components/organisms/List";
import type { ListEventsProps, SplittedEvents } from "./ListEvents.types";
import dayjs from "dayjs";
import ListEventsItem from "../ListEventsItem";
import ListEventsEmpty from "../ListEventsEmpty";
import ListSeparator from "~/components/molecules/ListSeparator";

const ListEvents = ({ events }: ListEventsProps) => {
  const { forthcomingEvents, pastEvents } = (
    events || []
  ).reduce<SplittedEvents>(
    (acc, event) => {
      const date = event.date ? dayjs(event.date) : null;
      if (!date) return acc;
      if (date.isBefore(dayjs())) {
        acc.pastEvents.push(event);
      } else {
        acc.forthcomingEvents.push(event);
      }
      return acc;
    },
    {
      forthcomingEvents: [],
      pastEvents: []
    }
  );

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
            ) : null
          )
      )}
      {pastEvents.length > 0 && (
        <ListSeparator>
          <u>Past events</u>
        </ListSeparator>
      )}
      {pastEvents?.map((event) =>
        event.title ? <ListEventsItem key={event._id} event={event} /> : null
      )}
    </List>
  );
};

export default ListEvents;
