import { cn } from '~/utils/cn';
import { FaCartShopping } from 'react-icons/fa6';

import Button from '~/components/atoms/Button';
import type { ButtonBuyProps } from './ButtonBuy.types';
import Icon from '~/components/atoms/Icon';

const ButtonBuy = ({ isActive, isSoldOut, price, onClick }: ButtonBuyProps) => {
  const className = cn(
    isActive ? 'bg-green-500 text-gray-800 hover:text-gray-700' : 'bg-gray-600',
    'text-xs whitespace-nospan h-6 inline-flex items-center justify-center gap-2',
    {
      'text-gray-500 opacity-80 cursor-not-allowed': isSoldOut,
    },
  );

  return (
    <Button onClick={onClick} className={className} disabled={isSoldOut}>
      <Icon
        size={14}
        icon={
          <FaCartShopping
            className={cn(
              isActive
                ? 'text-gray-800'
                : isSoldOut
                  ? 'text-gray-500'
                  : 'text-gray-200',
            )}
          />
        }
      />
      {!isSoldOut ? `€ ${price}` : 'Sold out'}
    </Button>
  );
};

export default ButtonBuy;
