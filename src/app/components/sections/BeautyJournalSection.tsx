import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface BeautyItem {
  id: string;
  title: string;
  description: string;
  label: string;
  color?: string;
}

const beautyItems: BeautyItem[] = [
  {
    id: '01',
    title: 'RELAX',
    label: 'RELAX RELAX RELAX RELAX',
    description: 'Allow Your Body And Mind To Fully Release Tension',
    color: 'from-purple-500/10',
  },
  {
    id: '02',
    title: 'REFRESH',
    label: 'REFRESH',
    description: 'Revive Your Senses With Soothing Rituals For Balance.',
    color: 'from-blue-500/10',
  },
  {
    id: '03',
    title: 'RENEW',
    label: 'RENEW',
    description: 'Restore Balance And Reveal Your Natural Radiance.',
    color: 'from-green-500/10',
  },
];

export default function BeautyJournalSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile || !containerRef.current || !scrollContainerRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the section and create horizontal scroll
      gsap.to(scrollContainerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom center',
          pin: containerRef.current,
          scrub: 1,
          markers: false, // Set to true for debugging
          onUpdate: (self) => {
            // Optional: Add any custom animation logic here
          }
        },
        x: -200, // Adjust based on content width
        duration: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  if (isMobile) {
    // Mobile stacked layout
    return (
      <section ref={containerRef} className="w-full bg-gradient-to-br from-white to-[#fbf2eb] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-['Melodrama:Regular',sans-serif] uppercase text-black mb-8 md:mb-12 tracking-[0.5px]">
            Our Beauty & Wellness Journey
          </h2>
          
          <div className="space-y-6 md:space-y-8">
            {beautyItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-lg p-6 md:p-8 border border-[#e6e6dc] hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl md:text-4xl font-['Melodrama:Regular',sans-serif] text-[#de3c3e]/30">
                    {item.id}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-['Melodrama:Regular',sans-serif] uppercase text-black tracking-[0.5px]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#666] font-['Jost:Regular',sans-serif] mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop horizontal scroll layout
  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen bg-gradient-to-br from-white to-[#fbf2eb] overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div 
          ref={scrollContainerRef}
          className="flex h-full w-max"
        >
          {/* Title Section */}
          <div className="w-screen h-screen flex items-center justify-center flex-shrink-0 px-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-['Melodrama:Regular',sans-serif] uppercase text-black mb-8 tracking-[1px] leading-tight">
                Beauty &<br />Wellness<br />Journey
              </h2>
              <p className="text-lg text-[#666] font-['Jost:Regular',sans-serif] leading-relaxed max-w-xl">
                Discover our holistic approach to beauty and wellness through a transformative experience that balances body, mind, and spirit.
              </p>
            </div>
          </div>

          {/* Content Items */}
          {beautyItems.map((item, index) => (
            <div 
              key={item.id}
              className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-12"
            >
              <div className="max-w-3xl w-full">
                <div className="grid grid-cols-2 gap-8 lg:gap-12">
                  {/* Left: Large Number */}
                  <div className="flex items-center justify-center lg:justify-start">
                    <span className="text-[150px] lg:text-[200px] font-['Melodrama:Regular',sans-serif] text-[#de3c3e]/20 leading-none">
                      {item.id}
                    </span>
                  </div>

                  {/* Right: Content */}
                  <div className="flex flex-col justify-center">
                    <span className="text-xs lg:text-sm uppercase text-[#de3c3e] font-['Jost:Regular',sans-serif] tracking-widest mb-4">
                      {item.label}
                    </span>
                    <h3 className="text-4xl lg:text-5xl font-['Melodrama:Regular',sans-serif] uppercase text-black mb-6 tracking-[0.5px]">
                      {item.title}
                    </h3>
                    <p className="text-base lg:text-lg text-[#666] font-['Jost:Regular',sans-serif] leading-relaxed max-w-lg">
                      {item.description}
                    </p>

                    {/* CTA Button */}
                    <button 
                      className="mt-8 inline-block px-8 py-3 border-2 border-[#de3c3e] text-[#de3c3e] font-['Jost:Regular',sans-serif] text-sm uppercase tracking-[0.5px] hover:bg-[#de3c3e] hover:text-white transition-all duration-300 rounded focus-visible:outline-2 outline-offset-2 outline-[#de3c3e]"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator (Desktop) */}
      <div className="absolute bottom-8 left-8 z-20 hidden lg:block">
        <div className="flex items-center gap-3 text-[#666] font-['Jost:Regular',sans-serif] text-sm">
          <span>Scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
