import svgPaths from '../../../imports/Home/svg-9izwg4yzsc';

// Partner SVG data extracted from the original file
const partners = [
  { id: 'p1', paths: [svgPaths.pf7a7c80, svgPaths.p17d98a00, svgPaths.p6b88600, svgPaths.p1cf48900, svgPaths.p1e7a500, svgPaths.p35c33040, svgPaths.p26546b40], viewBox: '0 0 176 37', w: 176, h: 37 },
  { id: 'p2', paths: [svgPaths.p166e4480, svgPaths.p17cbef00, svgPaths.p1de5cf00, svgPaths.p3d7bdd00, svgPaths.p39ef8000, svgPaths.p28b60800, svgPaths.p9047180, svgPaths.p27233e0], viewBox: '0 0 120 79', w: 120, h: 79 },
  { id: 'p3', paths: [svgPaths.pee92e00, svgPaths.p3c67ca00, svgPaths.p2307f200, svgPaths.p26fa2b00, svgPaths.p37023b00, svgPaths.p24a07880, svgPaths.p31b9fa00, svgPaths.p121a7d00, svgPaths.p2e25d080, svgPaths.p2654fe80], viewBox: '0 0 132 70', w: 132, h: 70 },
  { id: 'p4', paths: [svgPaths.p1f31ef40, svgPaths.pa89380, svgPaths.p304fea00, svgPaths.p32d54f00], viewBox: '0 0 155 38', w: 155, h: 38 },
  { id: 'p5', paths: [svgPaths.p2e620d00, svgPaths.p1a6075a0, svgPaths.p34fca460, svgPaths.p3520a900, svgPaths.p118a0600, svgPaths.pd05be00, svgPaths.p2291ac80], viewBox: '0 0 171 28', w: 171, h: 28 },
  { id: 'p6', paths: [svgPaths.p11edcf00, svgPaths.p176e6f80, svgPaths.p35fbdfc8, svgPaths.p117c6dc0, svgPaths.p38d64600, svgPaths.p2b426c80, svgPaths.p2f1e6480, svgPaths.p4c89e30, svgPaths.p15ac7a80, svgPaths.p2fad8180], viewBox: '0 0 193 34', w: 193, h: 34 },
  { id: 'p7', paths: [svgPaths.p698cb80, svgPaths.p160af540, svgPaths.pe133e80, svgPaths.p2d37b6c0, svgPaths.pe687348, svgPaths.p2c67080], viewBox: '0 0 153 68', w: 153, h: 68 },
  { id: 'p8', paths: [svgPaths.p23ad5980, svgPaths.p1bd01f80, svgPaths.p28730940, svgPaths.pa729ee0, svgPaths.p2b3c7ac0, svgPaths.p76cc00, svgPaths.p20c0ca80], viewBox: '0 0 173 44', w: 173, h: 44 },
];

export default function Partners() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-[145px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[90px]">
        {/* Title */}
        <h2 className="font-['Melodrama',serif] text-[clamp(2rem,4.5vw,4rem)] text-black text-center uppercase tracking-wider mb-12 md:mb-16">
          OUR TRUSTED PARTNERS
        </h2>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px] rounded-full bg-[#fffef6] border border-[rgba(88,94,72,0.5)] flex items-center justify-center p-6 md:p-10 hover:border-[rgba(88,94,72,0.8)] hover:shadow-lg transition-all duration-300 group"
            >
              <svg
                viewBox={partner.viewBox}
                fill="none"
                className="w-full h-auto max-h-[50%] group-hover:scale-110 transition-transform duration-300"
              >
                {partner.paths.map((d, i) => (
                  <path key={i} d={d} fill="#585E48" fillOpacity="0.5" />
                ))}
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
