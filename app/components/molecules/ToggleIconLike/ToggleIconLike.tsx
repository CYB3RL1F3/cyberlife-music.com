import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import ToggleIcon from "~/components/atoms/ToggleIcon";
import type { ToggleIconLikeProps } from "./ToggleIconLike.types";

const ToggleIconLike = ({ value, active, setActive }: ToggleIconLikeProps) => {
  return (
    <ToggleIcon
      active={active}
      setActive={setActive}
      activeIcon={<IoIosHeart />}
      inactiveIcon={<IoIosHeartEmpty />}
      value={value}
      className="hover:white"
    />
  );
};

export default ToggleIconLike;
