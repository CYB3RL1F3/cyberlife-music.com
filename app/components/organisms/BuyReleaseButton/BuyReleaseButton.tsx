import { useState } from "react";
import type { BuyReleaseButtonProps } from "./BuyReleaseButton.types";
import BuyButton from "~/components/molecules/BuyButton";
import { toast } from "react-toastify";

const BuyReleaseButton = ({ release }: BuyReleaseButtonProps) => {
  const { price, availableQuantity } = release;
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    console.log("CLICKED?");
    setActive((value) => !value);
    toast.success(`12" ${release.name} added to cart!`);
  };
  console.log("iS ACIVE => ", isActive);

  return (
    <BuyButton
      isSoldOut={!availableQuantity}
      price={price || 0}
      isActive={isActive}
      onClick={handleClick}
    />
  );
};

export default BuyReleaseButton;
