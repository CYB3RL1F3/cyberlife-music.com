export const merge = <T extends {}>(
  source: T[],
  value: T[],
  filterByKey: (arg: T) => T[keyof T]
) => {
  return [
    ...source,
    ...value.filter(
      (elt) => !source.map(filterByKey).includes(filterByKey.apply(null, [elt]))
    )
  ];
};

export const keys = <T extends {}>(value: T) => {
  return Object.keys(value).map((key) => key as keyof T);
};

export const values = <T extends {}>(value: T) => {
  return keys(value).map((key) => value[key]);
};

export const skippedKeys = <T extends {}>(
  value: T,
  toSkip: string | string[]
) => {
  if (typeof toSkip === "string") toSkip = [toSkip];
  return keys(value).filter((item) => !toSkip.includes(item as string));
};

export const keysNoTimeName = <T extends {}>(value: T) => {
  return skippedKeys(value, "__typename");
};
