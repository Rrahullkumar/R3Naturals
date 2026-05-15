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

    const ctx = gsap.context(() => {
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
