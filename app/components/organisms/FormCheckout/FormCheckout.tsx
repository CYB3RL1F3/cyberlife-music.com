import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import type {
  FormCheckoutProps,
  FormCheckoutValues,
} from './FormCheckout.types';
import { superstructResolver } from '@hookform/resolvers/superstruct';
import { formCheckoutSchema } from './FormCheckout.schema';
import { useMobileVibration } from '~/hooks/misc/useMobileVibration';
import { useFluidTransition } from '~/hooks/misc/useFluidTransition';
import { motion } from 'framer-motion';
import ControlledFieldInput from '~/components/organisms/ControlledFieldInput';
import ControlledFieldTextarea from '~/components/organisms/ControlledFieldTextarea';
import ControlledFieldInputAutoComplete from '~/components/organisms/ControlledFieldInputAutoComplete';
import ControlledFieldSelector from '~/components/organisms/ControlledFieldSelector';
import countries from '~/utils/business/countries';
import CountryFlag from '~/components/atoms/CountryFlag';
import useDebounceEffect from '~/hooks/misc/useDebouncedEffect';
import ControlledFieldCheckbox from '~/components/organisms/ControlledFieldCheckbox';
import ControlledCarrierSelector from '~/components/organisms/ControlledFieldCarrierSelector/ControlledFieldCarrierSelector';
import { useLocationsSuggestions } from '~/hooks/data/useLocationsSuggestions';
import { AutocompleteLocationSuggestionType } from '~/types/gql';

const initialValues: Partial<FormCheckoutValues> = {
  firstName: '',
  lastName: '',
  address: '',
  country: 'FR',
  zipCode: '',
  city: '',
  email: '',
  phone: '',
  carrier: {
    carrier: '',
    price: 0,
  },
  expedition: {
    isSameAsBilling: true,
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    email: '',
    country: 'FR',
    zipCode: '',
    city: '',
  },
};

