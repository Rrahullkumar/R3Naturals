import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SwiftUpTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  delay?: number;
}

export default function SwiftUpText({ text, className = '', as: Tag = 'h2', delay = 0 }: SwiftUpTextProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = text.split(' ');
    el.innerHTML = '';

    words.forEach((word, index) => {
      const outer = document.createElement('span');
      outer.style.display = 'inline-block';
      outer.style.overflow = 'hidden';
      outer.style.verticalAlign = 'top';

      const inner = document.createElement('i');
      inner.style.fontStyle = 'normal';
      inner.style.display = 'inline-block';
      inner.style.position = 'relative';
      inner.style.top = '100%';
      inner.textContent = word;

      outer.appendChild(inner);
      el.appendChild(outer);

      if (index < words.length - 1) {
        el.appendChild(document.createTextNode(' '));
      }
    });

    const inners = el.querySelectorAll('i');

    const ctx = gsap.context(() => {
      gsap.to(inners, {
        top: '0%',
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.12,
        delay,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, [text, delay]);

  // @ts-ignore - dynamic tag
  return <Tag ref={ref} className={className}>{text}</Tag>;
}
