import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Component imports
import Navbar from '../components/sections/Navbar';
import HeroSection from '../components/sections/HeroSection';
import WellnessAboutSection from '../components/sections/WellnessAboutSection';
import SpaServices from '../components/ui/SpaServices';
import BeautyJournalSection from '../components/sections/BeautyJournalSection';

gsap.registerPlugin(ScrollTrigger);

interface HomeProps {
  scrollToSection?: string;
}

export default function Home({ scrollToSection }: HomeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero section animation
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

  // Scroll to section if specified
  useEffect(() => {
    if (scrollToSection) {
      const element = document.querySelector(`#${scrollToSection}`);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [scrollToSection]);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen bg-gradient-to-br from-[#fffef6] via-white to-[#fbf2eb] flex flex-col"
    >
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection 
          title="LUXURY SPA & WELLNESS\nRETREAT"
        />

        {/* Wellness & About Section */}
        <div data-section>
          <WellnessAboutSection />
        </div>

        {/* Spa Services Section */}
        <div data-section>
          <SpaServices />
        </div>

        {/* Beauty & Journal Section */}
        <div data-section>
          <BeautyJournalSection />
        </div>

        {/* Stats/Achievements Section (Placeholder for future) */}
        <section data-section className="w-full bg-white py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-20">
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

        {/* Testimonials Section (Placeholder) */}
        <section data-section className="w-full bg-[#fbf2eb] py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-20">
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

        {/* Contact & Hours Section (Placeholder) */}
        <section data-section className="w-full bg-white py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Hours */}
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
                    className="w-full px-4 py-3 border border-[#e6e6dc] rounded focus:outline-none focus:border-black transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[#de3c3e] text-white font-['Jost:Regular',sans-serif] uppercase tracking-[0.5px] hover:bg-[#de3c3e]/90 transition-colors rounded"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-black text-white py-12 md:py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            {/* Logo/Brand */}
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
                <a href="#facebook" className="hover:text-white transition-colors">F</a>
                <a href="#instagram" className="hover:text-white transition-colors">I</a>
                <a href="#twitter" className="hover:text-white transition-colors">T</a>
                <a href="#linkedin" className="hover:text-white transition-colors">L</a>
              </div>
            </div>
          </div>

          {/* Divider */}
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
