export function ProcessSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0B162C] via-[#1A4F9C] to-[#0B162C] relative overflow-hidden">
      {/* Geometric Background Shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border-4 border-[#CDEB44] rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border-4 border-[#CDEB44] transform rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto">
Secure Your Future with Smart Technology Solutions
      </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
At Master Tech, we provide cutting-edge security and automation solutions across the UAE. 
From SIRA-approved CCTV systems to smart home integration, our expert team ensures your property 
is protected using the latest industry standards.  
         </p>
          <div className="flex flex-wrap justify-center gap-4">

            <button className="bg-[#CDEB44] text-[#0B162C] px-8 py-4 rounded-lg font-semibold hover:bg-[#b8d639] transition-all shadow-xl">
              Protect My Home
            </button>
            <button className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all">
Learn More
            </button>
          </div>
        </div>

        {/* System Selector */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-[#CDEB44] text-[#0B162C] px-4 py-2 rounded-full mb-6">
                <span className="font-semibold">Step 1</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">
Advanced CCTV & Security Solutions              </h3>
              <p className="text-gray-300 mb-8">
Full-service security integration including SIRA & MCC compliant systems for residential and commercial projects.              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#CDEB44] rounded-full" />
                  <span className="text-white"> IP & Analog CCTV Systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#CDEB44] rounded-full" />
                  <span className="text-white">Access Control Systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#CDEB44] rounded-full" />
                  <span className="text-white"> Smart Home Automation</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1752262167753-37a0ec83f614?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBjb250cm9sfGVufDF8fHx8MTc2ODM0NjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Security System"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B162C]/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                    <p className="text-white font-semibold">Smart Control Panel</p>
                    <p className="text-gray-300 text-sm">Easy to use interface</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
