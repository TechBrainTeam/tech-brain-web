import React from 'react';
import { Input } from './Input';
import { Mail } from 'lucide-react';

import type { UseFormRegister } from 'react-hook-form';
import { validationMessages } from '../../../domains/auth/validationMessages';

type Props = {
  name: string;
  register: UseFormRegister<any>;
  error?: string;
  label?: string;
};

export const EmailInput: React.FC<Props> = ({ name, register, error, label = 'E-posta' }) => {
  return (
    <Input
      label={label}
      type="email"
      icon={<Mail size={18} />}
      {...register(name, {
        required: validationMessages.required.email,
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: validationMessages.pattern.email,
        },
      })}
      error={error}
    />
  );
};
