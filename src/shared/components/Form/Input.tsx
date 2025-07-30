import React from 'react';

type Props = {
  label: string;
  type?: string;
  error?: string;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = ({
  label,
  error,
  type = 'text',
  icon,
  rightIcon,
  ...rest
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
      <input
        type={type}
        className={`w-full bg-white border px-4 py-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 transition-all duration-200 
          ${error ? 'border-red-500 ring-red-300' : 'border-gray-300 focus:ring-black'} 
          ${icon ? 'pl-10' : ''}`}
        {...rest}
      />
      {rightIcon && (
        <div
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-black hover:scale-110 
          transition duration-200 flex items-center justify-center w-8 h-8 rounded-fullselect-none"
        >
          {rightIcon}
        </div>
      )}
    </div>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);
