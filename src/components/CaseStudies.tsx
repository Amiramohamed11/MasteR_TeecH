import { ArrowRight } from 'lucide-react';

export function CaseStudies() {
const caseStudies = [
  {
    title: 'Mild Sound Systems Installation in Dubai',
    category: 'Audio & AV',
    description:
      'Professional sound system installations can completely transform your lifestyle, delivering crisp, balanced, and immersive audio experiences for homes and businesses.',
    image:
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1600&q=90',
    date: '26 Nov 2025'
  },
  {
    title: 'Office Turnkey Solutions – Smart Office Setup',
    category: 'Smart Office',
    description:
      'Turnkey office solutions combine design, technology integration, and smart systems to create productive and modern workspaces tailored to business needs.',
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=90',
    date: '26 Nov 2025'
  },
  {
    title: 'Top CCTV Companies in Dubai',
    category: 'CCTV & Security',
    description:
      'Choosing the right CCTV provider is critical for property protection. Advanced surveillance solutions ensure safety, compliance, and peace of mind.',
    image:
      'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1600&q=90',
    date: 'November 2025'
  },
  {
    title: 'The Journey of MasterTech',
    category: 'Company Story',
    description:
      'This blog post features excerpts from Abdul Ansar’s interview on ‘The Journey of MasterTech,’ exclusively published in Business Magazine UAE.',
    image:
      'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1600&q=90',
    date: 'December 2025'
  }
];


  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#CDEB44]/10 text-[#0B162C] px-4 py-2 rounded-full mb-6">
            <span className="font-semibold">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B162C] mb-4">
            Explore Our Case Studies
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real-world projects showcasing our expertise in security, automation, and smart solutions
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#CDEB44] text-[#0B162C] px-3 py-1 rounded-full text-xs font-semibold">
                    {study.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">{study.date}</p>
                <h3 className="text-lg font-bold text-[#0B162C] mb-3 leading-snug">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-5 text-sm leading-relaxed line-clamp-3">
                  {study.description}
                </p>
                <button className="inline-flex items-center gap-2 text-[#1A4F9C] font-semibold hover:text-[#0B162C] transition-colors">
                  <span>Explore More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-14">
          <button className="bg-[#1A4F9C] text-white px-12 py-4 rounded-lg font-semibold hover:bg-[#153d7a] transition-all shadow-xl">
            View All Case Studies
          </button>
        </div>

      </div>
    </section>
  );
}
