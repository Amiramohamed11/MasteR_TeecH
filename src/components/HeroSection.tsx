import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import header1 from '../assets/images/header1.jpeg';
import header2 from '../assets/images/header2.jpg';
import header3 from '../assets/images/header3.jpg';

export function HeroSection() {
  const { t } = useTranslation();

  // مصفوفة الصور
  const images = [header1, header2, header3];
  const [currentImage, setCurrentImage] = useState(0);

  // تغيير الصورة كل ثانية
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length); // للعودة للصورة الأولى بعد الأخيرة
    }, 3000); // 1000 مللي ثانية = ثانية
    return () => clearInterval(interval); // تنظيف الانترفال عند خروج الكومبوننت
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 text-center">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={images[currentImage]}
          alt="CCTV Security"
          className="w-full h-full object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B162C]/95 via-[#0B162C]/80 to-[#0B162C]/60" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl font-semibold text-[#CDEB44] block mb-6"
        >
          {t('hero.subtitle')}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-tight whitespace-pre-line"
        >
          {t('hero.title')}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex justify-center flex-wrap gap-4"
        >
          <button className="bg-[#CDEB44] text-[#0B162C] px-8 py-4 rounded-xl font-semibold hover:bg-[#b8d639] transition-all shadow-lg hover:shadow-xl">
            {t('hero.enquire')}
          </button>

          <button className="bg-white text-[#0B162C] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
            {t('hero.more')}
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
