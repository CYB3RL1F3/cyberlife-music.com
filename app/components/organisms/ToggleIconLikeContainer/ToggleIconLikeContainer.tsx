import { useLike } from "~/hooks/db/useLike";
import type { ToggleIconLikeContainerProps } from "./ToggleIconLikeContainer.types";
import ToggleIconLike from "~/components/molecules/ToggleIconLike/ToggleIconLike";
import type { ToggleIconLikeProps } from "~/components/molecules/ToggleIconLike";
import { toast } from "react-toastify";

const ToggleIconLikeContainer = ({
  id,
  title
}: ToggleIconLikeContainerProps) => {
  const [like, setLike] = useLike(id);
  const handleActive: ToggleIconLikeProps["setActive"] = (active) => {
    setLike(active);
    active
      ? toast.success(`${title} is added to your likes!`)
      : toast.info(`${title} is removed from your likes`);
  };
  return <ToggleIconLike value={id} active={like} setActive={handleActive} />;
};

export default ToggleIconLikeContainer;
