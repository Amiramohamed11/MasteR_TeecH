import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0B162C] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
                            <span className="text-[#CDEB44]">MASTER</span>TECH

            </h3>
            <p className="text-gray-400 mb-6">
              Leading provider of comprehensive security solutions, protecting homes and businesses with cutting-edge technology since 2011.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-[#CDEB44] hover:text-[#0B162C] transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-[#CDEB44] hover:text-[#0B162C] transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-[#CDEB44] hover:text-[#0B162C] transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-[#CDEB44] hover:text-[#0B162C] transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#CDEB44]">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#CDEB44] transition-colors">
                  CCTV Surveillance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#CDEB44] transition-colors">
                  Access Control
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#CDEB44] transition-colors">
                  Intruder Alarms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#CDEB44] transition-colors">
PABX System                 </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#CDEB44] transition-colors">

Time Attendance System                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Help & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#CDEB44]">Help & Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#CDEB44] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#CDEB44] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#CDEB44] transition-colors">
                  Projects 
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#CDEB44] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#CDEB44] transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#CDEB44]">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#CDEB44] mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Security Boulevard<br />
                  Tech City, TC 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#CDEB44] flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-[#CDEB44] transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#CDEB44] flex-shrink-0" />
                <a href="mailto:info@wiseguard.com" className="text-gray-400 hover:text-[#CDEB44] transition-colors">
                  info@wiseguard.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2026 MASTERTECH Security Systems. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#CDEB44] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#CDEB44] text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#CDEB44] text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
