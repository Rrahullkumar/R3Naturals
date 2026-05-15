import React, { useState, useEffect, useRef } from 'react';
import img1 from '../../../imports/Home/12d08bc73d7e32905e876d1befcef550581e2a13.png';
import img2 from '../../../imports/Home/ec8270be4b2fe41a84ea478800145e5118dcc2c0.png';

const services = [
  {
    id: '01',
    title: 'Aromatherapy',
    description: 'Immerse yourself in the healing essence of nature. Our aromatherapy treatments use premium essential oils to balance your mood, relieve stress, and promote deep relaxation.',
    image: img1,
  },
  {
    id: '02',
    title: 'Massage',
    description: 'Release tension and soothe aching muscles with our expert massage therapies. Tailored to your needs, our treatments restore harmony to your body and mind.',
    image: img2,
  },
  {
    id: '03',
    title: 'Facials',
    description: 'Rejuvenate your skin with our customized facial treatments. We use nourishing products to cleanse, hydrate, and restore your natural, radiant glow.',
    image: img1, // Reusing image as placeholder
  },
  {
    id: '04',
    title: 'Body Treatments',
    description: 'Pamper yourself from head to toe. Our body treatments exfoliate, detoxify, and nourish your skin, leaving you feeling completely renewed and refreshed.',
    image: img2, // Reusing image as placeholder
  }
];

export default function SpaServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play logic with manual control
  useEffect(() => {
    if (!isAutoplay || isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    
    timerRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length);
    }, 5000);
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoplay, isHovered]);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoplay(false);
    // Resume autoplay after 10 seconds of user inactivity
    if (timerRef.current) clearInterval(timerRef.current);
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  return (
    <div 
      id="spa-services-section" 
      className="relative w-full mx-auto px-4 sm:px-6 lg:px-[90px] py-12 md:py-20 lg:py-[180px] bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24">
          {/* Left Side - Title & Tabs */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-5xl md:text-[65px] font-['Melodrama:Regular',sans-serif] uppercase tracking-[0.5px] text-black mb-8 sm:mb-10 lg:mb-12 leading-tight">
              Spa Services
            </h2>
            
            {/* Service Tabs */}
            <div className="space-y-0">
              {services.map((service, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={service.id}
                    onClick={() => handleTabClick(index)}
                    className={`w-full flex flex-col cursor-pointer transition-all duration-300 border-b border-[#e6e6dc] last:border-0 overflow-hidden text-left focus-visible:outline-2 outline-offset-2 outline-black/20 py-4 sm:py-6 ${
                      isActive ? 'py-6 sm:py-8' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="text-sm sm:text-base text-black/50 font-['Jost:Regular',sans-serif] whitespace-nowrap">
                        {service.id}/
                      </span>
                      <h3 className={`text-xl sm:text-2xl md:text-[32px] font-['Melodrama:Regular',sans-serif] tracking-[0.5px] transition-all duration-300 ${
                        isActive ? 'text-black' : 'text-black/60'
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                    
                    {/* Expandable Description */}
                    <div 
                      className={`grid transition-all duration-500 ease-in-out ${
                        isActive ? 'grid-rows-[1fr] opacity-100 mt-4 sm:mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm sm:text-base lg:text-lg text-[#666] font-['Jost:Regular',sans-serif] leading-relaxed pl-0 sm:pl-12 lg:pl-14 max-w-full sm:max-w-lg mb-4 sm:mb-6">
                          {service.description}
                        </p>
                        
                        {/* Mobile Image */}
                        <div className="block lg:hidden mt-4 sm:mt-6 pl-0 sm:pl-12">
                          <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full h-40 sm:h-48 md:h-64 object-cover rounded-xl md:rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Right Side - Image Carousel (Desktop Only) */}
          <div className="hidden lg:flex flex-col justify-center">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] lg:h-[800px] overflow-hidden rounded-tl-[40px] md:rounded-tl-[50px] lg:rounded-tl-[60px] rounded-br-[40px] md:rounded-br-[50px] lg:rounded-br-[60px] shadow-lg">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="absolute inset-0"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                      index === activeIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
              ))}

              {/* Service Name Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 md:p-8 z-10 transition-opacity duration-300">
                <p className="text-white text-lg md:text-xl font-['Melodrama:Regular',sans-serif] uppercase tracking-[0.5px]">
                  {services[activeIndex].title}
                </p>
              </div>

              {/* Navigation Dots */}
              <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 flex gap-2 z-20">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 focus-visible:outline-2 outline-offset-2 outline-white/50 ${
                      index === activeIndex ? 'bg-white w-4 md:w-6' : 'bg-white/50 hover:bg-white'
                    }`}
                    aria-label={`View ${services[index].title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
