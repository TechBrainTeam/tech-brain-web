import type React from 'react';
import type { UseFormReturn } from 'react-hook-form';
import type { LoginRequest } from '../../model/auth.types';
import { Input } from '../../../../shared/components/Form/Input';
import { User } from 'lucide-react';
import { validationMessages } from '../../validationMessages';
import { PasswordInput } from '../../../../shared/components/Form/PasswordInput';

type Props = {
  form: UseFormReturn<LoginRequest>;
};

const LoginForm: React.FC<Props> = ({ form }) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <>
      <Input
        label="Kullanıcı Adı veya E-posta"
        icon={<User />}
        {...register('emailOrUsername', { required: validationMessages.required.emailOrUsername })}
        error={errors.emailOrUsername?.message}
      />
      <PasswordInput
        register={register('password', { required: validationMessages.required.password })}
        error={errors.password?.message}
      />
    </>
  );
};

export default LoginForm;
