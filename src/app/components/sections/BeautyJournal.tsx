import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import imgBg3 from '../../../imports/Home/4c2d75a12e19cff69756761a1ef659e7e54a56df.png';
import imgBg4 from '../../../imports/Home/8059e7422bc61d84968fe339f8b8c4b4386baff1.png';
import imgBg5 from '../../../imports/Home/3d720f045c53729cbe1bcf707e5f35cd14a37e30.png';
import imgBg6 from '../../../imports/Home/e6daec164fd226799a383efe0eafb82726d3b658.png';

gsap.registerPlugin(ScrollTrigger);

const journalPosts = [
  { image: imgBg3, category: 'Skincare Tips', title: 'The Art of Daily Glow Rituals', date: 'May 2, 2026' },
  { image: imgBg4, category: 'Wellness', title: 'Morning Routines for Inner Peace', date: 'Apr 28, 2026' },
  { image: imgBg5, category: 'Aromatherapy', title: 'Essential Oils for Every Mood', date: 'Apr 20, 2026' },
  { image: imgBg6, category: 'Body Care', title: 'Detox Your Body Naturally', date: 'Apr 15, 2026' },
  { image: imgBg3, category: 'Lifestyle', title: 'Finding Balance in a Busy World', date: 'Apr 10, 2026' },
  { image: imgBg4, category: 'Beauty', title: 'Winter Skin Protection Guide', date: 'Apr 5, 2026' },
];

export default function BeautyJournal() {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !viewport || !track) return;

    let tween;

    const init = () => {
      tween?.scrollTrigger?.kill();
      tween?.kill();

      gsap.set(track, { x: 0 });

      const scrollAmount = Math.max(0, track.scrollWidth - viewport.clientWidth);

      tween = gsap.to(track, {
        x: -scrollAmount,
        ease: 'none',
        overwrite: true,
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${scrollAmount}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });

      ScrollTrigger.refresh();
    };

    const rafInit = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          init();
        });
      });
    };

    rafInit();

    window.addEventListener('resize', rafInit);
    window.addEventListener('load', rafInit);

    return () => {
      window.removeEventListener('resize', rafInit);
      window.removeEventListener('load', rafInit);
      tween?.scrollTrigger?.kill();
      tween?.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="beauty-journal-section"
      className="relative w-full h-screen overflow-hidden bg-white flex flex-col justify-center"
    >
      <div className="max-w-[1440px] mx-auto w-full px-4 md:px-8 lg:px-[90px] mb-10 md:mb-14">
        <h2 className="reveal-text font-['Melodrama',serif] text-[clamp(2rem,4.5vw,4rem)] text-black uppercase tracking-wider">
        </h2>
      </div>

      <div ref={viewportRef} className="overflow-hidden w-full">
        <div
          ref={trackRef}
          className="flex w-max pl-4 md:pl-8 lg:pl-[90px] pr-4 md:pr-8 lg:pr-[90px]"
        >
          {journalPosts.map((post, i) => (
            <div
              key={i}
              className="shrink-0 w-[280px] sm:w-[340px] md:w-[400px] lg:w-[480px] mr-5 sm:mr-6 lg:mr-[30px]"
            >
              <article className="group cursor-pointer">
                <div className="relative w-full aspect-[4/5] overflow-hidden mb-4 md:mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm font-['Jost',sans-serif] text-xs uppercase tracking-wider text-black">
                    {post.category}
                  </span>
                </div>

                <div className="px-1">
                  <p className="font-['Jost',sans-serif] text-xs text-black/50 uppercase tracking-wider mb-2">
                    {post.date}
                  </p>
                  <h3 className="font-['Melodrama',serif] text-lg md:text-xl lg:text-2xl text-black tracking-wider group-hover:text-[#585e48] transition-colors duration-300">
                    {post.title}
                  </h3>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-14 px-4 md:px-8 lg:px-[90px]">
          <div className="w-full h-[2px] bg-[#e6e6dc]">
            <div
              ref={progressRef}
              className="h-full bg-[rgba(88,94,72,0.5)]"
              style={{ width: '0%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}