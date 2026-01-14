import { Plus } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import img1 from '../assets/images/abt1.png';
import img2 from '../assets/images/abt2.png';
import img3 from '../assets/images/b3.png';
import img4 from '../assets/images/test1.png';

export function IndustrySectors() {
  const sectors = [
    {
      title: 'Healthcare Buildings',
      description: 'Specialized security solutions for hospitals, clinics, and medical facilities',
      image: img1
    },
    {
      title: 'Commercial Buildings',
      description: 'Comprehensive security systems for offices and corporate environments',
      image: img2
    },
    {
      title: 'Industrial Facilities',
      description: 'Advanced monitoring and access control for factories and warehouses',
      image: img3
    },
    {
      title: 'Residential Complexes',
      description: 'Smart security solutions for apartments and gated communities',
      image: img4
    },
    // يمكن تكرارها إذا أردتي السليدر طويل جداً
    {
      title: 'Healthcare Buildings',
      description: 'Specialized security solutions for hospitals, clinics, and medical facilities',
      image: img1
    },
    {
      title: 'Commercial Buildings',
      description: 'Comprehensive security systems for offices and corporate environments',
      image: img2
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#CDEB44]/10 text-[#0B162C] px-4 py-2 rounded-full mb-6">
            <span className="font-semibold">Industry Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B162C] mb-4">
            We Serve Multiple Industries
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tailored security solutions designed for the unique needs of different sectors
          </p>
        </div>

        {/* Sectors Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {sectors.map((sector, index) => (
            <SwiperSlide key={index}>
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B162C] via-[#0B162C]/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">{sector.title}</h3>
                  <p className="text-gray-300 mb-6">{sector.description}</p>
                  <button className="bg-[#CDEB44] text-[#0B162C] w-12 h-12 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg group-hover:scale-110">
                    <Plus className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
