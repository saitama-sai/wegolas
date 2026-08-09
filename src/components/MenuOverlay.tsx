import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Globe, Share2, MessageCircle, Send } from 'lucide-react';
import { sounds } from './SoundEffects';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
  onOpenEstimator: () => void;
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenEstimator,
}) => {
  const pages = [
    { name: 'Home', id: 'home', num: '01' },
    { name: 'Services', id: 'services', num: '02' },
    { name: 'Projects', id: 'projects', num: '03' },
    { name: 'About', id: 'about', num: '04' },
    { name: 'Blog', id: 'blog', num: '05' },
  ];

  const handleLinkClick = (pageId: string) => {
    sounds.playClick();
    onClose();
    setTimeout(() => {
      onNavigate(pageId);
    }, 200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#0B0B0D]/98 backdrop-blur-2xl flex flex-col justify-between p-6 md:p-12 lg:p-16 overflow-y-auto"
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <span className="font-syne font-extrabold text-2xl tracking-tighter text-white">
              wegolas<span className="text-[#00F0FF]">.</span>
            </span>

            <button
              onClick={() => {
                sounds.playClick();
                onClose();
              }}
              onMouseEnter={() => sounds.playHover()}
              data-cursor="CLOSE"
              data-cursor-variant="close"
              aria-label="Close Menu"
              className="p-3 rounded-full bg-white/10 hover:bg-[#FF0055] text-white transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Navigation Links */}
          <div className="my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col gap-2 md:gap-4">
              {pages.map((page, idx) => (
                <motion.div
                  key={page.id}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + idx * 0.06, duration: 0.4 }}
                >
                  <button
                    onClick={() => handleLinkClick(page.id)}
                    onMouseEnter={() => sounds.playHover()}
                    data-cursor="GO"
                    data-cursor-variant="hover"
                    className="group flex items-center gap-4 text-left w-full"
                  >
                    <span className="text-xs font-mono text-[#00F0FF] opacity-60 group-hover:opacity-100 transition-opacity">
                      {page.num}
                    </span>
                    <span className="font-syne text-4xl sm:text-6xl md:text-7xl font-extrabold text-white group-hover:text-[#00F0FF] group-hover:translate-x-4 transition-all duration-300">
                      {page.name}
                    </span>
                    <ArrowUpRight className="w-8 h-8 text-[#00F0FF] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 hidden md:block" />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Side Card */}
            <div className="lg:col-span-4 bg-[#121216] p-8 rounded-[2rem] border border-white/10 flex flex-col gap-6">
              <div>
                <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-widest block mb-2">
                  START A PROJECT
                </span>
                <h3 className="font-syne text-2xl font-bold text-white">
                  Have an idea? Tell us about it.
                </h3>
                <p className="text-sm text-gray-400 mt-2 font-light">
                  We design and build digital products, brands and websites for companies ready to move beyond the ordinary.
                </p>
              </div>

              <button
                onClick={() => {
                  sounds.playClick();
                  onClose();
                  onOpenEstimator();
                }}
                onMouseEnter={() => sounds.playHover()}
                className="w-full py-4 rounded-2xl bg-white text-black font-syne font-bold text-xs uppercase tracking-wider hover:bg-[#00F0FF] transition-colors flex items-center justify-center gap-2"
              >
                <span>Estimate Cost & Timeline</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="space-y-2 pt-4 border-t border-white/10 text-xs font-mono text-gray-400">
                <div>MAIN OFFICE: 901 N Pitt Street Alexandria VA</div>
                <div>SECOND OFFICE: Na Perstyne 342/1 Prague</div>
                <div className="text-[#00F0FF]">info@wegolas.agency</div>
              </div>
            </div>
          </div>

          {/* Social Footer */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-gray-500 font-mono">
              © 2026 wegolas Digital Agency. All rights reserved.
            </span>

            <div className="flex items-center gap-6 text-gray-400">
              <a href="#" className="hover:text-[#00F0FF] transition-colors" aria-label="Website"><Globe className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#00F0FF] transition-colors" aria-label="Share"><Share2 className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#00F0FF] transition-colors" aria-label="Message"><MessageCircle className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#00F0FF] transition-colors" aria-label="Send"><Send className="w-5 h-5" /></a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
