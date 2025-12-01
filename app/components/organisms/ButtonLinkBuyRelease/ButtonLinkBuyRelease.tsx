import { motion } from 'framer-motion';
import { FaCartShopping } from 'react-icons/fa6';

import ButtonLink from '~/components/atoms/ButtonLink';
import Icon from '~/components/atoms/Icon';
import { useCart } from '~/hooks/db/useCart';

const ButtonLinkBuyRelease = () => {
  const { amount, items } = useCart();
  if (!items?.length) return null;
  return (
    <motion.div
      className="flex justify-end w-full"
      animate={{
        opacity: amount > 0 ? 1 : 0,
      }}
    >
      <ButtonLink href="/checkout" className="flex gap-2 px-2 w-fit">
        <span className="text-white">
          {items.length} item{items.length > 1 ? 's' : ''} in cart - {amount} €
        </span>
        <Icon size={16} icon={<FaCartShopping className="text-white" />} />
      </ButtonLink>
    </motion.div>
  );
};

export default ButtonLinkBuyRelease;
