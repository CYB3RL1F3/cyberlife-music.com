
  import { useForm } from "react-hook-form";
import type { FormOrderConsentProps, FormOrderConsentValues } from "./FormOrderConsent.types";
import { superstructResolver } from "@hookform/resolvers/superstruct";
import { formOrderConsentSchema } from "./FormOrderConsent.schema";
import ControlledFieldCheckbox from "~/components/organisms/ControlledFieldCheckbox";
import Anchor from "~/components/atoms/Anchor";
import Button from "~/components/atoms/Button";

  const FormOrderConsent = ({ defaultValues, children, onSubmit }: FormOrderConsentProps) => {
    const {
      control,
      handleSubmit,
      formState: { isSubmitting, isValid }
    } = useForm<FormOrderConsentValues>({
      defaultValues,
      reValidateMode: "onChange",
      resolver: superstructResolver(formOrderConsentSchema)
    });
    return (
      <div className="w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <ControlledFieldCheckbox id="confirm" control={control} name="confirm" label={
              <>
                I confirm that I order this list of products. I understand that the order is binding and cannot be canceled.
              </>
            } />
            <ControlledFieldCheckbox id="consent" control={control} name="consent" label={
              <>
                By ordering products through this website, I agree with the {" "}
                <Anchor href="/legal-notice" className="text-gray-400 underline ">
                  terms and conditions
                </Anchor>{' '} of the service.
              </>
            } />
          </div>
          <div className="flex justify-end gap-4">
            {children}
            <Button className="text-gray-800 bg-gray-400 w-fit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Order now"}
            </Button>
          </div>
        </form>
      </div>
    )
  }

  export default FormOrderConsent;
  