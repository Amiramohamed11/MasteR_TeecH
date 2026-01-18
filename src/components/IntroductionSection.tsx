import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import abt1 from '../assets/images/abt1.png';
import abt2 from '../assets/images/abt2.png';

/* 🔢 Count Up Hook */
function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}

export function IntroductionSection() {
  const { t } = useTranslation();

  const years = useCountUp(15);
  const clients = useCountUp(98);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-[#CDEB44]/10 text-[#0B162C] px-4 py-2 rounded-full mb-6">
              <span className="font-semibold">
                {t('introduction.badge')}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0B162C] mb-12 whitespace-pre-line">
              {t('introduction.title')}
            </h2>

            {/* POINTS */}
            <div className="space-y-4">
              {(t('introduction.points', { returnObjects: true }) as string[]).map(
                (point, index) => (
                  <div key={index} className="flex items-start space-x-3 rtl:space-x-reverse">
                    <div className="bg-[#CDEB44] p-1 rounded-full mt-1">
                      <Check className="w-4 h-4 text-[#0B162C]" />
                    </div>
                    <p className="text-gray-700">{point}</p>
                  </div>
                )
              )}
            </div>

            <button className="bg-[#1A4F9C] text-white px-8 py-4 mt-8 rounded-lg font-semibold hover:bg-[#153d7a] transition-all shadow-lg">
              {t('introduction.button')}
            </button>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src={abt2}
                alt=""
                className="w-full h-64 lg:h-72 object-cover rounded-2xl shadow-xl"
              />

              <img
                src={abt1}
                alt=""
                className="w-full h-64 lg:h-72 object-cover rounded-2xl shadow-xl"
              />

              {/* YEARS */}
              <div className="bg-[#0B162C] text-white p-6 rounded-2xl shadow-xl flex flex-col justify-center">
                <div className="text-4xl font-bold text-[#CDEB44] mb-2">
                  {years}+
                </div>
                <p className="text-sm">
                  {t('introduction.years')}
                </p>
              </div>

              {/* CLIENTS */}
              <div className="bg-[#CDEB44] text-[#0B162C] p-6 rounded-2xl shadow-xl flex flex-col justify-center">
                <div className="text-4xl font-bold mb-2">
                  {clients}%
                </div>
                <p className="text-sm">
                  {t('introduction.clients')}
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
