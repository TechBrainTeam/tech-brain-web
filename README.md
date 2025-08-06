# 🌐 Phobia Aid Web

Phobia Aid'in web arayüzü, kullanıcıların fobilerini tanımlayabileceği, değerlendirebileceği ve içeriklere ulaşabileceği bir arayüz sunar. Bu frontend uygulaması modern React teknolojileriyle, Vite ile geliştirilmiştir.

---

## 🧰 Kullanılan Teknolojiler

| Amaç                     | Teknoloji                      |
| ------------------------ | ------------------------------ |
| React UI                 | **React**, **TypeScript**      |
| Styling                  | **TailwindCSS**                |
| Form yönetimi            | **react-hook-form**            |
| Bildirim sistemi         | **react-hot-toast**            |
| Routing                  | **react-router-dom**           |
| API veri yönetimi        | **@tanstack/react-query**      |
| Cookie yönetimi          | **js-cookie**                  |
| Icon seti                | **lucide-react**               |
| Derleme & Hızlı Başlatma | **Vite**                       |
| Mimari                   | **Domain Driven Design (DDD)** |

---

## 🧱 Mimari Yapı (Domain Driven Design)

Bu projede **DDD (Domain Driven Design)** yaklaşımı izlenmiştir. Her domain (özellik alanı), kendi sorumluluklarını taşıyan birimlere ayrılmıştır: `pages`, `components`, `services`, `types`, `hooks`.

```bash
src/
│
├── domains/
│   ├── auth/
│   │   ├── api/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   └── model/
│
├── shared/
│   ├── api/
│   ├── components/
│   ├── hooks/
│   ├── types/
│   └── utils/
│
├── app/
│   └── layout/
│   └── App.tsx
│   └── router.tsx
└── main.tsx
```

## 🧱 Komutlar

npm install => Proje bağımlılıklarını package.json dosyasına göre yükler. Bu komut, React, TailwindCSS, react-query gibi kütüphaneleri node_modules klasörüne indirir.

npm run dev => Vite ile projeyi geliştirme modunda başlatır. Değişiklikler anlık olarak yansır (hot reload özelliği ile).

npm run build => Projeyi üretim için optimize eder. dist/ klasöründe statik dosyaları oluşturur. Bu dosyalar bir sunucuya yüklenerek dağıtılabilir hale gelir.

npm run lint => Projedeki TypeScript ve JavaScript dosyalarında ESLint kurallarına göre analiz yapar. Kod standartlarına uymayan yerleri tespit eder.
