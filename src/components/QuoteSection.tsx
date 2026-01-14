import { Building2, Users, Award, Target } from 'lucide-react';
import { useState } from 'react';

export function QuoteSection() {
  const [formData, setFormData] = useState({
    propertyType: 'home',
    systemSize: 'medium',
    email: '',
    phone: '',
    systemsInterest: {
      cctv: false,
      alarm: false,
      access: false,
      fire: false
    }
  });

  const handleCheckboxChange = (system: string) => {
    setFormData({
      ...formData,
      systemsInterest: {
        ...formData.systemsInterest,
        [system]: !formData.systemsInterest[system as keyof typeof formData.systemsInterest]
      }
    });
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
          {/* Left Side - Lime Green */}
          <div className="bg-[#CDEB44] p-12 lg:p-16 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B162C] mb-6">
                Providing Best Security Protocols
              </h2>
              <p className="text-[#333333] text-lg mb-8">
                Our dedicated team of security experts is committed to delivering top-tier protection solutions tailored to your specific needs. With years of experience and cutting-edge technology, we ensure your safety is never compromised.
              </p>
              
              {/* Features List */}
              <div className="space-y-4 mb-12">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#0B162C] p-2 rounded-lg">
                    <Target className="w-5 h-5 text-[#CDEB44]" />
                  </div>
                  <span className="text-[#0B162C] font-medium">Custom Security Assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-[#0B162C] p-2 rounded-lg">
                    <Award className="w-5 h-5 text-[#CDEB44]" />
                  </div>
                  <span className="text-[#0B162C] font-medium">Industry-Leading Technology</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <Building2 className="w-8 h-8 text-[#0B162C]" />
                  <div className="text-4xl font-bold text-[#0B162C]">3,564</div>
                </div>
                <p className="text-[#333333] font-medium">Completed Projects</p>
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <Users className="w-8 h-8 text-[#0B162C]" />
                  <div className="text-4xl font-bold text-[#0B162C]">112</div>
                </div>
                <p className="text-[#333333] font-medium">Qualified Employees</p>
              </div>
            </div>
          </div>

          {/* Right Side - White Form */}
          <div className="bg-white p-12 lg:p-16">
            <h3 className="text-3xl font-bold text-[#0B162C] mb-8">
              Request A Quote
            </h3>
            
            <form className="space-y-6">
              {/* Property Type */}
              <div>
                <label className="block text-[#333333] font-medium mb-3">
                  Property Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, propertyType: 'home'})}
                    className={`p-4 rounded-lg border-2 font-medium transition-all ${
                      formData.propertyType === 'home'
                        ? 'border-[#1A4F9C] bg-[#1A4F9C]/5 text-[#1A4F9C]'
                        : 'border-gray-300 text-gray-600 hover:border-[#1A4F9C]'
                    }`}
                  >
                    Home
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, propertyType: 'business'})}
                    className={`p-4 rounded-lg border-2 font-medium transition-all ${
                      formData.propertyType === 'business'
                        ? 'border-[#1A4F9C] bg-[#1A4F9C]/5 text-[#1A4F9C]'
                        : 'border-gray-300 text-gray-600 hover:border-[#1A4F9C]'
                    }`}
                  >
                    Business
                  </button>
                </div>
              </div>

              {/* System Size */}
              <div>
                <label className="block text-[#333333] font-medium mb-3">
                  System Size
                </label>
                <select
                  value={formData.systemSize}
                  onChange={(e) => setFormData({...formData, systemSize: e.target.value})}
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-[#1A4F9C] focus:outline-none"
                >
                  <option value="small">Small (1-3 cameras)</option>
                  <option value="medium">Medium (4-8 cameras)</option>
                  <option value="large">Large (9+ cameras)</option>
                </select>
              </div>

              {/* Email */}
              <div>
                <label className="block text-[#333333] font-medium mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your.email@example.com"
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-[#1A4F9C] focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[#333333] font-medium mb-3">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+1 (555) 000-0000"
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-[#1A4F9C] focus:outline-none"
                />
              </div>

              {/* Systems of Interest */}
              <div>
                <label className="block text-[#333333] font-medium mb-3">
                  Systems of Interest
                </label>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.systemsInterest.cctv}
                      onChange={() => handleCheckboxChange('cctv')}
                      className="w-5 h-5 text-[#1A4F9C] border-gray-300 rounded focus:ring-[#1A4F9C]"
                    />
                    <span className="text-gray-700">CCTV Surveillance</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.systemsInterest.alarm}
                      onChange={() => handleCheckboxChange('alarm')}
                      className="w-5 h-5 text-[#1A4F9C] border-gray-300 rounded focus:ring-[#1A4F9C]"
                    />
                    <span className="text-gray-700">Intruder Alarm</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.systemsInterest.access}
                      onChange={() => handleCheckboxChange('access')}
                      className="w-5 h-5 text-[#1A4F9C] border-gray-300 rounded focus:ring-[#1A4F9C]"
                    />
                    <span className="text-gray-700">Access Control</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.systemsInterest.fire}
                      onChange={() => handleCheckboxChange('fire')}
                      className="w-5 h-5 text-[#1A4F9C] border-gray-300 rounded focus:ring-[#1A4F9C]"
                    />
                    <span className="text-gray-700">Fire Detection</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#1A4F9C] text-white p-4 rounded-lg font-semibold hover:bg-[#153d7a] transition-all shadow-lg"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
