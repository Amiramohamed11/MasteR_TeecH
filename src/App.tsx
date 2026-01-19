import { useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import Header  from './components/Header';
import { IntroductionSection } from './components/IntroductionSection';
import { ServicesHighlights } from './components/ServicesHighlights';
import { IndustrySectors } from './components/IndustrySectors';
import { SolutionsSection } from './components/SolutionsSection';
import { ProcessSection } from './components/ProcessSection';
import { CaseStudies } from './components/CaseStudies';
import { QuoteSection } from './components/QuoteSection';
import { Footer } from './components/Footer';
import { PartnersSlider } from './components/PartnersSlider';
import { useTranslation } from 'react-i18next';
import './i18n'; // مهم جدًا قبل أي استخدام لـ useTranslation
import './index.css'
import './app.css'

import { FaWhatsapp } from 'react-icons/fa'; // لو مستخدمة react-icons
import { Section } from 'lucide-react';

export default function App() {
  const { i18n } = useTranslation();

  // ضبط اتجاه الصفحة حسب اللغة
  useEffect(() => {
    document.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <div className="min-h-screen font-sans">
<Header/>
        {/* في كل كومبوننت لازم النصوص تستخدم t('key') */}
         <section id="home">
        <HeroSection />
        </section>
          <section id="about">
        <IntroductionSection />
      </section>
      <section id="services">
        <ServicesHighlights />
      </section>

<section id="sectors">
        <IndustrySectors />
      </section>


  {/* سليدر الشعارات */}
    
<section id="Partners">

        <PartnersSlider/>

      </section>

      <section id="projects">
        <SolutionsSection />
      </section>
      <section id="gallery">
        <ProcessSection />
      </section>

              <CaseStudies />

       <section id="contact">
  <Footer/>
      </section>
      

       <section id="Contact">
      </section>
    
      


{/* أيقونة WhatsApp ثابتة */}
      <a
        href="#footer"
        className="fixed bottom-5 right-5 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
        title="Go to Contact Section"
      >
        <FaWhatsapp className="w-8 h-8" />
      </a>



        {/* <QuoteSection /> */}
    </div>
  );
}
