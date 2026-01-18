import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function CaseStudies() {
  const { t } = useTranslation();
  const caseStudies = t('caseStudies.items', { returnObjects: true });

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#CDEB44]/10 text-[#0B162C] px-4 py-2 rounded-full mb-6">
            <span className="font-semibold">{t('caseStudies.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B162C] mb-4">
            {t('caseStudies.title')}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('caseStudies.subtitle')}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {/* التعديل الجوهري هنا: تحويل نوع القيمة المسترجعة إلى مصفوفة لتجنب خطأ الـ map */}
  {(t('caseStudies.items', { returnObjects: true }) as any[]).map((study, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <span className="absolute top-4 left-4 bg-[#CDEB44] text-[#0B162C] px-3 py-1 rounded-full text-xs font-semibold">
          {study.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-500 text-sm mb-2">{study.date}</p>
        <h3 className="text-lg font-bold text-[#0B162C] mb-3">
          {study.title}
        </h3>
        <p className="text-gray-600 mb-5 text-sm line-clamp-3">
          {study.description}
        </p>

        <button className="inline-flex items-center gap-2 text-[#1A4F9C] font-semibold">
          {t('caseStudies.explore')}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  ))}
</div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <button className="bg-[#1A4F9C] text-white px-12 py-4 rounded-lg font-semibold hover:bg-[#153d7a] transition-all shadow-xl">
            {t('caseStudies.viewAll')}
          </button>
        </motion.div>

      </div>
    </section>
  );
}
