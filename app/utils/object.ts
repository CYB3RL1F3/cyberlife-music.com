import { keys } from "./array";

export const omitDeep = (obj: any, key: string): any => {
  if (typeof obj === "object") {
    if (!obj) return obj;
    if ("getDate" in obj) return obj;
    const res = keys(obj).reduce((acc, currentKey) => {
      if (currentKey === key) return acc;
      if (typeof obj[currentKey] === "object") {
        if (Array.isArray(obj[currentKey])) {
          const x = obj[currentKey].map((row: any) => omitDeep(row, key));
          acc[currentKey] = x;
        } else acc[currentKey] = omitDeep(obj[currentKey], key);
      } else acc[currentKey] = obj[currentKey];
      return acc;
    }, {} as any);
    return res;
  } else {
    return obj;
  }
};
