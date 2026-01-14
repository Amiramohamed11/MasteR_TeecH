import {
  Building2,
  Phone,
  Camera,
  Home,
  ShieldCheck
} from 'lucide-react';

export function SolutionsSection() {
  const solutions = [
    {
      icon: Building2,
      title: 'IT SOLUTIONS',
      benefits: [
        'I.T Consultancy',
        'Cloud Solutions',
        'Hardware & Networking',
        'Structured Cabling',
        'Annual Maintenance Contract',
        'Backup Solutions'
      ]
    },
    {
      icon: Phone,
      title: 'TELECOMMUNICATIONS',
      benefits: [
        'IP PBX Systems',
        'IP Phones',
        'Analog Telephone Systems',
        'Wireless DECT Phones',
        'GSM Gateways',
        'Video Conferencing Systems'
      ]
    },
    {
      icon: Camera,
      title: 'CCTV & SECURITY',
      benefits: [
        'CCTV Surveillance',
        'Access Control Systems',
        'Time & Attendance',
        'Vehicle Tracking',
        'Home Security',
        'Video Intercom Systems'
      ]
    },
    {
      icon: Home,
      title: 'AV & AUTOMATION SYSTEMS',
      benefits: [
        'IPTV',
        'SMATV',
        'AV SOLUTIONS',
        'HOME AUTOMATION',
        'GATE AND PARKING AUTOMATION',
        'OFFICE AUTOMATION'
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B162C] mb-4">
Why Choose Us
          </h2>
        
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
  We deliver integrated IT, security, automation, and communication solutions
  designed to support businesses, homes, and industrial environments.
</p>

        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
  {solutions.map((solution, index) => (
    <div
      key={index}
      className="group bg-white border border-gray-200 rounded-2xl p-8 
                 hover:shadow-2xl hover:-translate-y-2 
                 transition-all duration-300 h-full"
    >
      {/* Icon */}
      <div className="bg-[#CDEB44]/15 w-16 h-16 rounded-xl flex items-center justify-center mb-6 
                      group-hover:bg-[#CDEB44] transition-all">
        <solution.icon className="w-8 h-8 text-[#1A4F9C] group-hover:text-[#0B162C]" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-[#0B162C] mb-2">
        {solution.title}
      </h3>

      {/* Divider */}
      <div className="w-12 h-1 bg-[#CDEB44] rounded-full mb-6"></div>

      {/* Benefits */}
      <ul className="space-y-3">
        {solution.benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-[#CDEB44] mt-1 flex-shrink-0" />
            <span className="text-gray-600 text-sm leading-relaxed">
              {benefit}
            </span>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-[#1A4F9C] text-white px-12 py-4 rounded-lg font-semibold hover:bg-[#153d7a] transition-all shadow-xl">
            Explore All Services
          </button>
        </div>

      </div>
    </section>
  );
}
