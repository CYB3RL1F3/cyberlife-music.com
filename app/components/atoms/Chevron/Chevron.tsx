/* @author David Pierre, Loreal, 2024
 * @version 1.0
 * @since 1.0
 * @description Chevron: a chevron component!
 */

import { FaChevronDown } from "react-icons/fa";
import { ChevronProps } from "./Chevron.types";

const Chevron = ({ isOpen }: ChevronProps) => {
  return (
    <FaChevronDown
      data-testid="chevron"
      className={`transform ${isOpen ? "rotate-180" : "rotate-0"}`}
    />
  );
};

export default Chevron;
