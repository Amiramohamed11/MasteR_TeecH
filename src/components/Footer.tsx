import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0B162C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Muscat-
              <span className="text-[#CDEB44]">techno</span>
            </h3>
            <p className="text-gray-400 mb-6">
              {t('footer.aboutText')}
            </p>

            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="bg-white/10 p-2 rounded-lg hover:bg-[#CDEB44] hover:text-[#0B162C] transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#CDEB44]">
              {t('footer.services.title')}
            </h4>
          <ul className="space-y-3">
  {/* قمت بإضافة قوس قبل t وقوس بعد true لإغلاق عملية الـ Casting بشكل صحيح */}
  {(t('footer.services.items', { returnObjects: true }) as any[]).map((item, i) => (
    <li key={i}>
      <a href="#" className="text-gray-400 hover:text-[#CDEB44] transition-colors">
        {item}
      </a>
    </li>
  ))}
</ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#CDEB44]">
              {t('footer.support.title')}
            </h4>
          <ul className="space-y-3">
  {/* أضفنا قوساً في البداية قبل حرف الـ t وقوساً للإغلاق بعد كلمة any[] */}
  {(t('footer.support.items', { returnObjects: true }) as any[]).map((item, i) => (
    <li key={i}>
      <a href="#" className="text-gray-400 hover:text-[#CDEB44] transition-colors">
        {item}
      </a>
    </li>
  ))}
</ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#CDEB44]">
              {t('footer.contact.title')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#CDEB44]" />
                <span className="text-gray-400 whitespace-pre-line">
                  {t('footer.contact.address')}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#CDEB44]" />
                <span className="text-gray-400">
                  {t('footer.contact.phone')}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#CDEB44]" />
                <span className="text-gray-400">
                  {t('footer.contact.email')}
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            {t('footer.copyright')}
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#CDEB44] text-sm">
              {t('footer.links.privacy')}
            </a>
            <a href="#" className="text-gray-400 hover:text-[#CDEB44] text-sm">
              {t('footer.links.terms')}
            </a>
            <a href="#" className="text-gray-400 hover:text-[#CDEB44] text-sm">
              {t('footer.links.cookies')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
