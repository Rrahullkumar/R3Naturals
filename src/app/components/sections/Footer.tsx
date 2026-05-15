import { useState } from 'react';
import svgPaths from '../../../imports/Home/svg-9izwg4yzsc';

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="w-full bg-[#fbf2eb]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[75px]">
        {/* Logo */}
        <div className="pt-16 md:pt-24 lg:pt-[180px] mb-6 md:mb-8">
          <svg width="100%" height="auto" viewBox="0 0 1248 189" fill="none" className="max-w-full h-auto max-h-[60px] md:max-h-[100px] lg:max-h-[189px]">
            <g clipPath="url(#clip_footer_logo)">
              <path d={svgPaths.pf95a300} fill="#D9D9D9" />
              <path d={svgPaths.peeac580} fill="#D9D9D9" />
              <path d={svgPaths.p13db7f80} fill="#D9D9D9" />
              <path d={svgPaths.pe230a80} fill="#D9D9D9" />
              <path d={svgPaths.p36a2ca80} fill="#D9D9D9" />
              <path d={svgPaths.p1f3b4c00} fill="#D9D9D9" />
              <path d={svgPaths.p2fa8e300} fill="#D9D9D9" />
              <path d={svgPaths.p2bcb1000} fill="#D9D9D9" />
              <path d={svgPaths.p3b101900} fill="#D9D9D9" />
              <path d={svgPaths.p30617680} fill="#D9D9D9" />
            </g>
            <defs>
              <clipPath id="clip_footer_logo">
                <rect fill="white" height="189" width="1248" />
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-black/25 mb-10 md:mb-16" />

        {/* CTA + Contact + Newsletter */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between pb-10 md:pb-16">
          {/* Left: CTA */}
          <div className="flex-1 max-w-[555px]">
            <h3 className="font-['Melodrama',serif] text-[clamp(1.5rem,3vw,2.8rem)] text-black uppercase tracking-wider leading-tight mb-6 md:mb-8">
              BEGIN YOUR JOURNEY TO<br />RADIANT WELLNESS TODAY
            </h3>

            <a
              href="#book"
              className="inline-flex items-center px-8 py-3 bg-white font-['Jost',sans-serif] text-sm capitalize text-black border border-[#e6e6dc] hover:bg-black hover:text-white transition-all duration-300 mb-8 md:mb-12"
            >
              Book Appointment
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="font-['Melodrama',serif] text-lg md:text-xl text-black capitalize tracking-wider">
                Follow Us:
              </span>
              <div className="flex gap-2">
                {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                  <a
                    key={social}
                    href={`#${social.toLowerCase()}`}
                    className="w-[42px] h-[42px] md:w-[52px] md:h-[52px] rounded-full border border-black/50 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 group"
                    aria-label={social}
                  >
                    <span className="font-['Jost',sans-serif] text-xs text-black group-hover:text-white transition-colors">
                      {social[0]}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Middle: Contact Info */}
          <div className="flex-1 max-w-[413px]">
            <div className="space-y-4">
              <div>
                <p className="font-['Jost',sans-serif] text-sm text-[#949494] capitalize mb-1">Give Us A Call:</p>
                <p className="font-['Melodrama',serif] text-2xl md:text-3xl lg:text-[40px] text-black">(602) 266-5755</p>
              </div>
              <div>
                <p className="font-['Jost',sans-serif] text-sm text-[#949494] capitalize">Give Us A Call:</p>
              </div>
              <div>
                <p className="font-['Jost',sans-serif] text-sm text-[#949494] capitalize">Open Daily: 9:00 AM – 8:00 PM</p>
              </div>
              <div>
                <p className="font-['Jost',sans-serif] text-sm text-[#949494]">
                  Send Mail: <span className="lowercase">booking@r3naturals.com</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right: Newsletter */}
          <div className="flex-1 max-w-[323px]">
            <h4 className="font-['Melodrama',serif] text-2xl md:text-[30px] text-black tracking-wider mb-3">
              Join Our Newsletter
            </h4>
            <p className="font-['Jost',sans-serif] text-sm text-[#949494] leading-relaxed mb-8">
              Sign up to stay updated with the latest spa treatments, wellness tips, and exclusive offers.
            </p>

            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setEmail('');
              }}
            >
              <div className="border-b border-black/50 pb-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email*"
                  className="w-full bg-transparent font-['Jost',sans-serif] text-sm text-black placeholder:text-[#949494] outline-none"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="font-['Jost',sans-serif] text-sm text-[#949494] uppercase tracking-wider">
                  SUBSCRIBE
                </span>
                <button
                  type="submit"
                  className="w-9 h-9 rounded-full border border-[#949494] flex items-center justify-center hover:bg-black hover:border-black hover:text-white transition-all duration-300 group"
                  aria-label="Subscribe"
                >
                  <svg width="16" height="8" viewBox="0 0 21 8" fill="none">
                    <path d={svgPaths.p19f8ce80} fill="currentColor" className="text-black group-hover:text-white transition-colors" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-black/25 border-dashed py-8 md:py-12 flex items-center justify-center">
          <p className="font-['Jost',sans-serif] text-sm text-[#949494]">
            © 2026 R3Naturals.Com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
