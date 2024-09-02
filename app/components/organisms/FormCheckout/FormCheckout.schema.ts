import {
  object,
  refine,
  string,
  nonempty,
  optional,
  number,
  boolean
} from "superstruct";
import { refineEmail } from "../FormContact/FormContact.schema";
import { rule } from "~/utils/validator";

export const refineFirstName = refine(
  nonempty(string()),
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
  nonempty(string()),
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

export const refineAddress = refine(nonempty(string()), "address", (value) => {
  if (!value) return "Your address is required.";
  if (value.length < 2)
    return "Your address must contain serious content with at least 2 characters.";
  return true;
});

export const refineZipCode = refine(nonempty(string()), "zipCode", (value) => {
  if (!value) return "Your zip code is required.";
  if (value.length < 2)
    return "Your zip code must contain serious content with at least 2 characters.";
  return true;
});

export const refineCity = refine(nonempty(string()), "city", (value) => {
  if (!value) return "Your city name is required.";
  if (value.length < 2)
    return "Your city name must contain serious content with at least 2 characters.";
  return true;
});

export const refineCountry = refine(nonempty(string()), "country", (value) => {
  if (!value) return "Your country name is required.";
  if (value.length < 2)
    return "Your country name must contain serious content with at least 2 characters.";
  return true;
});

export const refinePhone = refine(nonempty(string()), "phone", (value) => {
  if (!value) return "Your phone number is required.";
  const phoneRegexp =
    /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;
  return phoneRegexp.test(value) || "Your phone number is not valid.";
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
    if (!value.carrier || !value.price) return "You must select a carrier.";
    return true;
  }
);

const expedition = object({
  isSameAsBilling: rule(
    "isSameAsBilling",
    boolean(),
    "You must provide a boolean."
  ),
  firstName: refineFirstName,
  lastName: refineLastName,
  email: refineEmail,
  phone: refinePhone,
  address: refineAddress,
  zipCode: refineZipCode,
  city: refineCity,
  country: refineCountry
});

export const refineExpedition = refine(expedition, "expedition", (value) => {
  if (value.isSameAsBilling) return true;
  const [validated] = expedition.validate(value, {
    coerce: true
  });
  return validated ? validated.message : true;
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
  honeyPot: refineHoneyPot
});
