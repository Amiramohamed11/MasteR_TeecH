import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../i18n';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('home');
  const [focusedIndex, setFocusedIndex] = useState(-1);
const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const links = [
    'home',
    'about',
    'services',
    'sectors',
    'Partners',
    'projects',
    'gallery',
    'contact',
  ];

  /* منع السكرول عند فتح الموبايل */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    if (!isOpen) setFocusedIndex(-1);
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  /* تحديد القسم النشط */
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

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    return () => window.removeEventListener('scroll', updateActive);
  }, [links]);

  /* إغلاق القائمة عند تغيير اللغة */
  useEffect(() => {
    setIsOpen(false);
  }, [i18n.language]);

  /* دعم لوحة المفاتيح للموبايل */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          setIsOpen(false);
          menuButtonRef.current?.focus();
          break;

        case 'ArrowDown':
          e.preventDefault();
          setFocusedIndex((prev) => {
            const next = prev < links.length - 1 ? prev + 1 : 0;
            menuItemsRef.current[next]?.focus();
            return next;
          });
          break;

        case 'ArrowUp':
          e.preventDefault();
          setFocusedIndex((prev) => {
            const next = prev > 0 ? prev - 1 : links.length - 1;
            menuItemsRef.current[next]?.focus();
            return next;
          });
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      setTimeout(() => {
        menuItemsRef.current[0]?.focus();
        setFocusedIndex(0);
      }, 100);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, links.length]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B162C]/95 backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[4.5rem] md:h-20">

          {/* Logo */}
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white whitespace-nowrap">
            Muscat-
            <span className="text-[#CDEB44]">techno</span>
          </h1>

          {/* Desktop & Tablet */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4 xl:gap-6">

            {/* Links */}
            <nav className="flex items-center gap-1 md:gap-1.5 lg:gap-3 xl:gap-4">
              {links.map((key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className={`
                    relative whitespace-nowrap rounded-md transition-all duration-300
                    text-xs md:text-[11px] lg:text-sm
                    px-2 md:px-1.5 lg:px-3 xl:px-4
                    py-2
                    ${
                      activeSection === key
                        ? 'text-[#CDEB44] font-semibold'
                        : 'text-white hover:text-[#CDEB44]/80'
                    }
                  `}
                >
                  {t(key)}
                  {activeSection === key && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#CDEB44] rounded-full" />
                  )}
                </a>
              ))}
            </nav>

            {/* Language + Phone */}
            <div className="flex items-center gap-2 lg:gap-3">

              {/* Language */}
              <div className="flex items-center bg-white/10 rounded-full p-1">
                {['ar', 'en'].map((code) => (
                  <button
                    key={code}
                    onClick={() => i18n.changeLanguage(code)}
                    className={`
                      rounded-full flex items-center justify-center font-semibold transition-all
                      w-8 h-8 md:w-8 md:h-8 lg:w-10 lg:h-10
                      text-xs md:text-xs lg:text-sm
                      ${
                        i18n.language === code
                          ? 'bg-[#CDEB44] text-[#0B162C]'
                          : 'text-white opacity-70 hover:opacity-100'
                      }
                    `}
                  >
                    {code.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Phone */}
              <a
                href="tel:+96877322208"
                className="
                  flex items-center justify-center rounded-full transition-all shadow-md
                  w-8 h-8 md:w-8 md:h-8 lg:w-10 lg:h-10
                  bg-[#CDEB44] text-[#0B162C] hover:bg-[#b8d639]
                "
              >
                <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>

            </div>
          </div>

          {/* Mobile Button */}
          <button
            ref={menuButtonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-md hover:bg-white/10"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden fixed left-0 right-0 bg-[#0B162C] border-t border-white/10
          transition-all duration-300 overflow-hidden
          ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
        `}
        style={{ top: '4rem' }}
      >
        <nav
          className="flex flex-col gap-2 p-4"
          role="menu"
          aria-label="Mobile navigation"
        >
          {links.map((key, index) => (
            <a
              key={key}
              ref={(el) => {menuItemsRef.current[index] = el;}} 
               href={`#${key}`}
              role="menuitem"
              tabIndex={isOpen ? 0 : -1}
              className={`
                text-center py-3 rounded-lg transition
                focus:outline-none focus:ring-2 focus:ring-[#CDEB44]
                ${
                  activeSection === key
                    ? 'text-[#CDEB44] bg-[#CDEB44]/10 font-semibold'
                    : 'text-white hover:text-[#CDEB44]'
                }
              `}
              onClick={() => {
                setIsOpen(false);
                setFocusedIndex(-1);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsOpen(false);
                  document
                    .getElementById(key)
                    ?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t(key)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}