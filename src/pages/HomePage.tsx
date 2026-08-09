import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Play, ArrowUpRight, Plus, X, Star, Award, Globe, Briefcase, RefreshCw } from 'lucide-react';
import { sounds } from '../components/SoundEffects';
import { useLanguage } from '../context/LanguageContext';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenEstimator?: () => void;
  onSelectProject: (proj: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProject }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { t } = useLanguage();

  const clientLogos = [
    { name: 'mapbox', font: 'font-sans font-extrabold tracking-tight' },
    { name: 'CISCO', font: 'font-mono font-bold tracking-widest' },
    { name: 'Spark', font: 'font-syne font-bold' },
    { name: 'TradingView', font: 'font-sans font-bold' },
    { name: 'SCA', font: 'font-mono font-black' },
    { name: 'punto pago', font: 'font-syne font-extrabold' },
    { name: 'FlipaClip', font: 'font-sans font-bold italic' },
    { name: 'Bank al Etihad', font: 'font-serif font-bold' },
    { name: 'Raiffeisen BANK', font: 'font-sans font-bold' },
    { name: 'IKEA', font: 'font-mono font-black text-xl' },
    { name: 'McDonald\'s', font: 'font-serif font-bold italic' },
    { name: 'HOUSING.com', font: 'font-sans font-extrabold' },
  ];

  const whatWeDoList = [
    {
      num: '01',
      title: 'Digital Product Design',
      desc: 'We design digital products from early concepts to scalable systems. Combining product strategy, UX and interface design, we help startups and established companies turn complex ideas into clear, usable experiences.',
      svgType: 'bars',
      bgColor: 'bg-[#0a0a0c]',
    },
    {
      num: '02',
      title: 'Web Design & Development',
      desc: 'We create marketing websites that explain products clearly, strengthen brands and support business growth. From structure and content to responsive design and development, every website is built around a specific goal.',
      svgType: 'triangles',
      bgColor: 'bg-[#0d0d12]',
    },
    {
      num: '03',
      title: 'UX Research & UI Design',
      desc: 'We uncover how people use digital products and where their experience breaks down. Through research, user flows, wireframes and prototypes, we improve usability before moving into interface design.',
      svgType: 'arcs',
      bgColor: 'bg-[#101016]',
    },
    {
      num: '04',
      title: 'Brand Identity',
      desc: 'We create visual identities that give companies a distinct and consistent presence. From typography and color to digital guidelines and campaign assets, every element is designed to work as one system.',
      svgType: 'rects',
      bgColor: 'bg-[#0a0a0d]',
    },
    {
      num: '05',
      title: 'Creative Development',
      desc: 'We bring ambitious digital concepts to life through motion, 3D and interactive development. Using technologies such as WebGL, GSAP and modern JavaScript frameworks, we build experiences that standard templates cannot deliver.',
      svgType: 'hex',
      bgColor: 'bg-[#050508]',
    },
  ];

  const renderCardSvg = (type: string) => {
    switch (type) {
      case 'bars':
        return (
          <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
            <defs>
              <linearGradient id="barGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <rect x="60" y="20" width="40" height="180" fill="url(#barGrad)" opacity="0.2" />
            <rect x="110" y="20" width="40" height="180" fill="url(#barGrad)" opacity="0.4" />
            <rect x="160" y="20" width="40" height="180" fill="url(#barGrad)" opacity="0.6" />
            <rect x="210" y="20" width="40" height="180" fill="url(#barGrad)" opacity="0.8" />
            <rect x="260" y="20" width="40" height="180" fill="url(#barGrad)" opacity="1.0" />
          </svg>
        );
      case 'triangles':
        return (
          <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
            <defs>
              <linearGradient id="triGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <polygon points="150,10 10,200 290,200" fill="url(#triGrad)" opacity="0.18" />
            <polygon points="150,45 45,200 255,200" fill="url(#triGrad)" opacity="0.38" />
            <polygon points="150,80 80,200 220,200" fill="url(#triGrad)" opacity="0.6" />
            <polygon points="150,115 115,200 185,200" fill="url(#triGrad)" opacity="0.85" />
          </svg>
        );
      case 'arcs':
        return (
          <svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
            <defs>
              <linearGradient id="arcGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path d="M 0 150 A 150 150 0 0 1 300 150" fill="url(#arcGrad)" opacity="0.18" />
            <path d="M 35 150 A 115 115 0 0 1 265 150" fill="url(#arcGrad)" opacity="0.35" />
            <path d="M 70 150 A 80 80 0 0 1 230 150" fill="url(#arcGrad)" opacity="0.55" />
            <path d="M 105 150 A 45 45 0 0 1 195 150" fill="url(#arcGrad)" opacity="0.8" />
          </svg>
        );
      case 'rects':
        return (
          <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
            <defs>
              <linearGradient id="rectGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <rect x="20" y="30" width="260" height="200" rx="60" fill="url(#rectGrad)" opacity="0.18" />
            <rect x="55" y="65" width="190" height="170" rx="45" fill="url(#rectGrad)" opacity="0.4" />
            <rect x="90" y="100" width="120" height="140" rx="30" fill="url(#rectGrad)" opacity="0.65" />
          </svg>
        );
      case 'hex':
      default:
        return (
          <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
            <defs>
              <linearGradient id="hexGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <polygon points="150,15 285,85 285,200 15,200 15,85" fill="url(#hexGrad)" opacity="0.18" />
            <polygon points="150,55 245,105 245,200 55,200 55,105" fill="url(#hexGrad)" opacity="0.4" />
            <polygon points="150,95 205,125 205,200 95,200 95,125" fill="url(#hexGrad)" opacity="0.65" />
          </svg>
        );
    }
  };

  const selectedWorks = [
    {
      id: 'punto-pago',
      title: 'Punto Pago',
      category: 'Applications',
      client: 'Punto Ecosystem',
      year: '2025',
      summary: 'Building a connected ecosystem where discovering, learning and buying wine feels effortless',
      challenge: 'Wine selection interfaces were crowded and confusing for consumers.',
      solution: 'Engineered an intuitive mobile application with interactive flavor charts and 1-tap checkout.',
      impact: 'Over 250,000 active app users.',
      techStack: ['React Native', 'Node.js', 'WebGL', 'Tailwind CSS'],
      bgGradient: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-950',
      stats: [{ label: 'APP RATING', value: '4.9/5' }]
    },
    {
      id: 'find-real-estate',
      title: 'FIND real estate',
      category: 'Websites',
      client: 'FIND Global',
      year: '2026',
      summary: 'Turning a complex cybersecurity product into a compelling storytelling experience',
      challenge: 'Property search processes were fragmented across traditional slow portals.',
      solution: 'Built a connected digital ecosystem helping people discover properties and connect with agents.',
      impact: '+310% user engagement.',
      techStack: ['WebGL', 'React 19', 'GSAP', 'Three.js'],
      bgGradient: 'bg-gradient-to-br from-blue-900 via-sky-900 to-slate-950',
      stats: [{ label: 'TEAM SIZE', value: '10+' }]
    },
    {
      id: 'enterprise-ops',
      title: 'Enterprise Ops',
      category: 'Systems',
      client: 'Global Logistics Inc.',
      year: '2026',
      summary: 'Scalable design system for enterprise operations',
      challenge: 'Large supply chain operations lacked a cohesive interface system.',
      solution: 'Designed a zero-latency desktop and web dashboard component library.',
      impact: '99.99% uptime across global hubs.',
      techStack: ['React 19', 'TypeScript', 'Tailwind CSS'],
      bgGradient: 'bg-gradient-to-br from-neutral-900 via-zinc-800 to-black',
      stats: [{ label: 'SPEED', value: '0.2s' }]
    },
    {
      id: 'mobile-productivity',
      title: 'Flow Mobile',
      category: 'Applications',
      client: 'Flow Labs',
      year: '2026',
      summary: 'Turning an ambitious idea into a complete mobile product and brand from scratch',
      challenge: 'Managing daily tasks across multiple tools was causing cognitive fatigue.',
      solution: 'Created an all-in-one minimal mobile app with intuitive gestures and calendar sync.',
      impact: '450,000 active users.',
      techStack: ['React Native', 'Framer Motion', 'WebSockets'],
      bgGradient: 'bg-gradient-to-br from-[#121216] via-[#1A1A22] to-black',
      stats: [{ label: 'USERS', value: '450K+' }]
    },
    {
      id: 'artists-canvas',
      title: 'Artists Canvas',
      category: 'Creative App',
      client: 'ArtStudio Global',
      year: '2025',
      summary: 'Bringing the creativity of millions of artists into an intuitive canvas',
      challenge: 'Digital drawing software had steep learning curves for novice creators.',
      solution: 'Designed an elegant touch canvas with real-time vector rendering.',
      impact: 'Awarded App of the Day.',
      techStack: ['Canvas API', 'WebGL', 'React'],
      bgGradient: 'bg-gradient-to-br from-stone-900 via-neutral-900 to-black',
      stats: [{ label: 'DOWNLOADS', value: '1M+' }]
    },
    {
      id: 'landmark-experience',
      title: 'Landmark 3D',
      category: 'WebGL 3D',
      client: 'Metropolis Architecture',
      year: '2025',
      summary: 'Creating a digital experience worthy of one of the world\'s premier landmarks',
      challenge: 'Immersive architecture tours could not be rendered smoothly in standard mobile browsers.',
      solution: 'Built a 60 FPS Three.js spatial WebGL model with realistic lighting.',
      impact: 'Nominated for Awwwards Site of the Year.',
      techStack: ['Three.js', 'GLSL Shaders', 'GSAP'],
      bgGradient: 'bg-gradient-to-br from-emerald-950 via-slate-900 to-black',
      stats: [{ label: 'FPS', value: '60 FPS' }]
    }
  ];

  const clientQuotes = [
    {
      bgColor: 'bg-[#f5f4f8]',
      logo: 'zelt',
      logoFont: 'font-syne font-black text-xl text-black',
      quote: '"wegolas completed a rebranding of our company website zelt.app. The quality of the team\'s work exceeded my expectations, and since completion we have won a number of awards, including the Site of Day awwward."'
    },
    {
      bgColor: 'bg-[#eef7f5]',
      logo: ':: LoanPro',
      logoFont: 'font-mono font-bold text-lg text-emerald-950',
      quote: '"We worked with the wegolas team over a several month project on a complete website overhaul, that included new copy, design, and code. Several things stood out in our interaction with wegolas."'
    },
    {
      bgColor: 'bg-[#f2f4fa]',
      logo: 'Potion',
      logoFont: 'font-serif font-extrabold text-xl text-indigo-950',
      quote: '"wegolas was engaged in developing our website and additional marketing materials, including theming and various creative assignments. Their efforts were highly satisfactory, and we were impressed with the wegolas team\'s collaborative approach."'
    },
    {
      bgColor: 'bg-[#eef7f5]',
      logo: 'ooooo LIVESPOT',
      logoFont: 'font-mono font-black text-sm text-teal-950',
      quote: '"I\'d like to extend a heartfelt gratitude to the wegolas team for their exceptional support throughout the website development process. Your responsiveness to our requests has been invaluable, and we\'re thrilled with the end result."'
    },
    {
      bgColor: 'bg-[#eef7f5]',
      logo: 'SCA',
      logoFont: 'font-mono font-extrabold text-xl text-slate-900',
      quote: '"We had a great experience working with wegolas on our website redesign project. Their team brought a strong mix of creativity, technical skill and strategic thinking to the project."'
    }
  ];

  const insightsArticles = [
    {
      category: 'WEBSITE REDESIGN',
      title: 'Website Redesign Process: How We Plan, Design and Build Websites',
      date: '8/1/2026',
      bgGradient: 'bg-gradient-to-tr from-sky-200 via-blue-300 to-indigo-200',
      illustrationText: '3D BROWSER & ATTACHMENT'
    },
    {
      category: 'WEBSITE REDESIGN',
      title: 'How Much Does a Website Redesign Cost in 2026?',
      date: '7/29/2026',
      bgGradient: 'bg-gradient-to-tr from-purple-200 via-pink-300 to-amber-200',
      illustrationText: '3D BROWSER & GOLD COINS'
    },
    {
      category: 'DESIGN COURSE',
      title: 'How to Make UI/UX website // Frontend development',
      date: '10/23/2024',
      bgGradient: 'bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500',
      illustrationText: '3D WIZARD MASCOT'
    }
  ];

  const faqs = [
    {
      q: 'What does the typical website redesign or revamp process look like?',
      a: 'Every project starts with understanding your business, users and goals. Before designing anything, we analyze your current website, identify pain points and define opportunities for improvement.\n\nOur typical process includes Discovery, UX research, information architecture, wireframing, UI design, prototyping, development, QA and launch. Throughout the project, you\'ll have full visibility into progress, regular design reviews and direct communication with our team.\n\nWhether it\'s a landing page or a large enterprise platform, our goal is always the same: create a website that looks exceptional, performs flawlessly and helps your business grow.'
    },
    {
      q: 'What services does wegolas provide?',
      a: 'We offer end-to-end digital design and development services, allowing our clients to work with a single experienced team from strategy to launch.\n\nDepending on your needs, we can help with brand identity, UX research, product strategy, user experience design, interface design, motion design, frontend and backend development, CMS implementation, performance optimization and ongoing support.\n\nSome clients come to us for a single landing page, while others trust us to build complete digital products from the ground up. We adapt our process to every project while maintaining the same level of quality throughout.'
    },
    {
      q: 'Do you build websites using Webflow or custom code?',
      a: 'We specialize in custom code (React, TypeScript, GSAP, WebGL/Three.js, Lenis) for maximum speed, security, and unique motion animations. However, we also build Webflow sites for clients needing zero-code editing.'
    },
    {
      q: 'Can you help launch an MVP quickly?',
      a: 'Yes! We offer rapid 4-week sprint frameworks to validate early concepts, build interactive prototypes, and launch production-ready MVPs.'
    },
    {
      q: 'Which CMS do you recommend?',
      a: 'We recommend modern headless CMS solutions (Sanity, Strapi, Contentful) paired with Next.js or React for total performance and security.'
    },
    {
      q: 'Do you work on fixed-price projects or Time & Materials?',
      a: 'We accommodate both models depending on your scope certainty and flexibility requirements.'
    },
    {
      q: 'Do you offer SEO services?',
      a: 'Yes! Every website we build includes technical SEO optimization, structured metadata, fast Core Web Vitals performance, and search indexing setup.'
    },
    {
      q: 'My website has poor PageSpeed scores. Can you help improve them?',
      a: 'Absolutely. We specialize in optimizing web performance, asset compression, code-splitting, and achieving 95+ PageSpeed scores.'
    }
  ];

  // 1. KAPSAYICI (CONTAINER) VARYANTI
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  // 2. REVERSIBLE CENTRAL DECK FAN-OUT VARYANTI
  const centralDeckFanOutVariants: Variants = {
    hidden: (index: number) => {
      const stackPositions = [
        { x: 180, y: 120, rotate: -16, scale: 0.8 },
        { x: 0, y: 140, rotate: -5, scale: 0.8 },
        { x: -180, y: 120, rotate: 14, scale: 0.8 },
        { x: 140, y: -100, rotate: -10, scale: 0.8 },
        { x: -140, y: -100, rotate: 10, scale: 0.8 },
      ];
      const pos = stackPositions[index % stackPositions.length];
      return {
        opacity: 0,
        x: pos.x,
        y: pos.y,
        rotate: pos.rotate,
        scale: pos.scale,
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
        },
      };
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 14,
      },
    },
  };

  return (
    <div className="space-y-28 pb-0 font-sans">
      {/* 1. Hero Section (Screenshot 1) */}
      <section className="pt-44 pb-16 px-6 lg:px-16 text-center max-w-5xl mx-auto space-y-6 relative bg-white text-black z-10">
        <h1 className="font-syne text-5xl sm:text-7xl md:text-8xl font-extrabold text-black tracking-tighter leading-[1.02]">
          {t('heroTag')}
        </h1>

        <p className="text-gray-700 text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
          {t('heroDesc')}
        </p>
      </section>

      {/* 2. Hero Video / 3D Screen Showcase Card (Screenshot 2) */}
      <section className="px-6 lg:px-16 max-w-7xl mx-auto relative bg-white z-10">
        <div
          onMouseEnter={() => sounds.playHover()}
          data-cursor="PLAY"
          data-cursor-variant="project"
          className="relative w-full h-[60vh] md:h-[75vh] rounded-[2.5rem] bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-600 overflow-hidden shadow-2xl flex items-center justify-center cursor-pointer group"
        >
          {/* Simulated 3D Screen Monitor Mockup */}
          <div className="w-[85%] h-[80%] rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-900 border-4 border-blue-300/40 p-8 md:p-12 text-white flex flex-col justify-between shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest opacity-80 uppercase">
                CERTIFY YOUR BUILDING AS A DIGITAL TWIN TOKEN (DTT)
              </span>
              <h2 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                Experience Real <br /> Estate Agility.
              </h2>
            </div>
            <p className="text-sm md:text-lg opacity-90 max-w-xl font-light">
              The Digital Twin Token is a unique digital asset backed by property data. Magma combines your physical building metrics with WebGL real-time analytics.
            </p>
          </div>

          {/* Yellow Circular Play Button Overlay */}
          <div className="absolute w-20 h-20 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
            <Play className="w-8 h-8 fill-current translate-x-0.5" />
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO Section */}
      <section className="px-6 lg:px-16 py-24 max-w-7xl mx-auto space-y-16 relative bg-white text-black z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-black block">
              {t('whatWeDo')}
            </span>
          </div>
          <div className="md:col-span-9">
            <p className="font-syne text-2xl sm:text-4xl font-bold text-black leading-snug">
              {t('whatWeDoDesc')}
            </p>
          </div>
        </div>

        {/* Sticky Stacking Cards Container */}
        <div className="space-y-8 pb-12">
          {whatWeDoList.map((item, index) => {
            return (
              <div
                key={item.num}
                onMouseEnter={() => sounds.playHover()}
                style={{ top: `${7 + index * 1.5}rem`, zIndex: (index + 1) * 10 }}
                className={`sticky rounded-[2.5rem] ${item.bgColor} text-white p-8 md:p-14 overflow-hidden shadow-2xl border border-white/10 transition-transform duration-500 min-h-[340px] flex flex-col justify-center`}
              >
                {/* 1. ÜST KATMAN: Metin İçeriği (z-10) */}
                <div className="relative z-10 w-full md:w-3/5 space-y-5">
                  <h3 className="font-syne text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                {/* Sağ Üst Sıra Numarası (z-10) */}
                <div className="absolute top-8 md:top-12 right-8 md:right-12 z-10 text-gray-500 font-mono text-lg md:text-xl font-bold">
                  {item.num}
                </div>

                {/* 2. ALT KATMAN: Sağ Taraftaki Geometrik SVG (z-0) */}
                <div className="absolute bottom-0 right-0 md:right-8 w-64 md:w-96 z-0 pointer-events-none opacity-85">
                  {renderCardSvg(item.svgType)}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Trusted by remarkable global brands */}
      <section className="px-6 lg:px-16 py-20 bg-white border-t border-gray-100 text-center space-y-12 relative z-30">
        <h2 className="font-syne text-2xl sm:text-3xl font-extrabold text-black">
          Trusted by remarkable global brands
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-10 gap-x-8 items-center justify-items-center opacity-85">
          {clientLogos.map((logo) => (
            <span
              key={logo.name}
              onMouseEnter={() => sounds.playHover()}
              className={`${logo.font} text-xl md:text-2xl text-gray-900 hover:text-black hover:scale-105 transition-all cursor-pointer`}
            >
              {logo.name}
            </span>
          ))}
        </div>
      </section>

      {/* 5. Selected work Section */}
      <section className="bg-black text-white py-32 px-6 lg:px-16 relative z-30">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/15 pb-10">
            <h2 className="font-syne text-5xl sm:text-7xl font-extrabold tracking-tighter">
              {t('selectedWork')}
            </h2>

            <button
              onClick={() => {
                sounds.playClick();
                onNavigate('projects');
              }}
              onMouseEnter={() => sounds.playHover()}
              className="px-6 py-3 rounded-full bg-white text-black font-syne font-bold text-xs uppercase tracking-wider hover:bg-[#00F0FF] transition-colors w-fit"
            >
              {t('viewAllProjects')}
            </button>
          </div>

          {/* 2-Column Staggered Project Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start"
          >
            {selectedWorks.map((work, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <motion.div
                  key={work.id}
                  custom={idx}
                  variants={centralDeckFanOutVariants}
                  onClick={() => {
                    sounds.playClick();
                    onSelectProject(work);
                  }}
                  onMouseEnter={() => sounds.playHover()}
                  data-cursor="EXPLORE"
                  data-cursor-variant="project"
                  className={`group cursor-pointer space-y-4 ${isEven ? 'md:mt-20' : ''}`}
                >
                  {/* Card Visual Container */}
                  <div className={`w-full h-96 md:h-[32rem] rounded-[2rem] ${work.bgGradient} border border-white/10 p-8 flex flex-col justify-between overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 shadow-2xl relative`}>
                    <div className="flex items-center justify-between z-10">
                      <span className="px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-mono text-gray-300 uppercase tracking-wider border border-white/10">
                        {work.category}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="z-10 space-y-1">
                      <h3 className="font-syne text-3xl font-extrabold text-white group-hover:text-[#00F0FF] transition-colors">
                        {work.title}
                      </h3>
                      <span className="text-xs font-mono text-gray-400">{work.client} — {work.year}</span>
                    </div>
                  </div>

                  <p className="font-syne font-bold text-lg md:text-xl text-gray-200 group-hover:text-white transition-colors leading-snug max-w-xl">
                    {work.summary}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 6. Trusted by our clients */}
      <section className="bg-white text-black py-28 px-6 lg:px-16 space-y-24 relative z-30 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          <h2 className="font-syne text-5xl sm:text-7xl font-extrabold text-center tracking-tighter">
            {t('trustedClients')}
          </h2>

          {/* Reversible Viewport Deck Fan-Out */}
          <div className="space-y-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {clientQuotes.slice(0, 3).map((q, idx) => (
                <motion.div
                  key={q.logo}
                  custom={idx}
                  variants={centralDeckFanOutVariants}
                  onMouseEnter={() => sounds.playHover()}
                  className={`p-8 rounded-3xl ${q.bgColor} flex flex-col justify-between space-y-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform-gpu`}
                >
                  <div className="space-y-4">
                    <span className="text-3xl text-gray-300 font-serif font-black select-none">“</span>
                    <p className="text-gray-900 text-sm font-medium leading-relaxed">
                      {q.quote}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-300/40">
                    <span className={q.logoFont}>{q.logo}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {clientQuotes.slice(3, 5).map((q, idx) => (
                <motion.div
                  key={q.logo}
                  custom={idx + 3}
                  variants={centralDeckFanOutVariants}
                  onMouseEnter={() => sounds.playHover()}
                  className={`p-8 rounded-3xl ${q.bgColor} flex flex-col justify-between space-y-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform-gpu`}
                >
                  <div className="space-y-4">
                    <span className="text-3xl text-gray-300 font-serif font-black select-none">“</span>
                    <p className="text-gray-900 text-sm font-medium leading-relaxed">
                      {q.quote}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-300/40">
                    <span className={q.logoFont}>{q.logo}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="border-t border-gray-200 pt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-black">
                {t('whyWegolas')}
              </span>
            </div>
            <div className="md:col-span-9">
              <p className="font-syne text-xl sm:text-2xl font-semibold text-gray-900 leading-relaxed">
                {t('whyWegolasDesc')}
              </p>
            </div>
          </div>

          {/* Reversible Stat Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div custom={0} variants={centralDeckFanOutVariants} className="p-8 rounded-3xl bg-[#eef7f5] space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <Star className="w-6 h-6 text-black" />
              <div className="font-syne font-black text-4xl text-black">15+</div>
              <p className="text-xs font-mono font-bold text-gray-700 uppercase">{t('yearsExp')}</p>
            </motion.div>

            <motion.div custom={1} variants={centralDeckFanOutVariants} className="p-8 rounded-3xl bg-[#f5f4f8] space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <Award className="w-6 h-6 text-black" />
              <div className="font-syne font-bold text-xl text-black pt-4">
                Recognized by leading design awards
              </div>
            </motion.div>

            <motion.div custom={2} variants={centralDeckFanOutVariants} className="p-8 rounded-3xl bg-[#eef7f5] space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <Globe className="w-6 h-6 text-black" />
              <div className="font-syne font-black text-4xl text-black">300+</div>
              <p className="text-xs font-mono font-bold text-gray-700 uppercase">{t('deliveredWorld')}</p>
            </motion.div>

            <motion.div custom={3} variants={centralDeckFanOutVariants} className="p-8 rounded-3xl bg-[#f5f4f8] space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <Briefcase className="w-6 h-6 text-black" />
              <div className="font-syne font-bold text-xl text-black">
                Long-term Partnerships with global brands
              </div>
            </motion.div>

            <motion.div custom={4} variants={centralDeckFanOutVariants} className="p-8 rounded-3xl bg-[#f5f4f8] space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <RefreshCw className="w-6 h-6 text-black" />
              <div className="font-syne font-bold text-xl text-black">
                Strategy, design & development – all in-house
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7. Insights Section */}
      <section className="bg-black text-white py-32 px-6 lg:px-16 relative z-30">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex items-center justify-between border-b border-white/15 pb-8">
            <h2 className="font-syne text-5xl sm:text-7xl font-extrabold tracking-tighter">
              {t('insights')}
            </h2>

            <button
              onClick={() => {
                sounds.playClick();
                onNavigate('blog');
              }}
              onMouseEnter={() => sounds.playHover()}
              className="px-6 py-2.5 rounded-full border border-white/40 text-white font-syne font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              {t('visitBlog')}
            </button>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {insightsArticles.map((art, idx) => (
              <motion.div
                key={art.title}
                custom={idx}
                variants={centralDeckFanOutVariants}
                onClick={() => {
                  sounds.playClick();
                  onNavigate('blog');
                }}
                onMouseEnter={() => sounds.playHover()}
                data-cursor="READ"
                className="group cursor-pointer space-y-4"
              >
                <div className={`w-full h-72 rounded-3xl ${art.bgGradient} p-6 flex flex-col justify-end overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 shadow-2xl border border-white/10 relative`}>
                  <span className="text-black/40 font-mono text-xs font-bold uppercase tracking-widest">{art.illustrationText}</span>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">{art.category}</span>
                  <h3 className="font-syne font-bold text-lg md:text-xl text-white group-hover:text-[#00F0FF] transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <span className="text-xs font-mono text-gray-500 block pt-1">{art.date}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="bg-black text-white py-32 px-6 lg:px-16 relative z-30">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="font-syne text-5xl sm:text-7xl font-extrabold tracking-tighter text-white">
            {t('faq')}
          </h2>

          <div className="space-y-0 border-t border-white/20">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className={`border-b border-white/20 transition-all ${
                    isOpen ? 'py-6 px-4 bg-white/5 rounded-2xl my-2 border-none' : 'py-6'
                  }`}
                >
                  <button
                    onClick={() => {
                      sounds.playClick();
                      setOpenFaq(isOpen ? null : idx);
                    }}
                    onMouseEnter={() => sounds.playHover()}
                    className="w-full text-left font-syne font-bold text-lg sm:text-xl text-white flex items-center justify-between gap-6"
                  >
                    <span>{faq.q}</span>
                    <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                      {isOpen ? <X className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4 text-white" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pt-4 text-gray-300 text-sm md:text-base leading-relaxed font-light whitespace-pre-line"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
