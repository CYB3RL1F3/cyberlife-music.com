import type { DisplayInfosProps } from "./DisplayInfos.types";

const DisplayInfos = ({ infos }: DisplayInfosProps) => {
  if (!infos.bio?.content) return null;
  return (
    <article className="hidden mr-6 md:block">
      <p className={"font-semibold text-sm leading-4 text-right "}>
        {infos.bio?.content}
      </p>
    </article>
  );
};

export default DisplayInfos;
