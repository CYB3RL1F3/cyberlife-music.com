import TableFinalOrder from '~/components/organisms/TableFinalOrder';
import Button from '~/components/atoms/Button';
import Spinner from '~/components/atoms/Spinner';
import Icon from '~/components/atoms/Icon';
import { MdOutlinePayments, MdWarning } from 'react-icons/md';
import { GrPowerReset } from 'react-icons/gr';
import { RxCross2 } from 'react-icons/rx';
import { FormCheckoutFooterProps } from './FormCheckoutFooter.types';
import { motion } from 'framer-motion';
import { useFluidTransition } from '~/hooks/useFluidTransition';

const FormCheckoutFooter = ({
  reset,
  values,
  state,
  items,
  onCancel,
}: FormCheckoutFooterProps) => {
  const transition = useFluidTransition();
  return (
    <div className="flex flex-col items-end justify-end w-full gap-4">
      {values.carrier ? (
        <>
          <hr className="w-full border-gray-700" />
          <TableFinalOrder items={items} carrier={values.carrier} />
          {values.carrier.carrier === 'pickup' && (
            <motion.div
              {...transition(0.25)}
              className="flex items-center w-full gap-4 p-4 my-4 text-orange-300 bg-gray-800 h-fit rounded-xl"
            >
              <Icon size={18} icon={<MdWarning />} />
              <p>
                You selected a{' '}
                <strong>
                  <u>pickup transport</u>
                </strong>{' '}
                option!! <br />
                This option is only available for customers who can meet me in
                person to pick up the order. <br />
                If you are not a local customer or ready to meet me at a gig,
                please select a different transport option. <br />
                Please note that <strong>no refund is possible.</strong>
                <br />
                Thank you! 🚚
              </p>
            </motion.div>
          )}
        </>
      ) : (
        <div className="flex items-center w-full h-16 gap-4 p-4 text-orange-300 bg-gray-800 rounded-xl">
          <Icon size={18} icon={<MdWarning />} /> You must select a transport to
          compute the final price and complete this order!
        </div>
      )}
      <div className="flex justify-end w-full gap-4">
        <Button
          disabled={state.isSubmitting}
          onClick={onCancel}
          rightIcon={<Icon size={14} icon={<RxCross2 />} />}
        >
          Cancel
        </Button>
        <Button
          disabled={state.isSubmitting}
          onClick={reset}
          rightIcon={<Icon size={14} icon={<GrPowerReset />} />}
        >
          Reset
        </Button>
        <Button
          type="submit"
          disabled={state.isSubmitting}
          rightIcon={
            state.isSubmitting ? (
              <Spinner variant="xs" />
            ) : (
              <Icon size={14} icon={<MdOutlinePayments />} />
            )
          }
        >
          <span className="lg:hidden">Purchase</span>
          <span className="max-lg:hidden">Purchase the order</span>
        </Button>
      </div>
    </div>
  );
};

export default FormCheckoutFooter;
