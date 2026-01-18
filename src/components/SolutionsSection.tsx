import { Building2, Phone, Camera, Home, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export function SolutionsSection() {
  const { t } = useTranslation();

  const solutionsData = t('solutions.items', { returnObjects: true });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B162C] mb-4">
            {t('solutions.title')}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
  {/* التعديل هنا: أضفنا التحويل لمصفوفة any لضمان عمل الـ map */}
  {(solutionsData as any[]).map((solution, index) => (
    <div
      key={index}
      className="group bg-white border border-gray-200 rounded-2xl p-8 
                 hover:shadow-2xl hover:-translate-y-2 
                 transition-all duration-300 h-full cursor-pointer"
    >
      {/* Icon with motion */}
      <motion.div
        className="bg-[#CDEB44]/15 w-16 h-16 rounded-xl flex items-center justify-center mb-6"
        animate={{ rotate: [0, 15, -15, 0], y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        {solution.icon === 'Building2' && <Building2 className="w-8 h-8 text-[#1A4F9C]" />}
        {solution.icon === 'Phone' && <Phone className="w-8 h-8 text-[#1A4F9C]" />}
        {solution.icon === 'Camera' && <Camera className="w-8 h-8 text-[#1A4F9C]" />}
        {solution.icon === 'Home' && <Home className="w-8 h-8 text-[#1A4F9C]" />}
      </motion.div>

      {/* Title */}
      <h3 className="text-xl font-bold text-[#0B162C] mb-2">
        {solution.title}
      </h3>

      {/* Divider */}
      <div className="w-12 h-1 bg-[#CDEB44] rounded-full mb-6"></div>

      {/* Benefits */}
      <ul className="space-y-3">
        {/* هذا الجزء الذي عدلناه سابقاً وهو صحيح الآن */}
        {(solution.benefits as any[]).map((benefit: string, idx: number) => (
          <li key={idx} className="flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-[#CDEB44] mt-1 flex-shrink-0" />
            <span className="text-gray-600 text-sm leading-relaxed">
              {benefit}
            </span>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
        {/* CTA */}
        <div className="text-center">
          <button className="bg-[#1A4F9C] text-white px-12 py-4 rounded-lg font-semibold hover:bg-[#153d7a] transition-all shadow-xl">
            {t('solutions.button')}
          </button>
        </div>

      </div>
    </section>
  );
}
