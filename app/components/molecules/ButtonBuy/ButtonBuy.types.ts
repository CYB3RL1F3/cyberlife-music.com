export type ButtonBuyProps = {
  isActive?: boolean;
  isSoldOut?: boolean;
  price?: number;
  currency?: string;
  onClick: () => void;
};
