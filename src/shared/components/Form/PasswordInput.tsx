import React, { useState, type InputHTMLAttributes } from 'react';
import { Input } from './Input';
import { Eye, EyeOff, Lock } from 'lucide-react';
import { Button } from '../Button/Button';

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
          <Button
            type="button"
            onClick={() => setVisible((v) => !v)}
            variant="ghost"
            size="sm"
            className="p-1 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-50 cursor-pointer"
          >
            {visible ? <Eye size={18} /> : <EyeOff size={18} />}
          </Button>
        }
        {...register}
        error={error}
        {...rest}
      />
    </div>
  );
};
