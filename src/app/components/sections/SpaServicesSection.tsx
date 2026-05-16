import { useState, useEffect } from 'react';
import imgSpa1 from '../../../imports/Home/12d08bc73d7e32905e876d1befcef550581e2a13.png';
import imgSpa2 from '../../../imports/Home/ec8270be4b2fe41a84ea478800145e5118dcc2c0.png';

const services = [
  {
    id: '01',
    title: 'Aromatherapy',
    heading: 'Bespoke Facial for Sensitive Skin',
    description:
      "Experience customized care in its purest form. This gentle, consultative treatment is personally tailored to your skin's unique needs, using only the mildest, most effective…",
    features: [
      '1-on-1 Sensitivity Facial',
      'Hypoallergenic Calming Blend',
      'Barrier-Support Redness Relief Treatment',
      'Cool Wave Soothing & Repair Mask',
    ],
    image: imgSpa1,
  },
  {
    id: '02',
    title: 'Massage',
    heading: 'The Ultimate Oxygen Infusion for Dull Skin',
    description:
      'Revive fatigued, lackluster skin with a powerful surge of pure oxygen and nutrient-rich serums. This innovative treatment instantly boosts circulation, energizes cells, and delivers a…',
    features: [
      'Pressurized O2 Revitalizing Facial',
      'Oxygen & Vitamin Supercharge Treatment',
      'Brightening Collagen Oxygen Lift',
      'Cellular Energy Boost Infusion',
    ],
    image: imgSpa2,
  },
  {
    id: '03',
    title: 'Skincare',
    heading: 'Deep Hydration & Glow Restoration',
    description:
      'Replenish your skin with intensive moisture therapy designed to restore elasticity and natural luminosity for a refreshed, youthful appearance.',
    features: [
      'Multi-Layer Hydration Facial',
      'Ceramide Barrier Repair',
      'Luminosity Boost Treatment',
      'Deep Moisture Infusion Mask',
    ],
    image: imgSpa1,
  },
  {
    id: '04',
    title: 'Wellness Care',
    heading: 'Mind & Body Harmony Ritual',
    description:
      'A holistic treatment combining ancient healing techniques with modern wellness practices for complete restoration of mind, body, and spirit.',
    features: [
      'Full-Body Energy Alignment',
      'Crystal Sound Healing Session',
      'Guided Breathwork & Relaxation',
      'Chakra Balancing Treatment',
    ],
    image: imgSpa2,
  },
];

export default function SpaServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, activeIndex]);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  const active = services[activeIndex];

  return (
    <section id="spa-services-section" className="w-full bg-white py-16 md:py-24 lg:py-[180px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[90px]">
        {/* Section Title */}
        <h2 className="reveal-text font-['Melodrama',serif] text-[clamp(2rem,4vw,3.1rem)] text-black uppercase tracking-wider mb-12 md:mb-16">
          SPA SERVICES
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[30px]">
          {/* Left: Service Tabs */}
          <div className="w-full lg:w-[335px] shrink-0">
            {services.map((service, i) => (
              <button
                key={service.id}
                onClick={() => handleTabClick(i)}
                className={`w-full flex items-center gap-5 py-5 md:py-6 border-t border-[#e6e6dc] last:border-b text-left transition-all duration-300 group ${
                  i === activeIndex ? '' : 'opacity-40 hover:opacity-70'
                }`}
              >
                <span className="font-['Jost',sans-serif] text-sm text-black/60 w-7 shrink-0">
                  {service.id}/
                </span>
                <span
                  className={`font-['Melodrama',serif] text-lg md:text-2xl tracking-wider transition-colors ${
                    i === activeIndex ? 'text-black' : 'text-black/50 group-hover:text-black/70'
                  }`}
                >
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          {/* Right: Active Service Content */}
          <div className="flex-1 flex flex-col md:flex-row gap-5 min-h-[500px] lg:min-h-[715px]">
            {/* Image */}
            <div className="w-full md:w-[42%] lg:w-[420px] shrink-0 overflow-hidden">
              <img
                key={active.id}
                src={active.image}
                alt={active.title}
                className="w-full h-[300px] md:h-full object-cover animate-fadeIn"
              />
            </div>

            {/* Details Card */}
            <div className="flex-1 border border-[#e6e6dc] p-6 md:p-10 lg:p-14 flex flex-col justify-between">
              <div>
                <h3 className="font-['Melodrama',serif] text-2xl md:text-3xl lg:text-[40px] text-black tracking-wider leading-tight mb-4 md:mb-6">
                  {active.heading}
                </h3>
                <p className="font-['Jost',sans-serif] text-sm md:text-base text-[#666] leading-relaxed mb-8">
                  {active.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {active.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 font-['Jost',sans-serif] text-sm md:text-base text-black">
                      <span className="text-[#585e48]">•</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#read-more"
                className="inline-flex items-center px-8 py-3 border border-[#e6e6dc] font-['Jost',sans-serif] text-sm capitalize text-black hover:bg-[#585e48] hover:text-white hover:border-[#585e48] transition-all duration-300 mt-8 self-start"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
