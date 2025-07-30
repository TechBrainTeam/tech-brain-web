import type React from 'react';

import type { RegisterRequest } from '../../model/auth.types';
import type { UseFormReturn } from 'react-hook-form';
import { validationMessages } from '../../validationMessages';
import { User } from 'lucide-react';

import { Input } from '../../../../shared/components/Form/Input';
import { PasswordInput } from '../../../../shared/components/Form/PasswordInput';
import { EmailInput } from '../../../../shared/components/Form/EmailInput';

type Props = {
  form: UseFormReturn<RegisterRequest>;
};

const StepOneForm: React.FC<Props> = ({ form }) => {
  const {
    register,
    watch,
    formState: { errors },
  } = form;
  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  return (
    <>
      <Input
        label="Kullanıcı Adı"
        icon={<User size={18} />}
        {...register('username', { required: validationMessages.required.username })}
        error={errors.username?.message}
      />
      <EmailInput name="email" register={form.register} error={errors.email?.message} />
      <PasswordInput
        register={register('password', {
          required: validationMessages.required.password,
          minLength: {
            value: 8,
            message: validationMessages.passwordRules.minLength,
          },
          validate: {
            hasUpperCase: (val) =>
              /[A-Z]/.test(val) || validationMessages.passwordRules.hasUpperCase,
            hasNumber: (val) => /\d/.test(val) || validationMessages.passwordRules.hasNumber,
            hasSymbol: (val) =>
              /[^A-Za-z0-9]/.test(val) || validationMessages.passwordRules.hasSymbol,
          },
        })}
        error={errors.password?.message}
        value={password}
        showRequirements
      />
      <PasswordInput
        label="Şifre (Tekrar)"
        register={register('confirmPassword', {
          required: validationMessages.required.confirmPassword,
        })}
        error={errors.confirmPassword?.message}
        value={confirmPassword}
        showRequirements
      />
    </>
  );
};

export default StepOneForm;
