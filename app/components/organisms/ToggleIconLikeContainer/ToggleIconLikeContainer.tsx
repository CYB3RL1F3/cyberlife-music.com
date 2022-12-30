import { useLike } from "~/hooks/db/useLike";
import type { ToggleIconLikeContainerProps } from "./ToggleIconLikeContainer.types";
import ToggleIconLike from "~/components/molecules/ToggleIconLike/ToggleIconLike";

const ToggleIconLikeContainer = ({ id }: ToggleIconLikeContainerProps) => {
  const [like, setLike] = useLike(id);
  return <ToggleIconLike value={id} active={like} setActive={setLike} />;
};

export default ToggleIconLikeContainer;
