import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { sounds } from '../components/SoundEffects';

export const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All Posts');

  const categories = ['All Posts', 'Design Course', 'Design Tips', 'Dev Source', 'Website Redesign'];

  const articles = [
    {
      id: 'redesign-process',
      title: 'Website Redesign Process: How We Plan, Design and Build Websites',
      category: 'Website Redesign',
      date: '8/01/2026',
      readTime: '6 min read',
      excerpt: 'A comprehensive guide into discovery, wireframing, WebGL shader integration, and full-cycle frontend development.'
    },
    {
      id: 'redesign-cost-2026',
      title: 'How Much Does a Website Redesign Cost in 2026?',
      category: 'Website Redesign',
      date: '7/29/2026',
      readTime: '8 min read',
      excerpt: 'Detailed breakdown of budget ranges, timeline frameworks, custom code vs templates, and ROI benchmarks.'
    },
    {
      id: 'ui-ux-frontend',
      title: 'How to Make UI/UX website // Frontend development',
      category: 'Dev Source',
      date: '10/23/2024',
      readTime: '10 min read',
      excerpt: 'Connecting Figma design tokens directly into React 19 components with GSAP ScrollTrigger timelines.'
    },
    {
      id: 'emotional-site',
      title: 'How to Cook an Emotional Site // Web Development',
      category: 'Design Tips',
      date: '3/15/2024',
      readTime: '5 min read',
      excerpt: 'Using micro-interactions, spring physics, and Web Audio API feedback to create memorable user connections.'
    },
    {
      id: 'mouse-follower',
      title: 'wegolas Mouse Follower: Physics and Inertia Implementation',
      category: 'Dev Source',
      date: '4/11/2022',
      readTime: '7 min read',
      excerpt: 'Behind the mathematics of custom magnetic follower cursors and CSS mix-blend-mode layer dynamics.'
    },
    {
      id: 'svg-distortion',
      title: 'Making Switch with SVG Distortion Effect',
      category: 'Design Tips',
      date: '12/13/2021',
      readTime: '4 min read',
      excerpt: 'Creating liquid toggle switches using SVG displacement maps and Three.js shader passes.'
    },
    {
      id: 'liquid-navigation',
      title: 'Liquid Navigation in After Effects and WebGL',
      category: 'Design Course',
      date: '12/1/2021',
      readTime: '9 min read',
      excerpt: 'Prototyping organic fluid navigation in After Effects and translating keyframes into smooth WebGL shaders.'
    }
  ];

  const filtered = activeCategory === 'All Posts'
    ? articles
    : articles.filter(a => a.category === activeCategory);

  return (
    <div className="space-y-32 pb-24 pt-36">
      {/* Header */}
      <section className="px-6 lg:px-16 max-w-7xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F0FF] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>INSIGHTS & ARTICLES</span>
        </div>
        <h1 className="font-syne text-5xl sm:text-7xl md:text-8xl font-extrabold text-white tracking-tighter">
          Blog<span className="text-[#00F0FF]">.</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-2xl max-w-2xl font-light">
          News and insights on design, frontend development, and digital product strategy.
        </p>

        {/* Categories */}
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

      {/* Articles Grid */}
      <section className="px-6 lg:px-16 max-w-7xl mx-auto space-y-8">
        {filtered.map((art) => (
          <article
            key={art.id}
            onMouseEnter={() => sounds.playHover()}
            data-cursor="READ"
            className="p-8 md:p-12 rounded-[2rem] bg-[#121216] border border-white/10 hover:border-white/25 transition-all space-y-4 group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F0FF]">
                  {art.category}
                </span>
                <span className="text-xs font-mono text-gray-500">{art.date} — {art.readTime}</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#00F0FF] group-hover:text-black transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="font-syne text-2xl md:text-4xl font-extrabold text-white group-hover:text-[#00F0FF] transition-colors">
                {art.title}
              </h2>
              <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-4xl">
                {art.excerpt}
              </p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};
