import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import isBetween from 'dayjs/plugin/isBetween';
import type { EventQueryEvent } from '~/types/gql/EventQuery';
import type { EventsQueryEvents } from '~/types/gql/EventsQuery';

dayjs.extend(advancedFormat);
dayjs.extend(isBetween);

export const getDate = (value: string) => {
  const date =
    value.indexOf('/') > -1 ? dayjs(value, 'DD/MM/YYYY') : dayjs(value);
  return date;
};

export const getFormattedDate = (value: string, format?: string) => {
  const date = getDate(value);
  return date.format(format);
};

export const isInvalidDate = (value: string) => {
  const date = getDate(value);
  return isNaN(date.get('milliseconds'));
};

export const getEventDateDisplay = (
  event: EventQueryEvent,
  format = 'DD/MM/YYYY',
) => {
  if (!event.date) return '';
  const date = getFormattedDate(event.date, format);
  const endDate = event.endDate
    ? getFormattedDate(event.endDate, format)
    : null;
  const beginTime = event.time?.begin ? getTimeDisplay(event.time.begin) : '';
  const endTime = event.time?.end ? getTimeDisplay(event.time.end) : '';

  if (endDate) {
    return `from ${date} (${beginTime}) \nto ${endDate} (${endTime})`;
  }
  return `${date} (${beginTime} - ${endTime})`;
};

export const getShortEventDateDisplay = (
  event: EventQueryEvent | EventsQueryEvents,
  format = 'DD/MM/YYYY',
) => {
  if (!event.date) return '';
  const date = getFormattedDate(event.date, format);
  const endDate = event.endDate
    ? getFormattedDate(event.endDate, format)
    : null;

  if (endDate) {
    return `from ${date} to ${endDate}`;
  }
  return `${date}`;
};

export const pad = (value: number) => String(value).padStart(2, '0');

export const getTimeDisplay = (time: string) => {
  let [hour, minutes] = time.split(':').map(Number);
  const mins = minutes > 0 ? `:${pad(minutes)}` : '';
  if (hour === 0) hour = 24;
  if (hour > 12) {
    return `${hour - 12}${mins}pm`;
  }
  return `${hour}${mins}am`;
};

export const checkIsToday = (date: string, endDate?: string) => {
  const today = dayjs();
  if (endDate) {
    return today.isBetween(dayjs(date), dayjs(endDate), 'day');
  }
  return today.isSame(dayjs(date), 'day');
};

export const seekPercentToSeconds = (seek: number, duration: number) => {
  if (duration <= 0) return 0;
  return Math.round((seek / 100) * duration);
};

export const formatDuration = (value: number, isMs = true) => {
  if (!Number.isFinite(value) || value < 0) value = 0;

  const totalSeconds = isMs ? Math.round(value / 1000) : Math.round(value);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  return hours > 0
    ? `${hours}:${pad(minutes)}:${pad(seconds)}`
    : `${minutes}:${pad(seconds)}`;
};
