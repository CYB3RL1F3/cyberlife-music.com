import Button from "~/components/atoms/Button";
import type { BuyButtonProps } from "./BuyButton.types";
import clsx from "clsx";

const BuyButton = ({ isActive, isSoldOut, price, onClick }: BuyButtonProps) => {
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
      {!isSoldOut ? `Buy for $${price}` : "Sold out"}
    </Button>
  );
};

export default BuyButton;
