import imgImageTest from '../../../imports/Home/220ee531eb6adae94da1cd7c66fd8246ac67f3dc.png';

export default function GreenSection() {
  return (
    <section className="w-full bg-[#f4ffef] py-16 md:py-24 lg:py-[160px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[90px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto lg:h-[500px] overflow-hidden rounded-sm">
            <img
              src={imgImageTest}
              alt="Natural wellness ingredients"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            <span className="font-['Jost',sans-serif] text-sm uppercase text-[#585e48] tracking-widest mb-4 block">
              Natural Ingredients
            </span>
            <h2 className="reveal-text font-['Melodrama',serif] text-[clamp(1.8rem,3.5vw,2.8rem)] text-black uppercase tracking-wider leading-tight mb-6">
              PURE ORGANIC WELLNESS FROM NATURE
            </h2>
            <p className="font-['Jost',sans-serif] text-base text-[#666] leading-relaxed mb-8 max-w-[500px]">
              We source only the finest natural and organic ingredients to craft treatments that nourish your skin from within. 
              Every product we use is carefully selected for its purity, effectiveness, and sustainability.
            </p>
            <a
              href="#learn-more"
              className="inline-flex items-center px-8 py-3.5 bg-[#585e48] text-white font-['Jost',sans-serif] text-sm uppercase tracking-wider hover:bg-[#484d3b] transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
