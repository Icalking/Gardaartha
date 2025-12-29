
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900 shadow-xl py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Clickable to Home */}
          <a href="#home" className="flex-shrink-0 flex items-center gap-2 group transition-transform hover:scale-105">
            <div className="bg-amber-500 p-1.5 rounded-lg group-hover:bg-amber-400 transition-colors">
              <div className="w-6 h-6 border-2 border-slate-900 flex items-center justify-center font-bold text-slate-900 text-xs">GA</div>
            </div>
            <span className={`font-serif text-xl font-bold transition-colors ${scrolled ? 'text-white' : 'text-slate-900 md:text-white'}`}>
              Garda Artha <span className="text-amber-500">Sejahtera</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-200 hover:text-amber-500 transition-colors font-medium text-sm uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#packages"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-2 rounded-full font-bold text-sm transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20"
            >
              Mulai Investasi <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-white hover:bg-slate-800' : 'text-slate-900 md:text-white hover:bg-slate-100/10'}`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 absolute top-full left-0 w-full animate-fadeIn shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-4 text-slate-300 hover:bg-slate-800 hover:text-amber-500 rounded-xl text-base font-medium transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 px-3">
              <a 
                href="#packages"
                className="block w-full text-center bg-amber-500 text-slate-900 py-4 rounded-xl font-bold shadow-lg shadow-amber-500/20"
                onClick={() => setIsOpen(false)}
              >
                Mulai Investasi
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
