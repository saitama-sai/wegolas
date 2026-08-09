import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ShieldCheck, Zap, Layers } from 'lucide-react';
import { sounds } from './SoundEffects';

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: string;
  techStack: string[];
  gradient: string;
  stats: { label: string; value: string }[];
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onOpenEstimator: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenEstimator }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#0A0A0E] border border-white/15 rounded-3xl overflow-hidden shadow-2xl my-auto"
        >
          {/* Header Banner */}
          <div className={`p-8 md:p-12 ${project.gradient} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            
            <button
              onClick={() => {
                sounds.playClick();
                onClose();
              }}
              onMouseEnter={() => sounds.playHover()}
              data-cursor="KAPAT"
              data-cursor-variant="close"
              aria-label="Kapat"
              className="absolute top-6 right-6 p-3 rounded-full bg-black/50 hover:bg-[#FF0055] text-white transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-white/20 text-white font-mono text-xs uppercase tracking-wider font-bold">
                  {project.category}
                </span>
                <span className="text-gray-300 font-mono text-xs">{project.year}</span>
              </div>

              <h2 className="font-syne text-4xl md:text-6xl font-extrabold text-white">
                {project.title}
              </h2>
              <p className="text-gray-200 text-base md:text-lg max-w-2xl font-light">
                {project.summary}
              </p>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-8 md:p-12 space-y-8">
            {/* Stats Highlight Bar */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              {project.stats.map((st) => (
                <div key={st.label} className="space-y-1">
                  <span className="font-syne text-2xl md:text-3xl font-extrabold text-[#00F0FF]">
                    {st.value}
                  </span>
                  <p className="text-xs text-gray-400 font-mono uppercase">{st.label}</p>
                </div>
              ))}
            </div>

            {/* Challenge vs Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#FF0055] font-syne font-bold text-lg">
                  <Zap className="w-5 h-5" />
                  <h3>Problem & Zorluk</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#00F0FF] font-syne font-bold text-lg">
                  <ShieldCheck className="w-5 h-5" />
                  <h3>wegolas Çözümü</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#7000FF] font-syne font-bold text-sm uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>Kullanılan Teknolojiler</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => {
                  sounds.playClick();
                  onClose();
                  onOpenEstimator();
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#7000FF] font-syne font-bold text-sm text-black hover:opacity-90 transition-opacity"
              >
                Benzer Bir Proje İste
              </button>

              <button
                onClick={() => {
                  sounds.playClick();
                  alert(`"${project.title}" canlı demo bağlantısı simülasyonu aktif!`);
                }}
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#00F0FF] transition-colors"
              >
                <span>Canlı Demoyu İncele</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
