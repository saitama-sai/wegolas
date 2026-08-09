import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { type ProjectData, ProjectModal } from './ProjectModal';
import { sounds } from './SoundEffects';

interface WorksProps {
  onOpenEstimator: () => void;
}

const PROJECTS: ProjectData[] = [
  {
    id: 'neo-fintech',
    title: 'NEO-FINTECH AI',
    category: 'Yapay Zeka & SaaS',
    client: 'Apex Capital Inc.',
    year: '2026',
    summary: 'Özel makine öğrenimi modelleriyle çalışan, anlık WebGL ısı haritalarına sahip dijital yatırım bankacılığı platformu.',
    challenge: 'Geleneksel borsa arayüzleri çok yavaş, karmakarışık ve mobil cihazlarda kesikli deneyim sunuyordu.',
    solution: 'WebGL Three.js GPU hızlandırmalı grafik kütüphaneleri ve GSAP animasyon sistemiyle salisesinde veri işleyen arayüz inşa ettik.',
    impact: 'Kullanıcı kalıcılık oranında +%340 artış ve 1.2 milyar $ işlem hacmi elde edildi.',
    techStack: ['WebGL', 'GSAP ScrollTrigger', 'React 19', 'Three.js', 'Tailwind CSS'],
    gradient: 'bg-gradient-to-tr from-[#16161D] via-[#1C1C26] to-[#0D0D10]',
    stats: [
      { label: 'İşlem Hacmi', value: '$1.2B+' },
      { label: 'Yüklenme Süresi', value: '0.38s' },
      { label: 'Awwwards Skoru', value: '8.95' },
    ]
  },
  {
    id: 'aura-luxury',
    title: 'AURA LUXURY PARIS',
    category: 'WebGL & 3D',
    client: 'Maison d\'Aura Paris',
    year: '2025',
    summary: 'Fransız lüks mücevher evi için 3 boyutlu ürün özelleştiricili ve akıcı sıvı geçişli mağaza deneyimi.',
    challenge: 'Fiziksel mücevherlerin ışık kırıntılarını ve dokusunu tarayıcı ortamında gerçek zamanlı yansıtmak son derece zordu.',
    solution: 'Özel GLSL pürüzsüzlük shader kodları ve Three.js raycasting ile ürünün 360 derece dokunsal 3D önizlemesini hazırladık.',
    impact: 'Çevrimiçi mücevher siparişlerinde +%280 satış ivmesi sağlandı.',
    techStack: ['Three.js GLSL Shaders', 'React Three Fiber', 'Lenis Scroll', 'Shopify Plus'],
    gradient: 'bg-gradient-to-tr from-[#1A1822] via-[#201C2B] to-[#0D0D10]',
    stats: [
      { label: 'Satış Artışı', value: '+280%' },
      { label: 'Ödül', value: 'FWA of the Day' },
      { label: '3D Modeller', value: '60 FPS' },
    ]
  },
  {
    id: 'hyperflow-saas',
    title: 'HYPERFLOW SAAS',
    category: 'Mobil Uygulamalar',
    client: 'Hyperflow Labs USA',
    year: '2026',
    summary: 'Kreatif ekipler için yapay zeka destekli, eşzamanlı tuval ve proje yönetim ekosistemi.',
    challenge: 'Aynı anda 50 kullanıcının ortak bir çizim tuvalinde çalışırken kare hızının 60 FPS altına düşmesi sorunu.',
    solution: 'Framer Motion spring fiziği ve özel Canvas katmanı ile milisaniyelik senkronizasyon protokolü entegre ettik.',
    impact: 'Dünya çapında 450,000 aktif kreatif tasarımcı tarafından tercih edilmektedir.',
    techStack: ['React Native', 'WebSockets', 'Canvas API', 'GSAP', 'Tailwind CSS'],
    gradient: 'bg-gradient-to-tr from-[#151B22] via-[#1A222B] to-[#0D0D10]',
    stats: [
      { label: 'Aktif Kullanıcı', value: '450K+' },
      { label: 'Çalışma Süresi', value: '99.99%' },
      { label: 'Tasarım Skoru', value: '9.8/10' },
    ]
  },
  {
    id: 'cyberspace-protocol',
    title: 'CYBERSPACE WEB3',
    category: 'WebGL & 3D',
    client: 'Cyberspace DAO',
    year: '2025',
    summary: 'Etkileşimli 3D siber dünya parçacık evrenine sahip Web3 likit stake platformu.',
    challenge: 'Karmaşık Web3 cüzdan bağlama süreçleri kullanıcıları siteden soğutuyordu.',
    solution: 'Tek tıkla cüzdan doğrulama, interaktif sıvı buton dalgalanmaları ve akıcı sinematik geçişler tasarlandı.',
    impact: 'İlk haftada 80,000 aktif cüzdan bağlantısı gerçekleştirildi.',
    techStack: ['Solidity', 'Three.js Shaders', 'GSAP', 'React 19', 'Tailwind CSS'],
    gradient: 'bg-gradient-to-tr from-[#1C1822] via-[#241A29] to-[#0D0D10]',
    stats: [
      { label: 'Bağlı Cüzdan', value: '80,000+' },
      { label: 'Kilitli Değer', value: '$45M' },
      { label: 'CSSDA Ödülü', value: 'Kazandı' },
    ]
  }
];

