// import { Users, Star } from 'lucide-react';

// const TestimonialsSection = () => {
//   const testimonials = [
//     {
//       name: 'Ayşe K.',
//       fobi: 'Yükseklik Fobisi',
//       content: 'Yükseklik korkum vardı ve artık 10. katta yaşayabiliyorum! Bu uygulama gerçekten hayatımı değiştirdi.',
//       gradient: 'from-indigo-50 to-indigo-100',
//       avatarBg: 'bg-indigo-600'
//     },
//     {
//       name: 'Mehmet A.',
//       fobi: 'Sosyal Fobi',
//       content: 'Sosyal fobim yüzünden iş görüşmelerine gidemiyordum. Şimdi toplantılarda rahatça konuşabiliyorum.',
//       gradient: 'from-purple-50 to-purple-100',
//       avatarBg: 'bg-purple-600'
//     },
//     {
//       name: 'Zeynep M.',
//       fobi: 'Uçak Fobisi',
//       content: 'Uçak korkum vardı ve hiç seyahat edemiyordum. Artık dünyayı gezebiliyorum!',
//       gradient: 'from-pink-50 to-pink-100',
//       avatarBg: 'bg-pink-600'
//     }
//   ];

//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Kullanıcılarımız Ne Diyor?
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Binlerce kişi fobilerini aştı ve hayatlarını değiştirdi
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className={`bg-gradient-to-br ${testimonial.gradient} p-8 rounded-3xl`}>
//               <div className="flex items-center gap-1 mb-4">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//                 ))}
//               </div>
//               <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.content}</p>
//               <div className="flex items-center gap-3">
//                 <div className={`w-12 h-12 ${testimonial.avatarBg} rounded-full flex items-center justify-center`}>
//                   <Users className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <div className="font-semibold text-gray-900">{testimonial.name}</div>
//                   <div className="text-gray-600 text-sm">{testimonial.fobi}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;
