import React from 'react';
import { ArrowUpRight, Sparkles, Clock, Zap, Shield, Layers } from 'lucide-react';
import { sounds } from '../components/SoundEffects';

interface ServicesPageProps {
  onOpenEstimator: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenEstimator }) => {
  const mainServices = [
    {
      id: 'websites-platforms',
      title: 'WEBSITES AND PLATFORMS',
      desc: 'In our team, developers work alongside designers. This is crucial in creating a fast and responsive website that would excite the audience.',
      tags: ['Frontend & Backend', 'WebGL Animations', 'Custom CMS', 'SEO Optimization']
    },
    {
      id: 'mobile-applications',
      title: 'MOBILE APPLICATIONS',
      desc: 'wegolas doesn\'t do cookie-cutter solutions. Every mobile app involves stages of target audience research and prototype testing. The result? A product that\'s perfectly suited to your users.',
      tags: ['iOS & Android', 'React Native', 'UI/UX Prototyping', 'App Store Launch']
    },
    {
      id: 'strategy-branding',
      title: 'STRATEGY AND BRANDING',
      desc: 'We identify your brand by developing a logo, corporate identity, user manuals, any mockups, and souvenir products. Whatever it takes to get your brand noticed.',
      tags: ['Logo & Visual Identity', 'Brand Guidelines', 'Design Systems', '3D Assets']
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'TIME ZONES AIN\'T NO THING',
      desc: 'Wherever you are in the world, you\'ll feel like we\'re right around the corner. With 12+ years of experience, our business processes are seamless, transparent, and asynchronous.'
    },
    {
      icon: Zap,
      title: 'IMPOSSIBLE? WE\'RE ON IT',
      desc: '\'Impossible\' simply does not exist in our vocabulary. We develop products exactly as they were at the design stage, no simplifications, no shortcuts, no BS.'
    },
    {
      icon: Shield,
      title: 'FLEXIBLE WORK TERMS',
      desc: 'Just like we stick to a fixed budget, we stay within a set Time and Materials framework. Whatever terms we agree to will depend on your project needs.'
    },
    {
      icon: Layers,
      title: 'FULL SPECTRUM OF SERVICES',
      desc: 'Any solution your business needs, we\'re on it: UI/UX design, logo creation, mobile app design, frontend and backend development, technical support.'
    }
  ];

  return (
    <div className="space-y-32 pb-24 pt-36 font-sans">
      {/* Hero Entrance Header */}
      <section className="px-6 lg:px-16 max-w-7xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F0FF] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>OUR SERVICES</span>
        </div>
        <h1 className="font-syne text-5xl sm:text-7xl md:text-8xl font-extrabold text-white tracking-tighter leading-tight">
          Services & <br />
          <span className="text-[#00F0FF]">Capabilities.</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light">
          From initial discovery and brand identity to high-scale WebGL engineering and mobile app deployment.
        </p>
      </section>

      {/* Main 3 Service Pillars */}
      <section className="px-6 lg:px-16 max-w-7xl mx-auto space-y-12">
        {mainServices.map((srv, idx) => (
          <div
            key={srv.id}
            onMouseEnter={() => sounds.playHover()}
            className="p-8 md:p-14 rounded-[2.5rem] bg-[#121216] border border-white/10 hover:border-white/25 transition-all space-y-8 group"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <span className="font-mono text-sm text-[#00F0FF] uppercase tracking-widest font-bold">
                0{idx + 1} / SERVICE
              </span>
              <div className="flex flex-wrap gap-2">
                {srv.tags.map(t => (
                  <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-syne text-3xl sm:text-5xl font-extrabold text-white group-hover:text-[#00F0FF] transition-colors">
                {srv.title}
              </h2>
              <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed font-light">
                {srv.desc}
              </p>
            </div>

            <button
              onClick={() => {
                sounds.playClick();
                onOpenEstimator();
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-syne font-bold text-xs uppercase tracking-wider hover:bg-[#00F0FF] transition-colors"
            >
              <span>Read More & Get Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </section>

      {/* Benefits of Working (Siyah Arkaplan) */}
      <section className="px-6 lg:px-16 max-w-7xl mx-auto space-y-16">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00F0FF]">
            WHY WORK WITH WEGOLAS
          </span>
          <h2 className="font-syne text-4xl sm:text-6xl font-extrabold text-white tracking-tighter">
            Benefits of working
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                onMouseEnter={() => sounds.playHover()}
                className="p-8 md:p-12 rounded-[2rem] bg-[#121216] border border-white/10 hover:border-white/20 transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00F0FF]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-syne text-xl font-extrabold text-white">
                  {b.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
