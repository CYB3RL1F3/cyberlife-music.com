import type { DisplayInfosProps } from "./DisplayInfos.types";
import { theme } from "~/theme";
import clsx from "clsx";

const DisplayInfos = ({ infos }: DisplayInfosProps) => {
  if (!infos.bio?.content) return null;
  return (
    <article className="mr-6">
      <p className={clsx(theme.smallSemiBold, "text-right ")}>
        {infos.bio?.content}
      </p>
    </article>
  );
};

export default DisplayInfos;
