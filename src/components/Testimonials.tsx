import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, CheckCircle } from 'lucide-react';
import { sounds } from './SoundEffects';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      quote: "wegolas ile çalışmak şirketimizin çehresini değiştirdi. Sitemizdeki akıcı WebGL geçişleri ve Lenis smooth scroll sayesinde müşteri dönüşüm oranımız 4 katına çıktı!",
      author: "Alexander Vance",
      title: "CTO, Apex Capital Inc.",
      location: "Londra",
      stars: 5,
    },
    {
      quote: "Cuberto tarzında sade ve şık bir site istiyorduk. wegolas hayal ettiğimizin de ötesinde, pürüzsüz çalışan bir şaheser teslim etti.",
      author: "Camille Dupont",
      title: "Kreatif Direktör, Maison d'Aura",
      location: "Paris",
      stars: 5,
    },
    {
      quote: "Sert tarayıcı kaydırmasından kurtulup yağ gibi akan animasyonlarla tanıştık. Yapay zeka ve WebGL entegrasyonu son derece sade ve şık.",
      author: "Marcus Lindqvist",
      title: "Kurucu, Hyperflow Labs",
      location: "Stockholm",
      stars: 5,
    },
  ];

  const awards = [
    { title: 'AWWWARDS', badge: 'Site of the Day Nominee' },
    { title: 'FWA OF THE DAY', badge: 'Innovative WebGL' },
    { title: 'CSSDESIGN AWARDS', badge: 'Best UI / UX' },
    { title: 'WEBBY AWARDS', badge: 'Honoree Candidate' },
  ];

  return (
    <section id="testimonials" className="relative py-32 px-6 lg:px-16 z-10 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F0FF] uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>MÜŞTERİ & ÖDÜL DERECELERİ</span>
          </div>
          <h2 className="font-syne text-4xl sm:text-6xl font-extrabold text-white tracking-tighter">
            YÜKSEK <span className="text-[#00F0FF]">ÖVGÜLER</span>
          </h2>
        </div>

        {/* Awards Badges Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {awards.map((awd) => (
            <div
              key={awd.title}
              onMouseEnter={() => sounds.playHover()}
              className="p-6 rounded-2xl bg-[#121216] border border-white/10 hover:border-white/20 text-center space-y-1 transition-colors"
            >
              <div className="font-syne font-extrabold text-base text-white tracking-wider">
                {awd.title}
              </div>
              <p className="text-xs text-[#00F0FF] font-mono">{awd.badge}</p>
            </div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div
              key={rev.author}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              onMouseEnter={() => sounds.playHover()}
              className="p-8 rounded-[2rem] bg-[#121216] border border-white/10 flex flex-col justify-between space-y-6 hover:border-white/20 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#00F0FF]">
                  {[...Array(rev.stars)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed italic font-light">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-syne font-bold text-white text-base flex items-center gap-1.5">
                    <span>{rev.author}</span>
                    <CheckCircle className="w-4 h-4 text-[#00F0FF]" />
                  </h4>
                  <p className="text-xs text-gray-500 font-mono">{rev.title} — {rev.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
