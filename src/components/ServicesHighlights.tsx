import { Camera, Tv, Wifi, Speaker } from 'lucide-react';

export function ServicesHighlights() {
  const services = [
    {
      icon: Camera,
      title: 'Habtoor Grand Resort and SPA Jumeirah Beach, Dubai',
      description: 'Supply and installation of CCTV Cameras, Audio/Video system, SMATV system along with maintenance.'
    },
    {
      icon: Tv,
      title: 'Al Forsan Real Estate Consultant :WS Atkins & Partners Overseas',
      description: 'Supply and Installation of SMATV, RF head System & IF system for Studio Cluster1, 6 Building and Club House + Villa cluster 4,5A & 5B'
    },
    {
      icon: Wifi,
      title: 'Al Futtaim Engineering Company LLC Dubai',
      description: 'Supply, installation and maintenance of CCTV cameras and Dish Antenna system, Audio/video system Accessories.'
    },
    {
      icon: Speaker,
      title: 'HYUNDAI Construction and Engineering Abu-Dhabi',
      description: 'Supply and Installation and commissioning of Truman Receiver, Multi Switch, Dish Antenna at Korean Accommodation.'
    }
  ];

  return (
    <section className="py-24 bg-[#0B162C] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Advanced Security Features
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cutting-edge technology to keep your property safe and secure
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-2 border-[#CDEB44]/30 rounded-xl p-8 hover:bg-[#CDEB44]/5 transition-all group"
            >
              <div className="bg-[#CDEB44]/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#CDEB44] transition-all">
                <service.icon className="w-8 h-8 text-[#CDEB44] group-hover:text-[#0B162C]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Center Button */}
        <div className="text-center">
          <button className="bg-[#CDEB44] text-[#0B162C] px-10 py-4 rounded-lg font-semibold hover:bg-[#b8d639] transition-all shadow-xl inline-flex items-center space-x-2">
            <span>Awards & Milestones</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
