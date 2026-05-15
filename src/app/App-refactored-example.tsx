import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import refactored sections
import Navbar from './components/sections/Navbar';
import HeroSection from './components/sections/HeroSection';
import WellnessAboutSection from './components/sections/WellnessAboutSection';
import SpaServices from './components/ui/SpaServices';
import BeautyJournalSection from './components/sections/BeautyJournalSection';

// Import original elements if needed (for backward compatibility)
// import { imgBackground1, imgMm, imgNn } from '../imports/Home/Home';

gsap.registerPlugin(ScrollTrigger);

/**
 * Clean, refactored App component using modular sections
 * Replaces the original massive Home.tsx (9,963 lines)
 * 
 * Features:
 * - Sticky Navbar with responsive mobile menu
 * - Hero section with animation
 * - Wellness & About section
 * - Spa Services carousel
 * - Beauty & Journal sticky scroll section
 * - Stats & Achievements
 * - Testimonials
 * - Contact & Hours
 * - Newsletter signup
 * - Footer
 * 
 * All components are fully responsive and styled with Tailwind CSS
 */
export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Global GSAP animations setup
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Entrance animation for hero section
      gsap.from('[data-hero-text]', {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2
      });

      // Scroll-triggered animations for sections
      gsap.utils.toArray('[data-section]').forEach((section: any) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power3.out'
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen bg-gradient-to-br from-[#fffef6] via-white to-[#fbf2eb]"
    >
      {/* ===== NAVIGATION ===== */}
      <Navbar />

      {/* ===== MAIN CONTENT ===== */}
      <main className="w-full">
        {/* ===== HERO SECTION ===== */}
        <HeroSection 
          title="LUXURY SPA & WELLNESS\nRETREAT"
          // backgroundImage={imgBackground1}
        />

        {/* ===== WELLNESS & ABOUT SECTION ===== */}
        <div data-section id="about">
          <WellnessAboutSection
            heading="Where Wellness Meets Serenity"
            subheading="To Create Your Escape"
            description="At Serava Spa, we believe true beauty begins with balance — a harmony of body, mind, and spirit. Nestled in the heart of New York, our serene sanctuary offers bespoke treatments crafted to renew your skin, calm your senses, and restore your natural glow. Each visit is an invitation to unwind, reconnect, and rediscover your inner radiance."
            cta="Discover Our Story"
          />
        </div>

        {/* ===== SPA SERVICES SECTION ===== */}
        <div data-section id="services">
          <SpaServices />
        </div>

        {/* ===== BEAUTY & JOURNAL SECTION (Sticky Scroll) ===== */}
        <div data-section id="beauty">
          <BeautyJournalSection />
        </div>

        {/* ===== ACHIEVEMENTS / STATS SECTION ===== */}
        <section data-section id="achievements" className="w-full bg-white py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Melodrama:Regular',sans-serif] uppercase text-black mb-12 tracking-[0.5px]">
              Our Achievements
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                { number: '15K+', label: 'Visitors Annual' },
                { number: '10+', label: 'Years Experience' },
                { number: '98%', label: 'Customer Satisfaction' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-['Melodrama:Regular',sans-serif] text-[#de3c3e] mb-4">
                    {stat.number}
                  </div>
                  <p className="text-lg text-[#666] font-['Jost:Regular',sans-serif]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS SECTION ===== */}
        <section data-section id="testimonials" className="w-full bg-[#fbf2eb] py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Melodrama:Regular',sans-serif] uppercase text-black mb-12 tracking-[0.5px]">
              What Our Clients Say
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  name: 'Sarah Johnson',
                  role: 'Creative Director',
                  testimonial: 'The most transformative spa experience I\'ve had. Every detail was perfect.'
                },
                {
                  name: 'Michael Chen',
                  role: 'Entrepreneur',
                  testimonial: 'An oasis of calm in the midst of chaos. Highly recommended for wellness seekers.'
                },
                {
                  name: 'Emma Watson',
                  role: 'Wellness Coach',
                  testimonial: 'The therapists are incredibly skilled. I felt like a new person after just one session.'
                }
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-white p-6 md:p-8 rounded-lg border border-[#e6e6dc] hover:shadow-md transition-shadow">
                  <p className="text-[#666] font-['Jost:Regular',sans-serif] mb-6 leading-relaxed italic">
                    "{testimonial.testimonial}"
                  </p>
                  <div>
                    <p className="font-semibold text-black font-['Jost:Regular',sans-serif]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[#999] font-['Jost:Regular',sans-serif]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CONTACT & HOURS SECTION ===== */}
        <section data-section id="contact" className="w-full bg-white py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Working Hours */}
              <div>
                <h3 className="text-2xl md:text-3xl font-['Melodrama:Regular',sans-serif] uppercase text-black mb-6 tracking-[0.5px]">
                  Working Hours
                </h3>
                <div className="space-y-4 text-[#666] font-['Jost:Regular',sans-serif]">
                  {[
                    { day: 'Monday - Friday', hours: '9:00 AM - 10:00 PM' },
                    { day: 'Saturday', hours: '8:00 AM - 11:00 PM' },
                    { day: 'Sunday', hours: '8:00 AM - 9:00 PM' }
                  ].map((schedule, idx) => (
                    <div key={idx} className="flex justify-between border-b border-[#e6e6dc] pb-3">
                      <span className="font-semibold">{schedule.day}</span>
                      <span>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div>
                <h3 className="text-2xl md:text-3xl font-['Melodrama:Regular',sans-serif] uppercase text-black mb-6 tracking-[0.5px]">
                  Newsletter
                </h3>
                <p className="text-[#666] font-['Jost:Regular',sans-serif] mb-6">
                  Subscribe to receive exclusive offers and wellness tips delivered to your inbox.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-[#e6e6dc] rounded focus:outline-none focus:border-black transition-colors font-['Jost:Regular',sans-serif]"
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[#de3c3e] text-white font-['Jost:Regular',sans-serif] uppercase tracking-[0.5px] hover:bg-[#de3c3e]/90 transition-colors rounded focus-visible:outline-2 outline-offset-2 outline-[#de3c3e]"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="w-full bg-black text-white py-12 md:py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-xl md:text-2xl font-['Melodrama:Regular',sans-serif] uppercase tracking-[0.5px] mb-4">
                Serava Spa
              </h3>
              <p className="text-sm text-white/70 font-['Jost:Regular',sans-serif] leading-relaxed">
                Luxury spa and wellness retreat dedicated to your tranquility and rejuvenation.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4 font-['Jost:Regular',sans-serif]">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/70 font-['Jost:Regular',sans-serif]">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4 font-['Jost:Regular',sans-serif]">Contact</h4>
              <div className="space-y-2 text-sm text-white/70 font-['Jost:Regular',sans-serif]">
                <p>📍 123 Luxury Avenue, NY 10001</p>
                <p>📞 +1 (555) 123-4567</p>
                <p>✉️ info@seravaspa.com</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold text-white mb-4 font-['Jost:Regular',sans-serif]">Follow Us</h4>
              <div className="flex gap-4 text-white/70">
                <a href="#facebook" className="hover:text-white transition-colors">Facebook</a>
                <a href="#instagram" className="hover:text-white transition-colors">Instagram</a>
                <a href="#twitter" className="hover:text-white transition-colors">Twitter</a>
                <a href="#linkedin" className="hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/50 font-['Jost:Regular',sans-serif]">
              <p>&copy; 2024 Serava Spa. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#privacy" className="hover:text-white/70 transition-colors">Privacy Policy</a>
                <a href="#terms" className="hover:text-white/70 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
