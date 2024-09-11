import { useForm } from 'react-hook-form';
import type {
  FormCheckoutProps,
  FormCheckoutValues,
} from './FormCheckout.types';
import { superstructResolver } from '@hookform/resolvers/superstruct';
import { formCheckoutSchema } from './FormCheckout.schema';
import { useMobileVibration } from '~/hooks/useMobileVibration';
import { useFluidTransition } from '~/hooks/useFluidTransition';
import { motion } from 'framer-motion';
import ControlledFieldInput from '../ControlledFieldInput';
import ControlledFieldTextarea from '../ControlledFieldTextarea';
import ControlledFieldInputAutoComplete from '../ControlledFieldInputAutoComplete';
import ControlledFieldSelector from '../ControlledFieldSelector';
import countries from '~/utils/business/countries';
import CountryFlag from '~/components/atoms/CountryFlag';
import {
  getCities,
  getCityByZipCode,
  getZipCodes,
} from '~/utils/business/cities';
import { useEffect, useMemo, useState } from 'react';
import useDebounceEffect from '~/hooks/useDebouncedEffect';
import ControlledFieldCheckbox from '../ControlledFieldCheckbox';
import ControlledCarrierSelector from '../ControlledFieldCarrierSelector/ControlledFieldCarrierSelector';

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
  defaultValues = initialValues,
}: FormCheckoutProps) => {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { isSubmitted, errors, isValid, ...formState },
  } = useForm<FormCheckoutValues>({
    defaultValues,
    reValidateMode: 'onChange',
    resolver: superstructResolver(formCheckoutSchema),
  });

  console.log('ERRORS ===> ', errors);

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
    100,
  );

  useDebounceEffect(
    () => {
      if (isSameAsBilling) return;
      if (expeditionZipCode?.length) setCanUpdateExpeditionCity(true);
    },
    [expeditionZipCode],
    100,
  );

  useDebounceEffect(
    () => {
      if (city?.length || !canUpdateCity) return;
      const nextCity = getCityByZipCode(country, zipCode);
      if (!nextCity) return;
      setValue('city', nextCity);
      setCanUpdateCity(false);
    },
    [city, zipCode, canUpdateCity],
    400,
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
      const nextCity = getCityByZipCode(expeditionCountry, expeditionZipCode);
      if (!nextCity) return;
      setValue('expedition.city', nextCity);
      setCanUpdateExpeditionCity(false);
    },
    [expeditionCity, expeditionZipCode, canUpdateCity],
    400,
  );

  const suggestedCities = useMemo(() => getCities(country), [country]);
  const suggestedZipCodes = useMemo(() => getZipCodes(country), [country]);
  const suggestedExpeditionCities = useMemo(
    () => (expeditionCountry && getCities(expeditionCountry)) || [],
    [expeditionCountry],
  );
  const suggestedExpeditionZipCodes = useMemo(
    () => (expeditionCountry && getZipCodes(expeditionCountry)) || [],
    [expeditionCountry],
  );

  return (
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
          placeholder="Your billing address"
          className="min-h-[6rem]"
        />
      </motion.div>
      <motion.div {...transition(0.4)} className="w-full">
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
      <motion.div {...transition(0.55)} className="flex w-full gap-4">
        <div className="w-1/3">
          <ControlledFieldInputAutoComplete
            control={control}
            name="zipCode"
            placeholder="ZIP code"
            size="w-full"
            values={suggestedZipCodes}
          />
        </div>
        <div className="w-2/3">
          <ControlledFieldInputAutoComplete
            control={control}
            name="city"
            placeholder="City"
            size="w-full"
            values={suggestedCities}
          />
        </div>
      </motion.div>
      <br />
      <motion.div {...transition(0.7)} className="flex w-full gap-2">
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
      <motion.div {...transition(0.7)} className="w-full">
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
          <motion.div {...transition(0.25)} className="w-full">
            <ControlledFieldTextarea
              control={control}
              name="expedition.address"
              placeholder="Recipient address"
              className="min-h-[6rem]"
            />
          </motion.div>
          <motion.div {...transition(0.4)} className="w-full">
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
          <motion.div {...transition(0.55)} className="flex w-full gap-4">
            <div className="w-1/3">
              <ControlledFieldInputAutoComplete
                control={control}
                name="expedition.zipCode"
                placeholder="ZIP code"
                size="w-full"
                values={suggestedExpeditionZipCodes}
              />
            </div>
            <div className="w-2/3">
              <ControlledFieldInputAutoComplete
                control={control}
                name="expedition.city"
                placeholder="City"
                size="w-full"
                values={suggestedExpeditionCities}
              />
            </div>
          </motion.div>
          <motion.div {...transition(0.7)} className="flex w-full gap-2 pt-4">
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

      <motion.div {...transition(0.7)} className="flex w-full gap-2">
        <ControlledCarrierSelector
          items={items}
          country={country}
          control={control}
          name="carrier"
        />
      </motion.div>

      <motion.div {...transition(0.25)} className="w-full">
        <ControlledFieldTextarea
          control={control}
          name="query"
          placeholder="Any additional information? (delay, delivery extra informations, special request...)"
          className="min-h-[6rem]"
        />
      </motion.div>

      <motion.div {...transition(0.95)} className="flex w-full gap-2">
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
