export const validationMessages = {
  required: {
    username: 'Kullanıcı adı alanı zorunludur.',
    email: 'E-posta adresi boş bırakılamaz.',
    password: 'Lütfen bir şifre girin.',
    confirmPassword: 'Şifre tekrar alanı boş bırakılamaz.',
    emailOrUsername: 'Lütfen kullanıcı adınızı veya e-posta adresinizi girin.',
  },
  passwordRules: {
    minLength: 'Şifre en az 8 karakter olmalı',
    hasUpperCase: 'En az bir büyük harf olmalı',
    hasNumber: 'En az bir rakam olmalı',
    hasSymbol: 'En az bir özel karakter olmalı',
  },
  pattern: {
    email: 'Geçerli bir e-posta adresi girin.',
  },
};