const FormCheckout = ({
  items,
  onSubmit,
  footer,
  defaultValues,
}: FormCheckoutProps) => {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { isSubmitted, errors, isValid, ...formState },
  } = useForm<FormCheckoutValues>({
    defaultValues: {
      ...initialValues,
      ...defaultValues,
    },
    reValidateMode: 'onChange',
    resolver: superstructResolver(formCheckoutSchema),
  });

  const transition = useFluidTransition();

  useMobileVibration(isSubmitted && !isValid);
  const submit = handleSubmit((values) => onSubmit(values));

  const values = watch();
  const country = watch('country', 'FR');
  const zipCode = watch('zipCode', '');
  const city = watch('city', '');

  const isSameAsBilling = watch('expedition.isSameAsBilling', false);
  const expeditionCountry = watch('expedition.country', 'FR');
  const expeditionCity = watch('expedition.city', '');
  const expeditionZipCode = watch('expedition.zipCode', '');

  const [canUpdateCity, setCanUpdateCity] = useState(true);
  const [canUpdateExpeditionCity, setCanUpdateExpeditionCity] = useState(false);

  const suggestedCities = useLocationsSuggestions(
    country,
    city,
    AutocompleteLocationSuggestionType.City,
  );

  const suggestedZipCodes = useLocationsSuggestions(
    country,
    zipCode,
    AutocompleteLocationSuggestionType.Postcode,
  );

  const suggestedExpeditionCities = useLocationsSuggestions(
    expeditionCountry || '',
    expeditionCity || '',
    AutocompleteLocationSuggestionType.City,
  );

  const suggestedExpeditionZipCodes = useLocationsSuggestions(
    expeditionCountry || '',
    expeditionZipCode || '',
    AutocompleteLocationSuggestionType.Postcode,
  );

  useEffect(() => {
    if (!country) return;
    setValue('city', '');
    setValue('zipCode', '');
    setCanUpdateCity(true);
  }, [country]);

  useEffect(() => {
    if (isSameAsBilling) {
      setCanUpdateExpeditionCity(false);
      setValue('expedition', {
        ...initialValues.expedition,
        isSameAsBilling: true,
      });
    } else {
      if (!expeditionCountry) return;
      setCanUpdateExpeditionCity(true);
      setValue('expedition.city', '');
      setValue('expedition.zipCode', '');
    }
  }, [expeditionCountry, isSameAsBilling]);

  useDebounceEffect(
    () => {
      if (zipCode?.length) setCanUpdateCity(true);
    },
    [zipCode],
    200,
  );

  useDebounceEffect(
    () => {
      if (isSameAsBilling) return;
      if (expeditionZipCode?.length) setCanUpdateExpeditionCity(true);
    },
    [expeditionZipCode],
    200,
  );

  useDebounceEffect(
    () => {
      if (city?.length || !canUpdateCity) return;
      const nextCity = suggestedZipCodes.find(
        (value) => value.zipcode === zipCode,
      )?.city;
      if (!nextCity) return;
      setValue('city', nextCity);
      setCanUpdateCity(false);
    },
    [city, zipCode, canUpdateCity],
    200,
  );

  useDebounceEffect(
    () => {
      if (isSameAsBilling) return;
      if (
        expeditionCity?.length ||
        !expeditionCountry?.length ||
        !expeditionZipCode?.length ||
        !canUpdateExpeditionCity
      )
        return;
      const nextCity = suggestedExpeditionZipCodes.find(
        (value) => value.zipcode === zipCode,
      )?.city;

      if (!nextCity) return;
      setValue('expedition.city', nextCity);
      setCanUpdateExpeditionCity(false);
    },
    [expeditionCity, expeditionZipCode, canUpdateCity],
    200,
  );

  return (
    <form onSubmit={submit} className="w-full md:w-[40vw] o-4">
      <motion.div
        {...transition(0.1)}
        className="flex w-full gap-4 max-lg:flex-col"
      >
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
      <motion.div {...transition(0.15)} className="w-full">
        <ControlledFieldTextarea
          control={control}
          name="address"
          placeholder="Your billing address"
          className="min-h-[6rem]"
        />
      </motion.div>
      <motion.div {...transition(0.2)} className="w-full">
        <ControlledFieldSelector
          name="country"
          control={control}
          label="Country"
          items={countries.map((country) => ({
            ...country,
            id: country.value,
            icon: <CountryFlag country={country} />,
          }))}
          position="bottom"
          filterPlaceholder="Search for a country"
          filterable
        />
      </motion.div>
      <motion.div
        {...transition(0.25)}
        className="flex w-full gap-4 max-lg:flex-col"
      >
        <div className="w-full lg:w-1/3">
          <ControlledFieldInputAutoComplete
            control={control}
            name="zipCode"
            placeholder="ZIP code"
            size="w-full"
            values={suggestedZipCodes.map((value) => value.zipcode)}
          />
        </div>
        <div className="w-full lg:w-2/3">
          <ControlledFieldInputAutoComplete
            control={control}
            name="city"
            placeholder="City"
            size="w-full"
            values={suggestedCities.map((value) => value.city)}
          />
        </div>
      </motion.div>
      <br />
      <motion.div
        {...transition(0.3)}
        className="flex w-full gap-4 max-lg:flex-col"
      >
        <ControlledFieldInput
          control={control}
          name="email"
          placeholder="Your email"
          type="email"
        />
        <ControlledFieldInput
          control={control}
          name="phone"
          placeholder="Your phone number"
          type="phone"
        />
      </motion.div>
      <motion.div {...transition(0.35)} className="w-full">
        <ControlledFieldCheckbox
          id="expedition.isSameAsBilling"
          control={control}
          name="expedition.isSameAsBilling"
          label="Use the same address for expedition"
        />
      </motion.div>

      {/* EXPEDITION */}
      {!isSameAsBilling && (
        <div className="w-full pl-4 ml-2 border-l-2 border-gray-700 o-4">
          <h3 className="flex items-center w-full h-8 text-gray-300 text-md">
            Expedition address:
          </h3>
          <motion.div {...transition(0.1)} className="flex w-full gap-4">
            <ControlledFieldInput
              control={control}
              name="expedition.firstName"
              placeholder="Recipient first name"
            />
            <ControlledFieldInput
              control={control}
              name="expedition.lastName"
              placeholder="Recipient last name"
            />
          </motion.div>
          <motion.div {...transition(0.15)} className="w-full">
            <ControlledFieldTextarea
              control={control}
              name="expedition.address"
              placeholder="Recipient address"
              className="min-h-[6rem]"
            />
          </motion.div>
          <motion.div {...transition(0.2)} className="w-full">
            <ControlledFieldSelector
              name="expedition.country"
              control={control}
              label="Recipient country"
              items={countries.map((country) => ({
                ...country,
                id: country.value,
                icon: <CountryFlag country={country} />,
              }))}
              position="bottom"
              filterPlaceholder="Search for a country"
              filterable
            />
          </motion.div>
          <motion.div {...transition(0.25)} className="flex w-full gap-4">
            <div className="w-1/3">
              <ControlledFieldInputAutoComplete
                control={control}
                name="expedition.zipCode"
                placeholder="ZIP code"
                size="w-full"
                values={suggestedExpeditionZipCodes.map(
                  (value) => value.zipcode,
                )}
              />
            </div>
            <div className="w-2/3">
              <ControlledFieldInputAutoComplete
                control={control}
                name="expedition.city"
                placeholder="City"
                size="w-full"
                values={suggestedExpeditionCities.map((value) => value.city)}
              />
            </div>
          </motion.div>
          <motion.div {...transition(0.3)} className="flex w-full gap-2 pt-4">
            <ControlledFieldInput
              control={control}
              name="expedition.email"
              placeholder="Recipient email"
              type="email"
            />
            <ControlledFieldInput
              control={control}
              name="expedition.phone"
              placeholder="Recipient phone number"
              type="phone"
            />
          </motion.div>
        </div>
      )}

      <motion.div {...transition(0.4)} className="flex w-full gap-2">
        <ControlledCarrierSelector
          items={items}
          country={country}
          control={control}
          name="carrier"
        />
      </motion.div>

      <motion.div {...transition(0.45)} className="w-full">
        <ControlledFieldTextarea
          control={control}
          name="query"
          placeholder="Any additional information? (delay, delivery extra informations, special request...)"
          className="min-h-[6rem]"
        />
      </motion.div>

      <motion.div {...transition(0.5)} className="flex w-full gap-2">
        <ControlledFieldInput
          autoComplete="off"
          autoCorrect="off"
          control={control}
          name="amount"
          type="hidden"
        />
        {footer?.(
          { isSubmitted, isValid, errors, ...formState },
          values,
          reset,
        )}
      </motion.div>

      {/* SUBMIT */}
    </form>
  );
};

export default FormCheckout;
