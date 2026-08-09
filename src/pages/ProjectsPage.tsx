import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { sounds } from '../components/SoundEffects';

interface ProjectsPageProps {
  onSelectProject: (proj: any) => void;
  onOpenEstimator: () => void;
}

export const PROJECTS_DATA = [
  {
    id: 'find-real-estate',
    title: 'FIND real estate',
    category: 'Websites',
    client: 'FIND Global',
    year: '2026',
    tagline: 'Turning a complex cybersecurity & property product into a compelling storytelling experience.',
    summary: 'From brand identity to digital experience: The result is a connected digital ecosystem that helps people discover properties, explore FIND\'S services, connect with agents and navigate the real estate process with greater clarity and confidence.',
    challenge: 'Navigating property databases was traditionally slow, fragmented, and lacked clear visual hierarchy.',
    solution: 'Designed a unified search interface ("Find What Moves You", "Buy Sell Rent", "Designer around how people search") with verified agent badges and instant filter responses.',
    impact: 'Increased user conversion by 310% with full-cycle deployment.',
    techStack: ['WebGL', 'React 19', 'GSAP ScrollTrigger', 'Three.js', 'Lenis'],
    gradient: 'bg-gradient-to-tr from-[#16161D] via-[#1C1C26] to-[#0D0D10]',
    stats: [
      { label: 'TEAM SIZE', value: '10+ EXPERTS' },
      { label: 'AUDIENCES', value: 'Buyers, sellers, renters and agents' },
      { label: 'FULL-CYCLE EXECUTION', value: 'Branding, strategy, deployment & migration' },
      { label: 'CONTENT', value: 'Property search, services and resources' }
    ]
  },
  {
    id: 'punto-pago',
    title: 'Punto Pago',
    category: 'Applications',
    client: 'Punto Ecosystem',
    year: '2025',
    tagline: 'Building a connected ecosystem where discovering, learning and buying wine & digital assets feels effortless.',
    summary: 'A seamless mobile app and web platform connecting consumers with regional suppliers through real-time inventory and interactive WebGL tasting guides.',
    challenge: 'Wine buying interfaces were overly complex and failed to educate users interactively.',
    solution: 'Engineered an intuitive mobile application with interactive flavor profiles, instant checkout, and personalized recommendations.',
    impact: 'Over 250,000 active app users within the first 6 months of launch.',
    techStack: ['React Native', 'Node.js', 'WebGL Canvas', 'Tailwind CSS'],
    gradient: 'bg-gradient-to-tr from-[#1A1822] via-[#201C2B] to-[#0D0D10]',
    stats: [
      { label: 'TEAM SIZE', value: '8 EXPERTS' },
      { label: 'PLATFORMS', value: 'iOS, Android & Web' },
      { label: 'USER RATING', value: '4.9 / 5.0' }
    ]
  },
  {
    id: 'tradingview-brand',
    title: 'TradingView Identity',
    category: 'Branding',
    client: 'TradingView Inc.',
    year: '2026',
    tagline: 'Elevating financial charting for millions of global traders worldwide.',
    summary: 'Full brand guidelines, custom icon typography systems, and interactive landing page design guidelines.',
    challenge: 'Maintaining brand consistency across diverse desktop, web, and mobile app platforms.',
    solution: 'Created a modular design system and unified vector guidelines.',
    impact: 'Adopted by 50M+ active traders globally.',
    techStack: ['Brand Strategy', 'Design Systems', '3D Asset Creation'],
    gradient: 'bg-gradient-to-tr from-[#151B22] via-[#1A222B] to-[#0D0D10]',
    stats: [
      { label: 'GLOBAL AUDIENCE', value: '50M+ Traders' },
      { label: 'SYSTEM COMPONENTS', value: '1,200+ Assets' }
    ]
  }
];

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Projects');

  const categories = ['All Projects', 'Websites', 'Applications', 'Branding'];

  const filtered = activeCategory === 'All Projects'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  return (
    <div className="space-y-32 pb-24 pt-36 font-sans">
      {/* Header */}
      <section className="px-6 lg:px-16 max-w-7xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F0FF] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PORTFOLIO</span>
        </div>
        <h1 className="font-syne text-5xl sm:text-7xl md:text-8xl font-extrabold text-white tracking-tighter">
          Our <span className="text-[#00F0FF]">projects.</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-2xl max-w-2xl font-light">
          We help bring ideas to life and create digital products that work.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 pt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sounds.playClick();
                setActiveCategory(cat);
              }}
              onMouseEnter={() => sounds.playHover()}
              data-cursor="FILTER"
              className={`px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-white text-black font-bold'
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects List */}
      <section className="px-6 lg:px-16 max-w-7xl mx-auto space-y-12">
        {filtered.map((proj) => (
          <div
            key={proj.id}
            onClick={() => {
              sounds.playClick();
              onSelectProject(proj);
            }}
            onMouseEnter={() => sounds.playHover()}
            data-cursor="VIEW CASE"
            data-cursor-variant="project"
            className="cursor-pointer p-8 md:p-14 rounded-[2.5rem] bg-[#121216] border border-white/10 hover:border-white/30 transition-all space-y-6 group"
          >
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1 rounded-full bg-white/10 text-xs font-mono uppercase text-gray-300">
                {proj.category} — {proj.year}
              </span>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#00F0FF] group-hover:text-black transition-colors">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="font-syne text-4xl sm:text-6xl font-extrabold text-white group-hover:text-[#00F0FF] transition-colors">
                {proj.title}
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl font-light">
                {proj.tagline}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
              <span>Client: {proj.client}</span>
              <span className="text-[#00F0FF] underline">Explore Case Study →</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
