import { Plus } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';

import img1 from '../assets/images/p1.jpg';
import img2 from '../assets/images/p2.jpg';
import img3 from '../assets/images/p3.jpg';
import img4 from '../assets/images/p4.jpg';
import img5 from '../assets/images/abt1.png';
import img6 from '../assets/images/abt2.png';

export function IndustrySectors() {
  const { t } = useTranslation();

  // جلب العناصر المترجمة
  const sectorsData = t('industrySectors.items', { returnObjects: true });

  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#CDEB44]/10 text-[#0B162C] px-4 py-2 rounded-full mb-6">
            <span className="font-semibold">{t('industrySectors.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B162C] mb-4">
            {t('industrySectors.title')}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('industrySectors.subtitle')}
          </p>
        </div>

        {/* Sectors Slider بدون حركة تلقائية */}
      <Swiper
  modules={[Navigation]}
  navigation
  loop={false}
  spaceBetween={30}
  slidesPerView={1}
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1280: { slidesPerView: 4 },
  }}
  grabCursor={true}
>
  {/* الحل هنا: إضافة (as any[]) لتجنب خطأ Property 'map' does not exist */}
  {(sectorsData as any[]).map((sector, index) => (
    <SwiperSlide key={index}>
      <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
        {/* Image */}
        <div className="relative h-96 overflow-hidden">
          <img
            src={images[index % images.length]}
            alt={sector.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B162C] via-[#0B162C]/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-[#0B162C]/70 via-transparent to-transparent rounded-b-2xl">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#CDEB44] transition-colors">
            {sector.title}
          </h3>
          <p className="text-gray-300 mb-4 group-hover:text-white transition-colors">
            {sector.description}
          </p>
          <button className="bg-[#CDEB44] text-[#0B162C] w-12 h-12 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg group-hover:scale-110">
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
      </div>
    </section>
  );
}
