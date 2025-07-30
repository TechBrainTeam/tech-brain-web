import React, { useState, type InputHTMLAttributes } from 'react';
import { Input } from './Input';
import { Eye, EyeOff, Lock } from 'lucide-react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  register: ReturnType<any>;
  showRequirements?: boolean;
  value?: string;
}

export const PasswordInput: React.FC<Props> = ({
  label = 'Şifre',
  error,
  register,
  showRequirements = false,
  value = '',
  ...rest
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="space-y-1">
      <Input
        label={label}
        icon={<Lock size={18} />}
        type={visible ? 'text' : 'password'}
        rightIcon={
          <button type="button" onClick={() => setVisible((v) => !v)} className="cursor-pointer">
            {visible ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        }
        {...register}
        error={error}
        {...rest}
      />
    </div>
  );
};
