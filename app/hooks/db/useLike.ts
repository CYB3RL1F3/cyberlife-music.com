import { useLiveQuery } from 'dexie-react-hooks';

import db from '~/db';

export const useLike = (id: string) => {
  const like = useLiveQuery(async () => {
    return await db.likes.where('id').equals(id).first();
  });

  const setLike = (value: boolean) => {
    if (like) {
      db.likes.update(id, {
        value,
      });
    } else {
      db.likes.add({
        id,
        value,
      });
    }
  };

  return [like?.value || false, setLike] as const;
};
