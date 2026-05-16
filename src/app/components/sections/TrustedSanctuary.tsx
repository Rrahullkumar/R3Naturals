import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import imgBackground2 from '../../../imports/Home/b4f4da722c2f1d87ab7afde667962239e67467ea.png';
import imgCert1 from '../../../imports/Home/e8901f341155e6408126e57a48de60ce2261825e.png';
import imgCert2 from '../../../imports/Home/350871033683960ec122447147387e7cee10c324.png';

const carouselItems = [
  {
    num: '1',
    title: 'Expert Spa Professionals Always',
    desc: 'Our skilled therapists bring years of expertise and genuine care to every treatment they provide.',
    color: 'rgba(88,94,72,0.5)',
  },
  {
    num: '2',
    title: 'Tranquil Luxurious Atmosphere Always',
    desc: 'Our serene space is thoughtfully designed to gently calm your senses and restore deep inner peace and harmony.',
    color: 'rgba(222,60,62,0.5)',
  },
  {
    num: '3',
    title: 'Premium Natural Products Only',
    desc: 'We use only the finest organic and sustainably sourced products for all our treatments.',
    color: 'rgba(88,94,72,0.5)',
  },
  {
    num: '4',
    title: 'Personalized Care Every Visit',
    desc: 'Every treatment is customized to your unique needs and wellness goals.',
    color: 'rgba(222,60,62,0.5)',
  },
  {
    num: '5',
    title: 'Holistic Healing Approach',
    desc: 'We treat the whole person — mind, body, and spirit — for lasting results.',
    color: 'rgba(88,94,72,0.5)',
  },
];

export default function TrustedSanctuary() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={imgBackground2} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[90px] py-20 md:py-[130px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left: Text Content */}
          <div className="flex-1 max-w-[700px]">
            {/* Vertical divider + Heading */}
            <div className="pl-6 border-l-2 border-[#fffef6] mb-8">
              <h2 className="reveal-text font-['Melodrama',serif] text-[clamp(2rem,5vw,4rem)] text-white uppercase tracking-wider leading-[1.15]">
                YOUR TRUSTED<br />
                SANCTUARY FOR<br />
                WELLNESS
              </h2>
            </div>

            {/* Description */}
            <p className="font-['Jost',sans-serif] text-[#fffef6] text-sm md:text-base leading-relaxed mb-12 lg:mb-[165px] max-w-[500px]">
              Where personalized therapies, calming rituals, and thoughtful
              care come together to nurture your body, uplift your spirit, and
              create a deeply restorative wellness experience.
            </p>

            {/* Certifications */}
            <div className="flex items-end gap-6">
              <img src={imgCert1} alt="Certification 1" className="w-[80px] md:w-[100px] lg:w-[137px] h-auto" />
              <img src={imgCert2} alt="Certification 2" className="w-[70px] md:w-[90px] lg:w-[119px] h-auto" />
            </div>
          </div>

          {/* Right: Carousel */}
          <div className="flex-1 max-w-[550px] w-full">
            <div className="bg-[#fffef6] rounded-sm pb-8 md:pb-12 pt-10 md:pt-16 px-2">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                slidesPerView={1}
                spaceBetween={0}
                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                className="mb-8"
              >
                {carouselItems.map((item) => (
                  <SwiperSlide key={item.num}>
                    <div className="flex gap-4 md:gap-6 px-4 md:px-6">
                      {/* Number Column */}
                      <div className="relative shrink-0 w-12 md:w-16 overflow-hidden">
                        <span
                          className="font-['Melodrama',serif] text-[120px] md:text-[200px] lg:text-[270px] leading-none absolute -right-4 top-1/2 -translate-y-1/2"
                          style={{ color: item.color }}
                        >
                          {item.num}
                        </span>
                        <div className="absolute right-0 top-0 bottom-0 w-px bg-[rgba(88,94,72,0.3)]" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col justify-center py-6 md:py-10 pr-4 md:pr-12">
                        <h3 className="font-['Melodrama',serif] text-xl md:text-2xl lg:text-[30px] capitalize text-black tracking-wider leading-tight mb-3 md:mb-4">
                          {item.title}
                        </h3>
                        <p className="font-['Jost',sans-serif] text-sm md:text-base text-[#666] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Dots */}
              <div className="flex items-center justify-center gap-4 md:gap-6">
                {carouselItems.map((_, i) => (
                  <button
                    key={i}
                    className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                      i === activeSlide
                        ? 'bg-[rgba(222,60,62,0.7)] scale-110'
                        : 'bg-[rgba(222,60,62,0.2)] hover:bg-[rgba(222,60,62,0.4)]'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
