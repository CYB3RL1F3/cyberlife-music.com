import dayjs from "dayjs";

export const getDate = (value: string) => {
  const date =
    value.indexOf("/") > -1 ? dayjs(value, "DD/MM/YYYY") : dayjs(value);
  return date;
};

export const getFormattedDate = (value: string, format?: string) => {
  const date = getDate(value);
  return date.format(format);
};

export const isInvalidDate = (value: string) => {
  const date = getDate(value);
  return isNaN(date.get("milliseconds"));
};
