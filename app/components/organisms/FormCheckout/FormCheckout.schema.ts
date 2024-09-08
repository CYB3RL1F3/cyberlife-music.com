import {
  object,
  refine,
  string,
  nonempty,
  optional,
  number,
  boolean,
  Failure,
  StructError
} from "superstruct";
import { refineEmail } from "../FormContact/FormContact.schema";
import { rule } from "~/utils/validator";

export const refineFirstName = refine(
  string(),
  "firstName",
  (value) => {
    if (!value) return "Your first name is required.";
    if (value.length < 2)
      return "Your first name must contain serious content with at least 2 characters.";
    if (value.length > 100)
      return "Your first name can't contain more than 100 characters.";
    return true;
  }
);

export const refineLastName = refine(
  string(),
  "lastName",
  (value) => {
    if (!value) return "Your last name is required.";
    if (value.length < 2)
      return "Your last name must contain serious content with at least 2 characters.";
    if (value.length > 100)
      return "Your last name can't contain more than 100 characters.";
    return true;
  }
);

export const refineAddress = refine(string(), "address", (value) => {
  if (!value) return "Your address is required.";
  if (value.length < 2)
    return "Your address must contain serious content with at least 2 characters.";
  return true;
});

export const refineZipCode = refine(string(), "zipCode", (value) => {
  if (!value) return "Your zip code is required.";
  if (value.length < 1)
    return "Your zip code is required.";
  return true;
});

export const refineCity = refine(string(), "city", (value) => {
  if (!value) return "Your city name is required.";
  if (value.length < 2)
    return "Your city name is required.";
  return true;
});

export const refineCountry = refine(string(), "country", (value) => {
  if (!value) return "Your country name is required.";
  if (value.length < 2)
    return "Your country name must contain serious content with at least 2 characters.";
  return true;
});

export const refinePhone = refine(string(), "phone", (value) => {
  if (!value) return "Your phone number is required.";
  const phoneRegexp =
    /^(\+?\d{1,3})?[\s\-]?\(?\d{1,4}\)?[\s\-]?\d{2,4}([\s\-]?\d{2,4}){1,3}$/;
  return phoneRegexp.test(value.trim()) || "Your phone number is not valid.";
});

export const refineHoneyPot = refine(optional(string()), "message", (value) => {
  if (!value) return true;
  return "Please prove you're a human being or smarter species!";
});

export const refineCarrier = refine(
  object({
    carrier: string(),
    price: number()
  }),
  "carrier",
  (value) => {
    if (!value.carrier) return "You must select a carrier.";
    return true;
  }
);

const expedition = object({
  isSameAsBilling: rule(
    "isSameAsBilling",
    boolean(),
    "You must indicate whether you use the billing address as expedition address or not."
  ),
  firstName: optional(string()),
  lastName: optional(string()),
  email: optional(string()),
  phone: optional(string()),
  address: optional(string()),
  zipCode: optional(string()),
  city: optional(string()),
  country: optional(string()),
});

const createFailure = (path: string[], message: string): Failure => {
  return {
    key: path[path.length - 1],
    type: 'failure',
    path,
    value: undefined,
    branch: [],
    refinement: undefined,
    message
  };
}

export const refineExpedition = refine(expedition, "expedition", (value) => {
  if (value.isSameAsBilling) return true;

  const failures: Failure[] = [];

  const [refinedFirstName] = refineFirstName.validate(value.firstName);
  if (refinedFirstName) {
    failures.push(createFailure(["expedition", "firstName"], refinedFirstName.message));
  }

  const [refinedLastName] = refineLastName.validate(value.lastName);
  if (refinedLastName) {
    failures.push(createFailure(["expedition", "lastName"], refinedLastName.message));
  }

  const [refinedEmail] = refineEmail.validate(value.email);
  if (refinedEmail) {
    failures.push(createFailure(["expedition", "email"], refinedEmail.message));
  }

  const [refinedPhone] = refinePhone.validate(value.phone);
  if (refinedPhone) {
    failures.push(createFailure(["expedition", "phone"], refinedPhone.message));
  }

  const [refinedAddress] = refineAddress.validate(value.address);
  if (refinedAddress) {
    failures.push(createFailure(["expedition", "address"], refinedAddress.message));
  }

  const [refinedZipCode] = refineZipCode.validate(value.zipCode);
  if (refinedZipCode) {
    failures.push(createFailure(["expedition", "zipCode"], refinedZipCode.message));
  }

  const [refinedCity] = refineCity.validate(value.city);
  if (refinedCity) {
    failures.push(createFailure(["expedition", "city"], refinedCity.message));
  }
  
  const [refinedCountry] = refineCountry.validate(value.country);
  if (refinedCountry) {
    failures.push(createFailure(["expedition", "country"], refinedCountry.message));
  }

  if (!failures.length) return true;
  return failures;
});

export const formCheckoutSchema = object({
  firstName: refineFirstName,
  lastName: refineLastName,
  email: refineEmail,
  phone: refinePhone,
  address: refineAddress,
  zipCode: refineZipCode,
  city: refineCity,
  country: refineCountry,
  carrier: refineCarrier,
  honeyPot: refineHoneyPot,
  expedition: refineExpedition,
});
