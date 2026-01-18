import { Camera, Tv, Wifi, Speaker } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export function ServicesHighlights() {
  const { t } = useTranslation();

  const icons = [Camera, Tv, Wifi, Speaker];
  const services = t('servicesSection.items', { returnObjects: true });

  return (
    <section className="py-24 bg-[#0B162C] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('servicesSection.title')}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('servicesSection.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
  {/* أضفنا (as any[]) لمتغير services لتمكين دالة map */}
  {(services as any[]).map((service, index) => {
    // أضفنا (as any[]) لمتغير icons لضمان الوصول للعنصر عبر الـ index
    const Icon = (icons as any[])[index];
    
    // التحقق من وجود الأيقونة لمنع انهيار التطبيق في حال عدم مطابقة العدد
    if (!Icon) return null;

    return (
      <div
        key={index}
        className="border-2 border-[#CDEB44]/30 rounded-xl p-8 cursor-pointer bg-[#0B162C] hover:bg-[#CDEB44]/5 transition-all"
      >
        {/* Animated Icon */}
        <motion.div
          className="bg-[#CDEB44]/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group hover:bg-[#CDEB44] transition-all"
          animate={{
            y: [0, -8, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            y: {
              repeat: Infinity,
              repeatType: 'mirror',
              duration: 3,
              ease: 'easeInOut'
            },
            rotate: {
              repeat: Infinity,
              repeatType: 'mirror',
              duration: 6,
              ease: 'easeInOut'
            }
          }}
        >
          <Icon className="w-8 h-8 text-[#CDEB44] group-hover:text-[#0B162C]" />
        </motion.div>

        <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
        <p className="text-gray-400">{service.description}</p>
      </div>
    );
  })}
</div>

        {/* CTA Button */}
        <div className="text-center">
          <motion.button
            className="bg-[#CDEB44] text-[#0B162C] px-10 py-4 rounded-lg font-semibold hover:bg-[#b8d639] transition-all shadow-xl inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{t('servicesSection.button')}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
