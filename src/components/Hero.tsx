import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Sparkles, Play } from 'lucide-react';
import gsap from 'gsap';
import { sounds } from './SoundEffects';

interface HeroProps {
  onOpenEstimator: () => void;
  onNavigateWorks: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator, onNavigateWorks }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLHeadingElement>(null);
  const titleLine2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [titleLine1Ref.current, titleLine2Ref.current],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.18,
          ease: 'power3.out',
          delay: 0.15,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center px-6 lg:px-16 pt-32 pb-20 overflow-hidden z-10"
    >
      {/* Subtle ambient light gradient background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-gradient-to-tr from-[#00F0FF]/10 via-[#7000FF]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col justify-center">
        {/* Minimalist Studio Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-8 w-fit"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
          <span className="text-xs font-mono tracking-widest text-gray-300 uppercase">
            WEGOLAS — DIGITAL PRODUCTION STUDIO
          </span>
        </motion.div>

        {/* Hero Title */}
        <div className="overflow-hidden mb-4">
          <h1
            ref={titleLine1Ref}
            className="font-syne text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white leading-[0.95]"
          >
            SIVI AKICILIKTA
          </h1>
        </div>

        <div className="overflow-hidden mb-8">
          <h1
            ref={titleLine2Ref}
            className="font-syne text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00F0FF] to-gray-400 leading-[0.95]"
          >
            DİJİTAL DENEYİMLER<span className="text-[#00F0FF]">.</span>
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-gray-400 text-lg md:text-2xl max-w-3xl leading-relaxed mb-12 font-normal"
        >
          Cuberto kalitesinde akıcı WebGL tasarımları, yüksek performanslı web uygulamaları ve ödüllü mobil ürünler inşa eden minimalist dijital ajans.
        </motion.p>

        {/* Sleek CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => {
              sounds.playClick();
              onOpenEstimator();
            }}
            onMouseEnter={() => sounds.playHover()}
            data-cursor="BAŞLA"
            data-cursor-variant="project"
            className="px-8 py-4 rounded-full bg-white text-black font-syne font-extrabold text-sm md:text-base hover:bg-[#00F0FF] transition-all duration-300 shadow-xl flex items-center gap-3 group"
          >
            <Sparkles className="w-4 h-4 text-black group-hover:rotate-45 transition-transform" />
            <span>Projenizi Başlatın</span>
          </button>

          <button
            onClick={() => {
              sounds.playClick();
              onNavigateWorks();
            }}
            onMouseEnter={() => sounds.playHover()}
            data-cursor="KEŞFET"
            data-cursor-variant="hover"
            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-syne font-bold text-sm md:text-base hover:bg-white/15 transition-all duration-300 flex items-center gap-3"
          >
            <Play className="w-4 h-4 text-[#00F0FF] fill-current" />
            <span>İşlerimizi İnceleyin</span>
          </button>
        </motion.div>

        {/* Live Metrics Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="space-y-1">
            <div className="font-syne font-extrabold text-3xl md:text-4xl text-white flex items-center gap-1">
              <span>50</span><span className="text-[#00F0FF]">+</span>
            </div>
            <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Tamamlanan Proje</p>
          </div>

          <div className="space-y-1">
            <div className="font-syne font-extrabold text-3xl md:text-4xl text-white flex items-center gap-1">
              <span>99.8</span><span className="text-[#00F0FF]">%</span>
            </div>
            <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Müşteri Memnuniyeti</p>
          </div>

          <div className="space-y-1">
            <div className="font-syne font-extrabold text-3xl md:text-4xl text-white flex items-center gap-1">
              <span>4.2</span><span className="text-[#00F0FF]">x</span>
            </div>
            <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Ortalama ROI İvmesi</p>
          </div>

          <div className="space-y-1">
            <div className="font-syne font-extrabold text-3xl md:text-4xl text-white flex items-center gap-1">
              <span>60</span><span className="text-xs text-[#00F0FF]">FPS</span>
            </div>
            <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Pürüzsüz Render Hızı</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2 text-[11px] text-gray-500 font-mono uppercase tracking-widest animate-bounce">
        <span>Aşağı Kaydır</span>
        <ArrowDownRight className="w-4 h-4 text-[#00F0FF]" />
      </div>
    </section>
  );
};
