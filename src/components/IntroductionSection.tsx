import { Check } from 'lucide-react';
import abt1 from '../assets/images/abt1.png'
import abt2 from '../assets/images/abt2.png'

export function IntroductionSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-[#CDEB44]/10 text-[#0B162C] px-4 py-2 rounded-full mb-6">
              <span className="font-semibold">About MasterTech</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B162C] mb-12">
Leading Enterprise Communication Solution Provider            </h2>
            
            
            {/* Checkmark List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="bg-[#CDEB44] p-1 rounded-full mt-1">
                  <Check className="w-4 h-4 text-[#0B162C]" />
                </div>
                <p className="text-gray-700">
Comprehensive ELV & Communication Solutions: Specializing in SMATV/IPTV, CCTV, Audio Video Intercom, Access Control, and Gate Barrier Systems since 2005.                  </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-[#CDEB44] p-1 rounded-full mt-1">
                  <Check className="w-4 h-4 text-[#0B162C]" />
                </div>
                <p className="text-gray-700">
Expert Team & Tailored Services: Certified designers, engineers, and installers delivering customized solutions across hospitality, residential, and corporate sectors.                  </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-[#CDEB44] p-1 rounded-full mt-1">
                  <Check className="w-4 h-4 text-[#0B162C]" />
                </div>
                <p className="text-gray-700">
Trusted Across the GCC: Recognized for top-notch consulting, project management, and after-sales support for leading enterprises and institutions.                  </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-[#CDEB44] p-1 rounded-full mt-1">
                  <Check className="w-4 h-4 text-[#0B162C]" />
                </div>
                <p className="text-gray-700">
We are pleased to introduce Master Technovision LLC, an ELV Systems Integrating company established in 2005 and based in Dubai. We specialize in installing all types of SMATV/IPTV Satellite Systems, CCTV, Audio Video Intercom, Access Control/Time Attendance, and Gate Barrier Systems. Whether it is in the...                  </p>
              </div>
            </div>

            <button className="bg-[#1A4F9C] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#153d7a] transition-all shadow-lg">
              Learn More About Us
            </button>
          </div>

        {/* Right Image Collage */}
<div className="relative">
  <div className="grid grid-cols-2 gap-4">
    
    {/* Image 1 */}
    <div>
      <img
        src={abt2}
        alt="Security Technology 1"
        className="w-full h-64 lg:h-72 object-cover rounded-2xl shadow-xl"
      />
    </div>

    {/* Image 2 */}
    <div>
      <img
        src={abt1}
        alt="Security Technology 2"
        className="w-full h-64 lg:h-72 object-cover rounded-2xl shadow-xl"
      />
    </div>

    {/* Stats Card 1 */}
    <div>
      <div className="bg-[#0B162C] text-white p-6 rounded-2xl shadow-xl h-full flex flex-col justify-center">
        <div className="text-4xl font-bold text-[#CDEB44] mb-2">15+</div>
        <p className="text-sm">Years of Excellence</p>
      </div>
    </div>

    {/* Stats Card 2 */}
    <div>
      <div className="bg-[#CDEB44] text-[#0B162C] p-6 rounded-2xl shadow-xl h-full flex flex-col justify-center">
        <div className="text-4xl font-bold mb-2">98%</div>
        <p className="text-sm">Client Satisfaction</p>
      </div>
    </div>

  </div>
</div>

        </div>
      </div>
    </section>
  );
}
