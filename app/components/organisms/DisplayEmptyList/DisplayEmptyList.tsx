import ButtonRefresh from '~/components/molecules/ButtonRefresh';

import type { DisplayEmptyListProps } from './DisplayEmptyList.types';

const DisplayEmptyList = ({
  children,
  extra = <ButtonRefresh />,
}: DisplayEmptyListProps) => {
  return (
    <div className="flex justify-center lg:justify-end">
      <article className="flex flex-col items-center justify-center m-8 o-2 lg:w-96">
        <p className="w-full p-0 m-0 text-center text-semilarge">Oh no!</p>
        <p className="mb-8 font-bold text-center text-xxl">:(</p>
        <p className="text-lg text-center">{children}</p>
        <p className="pt-8 text-center">{extra}</p>
      </article>
    </div>
  );
};

export default DisplayEmptyList;
