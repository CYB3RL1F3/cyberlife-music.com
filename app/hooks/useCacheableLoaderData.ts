import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { useEffect } from "react";

// workaround to fix data clearance before route change
export const useCacheableLoaderData = <T>() => {
  const data = useLoaderData<T>();
  type CacheableData = NonNullable<typeof data>;
  const [cached, setCached] = useState<CacheableData>();
  useEffect(() => {
    if (!!data) {
      setCached(data);
    }
  });
  return cached;
};
