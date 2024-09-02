import type { FormContactProps, FormContactValues } from "./FormContact.types";
import { superstructResolver } from "@hookform/resolvers/superstruct";
import { useForm } from "react-hook-form";
import { formContactSchema } from "./FormContact.schema";
import ControlledFieldInput from "~/components/organisms/ControlledFieldInput";
import ControlledFieldInputAutoComplete from "~/components/organisms/ControlledFieldInputAutoComplete/ControlledFieldInputAutoComplete";
import ControlledFieldTextarea from "~/components/organisms/ControlledFieldTextarea";
import { IoMdSend } from "react-icons/io";
import ButtonSubmit from "~/components/molecules/ButtonSubmit/ButtonSubmit";
import { useMobileVibration } from "~/hooks/useMobileVibration";
import { motion, AnimatePresence } from "framer-motion";
import { useFluidTransition } from "~/hooks/useFluidTransition";
import FormHeading from "../FormHeading";

const FormContact = ({
  onSubmit,
  defaultValues,
  subjectSuggestions
}: FormContactProps) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isDirty, isSubmitted, isValid }
  } = useForm<FormContactValues>({
    defaultValues,
    reValidateMode: "onChange",
    resolver: superstructResolver(formContactSchema)
  });

  useMobileVibration(isSubmitted && !isValid);

  const submit = handleSubmit((values) => onSubmit(values));
  const transition = useFluidTransition();
  return (
    <AnimatePresence mode="wait">
      <div className="flex flex-col items-end justify-end w-full">
        <FormHeading
          title="Let's keep in touch!"
          description={
            <>
              You can contact me by this form or by mail at{" "}
              <a
                className="underline"
                href="mailto:contact@cyberlife-music.com"
              >
                contact<span>@</span>cyberlife-music.com
              </a>
            </>
          }
        />

        <form onSubmit={submit} className="w-full md:w-[40vw] o-4">
          <motion.div {...transition(0.1)} className="w-full">
            <ControlledFieldInput
              control={control}
              name="name"
              placeholder="Your name"
            />
          </motion.div>
          <motion.div {...transition(0.15)} className="w-full">
            <ControlledFieldInput
              control={control}
              name="email"
              type="email"
              placeholder="Your email"
            />
          </motion.div>

          <motion.div
            {...transition(0.2)}
            className="relative z-20 w-full md:w-[40vw]"
          >
            <ControlledFieldInputAutoComplete
              control={control}
              name="subject"
              placeholder="Your subject"
              size="w-full md:w-[40vw]"
              values={subjectSuggestions}
            />
          </motion.div>
          <motion.div {...transition(0.25)} className="w-full">
            <ControlledFieldTextarea
              control={control}
              name="message"
              placeholder="Your message"
            />
          </motion.div>

          <motion.div {...transition(0.3)} className="w-full">
            <div className="flex justify-between h-12">
              <ControlledFieldInput
                autoComplete="off"
                autoCorrect="off"
                control={control}
                name="address"
                type="hidden"
              />
              <ButtonSubmit
                loading={isSubmitting}
                disabled={!isDirty}
                rightIcon={<IoMdSend />}
                className="w-24"
              >
                SEND
              </ButtonSubmit>
            </div>
          </motion.div>
        </form>
      </div>
    </AnimatePresence>
  );
};

export default FormContact;
