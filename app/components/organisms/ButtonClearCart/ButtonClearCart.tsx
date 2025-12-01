import { useNavigate } from '@remix-run/react';

import Button from '~/components/atoms/Button';
import { useCart } from '~/hooks/db/useCart';

const ButtonClearCart = () => {
  const { clear } = useCart();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/releases');
    setTimeout(() => {
      clear();
    }, 400);
  };
  return <Button onClick={handleClick}>Clear cart</Button>;
};

export default ButtonClearCart;
