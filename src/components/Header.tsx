import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../i18n';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('home');
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const links = [
    'home',
    'about',
    'services',
    'sectors',
    'Partners',
    'projects',
    'contact',
  ];

  /* منع السكرول عند فتح المينيو */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  /* تحديد القسم النشط عند Scroll */
  useEffect(() => {
    const sections = links
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const updateActive = () => {
      const scrollY = window.scrollY + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (
          scrollY >= s.offsetTop - 100 &&
          scrollY < s.offsetTop + s.offsetHeight
        ) {
          setActiveSection(s.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', updateActive, { passive: true });
    return () => window.removeEventListener('scroll', updateActive);
  }, []);

  /* Keyboard navigation (Arrow Up / Arrow Down) */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
      e.preventDefault();

      const sections = links
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      const currentIndex = sections.findIndex((s) => s.id === activeSection);

      if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
        sections[currentIndex + 1].scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }

      if (e.key === 'ArrowUp' && currentIndex > 0) {
        sections[currentIndex - 1].scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection]);

  /* إغلاق المنيو عند تغيير اللغة */
  useEffect(() => {
    setIsOpen(false);
  }, [i18n.language]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0B162C]/95 backdrop-blur shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 md:h-20 flex items-center justify-between">

          {/* Logo */}
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-white whitespace-nowrap">
            Muscat-<span className="text-[#CDEB44]">techno</span>
          </h1>

          {/* Navigation (Tablet + Desktop) */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            {links.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                tabIndex={0}
                className={`relative px-3 py-2 text-sm lg:text-base transition
                  focus:outline-none focus:ring-2 focus:ring-[#CDEB44]
                  ${
                    activeSection === key
                      ? 'text-[#CDEB44] font-semibold'
                      : 'text-white hover:text-[#CDEB44]/80'
                  }`}
              >
                {t(key)}
                {activeSection === key && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#CDEB44]" />
                )}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">

            {/* Language */}
            <div className="flex bg-white/10 rounded-full p-1">
              {['ar', 'en'].map((code) => (
                <button
                  key={code}
                  onClick={() => i18n.changeLanguage(code)}
                  className={`w-8 h-8 md:w-9 md:h-9 rounded-full text-xs md:text-sm font-semibold transition
                    ${
                      i18n.language === code
                        ? 'bg-[#CDEB44] text-[#0B162C]'
                        : 'text-white opacity-70 hover:opacity-100'
                    }`}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Phone */}
            <a
              href="tel:+96877322208"
              className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-[#CDEB44] text-[#0B162C] hover:bg-[#b8d639]"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 rounded-md hover:bg-white/10"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 bg-[#0B162C] transition-all duration-300 overflow-hidden
          ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
        `}
        style={{ top: '4rem' }}
      >
        <nav className="flex flex-col gap-2 p-4">
          {links.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className={`py-3 text-center rounded-lg transition
                ${
                  activeSection === key
                    ? 'text-[#CDEB44] bg-[#CDEB44]/10 font-semibold'
                    : 'text-white hover:text-[#CDEB44]'
                }`}
              onClick={() => setIsOpen(false)}
            >
              {t(key)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
