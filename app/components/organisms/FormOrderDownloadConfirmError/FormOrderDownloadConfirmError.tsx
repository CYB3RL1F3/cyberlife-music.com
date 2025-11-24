import type { FormOrderDownloadConfirmErrorProps } from './FormOrderDownloadConfirmError.types';
import Button from '~/components/atoms/Button';
import { Link } from '@remix-run/react';
import { MdWarning } from 'react-icons/md';
import Icon from '~/components/atoms/Icon';
import { motion } from 'framer-motion';
import { useFluidTransition } from '~/hooks/misc/useFluidTransition';

const FormOrderDownloadConfirmError = ({
  id,
  email,
  instagramLink,
  error,
  onRetry,
}: FormOrderDownloadConfirmErrorProps) => {
  const transition = useFluidTransition();
  return (
    <div className="w-full o-8">
      <h3 className="flex justify-end gap-4 text-lg italic font-extrabold text-right text-red-500">
        <Icon icon={<MdWarning />} size={24} className="mr-2 text-red-500" />
        An error occurred with your order!
      </h3>
      <div className="w-full o-8">
        <hr className="w-full border border-gray-600" />
        <motion.p
          {...transition(0)}
          className="flex justify-end w-full gap-2 italic font-bold text-right text-orange-500 text-md"
        >
          {error ??
            'Your order is not found or the information provided are invalid'}
          .
        </motion.p>
        <motion.p
          {...transition(0.3)}
          className="w-full italic text-right text-orange-500 text-md"
        >
          If you think this is an error, please contact us by email at{' '}
          <Link to={'/contact'} className="underline">
            contact<span>@</span>cyberlife-music.com
          </Link>{' '}
          {instagramLink ? (
            <>
              or by PM on <Link to={instagramLink}>Instagram</Link>
            </>
          ) : (
            ''
          )}{' '}
          for further assistance, mentioning your order ID {id}, the order date
          if possible, and your email {email} used. We'll get back to you as
          soon as possible.
        </motion.p>
        <motion.p
          {...transition(0.6)}
          className="w-full italic text-right text-gray-500 text-md"
        >
          You can also retry the download process.
        </motion.p>
        <motion.div {...transition(1)} className="flex justify-end w-full">
          <Button onClick={onRetry}>Retry</Button>
        </motion.div>
      </div>
    </div>
  );
};

export default FormOrderDownloadConfirmError;
