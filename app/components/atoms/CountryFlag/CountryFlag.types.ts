import countries from "~/utils/business/countries"

type Country = typeof countries[number];

export type CountryFlagProps = {
  country: Country;
}
  