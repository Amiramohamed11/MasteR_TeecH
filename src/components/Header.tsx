import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../i18n';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('home');
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const links = ['home', 'about', 'services', 'sectors', 'projects', 'gallery', 'contact'];

  // منع السكرول عند فتح الموبايل منيو
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    if (!isOpen) {
      setFocusedIndex(-1);
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // مراقبة القسم النشط - محسّن
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let timeoutId: NodeJS.Timeout | null = null;
    let handleScroll: (() => void) | null = null;
    let sections: (HTMLElement | null)[] = [];

    // دالة لتحديد القسم النشط
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 150; // offset للـ header
      
      // البحث من الأسفل للأعلى للعثور على القسم الحالي
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          // إذا كان القسم مرئي في viewport
          if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
            return;
          }
        }
      }
      
      // إذا لم نجد قسم، استخدم الأول
      if (sections[0]) {
        setActiveSection(sections[0].id);
      }
    };

    const initSections = () => {
      sections = [];
      
      // جمع جميع الأقسام
      links.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          sections.push(section);
        }
      });

      if (sections.length === 0) {
        // إعادة المحاولة بعد 100ms إذا لم تكن الأقسام جاهزة
        timeoutId = setTimeout(initSections, 100);
        return;
      }

      // IntersectionObserver للكشف الدقيق
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // تحديث القسم النشط عند ظهوره
              const rect = entry.boundingClientRect;
              if (rect.top <= 150 && rect.bottom >= 150) {
                setActiveSection(entry.target.id);
              }
            }
          });
        },
        { 
          threshold: [0, 0.1, 0.3, 0.5],
          rootMargin: '-100px 0px -50% 0px'
        }
      );

      // مراقبة جميع الأقسام
      sections.forEach((section) => {
        if (section) observer?.observe(section);
      });

      // تحديث عند التمرير
      handleScroll = () => {
        updateActiveSection();
      };

      // تحديث فوري عند التحميل
      updateActiveSection();
      window.addEventListener('scroll', handleScroll, { passive: true });
    };

    // بدء التهيئة
    initSections();
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (observer) observer.disconnect();
      if (handleScroll) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [links]);

  // إغلاق القائمة عند تغيير اللغة
  useEffect(() => {
    setIsOpen(false);
  }, [i18n.language]);

  // معالجة أحداث لوحة المفاتيح
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) {
        // إذا كانت القائمة مغلقة، افتحها عند الضغط على Enter أو Space على زر القائمة
        if (document.activeElement === menuButtonRef.current) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(true);
            setFocusedIndex(0);
          }
        }
        return;
      }

      // إذا كانت القائمة مفتوحة
      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          setIsOpen(false);
          setFocusedIndex(-1);
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

        case 'Home':
          e.preventDefault();
          setFocusedIndex(0);
          menuItemsRef.current[0]?.focus();
          break;

        case 'End':
          e.preventDefault();
          const lastIndex = links.length - 1;
          setFocusedIndex(lastIndex);
          menuItemsRef.current[lastIndex]?.focus();
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // التركيز على العنصر الأول عند فتح القائمة
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B162C]/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[4.5rem] md:h-20">
          
          {/* Logo - Responsive */}
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white whitespace-nowrap">
            Muscat-
            <span className="text-[#CDEB44]">techno</span>
          </h1>

          {/* Desktop & Tablet Nav - يظهر من md فما فوق */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 xl:gap-6">
            
            {/* Links */}
            <nav className="flex items-center gap-1 md:gap-2 lg:gap-3 xl:gap-4">
              {links.map((key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className={`text-xs md:text-xs lg:text-sm px-2 md:px-2 lg:px-3 xl:px-4 py-2 rounded-md transition-all duration-300 whitespace-nowrap relative
                    ${activeSection === key 
                      ? 'text-[#CDEB44] font-semibold' 
                      : 'text-white hover:text-[#CDEB44]/80'
                    }
                  `}
                >
                  {t(key)}
                  {/* خط تحت الرابط النشط */}
                  {activeSection === key && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#CDEB44] rounded-full"></span>
                  )}
                </a>
              ))}
            </nav>

            {/* Language + Phone */}
            <div className="flex items-center gap-2 lg:gap-3">
              
              {/* Language Switch */}
              <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full p-1">
                {['ar', 'en'].map((code) => {
                  const active = i18n.language === code;
                  return (
                    <button
                      key={code}
                      onClick={() => i18n.changeLanguage(code)}
                      className={`w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-xs md:text-xs lg:text-sm font-semibold transition-all duration-300
                        ${active ? 'bg-[#CDEB44] text-[#0B162C] shadow-md' : 'text-white opacity-70 hover:opacity-100'}
                      `}
                      aria-label={`Switch to ${code === 'ar' ? 'Arabic' : 'English'}`}
                    >
                      {code.toUpperCase()}
                    </button>
                  );
                })}
              </div>

              {/* Phone Icon */}
              <a
                href="tel:+96877322208"
                className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-[#CDEB44] rounded-full text-[#0B162C] hover:bg-[#b8d639] transition-all shadow-md"
                title="+96877322208"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5" />
              </a>

            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            ref={menuButtonRef}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#CDEB44] focus:ring-offset-2 focus:ring-offset-[#0B162C]" 
            onClick={() => {
              setIsOpen(!isOpen);
              if (!isOpen) {
                setFocusedIndex(0);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsOpen(true);
                setFocusedIndex(0);
              }
            }}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - محسّن */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-[#0B162C] border-t border-white/10 backdrop-blur-md shadow-lg z-40
          transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen 
            ? 'max-h-[calc(100vh-4rem)] opacity-100 translate-y-0 visible' 
            : 'max-h-0 opacity-0 -translate-y-4 invisible pointer-events-none'
          }
        `}
        style={{ top: '4rem' }}
      >
        <nav 
          className="flex flex-col items-stretch px-4 py-4 gap-2"
          role="menu"
          aria-label="Main navigation"
        >
          {links.map((key, index) => (
            <a
              key={key}
              ref={(el) => {
                menuItemsRef.current[index] = el;
              }}
              href={`#${key}`}
              role="menuitem"
              tabIndex={isOpen ? 0 : -1}
              className={`text-base px-4 py-3 rounded-lg transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-[#CDEB44] focus:ring-offset-2 focus:ring-offset-[#0B162C]
                ${activeSection === key 
                  ? 'text-[#CDEB44] bg-[#CDEB44]/15 font-semibold border-l-4 border-[#CDEB44]' 
                  : 'text-white hover:text-[#CDEB44] hover:bg-white/5 active:bg-white/10'
                }
                ${focusedIndex === index ? 'ring-2 ring-[#CDEB44] ring-offset-2 ring-offset-[#0B162C]' : ''}
              `}
              onClick={() => {
                setIsOpen(false);
                setFocusedIndex(-1);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsOpen(false);
                  setFocusedIndex(-1);
                  // الانتقال إلى القسم
                  const section = document.getElementById(key);
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
            >
              {t(key)}
            </a>
          ))}

          {/* Mobile Language + Phone */}
          <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-white/10">
            <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full p-1">
              {['ar', 'en'].map((code) => (
                <button
                  key={code}
                  onClick={() => i18n.changeLanguage(code)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300
                    ${i18n.language === code 
                      ? 'bg-[#CDEB44] text-[#0B162C] shadow-md' 
                      : 'text-white opacity-70 hover:opacity-100 active:opacity-100'
                    }
                  `}
                  aria-label={`Switch to ${code === 'ar' ? 'Arabic' : 'English'}`}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>

            <a
              href="tel:+96877322208"
              className="flex items-center justify-center w-10 h-10 bg-[#CDEB44] rounded-full text-[#0B162C] hover:bg-[#b8d639] active:bg-[#a8c629] transition-all shadow-md"
              title="+96877322208"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
