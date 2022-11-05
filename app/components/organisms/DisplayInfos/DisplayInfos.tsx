import type { DisplayInfosProps } from "./DisplayInfos.types";

const DisplayInfos = ({ infos }: DisplayInfosProps) => {
  return (
    <article className="mr-6">
      <p className="font-semibold text-sm text-right leading-4">{infos}</p>
    </article>
  );
};

export default DisplayInfos;
