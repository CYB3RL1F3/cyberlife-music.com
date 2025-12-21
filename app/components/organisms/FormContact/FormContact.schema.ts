import { object, refine, string, nonempty, optional } from 'superstruct';
import {
  rule,
  isValidEmail,
  isForbiddenEmail,
  hasInsults,
  hasInvalidContent,
} from '~/utils/validator';

export const refineEmail = refine(string(), 'email', (value) => {
  if (!value) return 'Your email is required';
  if (!isValidEmail(value)) return 'Your email is not valid';
  if (isForbiddenEmail(value))
    return 'Your email is not allowed. No throwable or blacklisted email address allowed.';
  return true;
});

export const refineSubject = refine(nonempty(string()), 'message', (value) => {
  if (!value) return 'Your subject is required.';
  if (value.length < 2)
    return 'Your subject must contain serious content with at least 2 characters.';
  if (value.length > 50)
    return "Your subject can't contain more than 50 characters.";
  if (hasInsults(value))
    return "Your subject contains insults and can't be sent. Please be polite!";
  return true;
});

export const refineMessage = refine(nonempty(string()), 'message', (value) => {
  if (!value) return 'Your message is required.';
  if (value.length < 15)
    return 'Your message must contain serious content with at least 15 characters.';
  if (value.length > 6000)
    return "Your message can't contain more than 6000 characters.";
  if (hasInsults(value))
    return "Your message contains insults and can't be sent. Please be polite!";
  if (hasInvalidContent(value))
    return "Your message contains content that can't be understood. Please provide meaningful content.";
  return true;
});

export const refineHoneyPot = refine(optional(string()), 'message', (value) => {
  if (!value) return true;
  return "Please prove you're a human being or smarter species!";
});

export const formContactSchema = object({
  name: rule('name', nonempty(string()), 'Your name is required'),
  email: refineEmail,
  subject: refineSubject,
  message: refineMessage,
  address: refineHoneyPot,
});
