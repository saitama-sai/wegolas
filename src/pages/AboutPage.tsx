import React from 'react';
import { Sparkles, Award } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const logos = ['Yandex', 'Spark', 'TradingView', 'Tinkoff Bank', 'Bank al Etihad', 'euro auto'];

  return (
    <div className="space-y-32 pb-24 pt-36">
      {/* Hero Header */}
      <section className="px-6 lg:px-16 max-w-7xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F0FF] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ABOUT WEGOLAS</span>
        </div>
        <h1 className="font-syne text-5xl sm:text-7xl md:text-8xl font-extrabold text-white tracking-tighter">
          Creativity meets <br />
          <span className="text-[#00F0FF]">technology.</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-2xl max-w-3xl font-light">
          A tight-knit team of developers, designers, and strategists crafting digital products that inspire.
        </p>
      </section>

      {/* OUR GOAL */}
      <section className="px-6 lg:px-16 max-w-7xl mx-auto space-y-6">
        <div className="p-8 md:p-14 rounded-[2.5rem] bg-[#121216] border border-white/10 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00F0FF]">OUR GOAL</span>
          <p className="font-syne text-2xl md:text-4xl font-extrabold text-white leading-relaxed">
            From the moment our company was founded, we have helped our clients find exceptional solutions for their businesses, creating memorable brands and digital products. Our expertise grows with each year, and our accumulated experience empowers us to develop products exactly as they should be.
          </p>
        </div>
      </section>

      {/* WHAT OTHERS DON'T: Simply put, we dare */}
      <section className="px-6 lg:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00F0FF]">WHAT OTHERS DON'T</span>
          <h2 className="font-syne text-4xl sm:text-6xl font-extrabold text-white tracking-tighter">
            Simply put, <br />
            <span className="text-[#00F0FF]">we dare.</span>
          </h2>
        </div>

        <div className="lg:col-span-7 p-8 md:p-12 rounded-[2rem] bg-[#121216] border border-white/10 space-y-6 text-gray-300 leading-relaxed font-light text-base md:text-lg">
          <p>
            We make things, and we're awesome at it. wegolas is a tight-knit team of experts who are ready to tackle the most intricate puzzles when it comes to websites and mobile apps development. We love what we do and we bet on the success of each and every project we undertake.
          </p>
          <p>
            Mainstream? No, thanks. Because it's not just work, it's passion. It's not just clients, it's people. Every project we take on is important to us, and every client is a big deal. We take care of your projects, your deadlines, and your nerves no matter what, and that's a promise.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="px-6 lg:px-16 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="p-10 rounded-[2rem] bg-[#121216] border border-white/10 text-center space-y-2">
          <span className="font-syne text-5xl md:text-6xl font-extrabold text-[#00F0FF]">40+</span>
          <p className="text-xs font-mono text-gray-400 uppercase">TEAM EXPERTS</p>
        </div>
        <div className="p-10 rounded-[2rem] bg-[#121216] border border-white/10 text-center space-y-2">
          <span className="font-syne text-5xl md:text-6xl font-extrabold text-white">300+</span>
          <p className="text-xs font-mono text-gray-400 uppercase">SUCCESSFUL PROJECTS</p>
        </div>
        <div className="p-10 rounded-[2rem] bg-[#121216] border border-white/10 text-center space-y-2">
          <span className="font-syne text-5xl md:text-6xl font-extrabold text-[#00F0FF]">15</span>
          <p className="text-xs font-mono text-gray-400 uppercase">YEARS IN DIGITAL</p>
        </div>
      </section>

      {/* Agency of the Year according to Awwwards */}
      <section className="px-6 lg:px-16 max-w-7xl mx-auto space-y-8">
        <div className="p-8 md:p-14 rounded-[2.5rem] bg-gradient-to-r from-white/10 to-[#121216] border border-white/15 space-y-4">
          <div className="flex items-center gap-3 text-[#00F0FF]">
            <Award className="w-6 h-6" />
            <span className="font-mono text-xs uppercase tracking-widest font-bold">INTERNATIONAL RECOGNITION</span>
          </div>
          <h2 className="font-syne text-3xl md:text-5xl font-extrabold text-white">
            Agency of the Year according to Awwwards
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed font-light">
            We know winning isn't everything. However, among the many awards we've received, we highlight the most prestigious and respected among international design communities: the Awwwards...
          </p>
        </div>

        {/* Reference Logos */}
        <div className="pt-6">
          <span className="text-xs font-mono uppercase tracking-widest text-gray-500 block mb-6">PROUDLY TRUSTED BY</span>
          <div className="flex flex-wrap items-center justify-between gap-8 opacity-70">
            {logos.map((logo) => (
              <span key={logo} className="font-syne font-bold text-xl text-gray-300 tracking-wider hover:text-[#00F0FF] transition-colors">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="px-6 lg:px-16 max-w-5xl mx-auto space-y-6">
        <div className="p-8 md:p-12 rounded-[2rem] bg-[#121216] border border-white/10 space-y-4 text-gray-300 text-base md:text-lg font-light leading-relaxed">
          <h3 className="font-syne text-2xl font-extrabold text-white mb-2">Our Founding Journey</h3>
          <p>
            Founded in 2010. Initially, we were a small boutique studio developing designs for sites and mobile applications. Today, wegolas has grown to a full-cycle agency with attested design expertise.
          </p>
          <p>
            We are recognized among the TOP design agencies according to the most popular design communities in the world.
          </p>
        </div>
      </section>
    </div>
  );
};
