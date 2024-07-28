import { useState } from "react";
import type { BuyReleaseButtonProps } from "./BuyReleaseButton.types";
import BuyButton from "~/components/molecules/BuyButton";

const BuyReleaseButton = ({ release }: BuyReleaseButtonProps) => {
  const price = 14;
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    console.log("CLICKED?");
    setActive((value) => !value);
  };
  console.log("iS ACIVE => ", isActive);

  return <BuyButton price={price} isActive={isActive} onClick={handleClick} />;
};

export default BuyReleaseButton;
