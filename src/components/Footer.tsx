import React from 'react';
import { ArrowUp, Globe, Share2, MessageCircle, Send } from 'lucide-react';
import { sounds } from './SoundEffects';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black text-white z-10 overflow-hidden font-sans">
      {/* 1. CTA Banner (Screenshot 8 - Dark Gray Box with Triangle Shader & Underlined CTA) */}
      <section className="bg-[#141416] py-32 px-6 lg:px-16 text-center border-t border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <h2 className="font-syne text-5xl sm:text-7xl md:text-8xl font-extrabold text-white tracking-tighter leading-tight">
            Have an idea? <br />
            <u className="decoration-white underline-offset-8">Tell us about it</u>
          </h2>
        </div>
      </section>

      {/* 2. Black Footer Info Bar (Screenshot 8) */}
      <section className="bg-black pt-20 pb-12 px-6 lg:px-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Pills & Offices */}
            <div className="md:col-span-8 space-y-10">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="mailto:info@wegolas.agency"
                  onMouseEnter={() => sounds.playHover()}
                  className="px-6 py-3 rounded-full border border-white/40 text-white font-syne font-bold text-sm hover:bg-white hover:text-black transition-colors"
                >
                  info@wegolas.agency
                </a>
                <a
                  href="tel:+13015499309"
                  onMouseEnter={() => sounds.playHover()}
                  className="px-6 py-3 rounded-full border border-white/40 text-white font-syne font-bold text-sm hover:bg-white hover:text-black transition-colors"
                >
                  +1 301 549 9309
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs font-mono text-gray-400">
                <div className="space-y-1">
                  <span className="text-gray-500 uppercase block">MAIN OFFICE</span>
                  <p className="text-white font-bold text-sm leading-snug">
                    901 N Pitt Street <br />
                    Alexandria VA, 22314
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-gray-500 uppercase block">SECOND OFFICE</span>
                  <p className="text-white font-bold text-sm leading-snug">
                    Na Perstyne 342/1 <br />
                    11000 Prague
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Navigation Links */}
            <div className="md:col-span-4 grid grid-cols-2 gap-6 text-sm font-syne font-bold">
              <div className="space-y-3">
                <div><button onClick={() => { sounds.playClick(); onNavigate('services'); }} className="hover:text-[#00F0FF] transition-colors">Services</button></div>
                <div><button onClick={() => { sounds.playClick(); onNavigate('projects'); }} className="hover:text-[#00F0FF] transition-colors">Projects</button></div>
                <div><button onClick={() => { sounds.playClick(); onNavigate('about'); }} className="hover:text-[#00F0FF] transition-colors">About</button></div>
              </div>
              <div className="space-y-3">
                <div><button onClick={() => { sounds.playClick(); onNavigate('blog'); }} className="hover:text-[#00F0FF] transition-colors">Blog</button></div>
                <div><button onClick={() => { sounds.playClick(); onNavigate('about'); }} className="hover:text-[#00F0FF] transition-colors">Workflow</button></div>
                <div><button onClick={() => { sounds.playClick(); onNavigate('home'); }} className="hover:text-[#00F0FF] transition-colors">Contacts</button></div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Social Icons Bar (Screenshot 8) */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
              <span className="text-white font-semibold">Privacy Policy</span>
              <span>2026, wegolas</span>
            </div>

            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors" aria-label="Globe"><Globe className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors" aria-label="Share"><Share2 className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors" aria-label="Message"><MessageCircle className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors" aria-label="Send"><Send className="w-4 h-4" /></a>

              <button
                onClick={scrollToTop}
                onMouseEnter={() => sounds.playHover()}
                data-cursor="TOP"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-[#00F0FF] hover:text-black transition-colors ml-2"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
