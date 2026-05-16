import imgPexels from '../../../imports/Home/288aee1cf6be2c60eaa58d10ae9504e731c6a33b.png';

const expertiseItems = [
  'Holistic Skincare Treatments',
  'Aromatherapy & Essential Oils',
  'Wellness Rituals for Mind & Body',
];

const stats = [
  { label: 'VISITORS', value: '15', suffix: 'K' },
  { label: 'YEARS OF EXPERIENCE', value: '10', suffix: '+' },
  { label: 'POSITIVE FEEDBACK', value: '98', suffix: '%' },
];

export default function AboutSection() {
  return (
    <section className="bg-[#fbf2eb] w-full overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[90px] py-16 md:py-24 lg:py-[160px]">
        {/* Top: Text + Image */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-16 lg:mb-24">
          {/* Left Column */}
          <div className="flex-1">
            <h2 className="reveal-text font-['Melodrama',serif] text-[clamp(2rem,4.5vw,3.4rem)] text-black uppercase tracking-wider leading-[1.18] mb-6">
              WHERE WELLNESS MEETS SERENITY<br className="hidden md:block" /> TO CREATE YOUR ESCAPE
            </h2>

            <p className="font-['Jost',sans-serif] text-black/70 text-base leading-relaxed max-w-[600px] mb-8">
              At Serava Spa, we believe true beauty begins with balance — a harmony of body, mind, and spirit.
              Nestled in the heart of New York, our serene sanctuary offers bespoke treatments crafted to renew your
              skin, calm your senses, and restore your natural glow. Each visit is an invitation to unwind, reconnect,
              and rediscover your inner radiance.
            </p>

            <a
              href="#story"
              className="inline-flex items-center px-8 py-3.5 border border-black/50 font-['Jost',sans-serif] text-sm capitalize text-black hover:bg-black hover:text-white transition-all duration-300 mb-10"
            >
              Discover Our Story
            </a>

            {/* Expertise */}
            <div>
              <h3 className="font-['Melodrama',serif] text-2xl md:text-[35px] text-black tracking-wider mb-6">
                Our Wellness Expertise
              </h3>
              <div className="flex flex-col">
                {expertiseItems.map((item) => (
                  <div key={item} className="border-t border-black/15 py-4">
                    <p className="font-['Jost',sans-serif] text-lg md:text-xl text-black">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex-1 flex items-start justify-center lg:justify-end lg:pt-[150px]">
            <div className="w-full max-w-[500px] lg:max-w-[580px] aspect-[582/498] overflow-hidden">
              <img
                src={imgPexels}
                alt="Spa treatment"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left: Arrow + "Our achievements" */}
          <div className="flex items-center gap-4 md:w-1/2 mb-6 md:mb-0">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="shrink-0">
              <circle cx="16" cy="16" r="15" stroke="black" strokeWidth="1" />
              <path d="M10 16h12M18 12l4 4-4 4" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-['Jost',sans-serif] text-lg md:text-xl text-black">Our achievements</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-black/25 p-6 md:p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              data-stat
            >
              <div>
                <p className="font-['Jost',sans-serif] text-sm md:text-base uppercase text-black tracking-wide mb-2">
                  {stat.label}
                </p>
                <p className="font-['Melodrama',serif] text-5xl md:text-6xl lg:text-[90px] text-black tracking-wider leading-none">
                  {stat.value}<span>{stat.suffix}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
