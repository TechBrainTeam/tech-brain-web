import type React from 'react';

import type { UseFormReturn } from 'react-hook-form';
import type { RegisterRequest } from '../../model/auth.types';

import { Input } from '../../../../shared/components/Form/Input';

type Props = {
  form: UseFormReturn<RegisterRequest>;
};

const StepTwoForm: React.FC<Props> = ({ form }) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <>
      <Input
        label="Ad"
        {...register('firstName', {
          maxLength: { value: 50, message: 'En fazla 50 karakter' },
        })}
        error={errors.firstName?.message}
      />
      <Input
        label="Soyad"
        {...register('lastName', {
          maxLength: { value: 50, message: 'En fazla 50 karakter' },
        })}
        error={errors.lastName?.message}
      />
    </>
  );
};

export default StepTwoForm;
