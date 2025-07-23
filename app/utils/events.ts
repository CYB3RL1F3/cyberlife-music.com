import dayjs from 'dayjs';
import { EventsQueryEvents } from '~/types/gql/EventsQuery';

export type SplittedEvents = {
  forthcomingEvents: EventsQueryEvents[];
  pastEvents: EventsQueryEvents[];
};

export const getSplittedEvents = (
  events?: EventsQueryEvents[],
  dayToSplit?: dayjs.Dayjs,
): SplittedEvents => {
  const splittedEvents = (events || []).reduce<SplittedEvents>(
    (acc, event) => {
      const date = event.endDate
        ? dayjs(event.endDate)
        : event.date
          ? dayjs(event.date)
          : null;

      if (!date) return acc;
      if (date.isBefore(dayToSplit || dayjs())) {
        acc.pastEvents.push(event);
      } else {
        acc.forthcomingEvents.push(event);
      }
      return acc;
    },
    {
      forthcomingEvents: [],
      pastEvents: [],
    },
  );

  return splittedEvents;
};
