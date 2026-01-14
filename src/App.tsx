import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { IntroductionSection } from './components/IntroductionSection';
import { ServicesHighlights } from './components/ServicesHighlights';
import { IndustrySectors } from './components/IndustrySectors';
import { SolutionsSection } from './components/SolutionsSection';
import { ProcessSection } from './components/ProcessSection';
import { CaseStudies } from './components/CaseStudies';
import { QuoteSection } from './components/QuoteSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <IntroductionSection />
        <ServicesHighlights />
        <IndustrySectors />
        <SolutionsSection />
        <ProcessSection />
        <CaseStudies />
        {/* <QuoteSection /> */}
      </main>
      <Footer />
    </div>
  );
}
