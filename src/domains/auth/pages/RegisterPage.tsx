import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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
        navigate('/user');
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
    <div className="min-h-screen flex">
      <AuthIntro
        icon={Shield}
        title="Fobi Uygulaması"
        description="Korkularınızla yüzleşin, güvenli bir ortamda iyileşin ve kendinizi keşfedin."
      />

      <div className="flex-1 flex flex-col justify-center px-8 lg:px-24 py-24 bg-white">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Hesap Oluştur</h1>
          <p className="text-gray-500 mb-8">
            {step === 1
              ? 'Yeni bir yolculuğa başlamak için kaydol'
              : 'Opsiyonel bilgileri doldurabilir veya bu adımı geçebilirsiniz.'}
          </p>

          <form className="space-y-5">
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

          <p className="mt-6 text-center text-gray-600">
            Zaten hesabın var mı?{' '}
            <a href="/login" className="text-black font-medium hover:underline">
              Giriş Yap
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
