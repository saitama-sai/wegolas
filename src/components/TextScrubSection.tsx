import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const TextScrubSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const text = el.innerText;
    const words = text.split(' ');
    el.innerHTML = words
      .map(
        (word) =>
          `<span class="inline-block transition-opacity duration-300 opacity-15 mr-3 mb-2 text-white">${word}</span>`
      )
      .join('');

    const wordSpans = el.querySelectorAll('span');

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 75%',
      end: 'bottom 35%',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalWords = wordSpans.length;
        const activeCount = Math.floor(progress * totalWords);

        wordSpans.forEach((span, i) => {
          if (i <= activeCount) {
            span.classList.remove('opacity-15');
            span.classList.add('opacity-100');
          } else {
            span.classList.add('opacity-15');
            span.classList.remove('opacity-100');
          }
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section
      id="manifesto"
      ref={containerRef}
      className="relative py-36 px-6 lg:px-16 z-10 bg-[#0B0B0D] border-y border-white/10"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <span className="text-xs font-mono uppercase tracking-widest text-gray-500">
          WEGOLAS MANİFESTO — CUBERTO STANDARTLARI
        </span>

        <p
          ref={textRef}
          className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight md:leading-snug tracking-tight"
        >
          Sıradan HTML ve CSS sitelerinin devri kapandı. Dünyanın en iyi markaları kullanıcılarını pürüzsüz kaydırma, WebGL parçacık evrenleri ve büyüleyici mikro etkileşimlerle büyülüyor. Biz wegolas olarak sade, şık ve yüksek performanslı dijital eserler tasarlıyoruz.
        </p>
      </div>
    </section>
  );
};
