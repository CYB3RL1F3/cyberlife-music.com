import Button from "~/components/atoms/Button";
import type { ButtonBuyProps } from "./ButtonBuy.types";
import clsx from "clsx";

const ButtonBuy = ({ isActive, isSoldOut, price, onClick }: ButtonBuyProps) => {
  const className = clsx(
    isActive ? "bg-green-500 text-gray-800 hover:text-gray-700" : "bg-gray-600",
    "text-xs whitespace-nospan h-6"
  );
  console.log(isActive);
  const handleClick = () => {
    console.log("CLICKED?");
    onClick?.();
  };
  return (
    <Button onClick={handleClick} className={className} disabled={isSoldOut}>
      {!isSoldOut ? `€ ${price}` : "Sold out"}
    </Button>
  );
};

export default ButtonBuy;
