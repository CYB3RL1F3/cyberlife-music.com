import type { WrapperListingsProps } from "./WrapperListings.types";
import Text from "~/components/atoms/Text";

const WrapperListings = ({ title, children }: WrapperListingsProps) => {
  return (
    <div className="w-full o-2">
      <Text align="left" size="sm">
        {title}
      </Text>
      {children}
    </div>
  );
};

export default WrapperListings;
