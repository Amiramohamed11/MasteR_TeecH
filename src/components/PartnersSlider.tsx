import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// استيراد ملفات التنسيق الخاصة بـ Swiper
import 'swiper/css';
import 'swiper/css/pagination';

// استيراد الشعارات (تأكد من وجودها في المسار الصحيح)
import logo1 from '../assets/images/logo1.png';
import logo2 from '../assets/images/logo2.png';
import logo3 from '../assets/images/logo3.jpg';
import logo4 from '../assets/images/logo4.png';

// مصفوفة الشركاء - يجب أن تكون خارج المكون أو داخل دالة return منفصلة
const partners = [
  { id: 1, name: 'Partner 1', logo: logo1 },
  { id: 2, name: 'Partner 2', logo: logo2 },
  { id: 3, name: 'Partner 3', logo: logo3 },
  { id: 4, name: 'Partner 4', logo: logo4 },
  { id: 5, name: 'Partner 5', logo: logo2 },
  { id: 6, name: 'Partner 6', logo: logo3 },
  { id: 7, name: 'Partner 7', logo: logo1 },
  { id: 8, name: 'Partner 8', logo: logo2 }
];

export function PartnersSlider() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section className="py-16 bg-[#0B162C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* العنوان */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {isRTL ? 'شركاؤنا' : 'Our Partners'}
          </h2>
          <p className="text-gray-400 text-lg">
            {isRTL
              ? 'نفتخر بالعمل مع أفضل الشركات في الصناعة'
              : 'We are proud to work with the best companies in the industry'}
          </p>
        </div>

        {/* السلايدر */}
        <Swiper
          key={i18n.language} // مهم جداً لإعادة بناء السلايدر عند تغيير اللغة
          dir={isRTL ? 'rtl' : 'ltr'}
          modules={[Autoplay, Pagination]}
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: false // لضمان ظهور كل النقاط بوضوح
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          className="partners-swiper pb-16" // pb-16 لترك مساحة للنقاط في الأسفل
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div className="flex items-center justify-center h-32 bg-white/5 rounded-xl p-6
                border border-white/10 hover:border-[#CDEB44]
                transition-all duration-300 group">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-20 object-contain grayscale opacity-70
                    group-hover:grayscale-0 group-hover:opacity-100
                    transition-all duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}