import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../i18n';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('home');

  const links = ['home', 'about', 'services', 'sectors', 'projects', 'gallery', 'contact'];

  // منع السكرول عند فتح الموبايل منيو
useEffect(() => {
  document.body.style.overflow = isOpen ? 'hidden' : 'auto';

  // الحل هنا: إضافة الأقواس المتعرجة
  return () => {
    document.body.style.overflow = 'auto';
  };
}, [isOpen]);
  // مراقبة القسم النشط
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    links.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B162C]/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <h1 className="text-2xl font-bold text-white">Muscat-
            <span className="text-[#CDEB44]">techno</span>
          </h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            
            {/* Links */}
            <nav className="flex items-center gap-4">
              {links.map((key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className={`text-white text-sm px-4 py-2 rounded-md transition-all
                    ${activeSection === key ? 'text-[#CDEB44]' : 'hover:text-[#CDEB44]/80'}
                  `}
                >
                  {t(key)}
                </a>
              ))}
            </nav>

            {/* Language + Phone */}
            <div className="flex items-center gap-3">
              
              {/* Language Switch */}
              <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full p-1">
                {['ar', 'en'].map((code) => {
                  const active = i18n.language === code;
                  return (
                    <button
                      key={code}
                      onClick={() => i18n.changeLanguage(code)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300
                        ${active ? 'bg-[#CDEB44] text-[#0B162C] shadow-md' : 'text-white opacity-70 hover:opacity-100'}
                      `}
                    >
                      {code.toUpperCase()}
                    </button>
                  );
                })}
              </div>

              {/* Phone Icon */}
              <a
                href="tel:+96877322208"
                className="flex items-center justify-center w-10 h-10 bg-[#CDEB44] rounded-full text-[#0B162C] hover:bg-[#b8d639] transition-all shadow-md"
                title="+96877322208"
              >
                <Phone className="w-5 h-5" />
              </a>

            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#0B162C]/95 border-t border-white/10
          transition-all duration-300
          ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
        `}
      >
        <nav className="flex flex-col items-center gap-6 py-6">
          {links.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className={`text-white text-lg px-4 py-2 rounded-md transition-all
                ${activeSection === key ? 'text-[#CDEB44]' : 'hover:text-[#CDEB44]/80'}
              `}
              onClick={() => setIsOpen(false)}
            >
              {t(key)}
            </a>
          ))}

          {/* Mobile Language + Phone */}
          <div className="flex items-center gap-3 mt-4">
            <div className="flex bg-white/10 rounded-full p-1">
              {['ar', 'en'].map((code) => (
                <button
                  key={code}
                  onClick={() => i18n.changeLanguage(code)}
                  className={`w-10 h-10 rounded-full font-semibold
                    ${i18n.language === code ? 'bg-[#CDEB44] text-[#0B162C]' : 'text-white opacity-70'}
                  `}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>

          <a
  href="tel:+96877322208"
  className="flex items-center justify-center w-10 h-10 bg-[#CDEB44] rounded-full text-[#0B162C] hover:bg-[#b8d639] transition-all shadow-md"
  title="+96877322208"
>
  <Phone className="w-5 h-5" />
</a>

          </div>
        </nav>
      </div>
    </header>
  );
}
