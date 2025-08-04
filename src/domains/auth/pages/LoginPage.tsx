import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
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
        navigate('/user/home');
      },
      onError: (err: any) => {
        showErrorToast(err?.response?.data.message || 'Bir hata oluştu');
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

      <div className="flex-1 flex flex-col justify-center px-8 lg:px-24 py-24">
        <div className="max-w-md w-full mx-auto animate-scaleIn">
          <div className="auth-card rounded-3xl p-8 shadow-2xl border border-white/20">
            <div className="text-center mb-8 animate-fadeIn">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Tekrar Hoş Geldin</h1>
              <p className="text-gray-600">Korkularını yenme yolculuğuna devam et</p>
            </div>

            <form className="space-y-6">
              <LoginForm form={form} />
            </form>

            <Actions isPending={isPending} onSubmit={handleSubmit(onSubmit)} />

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-center text-gray-600">
                Hesabın Yok Mu?{' '}
                <Link
                  to="/register"
                  className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors duration-200 hover:underline"
                >
                  Hesap Oluştur
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
