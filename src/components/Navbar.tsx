import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { sounds } from './SoundEffects';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onOpenMenu: () => void;
  onOpenEstimator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenMenu,
  onOpenEstimator,
}) => {
  const [soundEnabled, setSoundEnabled] = useState(sounds.isEnabled());

  const handleToggleSound = () => {
    const nextState = sounds.toggleSound();
    setSoundEnabled(nextState);
  };

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'blog', label: 'Blog' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-6 py-6 lg:px-16 flex items-center justify-between bg-white/80 backdrop-blur-md transition-colors duration-300">
      {/* Brand Logo */}
      <button
        onClick={() => {
          sounds.playClick();
          onNavigate('home');
        }}
        onMouseEnter={() => sounds.playHover()}
        data-cursor="HOME"
        className="font-syne font-extrabold text-2xl tracking-tighter text-black hover:opacity-75 transition-opacity"
      >
        wegolas<span className="text-[#00F0FF]">.</span>
      </button>

      {/* Right Navigation & Action Buttons */}
      <div className="flex items-center gap-6 md:gap-8">
        {/* Desktop Text Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                sounds.playClick();
                onNavigate(item.id);
              }}
              onMouseEnter={() => sounds.playHover()}
              data-cursor="NAV"
              className={`text-sm font-medium transition-colors ${
                activePage === item.id ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Contacts Black Pill Button */}
        <button
          onClick={() => {
            sounds.playClick();
            onOpenEstimator();
          }}
          onMouseEnter={() => sounds.playHover()}
          data-cursor="ESTIMATE"
          className="px-6 py-2.5 rounded-full bg-black text-white font-syne font-bold text-xs tracking-wider uppercase hover:bg-gray-800 transition-colors shadow-sm"
        >
          Contacts
        </button>

        {/* Sound Toggle Button */}
        <button
          onClick={handleToggleSound}
          onMouseEnter={() => sounds.playHover()}
          data-cursor={soundEnabled ? "SOUND OFF" : "SOUND ON"}
          aria-label="Toggle Sound"
          className="p-2.5 rounded-full bg-gray-100 text-gray-700 hover:text-black hover:bg-gray-200 transition-all"
        >
          {soundEnabled ? <Volume2 className="w-4 h-4 text-black" /> : <VolumeX className="w-4 h-4 opacity-50" />}
        </button>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => {
            sounds.playClick();
            onOpenMenu();
          }}
          onMouseEnter={() => sounds.playHover()}
          className="md:hidden p-2 rounded-full text-black hover:bg-gray-100"
          aria-label="Open Menu"
        >
          <div className="w-5 h-0.5 bg-black mb-1.5" />
          <div className="w-5 h-0.5 bg-black" />
        </button>
      </div>
    </header>
  );
};