export const Works: React.FC<WorksProps> = ({ onOpenEstimator }) => {
  const [activeFilter, setActiveFilter] = useState<string>('Hepsi');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const categories = ['Hepsi', 'WebGL & 3D', 'Yapay Zeka & SaaS', 'Mobil Uygulamalar'];

  const filteredProjects = activeFilter === 'Hepsi'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="works" className="relative py-32 px-6 lg:px-16 z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F0FF] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SEÇKİN PORTFOLYO</span>
            </div>
            <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tighter">
              SEÇİLMİŞ <span className="text-[#00F0FF]">VAKALAR</span>
            </h2>
          </div>

          {/* Minimalist Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  sounds.playClick();
                  setActiveFilter(cat);
                }}
                onMouseEnter={() => sounds.playHover()}
                data-cursor="FİLTRE"
                data-cursor-variant="hover"
                className={`px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-white text-black font-bold shadow-md'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => {
                  sounds.playClick();
                  setSelectedProject(project);
                }}
                onMouseEnter={() => sounds.playHover()}
                data-cursor="İNCELE"
                data-cursor-variant="project"
                className="group cursor-pointer rounded-[2rem] bg-[#121216] border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Visual Header */}
                <div className={`h-80 md:h-96 ${project.gradient} relative p-8 flex flex-col justify-between overflow-hidden group-hover:scale-[1.01] transition-transform duration-700`}>
                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-gray-200 font-mono text-xs uppercase tracking-wider border border-white/10">
                      {project.category}
                    </span>
                    <span className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                  </div>

                  <div className="z-10">
                    <h3 className="font-syne text-3xl md:text-5xl font-extrabold text-white tracking-tight group-hover:text-[#00F0FF] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-2 font-light line-clamp-2">
                      {project.summary}
                    </p>
                  </div>
                </div>

                {/* Card Footer Info */}
                <div className="p-6 md:p-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 bg-[#121216]">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-gray-500 uppercase">Müşteri:</span>
                    <span className="text-xs font-semibold text-gray-200">{project.client}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.techStack.slice(0, 3).map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] font-mono text-gray-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Estimate Banner */}
        <div className="p-8 md:p-12 rounded-[2rem] bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-syne text-2xl md:text-3xl font-extrabold text-white">
              Cuberto Standartlarında Bir Proje İstiyorum
            </h3>
            <p className="text-gray-400 text-sm">
              Gereksiz karmaşıklıktan uzak, sade, şık ve yüksek dönüşümlü dijital ürününüzü hemen planlayın.
            </p>
          </div>

          <button
            onClick={() => {
              sounds.playClick();
              onOpenEstimator();
            }}
            onMouseEnter={() => sounds.playHover()}
            data-cursor="HESAPLA"
            className="px-8 py-4 rounded-full bg-white text-black font-syne font-extrabold text-xs uppercase tracking-wider hover:bg-[#00F0FF] transition-colors duration-300 shadow-md whitespace-nowrap"
          >
            Fiyat & Süre Tahmini Alın
          </button>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenEstimator={onOpenEstimator}
      />
    </section>
  );
};
