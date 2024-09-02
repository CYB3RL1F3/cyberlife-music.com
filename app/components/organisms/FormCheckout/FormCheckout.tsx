import { useForm } from "react-hook-form";
import type {
  FormCheckoutProps,
  FormCheckoutValues
} from "./FormCheckout.types";
import { superstructResolver } from "@hookform/resolvers/superstruct";
import { formCheckoutSchema } from "./FormCheckout.schema";
import { useMobileVibration } from "~/hooks/useMobileVibration";
import { useFluidTransition } from "~/hooks/useFluidTransition";
import { AnimatePresence, motion } from "framer-motion";
import FormHeading from "../FormHeading";
import ControlledFieldInput from "../ControlledFieldInput";
import ControlledFieldTextarea from "../ControlledFieldTextarea";

const FormCheckout = ({ onSubmit, defaultValues }: FormCheckoutProps) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isDirty, isSubmitted, isValid }
  } = useForm<FormCheckoutValues>({
    defaultValues,
    reValidateMode: "onChange",
    resolver: superstructResolver(formCheckoutSchema)
  });

  const transition = useFluidTransition();
  useMobileVibration(isSubmitted && !isValid);
  const submit = handleSubmit((values) => onSubmit(values));

  return (
    <AnimatePresence mode="wait">
      <div className="flex flex-col items-end justify-end w-full">
        <FormHeading
          title="Finalize the order!"
          description="Complete this form with your shipping details and payment method."
        />
        <form onSubmit={submit} className="w-full md:w-[40vw] o-4">
          <motion.div {...transition(0.1)} className="flex w-full gap-4">
            <ControlledFieldInput
              control={control}
              name="firstName"
              placeholder="Your first name"
            />
            <ControlledFieldInput
              control={control}
              name="lastName"
              placeholder="Your last name"
            />
          </motion.div>
          <motion.div {...transition(0.25)} className="w-full">
            <ControlledFieldTextarea
              control={control}
              name="address"
              placeholder="Your address"
            />
          </motion.div>
        </form>
      </div>
    </AnimatePresence>
  );
};

export default FormCheckout;
