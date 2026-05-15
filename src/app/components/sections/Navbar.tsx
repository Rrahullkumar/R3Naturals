import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import svgPaths from '../../../imports/Home/svg-9izwg4yzsc';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef(null);

  const navLinks = ['HOME', 'ABOUT', 'CENTERS', 'SERVICES', 'BLOG', 'SHOP', 'CONTACT'];

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const st = ScrollTrigger.create({
      start: 0,
      end: 99999,
      onUpdate: (self) => {
        if (mobileOpen) return;

        if (self.scroll() < 80) {
          gsap.to(header, {
            yPercent: 0,
            duration: 0.25,
            ease: 'power2.out',
            overwrite: 'auto',
          });
          return;
        }

        if (self.direction === 1) {
          gsap.to(header, {
            yPercent: -100,
            duration: 0.3,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        } else {
          gsap.to(header, {
            yPercent: 0,
            duration: 0.3,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        }
      },
    });

    return () => {
      st.kill();
    };
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-[#fffef6] border-b border-[#e6e6dc] will-change-transform"
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 md:px-8 lg:px-[60px] h-[70px] lg:h-[95px]">
        <a href="/" className="shrink-0">
          <svg width="186" height="35" viewBox="0 0 186.02 34.6051" fill="none" className="h-6 md:h-8 w-auto">
            <g id="R3Naturals">
              <path d={svgPaths.p2cbf9900} fill="black" />
              <path d={svgPaths.p37797700} fill="black" />
              <path d={svgPaths.pf56ad00} fill="black" />
              <path d={svgPaths.p3f2b0b80} fill="black" />
              <path d={svgPaths.p2b2ba480} fill="black" />
              <path d={svgPaths.p2f634b00} fill="black" />
              <path d={svgPaths.p733f680} fill="black" />
              <path d={svgPaths.p24d3180} fill="black" />
              <path d={svgPaths.p494a380} fill="black" />
              <path d={svgPaths.p229fe800} fill="black" />
            </g>
          </svg>
        </a>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-['Jost',sans-serif] text-sm uppercase tracking-wide text-black/80 hover:text-black transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors" aria-label="Search">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path d={svgPaths.p39962000} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.565" />
              <path d={svgPaths.p30c3ff80} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.565" />
            </svg>
          </button>

          <span className="hidden md:block w-px h-5 bg-[#e5e8d9]" />

          <button className="p-2 hover:bg-black/5 rounded-full transition-colors" aria-label="Cart">
            <svg width="36" height="35" viewBox="0 0 36 35" fill="none">
              <path d={svgPaths.p163e17c0} fill="#666" />
              <path d={svgPaths.p9dc3b00} fill="#666" />
              <path d={svgPaths.p275b6900} fill="#666" />
            </svg>
          </button>

          <a
            href="#book"
            className="hidden md:flex items-center px-6 py-2.5 border border-[#e6e6dc] bg-[#fffef6] font-['Jost',sans-serif] text-sm capitalize text-black hover:bg-black hover:text-white transition-all duration-300"
          >
            Book Appointment
          </a>

          <button
            className="lg:hidden p-2 hover:bg-black/5 rounded-full transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-[#fffef6] border-t border-[#e6e6dc] ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-['Jost',sans-serif] text-sm uppercase tracking-wide text-black/80 hover:text-black py-3 border-b border-[#e6e6dc]/50 last:border-0 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#book"
            className="mt-4 flex items-center justify-center px-6 py-3 border border-[#e6e6dc] bg-black text-white font-['Jost',sans-serif] text-sm capitalize transition-all"
          >
            Book Appointment
          </a>
        </nav>
      </div>
    </header>
  );
}