import { motion } from 'framer-motion';
import AnimatedIconCheck from '~/components/atoms/AnimatedIconCheck';
import Button from '~/components/atoms/Button';
import type { OrderFunnelSuccessProps } from './OrderFunnelSuccess.types';
import { Link } from '@remix-run/react';
import { useCart } from '~/hooks/db/useCart';
import { useEffect, useState } from 'react';
import { useInfosQuery } from '~/hooks/queries/useInfosQuery';
import useDebounceEffect from '~/hooks/useDebouncedEffect';

const getAnimation = (i: number) => ({
  initial: { y: -50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.25,
      delay: 0.3 + 0.2 * i,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    delay: 0.3 * i,
    transition: {
      duration: 0.25,
      delay: 0.1 * i,
    },
  },
});

const getCarrierLabel = (carrier?: string) => {
  switch (carrier) {
    case 'laposte':
      return <a href="https://laposte.fr">La Poste</a>;
    case 'ups':
      return <a href="https://ups.com">UPS</a>;
    default:
      return 'the transporter';
  }
};

const OrderFunnelSuccess = ({ onClose }: OrderFunnelSuccessProps) => {
  const { checkout, clear } = useCart();
  const { data } = useInfosQuery();
  const [canClear, setCanClear] = useState(false);

  useDebounceEffect(
    () => {
      setCanClear(true);
    },
    [],
    2000,
  );

  const handleClose = async () => {
    onClose?.();
    setTimeout(async () => {
      await clear();
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (canClear) {
        clear();
      }
    };
  }, [canClear]);

  return (
    <div className="w-full py-4 o-8">
      <motion.div
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center h-24"
      >
        <AnimatedIconCheck />
      </motion.div>
      <motion.div className="w-full" {...getAnimation(1)}>
        <h1 className="w-full text-xl text-center text-gray-100">
          Order successfully placed!
        </h1>
      </motion.div>
      <motion.div className="w-full o-4" {...getAnimation(2)}>
        <p className="w-full px-4 text-lg text-center">
          Many thanks {checkout?.firstName} for your purchase!
        </p>
        <p className="w-full px-4 text-center text-md">
          You'll receive a confirmation email at {checkout?.email} in a few
          minutes and your order will be processed as soon as possible.
        </p>
        {checkout?.carrier?.carrier !== 'pickup' ? (
          <p className="w-full px-4 text-center text-md">
            The order you placed will be tracked and you'll be able to follow it
            very soon on {getCarrierLabel(checkout?.carrier?.carrier)} website.
          </p>
        ) : (
          <p className="w-full px-4 text-center text-orange-400 text-md">
            As the order is set for pickup, please confirm the pickup date and
            location by contacting us by mail at{' '}
            <Link to={'/contact'} className="underline">
              contact<span>@</span>cyberlife-music.com
            </Link>
            {data?.infos?.instagram ? (
              <>
                or by PM on <Link to={data?.infos?.instagram}>Instagram</Link>.
              </>
            ) : (
              '.'
            )}{' '}
            Please note that the order can't be cancelled as soon as the parcel
            is shipped.
          </p>
        )}
      </motion.div>
      <motion.div className="w-full" {...getAnimation(3)}>
        <p className="w-full px-4 text-center text-md">
          <strong>
            If you don't receive any email, please check your spam folder.
          </strong>
        </p>
        <p className="w-full px-4 text-center text-md">
          If you have any question, please contact us by mail at{' '}
          <Link to={'/contact'} className="underline">
            contact<span>@</span>cyberlife-music.com
          </Link>
          .
        </p>
      </motion.div>
      <motion.div
        className="flex justify-center w-full h-6"
        {...getAnimation(3)}
      >
        <Button onClick={handleClose}>Return to navigation!</Button>
      </motion.div>
    </div>
  );
};

export default OrderFunnelSuccess;
