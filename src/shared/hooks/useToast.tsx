import { toast } from 'react-hot-toast';
import { X, CheckCircle, AlertTriangle, Info } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info' | 'warning';

type ToastOptions = {
  message: string;
  type?: ToastType;
  duration?: number;
};

const getToastConfig = (type: ToastType) => {
  const configs = {
    success: {
      icon: CheckCircle,
      bgGradient: 'bg-gradient-to-r from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
      textColor: 'text-green-800',
      shadow: 'shadow-green-100',
      progressColor: 'bg-gradient-to-r from-green-400 to-emerald-500',
    },
    error: {
      icon: AlertTriangle,
      bgGradient: 'bg-gradient-to-r from-red-50 to-rose-50',
      borderColor: 'border-red-200',
      iconColor: 'text-red-600',
      iconBg: 'bg-red-100',
      textColor: 'text-red-800',
      shadow: 'shadow-red-100',
      progressColor: 'bg-gradient-to-r from-red-400 to-rose-500',
    },
    info: {
      icon: Info,
      bgGradient: 'bg-gradient-to-r from-blue-50 to-indigo-50',
      borderColor: 'border-blue-200',
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      textColor: 'text-blue-800',
      shadow: 'shadow-blue-100',
      progressColor: 'bg-gradient-to-r from-blue-400 to-indigo-500',
    },
    warning: {
      icon: AlertTriangle,
      bgGradient: 'bg-gradient-to-r from-yellow-50 to-amber-50',
      borderColor: 'border-yellow-200',
      iconColor: 'text-yellow-600',
      iconBg: 'bg-yellow-100',
      textColor: 'text-yellow-800',
      shadow: 'shadow-yellow-100',
      progressColor: 'bg-gradient-to-r from-yellow-400 to-amber-500',
    },
  };

  return configs[type];
};

export const showToast = ({ message, type = 'info', duration = 4000 }: ToastOptions) => {
  const config = getToastConfig(type);
  const Icon = config.icon;

  toast.custom(
    (t) => (
      <div
        className={`
          ${t.visible ? 'animate-enter' : 'animate-leave'}
          max-w-sm w-full ${config.bgGradient} shadow-lg rounded-2xl pointer-events-auto 
          flex flex-col border-2 ${config.borderColor}
          backdrop-blur-sm overflow-hidden
          transform transition-all duration-300 ease-out
          hover:scale-105 hover:shadow-xl
          ${config.shadow}
        `}
        style={{
          animationDuration: '400ms',
          animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div
          className={`h-1 ${config.progressColor} rounded-t-2xl`}
          style={{
            animation: `toast-progress ${duration}ms linear forwards`,
          }}
        />

        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3 flex-1">
            <div
              className={`w-10 h-10 ${config.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm`}
            >
              <Icon className={config.iconColor} size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-semibold ${config.textColor} leading-relaxed`}>
                {message}
              </p>
            </div>
          </div>

          <button
            onClick={() => toast.dismiss(t.id)}
            className="ml-3 text-gray-400 hover:text-gray-600 transition-all duration-200 
                       focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg p-1
                       hover:bg-gray-100 flex-shrink-0"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    ),
    {
      duration,
      position: 'top-right',
    }
  );
};

export const showSuccessToast = (message: string) =>
  showToast({
    message,
    type: 'success',
  });

export const showErrorToast = (message: string) =>
  showToast({
    message,
    type: 'error',
  });

export const showInfoToast = (message: string) =>
  showToast({
    message,
    type: 'info',
  });

export const showWarningToast = (message: string) =>
  showToast({
    message,
    type: 'warning',
  });
