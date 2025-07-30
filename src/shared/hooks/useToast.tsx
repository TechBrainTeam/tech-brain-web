import { toast } from 'react-hot-toast';
import { X, CheckCircle, AlertTriangle, type LucideIcon } from 'lucide-react';

type ToastOptions = {
  message: string;
  icon?: LucideIcon;
  iconColor?: string;
  duration?: number;
  borderColor?: string;
};

export const showToast = ({
  message,
  icon: Icon = X,
  iconColor = 'text-gray-600',
  duration = 3000,
  borderColor = 'border-gray-4000',
}: ToastOptions) => {
  toast.custom(
    (t) => (
      <div
        onClick={() => toast.dismiss(t.id)}
        className={`
        ${t.visible ? 'animate-enter' : 'animate-leave'}
        max-w-sm w-full bg-gray-100 shadow-md rounded-lg pointer-events-auto flex items-center justify-between border
        px-4 py-3 ${borderColor}
      `}
        style={{ animationDuration: '300ms' }}
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon className={iconColor} size={20} />}
          <p className="text-sm font-semibold text-gray-900">{message}</p>
        </div>

        <button
          onClick={() => toast.dismiss(t.id)}
          className="text-gray-400 hover:text-red-700 transition-colors duration-200 focus:outline-none cursor-pointer"
          aria-label="Close"
        >
          <X size={20} />
        </button>
      </div>
    ),
    { duration }
  );
};

export const showSuccessToast = (message: string) =>
  showToast({
    message,
    icon: CheckCircle,
    iconColor: 'text-green-600',
    borderColor: 'border-green-200',
  });

export const showErrorToast = (message: string) =>
  showToast({
    message,
    icon: AlertTriangle,
    iconColor: 'text-red-600',
    borderColor: 'border-red-200',
  });
