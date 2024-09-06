
import type { CountryFlagProps } from "./CountryFlag.types";
import ReactCountryFlag from "react-country-flag";

  const CountryFlag = ({ country }: CountryFlagProps) => {
    return (
      <ReactCountryFlag
        className="emojiFlag"
        countryCode={country.value.toUpperCase()}
        style={{
            fontSize: '2rem',
            lineHeight: '2rem',
        }}
        aria-label={country.label}
      />
    )
  }

  export default CountryFlag;
  