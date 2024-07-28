export type BuyButtonProps = {
  isActive?: boolean;
  isSoldOut?: boolean;
  price?: number;
  currency?: string;
  onClick: () => void;
};
