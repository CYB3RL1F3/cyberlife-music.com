import type { ButtonBuyReleaseProps } from './ButtonBuyRelease.types';
import ButtonBuy from '~/components/molecules/ButtonBuy';
import { toast } from 'react-toastify';
import { useCart } from '~/hooks/db/useCart';

const ButtonBuyRelease = ({ release }: ButtonBuyReleaseProps) => {
  const { price, id, availableQuantity } = release;
  const { addItem, removeItem, isItemInCart } = useCart();

  const isActive = id ? isItemInCart(id) : false;

  const handleClick = async () => {
    if (isActive) {
      id && (await removeItem(id));
      toast.info(`12" ${release.name} removed from cart!`);
      return;
    } else {
      await addItem({
        release,
        quantity: 1,
        id: release.id || '',
        amount: release.price || 0,
        productId: release.id || '',
      });
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
