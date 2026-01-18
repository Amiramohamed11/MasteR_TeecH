import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function ProcessSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gradient-to-br from-[#0B162C] via-[#1A4F9C] to-[#0B162C] relative overflow-hidden">

      {/* Background Shapes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 left-10 w-64 h-64 border-4 border-[#CDEB44] rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 right-10 w-96 h-96 border-4 border-[#CDEB44] rotate-45"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto">
            {t('process.title')}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            {t('process.subtitle')}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#CDEB44] text-[#0B162C] px-8 py-4 rounded-lg font-semibold shadow-xl"
            >
              {t('process.primaryButton')}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold"
            >
              {t('process.secondaryButton')}
            </motion.button>
          </div>
        </motion.div>

        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div>
              <span className="inline-block bg-[#CDEB44] text-[#0B162C] px-4 py-2 rounded-full mb-6 font-semibold">
                {t('process.step.label')}
              </span>

              <h3 className="text-3xl font-bold text-white mb-6">
                {t('process.step.title')}
              </h3>

              <p className="text-gray-300 mb-8">
                {t('process.step.description')}
              </p>

              <div className="space-y-4">
  {/* الحل: إضافة as any[] لتحديد نوع المصفوفة، وتحديد نوع item و index داخل الـ map */}
  {(t('process.step.features', { returnObjects: true }) as any[]).map((item: string, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex items-center space-x-3 rtl:space-x-reverse" 
    >
      <span className="w-2 h-2 bg-[#CDEB44] rounded-full" />
      <span className="text-white">{item}</span>
    </motion.div>
  ))}
</div>
            </div>

            {/* Right Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1752262167753-37a0ec83f614"
                alt="Security System"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B162C]/80 to-transparent" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20"
              >
                <p className="text-white font-semibold">
                  {t('process.image.title')}
                </p>
                <p className="text-gray-300 text-sm">
                  {t('process.image.subtitle')}
                </p>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
