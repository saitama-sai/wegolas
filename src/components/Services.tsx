import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Cpu, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { sounds } from './SoundEffects';

interface ServicesProps {
  onOpenEstimator: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenEstimator }) => {
  const services = [
    {
      icon: Code2,
      num: '01',
      title: 'WebGL & Sıvı Web Geliştirme',
      subtitle: 'Lenis Smooth Scroll & GSAP ScrollTrigger',
      description: 'Tarayıcı varsayılanlarını aşan, pürüzsüz kaydırma ve harf harf beliren tipografi animasyonlarıyla Cuberto kalitesinde akıcı web siteleri.',
      features: [
        'Lenis Smooth Inertia Scroll',
        'GSAP ScrollTrigger Timeline Animasyonları',
        'Three.js / GLSL Dokusal Sıvı Efektleri',
        'Lighthouse 95+ SEO & Performans',
      ],
    },
    {
      icon: Smartphone,
      num: '02',
      title: 'Özel Mobil & Web Uygulamaları',
      subtitle: 'React & React Native Ekosistemi',
      description: 'Markanız için yüksek performanslı web portalları, özel SaaS sistemleri ve iOS / Android mobil uygulamalarını modern mimariyle sıfırdan kuruyoruz.',
      features: [
        'React 19 & Next.js Sunucu Mimarisi',
        'Cross-Platform iOS & Android Mobil',
        'Yüksek Hacimli Veri İşleme & WebSockets',
        'Sıfır Gecikmeli UI Bileşenleri',
      ],
    },
    {
      icon: Cpu,
      num: '03',
      title: 'Yapay Zeka & Otonom Sistemler',
      subtitle: 'İş Süreçlerine Özel LLM Asistanları',
      description: 'Yapay zeka akışlarını web ve mobil uygulamalarınıza bağlayarak müşterilerinize 7/24 kişiselleştirilmiş asistanlar ve otonom iş akışları sunuyoruz.',
      features: [
        'Özel Yapay Zeka LLM Asistanları',
        'Otomatik Müşteri Kazanım Hunileri',
        'Veri Analitiği & Tahminleme Algoritmaları',
        'API Entegrasyon Güvenliği',
      ],
    },
    {
      icon: Sparkles,
      num: '04',
      title: 'Mikro Etkileşimler & Ses Tasarımı',
      subtitle: 'Framer Motion Spring Fizikleri',
      description: 'İmleci takip eden magnetik butonlar, esnek yay animasyonları ve tıklama anında kulağa hoş gelen mikron seviye Web Audio ses geribildirimleri.',
      features: [
        'Framer Motion Spring Fizikleri',
        'Özel Magnetik İmleç Dinamikleri',
        'Web Audio Sentetik Ses Efektleri',
        'Mobil Dokunmatik Haptic Uyum',
      ],
    },
  ];

  return (
    <section id="services" className="relative py-32 px-6 lg:px-16 z-10 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F0FF] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KAPASİTELERİMİZ</span>
          </div>
          <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tighter">
            UZMANLIK <span className="text-[#00F0FF]">ALANLARIMIZ</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            Gereksiz karmaşıklıktan uzak, sade, şık ve mühendislik kalitesi yüksek dijital çözümler üretiyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={srv.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onMouseEnter={() => sounds.playHover()}
                data-cursor="DETAY"
                data-cursor-variant="hover"
                className="p-8 md:p-12 rounded-[2rem] bg-[#121216] border border-white/10 hover:border-white/25 transition-all duration-500 flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  {/* Top Num & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#00F0FF] group-hover:text-black transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xl font-bold text-gray-600 group-hover:text-white transition-colors">
                      {srv.num}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <h3 className="font-syne text-2xl md:text-3xl font-extrabold text-white group-hover:text-[#00F0FF] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                      {srv.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                    {srv.description}
                  </p>

                  {/* Feature Checkmarks */}
                  <div className="space-y-2 pt-4 border-t border-white/10">
                    {srv.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5 text-xs md:text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 flex items-center justify-between">
                  <button
                    onClick={() => {
                      sounds.playClick();
                      onOpenEstimator();
                    }}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white uppercase tracking-wider group-hover:text-[#00F0FF] transition-colors"
                  >
                    <span>Teklif Alın</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
