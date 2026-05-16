import imgBackground1 from '../../../imports/Home/5f6ef092d8981aa0b80e8862899620531730c9b5.png';
import herovideo from '../../../imports/Home/hervideo.mp4';
import SwiftUpText from '../ui/SwiftUpText';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <video
          src={herovideo}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 min-h-screen">
        {/* Main Heading */}
        <div className="flex items-center min-h-screen px-6 md:px-12 lg:px-20 pt-[100px] md:pt-[120px] pb-[220px] sm:pb-[140px]">
          <div>
            <SwiftUpText
              as="h1"
              text="LUXURY SPA & WELLNESS"
              className="reveal-text font-['Melodrama',serif] text-white uppercase tracking-wider leading-[1.05] text-[clamp(2rem,7vw,6.25rem)]"
              delay={0.3}
            />
            <SwiftUpText
              as="h1"
              text="RETREAT"
              className="reveal-text font-['Melodrama',serif] text-white uppercase tracking-wider leading-[1.05] text-[clamp(2rem,7vw,6.25rem)]"
              delay={0.6}
            />
          </div>
        </div>

        {/* Bottom Glassmorphism Bar */}
        <div className="absolute bottom-0 left-0 w-full backdrop-blur-[10px] bg-white/20 px-4 md:px-8 lg:px-12 py-8 md:py-12">
          <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0">
            {[
              { title: 'RESTORE', desc: 'Revive Your Senses With Soothing Rituals For Balance.' },
              { title: 'RENEW', desc: 'Restore Balance And Reveal Your Natural Radiance.' },
              { title: 'RELAX', desc: 'Unwind In Our Tranquil Sanctuary Of Pure Wellness.' },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`flex items-start gap-4 flex-1 ${
                  i > 0 ? 'sm:border-l sm:border-[#e6e6dc]/50 sm:pl-6 md:pl-10' : ''
                }`}
              >
                <div>
                  <p className="font-['Jost',sans-serif] font-medium text-white text-xs md:text-sm uppercase tracking-wider mb-1">
                    {item.title}
                  </p>
                  <p className="font-['Jost',sans-serif] text-[#e6e6dc] text-xs md:text-sm capitalize leading-relaxed max-w-[250px]">
                    {item.desc}
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