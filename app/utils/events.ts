import dayjs, { Dayjs } from 'dayjs';
import { EventsQueryEvents } from '~/types/gql/EventsQuery';

export type SplittedEvents = {
  forthcomingEvents: EventsQueryEvents[];
  pastEvents: EventsQueryEvents[];
};

export const isBeforeDate = (event: EventsQueryEvents, dateToCheck?: Dayjs) => {
  const date = event.endDate
    ? dayjs(event.endDate)
    : event.date
      ? dayjs(event.date)
      : null;

  if (!date) return null;
  return dayjs(event.date).isBefore(dateToCheck || dayjs());
};

export const getSplittedEvents = (
  events?: EventsQueryEvents[],
  dayToSplit?: dayjs.Dayjs,
): SplittedEvents => {
  const splittedEvents = (events || []).reduce<SplittedEvents>(
    (acc, event) => {
      const isBeforeCurrentDate = isBeforeDate(event, dayToSplit || dayjs());

      if (isBeforeCurrentDate === null) return acc;
      if (isBeforeCurrentDate) {
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
