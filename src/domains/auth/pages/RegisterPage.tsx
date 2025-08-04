import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useRegister } from '../hooks/useRegister';

import { Shield } from 'lucide-react';
import { showErrorToast, showSuccessToast } from '../../../shared/hooks/useToast';
import type { RegisterRequest } from '../model/auth.types';

import AuthIntro from '../components/AuthIntro';
import StepOneForm from '../components/registerForm/StepOneForm';
import StepTwoForm from '../components/registerForm/StepTwoForm';
import Actions from '../components/registerForm/Actions';

export const RegisterPage = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const form = useForm<RegisterRequest>({
    mode: 'onTouched',
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const { handleSubmit, trigger, getValues } = form;

  const { mutate: registerUser, isPending } = useRegister();

  const validatePasswordsMatch = (): boolean => {
    const { password, confirmPassword } = getValues();
    if (password !== confirmPassword) {
      showErrorToast('Şifreler uyuşmuyor!');
      return false;
    }
    return true;
  };

  const onSubmit = async () => {
    if (step === 1) return;

    const isValid = await trigger();
    if (!isValid || !validatePasswordsMatch()) return;

    const values = getValues();
    registerUser(values, {
      onSuccess: () => {
        showSuccessToast('Kayıt başarılı!');
        navigate('/user/home');
      },
      onError: (err: any) => {
        showErrorToast(err?.response?.data.message || 'Bir hata oluştu');
      },
    });
  };

  const handleNextStep = async () => {
    const isValid = await trigger(['username', 'email', 'password', 'confirmPassword']);

    if (!isValid || !validatePasswordsMatch()) return;

    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSkipStep = () => {
    if (!validatePasswordsMatch()) return;

    const values = getValues();
    registerUser(values, {
      onSuccess: () => {
        showSuccessToast('Kayıt başarılı!');
        navigate('/loginp');
      },
      onError: (err) => {
        showErrorToast(err.message || 'Bir hata oluştu');
      },
    });
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-50 to-gray-100">
      <AuthIntro
        icon={Shield}
        title="Fobi Uygulaması"
        description="Korkularınızla yüzleşin, güvenli bir ortamda iyileşin ve kendinizi keşfedin."
      />

      <div className="flex-1 flex flex-col justify-center px-8 lg:px-24 py-12">
        <div className="max-w-md w-full mx-auto animate-scaleIn">
          <div className="auth-card rounded-3xl p-6 shadow-2xl border border-white/20">
            <div className="text-center mb-6 animate-fadeIn">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">Hesap Oluştur</h1>
              <p className="text-gray-600 text-sm">
                {step === 1
                  ? 'Yeni bir yolculuğa başlamak için kaydol'
                  : 'Opsiyonel bilgileri doldurabilir veya bu adımı geçebilirsiniz.'}
              </p>

              {/* Step indicator */}
              <div className="flex justify-center mt-4 space-x-2">
                <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${step >= 1 ? 'bg-indigo-600' : 'bg-gray-300'}`}></div>
                <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${step >= 2 ? 'bg-indigo-600' : 'bg-gray-300'}`}></div>
              </div>
            </div>

            <form className="space-y-4">
              {step === 1 && <StepOneForm form={form} />}
              {step === 2 && <StepTwoForm form={form} />}
            </form>

            <Actions
              step={step}
              isPending={isPending}
              onBack={handleBack}
              onNext={handleNextStep}
              onSubmit={handleSubmit(onSubmit)}
              onSkip={handleSkipStep}
            />

            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-center text-gray-600 text-sm">
                Zaten hesabın var mı?{' '}
                <Link
                  to="/login"
                  className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors duration-200 hover:underline"
                >
                  Giriş Yap
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
