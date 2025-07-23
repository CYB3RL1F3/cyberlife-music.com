import { useNavigate } from '@remix-run/react';
import { HiRefresh } from 'react-icons/hi';
import Button from '~/components/atoms/Button';
import type { ButtonRefreshProps } from './ButtonRefresh.types';

const ButtonRefresh = ({ route = '.' }: ButtonRefreshProps) => {
  const navigate = useNavigate();

  const refresh = () => {
    navigate(route, {
      replace: true,
    });
  };

  return (
    <Button rightIcon={<HiRefresh />} onClick={refresh}>
      Reload
    </Button>
  );
};

export default ButtonRefresh;
