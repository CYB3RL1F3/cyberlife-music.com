
  import { useCart } from "~/hooks/db/useCart";
import type { OrderItemActionsProps } from "./OrderItemActions.types";
import Icon from "~/components/atoms/Icon";
import { IoMdTrash } from "react-icons/io";
import { BsPlus } from "react-icons/bs";
import { FaMinus } from "react-icons/fa6";
import ButtonIcon from "~/components/atoms/ButtonIcon";

  const OrderItemActions = ({ item }: OrderItemActionsProps) => {
    const { quantity } = item;
    const { updateItemQuantity, removeItem } = useCart();

    const handleDelete = () => {
      removeItem(item.id);
    }

    const handleIncrement = () => {
      updateItemQuantity(item.id, quantity + 1);
    }

    const handleDecrement = () => {
      updateItemQuantity(item.id, quantity - 1);
    }
    
    return (
      <div className="flex justify-end gap-1">
        <ButtonIcon disabled={quantity <= 1} icon={<FaMinus />} onClick={handleDecrement} />
        <ButtonIcon disabled={quantity >= (item.release.availableQuantity || 0)} onClick={handleIncrement} icon={<BsPlus />} />
        <ButtonIcon onClick={handleDelete} className="bg-red-500" icon={<IoMdTrash />} />
      </div>
    )
  }

  export default OrderItemActions;
  