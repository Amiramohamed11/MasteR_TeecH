import { Shield, Bell, Camera } from 'lucide-react';
import header1 from '../assets/images/header1.jpeg'
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={header1}
          alt="CCTV Security"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B162C]/95 via-[#0B162C]/80 to-[#0B162C]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
        <span className="text-2xl   font-bold text-white mb-6 leading-tight">
Welcome to Master Tech
          </span>
          <h1 className="text-5xl mt-8 md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
Trusted Technology
Sira Approved
          </h1>
        

        
          <div className="flex flex-wrap gap-4 pt-8">
            <button className="bg-[#CDEB44] text-[#0B162C] px-8 py-4 rounded-lg font-semibold hover:bg-[#b8d639] transition-all shadow-lg hover:shadow-xl">
Enquire Now            </button>
            <button className="bg-white text-[#0B162C] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
              More About Us
            </button>
          </div>
        </div>
      </div>

      
    </section>
  );
}
