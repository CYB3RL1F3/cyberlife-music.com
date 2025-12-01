import { object, string } from 'superstruct';
import { refineEmail } from '~/components/organisms/FormContact/FormContact.schema';
import { refineHoneyPot } from '~/components/organisms/FormCheckout/FormCheckout.schema';

export const formOrderDownloadConfirmSchema = object({
  email: refineEmail,
  address: refineHoneyPot,
});
