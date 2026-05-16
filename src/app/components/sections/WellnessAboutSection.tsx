import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface WellnessExpertiseItem {
  icon?: string;
  title: string;
  description: string;
}

const expertiseItems: WellnessExpertiseItem[] = [
  {
    title: 'Holistic Skincare Treatments',
    description: 'Our comprehensive approach to skincare combines ancient wisdom with modern technology for radiant, healthy skin.',
  },
  {
    title: 'Aromatherapy & Essential Oils',
    description: 'Experience the transformative power of pure essential oils carefully selected to enhance your wellness journey.',
  },
  {
    title: 'Wellness Rituals for Mind & Body',
    description: 'Personalized rituals designed to harmonize your mental, emotional, and physical well-being.',
  },
];

interface WellnessAboutProps {
  heading?: string;
  subheading?: string;
  description?: string;
  imageSrc?: string;
  cta?: string;
}

export default function WellnessAboutSection({
  heading = 'Where Wellness Meets Serenity',
  subheading = 'To Create Your Escape',
  description = 'At Serava Spa, we believe true beauty begins with balance — a harmony of body, mind, and spirit. Nestled in the heart of New York, our serene sanctuary offers bespoke treatments crafted to renew your skin, calm your senses, and restore your natural glow. Each visit is an invitation to unwind, reconnect, and rediscover your inner radiance.',
  imageSrc = 'https://via.placeholder.com/500x400',
  cta = 'Discover Our Story',
}: WellnessAboutProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = itemsRef.current?.querySelectorAll('[data-expertise-item]');
      if (items && items.length > 0) {
        gsap.from(items, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
          y: 40,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#fbf2eb] py-12 md:py-20 lg:py-36 px-4 sm:px-6 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h2 className="reveal-text text-3xl sm:text-4xl md:text-5xl font-['Melodrama:Regular',sans-serif] uppercase text-black mb-4 tracking-[0.5px] leading-tight">
                {heading}
              </h2>
              <h3 className="reveal-text text-2xl sm:text-3xl md:text-4xl font-['Melodrama:Regular',sans-serif] uppercase text-black tracking-[0.5px]">
                {subheading}
              </h3>
            </div>

            <p className="text-base sm:text-lg text-[#666] font-['Jost:Regular',sans-serif] leading-relaxed max-w-xl">
              {description}
            </p>

            <button className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-black text-black font-['Jost:Regular',sans-serif] text-sm uppercase tracking-[0.5px] hover:bg-black hover:text-white transition-all duration-300 rounded focus-visible:outline-2 outline-offset-2 outline-black w-fit">
              {cta}
            </button>
          </div>

          {/* Right - Expertise List */}
          <div
            ref={itemsRef}
            className="space-y-4 sm:space-y-6 lg:space-y-8"
          >
            <h3 className="text-xl sm:text-2xl font-['Melodrama:Regular',sans-serif] uppercase text-black mb-6 lg:mb-8 tracking-[0.5px]">
              Our Wellness Expertise
            </h3>

            {expertiseItems.map((item, index) => (
              <div
                key={index}
                data-expertise-item
                className="group flex gap-4 sm:gap-6 p-4 sm:p-6 rounded-lg border border-transparent hover:border-[#e6e6dc] hover:bg-white transition-all duration-300 cursor-pointer"
              >
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center border-2 border-[#de3c3e] group-hover:bg-[#de3c3e]">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#de3c3e] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-base sm:text-lg font-['Jost:Regular',sans-serif] font-semibold text-black mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm sm:text-base text-[#666] font-['Jost:Regular',sans-serif] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
