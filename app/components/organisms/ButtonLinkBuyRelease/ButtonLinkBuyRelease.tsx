import { useCartContext } from "~/components/contexts/CartContext";
import { motion } from "framer-motion";
import ButtonLink from "~/components/atoms/ButtonLink";
import Icon from "~/components/atoms/Icon";
import { FaCartShopping } from "react-icons/fa6";

const ButtonLinkBuyRelease = () => {
  const { totalAmount, items } = useCartContext();
  return (
    <motion.div
      className="flex justify-end w-full"
      animate={{
        opacity: totalAmount > 0 ? 1 : 0
      }}
    >
      <ButtonLink href="/checkout" className="flex gap-2 px-2 w-fit">
        <span className="text-white">
          {items.length} item{items.length > 1 ? "s" : ""} in cart -
          {totalAmount}€
        </span>
        <Icon size={16} icon={<FaCartShopping className="text-white" />} />
      </ButtonLink>
    </motion.div>
  );
};

export default ButtonLinkBuyRelease;
