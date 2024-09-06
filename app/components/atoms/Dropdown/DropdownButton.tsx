import Button, { ButtonProps } from '~/components/atoms/Button';
import Chevron from '~/components/atoms/Chevron';

export type DropdownButtonProps = Omit<ButtonProps, 'rightIcon'> & {
  isOpen?: boolean;
  onClick?: () => void;
};

const DropdownButton = ({
  isOpen,
  children,
  ...props
}: DropdownButtonProps) => {
  return (
    <Button
      className="w-full"
      rightIcon={<Chevron isOpen={isOpen} />}
      {...props}
    >
      {children}
    </Button>
  );
};

export default DropdownButton;
