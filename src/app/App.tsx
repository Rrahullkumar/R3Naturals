import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "../imports/Home/Home";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = wrapperRef.current;
    if (!root) return;

    const splitWords = (el: HTMLElement) => {
      const text = el.textContent?.trim() ?? "";
      if (!text) return;

      const wrapped = text
        .split(/\s+/)
        .map((word, index, array) => {
          const segments = word
            .split("-")
            .map((segment) => `<span class="word">${segment}</span>`)
            .join('<span class="hyphen">-</span>');

          return `${segments}${index < array.length - 1 ? '<span class="whitespace"> </span>' : ''}`;
        })
        .join("");

      el.innerHTML = wrapped;
    };

    const getLines = (el: HTMLElement) => {
      const lines: HTMLElement[][] = [];
      let lastTop = -1;
      let line: HTMLElement[] = [];
      const spans = Array.from(el.querySelectorAll('span')) as HTMLElement[];

      spans.forEach((span) => {
        const top = span.offsetTop;
        if (top !== lastTop && !span.classList.contains('whitespace')) {
          lastTop = top;
          line = [];
          lines.push(line);
        }
        line.push(span);
      });

      return lines;
    };

    const splitLines = (el: HTMLElement) => {
      if (el.dataset.splitText === 'true') return;
      const html = el.innerHTML.trim();
      const hasBr = /<br\s*\/?\s*>/i.test(html);

      if (hasBr) {
        const rawLines = html
          .split(/<br\s*\/?\s*>/ig)
          .map((line) => line.trim())
          .filter(Boolean);

        el.innerHTML = rawLines
          .map((line) => {
            const words = line
              .split(/\s+/)
              .filter(Boolean)
              .map((word, index, array) => {
                const segments = word
                  .split("-")
                  .map((segment) => `<span class="word">${segment}</span>`)
                  .join('<span class="hyphen">-</span>');

                return `${segments}${index < array.length - 1 ? '<span class="whitespace"> </span>' : ''}`;
              })
              .join("");

            return `<span class="line"><span class="words">${words}</span></span>`;
          })
          .join("");

        el.dataset.splitText = 'true';
        return;
      }

      splitWords(el);
      const lines = getLines(el);
      el.innerHTML = lines
        .map(
          (words) =>
            `<span class="line"><span class="words">${words
              .map((word) => word.outerHTML)
              .join('')}</span></span>`
        )
        .join('');
      el.dataset.splitText = 'true';
    };

    const headings = root.querySelectorAll<HTMLElement>('section h1.reveal-text, section h2.reveal-text, section h3.reveal-text');
    headings.forEach((heading) => {
      splitLines(heading);
      heading.classList.add('reveal-text');
    });

    const ctx = gsap.context(() => {
      const revealHeadings = root.querySelectorAll<HTMLElement>('section h1.reveal-text, section h2.reveal-text, section h3.reveal-text');
      revealHeadings.forEach((element) => {
        const lines = element.querySelectorAll<HTMLElement>('.line .words');
        gsap.set(element, { autoAlpha: 1 });

        if (!lines.length) return;

        gsap.from(lines, {
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'restart none none reset',
          },
          yPercent: 100,
          ease: 'power3.out',
          duration: 1,
          stagger: 0.18,
          delay: 0.2,
        });
      });
      // ── Fade-in sections on scroll ─────────────────────────────────────────
      const sections = root.querySelectorAll<HTMLElement>("section");
      sections.forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: "power3.out",
        });
      });

      // ── Stat counters ──────────────────────────────────────────────────────
      const statEls = root.querySelectorAll<HTMLElement>("[data-stat]");
      statEls.forEach((el) => {
        const p = el.querySelector("p:last-of-type");
        if (!p) return;
        const rawText = p.textContent || "";
        const numMatch = rawText.match(/[\d.]+/);
        if (!numMatch) return;
        const target = parseFloat(numMatch[0]);
        const suffix = rawText.replace(/[\d.]+/, "");
        const obj = { val: 0 };
        p.textContent = "0" + suffix;

        gsap.to(obj, {
          val: target,
          duration: 2.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate() {
            if (p) p.textContent = Math.round(obj.val) + suffix;
          },
          onComplete() {
            if (p) p.textContent = rawText;
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="w-full min-h-screen overflow-x-hidden">
      <Home />
    </div>
  );
}
