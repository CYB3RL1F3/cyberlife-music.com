export const getFormattedDuration = (duration: number) =>
  new Date(duration).toISOString().substring(11, 11 + 8);
