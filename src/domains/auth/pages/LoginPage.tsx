import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import type { LoginRequest } from '../model/auth.types';
import { useLogin } from '../hooks/useLogin';
import { showErrorToast, showSuccessToast } from '../../../shared/hooks/useToast';
import AuthIntro from '../components/AuthIntro';
import { Shield } from 'lucide-react';
import LoginForm from '../components/loginForm/LoginForm';
import Actions from '../components/loginForm/Actions';

export const LoginPage = () => {
  const navigate = useNavigate();

  const form = useForm<LoginRequest>({
    mode: 'onTouched',
    defaultValues: {
      emailOrUsername: '',
      password: '',
    },
  });

  const { handleSubmit, trigger, getValues } = form;

  const { mutate: loginUser, isPending } = useLogin();

  const onSubmit = async () => {
    const isValid = await trigger();
    if (!isValid) return;

    const values = getValues();
    loginUser(values, {
      onSuccess: () => {
        showSuccessToast('Giriş başarılı');
        navigate('/');
      },
      onError: (err: any) => {
        showErrorToast(err?.response?.data.message || 'Bir hata oluştu');
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tekrar Hoş Geldin</h1>
          <p className="text-gray-500 mb-8">Korkularını yenme yolculuğuna devam et</p>
          <form className="space-y-5">
            <LoginForm form={form} />
          </form>

          <Actions isPending={isPending} onSubmit={handleSubmit(onSubmit)} />

          <p className="mt-6 text-center text-gray-600">
            Hesabın Yok Mu?{' '}
            <a href="/register" className="text-black font-medium hover:underline">
              Hesap Oluştur
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
