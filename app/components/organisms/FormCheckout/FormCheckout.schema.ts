import {
  object,
  refine,
  string,
  nonempty,
  optional,
  number,
  boolean,
  Failure,
  StructError,
} from 'superstruct';
import { refineEmail } from '../FormContact/FormContact.schema';
import { rule } from '~/utils/validator';

export const refineFirstName = refine(string(), 'firstName', (value) => {
  if (!value) return 'Your first name is required.';
  if (value.length < 2)
    return 'Your first name must contain serious content with at least 2 characters.';
  if (value.length > 100)
    return "Your first name can't contain more than 100 characters.";
  return true;
});

export const refineLastName = refine(string(), 'lastName', (value) => {
  if (!value) return 'Your last name is required.';
  if (value.length < 2)
    return 'Your last name must contain serious content with at least 2 characters.';
  if (value.length > 100)
    return "Your last name can't contain more than 100 characters.";
  return true;
});

export const refineAddress = refine(string(), 'address', (value) => {
  if (!value) return 'Your address is required.';
  if (value.length < 2)
    return 'Your address must contain serious content with at least 2 characters.';
  return true;
});

export const refineZipCode = refine(string(), 'zipCode', (value) => {
  if (!value) return 'Your zip code is required.';
  if (value.length < 1) return 'Your zip code is required.';
  return true;
});

export const refineCity = refine(string(), 'city', (value) => {
  if (!value) return 'Your city name is required.';
  if (value.length < 2) return 'Your city name is required.';
  return true;
});

export const refineCountry = refine(string(), 'country', (value) => {
  if (!value) return 'Your country name is required.';
  if (value.length < 2)
    return 'Your country name must contain serious content with at least 2 characters.';
  return true;
});

export const refinePhone = refine(string(), 'phone', (value) => {
  if (!value) return 'Your phone number is required.';
  const phoneRegexp =
    /^(\+?\d{1,3})?[\s\-]?\(?\d{1,4}\)?[\s\-]?\d{2,4}([\s\-]?\d{2,4}){1,3}$/;
  return phoneRegexp.test(value.trim()) || 'Your phone number is not valid.';
});

export const refineHoneyPot = refine(optional(string()), 'message', (value) => {
  if (!value) return true;
  return "Please prove you're a human being or smarter species!";
});

export const refineCarrier = refine(
  object({
    carrier: string(),
    price: number(),
  }),
  'carrier',
  (value) => {
    if (!value.carrier) return 'You must select a carrier.';
    return true;
  },
);

const expedition = object({
  isSameAsBilling: rule(
    'isSameAsBilling',
    boolean(),
    'You must indicate whether you use the billing address as expedition address or not.',
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
    message,
  };
};

export const refineExpedition = refine(expedition, 'expedition', (value) => {
  if (value.isSameAsBilling) return true;

  const failures: Failure[] = [];

  const [errorFirstName] = refineFirstName.validate(value.firstName);
  if (errorFirstName) {
    failures.push(
      createFailure(['expedition', 'firstName'], errorFirstName.message),
    );
  }

  const [errorLastName] = refineLastName.validate(value.lastName);
  if (errorLastName) {
    failures.push(
      createFailure(['expedition', 'lastName'], errorLastName.message),
    );
  }

  const [errorEmail] = refineEmail.validate(value.email);
  if (errorEmail) {
    failures.push(createFailure(['expedition', 'email'], errorEmail.message));
  }

  const [errorPhone] = refinePhone.validate(value.phone);
  if (errorPhone) {
    failures.push(createFailure(['expedition', 'phone'], errorPhone.message));
  }

  const [errorAddress] = refineAddress.validate(value.address);
  if (errorAddress) {
    failures.push(
      createFailure(['expedition', 'address'], errorAddress.message),
    );
  }

  const [errorZipCode] = refineZipCode.validate(value.zipCode);
  if (errorZipCode) {
    failures.push(
      createFailure(['expedition', 'zipCode'], errorZipCode.message),
    );
  }

  const [errorCity] = refineCity.validate(value.city);
  if (errorCity) {
    failures.push(createFailure(['expedition', 'city'], errorCity.message));
  }

  const [errorCountry] = refineCountry.validate(value.country);
  if (errorCountry) {
    failures.push(
      createFailure(['expedition', 'country'], errorCountry.message),
    );
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
  amount: refineHoneyPot,
  expedition: refineExpedition,
  query: optional(string()),
});
