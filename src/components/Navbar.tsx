import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Check, ChevronDown } from 'lucide-react';
import { sounds } from './SoundEffects';
import { useLanguage, LANGUAGES } from '../context/LanguageContext';

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
  const [langOpen, setLangOpen] = useState(false);
  const { setLanguage, t, currentLangObj } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggleSound = () => {
    const nextState = sounds.toggleSound();
    setSoundEnabled(nextState);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { id: 'services', label: t('navServices') },
    { id: 'projects', label: t('navProjects') },
    { id: 'about', label: t('navAbout') },
    { id: 'blog', label: t('navBlog') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 py-4 md:py-6 lg:px-16 flex items-center justify-between bg-white/80 backdrop-blur-md transition-colors duration-300 max-w-full overflow-hidden">
      {/* Brand Logo */}
      <button
        onClick={() => {
          sounds.playClick();
          onNavigate('home');
        }}
        onMouseEnter={() => sounds.playHover()}
        data-cursor="HOME"
        className="font-syne font-extrabold text-xl sm:text-2xl tracking-tighter text-black hover:opacity-75 transition-opacity shrink-0"
      >
        wegolas<span className="text-[#00F0FF]">.</span>
      </button>

      {/* Right Navigation & Action Buttons */}
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6 shrink-0">
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

        {/* Contacts Black Pill Button (Visible on tablet & desktop) */}
        <button
          onClick={() => {
            sounds.playClick();
            onOpenEstimator();
          }}
          onMouseEnter={() => sounds.playHover()}
          data-cursor="ESTIMATE"
          className="hidden sm:inline-flex px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-black text-white font-syne font-bold text-xs tracking-wider uppercase hover:bg-gray-800 transition-colors shadow-sm shrink-0"
        >
          {t('navContacts')}
        </button>

        {/* Sound Toggle Button */}
        <button
          onClick={handleToggleSound}
          onMouseEnter={() => sounds.playHover()}
          data-cursor={soundEnabled ? "SOUND OFF" : "SOUND ON"}
          aria-label="Toggle Sound"
          className="p-2 sm:p-2.5 rounded-full bg-gray-100 text-gray-700 hover:text-black hover:bg-gray-200 transition-all shrink-0"
        >
          {soundEnabled ? <Volume2 className="w-4 h-4 text-black" /> : <VolumeX className="w-4 h-4 opacity-50" />}
        </button>

        {/* Top-Right Language Switcher Dropdown */}
        <div className="relative shrink-0" ref={dropdownRef}>
          <button
            onClick={() => {
              sounds.playClick();
              setLangOpen(!langOpen);
            }}
            onMouseEnter={() => sounds.playHover()}
            data-cursor="LANG"
            className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-gray-100 border border-gray-200 text-black hover:bg-gray-200 font-syne font-bold text-xs tracking-wider transition-all"
          >
            <span className="text-sm">{currentLangObj.flag}</span>
            <span>{currentLangObj.code}</span>
            <ChevronDown className={`w-3.5 h-3.5 text-gray-500 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Language Selection Menu */}
          {langOpen && (
            <div className="absolute right-0 mt-3 w-48 rounded-2xl bg-black/95 backdrop-blur-xl border border-white/15 shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="text-[10px] font-mono text-gray-400 px-3 py-1.5 uppercase tracking-widest border-b border-white/10 mb-1">
                Select Language
              </div>

              <div className="space-y-0.5 max-h-64 overflow-y-auto custom-scrollbar">
                {LANGUAGES.map((lang) => {
                  const isSelected = currentLangObj.code === lang.code;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => {
                        sounds.playClick();
                        setLanguage(lang.code);
                        setLangOpen(false);
                      }}
                      onMouseEnter={() => sounds.playHover()}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors ${
                        isSelected
                          ? 'bg-white/15 text-[#00F0FF] font-bold'
                          : 'text-gray-300 hover:bg-white/10 hover:text-white font-medium'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">{lang.flag}</span>
                        <span>{lang.nativeName}</span>
                      </div>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#00F0FF]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => {
            sounds.playClick();
            onOpenMenu();
          }}
          onMouseEnter={() => sounds.playHover()}
          className="md:hidden p-2 rounded-full text-black hover:bg-gray-100 shrink-0"
          aria-label="Open Menu"
        >
          <div className="w-5 h-0.5 bg-black mb-1.5" />
          <div className="w-5 h-0.5 bg-black" />
        </button>
      </div>
    </header>
  );
};
