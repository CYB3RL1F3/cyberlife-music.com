import type { ButtonBuyReleaseProps } from "./ButtonBuyRelease.types";
import ButtonBuy from "~/components/molecules/ButtonBuy";
import { toast } from "react-toastify";
import { useCartContext } from "~/components/contexts/CartContext";

const ButtonBuyRelease = ({ release }: ButtonBuyReleaseProps) => {
  const { price, id, availableQuantity } = release;
  const { addItem, removeItem, isItemInCart } = useCartContext();

  const isActive = id ? isItemInCart(id) : false;

  const handleClick = () => {
    if (isActive) {
      id && removeItem(id);
      toast.info(`12" ${release.name} removed from cart!`);
      return;
    } else {
      addItem(release);
      toast.success(`12" ${release.name} added to cart!`);
    }
  };

  if (!price) return;

  return (
    <ButtonBuy
      isSoldOut={!availableQuantity}
      price={price}
      isActive={isActive}
      onClick={handleClick}
    />
  );
};

export default ButtonBuyRelease;
